const OMDB_API_KEY = "48ab736e";
const inputBox = document.getElementById('searchInput');
const listContainer = document.getElementById("list-container");

window.onload = function () {
    const storedItems = localStorage.getItem("listData");
    if (storedItems) {
        // Handle stored items if needed
        }
}

//function for creating divs for saved items
function createList() {
    let div = document.createElement('div');
    div.innerHTML = inputBox.value;
    listContainer.appendChild(div);
}
function addList(){
 if(inputBox.value === '') {
    alert("Please search the catalogue")
   }
  /*else{
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span")
      span.innerHTML = "X"
      li.appendChild(span);
    }*/
    inputBox.value = "";
};

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//MODAL FOR DIV ITEMS
/*async function fetchData() {
    try {
        const food = foodInput.value.trim();

        const apiKey = "PKukaoIj0EkAALXfan9OXgKGpXNwcXKazqVKSoci";
        let apiUrl = https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${food};

        const response = await axios.get(apiUrl);

        if (
          response.data &&
          response.data.foods &&
          response.data.foods.length > 0
        ) {
          displayResults(response.data.foods);
        } else {
          resultsDiv.innerHTML = "<p>No results found.</p>";
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        resultsDiv.innerHTML = "<p>An error occurred. Please try again.</p>";
      }
    }

    function displayResults(foods) {
      resultsDiv.innerHTML = "";

      foods.forEach((foodItem) => {
        const desc = foodItem.description || "Description not available";

        const div = document.createElement("div");
        div.classList.add("result-item");
        div.innerHTML = <p><strong></strong> ${desc}</p>;

        resultsDiv.appendChild(div);

        div.addEventListener("click", function () {
          divInfo(foodItem); 
        });
      });
    }*/

//data request for movies

//figure out how to pull posters from API
const omdbSearchReq = async (search) => {
    const res = await fetch(`https://www.omdbapi.com?apikey=${OMDB_API_KEY}&s=${search}`)
    const poster = await fetch (`http://img.omdbapi.com/?apikey=${OMDB_API_KEY}&${search}`)
    const toJson = await res.json()
    return toJson
  } 

searchButton.onclick = async function() {
    console.log("HELLO WORLD")
    const searchVal = searchInput.value
    const results = await omdbSearchReq(searchVal)
    console.log("results =", results)
    for(let i = 0; i < results.Search.length; i++) {
      const pre = document.createElement("pre")
      pre.textContent = JSON.stringify(results.Search[i], null, 2)
      const div = document.createElement("div")
      div.classList.add('li')
      div.appendChild(pre)
      listContainer.appendChild(div)
    }
    

  }