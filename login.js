const username = document.getElementById('username')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
    }
	window.location.href = 'index.html';
	localStorage.setItem('username', username.value);
});