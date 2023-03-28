# 🚀 Medicine Danit Dashboard

**🎨 Prototype Design:** [Layout](https://www.figma.com/file/bbqcxW6wiTwPXDPHjyfUwZ/Untitled?node-id=0-1)

**🌐 GitHub Pages:** [Project](https://artemnadosha.github.io/project-step-cards/)

## 🛠 The technology we used:
- JavaScript: modern syntax, classes, pattern strings, object destructuring
- HTML: page structure and UI elements
- SCSS: styling and design elements
- DOM: manipulating HTML elements with JavaScript
- Axios: A library for sending HTTP requests and processing responses
- LocalStorage: storing data on the client side
- Asynchronous: using async/await to control asynchronous operations
- Module structure: organization of code in modules
- Vite: a tool to build a project

### 🧰 The Vite builder builds the project in development mode, sellshken and preview mode, there are 3 scripts to run Vite:
- `vite` - developer mode
- `vite build` - vendor mode
- `vite preview` - preview mode

#### 🎯 Main functions dev / build /preview:
**dev:**
- Clearing the dist folder and updating the files
- Compiling SCSS files into CSS
- Change tracking in HTML, SCCS, JavaScript
- Run server to track changes in real time

**build:**
- Cleaning the dist folder and updating files
- Compiling SCSS files into CSS
- JavaScript compiled with Vite
- Automatic addition of prefixes to support multiple browser versions
- Minification of JavaScript and CSS files
- Optimization of images

**preview:**
- Running the server to preview the built project (files from the dist folder)


## 👥 The project involved:
- Artem Nadosha
- Yegor Osinski
- Inga Chekalenko

### Egor Osinski was responsible for:
- Development of the Modal class and its methods for modal windows
- The development of the Card class, which displays the objects information in a basic form
- Functions for displaying/editing information - delete, edit, show-more
- Refactoring

### Artem Nadosha was responsible for:
- Design prototyping
- Lead the team, divide responsibilities and build basic tasks, with click up
- Project init with a basic structure
- Development of the FormVisit class, which is universal for creation and editing
- Development of Search class, which includes full site filtering with suggested variants, as well as correct pagination execution
- Development of pagination and interaction with elements
- Building the main render of the entire page

### Inga Chekalenko was responsible for:
- Development of the InfoVisit Class, which creates and displays information about a patient's visit to the doctor, taking into account the doctor's specialty and the specifics of each visit.
- Development of the LoginForm class, which creates and manages the login form for user authentication and creation of the LoginPage function, which creates an instance of the login form and adds it to the page.
 