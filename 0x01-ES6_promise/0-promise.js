function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here
    // Example:
    setTimeout(() => {
      const response = { data: 'Some data from API' };
      resolve(response); // Resolve the promise with the response
    }, 2000);
  });
}

export default getResponseFromAPI;
