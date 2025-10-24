# Harsha Vardhini Muniappan - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as an Electronics and Communication Engineer.

## ✨ Features

- 🎨 Beautiful, modern UI with gradient designs
- 🌓 Dark mode support
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📧 Contact form
- 🎓 Education & Experience timeline
- 💼 Internships and certifications showcase
- 🚀 Easy to customize

## 🛠️ Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **React Icons** - Popular icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository or navigate to your project directory:
```bash
cd "Harsha Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name, title, and description
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Update your bio and personal information
   - Customize the feature cards

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Update skill proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your own projects
   - Update project images, descriptions, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Integrate with a backend for form submission (optional)

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#3b82f6',    // Blue
  secondary: '#8b5cf6',  // Purple
  dark: '#0f172a',       // Dark background
  light: '#f1f5f9',      // Light background
}
```

### Update Fonts

The portfolio uses Inter font from Google Fonts. You can change it in `index.html` and `tailwind.config.js`.

## 📁 Project Structure

```
Harsha Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx        # Landing/Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Projects.jsx    # Projects portfolio
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer section
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For any questions or suggestions, feel free to reach out:
- Email: harshavardhinimuniappan737@gmail.com
- Phone: +91 9498870568
- Location: Chennai, India

---

Made with ❤️ and React

