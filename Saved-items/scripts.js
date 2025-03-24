const inputBox = document.getElementById('searchInput');
const listContainer = document.getElementById("list-container");

window.onload = function () {
    const storedItems = localStorage.getItem("listData");
    if (storedItems) {
        // Handle stored items if needed
        }
}


function addList(){
 if(inputBox.value === '') {
    alert("Please search the catalogue")
   }
  else{
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span")
      span.innerHTML = "X"
      li.appendChild(span);
    }
    inputBox.value = "";
};

listContainer.addEventsListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//css boxes for unordered lists
function createList() {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
}