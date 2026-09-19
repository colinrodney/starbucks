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

// Start server listening on specified port
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);
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

app.get('/', (req, res) => {
    res.render('index');
})

// 1. Serve compiled static frontend assets from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

