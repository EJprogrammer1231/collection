const applicationList = document.getElementById("application-list");
const emptyMessage = document.getElementById("empty-message");

function renderingApplications(applicationsRendering = applications) {
  applicationList.innerHTML = "";

  if (applicationsRendering.length === 0) {
    emptyMessage.style.display = "block";
    return;
  } else {
    emptyMessage.style.display = "none";
  } 

  applicationsRendering.forEach(application => {
    const applicationsRow = document.createElement("tr");
    const actions = document.createElement("td");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    editBtn.classList.add("edit-btn");
    deleteBtn.classList.add("delete-btn")

    applicationsRow.innerHTML = `
      <td>${application.company}</td>
      <td>${application.position}</td>
      <td>${application.location}</td>
      <td>${application.salary}</td>
      <td>${application.appliedDate}</td>
      <td>${application.status}</td>
      <td>${application.isFavorite ? "⭐" : "❌"}</td>
    `;

    editBtn.addEventListener("click", () => {
      editApplication(application.id);
    });

    deleteBtn.addEventListener("click", () => {
      deleteApplication(application.id);
    });

    actions.append(editBtn,deleteBtn);
    applicationsRow.appendChild(actions);
    applicationList.appendChild(applicationsRow);
  });
}