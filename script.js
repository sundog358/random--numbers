function generateRandomNumber() {
  // Generate random number between 0-998
  const randomNumber = Math.floor(Math.random() * 999);

  // Convert to string and pad with leading zeros if needed
  const formattedNumber = randomNumber.toString().padStart(3, "0");

  const numberDisplay = document.getElementById("randomNumber");
  const displayContainer = document.querySelector(".number-display");

  // Update the number
  numberDisplay.textContent = formattedNumber;

  // Add animation class
  displayContainer.classList.add("animate");

  // Remove animation class after transition
  setTimeout(() => {
    displayContainer.classList.remove("animate");
  }, 300);
}

// Initialize with a random number when page loads
window.addEventListener("load", generateRandomNumber);
