# 🎬 BingeBuddy

BingeBuddy is your one-stop app for discovering movies, watching trailers, and exploring smart recommendations powered by AI. Built with React, Firebase, Tailwind CSS, Redux, and integrated with Trakd, OMDB, and Google's GenAI — BingeBuddy is packed with features that make your movie nights effortless.

---

## 🚀 Live Demo

👉 [Check it out here](#) *(add your deployed app link)*

---

## 📸 Preview

*(Optional: Add screenshots or screen recording of your app here)*

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, Redux Toolkit  
- **Backend/Auth**: Firebase Auth  
- **APIs**: Trakd API, OMDB API, YouTube Search API, Google GenAI  
- **State Management**: Redux  
- **Deployment**: Firebase Hosting / Vercel / Netlify *(update as needed)*

---

## ✨ Features

### 🔐 Authentication
- Login/Signup with Firebase Auth
- Form validation with `useRef`
- Redirect handling for protected routes
- User profile updates
- Secure logout & auth state management

### 🎥 Browse Page (Post-Login)
- Hero section with autoplay trailer (YouTube)
- Movie title, description, and category-based listings
- Dynamic movie cards using OMDB posters
- Responsive UI with Tailwind CSS

### 🧠 GPT Search (AI-powered!)
- Search bar with natural language input
- Movie suggestions from GenAI + OMDB
- Multi-language support
- Optimized with memoization and reusable components

---

## 📦 Folder Structure Highlights

- `/components` – Reusable UI elements  
- `/hooks` – Custom hooks like `useMostWatchedMovies`, `usePopularMovies`  
- `/store` – Redux slices (`userSlice`, `movieSlice`, `gptSlice`)  
- `/utils/constants.js` – API keys, base URLs, and static data

---

## 🔧 Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Snig162000/binge-buddy.git
   cd bingebuddy
2. **Install dependencies**
   ```bash
   npm install
3. **Add your .env file**
   Create a .env file in the root of your project and add the following:
   ```bash
   REACT_APP_FIREBASE_API_KEY=your_key_here
   REACT_APP_TRAKD_TOKEN=your_token_here
   REACT_APP_GENAI_API_KEY=your_api_key_here
4. **Run the app**
   ```bash
   npm start

