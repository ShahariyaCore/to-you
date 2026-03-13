/* ================= TYPING EFFECT ================= */
let text = `Today is the birthday of the most beautiful person I know.
You are not just someone special, you are the reason ordinary days feel extraordinary. 
I hope this year brings you happiness, love, and maybe… a chance for us to write our story together.`;
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
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

/* ================= MEMORY DATA & OPEN ================= */
// Use your provided memory array here
const memories = [
   {
image:"./assesst/30.jpg",

song:"./song/Deewaniyat 🧡🤍Brilliant Music @vishalmishraofficial @kunaalvermaa @anshul300 @raghav.sharma.146 (1).mp3" ,

message:"You are the kind of person who turns ordinary moments into unforgettable memories.",

lyrics:`
Tu hi armaan, tu hi sach hai
Keh rahi deewaniyat hai
Main yeh dil pe likh chuka hoon
Tu mera hai, tu mera hai
Tere aage zindagi ki
Khaakh jitni ahmiyat hai
Faisla main kar chuka hoon
Tu mera, main bhi hoon bas tera
`
},

{
image:"./assesst/16.jpeg",

song:"./song/3.mp3",

message:"In a world full of millions of people, my heart somehow chose you without hesitation.",

lyrics:`
Darling, just hold my hand
Be your girl, you'll be my man
And I see my future in your eyes
`
},

{
image:"./assesst/15.jpg",

song:"./song/4.mp3",

message:"You make my life brighter.",

lyrics:`
Hai yehi iraada
Tujhe chaahun khud se zyada
Dil se hai yeh vaada

Main hoon saath tere
Main hoon saath tere
`
},

{
image:"./assesst/14.jpg",

song:"./song/5.mp3",

message:"You are my silent happiness.",

lyrics:`
Tumhaare sang har ek lamha
Har ek lamha yaadein nayi main bunu...

Tum ho toh subaha nayi hai
Tum ho toh shaamein haseen hain
`
},

{
image:"./assesst/3.jpg",

song:"./song/6.mp3",

message:"You are not just special, you are my greatest gift from allah.",

lyrics:`
BAADLON KI TARAH HI TO
TUNE MUJPE SAAYA KIYA HAI
`
},

{
image:"./assesst/4.jpg",

song:"./song/7.mp3",

message:"You are my beautiful distraction.",

lyrics:`
Jodi sotti jante chao
Tomake chai tomake chai
Jodi mitthe mante chao
Tomakei chai


Jodi sotti jante chao
Tomake chai tomake chai
Jodi mitthe mante chao

Tomakei chai
`
},
{
image:"./assesst/5.jpg",

song:"./song/2.mp3",

message:"You are the dream I never say aloud.",

lyrics:`
Gulabi sadi aani lali laal laal
Diste mi bhari, raja photo majha kadh
Gulabi sadi aani lali laal laal
Diste ti bhari mhane, photo majha kadh
`
},

{
image:"./assesst/6.jpg",

song:"./song/8.mp3",

message:"My favorite feeling is seeing you.",

lyrics:`
Tera hua, main saara ka saara

Dekh lena, tere honthon pe hamesha
`
},

{
image:"./assesst/8.jpg",

song:"./song/9.mp3",

message:"Maybe I am just one person in your life, but to me you are a whole universe.",

lyrics:`
Waise koyi dikha nahi, awo..


[M] Par jabse dekha tujhe
Jo huaa nahi woh hone lagaa
Dil mera mujhe jaga ke
Khud sine mein sone laga
`
}
,
{
image:"./assesst/28.jpg",

song:"./song/10.mp3",

message:"I don't know what the future holds, but I know my heart always finds its way back to you.",

lyrics:`
Main shayad hoon
Yakeen tum ho
Mere chehre pe thehri
Ik hansi tum ho

Tera milna yun rozana
Lage saanson ki aadat

`
},

{
image:"./assesst/9.jpg",

song:"./song/11.mp3",

message:"Even when the world feels complicated, one thought of you makes everything peaceful.",

lyrics:`
I found peace in your eyes
And happiness in your smile
There are lots of thing to share 
`
},

{
image:"./assesst/31.jpg",

song:"./song/12.mp3",

message:"If I could choose one place to stay forever, it would be the moment when you smile.",

lyrics:`
Saason mein
Teri nazdeekiyon ka
Ittar tu ghol de... ghol de

Main hi kyun
Ishq zaahir karun
Tu bhi kabhi bol de... bol de

Saason mein
Teri nazdeekiyon ka
`
}

];

function openMemory(index) {
    const memory = memories[index];
    const viewer = document.getElementById("memoryViewer");
    viewer.style.display = "flex";
    document.getElementById("memoryImg").src = memory.image;
    document.getElementById("memoryMessage").innerText = memory.message;
    
    // Lyrics Animation
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

    const audio = document.getElementById("memoryAudio");
    audio.src = memory.song;
    audio.play().catch(e => console.log("Audio needs user click"));
}

function closeMemory() {
    document.getElementById("memoryViewer").style.display = "none";
    document.getElementById("memoryAudio").pause();
}

/* ================= FUN SECTION ================= */
// const answers = [
//     "You already know the answer 😌",
//     "I promise I will bring the coffee ☕",
//     "I hope the answer is me 😄",
//     "I promise I will try my best ❤️"
// ];
// function answer(i) {
//     document.getElementById("funResult").innerText = answers[i];
// }

/* ================= FUNNY QUIZ SECTION ================= */
const answers = [
    "I'll take that as a 'YES' and tell my mom! 🏃‍♂️💨", // Q0
    "Only if I get to pick the dessert! 🍰", // Q1
    "If it's not me, I'm calling the police! 🚔😂", // Q2
    "I promise I won't waste it (unless there's pizza). 🍕❤️", // Q3
    "A little bit, but that's why you love me! 😌✨", // Q4
    "Aww, don't worry, I'm stuck in your head too! 🧠💖", // Q5
    "Second place is NOT an option! 😤🏆", // Q6
    "You can have the chocolate, but I get a bite! 😋🍫", // Q7
    "You can't block me, I'm the developer of this site! 👨‍💻😜", // Q8
    "I'll start my singing career tomorrow then! 🎤🌟", // Q9
    "I see that smile! Don't even try to hide it! 👀💕" // Q10
];

function answer(i) {
    const resultElement = document.getElementById("funResult");
    
    // Add a little 'pop' animation effect
    resultElement.style.transform = "scale(0.8)";
    resultElement.style.opacity = "0";
    
    setTimeout(() => {
        resultElement.innerText = answers[i];
        resultElement.style.transform = "scale(1.1)";
        resultElement.style.opacity = "1";
    }, 150);

    // Reset scale after animation
    setTimeout(() => {
        resultElement.style.transform = "scale(1)";
    }, 300);
}

/* ================= FINAL ACTIONS ================= */
function celebrate() {
    document.getElementById("finalPage").style.display = "block";
    // Confetti effect
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "%";
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
        fire.style.fontSize = "40px";
        fire.style.animation = "explode 1.5s ease-out forwards";
        document.body.appendChild(fire);
        setTimeout(() => fire.remove(), 1500);
    }
    alert("You made me the happiest person! ❤️");
}