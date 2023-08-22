const form = document.getElementById("assign_department_form");
const submit = document.getElementById('submit');
const id = document.getElementById('id-displayer').value;

if (submit.dataset.active == 'true') {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Student must be at level 3 to assign department");
  });
} else {
  submit.addEventListener("click", async function(e) {
    e.preventDefault();
    let url = `/${id}/assign_department/`;
    let method = "POST";
    let fd = new FormData(form);
    let body = JSON.stringify({dept: fd.get('dept')});
    alert("Department assigned successfully");
    await makeRequest(url, method, body);
  });
}
