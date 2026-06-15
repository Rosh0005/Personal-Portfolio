# Personal Portfolio Website — FUTURE_FS_01

A full-stack personal portfolio website built as Task 1 of my Full Stack Web Development Internship at Future Interns.

## 🛠️ Tech Stack

Frontend:
- React.js (Vite)
- CSS3

Backend:
- Node.js
- Express.js

Database:
- MySQL

## ✨ Features
- Responsive single-page portfolio
- Skills, Projects, Experience and Education sections
- Contact form that saves messages to MySQL database via REST API

## 📁 Project Structure
```
FUTURE_FS_01/
├── client/     ← React frontend
├── server/     ← Node.js + Express backend
└── README.md
```

## 🚀 Setup Instructions

Frontend:
```bash
cd client
npm install
npm run dev
```

Backend:
```bash
cd server
npm install
npm run dev
```

Database:
Create a `.env` file inside `/server`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
PORT=5000
```
Then run this SQL:
```sql
CREATE DATABASE portfolio_db;
USE portfolio_db;
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 👩‍💻 Author
Roshani — [GitHub](https://github.com/Rosh0005) | [LinkedIn](https://www.linkedin.com/in/roshani-jha-19767236a/)
