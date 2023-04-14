// Create a URLSearchParams object to parse the URL
const params = new URLSearchParams(location.search);
// Get the value of the "id" parameter
const id = params.get('stud_id');
// Get student data from the database
let lsm = new LSManager();
let stud = lsm.get(id);
let idDisplayer = document.getElementById('id-displayer');
idDisplayer.innerText = id;
let depDisplayer = document.getElementById('departments');
depDisplayer.value = stud.dept;

if (stud.level < 3) {
  depDisplayer.disabled = true;
}

let sub = document.getElementById('submit');
sub.addEventListener('click', function (e) {
  if (stud.level === 3) {
    stud.dept = depDisplayer.value;
    lsm.set(id, stud);
  } else {
    alert("You are not allowed to change your department");
    e.preventDefault();
  }
});

// Log the id to the console
console.log(stud);

// function checkStudentLevel(level) {
//   if (level === 3) {
//     getStudentData();
//   } else {
//     let form = document.forms[0];
//     let myDiv = document.getElementsByClassName("no-assign");
//     form.style.display = "none";
//     myDiv.style.display = "block";
//   }
// }
