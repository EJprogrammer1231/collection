const inputUsername = document.getElementById("input-username");
const btnSearch = document.getElementById("btn-search");

let users = [];

btnSearch.addEventListener("click" , (e) => {
  e.preventDefault();
  inputUsername.reset();
});