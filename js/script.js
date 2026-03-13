/* ================= TYPING EFFECT ================= */
let text = `Today is the birthday of the most beautiful person I know.
You are not just someone special, you are the reason ordinary days feel extraordinary. 
I hope this year brings you happiness, love, and maybe… a chance for us to write our story together.`;
let i = 0;

function typing() {
    const target = document.getElementById("typing");
    if (target && i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typing();
    createFloatingHearts();
});

/* ================= FLOATING HEARTS ================= */
function createFloatingHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        document.body.appendChild(heart);
    }
}

/* ================= MEMORY DATA ================= */
const memories = [
    { image: "./assesst/30.jpg", song: "./song/Deewaniyat 🧡🤍Brilliant Music @vishalmishraofficial @kunaalvermaa @anshul300 @raghav.sharma.146 (1).mp3", message: "You turn ordinary moments into memories.", lyrics: "Tu hi armaan, tu hi sach hai..." },
    { image: "./assesst/16.jpeg", song: "./song/3.mp3", message: "My heart chose you without hesitation.", lyrics: "Darling, just hold my hand..." },
    { image: "./assesst/15.jpg", song: "./song/4.mp3", message: "You make my life brighter.", lyrics: "Main hoon saath tere..." },
    { image: "./assesst/14.jpg", song: "./song/5.mp3", message: "You are my silent happiness.", lyrics: "Tum ho toh subaha nayi hai..." },
    { image: "./assesst/3.jpg", song: "./song/6.mp3", message: "My greatest gift from Allah.", lyrics: "BAADLON KI TARAH HI TO..." },
    { image: "./assesst/4.jpg", song: "./song/7.mp3", message: "My beautiful distraction.", lyrics: "Tomake chai tomake chai..." },
    { image: "./assesst/5.jpg", song: "./song/2.mp3", message: "The dream I never say aloud.", lyrics: "Gulabi sadi aani lali laal..." },
    { image: "./assesst/6.jpg", song: "./song/8.mp3", message: "My favorite feeling is seeing you.", lyrics: "Tera hua, main saara ka saara..." },
    { image: "./assesst/8.jpg", song: "./song/9.mp3", message: "To me, you are a whole universe.", lyrics: "Par jabse dekha tujhe..." },
    { image: "./assesst/28.jpg", song: "./song/10.mp3", message: "My heart finds its way back to you.", lyrics: "Main shayad hoon, yakeen tum ho..." },
    { image: "./assesst/9.jpg", song: "./song/11.mp3", message: "Everything feels peaceful with you.", lyrics: "I found peace in your eyes..." },
    { image: "./assesst/31.jpg", song: "./song/12.mp3", message: "Your smile is my favorite place.", lyrics: "Saason mein teri nazdeekiyon ka..." }
];

/* ================= OPEN/CLOSE MEMORY ================= */
function openMemory(index) {
    const memory = memories[index];
    const viewer = document.getElementById("memoryViewer");
    const audio = document.getElementById("memoryAudio");

    viewer.style.display = "flex";
    document.getElementById("memoryImg").src = memory.image;
    document.getElementById("memoryMessage").innerText = memory.message;
    
    // Lyrics
    const container = document.getElementById("memoryLyrics");
    container.innerHTML = "";
    let lines = memory.lyrics.trim().split("\n");
    lines.forEach((line, idx) => {
        let p = document.createElement("p");
        p.innerText = line;
        p.style.opacity = "0";
        p.style.transition = "1s";
        container.appendChild(p);
        setTimeout(() => { p.style.opacity = "1"; }, idx * 1500);
    });

    audio.src = memory.song;
    audio.play().catch(e => console.log("Interaction needed"));
}

function closeMemory() {
    document.getElementById("memoryViewer").style.display = "none";
    const audio = document.getElementById("memoryAudio");
    audio.pause();
    audio.currentTime = 0;
}

/* ================= FUNNY QUIZ ================= */
const answers = [
    "I'll take that as a 'YES' and tell my mom! 🏃‍♂️💨",
    "Only if I get to pick the dessert! 🍰",
    "If it's not me, I'm calling the police! 🚔😂",
    "I promise I won't waste it (unless there's pizza). 🍕❤️",
    "A little bit, but that's why you love me! 😌✨",
    "Aww, don't worry, I'm stuck in your head too! 🧠💖",
    "Second place is NOT an option! 😤🏆",
    "You can have the chocolate, but I get a bite! 😋🍫",
    "You can't block me, I'm the developer! 👨‍💻😜",
    "I'll start my singing career tomorrow then! 🎤🌟",
    "I see that smile! Don't even try to hide it! 👀💕"
];

function answer(i) {
    const resultElement = document.getElementById("funResult");
    resultElement.style.opacity = "0";
    setTimeout(() => {
        resultElement.innerText = answers[i];
        resultElement.style.opacity = "1";
    }, 150);
}

/* ================= FINAL CELEBRATION ================= */
function celebrate() {
    const finalPage = document.getElementById("finalPage");
    const audio = document.getElementById("memoryAudio");

    finalPage.style.display = "block";
    
    // Play the final song
    audio.src = "./song/Ishqa Ve (1).mp3";
    audio.play().catch(e => console.log("Final song failed to play"));

    // Scroll to top of final page
    finalPage.scrollTop = 0;

    // Confetti
    for (let i = 0; i < 60; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = "-20px";
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        document.body.appendChild(confetti);
    }
}

function startFireworks() {
    for (let i = 0; i < 50; i++) {
        let fire = document.createElement("div");
        fire.innerHTML = "🎆";
        fire.style.position = "fixed";
        fire.style.left = Math.random() * 100 + "%";
        fire.style.top = Math.random() * 100 + "%";
        fire.style.animation = "explode 1.5s ease-out forwards";
        document.body.appendChild(fire);
        setTimeout(() => fire.remove(), 1500);
    }
    alert("You made me the happiest person! ❤️");
}