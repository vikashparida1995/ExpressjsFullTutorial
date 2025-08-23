const prcessValue = require('dotenv').config()
const https = require("https");
const express = require("express");
const PORT = process.env.PORT || 9000;
const path = require("path");
const fs = require("fs");
const helmet = require('helmet')
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const  cors = require('cors');
const  cookieSession = require('cookie-session');
const  {verify}  = require('crypto')
const app = express();

app.use(cors())
// const { verify } = require("crypto");

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
];

const users = [
  { id: 1, name: "vikash parida" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
  { id: 4, name: "Alice Johnson" },
  { id: 5, name: "Bob Brown" },
  { id: 6, name: "Charlie White" },
  { id: 7, name: "Diana Green" },
  { id: 8, name: "Ethan Blue" },
  { id: 9, name: "Fiona Black" },
  { id: 10, name: "George Yellow" },
  { id: 11, name: "Hannah Purple" },
  { id: 12, name: "Ian Orange" },
  { id: 13, name: "Jack Pink" },
  { id: 14, name: "Kathy Gray" },
  { id: 15, name: "Liam Cyan" },
  { id: 16, name: "Aachal vikash parida" },
];

const config = {
  CLIENT_ID: process.env.ENV_CLIENT_ID,
  CLIENT_SECRET: process.env.ENV_CLIENT_SECRET,
  SERCET_KEY1 : process.env.ENV_SERCET_KEY1,
  SERCET_KEY2 : process.env.ENV_SERCET_KEY2,
};

// console.log(process.env.GOOGLE_CLIENT_ID)
const AUTH_OPTION = {
      callbackURL: "/auth/google/callback",
      clientID: config.CLIENT_ID,
      clientSecret: config.CLIENT_SECRET
    }

app.use(helmet());
    
app.use(cookieSession({
  name:'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys : [config.SERCET_KEY1,config.SERCET_KEY2]
}))
    

function verifyCallback(accessToken, refreshToken, profile, done) {
  // console.log("googleProfile", profile);
  done(null, profile);
  return
}


passport.use(new Strategy(AUTH_OPTION, verifyCallback));


passport.serializeUser((user,done)=>{
  done(null,user)
})


passport.deserializeUser((obj,done)=>{
  done(null,obj)
})

app.use(passport.initialize());
app.use(passport.session());


function checkLoginIn(req, res, next) {
  let reqUser = req.user
  console.log(reqUser)
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in !",
    });
  }
  next();
}

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/auth/google", passport.authenticate('google',{
    scope:  ["profile", "email"] 
  })

  );

app.get("/auth/google/callback", passport.authenticate("google",{
        failureRedirect: "/failure",
        sucessRedirect: "/",
        session: true,
    }),(req, res) => {
        console.log("google call us back");
        res.end()
        return;
    }
);


app.get("/failure", (req, res) => {
  return res.send("Failed to logi in !");
});


app.get("/auth/logout", (req, res) => {
  return res.end("logout");
});


app.get("/secret", checkLoginIn, (req, res, next) => {
  return res.status(200).send("Your personal sercet value 42 !");
});


app.get("/api/users", (req, res) => {
  // This is the users route
  const { name, value } = req.query;
  // Optional query parameter for filtering by name

  if (!name && !value) {
    return res.status(200).json(users); // Return all users if no query parameters are provided
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  console.log(filteredUsers);
  return res.status(200).json(filteredUsers);
});

app.get("/api/users/:id", (req, res) => {
  // This is the user by ID route
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.status(200).json(user);
});

app.get("/api/products", (req, res) => {
  // This is the about route

  return res.status(200).send(products);
});

app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productsKey = req.query.name; // Optional query parameter

  if (isNaN(productId)) {
    return res.status(400).json({ error: "Invalid product ID" });
  }

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  return res.status(200).json(product[productsKey] || product);
});

const options = {
  key: fs.readFileSync(path.join(__dirname, "TSL", "localhost.key")),
  cert: fs.readFileSync(path.join(__dirname, "TSL", "localhost.crt")),
};

let server = https.createServer(options, app);
server.listen(PORT, (error) => {
  if (error) {
    return console.error(`Error starting server: ${error}`);
  }
  console.log(`Server is running on port ${PORT}`);
});
