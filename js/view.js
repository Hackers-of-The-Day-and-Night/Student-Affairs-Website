function showData(arr) {
  let tbody = document.getElementById("table").tBodies[0];
  tbody.innerHTML = "";
  for (let i = 0; i < arr.length; ++i) {
    let stud = arr[i];
    tbody.innerHTML += `
      <tr>
        <td>${stud.id}</td>
        <td>${stud.name}</td>
        <td>${stud.email}</td>
        <td>${stud.phone}</td>
        <td><a href="edit.html?pid=2&stud_id=${stud.id}">Assign Here</a></td>
        <td>
          <form data-id="${stud.id}">
            <div class="radio-div">
              <div class="option">
                <input type="radio" name="status" id="active${stud.id}" value="active" ${stud.status == "active" ? "checked" : ""}>
                <label for="active${stud.id}">Active</label>
              </div>
              <div class="option">
                <input type="radio" name="status" id="inactive${stud.id}" value="inactive" ${stud.status == "inactive" ? "checked" : ""}>
                <label for="inactive${stud.id}">Inactive</label>
              </div>
            </div>
          </form>
        </td>
      </tr>
    `;
  }
}

function searchOnData() {
  let ls = new LSManager();
  let arr = ls.searchByName(this.value);
  showData(arr);
  let forms = document.forms;
  for (let i = 0; i < forms.length; ++i) {
    for (let j = 0; j < forms[i].elements.length; ++j) {
      forms[i].elements[j].onchange = function () {
        let ls = new LSManager();
        let stud = ls.get(forms[i].dataset.id);
        stud.status = this.value;
        ls.set(stud.id, stud);
      };
    }
  }
}

let search = document.getElementById("search");
search.addEventListener("keyup", searchOnData);

window.onload = function () {
  searchOnData.call(search);
};
