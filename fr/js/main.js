let upArrow;
let downArrow;
let leftArrow;
let rightArrow;
let enterKey;
let escKey;
let typing;

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
  const timeHoursNow = new Date().getHours();
  let string;
  typing = true;
  if (timeHoursNow > 6 && timeHoursNow < 19) {
    string = "Bonjour! Comment puis-je vous aider?";
  } else {
    string = "Bonsoir! Comment puis-je vous aider?";
  }
 asyncTyper(textboxDiv, string);
 sleep(string.length*40).then(() => {
  typing = false;
});
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


function loop() {
requestAnimationFrame(loop);

if (rightArrow && !leftArrow && !upArrow && !downArrow && !keyPressed && menuIndex < menuList.length-1) {
  keyPressed = true;
  menuIndex++;
} else if (leftArrow && !rightArrow && !downArrow && !upArrow && !keyPressed && menuIndex > 0) {
  keyPressed = true;
  menuIndex--;
} else if (upArrow && !rightArrow && !downArrow && !leftArrow && !keyPressed && menuIndex > 2) {
  keyPressed = true;
  menuIndex -= 3;
} else if (downArrow && !rightArrow && !leftArrow && !upArrow && !keyPressed && menuIndex < menuList.length-3) {
  keyPressed = true;
  menuIndex += 3;
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
      if (!typing) {
        typing = true;
        textboxDiv.innerHTML = "<wbr>";
        let string = "Salut !";
        sleep(300).then(() => {
          asyncTyper(textboxDiv, string);

          sleep(string.length*40).then(() => {
            typing = false;
          });
        });
      }
      
      break;
    case 1:
      window.location.href = "whoami.html";
      break;
    case 2:
      window.location.href = "myprojects.html";
      break;
    case 3:
      window.open("https://github.com/watsum08/", "");
      break;
    case 4:
      window.location.href = "../en/main.html";
      break;
    case 5:
      window.open("mailto:info@marcmeynet.ch");
      break;
    default:
      alert("Selection " + menuIndex + " not available yet");
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