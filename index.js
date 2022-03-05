window.onload = Main();
let upArrow;
let downArrow;
let leftArrow;
let rightArrow;
let enterKey;
let escKey;

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
    $.getJSON("https://www.myexternalip.com/json", function(e) {
        document.getElementById("userIP").innerHTML = userIP = e.ip + " ~$";
    });
    
    sleep(1000).then(() => {
        asyncTyper(document.getElementById("userCMD"), "ssh " + "84.16.76.229"); 
    });
    userCMD = document.getElementById("userCMD");
    
    sleep(2800).then(() => {
        connecting();
    });
}

async function connecting() {
    let div1 = document.getElementById("connecting");
    div1.innerHTML = "Connecting to www.marcmeynet.ch ";
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
    userIP.innerHTML = "84.16.76.229";

    let userCMD = document.getElementById("userCMD");

    let clientLanguage = window.navigator.userLanguage || window.navigator.language;

    await sleep(1500);
    div1.innerHTML = div2.innerHTML = userCMD.innerHTML = "&nbsp";
    div1.style.display = div2.style.display = "none";

    /*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      asyncTyper(document.getElementById("errorMsg"), "Available soon on mobile devices.");
   } else {*/

    if (clientLanguage.startsWith("fr")) {
      window.location.replace("fr/main.html");
    } else {
      window.location.replace("en/main.html");
    }
   }
  //}