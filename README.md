# 🎬 React Movie Search Engine

> Build a fully functional movie search application with React from scratch

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 🎯 Project Overview

A hands-on React project that teaches fundamental concepts by building a real-world movie search engine. Learn component architecture, state management, API integration, and routing while creating a beautiful, functional application.

**Total Duration:** ~1 hour 20 minutes

---

## 🚀 What You'll Build

- 🔍 Search movies by title
- 🎞️ Display movie results with posters and details
- 📄 Multi-page navigation with React Router
- 🎨 Professional CSS styling
- 🌐 Real API integration
- ⚡ Real-time search functionality
- 🧠 Context API for state management

---

## 📚 Tutorial Timeline

### **00:13:31 | JSX Fundamentals**
Understanding the syntax that powers React components.
- JSX syntax and rules
- Embedding JavaScript in JSX
- JSX vs HTML differences
- Rendering elements

### **00:16:22 | Components**
The building blocks of React applications.
- Functional components
- Component composition
- Props and data flow
- Component structure best practices

### **00:19:56 | Movie Card Component**
Creating reusable UI components.
- Building a custom Movie Card
- Props for dynamic content
- Component styling
- Reusable component patterns

### **00:29:15 | Conditional Rendering**
Displaying content based on application state.
- Ternary operators in JSX
- Logical AND (&&) rendering
- Handling loading states
- Error state management

### **00:32:43 | Home Page & .map()**
Rendering lists of data dynamically.
- Array mapping in React
- Keys and list rendering
- Displaying movie arrays
- Grid layouts for cards

### **00:40:00 | State**
Managing dynamic data in components.
- useState hook introduction
- State updates and re-renders
- Managing form inputs
- State best practices

### **00:48:11 | Page Routing**
Multi-page navigation in React.
- React Router setup
- Route configuration
- Navigation between pages
- URL parameters

### **00:56:41 | CSS Styling**
Making your application beautiful.
- Component styling strategies
- Responsive design
- Flexbox/Grid layouts
- CSS best practices

### **01:01:00 | Calling APIs**
Fetching real movie data.
- API integration basics
- Fetch API usage
- Handling API responses
- Movie database API setup

### **01:07:25 | useEffect**
Managing side effects in React.
- useEffect hook fundamentals
- Dependency arrays
- API calls on component mount
- Cleanup functions

### **01:16:54 | Searching for Movies**
Implementing search functionality.
- Search input handling
- Triggering API searches
- Updating results dynamically
- Debouncing techniques

### **01:20:14 | Contexts**
Global state management with Context API.
- Context API introduction
- Creating and providing context
- Consuming context in components
- When to use Context vs Props

---

## 🛠️ Tech Stack

- **React 18+** - Frontend library
- **React Router** - Navigation
- **Context API** - State management
- **Movie Database API** - Data source (OMDB/TMDB)
- **CSS3** - Styling
- **JavaScript ES6+** - Programming language

---

## 📦 Getting Started

### Prerequisites
- Node.js installed (v14 or higher)
- Basic JavaScript knowledge
- Text editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/react-movie-search.git

# Navigate to project directory
cd react-movie-search

# Install dependencies
npm install

# Get your API key
# Visit https://www.omdbapi.com/apikey.aspx or https://www.themoviedb.org/
# Create a .env file and add your API key:
# REACT_APP_API_KEY=your_api_key_here

# Start development server
npm start
```

The application will open at `http://localhost:3000`

---

## 🎨 Features

### Core Functionality
- ✅ Search movies by title
- ✅ Display movie posters and information
- ✅ Responsive grid layout
- ✅ Loading states
- ✅ Error handling
- ✅ Multi-page navigation

### Technical Implementation
- ✅ Component-based architecture
- ✅ React Hooks (useState, useEffect)
- ✅ Context API for global state
- ✅ API integration
- ✅ Conditional rendering
- ✅ Dynamic routing

---

## 📂 Project Structure

```
react-movie-search/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── MovieList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MovieDetail.jsx
│   ├── context/
│   │   └── MovieContext.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 🔑 Key Concepts Learned

### React Fundamentals
- JSX syntax and expressions
- Functional components
- Props and component composition
- State management with useState
- Side effects with useEffect

### Advanced Patterns
- Context API for global state
- Conditional rendering techniques
- List rendering with .map()
- API integration and data fetching
- React Router navigation

### Best Practices
- Component reusability
- Proper state management
- Error handling
- Loading states
- Clean code structure

---

## 🎓 Learning Outcomes

By the end of this project, you will be able to:

- 🎯 Build complete React applications from scratch
- 🔄 Manage application state effectively
- 🌐 Integrate external APIs
- 🧭 Implement client-side routing
- 🎨 Style React components professionally
- 🔍 Create search functionality
- 📦 Structure React projects efficiently

---

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Drag and drop the /build folder to Netlify
```

---

## 🔧 API Setup

### OMDB API
1. Visit https://www.omdbapi.com/apikey.aspx
2. Sign up for a free API key
3. Add to `.env` file:
```env
REACT_APP_OMDB_API_KEY=your_key_here
```

### TMDB API (Alternative)
1. Visit https://www.themoviedb.org/settings/api
2. Create an account and get your API key
3. Add to `.env` file:
```env
REACT_APP_TMDB_API_KEY=your_key_here
```

---

## 🐛 Common Issues & Solutions

### API Key Not Working
```javascript
// Make sure your .env file is in the root directory
// Restart your development server after adding .env
npm start
```

### CORS Errors
```javascript
// Some movie APIs require server-side requests
// Consider using a proxy or backend service
```

### Movies Not Displaying
```javascript
// Check your API response structure
console.log(response.data);
// Adjust your data mapping accordingly
```

---

## 📖 Additional Resources

- [React Documentation](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [OMDB API Docs](https://www.omdbapi.com/)
- [TMDB API Docs](https://developers.themoviedb.org/3)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 Next Steps

Want to level up your project? Try adding:

- ⭐ Favorite/watchlist functionality
- 🎞️ Movie trailers with YouTube API
- 🔐 User authentication
- 💾 LocalStorage for saved searches
- 🎨 Dark mode toggle
- 📱 Progressive Web App (PWA)
- 🔄 Infinite scrolling
- 🎭 Filter by genre/year

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- ⭐ Star the repository

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Tutorial inspiration and guidance
- Movie data provided by OMDB/TMDB
- React community for amazing tools

---

<div align="center">

**Ready to build your movie search engine? Let's code! 🎬**

[▶️ Watch Tutorial](https://www.youtube.com/watch?v=G6D9cBaLViA) • [🌐 Live Demo](#) • [📂 Source Code](#)

Made with ❤️ and React

</div>