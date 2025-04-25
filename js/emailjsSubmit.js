//Script to submit the form using EmailJS

window.onload = function () {
    const submitButton = document.getElementById('submitButton');
    const formResult = document.getElementById('formResult');
    const submitStatus = document.getElementById('submitStatus');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const form = document.getElementById('contactForm');
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        loadingSpinner.classList.remove('d-none');
        form.style.display = 'none';
        emailjs.sendForm('service_vedw96o', 'template_a9o31ik', this)
            .then(() => {
                loadingSpinner.classList.add('d-none');
                submitStatus.innerHTML = 'Message sent successfully - CCO Henry thanks you for your interest!';
                formResult.classList.remove('d-none');
                formResult.classList.add('d-flex');
                //console.log('SUCCESS!');
            }, (error) => {
                //console.log('FAILED...', error);
                submitStatus.innerHTML = 'Message failed to send. Please refresh and try again.';
            });
    });
}
