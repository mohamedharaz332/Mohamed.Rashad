const text = "Hello, I'm Mohamed R. Haraz, a beginner software developer passionate about coding and technology. I'm currently learning Python and JavaScript, and practicing with tools like Git and VS Code. I've built small projects like simple websites and basic scripts, and I'm eager to keep learning and growing in the field.";
let index = 0;
const speed = 40;
const typedText = document.getElementById("typed-text");
const typingSound = new Audio("type.mp3"); // الصوت

// دالة لتغيير اللون بالتناوب
function changeColor() {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff"];
  let colorIndex = 0;
  setInterval(() => {
    typedText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 500); // تغيير اللون كل 500 ملي ثانية
}

function typeEffect() {
  if (index < text.length) {
    const span = document.createElement("span");
    span.textContent = text[index];
    span.style.fontSize = "24px"; // تغيير حجم الخط
    span.style.fontWeight = "bold"; // جعل النص بولد
    span.style.fontStyle = "italic"; // جعل النص مائل
    typedText.appendChild(span);

    // تشغيل الصوت
    typingSound.currentTime = 0;
    typingSound.play();

    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = () => {
  changeColor(); // تفعيل تأثير تغيير الألوان
  typeEffect(); // بدء كتابة النص
};
