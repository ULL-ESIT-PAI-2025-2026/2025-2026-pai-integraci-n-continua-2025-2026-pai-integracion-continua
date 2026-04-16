# Slides

Use this directory to include a copy (PDF) of the slides of your project presentation or follow this link: [slides](https://docs.google.com/presentation/d/1mE6vJuOe546sBbgBSZuj5sfWI6UC273dJZm_b7z9Q1M/edit?slide=id.p1#slide=id.p1)

# 🚀 Continuous Integration with GitHub Actions and Vite

This project is a practical demonstration of **Continuous Integration (CI)** applied to a frontend project built with **Vanilla TypeScript**, using **GitHub Actions** and deployed on **GitHub Pages**.

---

## 📚 Presentation Topics

This project covers the following concepts:

- Introduction to Continuous Integration (CI)
- Automation with GitHub Actions
- CI workflow in real-world projects
- Using Vite as a frontend build tool
- Automatic deployment to GitHub Pages
- Practical example with TypeScript

---

## ⚙️ Technologies Used

- ⚡ Vite
- 🟦 TypeScript
- 🐙 GitHub Actions
- 🌐 GitHub Pages
- 🧪 Testing (optional: Jest or similar)
- 📦 Node.js + npm

---

## 🧠 What is Continuous Integration?

Continuous Integration (CI) is a development practice where:

- Code is frequently integrated into a shared repository
- Every change is automatically verified
- Tests and builds are executed on every `push`

👉 Goal: detect errors as early as possible.

---

## ⚙️ GitHub Actions in CI

Gihub Actions is an automation tool integrated into GitHub.

It allows workflows to run automatically when events occur such as:

- `push`
- `pull request`

### Typical CI flow:

1. Detect repository changes
2. Install dependencies
3. Run tests
4. Build the project
5. (Optional) Deploy

---

## 🌐 Deployment with GitHub Pages

Github Pages allows you to host static web applications directly from a repository.

In this project:

- A `dist/` folder is generated
- GitHub Actions automatically uploads it
- The website updates on every `push`

---

## ⚡ Vite as a Development Tool

Vite is a modern frontend build tool designed for speed and simplicity.

### Key features:

- Instant dev server startup
- Hot Module Replacement (HMR)
- Native TypeScript support
- Optimized production builds using Rollup

---

## 📌 Authors

- Ivan Luis Estévez
- Marco Pérez Padilla
- Pablo Aswani García
