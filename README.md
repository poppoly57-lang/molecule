# Molecule Restaurant — HTML/CSS/JS to React conversion

## What was in the original project

- `index.html`: homepage, navigation, image galleries, three menu items, footer, and inline JavaScript.
- `menu.html`: a mostly empty HTML document followed by the menu section outside `<body>`.
- `about.html`: about page content, navigation, footer, and the same inline JavaScript.
- `style.css`: global styling, navigation, gallery, menu, layout, footer, and responsive media queries.
- `about.css`: mostly duplicated navigation/footer styles, with many styles unused by the actual about page.
- `scrip.js`: empty; the real JavaScript was written inline in the HTML files.
- `images/`: restaurant images and branding assets.

## React architecture

- `App.jsx` handles routes.
- `Header.jsx` owns mobile-menu state and scroll state.
- `Footer.jsx` is reusable on all pages.
- `Gallery.jsx` renders the image gallery from an array.
- `MenuList.jsx` renders menu items from data instead of repeating HTML.
- `pages/Home.jsx`, `Menu.jsx`, and `About.jsx` are page-level components.
- `data/menu.js` stores menu information separately from presentation.
- `styles.css` contains the converted styling.

## Important React changes

1. `class` becomes `className`.
2. HTML event handlers become React handlers, e.g. `onClick`.
3. `document.getElementById()` and `classList.toggle()` are replaced by React state.
4. The hamburger menu uses `useState`.
5. The scroll effect uses `useEffect` with cleanup.
6. Images are imported from `src/assets`.
7. Page navigation uses `react-router-dom` and `<Link>`.
8. Repeated menu/gallery markup is generated with `.map()`.
9. The original `menu.html` placed `<section>` outside `<body>`; React fixes this by making the menu a proper page component.
10. The original project linked to `reserve.html`, but that file was not included in the ZIP, so the React version keeps the reserve action as a placeholder link.

## Run the project

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.
