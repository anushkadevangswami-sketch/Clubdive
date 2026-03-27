// CLUBS
document.addEventListener("DOMContentLoaded", () => {
const clubs = [
  { name:"PICT CSI", keys:["coding","web","ml","ai","career","hackathon","tech","competition"] },
  { name:"PICT ACM", keys:["coding","research","career","competition","tech"] },
  { name:"PICT IEEE", keys:["tech","hardware","innovation","competition"] },
  { name:"GameDevUtopia", keys:["gaming","creative","design"] },
  { name:"PICT Robotics", keys:["robotics","hardware"] },
  { name:"PICT Automobile", keys:["hardware","design"] },
  { name:"TEDxPICT", keys:["speaking","community"] },
  { name:"PICT DEBSOC", keys:["speaking","debate"] },
  { name:"PICT MUN", keys:["debate","leadership","research"] },
  { name:"EDC PICT", keys:["startup","business"] },
  { name:"PICT Art Circle", keys:["music","creative","performance"] },
  { name:"PICTOREAL", keys:["photography","creative"] },
  { name:"PICT NSS", keys:["community","social"] },
  { name:"PICT Sports", keys:["sports","fitness"] }
];

// QUESTIONS
const questions = [
{
text:"🚀 What actually excites you the most?",
opts:[
 {l:"Building apps or coding cool stuff", t:["coding","tech"]},
 {l:"Working with machines, robots, or hardware", t:["hardware","robotics"]},
 {l:"Music, art, or performing on stage", t:["creative","music"]},
 {l:"Starting something big (startup vibes)", t:["startup","business"]},
 {l:"Helping people or making impact", t:["social","community"]},
 {l:"Playing sports or staying active", t:["sports","fitness"]}
]},
{
text:"🧠 How would your friends describe you?",
opts:[
 {l:"Logical problem-solver", t:["coding","research"]},
 {l:"Creative and expressive", t:["creative"]},
 {l:"Friendly and social", t:["community"]},
 {l:"Competitive and driven", t:["competition"]},
 {l:"Natural leader", t:["leadership"]},
 {l:"Confident speaker", t:["speaking","debate"]}
]},
{
text:"📈 What skill do you MOST want to level up?",
opts:[
 {l:"Coding / AI / Tech skills", t:["coding","ml","ai"]},
 {l:"Public speaking & confidence", t:["speaking"]},
 {l:"Creative skills", t:["creative","design"]},
 {l:"Leadership & management", t:["leadership"]},
 {l:"Research & deep thinking", t:["research"]},
 {l:"Fitness & sports", t:["fitness"]}
]},
{
text:"💡 Which domain sounds the coolest?",
opts:[
 {l:"Web apps & software", t:["web","coding"]},
 {l:"AI & ML", t:["ml","ai"]},
 {l:"Game development", t:["gaming"]},
 {l:"Robotics", t:["robotics"]},
 {l:"Business", t:["business"]},
 {l:"Still exploring", t:["creative"]}
]},
{
text:"🎯 What’s your dream future?",
opts:[
 {l:"Developer", t:["coding","career"]},
 {l:"Startup founder", t:["startup"]},
 {l:"Artist", t:["creative"]},
 {l:"Researcher", t:["research"]},
 {l:"Social impact", t:["social"]},
 {l:"Athlete", t:["sports"]}
]},
{
text:"🔥 What events do you enjoy?",
opts:[
 {l:"Hackathons", t:["hackathon","coding"]},
 {l:"Cultural events", t:["performance"]},
 {l:"Debates", t:["debate"]},
 {l:"Startup competitions", t:["startup"]},
 {l:"Volunteering", t:["social"]},
 {l:"Sports tournaments", t:["sports"]}
]},
{
text:"🤝 Why join a club?",
opts:[
 {l:"Learn skills", t:["coding","tech"]},
 {l:"Make friends", t:["community"]},
 {l:"Win competitions", t:["competition"]},
 {l:"Help society", t:["social"]},
 {l:"Express creativity", t:["creative"]},
 {l:"Career growth", t:["career"]}
]}
];

let current = 0;
let selectedTags = [];

const container = document.querySelector(".quiz-container");
const questionEl = document.querySelector("h1");
const optionsEl = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");
const progressText = document.querySelector(".progress-text");
const progressFill = document.querySelector(".progress-fill");

// LOAD QUESTION
function loadQuestion() {
  const q = questions[current];

  container.classList.remove("show");
  container.classList.add("fade");

  setTimeout(() => {
    questionEl.innerText = q.text;
    progressText.innerText = `QUESTION ${current+1} OF 7`;
    progressFill.style.width = `${((current+1)/7)*100}%`;

    optionsEl.innerHTML = "";

    q.opts.forEach(opt => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.innerText = opt.l;

      div.addEventListener("click", () => {
        document.querySelectorAll(".option").forEach(o => o.classList.remove("active"));
        div.classList.add("active");
        div.dataset.tags = JSON.stringify(opt.t);
      });

      optionsEl.appendChild(div);
    });

    container.classList.remove("fade");
    container.classList.add("show");

  }, 200);
}

// NEXT BUTTON
nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(".option.active");

  if (!selected) {
    alert("Select an option!");
    return;
  }

  const tags = JSON.parse(selected.dataset.tags);

// weight by question index
tags.forEach(tag => {
  for (let i = 0; i <= current; i++) {
    selectedTags.push(tag);
  }
});
  current++;

  if (current < questions.length) loadQuestion();
  else showResult();
});

// RESULT
function showResult() {
  const score = {};
  clubs.forEach(c => score[c.name] = 0);

 // 🔥 TAG WEIGHTS
const weightMap = {
  coding: 2,
  tech: 2,
  ai: 3,
  ml: 3,
  startup: 4,
  business: 3,
  robotics: 4,
  hardware: 3,
  creative: 2,
  music: 2,
  debate: 3,
  speaking: 3,
  leadership: 3,
  social: 3,
  sports: 3,
  fitness: 2,
  career: 4,
  competition: 2,
  research: 3
};

selectedTags.forEach(tag => {
  const weight = weightMap[tag] || 1;

  clubs.forEach(c => {
    if (c.keys.includes(tag)) {
      score[c.name] += weight;
    }
  });
});

  const top3 = Object.entries(score)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,3);

  container.innerHTML = `
    <h1>Your Perfect Clubs 🎉</h1>
    <div class="options">
      ${top3.map(c=>`<div class="option">${c[0]}</div>`).join("")}
    </div>
  `;
}

// INIT
loadQuestion();

});