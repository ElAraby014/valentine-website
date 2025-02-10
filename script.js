const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const responseText = document.getElementById('response-text');
const container = document.querySelector('.container');

let noCount = 0;
const noMessages = [
  "Don't do that!",
  "Think again!",
  "Staaawwwwp!",
  "Don't be rude!",
  "Please? 🥺",
  "I'll cry! 😭",
  "You're breaking my heart! 💔",
];

yesBtn.addEventListener('click', () => {
  container.innerHTML = `<h1>Ok yay, love you BY THE WAY !!! 💖</h1>`;
});

noBtn.addEventListener('click', () => {
  noCount++;
  if (noCount < noMessages.length) {
    responseText.textContent = noMessages[noCount - 1];
  } else {
    responseText.textContent = noMessages[noMessages.length - 1];
  }

  // Increase the size of the Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize + 10}px`;

  // Decrease the size of the No button
  const noBtnSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
  noBtn.style.fontSize = `${noBtnSize - 5}px`;

  // Move the No button randomly
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${Math.random() * 80}%`;
  noBtn.style.top = `${Math.random() * 80}%`;
});