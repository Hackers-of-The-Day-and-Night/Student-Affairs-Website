const id = document.getElementById("id");
const user_name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
let lsm = new LSManager();

function valid_name(user_name) {
  const pattern = /^[A-Za-z]+$/g;
  return pattern.test(user_name);
}

function valid_id(id) {
  const pattern = /^[0-9]{8}$/;
  return pattern.test(id);
}

function valid_phone(phone) {
  const pattern = /^01[0-9]{9}$/;
  return pattern.test(phone);
}

form.addEventListener("submit", (e) => {
  if (user_name.value === "" || user_name.value == null) {
    alert("Name is required");
  } else if (!valid_name(user_name.value)) {
    alert("Name can only contain characters");
  } else if (id.value === "" || id.value == null) {
    alert("Id is required");
  } else if (!valid_id(id.value)) {
    alert("Id must be a number of 8 digits");
  } else if (phone.value === "" || phone.value == null) {
    alert("Phone is required");
  } else if (!valid_phone(phone.value)) {
    alert("Phone must have 11 digit starting with 01");
  } else if (lsm.IsIdExist(id.value)) {
    alert("Id already exists");
  } else if (lsm.IsPhoneExist(phone.value)) {
    alert("Phone already exists");
  } else if (lsm.IsEmailExist(email.value)) {
    alert("Email already exists");
  } else {
    if (confirm("Are you sure you want to submit?")) {
      const formData = new FormData(form);
      let stud = new Stud(formData.get("id"), formData.get("name"),
          formData.get("email"), formData.get("phone"), formData.get("dob"),
          formData.get("gender"), formData.get("gpa"), formData.get("level"),
          formData.get("dept"), formData.get("status"));
      let ls = new LSManager();
      ls.set(stud.id, stud);
      alert("Submission completed");
      form.reset();
    }
  }
  e.preventDefault();
});
