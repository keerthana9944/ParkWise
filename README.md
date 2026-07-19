# 🚗 ParkWise

> A Smart Parking Slot Booking and Management System built using the MERN Stack.

ParkWise is a full-stack web application that allows users to discover, book, and manage parking spaces while enabling parking owners to manage their parking facilities efficiently. The project is being developed following industry-standard software engineering practices with proper Git workflow, documentation, pull requests, and modular architecture.

---

# 📌 Project Status

🚧 **Currently Under Development**

Current Phase: **User Model Completed**

---

# 🎯 Project Objectives

- Simplify parking space discovery and booking.
- Enable parking owners to manage parking lots and slots.
- Provide administrators with complete system management.
- Support secure authentication and authorization.
- Build a scalable backend using REST APIs.
- Follow professional GitHub workflow and documentation practices.

---

# 👥 User Roles

### 👤 Customer

- Register and login
- Search nearby parking
- View slot availability
- Book parking slots
- Make payments
- View booking history
- Receive notifications

### 🅿️ Parking Owner

- Register parking locations
- Manage parking slots
- View bookings
- Track revenue
- Update parking availability

### 🛡️ Admin

- Manage users
- Approve parking owners
- Monitor bookings
- Manage reports
- Block/unblock users

---

# 🛠️ Tech Stack

## Frontend

- React (Vite)
- React Router
- Axios
- Tailwind CSS *(Upcoming)*

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT *(Upcoming)*
- bcrypt *(Upcoming)*

## Tools

- Git & GitHub
- Postman
- MongoDB Atlas
- VS Code

---

# 📁 Project Structure

```text
ParkWise/
│
├── frontend/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │
│   │   ├── middleware/
│   │   │
│   │   ├── models/
│   │   │   └── User.js
│   │   │
│   │   ├── routes/
│   │   │
│   │   ├── services/
│   │   │
│   │   ├── utils/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── docs/
│
├── README.md
│
└── .gitignore
```

---

# ✅ Milestones Completed

## ✅ Milestone 1 – Project Setup

Completed:

- Project folder structure
- Backend initialization
- Express server setup
- Environment configuration
- MongoDB Atlas connection
- Git repository setup

---

## ✅ Milestone 2 – Database Design

### Collections

- Users
- Parkings
- Slots
- Bookings
- Payments
- Notifications

### Relationships

- User → Parking (1:N)
- Parking → Slot (1:N)
- User → Booking (1:N)
- Slot → Booking (1:N)
- Booking → Payment (1:1)
- User → Notification (1:N)

---

## ✅ Milestone 3 – User Model

Implemented the User schema using Mongoose.

### Fields

| Field | Type | Description |
|--------|------|-------------|
| name | String | User's full name |
| email | String | Unique email |
| password | String | User password |
| phone | String | Unique phone number |
| role | String | user / owner / admin |
| profileImage | String | User profile image |
| isVerified | Boolean | Email verification status |
| isBlocked | Boolean | Account block status |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Features

- Required field validation
- Unique email
- Unique phone
- User roles using Enum
- Default values
- Automatic timestamps

---

# 🗄️ Database Design

## Collections

```text
users

parkings

slots

bookings

payments

notifications
```

---

# 🔗 Entity Relationships

```text
User
 │
 ├──────────────┐
 │              │
 ▼              ▼
Parking      Booking
 │              │
 ▼              ▼
Slot       Payment

User
 │
 ▼
Notification
```

---

# 📦 Installed Packages

### Dependencies

```bash
express
mongoose
dotenv
cors
bcrypt
jsonwebtoken
cookie-parser
express-validator
```

### Development Dependencies

```bash
nodemon
```

---

# 🚀 Scripts

```bash
npm run dev
```

Runs the backend server using Nodemon.

```bash
npm start
```

Runs the production server.

---

# 🌿 Git Workflow

This project follows a feature branch workflow.

```text
main
│
├── feature/project-setup
├── feature/database-design
├── feature/user-model
├── feature/authentication
├── feature/parking-module
├── feature/slot-module
├── feature/booking-module
├── feature/payment-module
├── feature/frontend
└── feature/deployment
```

Each feature is developed in a separate branch and merged through a Pull Request.

---

# 📝 Commit Convention

This project follows Conventional Commits.

Examples:

```text
feat(user): implement User model

feat(auth): add JWT authentication

fix(auth): resolve login validation

docs(readme): update project documentation

refactor(user): improve schema structure
```

---

# 📚 Documentation

Project documentation is maintained alongside development.

```text
docs/
│
├── CHANGELOG.md
├── DATABASE.md
├── API.md
├── ARCHITECTURE.md
└── SETUP.md
```

---

# 📈 Current Progress

- ✅ Project Setup
- ✅ Express Server
- ✅ MongoDB Connection
- ✅ Database Design
- ✅ User Model
- ⬜ Authentication
- ⬜ Authorization
- ⬜ Parking Module
- ⬜ Slot Management
- ⬜ Booking System
- ⬜ Payment Integration
- ⬜ QR Code System
- ⬜ Notifications
- ⬜ Admin Dashboard
- ⬜ Frontend Development
- ⬜ Deployment

---

# 🗺️ Roadmap

```text
✅ Project Setup
        │
        ▼
✅ Database Design
        │
        ▼
✅ User Model
        │
        ▼
🔜 Authentication
        │
        ▼
Parking Module
        │
        ▼
Slot Module
        │
        ▼
Booking Module
        │
        ▼
Payment Module
        │
        ▼
Notifications
        │
        ▼
Frontend
        │
        ▼
Deployment
```

---

# 🎓 Learning Goals

This project is being built to learn:

- REST API development
- MongoDB schema design
- Mongoose
- Authentication with JWT
- Password hashing using bcrypt
- Role-Based Access Control (RBAC)
- Backend architecture
- Clean code practices
- Professional Git workflow
- Pull Requests
- Project documentation
- Deployment

---

# 👨‍💻 Author

**Keerthana**

Built as a learning project to gain hands-on experience with the MERN stack and industry-standard software development practices.

---



