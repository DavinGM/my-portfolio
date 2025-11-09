# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## 📦 **Daftar NPM Penting *

### 1️⃣ Core Utilities

* `clsx` → untuk className conditional
* `tailwind-merge` → untuk merge Tailwind class secara otomatis

### 2️⃣ Radix UI Components

* `@radix-ui/react-tabs`
* `@radix-ui/react-popover`
* `@radix-ui/react-accordion`
* `@radix-ui/react-dialog`
* `@radix-ui/react-toast`
  *(sesuai kebutuhan komponen yang kamu pakai dari ShadCN)*

### 3️⃣ Tailwind Plugin / Animasi

* `tailwindcss-animate` → buat animasi helper dari Tailwind

### 4️⃣ Class Variance / Styling

* `class-variance-authority` → buat handle variant dan styling komponen ShadCN

### 5️⃣ Optional (Dev / Build)

* `autoprefixer` → PostCSS
* `postcss` → PostCSS engine
* `vite-plugin-react` → Vite plugin React (sudah otomatis kalau pake template Vite React)

