window.onload = Main();
let upArrow;
let downArrow;
let leftArrow;
let rightArrow;
let enterKey;

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
        await sleep(60);
    }
}

function Main() {
    let userAgent;
    let userIP;
    let userCMD;

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

      document.getElementById("userAgent").innerHTML = userAgent = browserName + "@";
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
        document.getElementById("userIP").innerHTML = userIP = e.ip + " ~$";
    });
    
    sleep(1000).then(() => {
        asyncTyper(document.getElementById("userCMD"), "ssh " + userAgent + "67.0.142.13"); 
    });
    userCMD = document.getElementById("userCMD");
    
    sleep(2800).then(() => {
        connecting(userIP);
    });
}

async function connecting() {
    let div1 = document.getElementById("connecting");
    div1.innerHTML = "Connecting to www.marcmeynet.ch";
    for (let i = 1; i < 16; i++)
    {
        div1.innerHTML += ".";
        if (!(i%5))
        {
            div1.innerHTML = div1.innerHTML.substring(0, div1.innerHTML.length - 5)
        }
        await sleep(100);
    }
    let div2 = document.getElementById("connectionSuccess");
    div2.innerHTML = "Connection succesful.";
    userIP.innerHTML = "67.0.142.13";

    let userCMD = document.getElementById("userCMD");

    await sleep(1500);
    div1.innerHTML = div2.innerHTML = userCMD.innerHTML = "&nbsp";
    div1.style.display = div2.style.display = "none";

    await sleep(200);
    asyncTyper(userCMD, "./homepage.sh");

    await sleep(1300);
    userCMD.innerHTML = " ";
    welcome();

    await sleep(300);
    textbox();
    menu();
}

function welcome() {
    let welcome = document.getElementById("welcome");

    welcome.style.display = "block";
}

let textboxDiv = document.getElementById("textbox");

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
          asyncTyper(textboxDiv, "Hello");
        });
        break;
      case 1:
        window.open("cat.html", "_blank");
        break;
      case 2:
        alert("Selection " + menuIndex + " not available yet");
        break;
      case 3:
        alert("Selection " + menuIndex + " not available yet");
        break;
      case 4:
        alert("Selection " + menuIndex + " not available yet");
        break;
      case 5:
        alert("Selection " + menuIndex + " not available yet");
        break;
      case 6:
        alert("Selection " + menuIndex + " not available yet");
        break;
      case 7:
        alert("Selection " + menuIndex + " not available yet");
        break;
    }
    enterKey = false;
    keyPressed = false;
  }
}