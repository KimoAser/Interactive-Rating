const box1 = document.querySelector(".container");
const box2 = document.querySelector(".thank-you-container");
const btn = document.querySelector(".submit-button");
const numbers = document.querySelectorAll(".numg-design");
const selectedText = document.querySelector(".selected-text");


let selectedNumber = null;

numbers.forEach(num => {
  num.addEventListener("click", () => {
    // Remove 'active' class from all divs
    numbers.forEach(n => n.classList.remove("active"));
    // Add 'active' class to the clicked one
    num.classList.add("active");
    selectedNumber = num.textContent;
  });
});

btn.addEventListener("click",()=> {
    if (selectedNumber) {
        box1.style.display = "none";
        box2.style.display = "flex";
        selectedText.textContent = `You selected ${selectedNumber} out of 5`;
    }
    else {
        alert("Please select a rating before submitting")
    }
})
