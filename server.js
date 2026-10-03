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
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

// Required for parsing inbound JSON payloads from form body
app.use(express.json()); 

// Initialize Supabase DB client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
// const ordersTable = process.env.orders_table;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 1. Serve compiled static frontend assets from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

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

// Navigate: to orders page
app.get('/orders', (req, res) => {
    res.sendFile(`C:/Users/Cessn/OneDrive/Desktop/git_cloned_repositories/starbucks/pages/orders.html`);
});

// CREATE / Place new order
app.post('/create_order', async (req, res) => {
  try {
    const { customerName, drinkType } = req.body;

    // Basic server-side validation
    if (!customerName || !drinkType) {
      return res.status(400).json({ error: 'Customer name and drinkType are required.' });
    }

    const { data, error } = await supabase
      .from('orders')
      .insert([{ customer_name: customerName, drinkType: drinkType}])
      .select();

    if (error) throw error;

    return res.status(201).json({ message: 'Order created successfully', order: data[0] });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

// res.send("orders - place a new order")
});

// 2. READ: Retrieve all orders
app.get('/get_orders', async (req, res) => {
  // try {
  //   const { data, error } = await supabase
  //     .from('orders')
  //     .select('*')
  //     .order('created_at', { ascending: false });

  //   if (error) throw error;

  //   return res.status(200).json(data);
  // } catch (err) {
  //   return res.status(500).json({ error: err.message });
  // }
  res.send("orders - get/read all orders")
});

// 3. DELETE: Cancel/Remove an order by ID
app.get('/orders/id', async (req, res) => {
  // try {
  //   const { id } = req.params;

  //   const { data, error } = await supabase
  //     .from('orders')
  //     .delete()
  //     .eq('id', id)
  //     .select();

  //   if (error) throw error;

  //   if (!data || data.length === 0) {
  //     return res.status(404).json({ error: 'Order not found.' });
  //   }

  //   return res.status(200).json({ message: 'Order cancelled successfully', deletedOrder: data[0] });
  // } catch (err) {
  //   return res.status(500).json({ error: err.message });
  // }

  res.send("orders - Delete order by ID")
});


// Keep local port listener for running 'npm start or node server.js' on local machine:
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export express app (required for vercel deployments!)
module.exports = app;