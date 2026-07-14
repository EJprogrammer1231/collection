const contactForm = document.getElementById("contact-form");
const inputName = document.getElementById("input-name");
const inputPhone = document.getElementById("input-phone");
const inputEmail = document.getElementById("input-email");
const inputCompany = document.getElementById("input-company");
const inputCategory = document.getElementById("input-category");
const inputStatus = document.getElementById("input-status");
const inputBirthday = document.getElementById("input-birthday");
const inputNotes = document.getElementById("input-notes");
const inputNotes_val = inputNotes.value.trim();

loadCustomers();
contactForm.addEventListener("submit" , (e) => {
  e.preventDefault();

  const inputName_val = inputName.value.trim();
  const inputPhone_val = inputPhone.value;
  const inputEmail_val = inputEmail.value;
  const inputCompany_val = inputCompany.value;
  const inputCategory_val = inputCategory.value;
  const inputStatus_val = inputStatus.value;
  const inputBirthday_val = inputBirthday.value;
  const inputNotes_val = inputNotes.value.trim();
  const inputFavorite_val = inputFavorite.checked;

  if (
    inputName_val === "" ||
    inputPhone_val === "" ||
    inputEmail_val === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const newCustomers = {
    name: inputName_val,
    phone: Number(inputPhone_val),
    email: inputEmail_val,
    company: inputCompany_val,
    category: inputCategory_val,
    status: inputStatus_val,
    birthday: inputBirthday_val,
    notes: inputNotes_val,
    favorite: inputFavorite_val
  };

  customers.push(newCustomers);
  saveCustomers();
  loadCustomers();
  contactForm.reset();
});