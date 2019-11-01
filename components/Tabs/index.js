// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        tab(response.data.topics);
    })
    .catch(err => {
        console.log('You messed up the page', err);
    });

function tab(array) {
    const topics = document.querySelector('.topics');

    array.forEach(tabName => {
        topics.appendChild(document.createElement('div')).textContent = tabName;
    });

    return topics;
}