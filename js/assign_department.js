function getStudentData() {
    // Get the current URL
const url = window.location.href;
// Create a URLSearchParams object to parse the URL
const params = new URLSearchParams(url.split('?')[1]);
// Get the value of the "id" parameter
const id = params.get('id');
// Log the id to the console
console.log(id);
}
getStudentData()


function checkStudentLevel(level) {
    if (level === 3) {
        getStudentData();

    } else {
        let form = document.forms[0];
        let myDiv = document.getElementsByClassName("no-assign");
        form.style.display = "none";
        myDiv.style.display = "block";
    }
}