const githubSearch = document.getElementById("github-search");
const btnSearchGithub = document.getElementById("btn-search-github");
const githubProfile = document.getElementById("github-profile");

let profile = {};

async function getCompanyGithub(username) {
  const github = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(github);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();

    profile = data;

    renderGithubProfile();
  } catch (error) {
    console.error(error);

    githubProfile.innerHTML = `
      <p>User not found.</p>
    `;
  }
}

btnSearchGithub.addEventListener("click", () => {
  const githubSearch_val = githubSearch.value.trim();

  if (githubSearch_val === "") return;

  getCompanyGithub(githubSearch_val);
});

function renderGithubProfile() {
  githubProfile.innerHTML = "";
  const githubDiv = document.createElement("div");

  githubDiv.innerHTML = `
    <img src="${profile.avatar_url}" alt="${profile.login}" width="100">
    <h3>${profile.name || profile.login}</h3>
    <p><strong>Username:</strong> ${profile.login}</p>
    <p><strong>Location:</strong> ${profile.location || "N/A"}</p>
    <p><strong>Followers:</strong> ${profile.followers}</p>
    <p><strong>Repositories:</strong> ${profile.public_repos}</p>
    <p><strong>Bio:</strong> ${profile.bio || "No bio available."}</p>
    <a href="${profile.html_url}" target="_blank">
      View GitHub Profile
    </a>
  `;

  githubProfile.appendChild(githubDiv);
}