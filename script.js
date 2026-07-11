console.log("script.js is connected");

//  TYPEWRITER EFFECT
const words = ["SQA Engineer", "Playwright", "Test Automation"];
const typewriterEl = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typewriterEl.textContent = currentWord.substring(0, charIndex);

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300;
    }

    setTimeout(typeLoop, typingSpeed);
}

typeLoop();

// ===== BUTTON CLICK BEHAVIOR =====
const runBtn = document.getElementById("runPortfolioBtn");
const contactBtn = document.getElementById("getInTouchBtn");

runBtn.addEventListener("click", function () {
    runBootAnimation();
});

contactBtn.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

function runBootAnimation() {
    const bootLines = [
        "> Initializing environment...",
        "> Loading test suites...",
        "> Compiling portfolio.build...",
        "> All systems passing.",
    ];

    runBtn.disabled = true;
    runBtn.textContent = bootLines[0];

    let lineIndex = 0;

    const interval = setInterval(function () {
        lineIndex++;

        if (lineIndex < bootLines.length) {
            runBtn.textContent = bootLines[lineIndex];
        } else {
            clearInterval(interval);
            runBtn.textContent = "▶ Run portfolio";
            runBtn.disabled = false;
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }
    }, 500);
}


