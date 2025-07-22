# Feedback Form System

A minimal, modern platform for collecting and viewing user feedback, built with a React + Vite frontend and an Express + MongoDB backend.

## Features

- **User Feedback Submission:** Users can submit feedback with their name, email, message, and an optional rating (1-5).
- **Instant Feedback Display:** Submitted feedback is instantly available for viewing.
- **Admin Panel:** Admins can log in to view all feedback in a dedicated dashboard.
- **Responsive UI:** Clean, modern, and mobile-friendly design using Tailwind CSS.

---

## Project Structure

```
/
├── client/   # React + Vite frontend
├── server/   # Express + MongoDB backend
└── readme.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Feedback-Form-System.git
cd Feedback-Form-System
```

---

### 2. Setup the Backend

```bash
cd server
npm install
```

- Create a `.env` file in `server/` with:
  ```
  MONGODB_URI=your_mongodb_connection_string
  ```

- Start the backend server:
  ```bash
  npm run main
  ```
  The backend runs on `http://localhost:5000`.

---

### 3. Setup the Frontend

```bash
cd ../client
npm install
npm run dev
```
The frontend runs on `http://localhost:5173` (default Vite port).

---

## Usage

- **Submit Feedback:** Open the frontend, fill out the feedback form, and submit.
- **Admin Access:** Click "Admin" on the homepage. Use the default credentials (`admin` / `admin123`) to log in and view all feedback.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Express, MongoDB, Mongoose, JWT (for future auth), bcryptjs, dotenv, cors

---

## Folder Details

### `/client`
- `src/` – React components for feedback form, admin login, and feedback display.
- `public/` – Static assets.
- `index.html` – Main HTML file.
- `vite.config.js` – Vite configuration.

### `/server`
- `index.js` – Express server entry point.
- `routes/feedback.js` – API routes for feedback.
- `controllers/feedbackController.js` – Logic for creating and fetching feedback.
- `models/Feedback.js` – Mongoose schema for feedback.

---




