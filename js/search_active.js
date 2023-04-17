function showData(arr) {
  let tbody = document.getElementById("table").tBodies[0];
  tbody.innerHTML = "";
  for (let i = 0; i < arr.length; ++i) {
    let stud = arr[i];
    if (stud.status == "active") {
      tbody.innerHTML += `
        <tr>
          <td>${stud.id}</td>
          <td>${stud.name}</td>
          <td><a href="assign_department.html?pid=3&stud_id=${stud.id}">Assign Here</a></td>
        </tr>
      `;
    }
  }
}

function searchOnData() {
  let ls = new LSManager();
  let arr = ls.searchByName(this.value);
  showData(arr);
}

let search = document.getElementById("search");
search.addEventListener("keyup", searchOnData);

window.onload = function () {
  searchOnData.call(search);
};
