// // server.js

// // Bring in express framework / path framework
// // require("dotenv").config();
// // const {createClient} = require('@supabase/supabase-js');

// const express = require("express");
// const path = require('path');
// // const { compileFunction } = require("vm");

// // instantiate variable app w/ instance of express
// const app = express()
// const PORT = process.env.PORT || 3000;

// // Register template engine
// app.set('view engine', 'ejs')

// // 2. (Optional) Explicitly set the views directory
// app.set('views', path.join(__dirname, 'views'));

// // SERVE FILES
// // res.sendFile()// use this to send static HTML files (no template engines)

// app.get("/", (req,res) =>{
//      // Renders 'views/index.ejs' + brings in partials to index file
//     res.render('index')
// })



// // Start server listening on specified port
// app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);
// });




// // // 1. Serve static files from 'public' directory
// app.use(express.static("public"));

// **********************//
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


// SERVE FILES

// app.get("/", (req,res) =>{
//    const userData ={
//     name: "Colin",
//     items: ["keys", "computer", "cell phone"],
//    }
//     res.render("index", userData)
//     // res.sendFile()// use this to send static HTML files (no template engines)
// })

// Route for Live Content from Supabase DB
app.get('/', async (req, res) => {
    res.render("index.ejs")
});



// 1. Serve compiled static frontend assets from 'public' directory
app.use(express.static(path.join(__dirname, "public")));
