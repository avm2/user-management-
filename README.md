# MERN User Management Application

A full-stack user management system built using the MERN stack principles with MySQL and Sequelize.  
This project implements secure authentication, role-based access control, email verification, and a responsive UI.

## 🚀 Features

### Authentication & Security
- User registration with profile image upload
- Email verification
- Login with JWT (Access & Refresh Tokens)
- Forgot & Reset Password functionality
- Password hashing using bcrypt
- Secure API access using middleware

### Role-Based Access Control (RBAC)
- USER and ADMIN roles
- Admin-only access to user list
- Backend-enforced authorization using JWT roles

### User Management
- View own profile
- Admin can view all users
- Pagination & search for users

### Performance & Utilities
- Redis integration (token & caching support)
- Multer for image uploads
- Sequelize ORM with MySQL
- Express validation & middleware

### Frontend
- React + Vite
- React Hook Form for validation
- Axios with interceptors
- Responsive UI (mobile, tablet, desktop)
- Header & footer with conditional navigation


## 🛠 Tech Stack

**Frontend**
- React (Vite)
- React Router
- Axios
- React Hook Form
- CSS (Responsive)

**Backend**
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Redis
- JWT
- Nodemailer
- Multer

==========================================================================================

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone <repository-url>
cd user

