# 📝 Task Manager App
![Screenshot](./demo.png?raw=true)
A simple and clean task management application built with **React**, **Redux Toolkit**, and **Bootstrap**. This app allows users to add, filter, and manage tasks with an intuitive interface and real-time state updates.

![GitHub repo size](https://img.shields.io/github/repo-size/GiuseppePlv/task-manager-app)
![GitHub issues](https://img.shields.io/github/issues/GiuseppePlv/task-manager-app)
![GitHub stars](https://img.shields.io/github/stars/GiuseppePlv/task-manager-app?style=social)
![License](https://img.shields.io/github/license/GiuseppePlv/task-manager-app)

---

## 🚀 Features

- Add new tasks with title, description, and completion status  
- Filter tasks by title, description, or completed state  
- Redux Toolkit for state management  
- Fully tested with **Vitest** and **React Testing Library**  
- Code coverage available via `--coverage`  
- Styled using **React-Bootstrap**

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/GiuseppePlv/task-manager-app.git
cd task-manager-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧪 Running Tests
```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests and generate code coverage
npm run coverage
```
---
## 📁 Folder Structure
```bash
src/
├── components/         # React components (e.g., Filters, AddTask)
├── redux/              # Redux slices (e.g., tasksSlice.js)
├── tests/              # Unit tests
├── App.jsx
└── main.jsx
```
## 📜 License
```bash
This project is licensed under the MIT License.
Feel free to use it for personal or commercial projects
```
