const params = new URLSearchParams(location.search);
const id = params.get('stud_id');
let lsm = new LSManager();
let stud = lsm.get(id);
let idDisplayer = document.getElementById('id-displayer');
let nameDisplayer = document.getElementById('name-displayer');
nameDisplayer.value = stud.name;
idDisplayer.value = id;
let deptSelector = document.getElementById('dept-selector');
deptSelector.value = stud.dept;

if (stud.level < 3) {
  deptSelector.disabled = true;
  deptSelector.classList.add("input-disabled");
}

let sub = document.getElementById('submit');
sub.addEventListener('click', function (e) {
  if (stud.level == 3) {
    stud.dept = deptSelector.value;
    lsm.set(id, stud);
    alert("Department changed successfully");
  } else {
    alert("You are not allowed to change your department except in level 3");
  }
  e.preventDefault();
});

console.log(stud);
