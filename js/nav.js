let nav = document.querySelector('nav');
nav.innerHTML = "\
  <ul>\
    <li><a href='index.html?pid=0'>Home</a></li>\
    <li><a href='add.html?pid=1'>Add New</a></li>\
    <li><a href='view.html?pid=2'>View/Edit</a></li>\
    <li><a href='search_active.html?pid=3'>Assign Department</a></li>\
  </ul>\
";

let url = new URLSearchParams(location.search);
let pid = url.get('pid');
if (pid) {
  let links = document.querySelectorAll("nav ul li");
  links[pid].classList.add('active');
}
