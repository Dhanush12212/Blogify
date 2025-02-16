Blogify - A Modern Blogging Platform

Blogify is a full-stack blogging platform that allows users to create, edit, and share blog posts seamlessly. It offers an intuitive user experience, rich-text editing, authentication, and content management features.

🚀 Features

User Authentication (Sign up, Login, JWT authentication)

Create, Edit, and Delete Blogs

Rich-Text Editor (Supports images, formatting, and markdown)

Comment and Like System

Categories & Tags for Better Organization

User Profiles & Personalized Dashboard

Search & Filtering Options

Dark Mode & Light Mode

SEO Optimization

Social Media Sharing

🛠️ Tech Stack

Frontend (Client-side)

React.js

React Router

Axios (for API requests)

React-Quill (for rich-text editing)

Backend (Server-side)

Node.js & Express.js

MongoDB & Mongoose (Database)

JWT & bcrypt.js (Authentication & Security)

dotenv (Environment variable management)

Deployment

Frontend: Vercel / Netlify

Backend: Render / Railway

Database: MongoDB Atlas

📂 Project Structure

Blogify/
├── client/       # Frontend (React.js)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/       # Backend (Node.js + Express)
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md

🚀 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/blogify.git
cd blogify

2️⃣ Backend Setup

cd server
npm install

Create a .env file and add your MongoDB URI & JWT Secret:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the backend:

npm start

3️⃣ Frontend Setup

cd ../client
npm install
npm start

📜 API Endpoints

Auth Routes

POST /api/auth/register - User registration

POST /api/auth/login - User login

Blog Routes

POST /api/blogs - Create a new blog

GET /api/blogs - Fetch all blogs

GET /api/blogs/:id - Fetch a specific blog

PUT /api/blogs/:id - Update a blog

DELETE /api/blogs/:id - Delete a blog