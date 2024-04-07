// Test 1
async function concurrentRequests() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://api.example.com/data1'),
            fetch('https://api.example.com/data2')
        ]);
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log('Response from API 1:', data1);
        console.log('Response from API 2:', data2);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Test the function
concurrentRequests();





// Test 2
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Test the function
awaitCall();





// Test 3
async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url).then(response => response.json()))
        );
        console.log('Responses:', responses);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}

// Test the function
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
parallelCalls(urls);
