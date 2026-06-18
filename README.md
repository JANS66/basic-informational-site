# Basic Informational Site

A lightweight, vanilla Node.js web server that dynamically serves static HTML pages based on the requested URL routing, built without using external frameworks like Express.

## Features

- No Frameworks: Built entirely with Node.js core modules (http, fs, path).
- Dynamic File Routing: Maps clean URLs directly to their corresponding HTML files.
- Custom Error Handling: Automatically responds with a proper 404 status code and renders a fallback 404.html layout whenever an unlisted path is requested.
- Interactive Navigation: All pages include cross-linked navigation menus to instantly verify server-side routing stability.

### Installation & Execution

1. Navigate into your project repository directory:
   cd basic-informational-site

2. Spin up the Node.js development server:
   node index.js

3. Open your favorite web browser and navigate to the following endpoints to observe the router in action:
   - Home: http://localhost:8080
   - About: http://localhost:8080/about
   - Contact: http://localhost:8080/contact-me
   - Test 404 Behavior: http://localhost:8080/any-undefined-route

4. Terminate the server process anytime from the terminal with Ctrl + C.

## Git Workflows Applied

- Repository initialized via "git init".
- Default branch structured cleanly using "git branch -M main".
- Connected to remote GitHub host with a configured default branch upstream profile ("git push -u origin main").
