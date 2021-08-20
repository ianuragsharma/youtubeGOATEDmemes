const youtube = [
  "https://www.youtube.com/embed/_2zEqSCD7F4?controls=0",
  "https://www.youtube.com/embed/XSoJqdPi4Iw?controls=0",
  "https://www.youtube.com/embed/z6-FWJteNLI?controls=0",
  "https://www.youtube.com/embed/D9-voINFkCg?controls=0",
  "https://www.youtube.com/embed/Obgnr9pc820?controls=0",
  "https://www.youtube.com/embed/cw9FIeHbdB8?controls=0",
  "https://www.youtube.com/embed/vwrE3_JsuqM?controls=0",
  "https://www.youtube.com/embed/Fkk9DI-8el4?controls=0",
  "https://www.youtube.com/embed/kk0feCp_MZ4?controls=0",
  "https://www.youtube.com/embed/lg5WKsVnEA4?controls=0",
  "https://www.youtube.com/embed/ee925OTFBCA?controls=0",
  "https://www.youtube.com/embed/hHZvUeAdzeI?controls=0",
  "https://www.youtube.com/embed/CgHW02YF50s?controls=0",
  "https://www.youtube.com/embed/G7RgN9ijwE4?controls=0",
  "https://www.youtube.com/embed/4v8ek9TEeOU?controls=0",
  "https://www.youtube.com/embed/QbeBhdjW1_w?controls=0",
  "https://www.youtube.com/embed/cMQJNvUERTU?controls=0",
  "https://www.youtube.com/embed/J5GGG0PaSe4?controls=0",
  "https://www.youtube.com/embed/6L7NV7hxlo4?controls=0",
  "https://www.youtube.com/embed/xaRM8kvS1m0?controls=0",
  "https://www.youtube.com/embed/Src0l4a51sk?controls=0",
];
const iframe = document.querySelector("iframe");
iframe.src = "https://www.youtube.com/embed/_2zEqSCD7F4?controls=0";
const button = document.querySelector(".btn");
let img = 1;
let size = youtube.length;
button.addEventListener("click", () => {
  iframe.src = youtube[img % size];
  img++;
});
