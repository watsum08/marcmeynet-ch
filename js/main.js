window.onload = Main();

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
    
    sleep(3000).then(() => {
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
        await sleep(150);
    }
    let div2 = document.getElementById("connectionSuccess");
    div2.innerHTML = "Connection succesful.";
    userIP.innerHTML = "67.0.142.13";

    let userCMD = document.getElementById("userCMD");

    await sleep(1500);
    div1.innerHTML = div2.innerHTML = userCMD.innerHTML = "&nbsp";
    div1.style.display = div2.style.display = "none";

    await sleep(400);
    asyncTyper(userCMD, "./homepage.sh");

    await sleep(1500);
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

function textbox() {
    let textbox = document.getElementById("textbox");
    textbox.innerHTML = "___________________________________________________________________________________<br><br>";
    textbox.innerHTML += "What are you looking for?<br>";
    textbox.innerHTML += "___________________________________________________________________________________";
}

function menu() {
    let menu = document.getElementById("menu");

    menu.style.display = "flex";
}