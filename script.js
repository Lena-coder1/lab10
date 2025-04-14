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


function displayData(data){
    const content = document.getElementById('output');
    content.innerHTML = ''; 

    const container = document.createElement('div');

    const titleLabel = document.createElement('label');
    titleLabel.textContent="Title: ";
    const titleValue= document.createElement('p');
    titleValue.textContent= data.title;

    const bodyLabel = document.createElement('label');
    bodyLabel.textContent = "Content: ";
    const bodyValue= document.createElement('p');
    bodyValue.textContent = data.body;

    container.appendChild(titleLabel);
    container.appendChild(titleValue);
    container.appendChild(bodyLabel);
    container.appendChild(bodyValue);

    output.appendChild(container);

   
}
  