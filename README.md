# 📝 Shared-Wishlish-Backend

This is the **backend** portion of the full-stack **Shared-Wishlish-Backend** application — a collaborative wishlist manager. It exposes RESTful APIs to handle user authentication, wishlist creation, product management, and more.

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building REST APIs
- **MongoDB** – NoSQL database for storing users, wishlists, and products
- **Mongoose** – ODM to interact with MongoDB
- **JWT (jsonwebtoken)** – For secure authentication
- **bcryptjs** – For hashing passwords
- **dotenv** – For environment variable management
- **CORS** – To enable cross-origin requests

---

## 📁 Folder Structure
backend/
├── models/ # Mongoose schemas for User and Wishlist
├── routes/ # Express route handlers (auth, wishlists)
├── controllers/ # (Optional) Logic separation for clean routes
├── server.js # Entry point of the backend server
├── .env # Environment variables
├── package.json # Dependencies and scripts
└── README.md # You’re here!


---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Shared-Wishlist-Backend.git
   cd Shared-Wishlist-Backend

Install Dependencies
- npm install

Configure Environment
Create a .env file in the backend/ folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

Now start the server -
- npm start
