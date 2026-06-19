# Basic Informational Site

A lightweight web server built with Express that dynamically serves static HTML pages based on the requested URL routing.

## Features

- **Express Powered**: Fast, unopinionated, and minimalist web framework for Node.js.
- **Clean Routing**: Uses Express `app.get()` routes to map URLs cleanly directly to their corresponding HTML files.
- **Robust 404 Handling**: Utilizes a catch-all middleware to automatically respond with a proper 404 status code and render a fallback `404.html` layout whenever an unlisted path is requested.
- **Interactive Navigation**: All pages include cross-linked navigation menus to instantly verify server-side routing stability.

## Installation & Execution

1. Navigate into your project repository directory:
   ```
   cd basic-informational-site
   ```
2. Install the required dependencies (Express):
   ```
   npm install
   ```
3. Spin up the Express development server:
   ```
   node server.js
   ```
4. Open your favorite web browser and navigate to the following endpoints to observe the router in action:
   - Home: `http://localhost:8080`
   - About: `http://localhost:8080/about`
   - Contact: `http://localhost:8080/contact-me`
   - Test 404 Behavior: `http://localhost:8080/any-undefined-route`
5. Terminate the server process anytime from the terminal with `Ctrl + C`.

## Git Workflows Applied

- Repository initialized via `git init`.
- Configured `.gitignore` to safely exclude local environments, logs, and the `node_modules/` directory.
- Default branch structured cleanly using `git branch -M main`.
- Connected to remote GitHub host with a configured default branch upstream profile (`git push -u origin main`).
