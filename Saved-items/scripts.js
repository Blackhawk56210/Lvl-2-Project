const inputBox = document.getElementById('searchInput');
const listContainer = document.getElementById("list-container");

window.onload = function () {
    const storedItems = localStorage.getItem("listData");
    if (storedItems) {
        // Handle stored items if needed
        }
}


function addList(){
    function listGroup() {
    if(inputBox.value === '') {
        alert("Please search the catalogue")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
 }
};
