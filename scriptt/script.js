document.addEventListener("DOMContentLoaded", () => {
     const discoverButton = document.getElementById("discover-btn");
     if (discoverButton) {
         discoverButton.addEventListener("click", () => {
             window.location.href = "blog.html"; 
         });
     }
 
     const clearButton = document.querySelector("button");
     if (clearButton) {
         clearButton.addEventListener("click", () => {
             alert("Activity log cleared!");
         });
     }
 });
 