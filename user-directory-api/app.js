const submitForm = document.getElementById("submit-form");
const searchInput = document.getElementById("search-input");
const displayUsers = document.getElementById("display-users");

// Store all users
let users = [];

// API URL
const urlUsers = "https://jsonplaceholder.typicode.com/users";

// =======================
// Fetch Users
// =======================
async function getUsers() {
  try {
    // Fetch data from API
    const response = await fetch(urlUsers);

    // Validate response
    if (!response.ok) {
      throw new Error("Failed to fetch users.");
    }

    // Convert JSON to JavaScript array
    const data = await response.json();

    // Save users
    users = data;

    // Display users
    renderUsers(users);

  } catch (error) {
    console.error(error);

    displayUsers.innerHTML = `
      <p>Something went wrong.</p>
    `;
  }
}

// =======================
// Render Users
// =======================
function renderUsers(usersToRender) {

  // Clear old users
  displayUsers.innerHTML = "";

  // Loop through users
  usersToRender.forEach(user => {

    const card = document.createElement("div");

    card.classList.add("user-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Company: ${user.company.name}</p>
    `;

    displayUsers.appendChild(card);

  });

}

// =======================
// Search Users
// =======================
function searchUsers() {

  const searchValue = searchInput.value
    .trim()
    .toLowerCase();

  const filteredUsers = users.filter(user => {

    return (
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue)
    );

  });

  renderUsers(filteredUsers);

}

// =======================
// Submit Search
// =======================
submitForm.addEventListener("submit", (e) => {

  e.preventDefault();

  searchUsers();

});

// =======================
// Start App
// =======================
getUsers();