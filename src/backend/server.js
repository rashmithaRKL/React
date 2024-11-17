const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

// Set up MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Update with your MySQL credentials
  password: "Rashmitha.rt1",
  database: "ecommerce_project",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to the database");
  }
});

// Fetch Best Sellers (using `best_sellers` table)
app.get("/api/products/best-sellers", (req, res) => {
  const query = `
    SELECT p.id, p.name, p.price, p.imageUrl
    FROM products p
    INNER JOIN best_sellers bs ON p.id = bs.product_id;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching best sellers:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

// Fetch New Arrivals (using `new_arrivals` table)
app.get("/api/products/new-arrivals", (req, res) => {
  const query = `
    SELECT p.id, p.name, p.price, p.imageUrl
    FROM products p
    INNER JOIN new_arrivals na ON p.id = na.product_id;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching new arrivals:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

// If you decide to use boolean columns in the products table:
app.get("/api/products/best-sellers", (req, res) => {
  const query = `
    SELECT id, name, price, imageUrl
    FROM products
    WHERE is_best_seller = TRUE;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching best sellers:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

app.get("/api/products/new-arrivals", (req, res) => {
  const query = `
    SELECT id, name, price, imageUrl
    FROM products
    WHERE is_new_arrival = TRUE;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching new arrivals:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
