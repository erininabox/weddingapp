console.log('delete.js has loaded');

const deleteBtn = document.getElementById("delete-btn");

function handleClick (event) {
    event.preventDefault();
    console.log('you have clicked the delete button');
    // Prevent the form from submitting & refreshing (✔)
    // 1. Fetch request - goes to "/events/<%= oneEvent %>?_method=DELETE"
        // Need to get oneEvent data for step 1 to work
}

deleteBtn.addEventListener('click', handleClick)