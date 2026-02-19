const modal = document.getElementById("letter-modal");
const letterText = document.getElementById("letter-text");
const closeBtn = document.getElementById("close-btn");

// --- Sound Configuration ---
const popSound = new Audio('confetti_pop.mp3'); 
const cheerSound = new Audio('cheers.mp3');

const letters = [
  `💌 <strong>Day 1 – “The Magic of You”</strong><br>Ever since you came into my life...<br>"For indeed, with hardship [will be] ease." (94:5-6)`,
  `💌 <strong>Day 2 – “A Memory I Love”</strong><br>Us, laughing uncontrollably over something silly...`,
  `💌 <strong>Day 3 – “For the Days That Feel Heavy”</strong><br>You are stronger than you know...`,
  `💌 <strong>Day 4 – “Thank You for Just Being You”</strong><br>You’re not just my favorite person. You’re my home.`,
  `💌 <strong>Day 5 – “What I Dream About”</strong><br>Morning coffee together, sleepy smiles...`,
  `💌 <strong>Day 6 – “If You Ever Feel Alone”</strong><br>I’m thinking of you. You are so loved.`,
  `💌 <strong>Day 7 – “You Make Me the Happiest”</strong><br>The sweetest adventure of my life.<br><span class="egg" data-egg="7" style="font-size:2rem;cursor:pointer;">🎁</span>`
];

// Date Config (Feb = Index 1)
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

  if (today >= unlockDate) {
    btn.addEventListener("click", () => {
      // Play Sounds
      popSound.play().catch(e => console.log("Audio play blocked"));
      cheerSound.play().catch(e => console.log("Audio play blocked"));

      // Trigger Confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 9999, // Force over modal
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

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Day 7 Egg Logic
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('egg')) {
    confetti({
      particleCount: 200,
      spread: 360,
      zIndex: 9999,
      origin: { y: 0.5 }
    });
    alert('Gift for the best girl! 🎁');
  }
});
