function showData(arr) {
  let table = document.getElementById("table");
  table.innerHTML = "";
  for (let i = 0; i < arr.length; ++i) {
    let stud = arr[i];
    if (stud.status === "active") {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let a = document.createElement("a");
      a.innerText = stud.name;
      a.href = `assign_department.html?pid=3&stud_id=${stud.id}`;
      table.appendChild(tr);
      tr.appendChild(td);
      td.appendChild(a);
    }
  }
}

function searchData() {
  let search = document.getElementById("search");
  let ls = new LSManager();
  let arr = ls.searchByName(search.value);
  showData(arr);
}

search.addEventListener("keyup", searchData);

window.onload = function () {
  searchData();
};
