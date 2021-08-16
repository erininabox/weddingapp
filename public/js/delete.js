console.log('delete.js has loaded');

const deleteBtn = document.getElementById("delete-btn");

function handleClick (event) {
    // Prevent the form from submitting & refreshing (✔)
    event.preventDefault();
    // 1. Fetch request - goes to "/events/deleteBtn.dataset.eventid?_method=DELETE"✅
        // Need to get oneEvent data for step 1 to work
    fetch(`/events/${deleteBtn.dataset.eventid}?_method=DELETE`, {
        method: 'POST', redirect: 'follow'
    }).then (() => {
        document.location.href = '/events'
    })
}

deleteBtn.addEventListener('click', handleClick)