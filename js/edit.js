const params = new URLSearchParams(location.search);
let lsm = new LSManager();
let stud = lsm.get(params.get("stud_id"));

let id = document.getElementById("id");
let stud_name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");
let level = document.getElementById("level");
let dept = document.getElementById("dept");
let gpa = document.getElementById("gpa");
let gender = document.getElementsByClassName("gender");
let stud_status = document.getElementsByClassName("status");

id.value = stud.id;
stud_name.value = stud.name;
email.value = stud.email;
phone.value = stud.phone;
dob.value = stud.dob;
level.value = stud.level;
dept.value = stud.dept;
gpa.value = stud.gpa;
(stud.gender == "male") ? gender[0].checked = true : gender[1].checked = true;
(stud.status == "active") ? stud_status[0].checked = true : stud_status[1].checked = true;


let deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", function (e) {
  if (confirm("Are you sure you want to delete this student?")) {
    lsm.remove(params.get("stud_id"));
    alert("Student deleted successfully");
    window.location.href = "view.html?pid=2";
  }
  e.preventDefault();
});

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  const form = document.getElementById("form");
  let formData = new FormData(form);
  let valid = new Validations();
  if (!valid.validId(formData.get("id"))) {
    alert("Id must be a number of 8 digits");
  } else if (lsm.IsIdExist(formData.get("id")) && formData.get("id") != stud.id) {
    alert("Id already exists");
  } else if (!valid.validName(formData.get("name"))) {
    alert("Name can only contain characters");
  } else if (lsm.IsEmailExist(formData.get("email")) && formData.get("email") != stud.email) {
    alert("Email already exists");
  } else if (!valid.validPhone(formData.get("phone"))) {
    alert("Phone must have 11 digit starting with 01");
  } else if (lsm.IsPhoneExist(formData.get("phone")) && formData.get("phone") != stud.phone) {
    alert("Phone already exists");
  } else if (!valid.validGPA(formData.get("gpa"))) {
    alert("GPA must be between 0 and 4");
  } else {
    if (confirm("Are you sure you want to submit?")) {
      if (formData.get("id") != stud.id) {
        lsm.remove(stud.id);
      }
      let newStud = new Stud(formData.get("id"), formData.get("name"),
          formData.get("email"), formData.get("phone"), formData.get("dob"),
          formData.get("gender"), formData.get("gpa"), formData.get("level"),
          stud.dept, formData.get("status"));
      console.log(newStud);
      lsm.set(newStud.id, newStud);
      alert("Edit completed");
      stud = newStud;
    }
  }
  e.preventDefault();
});
