const dogImage = document.getElementById("dog-image");
const btnNewDog = document.getElementById("btn-new-dog");
const statusMessage = document.getElementById("status-message");

// API
const randomDogURL = "https://dog.ceo/api/breeds/image/random";

// ==========================
// Fetch Dog
// ==========================
async function getDog() {

  try {

    showLoading();

    // Send request
    const response = await fetch(randomDogURL);

    // Validate response
    if (!response.ok) {
      throw new Error("Failed to fetch dog image.");
    }

    // Convert JSON
    const data = await response.json();

    console.log(data);

    /*
        {
          message: "https://images.dog.ceo/...",
          status: "success"
        }
    */

    // Display image
    renderDog(data.message);

  } catch (error) {

    console.error(error);

    showError(error.message);

  }

}

// ==========================
// Render Dog
// ==========================
function renderDog(imageUrl) {

  dogImage.src = imageUrl;

  dogImage.alt = "Random Dog";

  statusMessage.textContent = "";

}

// ==========================
// Loading
// ==========================
function showLoading() {

  statusMessage.textContent = "Loading...";

}

// ==========================
// Error
// ==========================
function showError(message) {

  statusMessage.textContent = message;

}

// ==========================
// Events
// ==========================
btnNewDog.addEventListener("click", getDog);

// ==========================
// Initialize
// ==========================
getDog();