// Copyright
console.log('%c"Great poets imitate and improve, whereas small ones steal and spoil." - %cW. H. Davenport Adams',  "font-size: 16px; font-family: 'Ubuntu Mono'; padding: 8px 12px; background-color: black; color: #DDD", "font-size: 16px; font-family: 'Ubuntu Mono'; padding: 8px 12px; background-color: black; color: #DDD; font-weight: bold");
console.log("%cCopyright © 2021-" + new Date().getFullYear() + " Marc Meynet - All Codes Reserved", "font-size: 16px; font-family: 'Ubuntu Mono'; padding: 8px 12px; font-weight: bold; background-color: black; color: #1FC742");
// Real code starts below

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 40*2;
canvas.height = 240;

let upArrow;
let downArrow;
let leftArrow;
let rightArrow;
let enterKey;
let escKey;
let typing;

let textboxDiv;

let isMobileDevice;

let isCatRunning;
let cat;
let bird;

function isRectColliding(rect1X, rect1Y, rect1Width, rect1Height, rect2X, rect2Y, rect2Width, rect2Height) {
  if (rect1X < rect2X + rect2Width &&
    rect1X + rect1Width > rect2X &&
    rect1Y < rect2Y + rect2Height &&
    rect1Height + rect1Y > rect2Y) {
    return true;
  } else {
      return false;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function chooseNav(index) {
  switch(index) {
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
      window.open("mailto:info@marcmeynet.ch?subject=Contact (www.marcmeynet.ch)");
      break;
    default:
      alert("Selection " + menuIndex + " n'est pas encore disponible");
      break;
  }
}

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
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      isMobileDevice = true;
      document.addEventListener("touchend", event => {
        for (let i = 0; i < menuList.length; i++) {
          if (isRectColliding(event.changedTouches[0].pageX, event.changedTouches[0].pageY, event.changedTouches[0].radiusX, event.changedTouches[0].radiusY,
                              menuList[i].offsetLeft, menuList[i].offsetTop, menuList[i].clientWidth, menuList[i].clientHeight)) {
            chooseNav(i);
          }
        }
      });
  }

    let browserName;
    if(navigator.userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(navigator.userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(navigator.userAgent.match(/safari/i)){
        browserName = "safari";
      } else if(navigator.userAgent.match(/opr\//i)){
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

  isCatRunning = true;
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
  if (isMobileDevice) {
    menu.style.flexDirection = "column";
    instructions.style.display = "none";
  } else {
    instructions.style.display = "flex";
  }
  for (let i = 0; i < lineBorders.length; i++) {
    lineBorders[i].style.display = "block";
    lineBorders[i].style.overflow = "hidden";
  }

  loop();
}

let menuList = document.getElementsByClassName("menu-item");
let menuIndex = 0;
let keyPressed = false;


function loop() {
requestAnimationFrame(loop);

ctx.clearRect(0, 0, canvas.width, canvas.height);
if (canvas.width != window.innerWidth - 40*2) {
  canvas.width = window.innerWidth - 40*2;
}

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

  if (!isMobileDevice) {
    if (theSpan[0].id == "active") {
      theSpan[0].style.display = "inline";
      theSpan[0].style.color = "#FFCC00";
    } else {
      theSpan[0].style.display = "none";
    }
  } else {
    theSpan[0].style.display = "none";
  }
}

  if (enterKey && !keyPressed) {
    keyPressed = true;
    chooseNav(menuIndex);
  }

  if (isCatRunning) {
    // cat = new Cat(Math.floor(canvas.width/24)*12, canvas.height/2);
    if (getRandomInt(0, 2)) {
      cat = new Cat(-72, canvas.height/2);
    } else {
      cat = new Cat(Math.floor(canvas.width/24)*24 + 72, canvas.height/2);
    }
    bird = new Bird(getRandomInt(1, (canvas.width-24)/12)*12, getRandomInt(1,4)*12);
    isCatRunning = false;
  } else {
    cat.update();
    cat.draw();
    bird.update();
    bird.draw();
  }

}

if (escKey && !keyPressed) {
  window.close();
}

Main();