



## `README.md`


```markdown
# SQA Engineer Portfolio — Abdullah Al Azme


A single-page portfolio designed with a terminal and code-editor theme, using only HTML, CSS, and vanilla JavaScript. No frameworks or build tools are involved.
Live site: (link goes here once deployed)


## Why this design


The goal was to create a design that truly reflected the client’s work, which includes testing, specifications, and terminals, rather than using a generic portfolio template. Each section is styled to resemble a code editor or a notes application, featuring mac-style dots, filenames as headers, and monospace typography throughout.
## Stack


- HTML5
- CSS3 (custom properties, Grid, Flexbox — no Sass or Tailwind)
- Vanilla JS (no libraries)
- Font: JetBrains Mono


Nothing to install. Open `index.html` in a browser, or run it using VS Code's Live Server extension.
## Files


```
index.html      structure and content
style.css       all styling and layout
script.js       typewriter effect, button behavior, smooth scroll
README.md       this file
UPDATE-GUIDE.md how the color system works, how to add content
```


## Sections


Hero → Skills → Projects → Experience → About Me → Contact


Projects show a live RUNNING / COMPLETED status tag. Experience is a career timeline from intern to current QA role. Skills are grouped by category (testing, automation, tools, databases, platforms).


## Note on browser support


Bullet-point styling inside the Experience/About boxes uses the CSS `:has()` selector. Works in every current browser (Chrome, Edge, Safari, Firefox), not in anything older than 2023.




```
