// Fetch API Data (GET)
document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});



// XML Request Data (GET)
document.getElementById('xhrData').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { 
            if (xhr.status === 200) { 
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };

    xhr.send();
});

// display for both xml and fetch
function displayData(data){
    const content = document.getElementById('output');
    content.innerHTML = ''; 

    const container = document.createElement('div');

    const userLabel = document.createElement('label');
    userLabel.textContent = "UserID: ";
    const userValue = document.createElement('p');
    userValue.textContent = data.userId;

    const idLabel = document.createElement('label');
    idLabel.textContent = "ID: ";
    const idValue = document.createElement('p');
    idValue.textContent = data.id;

    const titleLabel = document.createElement('label');
    titleLabel.textContent="Title: " ;
    const titleValue= document.createElement('p');
    titleValue.textContent= data.title;

    const bodyLabel = document.createElement('label');
    bodyLabel.textContent = "Content: ";
    const bodyValue= document.createElement('p');
    bodyValue.textContent = data.body;

    container.appendChild(userLabel);
    container.appendChild(userValue);
    container.appendChild(idLabel);
    container.appendChild(idValue);
    container.appendChild(titleLabel);
    container.appendChild(titleValue);
    container.appendChild(bodyLabel);
    container.appendChild(bodyValue);

    output.appendChild(container);

   
}

// send data using post 
document.getElementById("submitBtn").addEventListener('click', async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value.trim();
   

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 2
            })
            
        });

        const data = await response.json();

        // Display confirmation message
        document.getElementById("response").innerHTML = `
            <p><strong>Post submitted successfully!</strong></p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Content:</strong> ${data.body}</p>
            <p><strong>Post ID:</strong> ${data.id}</p>`;

            document.getElementById("title").value='';
            document.getElementById("body").value='';
    } catch (error) {
        document.getElementById("response").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
});


// update data using put 
