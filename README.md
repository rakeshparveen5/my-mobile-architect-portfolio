# Mobile Architect Portfolio (Quasar + Vue)

A modern, responsive portfolio website built using **Quasar Framework** and **Vue 3**.
This project showcases my work, skills, and projects with smooth navigation and a clean UI.

---

## 🚀 Live Demo

👉 https://github.com/rakeshparveen5/my-mobile-architect-portfolio

---

## 🛠️ Tech Stack

- ⚡ Vue 3 (Composition API)
- 🧩 Quasar Framework
- 🎨 HTML5 + CSS3 + SCSS
- 📦 Vite (via Quasar CLI)

---

## 📁 Project Structure

```
src/
 ├── assets/
 │    ├── quasar-logo-vertical.svg
 ├── components/
 │    └── portfolio/
 │          ├── ContactSection.vue
 │          ├── ExperienceSection.vue
 │          ├── HeroSection.vue
 │          ├── PageFooter.vue
 │          ├── PageHeader.vue
 │          ├── ProjectSection.vue
 │          └── SkillSection.vue
 ├── css/
 │    ├── app.scss
 │    └── quasar.variables.scss
 ├── data/
 │    └── portfolioData.ts
 ├── layouts/
 │    └── MainLayout.vue
 ├── pages/
 │    ├── ErrorNotFound.vue
 │    └── PortfolioPage.vue
 ├── router/
 │    ├── index.ts
 │    └── routes.ts
 ├── types/
 │    └── portfolio.ts
 └── App.vue
```

---

## ✨ Features

- 📱 Fully responsive design
- 🎯 Smooth scrolling navigation
- 📂 Project showcase section
- 📧 Contact section
- 📌 Drawer-based mobile navigation (Quasar `q-drawer`)
- ⚡ Fast and optimized build

---

## 🧠 Key Concepts Used

- Vue 3 Composition API
- Component communication (props + emits)
- Centralized navigation handler (`scrollTo + drawer toggle`)
- Reusable UI components
- Quasar layout system

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/rakeshparveen5/my-mobile-architect-portfolio.git
cd my-mobile-architect-portfolio
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
quasar dev
```

---

## 🏗️ Build for Production

```bash
quasar build
```

---

## 🚀 Deployment (GitHub Pages)

This project is deployed using **GitHub Pages**.

### Steps:

```bash
npm run build
npm run deploy
```

Make sure your `quasar.config.js` includes:

```js
build: {
  vueRouterMode: 'hash',
  publicPath: '/my-portfolio/'
}
```

---

## 📸 Screenshots

![screenshot](/screenshots/my-portfolio-home.png)

---

## 🙌 Acknowledgements

- Quasar Framework Documentation: https://quasar.dev/docs/
- Vue.js Documentation: https://vuejs.org/guide/introduction.html

---

## 📬 Contact

Feel free to reach out:

- 💼 LinkedIn: https://www.linkedin.com/in/rakesh-verma-3a1841109/
- 📧 Email: [rakesh.parveen5@gmail.com](mailto:rakesh.parveen5@gmail.com)

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
