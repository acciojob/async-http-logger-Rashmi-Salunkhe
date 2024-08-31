//your JS code here. If required.
// Function to make an asynchronous HTTP request
async function fetchTodo() {
    try {
        // Sending a GET request to the API
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Checking if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parsing the response body as JSON
        const data = await response.json();
        
        // Logging the response data to the console
        console.log(data);
    } catch (error) {
        // Logging any errors to the console
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Calling the fetchTodo function to make the request
fetchTodo();
