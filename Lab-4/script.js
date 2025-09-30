document.getElementById("element10").addEventListener("click", function() {
    this.classList.toggle("color1");
});

document.querySelector("#element11").addEventListener("click", function() {
    this.classList.toggle("color2");
});

function addImage() {
    const imageContainer = document.getElementById("image-container");

    if (!imageContainer.querySelector("img")) {
        const img = document.createElement("img");
        img.src = "https://images.unsplash.com/photo-1678786393709-46e6bb01bf60?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        img.alt = "Athens";
        img.style.width = "500px"; 
        imageContainer.appendChild(img);
    }
}

function increaseImage() {
    const img = document.querySelector("#image-container img");
    if (img) {
        const currentWidth = img.clientWidth;
        const currentHeight= img.clientHeight
        img.style.width = (currentWidth + 100) + "px"; 
        img.style.height = (currentHeight + 100) + "px";

    }
}

function decreaseImage() {
    const img = document.querySelector("#image-container img");
    if (img) {
        const currentWidth = img.clientWidth;
        const currentHeight= img.clientHeight
        img.style.width = (currentWidth - 100) + "px"; 
        img.style.height = (currentHeight - 100) + "px"; 

   
    }
}

function removeImage() {
    const img = document.querySelector("#image-container img");
    if (img) {
        img.remove();
    }
}