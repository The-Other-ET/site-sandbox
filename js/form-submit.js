var form = document.getElementById("contactForm");

async function handleSubmit(event) {
    console.log("handleSubmit called");
    event.preventDefault();
    var status = document.getElementById("formStatus");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Headers': 'content-type',
            'Access-Control-Allow-Methods': 'POST, GET'
        }
    }).then(response => {
        console.log(`fetch called with action: ${event.target.action}, method: ${form.method}, body: ${data}, headers: ${headers}`)
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit);