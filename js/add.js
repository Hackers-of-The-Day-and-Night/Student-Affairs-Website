const id = document.getElementById("id");
const user_name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const gpa = document.getElementById("gpa");
const form = document.getElementById("form");

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
    e.preventDefault();
    confirm("Name is required");
  } else if (!valid_name(user_name.value)) {
    e.preventDefault();
    confirm("name must be a valid one having charavters only");
  } else if (id.value === "" || id.value == null) {
    e.preventDefault();
    confirm("id is required");
  } else if (!valid_id(id.value)) {
    e.preventDefault();
    confirm("id must be a valid one having charavters only numbers with length = 8");
  } else if (phone.value === "" || phone.value == null) {
    e.preventDefault();
    confirm("phone is required");
  } else if (!valid_phone(phone.value)) {
    e.preventDefault();
    confirm("phone must be a valid one having 11 digit starting with 01");
  } else {
    if (confirm("are you sure you want to submit?")) {
      const formData = new FormData(form);
      let stud = new Stud(formData.get("id"), formData.get("name"),
          formData.get("email"), formData.get("phone"), formData.get("dob"),
          formData.get("gender"), formData.get("gpa"), formData.get("level"),
          formData.get("dept"), formData.get("status"));
      let ls = new LSManager();
      ls.set(stud.id, stud);
      alert("Submission completed");
      form.submit();
    } else {
      e.preventDefault();
    }
  }
});
