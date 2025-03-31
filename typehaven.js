

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
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')  
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }
 // Get the input element and the image element
        const imageInput = document.getElementById('imageInput');
        const overlayImage = document.getElementById('overlayImage');

        // Add an event listener for when a user uploads an image
        imageInput.addEventListener('change', function (e) {
            const file = e.target.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function (event) {
                    // Set the image source to the uploaded image
                    overlayImage.src = event.target.result;
                    overlayImage.style.display = 'block'; // Show the image
                };

                // Read the uploaded image file as a data URL
                reader.readAsDataURL(file);
            }
        });

