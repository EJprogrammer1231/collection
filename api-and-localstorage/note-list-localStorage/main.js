const noteForm_element = document.getElementById("note-form");
const noteInput_element = document.getElementById("note-input");

const notesCount_element = document.getElementById("notes-count");
const emptyState = document.getElementById("empty-state");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

renderingNote();
updatenoteCounts();

noteForm_element.addEventListener("submit", (e) => {
  e.preventDefault();

  const noteInput_val = noteInput_element.value.trim();

  if (!noteInput_val) {
    alert("Please fill in");
    return;
  }

  const newNotes = {
    text: noteInput_val
  };

  notes.push(newNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );

  renderingNote();
  updatenoteCounts();

  noteForm_element.reset();
});

function renderingNote(noteRender = notes) {
  notesList.innerHTML = "";

  if (noteRender.length === 0) {
    emptyState.style.display = "block";
  } else {
    emptyState.style.display = "none";
  }

  noteRender.forEach((note,index) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", () => {
      notes.splice(index, 1);

      localStorage.setItem(
        "notes",
        JSON.stringify(notes)
      );

      renderingNote();
      updatenoteCounts();
    });

    li.textContent = note.text;
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

function updatenoteCounts() {
  notesCount_element.textContent = notes.length;
}