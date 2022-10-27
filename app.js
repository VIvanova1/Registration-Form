window.addEventListener("load", solve);

function solve() {
    const password = document.getElementById('pass');
    const passwordChek = document.getElementById('confirmPass');
    const username = document.getElementById('user-name');

    const registerBtnElement = document.getElementById('register-btn');
    registerBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (password.value !== passwordChek.value) {
            alert('Passwords did not match')
        }
        e.currentTarget.parentElement.remove();

        const mainSection = document.getElementById('main');
        const h1Element = document.createElement('h1');
        h1Element.classList.add('title');
        h1Element.textContent = `Hi, ${username.value}!`;
        mainSection.appendChild(h1Element);
    });
}