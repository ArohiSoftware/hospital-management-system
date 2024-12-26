import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './website/redux/store'; // adjust this path if necessary
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");

// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const iconToggle = () => {
//   moonIcon.classList.toggle("display-none");
//   sunIcon.classList.toggle("display-none");
// };

// const themeCheck = () => {
//   if (userTheme === "dark" || (!userTheme && systemTheme)) {
//     document.documentElement.classList.add("dark");
//     moonIcon.classList.add("display-none");
//     return;
//   }
//   sunIcon.classList.add("display-none");
// };

// const themeSwitch = () => {
//   if (document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme","light");
//     iconToggle();
//     return;
//   }
//   document.documentElement.classList.add("dark");
//   localStorage.setItem("theme","dark");
//   iconToggle();
// };

// sunIcon.addEventListener("click", () => {
//   themeSwitch();
// });

// moonIcon.addEventListener("click", () => {
//   themeSwitch();
// });

// themeCheck();