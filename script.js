// =======================
// Dark Mode
// =======================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.textContent="🌞";
    }else{
        themeBtn.textContent="🌙";
    }
});

// =======================
// Password Strength Checker
// =======================

const passwordInput=document.getElementById("passwordInput");
const strengthText=document.getElementById("strengthText");

passwordInput.addEventListener("input",()=>{

let password=passwordInput.value;

if(password.length==0){

strengthText.innerHTML="Password Strength";

}
else if(password.length<6){

strengthText.innerHTML="🔴 Weak Password";

strengthText.style.color="red";

}
else if(password.length<10){

strengthText.innerHTML="🟠 Medium Password";

strengthText.style.color="orange";

}
else{

strengthText.innerHTML="🟢 Strong Password";

strengthText.style.color="lime";

}

});

// =======================
// Cyber Quiz
// =======================

const quiz=[

{
question:"Which attack steals personal information using fake websites?",

answers:["Malware","Phishing","Firewall","VPN"],

correct:1

},

{

question:"Which password is strongest?",

answers:[

"123456",

"password",

"Cyber@12345",

"abcdef"

],

correct:2

},

{

question:"What should you do before clicking a link?",

answers:[

"Click immediately",

"Ignore the URL",

"Check if it is trusted",

"Share it"

],

correct:2

}

];

let currentQuestion=0;

const question=document.getElementById("question");

const answers=document.getElementById("answers");

const nextBtn=document.getElementById("nextBtn");

function loadQuestion(){

question.innerHTML=quiz[currentQuestion].question;

answers.innerHTML="";

quiz[currentQuestion].answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.innerHTML=answer;

btn.style.display="block";
btn.style.margin="10px 0";

btn.onclick=function(){

if(index===quiz[currentQuestion].correct){

alert("✅ Correct!");

}else{

alert("❌ Wrong Answer");

}

};

answers.appendChild(btn);

});

}

loadQuestion();

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion>=quiz.length){

currentQuestion=0;

}

loadQuestion();

});

// =======================
// Daily Cyber Tips
// =======================

const tips=[

"Use strong and unique passwords.",

"Enable Two-Factor Authentication.",

"Never share OTPs with anyone.",

"Update your software regularly.",

"Avoid clicking unknown links.",

"Backup important files frequently.",

"Use antivirus software."

];

const tip=document.getElementById("tip");

const tipBtn=document.getElementById("tipBtn");

tipBtn.addEventListener("click",()=>{

let random=Math.floor(Math.random()*tips.length);

tip.innerHTML=tips[random];

});