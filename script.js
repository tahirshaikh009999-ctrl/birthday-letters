const modal = document.getElementById("letter-modal");
const letterText = document.getElementById("letter-text");
const closeBtn = document.getElementById("close-btn");
const videoModal = document.getElementById("video-modal");
const videoModal2 = document.getElementById("video-modal-2");
const videoModal3 = document.getElementById("video-modal-3");
const mainVideo = document.getElementById("main-video");
const mainVideo2 = document.getElementById("main-video-2");
const mainVideo3 = document.getElementById("main-video-3");
const closeVideoBtn = document.getElementById("close-video-btn");
const closeVideoBtn2 = document.getElementById("close-video-btn-2");
const closeVideoBtn3 = document.getElementById("close-video-btn-3");

// --- Sound Configuration ---
const popSound = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3'); 
const cheerSound = new Audio('https://www.soundjay.com/misc/sounds/cheering-01.mp3');

// Adjust volumes (Cheer is usually louder than a pop)
popSound.volume = 0.7;
cheerSound.volume = 0.4;

popSound.load();
cheerSound.load();

const letters = [
  `💌 <strong>Day 1 – “The Magic of You”</strong><br>
  Ever since you came into my life, everything feels a little brighter, a little softer, and a lot more meaningful.<br>
  There’s something about your presence that makes even the ordinary feel magical.<br>
  Just hearing your voice or seeing your name pop up makes me smile.<br>
  Thank you for being you Madiha!!!!
  <br><br><br>
  "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease." <br>
  -Surah Ash-Sharh [94:6]`,

  `💌 <strong>Day 2 – “A Memory I Love”</strong><br>
  There’s this moment I keep replaying in my head. Us, laughing uncontrollably over something silly.<br>
  I remember what it was your way of saying shimpy on the beach when we were collecting shells, but I remember the way I felt: completely happy, completely safe.<br>
  You make memories that don’t fade, they stay with me like warm light.<br>
  Even on hard days, I think of those times and I feel okay again.<br>
  Thank you for giving me those pieces.
  
  <br>
  <br>
  'If you are grateful, I will surely increase you [in favor]; <br>-Surah Ibrahim [14:7]`,

    `💌 <strong>Day 3 – “For the Days That Feel Heavy”</strong><br>
  If today feels hard, please remember: you don’t have to carry it all alone.<br>
  It’s officially been three months since our first date on 22nd Nov which for the record was pretty magical. Mostly because of your company, but I’ll take some credit for the fun and my vibes.
  To me you should know that you are stronger than you already know, and even when you doubt in yourself. I never do because I know that you can do it.<br>
  I see your courage and wit in the little things you do every day.<br>
  I’m always here, quietly believing in you and sometimes loudly believing in you, supporting you throughout it all.<br>
  You’ve got this. And You’ve got me always supporting. 
  <br>
  <br>
  <br>
  "Allah does not burden a soul beyond that it can bear."<br> 
  -Surah Al-Baqarah (2:286)
  <br>
  <button id="view-video-btn" style="background: #ff69b4; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-family: 'Dancing Script', cursive; font-size: 1.2rem;">
    Core memory🎥
  </button>`,

  `💌 <strong>Day 4 – “Thank You for Just Being You”</strong><br>
  I just wanted to let you know how much I appreciate having you in my life and I don't say this enough, but thank you. <br> 
  I cherish all of the moments that we share together, For helping me through the bad times and being there with me celebrate the good times. <br>
  There aren’t enough words in the dictionary for me to tell you how glad I am to have you in my life. <br>
  IDK what I did to deserve someone as wonderful as you maybe feeding the strays made it possible, <br>
  but I am eternally grateful to have your love, support, and your time.
  <br>
  <br>
  <br>
  "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient." <br>
  -Surah Al-Baqarah [2:153]
  <br>
  <button onclick="openDay4()" style="background: #ff69b4; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-family: 'Dancing Script', cursive; font-size: 1.2rem;"> small gift 📸</button>`,

  `💌 <strong>Day 5 – “The Way You Are”</strong><br>
You have soft brunette hair that makes me want to drive fast so I can watch it blow in the wind. You have a gentle infectious laugh that makes me want to be the funniest person in every room.<br>
You have a rough hug that makes you want to pull away so i'll squeeze even tighter. Your goofey smile makes me laugh every time. You possess a grace that absolutely captivates me. <br>
Knowing you are in my corner makes every challenge feel smaller and every joy feel bigger. I find myself constantly inspired by your strength and drawn to your warmth<br>
You have this rare ability to just be present. You’re steady, you’re observant, and you don’t overcomplicate things makes being around you incredibly easy.<br>
Thank you for the way you are. I don't say it enough, but I see the effort you put into everything, and I don't take a single bit of it for granted.
  <br>
  <br>
  <br>
  "And your Lord is going to give you, and you will be satisfied." <br>— Surah Ad-Duha [93:5]
  <br>
  <button onclick="openDay5()" style="background: #ff69b4; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-family: 'Dancing Script', cursive; font-size: 1.2rem;"> small gift 📸</button>`,

  `💌 <strong>Day 6 – “If You Ever Feel Alone”</strong><br>
  Some days, the world feels too loud or too quiet, and nothing seems to make sense.<br>
  When that happens, I hope you feel the warmth of my love wrap around you like a soft blanket.<br>
  Even when I’m not right beside you, I’m thinking of you.<br>
  You are never alone. Not truly, not while I’m here.<br>
  You are so loved, in ways you might never fully see but I’ll keep showing you, every day. <br>
  If you ever feel alone think of me singing for you at the worst tone possible while making aggressive eye contact,<br>
  that would be a nightmare for me but it will feel like a warm hug filling space with warmth and comfort and laughter for you.
  I know that and I pray Allah will give you all the good and genuine things that you deserve so that you will be happy and peacefully gratified and all your worries will go away.
  <br>
  <br>
  <br>
  "Fear not. Indeed, I am with you both; I hear and I see." <br>
  — Surah Taha [20:46]

  <br>
  <button id="view-video-btn-2" style="background: #ff69b4; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-family: 'Dancing Script', cursive; font-size: 1.2rem;">
    Another core memory🎥
  </button>`,

  `💌 <strong>Day 7 – “Happy Birthday Madiha🍾✨❤️!!!!”</strong><br>
  Well when you get this HAPPY BIRTHDAY MADIHA! 🎂🍾✨❤️ message. I hope you have a good year ahead and inshallah acheive everything you ever wanted.<br>
  I hope this Birthday brings you so much happiness and barkat in you life that you forget all the pain you had all this time.<br>
  I hope you like the video which i my take for as I see you from my eyes (All pretty and Fabulous and Sundar)
  I wish you the "Happiest Birthday Ever Madiha 🎂🍾✨❤️" and thank you for letting me be a part of it.<br>
  <br>
  <br>
  <strong> Happy Birthday Madiha ❤️!!!</strong>
  <br>
  <br>
  <button id="view-video-btn-3" style="background: #ff69b4; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; font-family: 'Dancing Script', cursive; font-size: 1.2rem;">
    🎂🍾❤️ Happy Birthday ❤️🎂🍾
  </button>`
];


