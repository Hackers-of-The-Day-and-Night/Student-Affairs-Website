const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", function (e) {
  if (!confirm("Are you sure you want to delete this student?")) {
    e.preventDefault();
    return;
  }
  alert("Student deleted successfully");
});

const error = document.getElementById("error");
const form = document.getElementById("edit_form");
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  let formData = new FormData(form);
  let valid = new Validation();
  if (!valid.validId(formData.get("id"))) {
    error.innerText = "Id must be a number of 8 digits";
    e.preventDefault();
  } else if (!valid.validName(formData.get("name"))) {
    error.innerText = "Name can only contain characters";
    e.preventDefault();
  } else if (!valid.validPhone(formData.get("phone"))) {
    error.innerText = "Phone must have 11 digit starting with 01";
    e.preventDefault();
  } else if (!confirm("Are you sure you want to submit?")) {
    e.preventDefault();
    return;
  }
});
