//this fetch.js file is called from fruit.html, governs the API recipe search

let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.

async function sendApiRequest() {
  let APP_ID = "fbb3e7b9";
  let API_KEY = "249daf789883c9071d2a6edeccf1915c";
  let searchTerms = document.getElementById("searchTerms").value;
  try {
    let response = await fetch(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchTerms}`
    );

    console.log(response); //checks for response
    let data = await response.json();
    console.log(data);
    displayApiData(data);
  } catch (err) {
    alert("Search is empty");
  }
}

//handles data received via API
function displayApiData(data) {
  document.querySelector("#recipe-content").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="${
    data.hits[0].recipe.label
  }">
    <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Source:&nbsp${JSON.stringify(
      data.hits[0].recipe.source
    )}</p>
    <a href="${data.hits[0].recipe.url}" class="btn btn-primary">Source</a>
    </div>
    </div>
    `;

  document.querySelector("#recipe-content2").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[1].recipe.image}" class="card-img-top" alt="${
    data.hits[1].recipe.label
  }">
    <div class="card-body">
    <h5 class="card-title">${data.hits[1].recipe.label}</h5>
    <p class="card-text">Source:&nbsp;${JSON.stringify(
      data.hits[1].recipe.source
    )}</p>
    <a href="${data.hits[1].recipe.url}" class="btn btn-primary">Source</a>
    </div>
    </div>
    `;
  document.querySelector("#recipe-content3").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[2].recipe.image}" class="card-img-top" alt="${
    data.hits[2].recipe.label
  }">
    <div class="card-body">
    <h5 class="card-title">${data.hits[2].recipe.label}</h5>
    <p class="card-text">Source:&nbsp;${JSON.stringify(
      data.hits[2].recipe.source
    )}</p>
    <a href="${data.hits[2].recipe.url}" class="btn btn-primary">Source</a>
    </div>
    </div>
    `;
  document.querySelector("#recipe-content4").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[3].recipe.image}" class="card-img-top" alt="${
    data.hits[3].recipe.label
  }">
    <div class="card-body">
    <h5 class="card-title">${data.hits[3].recipe.label}</h5>
    <p class="card-text">Source:&nbsp;${JSON.stringify(
      data.hits[3].recipe.source
    )}</p>
    <a href="${data.hits[3].recipe.url}" class="btn btn-primary">Source</a>
    </div>
    </div>
    `;
}
