let upArrow;
let downArrow;
let enterKey;
let backspaceKey;

let textLines = document.getElementsByClassName("message textdiv");
let instructions = document.getElementById("instructions");
let lineBorders = document.getElementsByClassName("lineBorder");
let linksDiv = document.getElementById("links");
let languagesAscii = document.getElementsByClassName("language-ascii");

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
  string = "Let me introduce myself"
  asyncTyper(textLines[0], string);

  sleep(string.length*40+500).then(() => {
    string = "My name is Marc Meynet"
    asyncTyper(textLines[1], string);

    sleep(string.length*40+500).then(() => {
      string = "I'm a " + ageInYears + " years old CS student living in Switzerland";
      asyncTyper(textLines[2], string);

          sleep(string.length*40+500).then(() => {
            string = "Wanna know more about me?"
            asyncTyper(textLines[3], string);

              sleep(string.length*40+500).then(() => {
                linksDiv.style.display = "block";

                for (let i = 0; i < lineBorders.length; i++) {
                  lineBorders[i].style.display = "block";
                }

                menuList[2].style.display = "none";
                instructions.style.display = "flex";

                typing = false;

                loop();
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
  
      switch(menuIndex) {
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
            let string = "My preferred programming languages are: ";
            textLines[0].style.display = "block";
            asyncTyper(textLines[0], string);
            sleep(string.length*40+500).then(() => {

              languagesAscii[0].style.display = "block";

              sleep(500).then(() => {

                languagesAscii[1].style.display = "block";
    
                sleep(500).then(() => {

                  languagesAscii[2].style.display = "block";
      
                  sleep(500).then(() => {

                    let string = "Check out the links below to see what I can do! ";
                    textLines[3].style.display = "block";
                    asyncTyper(textLines[3], string);
        
                    sleep(string.length*40+500).then(() => {
                      for (let i = 0; i < lineBorders.length; i++) {
                        lineBorders[i].style.display = "block";
                      }
                      linksDiv.style.display = "block";
                      menuList[0].style.display = menuList[1].style.display = "none";
                      menuList[2].style.display = "block";
                      menuIndex = 2;
                      menuReducer = 2;
                      instructions.style.display = "flex";
          
                      typing = false;

                      yesNext = true;
                    });
                  });
                });
              });
            });
          } else {
            asyncTyper(textLines[3], " Thanks!");
          }
  
          break;
        case 1:
          if (noNext === 0 && !typing) {
            typing = true;
            textLines[4].style.display = "block";
            let string = "Please!";
            asyncTyper(textLines[4], string);

            sleep(string.length*40+500).then(() => {
              typing = false;
              noNext++;
            });
          } else if (noNext === 1 && !typing) {
            typing = true;
            textLines[5].style.display = "block";
            let string = "Okay..";
            asyncTyper(textLines[5], string);

            sleep(string.length*40+500).then(() => {
              typing = false;
              noNext++;
            });
          } else if (noNext === 2 && !typing) {
            typing = true;
            textLines[6].style.display = "block";
            let string = "Alright then goodbye!";
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
        case 4:
          window.open("../MarcAnthonyMeynet_CV.pdf", "");
          break;
      }
      enterKey = false;
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
  }
}