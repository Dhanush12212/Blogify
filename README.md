# Blogify - A Modern Blogging Platform

Blogify is your go-to full-stack blogging platform, designed to make content creation seamless and enjoyable. Whether you're a casual writer or a professional blogger, Blogify empowers you to create, edit, and share your thoughts effortlessly.

## Features

- **User Authentication**: Secure Sign-up/Login with JWT authentication.
- **Create, Edit, & Delete Blogs**: Manage your content effortlessly
- **Rich-Text Editor**: Supports images, formatting, markdown, and more
- **Engage with your audience**: Engage with your audience
- **Dark Mode & Light Mode**: A UI that adapts to your style
- **Social Media Sharing**: Share your blogs with the world


## Tech Stack

### Frontend
- **React.js**: For buildin
- **React Router**: Smooth navigation experience
- **Axios** : Efficient API requests
- **React-Quill**: Powerful rich-text editorg the user interface. 

### Backend
- **Node.js**: JavaScript runtime for server-side scripting.
- **Express.js**: Web framework for building the API.  
- **MongoDB**: NoSQL database for storing user and post data.
- **JWT & bcrypt.js** – Authentication & security
- **dotenv** – Manage environment variables

- **Database**: MongoDB Atlas (Cloud-based, scalable, and secure)

## Instructions

1. Clone the project:

   - Firstly, clone the project using the command:  https://github.com/Dhanush12212/Blogify.git


2. Install Packages:

   - Install the required packages by navigating to the backend directory: `cd backend` and then run `npm install`.
   - Similarly, move to the frontend directory: `cd frontend` and execute `npm install`.


3. Environment Variables:
   - Create a .env file in the root directory and add:

    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key   
 
5. Start Backend Server:

   - Start the backend server using the command: `cd backend` and then `npm app.js`.

6. Start Frontend:

   - Finally, initiate the frontend with the command: `cd frontend` and then `npm run dev`.

7. Open `http://localhost:3000` with your browser to see the app

 
