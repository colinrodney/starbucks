// server.js

// Bring in express framework / path framework
require("dotenv").config();
const {createClient} = require('@supabase/supabase-js');

const express = require("express");
const path = require('path');
const { compileFunction } = require("vm");

// instantiate variable app w/ instance of express
const app = express()
const PORT = process.env.PORT || 3000;

// Register template engine
app.set('view engine', 'ejs')

// Initialize Supabase DB client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);


app.get('/', (req, res) => {
    res.render('index');
});

// Route for Live Content from Supabase DB
app.get('/admin/cms', async (req, res) => {
    try {
        // Fetch all rows from a table named "products" 
        const { data: products, error } = await supabase
        .from('products')
        .select('*')
        // .order('created_at', { ascending: false });

        if (error) {
            throw error;
        }

        // Render the EJS page and pass the data arrays
        res.render('cms-dashboard', { products: products });
        
    } catch (error) {
        console.error('Error fetching data from Supabase:', error.message);
        res.status(500).send('Internal Server Error');
    }
});


// 1. Serve compiled static frontend assets from 'public' directory
app.use(express.static(path.join(__dirname, "public")));


// Keep local port listener for running 'npm start or node server.js' on local machine:
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export express app (required for vercel deployments!)
module.exports = app;