// Date Config (Feb = Index 1)
// --- Date Config & Manual Override ---
const manuallyUnlocked = [7]; // Add any day numbers here you want to unlock early (e.g., Day 3 and Day 5)

const startDate = new Date(2026, 1, 20); 
const day7UnlockDate = new Date(2026, 1, 26);
const today = new Date();
today.setHours(0, 0, 0, 0); 

document.querySelectorAll(".day-btn").forEach((btn) => {
  const day = parseInt(btn.dataset.day);
  let unlockDate;
  
  if (day === 7) {
    unlockDate = day7UnlockDate;
  } else {
    unlockDate = new Date(startDate);
    unlockDate.setDate(startDate.getDate() + (day - 1));
  }

  // Check if today is the date OR if the specific day is in our manual list
  const isUnlocked = (today >= unlockDate) || manuallyUnlocked.includes(day);

  if (isUnlocked) {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.innerText = `Day ${day}`; // Ensures the lock icon is removed

    btn.addEventListener("click", () => {
      popSound.currentTime = 0;
      cheerSound.currentTime = 0;
      popSound.play().catch(() => {});
      cheerSound.play().catch(() => {});

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 9999, 
        colors: ['#ff0000', '#ff69b4', '#ffffff']
      });

      letterText.innerHTML = letters[day - 1];
      modal.classList.remove("hidden");
    });
  } else {
    btn.disabled = true;
    btn.innerText = `Day ${day} 🔒`;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
  }
});

// closeBtn.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  // This line stops any video from playing once the modal is closed
  letterText.innerHTML = ""; 
});

