const form = document.querySelector('[data-form]');

form.onsubmit = evt => {
    evt.preventDefault();

    location.href = location.href.replace('contact.html', 'success.html');
}
