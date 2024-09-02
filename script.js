document.addEventListener('DOMContentLoaded', function () {
    const devButton = document.getElementById('dev-button');
    devButton.addEventListener('click', function () {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const DevAccess = urlParams.get('DevAccess');

        if (DevAccess === '199437') {
            const elements = document.querySelectorAll('div, p, button');
            elements.forEach(element => {
                element.style.outline = '1px solid black';
            });
            alert('Dev tools have been activated.')
        } else {
            alert('You do not have dev access permission. Get lost, stranger!')
        }

    });
    const notATrapButton = document.getElementById('BIG');
    notATrapButton.addEventListener('click', function () {
        const img = document.getElementById('picture');
        img.style.display = 'block';
        notATrapButton.style.display = 'none';
        const titlePTag = document.querySelector('#title p')
        titlePTag.textContent = 'AAAHHH!'
    });
});