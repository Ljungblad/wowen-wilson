"use strict";

const wows = [
  { audioFile: "wow1.mp3", wow: "Weeow" },
  { audioFile: "wow2.mp3", wow: "Weoow" },
  { audioFile: "wow3.mp3", wow: "WEOW!" },
  { audioFile: "wow4.mp3", wow: "Weow" },
  { audioFile: "wow5.mp3", wow: "Waow" },
  { audioFile: "wow6.mp3", wow: "Wow" },
  { audioFile: "wow7.mp3", wow: "Wweeoow" },
  { audioFile: "wow8.mp3", wow: "weeow" }
];

const image = document.querySelector(".image");
const audio = document.querySelector(".audio");
const header = document.querySelector(".wow__message");

function shuffle(wows) {
  for (let i = wows.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wows[i], wows[j]] = [wows[j], wows[i]];
  }
  return wows;
}

image.addEventListener("click", event => {
  shuffle(wows);
  console.log(wows[1]["audioFile"]);
  const audioSource = `<source class="audio__source" src="audio/${wows[1]["audioFile"]}" type="audio/mpeg">`;
  const wowMessage = `<h1>${wows[1]["wow"]}</h1>`;
  audio.innerHTML = audioSource;
  header.innerHTML = wowMessage;
  audio.load();
  audio.play();
});