// Day 7 Egg Logic
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('egg')) {
    popSound.currentTime = 0;
    popSound.play().catch(() => {});
    confetti({
      particleCount: 200,
      spread: 360,
      zIndex: 9999,
      origin: { y: 0.5 }
    });
    alert('Gift for the best bf! 🎁');
  }
});


// Use event delegation to catch the click on the "Watch Video" button
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'view-video-btn') {
    videoModal.classList.remove("hidden");
    mainVideo.play();
  }
});
// Use event delegation to catch the click on the "Watch Video" button
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'view-video-btn-2') {
    videoModal2.classList.remove("hidden");
    mainVideo2.play();
  }
});

// Use event delegation to catch the click on the "Watch Video" button
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'view-video-btn-3') {
    videoModal3.classList.remove("hidden");
    mainVideo3.play();
  }
});

// Close video modal and stop playback
closeVideoBtn.addEventListener("click", () => {
  videoModal.classList.add("hidden");
  mainVideo.pause();
  mainVideo.currentTime = 0;
});


closeVideoBtn2.addEventListener("click", () => {
  videoModal2.classList.add("hidden");
  mainVideo2.pause();
  mainVideo2.currentTime = 0;
});

closeVideoBtn3.addEventListener("click", () => {
  videoModal3.classList.add("hidden");
  mainVideo3.pause();
  mainVideo3.currentTime = 0;
});

// ESC key functionality to close both modals
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    // Close Letter Modal
    modal.classList.add("hidden");
    // Close Video Modal
    videoModal.classList.add("hidden");
    // Safety: Stop the video if it was playing
    if (!mainVideo.paused) {
      mainVideo.pause();
      mainVideo.currentTime = 0;
    }
    // Optional: Clear the innerHTML to stop any other sounds/videos
    letterText.innerHTML = "";
  }
});
function openDay4() {
  console.log("Button clicked!"); 
  const modal = document.getElementById('image-modal');
  if (modal) {
    // 1. Remove the hidden class
    modal.classList.remove('hidden');
    // 2. Force the display style to flex (standard for centering modals)
    modal.style.setProperty('display', 'flex', 'important');
    // 3. Ensure it's on top of everything
    modal.style.zIndex = "10001";
    console.log("Modal should now be visible");
  } else {
    console.error("ID 'image-modal' not found in HTML");
  }
}
function openDay5() {
  console.log("Button clicked!"); 
  const modal = document.getElementById('image-modal-5');
  if (modal) {
    // 1. Remove the hidden class
    modal.classList.remove('hidden');
    // 2. Force the display style to flex (standard for centering modals)
    modal.style.setProperty('display', 'flex', 'important');
    // 3. Ensure it's on top of everything
    modal.style.zIndex = "10001";
    console.log("Modal should now be visible");
  } else {
    console.error("ID 'image-modal' not found in HTML");
  }
}

function closeImageModal2() {
  const modal = document.getElementById('image-modal-5');
  modal.classList.add('hidden');
  modal.style.display = 'none';
}
function closeImageModal() {
  const modal = document.getElementById('image-modal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
}


function triggerDay7() {
    const overlay = document.getElementById('firework-overlay');
    const day7Modal = document.getElementById('day7-modal');
    const video7 = document.getElementById('main-video-3');

    // 1. Show the dark "Night Sky" overlay
    overlay.style.setProperty('display', 'flex', 'important');

    const duration = 6 * 1000; // 6 seconds
    const animationEnd = Date.now() + duration;

    // 2. The Fireworks Loop
    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        // Randomly pick a spot on the screen (x: 0 to 1, y: 0 to 1)
        const randomX = Math.random();
        const randomY = Math.random() * 0.6; // Keep fireworks in the top 60% of screen

        // Execute a "Firework" burst
        confetti({
            particleCount: 40,
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            origin: { x: randomX, y: randomY },
            zIndex: 21000, // Higher than the black overlay
            colors: ['#ff0000', '#ff69b4', '#ffffff', '#ffd700', '#00ffff'], // Festive colors
            shapes: ['circle'],
            gravity: 0.5,
            scalar: 1.2
        });
        
        // Add side-bursts occasionally for extra energy
        if (timeLeft % 1000 < 250) {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                zIndex: 21000
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                zIndex: 21000
            });
        }

    }, 300); // New firework every 0.3 seconds

    // 3. Transition to Video Modal
    setTimeout(() => {
        overlay.style.display = 'none';
        day7Modal.classList.remove('hidden');
        day7Modal.style.setProperty('display', 'flex', 'important');
        if(video7) {
            video7.play();
        }
    }, 6000);
}
