const apiKey = 'AIzaSyBfG85Yr0Fjmn0jkkVS8CIE-myDzYr_ces';
const videoId = '_rxPuaL2Roc';
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`;

const requestOptions = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${apiKey}`,
    },
};

fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Assuming there's an HTML element with the id "outputElement" to display the data
        const outputElement = document.getElementById('outputElement');
        outputElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
