function showOptions() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

document.getElementById('noButton').addEventListener('click', () => {
    alert('Essa opção é inválida, só vale sim!');
});

function selectOption(option) {
    localStorage.setItem('selectedOption', option);
    window.location.href = 'result.html';
}

function selectCustomOption() {
    const customOption = document.getElementById('customOption').value;
    if (customOption) {
        localStorage.setItem('selectedOption', customOption);
        window.location.href = 'result.html';
    } else {
        alert('Por favor, digite uma opção.');
    }
}
