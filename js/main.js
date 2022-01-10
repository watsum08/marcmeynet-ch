let upArrow;
let downArrow;
let leftArrow;
let rightArrow;
let enterKey;
let escKey;

let textboxDiv;

document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") {
    upArrow = true;
  } else if (event.key === "ArrowDown") {
    downArrow = true;
  } else if (event.key === "ArrowLeft") {
    leftArrow = true;
  } else if (event.key === "ArrowRight") {
    rightArrow = true;
  } else if (event.key === "Enter") {
    enterKey = true;
  } else if (event.key === "Escape") {
    escKey = true;
  }
}); 
document.addEventListener("keyup", event => {
  if (event.key === "ArrowUp") {
    upArrow = false;
  } else if (event.key === "ArrowDown") {
    downArrow = false;
  } else if (event.key === "ArrowLeft") {
    leftArrow = false;
  } else if (event.key === "ArrowRight") {
    rightArrow = false;
  } else if (event.key === "Enter") {
    enterKey = false;
  } else if (event.key === "Escape") {
    escKey = true;
  }
});

//Function pause, to use with 'async' and 'await'
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

async function asyncTyper(div, input) {
    for (let i = 0; i < input.length; i++)
    {
        div.innerHTML +=  input[i];
        await sleep(40);
    }
}

function Main() {
    let userAgent;
    let userIP;

    let browserName;
    if(navigator.userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(navigator.userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(navigator.userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(navigator.userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(navigator.userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="unknown";
      }

    document.getElementById("userAgent").innerHTML = browserName + "@";
    document.getElementById("userIP").innerHTML = "84.16.76.229";

    textboxDiv = document.getElementById("textbox");
    
    welcome();
    textbox();
    menu();
}

function welcome() {
  let welcome = document.getElementById("welcome");

  welcome.style.display = "block";
}

function textbox() {
 textboxDiv.innerHTML = "What are you looking for?";
}

function menu() {
  let menu = document.getElementById("menu");
  let lineBorders = document.getElementsByClassName("lineBorder");
  let instructions = document.getElementById("instructions");

  menu.style.display = "flex";
  for (let i = 0; i < lineBorders.length; i++) {
    lineBorders[i].style.display = "block";
  }
  instructions.style.display = "flex";

  loop();
}

let menuList = document.getElementsByClassName("menu-item");
let menuIndex = 0;
let keyPressed = false;

function sayAJoke(n) {
textboxDiv.innerHTML = "<wbr>";
let question;
let answer;

switch(n) {
  case 0:
    question = "How does a computer get drunk?";
    answer = "It takes screenshots";
    break;
  case 1:
    question = "Why did the PowerPoint cross the road?";
    answer = "To get to the other slide";
    break;
  case 2:
    question = "Why didn't the client tip the server?";
    answer = "Because it didn't have enough cache";
    break;
  case 3:
    question = "I would love to talk about computers..";
    answer = "But it makes my mother board";
    break;
  case 4:
    question = "Why are people using the metric system so good at programming?";
    answer = "Because they are pro-grammers";
    break;
  case 5:
    question = "What's the best thing about UDP jokes?";
    answer = "I don't care if you get them";
    break;
  case 6:
    question = "How many programmers does it take to change a light bulb?";
    answer = "None, it's a hardware problem";
    break;
}

sleep(300).then(() => {
  asyncTyper(textboxDiv, question);

  sleep(question.length*40+2000).then(() => {
    asyncTyper(textboxDiv, " " + answer);
  });
});
}

function loop() {
requestAnimationFrame(loop);

if (rightArrow && !leftArrow && !upArrow && !downArrow && !keyPressed && menuIndex < menuList.length-1) {
  keyPressed = true;
  menuIndex++;
} else if (leftArrow && !rightArrow && !downArrow && !upArrow && !keyPressed && menuIndex > 0) {
  keyPressed = true;
  menuIndex--;
} else if (upArrow && !rightArrow && !downArrow && !leftArrow && !keyPressed && menuIndex > 3) {
  keyPressed = true;
  menuIndex -= 4;
} else if (downArrow && !rightArrow && !leftArrow && !upArrow && !keyPressed && menuIndex < menuList.length-4) {
  keyPressed = true;
  menuIndex += 4;
} else if (!upArrow && !downArrow && !leftArrow && !rightArrow && !enterKey) {
  keyPressed = false;
}

for (let i = 0; i < menuList.length; i++) {
  let theSpan = menuList[i].getElementsByClassName("arrow");
  theSpan[0].id = "";
  
  let menuObj = menuList[menuIndex].getElementsByClassName("arrow");
  menuObj[0].id = "active";

  if (theSpan[0].id == "active") {
    theSpan[0].style.display = "inline";
    theSpan[0].style.color = "#FFCC00";
  } else {
    theSpan[0].style.display = "none";
  }
}

if (enterKey && !keyPressed) {
  keyPressed = true;

  switch(menuIndex) {
    case 0:
      textboxDiv.innerHTML = "<wbr>";
      sleep(300).then(() => {
        asyncTyper(textboxDiv, "Hello !");
      });
      break;
    case 1:
      window.location.href = "whoami.html";
      break;
    case 2:
      window.location.href = "myprojects.html";
      break;
    case 3:
      alert("Selection " + menuIndex + " not available yet");
      break;
    case 4:
      window.location.href = "cat.html";
      break;
    case 5:
      window.location.href = "matrix.html";
      break;
    case 6:
      sayAJoke(Math.floor(Math.random() * 7));
      break;
    case 7:
      alert("PAS ENCORE, MAIS TRES BIENTOT!");
      break;
  }
  enterKey = false;
  keyPressed = false;
}

if (escKey && !keyPressed) {
  window.close();
}

}

Main();