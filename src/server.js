const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const   products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
        { id: 5, name: 'Product 5', price: 500 },
    ];

    const users = [
        { id: 1, name: 'vikash parida' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'John Smith' },
        { id: 4, name: 'Alice Johnson' },
        { id: 5, name: 'Bob Brown' },
        { id: 6, name: 'Charlie White' },
        { id: 7, name: 'Diana Green' },
        { id: 8, name: 'Ethan Blue' },
        { id: 9, name: 'Fiona Black' },
        { id: 10, name: 'George Yellow' },
        { id: 11, name: 'Hannah Purple' },
        { id: 12, name: 'Ian Orange' },
        { id: 13, name: 'Jack Pink' },
        { id: 14, name: 'Kathy Gray' },
        { id: 15, name: 'Liam Cyan' },
        { id: 16, name: 'Aachal parida'},

    ];
app.get('/', (req, res) => {  // This is the root route 

return res.send('Hello World!');
}  );   

app.get('/api/users', (req, res) => { 
    // This is the users route
    const { name,value} = req.query; 
    // Optional query parameter for filtering by name
    
    if (!name && !value) {
        return res.status(200).json(users); // Return all users if no query parameters are provided   
    }   

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    console.log(filteredUsers);
    return res.status(200).json(filteredUsers);
    
}
);

app.get('/api/users/:id', (req, res) => {  // This is the user by ID route
    const userId = parseInt(req.params.id, 10);     
    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID' });
    }
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
}); 

app.get('/api/products', (req, res) => {  // This is the about route
  
    return res.status(200).send(products);                        
}); 

app.get('/api/products/:id',(req,res)=>{
    const productId = parseInt(req.params.id);
    const productsKey = req.query.name; // Optional query parameter

    if (isNaN(productId)) {
        return res.status(400).json({ error: 'Invalid product ID' });
    }
   
    const product = products.find(p => p.id === productId);
    if (!product) {     
        return res.status(404).json({ error: 'Product not found' });
    }               
    return res.status(200).json(product[productsKey] || product);
})

app.listen(PORT, (error) => {  
    if (error) {
        return console.error(`Error starting server: ${error}`);
    }
    console.log(`Server is running on port ${PORT}`);
});