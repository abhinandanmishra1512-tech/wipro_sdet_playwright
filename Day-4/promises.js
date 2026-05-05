function getData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data received");
            } else {
                reject("Failed to fetch data");
            }
        }, 1000);
    });
}

// Problem:
// Create a promise-based function that returns data when successful
// and shows a useful error message when it fails.

// Solution 1: Using .then() and .catch()
getData(true)
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

getData(false)
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Solution 2: Using async/await
async function fetchData(success) {
    try {
        const data = await getData(success);
        console.log("Async success:", data);
    } catch (error) {
        console.error("Async error:", error);
    }
}

fetchData(true);
fetchData(false);
