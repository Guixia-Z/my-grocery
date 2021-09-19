let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let APP_ID = "fbb3e7b9";
  let API_KEY = "249daf789883c9071d2a6edeccf1915c";
  let response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`
  );
  //^ after q should be what user input is, above it's just pizza for now
  console.log(response);
  let data = await response.json();
  console.log(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {}
