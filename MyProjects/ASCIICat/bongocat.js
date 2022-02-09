let video = document.getElementById("catVid");
let instructions = document.getElementById("instructions");

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function Main() {
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

    video.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        sleep(1000).then(() => {
            instructions.style.display = "flex";
            instructions.style.marginTop = "40vh";
            catVidDiv.style.display = "none";
            document.addEventListener("keydown", event => {
                if (event.key === "Backspace") {
                    window.location.replace("main.html");
                }
            });
        });
    }
    video.play();
}

Main();