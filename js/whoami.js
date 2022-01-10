let leftArrow;
let rightArrow;
let enterKey;

document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") {
    leftArrow = true;
  } else if (event.key === "ArrowRight") {
    rightArrow = true;
  } else if (event.key === "Enter") {
    enterKey = true;
  }
}); 
document.addEventListener("keyup", event => {
  if (event.key === "ArrowLeft") {
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
        await sleep(40);
    }
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

  sleep(200).then(() => {
    introduction();
});
}

function introduction() {
  let textLines = document.getElementsByClassName("message textdiv");
  asyncTyper(textLines[0], "So you wanna know who I am?");

  sleep(2500).then(() => {
    asyncTyper(textLines[1], "Well you won't");

    sleep(1200).then(() => {
      asyncTyper(textLines[2], "Motherfucker");

      sleep(1200).then(() => {
        asyncTyper(textLines[3], "Not today");

        sleep(1200).then(() => {
          asyncTyper(textLines[4], "Coming soon");

          sleep(1200).then(() => {
            asyncTyper(textLines[5], "Hopefully");
          })

          sleep(2500).then(() => {
            asyncTyper(textLines[6], ":)");
          })
        })
      })
    })
  })
}