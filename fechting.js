// URL of the API or resource you want to fetch data from
const apiUrl = "http://localhost:3000/v1/todos/byuserid?todosId=";

// Use the fetch function to make a GET request
fetch(apiUrl)
  .then((response) => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Handle the data
    console.log("Data:", data);
  })
  .catch((error) => {
    // Handle errors
    console.error("Error:", error);
  });
