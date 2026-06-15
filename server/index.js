const express = require("express")
const cors = require("cors")
require("dotenv").config()
const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" })
})

// Contact form route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: "All fields are required." })
  }

  const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)"
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error("❌ DB Error:", err.message)
      return res.status(500).json({ success: false, msg: "Database error." })
    }
    console.log("✅ New message saved:", result.insertId)
    res.json({ success: true, msg: "Message received!" })
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})