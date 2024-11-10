# Wanderlust - A Travel Listing App

This is a full-stack web application built using Node.js, Express, MongoDB, and EJS. It allows users to create, read, update, and delete listings for travel destinations, and includes features like user authentication, image uploads, and reviews.

## Live Link :
- https://wanderlust-qyat.onrender.com

## Features

- **User Authentication:** Users can create accounts, login, and logout securely.
- **Listing Creation:** Users can add listings for travel destinations, including details like location, description, price, and images.
- **Listing Management:** Users can edit or delete their own listings.
- **Review System:** Users can write reviews on listings, including ratings and comments.
- **Image Uploads:** Users can upload images to their listings using Cloudinary for secure storage and image optimization.
- **User-friendly Interface:** The application is designed with a clean and intuitive user interface.

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Templating Engine:** EJS
- **Authentication:** Passport.js
- **Image Uploads:** Cloudinary
- **Form Validation:** Joi
- **Session Management:** Express-Session
- **Error Handling:** Custom ExpressError class

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imprince26/wanderlust.git
2. **Install dependencies:**   
   ```bash
   npm install
3. **Create a .env file:**   
   - Copy the contents of the .env.example file to a new file named .env.
   - Replace the placeholder values with your own Cloudinary credentials, MongoDB connection string, and secret key.
4. **Start the server:**
   ```bash
   node app.js
5. **Running the Application**
   - The application will be running on port 8000 by default. You can access it by opening your web browser and navigating to http://localhost:8000.
