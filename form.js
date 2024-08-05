document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userform');

    form.addEventListener('submit', function(event) {
        event.preventDefault();


    //get form values
    const username = document.getElementById('username').value
    const emailAddress = document.getElementById('emailAddress').value
    const message = document.getElementById('message').value


    const user = {
        username: username,
        email: emailAddress,
        message: message
    }

    console.log(user)
    console.log(user)

})
})