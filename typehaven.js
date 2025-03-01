

const inputBox = document.getElementById('titleInput');


const savedTitle = localStorage.getItem('pageTitle');
if (savedTitle) {
    document.title = savedTitle; 
    inputBox.value = savedTitle; 
}


inputBox.addEventListener('input', () => {
    const title = inputBox.value || 'blank';
    document.title = title;
    localStorage.setItem('pageTitle', title); 
});

function changeColor() {
    let main = document.getElementById("main");
    main.style.color = "yellow";
}

function changeColor1() {
    let main = document.getElementById("main");
    main.style.color = "green";
}

function changeColor2() {
    let main = document.getElementById("main");
    main.style.color = "pink";
}


function downloadText() {
    let text = document.getElementById("main").value;
    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "haven.txt";
    link.click();
}

function openText() {
    let fileInput = document.getElementById("fileInput");
    let file = fileInput.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("main").value = e.target.result;
        };
        reader.readAsText(file);
    } else {
        alert("Please select a file!");
    }
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((error) => console.log("Service Worker Registration Failed:", error));
  }

  let installPromptEvent;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPromptEvent = event;
  document.getElementById("install-btn").hidden = false;
});

document.getElementById("install-btn").addEventListener("click", () => {
  if (installPromptEvent) {
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        console.log("PWA Installed");
      }
      installPromptEvent = null;
      document.getElementById("install-btn").hidden = true;
    });
  }
});

  
