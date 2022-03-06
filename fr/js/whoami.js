let upArrow;
let downArrow;
let enterKey;
let backspaceKey;

let textLines = document.getElementsByClassName("message textdiv");
let instructions = document.getElementById("instructions");
let lineBorders = document.getElementsByClassName("lineBorder");
let linksDiv = document.getElementById("links");
let languagesAscii = document.getElementsByClassName("language-ascii");

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

function Main() {
  let browserName;
  if(navigator.userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    } else if(navigator.userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    } else if(navigator.userAgent.match(/safari/i)){
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

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobileDevice = true;
}

  sleep(200).then(() => {
    introduction();
  });
}

let typing = false;

function introduction() {
  let birthday = new Date("8/8/1999");
  let today = new Date();
  let ageInYears =  Math.floor((today - birthday) / 31556952000);
  let string;

  for (let i = 0; i < textLines.length; i++) {
    textLines[i].style.display = "none";
  }

  for (let i = 0; i < 4; i++) {
    textLines[i].style.display = "block";
  }

  typing = true;
  string = "Permettez-moi de m'introduire"
  asyncTyper(textLines[0], string);

  sleep(string.length*40+500).then(() => {
    string = "Je m'appelle Marc Meynet"
    asyncTyper(textLines[1], string);

    sleep(string.length*40+500).then(() => {
      string = "Je suis un étudiant informatique de " + ageInYears + " ans vivant en Suisse";
      asyncTyper(textLines[2], string);

          sleep(string.length*40+500).then(() => {
            string = "Voulez-vous plus d'informations sur moi?";
            asyncTyper(textLines[3], string);

              sleep(string.length*40+500).then(() => {
                linksDiv.style.display = "block";

                for (let i = 0; i < lineBorders.length; i++) {
                  lineBorders[i].style.display = "block";
                }

                typing = false;
                if (!isMobileDevice) {
                  menuList[2].style.display = "none";
                  instructions.style.display = "flex";

                  loop();
                } else {
                  document.addEventListener("touchend", event => {
                    for (let i = 0; i < menuList.length; i++) {
                      if (isRectColliding(event.changedTouches[0].pageX, event.changedTouches[0].pageY, event.changedTouches[0].radiusX, event.changedTouches[0].radiusY,
                                          menuList[i].offsetLeft, menuList[i].offsetTop, menuList[i].clientWidth, menuList[i].clientHeight)) {
                        chooseNav(i);
                      }
                    }
                  });
                }
              });
            });
          });
        });
}

let menuList = document.getElementsByClassName("message link");
let menuIndex = 0;
let menuReducer = 0;
let keyPressed = false;
let yesNext = false;
let noNext = 0;

function chooseNav(index) {
  switch(index) {
    case 0:
      if (!yesNext) {
        typing = true;

        instructions.style.display = "none";
        for (let i = 0; i < lineBorders.length; i++) {
          lineBorders[i].style.display = "none";
        }
        linksDiv.style.display = "none";
        for (let i = 0; i < textLines.length; i++) {
          textLines[i].innerHTML = "";
        }
        let string = "Mes langages de programmation préférés sont: ";
        textLines[0].style.display = "block";
        asyncTyper(textLines[0], string);
        sleep(string.length*40+500).then(() => {

          languagesAscii[0].style.display = "block";

          sleep(500).then(() => {

            languagesAscii[1].style.display = "block";

            sleep(500).then(() => {

              languagesAscii[2].style.display = "block";
  
              sleep(500).then(() => {

                let string = "Visitez les liens au-dessous pour voir ce que je peux faire! ";
                textLines[3].style.display = "block";
                asyncTyper(textLines[3], string);
    
                sleep(string.length*40+500).then(() => {
                  for (let i = 0; i < lineBorders.length; i++) {
                    lineBorders[i].style.display = "block";
                  }
                  linksDiv.style.display = "block";
                  menuList[0].style.display = menuList[1].style.display = "none";
                  menuList[2].style.display = "block";

                  if (!isMobileDevice) {
                    menuIndex = 2;
                    menuReducer = 2;
                    instructions.style.display = "flex";
        
                    typing = false;

                    yesNext = true;
                  }
                });
              });
            });
          });
        });
      }
      break;
    case 1:
      if (noNext === 0 && !typing) {
        typing = true;
        textLines[4].style.display = "block";
        let string = "SVP!";
        asyncTyper(textLines[4], string);

        sleep(string.length*40+500).then(() => {
          typing = false;
          noNext++;
        });
      } else if (noNext === 1 && !typing) {
        typing = true;
        textLines[5].style.display = "block";
        let string = "Oke..";
        asyncTyper(textLines[5], string);

        sleep(string.length*40+500).then(() => {
          typing = false;
          noNext++;
        });
      } else if (noNext === 2 && !typing) {
        typing = true;
        textLines[6].style.display = "block";
        let string = "Bon d'accord au revoir!";
        asyncTyper(textLines[6], string);

        sleep(string.length*40+500).then(() => {
          typing = false;
          noNext++;
          window.location.replace("main.html");
        });
      }
      break;
    case 2:
      window.location.replace("myprojects.html");
      break;
    case 3:
      window.open("https://github.com/watsum08/", "");
      break;
    case 4:
      window.open("../MarcAnthonyMeynet_CV.pdf", "");
      break;
  }
}

function loop() {
  requestAnimationFrame(loop);

  if (!typing) {
    if (backspaceKey && !keyPressed) {
      window.location.replace("main.html");
    }

    if (downArrow && !upArrow && !keyPressed && menuIndex < menuList.length - 1) {
      keyPressed = true;
      ++menuIndex;
      if (!yesNext && menuIndex === 2) {
        menuIndex = 3;
      }
    } else if (upArrow && !downArrow && !keyPressed && menuIndex > menuReducer) {
      keyPressed = true;
      --menuIndex;
      if (!yesNext && menuIndex === 2) {
        menuIndex = 1;
      }
    } else if (!upArrow && !downArrow && !enterKey) {
      keyPressed = false;
    } else if (enterKey && !keyPressed) {
      keyPressed = true;
      
      chooseNav(menuIndex);
      
      enterKey = false;
      keyPressed = false;
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
      }
    }
  }
  }
}