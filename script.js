let userName = "Stacy"; // We use let to declare a variable that can change

// Get the button and message elements from the page using their IDs
let button = document.getElementById("welcomeBtn");
let message = document.getElementById("welcomeMsg");

// Get the input field element by its ID
let nameInput = document.getElementById("nameInput");

// Add a click event to the button
button.addEventListener("click", function() {
  // Get the value the user typed in the input field
  let enteredName = nameInput.value;

  // If the user entered a name, show a fun personalized message
  if (enteredName) {
    message.textContent = "Welcome, " + enteredName + "! 🎉 You are awesome!";
  } else {
    // If no name is entered, ask the user to enter their name
    message.textContent = "Please enter your name above!";
  }

  // Clear the input field after the button is clicked
  nameInput.value = "";
});