let upArrow;
let downArrow;
let enterKey;
let backspaceKey;

let frames = 0;

let isMobileDevice;

document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp") {
    upArrow = true;
  } else if (event.key === "ArrowDown") {
    downArrow = true;
  } else if (event.key === "Enter") {
    enterKey = true;
  } else if (event.key === "Backspace") {
    backspaceKey = true;
  }
});
document.addEventListener("keyup", event => {
  if (event.key === "ArrowUp") {
    upArrow = false;
  } else if (event.key === "ArrowDown") {
    downArrow = false;
  } else if (event.key === "Enter") {
    enterKey = false;
  } else if (event.key === "Backspace") {
    backspaceKey = true;
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

function chooseNav(index) {
  switch(index) {
    case 0:
      window.open("../MyProjects/BinaryRoll/binaryroll.html", "");
      break;
    case 1:
      window.open("../MyProjects/DropTheBallWebGL/index.html", "");
      break;
    case 2:
      window.open("../MyProjects/BreakoutGame/index.html", "");
      break;
    case 3:
      window.open("../MyProjects/ASCIICat/cat.html", "");
      break;
    case 4:
      window.open("../MyProjects/ImACarrot/game.html", "", "left=320,top=180,width=1280,height=720");
      break;
    case 5:
      window.open("../MyProjects/GravityGame/index.html", "");
      break;
    case 6:
      window.open("../MyProjects/MyPlatformer/index.html", "");
      break;
    case 7:
      window.open("https://the-burger-place.web.app/", "");
      break;
    case 8:
      window.open("https://ameliasbnb.ch/", "");
      break;
  }
}

function Main() {
  let browserName;
  if(navigator.userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    } else if(navigator.userAgent.match(/firefox|fxios/i)){
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
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobileDevice = true;
}

  sleep(200).then(() => {
      introduction();
  });
}

function introduction() {
  let textLines = document.getElementsByClassName("message textdiv");
  let lineBorders = document.getElementsByClassName("lineBorder");
  let projectsDiv = document.getElementById("projects");
  let instructions = document.getElementById("instructions");

  for (let i = 0; i < textLines.length; i++) {
    textLines[i].style.color = "white";
  }

  sleep(500).then(() => {
    asyncTyper(textLines[0], "Voici une liste de mes projets:");

    sleep(2200).then(() => {
      projectsDiv.style.display = "block";

      for (let i = 0; i < lineBorders.length; i++) {
        lineBorders[i].style.display = "block";
      }

      if (!isMobileDevice) {
        instructions.style.display = "flex";
        loop();
      } else {
        document.addEventListener("touchend", event => {
          for (let i = 0; i < menuList.length; i++) {
            if (isRectColliding(event.changedTouches[0].pageX, event.changedTouches[0].pageY, event.changedTouches[0].radiusX, event.changedTouches[0].radiusY,
                                menuList[i].offsetLeft, menuList[i].offsetTop, menuList[i].clientWidth, menuList[i].clientHeight)) {
              if (i > 6) {
                chooseNav(i);
              } else {
                alert("Ce projet n'est disponible qu'en version ordinateur.");
              }
            }
          }
        });
      }
      });
  });
}

function describeProject(index) {
  switch(index) {
    case 0:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " ne laisse pas tomber la balle");
      break;
    case 1:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " mon premier jeu Unity");
      break;
    case 2:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " copie du jeu crée par Atari en 1976");
      break;
    case 3:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " un chat transformé en caractères ASCII");
      break;
    case 4:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " deviens une carrote");
      break;
    case 5:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " tu es le maître de la gravité");
      break;
    case 6:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], ' mon premier "jeu" de plateforme en JavaScript');
      break;
    case 7:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " un projet siteweb vitrine fictif HTML/CSS");
      break;
    case 8:
      descriptions[index].innerHTML = "";
      asyncTyper(descriptions[index], " un siteweb vitrine pour un AirBnb");
      break;
  }
}

let menuList = document.getElementsByClassName("message project");
let descriptions = document.getElementsByClassName("message description");
let menuIndex = 0;
let keyPressed = false;
let description = false;

function loop() {
  requestAnimationFrame(loop);
  if (frames > 600) {
    frames = 0;
  } else {
    frames++;
  }

  if (downArrow && !upArrow && !keyPressed && menuIndex < menuList.length-1) {
    keyPressed = true;
    ++menuIndex;
    frames = 0;
    description = false;
    for (let i = 0; i < descriptions.length; i++) {
      descriptions[i].innerHTML = "";
    }
  } else if (upArrow && !downArrow && !keyPressed && menuIndex > 0) {
    keyPressed = true;
    --menuIndex;
    frames = 0;
    description = false;
    for (let i = 0; i < descriptions.length; i++) {
      descriptions[i].innerHTML = "";
    }
  } else if (backspaceKey && !keyPressed) {
    window.location.replace("main.html");
  } else if (!upArrow && !downArrow && !enterKey) {
    keyPressed = false;
  }

  if (frames > 60 && !description && !isMobileDevice) {
    description = true;
    describeProject(menuIndex);
  }

  if (!isMobileDevice) {
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
        descriptions[i].innerHTML = "";
      }
    }
  
    if (enterKey && !keyPressed) {
      keyPressed = true;
  
      chooseNav(menuIndex);
  
      enterKey = false;
      keyPressed = false;
    }
  }
}