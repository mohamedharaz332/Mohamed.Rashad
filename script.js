const text = "Hello, I'm Mohamed R. Haraz, a beginner software developer passionate about coding and technology. I'm currently learning Python and JavaScript, and practicing with tools like Git and VS Code. I've built small projects like simple websites and basic scripts, and I'm eager to keep learning and growing in the field.";

let index = 0;
const speed = 40;
const typedText = document.getElementById("typed-text");
const typingSound = new Audio("type.mp3");
typingSound.volume = 0.5;

// لازم أول تفاعل من المستخدم علشان المتصفح يسمح بالصوت
let isTypingStarted = false;

document.addEventListener("click", () => {
  if (!isTypingStarted) {
    isTypingStarted = true;
    changeColor();
    typeEffect();
  }
});

function changeColor() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff"];
  let colorIndex = 0;
  setInterval(() => {
    typedText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 500);
}

function typeEffect() {
  if (index < text.length) {
    const span = document.createElement("span");
    span.textContent = text[index];
    span.style.fontSize = "24px";
    span.style.fontWeight = "bold";
    span.style.fontStyle = "italic";
    typedText.appendChild(span);

    // نشغّل الصوت مع كل حرف بشكل سريع ومنتظم
    typingSound.pause();
    typingSound.currentTime = 0;
    typingSound.play().catch(() => {});

    index++;
    setTimeout(typeEffect, speed);
  }
}
