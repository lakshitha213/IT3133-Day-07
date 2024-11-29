# IT3133-Day-07

# React Project - Single Page Application

This project is a simple Single Page Application (SPA) built using React. It consists of various pages, each implemented as a functional React component.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [App.js Code](#appjs-code)
- [Components Overview](#components-overview)

---

## Project Overview

This application serves as a template for a React-based SPA. It contains basic implementations of:
- Home page
- About Us page
- Contact Us page
- Admin Dashboard
- Login page with basic authentication logic

---

## Features

- **Navigation**: Easily navigable through React Router.
- **Authentication**: A simple login feature with hardcoded credentials.
- **Responsive Design**: Built using React functional components with inline styles.

---

## File Structure

```plaintext
src/
├── components/
│   ├── AboutUs.js
│   ├── Contactus.js
│   ├── Dashboard.js
│   ├── Home.js
│   └── Login.js
├── App.js
├── index.js
└── package.json
```

## Setup and Installation

1. **Install dependencies**:
   ```
   npm install react-router-dom
   ```

## Run the Application

2. **Run the development server**:
   ```bash
   npm start
   ```
## Access the Application

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate between different pages using the navigation bar.
- Use the following credentials to log in as an admin:
  - **Username**: Admin
  - **Password**: abc@123
- Upon successful login, you will be redirected to the Dashboard.

## Components Overview

### 1. AboutUs.js

- Displays a static "About Us" page.  
- **Content**:
  ```html
  <h1>Welcome to About page</h1>
  ```
## Components Overview

### 2. Contactus.js

- Displays a static "Contact Us" page.  
- **Content**:
  ```html
  <h1>Welcome to Contact us page</h1>
  ```
  ## Components Overview

### 3. Dashboard.js

- Displays an admin dashboard with a simple greeting message.  
- **Content**:
  ```html
  <h1>Hello Admin</h1>
  ```
## Components Overview

### 4. Home.js

- Displays a static "Home" page.  
- **Content**:
  ```html
  <h1>Welcome to Home page</h1>
  ```
  ## Components Overview

### 5. Login.js

- A functional component implementing a login form.  
- **Features**:
  - Username and password inputs.
  - Error handling for incorrect credentials.
  - Navigation to the dashboard upon successful login.

---

## Future Improvements

- Add a database for dynamic content and user management.
- Implement better authentication with JWT or OAuth.
- Add styling using CSS frameworks like Bootstrap or Material-UI.
- Enhance routing with protected routes for the dashboard.

  

