# 🚀 DevStack

DevStack is a simple React project where I practiced building a clean and interactive task management interface. The main idea is to browse available tasks, add the ones I want to work on to my stack, and remove them when I no longer need them.

I built this project as part of my React learning journey, focusing on components, props, state, hooks, and working with JSON data.

## 🛠️ Technologies I Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- DaisyUI
- HTML5
- CSS3
- JSON
- Vite

## ✨ Features

### 1. Browse Tasks
Users can see the available tasks in a simple and organized layout.

### 2. Add Tasks to the Stack
A task can be added to the working stack with a click, making it easy to keep track of what I want to work on.

### 3. Manage the Stack
Users can remove tasks from the stack when they are finished or no longer needed.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. React uses JSX because it makes the UI code easier to read and build.

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. Props are read-only.

**State** is data that belongs to a component and can change when something happens in the app.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and update data inside a React component.

I used it to keep track of the tasks in my stack and update the screen when I added or removed a task.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` lets us run some code after a component renders.

I used it to load the task data from the JSON file when the application starts.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to recognize each item in a list. It helps React know which item changed, was added, or was removed.


## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.


## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.


The child can then call `onRemove()` when the user removes a task.

---

## 👨‍💻 About This Project

This project helped me get more comfortable with React fundamentals, especially components, props, state, hooks, conditional rendering, and displaying data dynamically.

Thanks for checking out **DevStack**! ❤️
