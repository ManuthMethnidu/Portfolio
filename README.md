# Manuth Methnidu's Developer Portfolio 🚀

> A sleek, high-performance, animated developer portfolio website.

If you find this repository helpful or use it as inspiration, **please consider dropping a ⭐️ on GitHub!**

## 📖 Project Description

This repository contains the source code for a modern, responsive, and highly interactive developer portfolio. Built with a focus on seamless user experiences, it features elegant scroll animations, dynamic page transitions, and an accessible semantic UI. It serves as a central hub to showcase recent work, technical projects, and professional background.

## ✨ Key Features

- **Dynamic Animations**: Custom smooth scrolling with Lenis and highly tailored stagger animations using Framer Motion (`motion/react`).
- **Performance Optimized**: Extensive code splitting and dynamic lazy-loading ensures minimal initial JS payload (blazing fast LCP).
- **Fully Responsive**: Mobile-first design implementation with Tailwind CSS to ensure a great experience across all screen sizes.
- **Custom UI Elements**: Magnetic buttons, a customized mouse cursor, and an animated multi-language preloader.
- **SEO Ready**: Configured with Open Graph meta tags, canonical linking, `robots.txt`, and a `sitemap.xml`.

## 🛠️ Prerequisites

To run and modify this project locally, you will need the following installed:
- **Node.js** (v18.0 or newer recommended)
- **npm** (v9.0+), **yarn**, or **bun** (bun.lock is included)
- Core Frameworks used: React 19, Vite 6, Tailwind CSS v4, and Motion.

## 🚀 Installation

Follow these steps to set up the development environment:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ManuthMethnidu/portfolio.git
   cd portfolio
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   # or using bun
   bun install
   ```

## 🔐 Environment Variables

This project uses environment variables to keep sensitive data (like database connections or external API keys) secure. 

1. Copy the provided template to create your local environment file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and configure your specific API keys or database strings.
*(Note: Never commit your `.env` file to version control. The `.gitignore` is already configured to prevent this).*

## 💻 Usage

To start the local development server:

```bash
npm run dev
# or
bun run dev
```

The application will be running at `http://localhost:3000`. 

To build for production:

```bash
npm run build
```

You can preview the compiled production build locally using:

```bash
npm run preview
```
