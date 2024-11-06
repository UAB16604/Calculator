const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const themeToggle = document.getElementById('theme-toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            result.value = '';
        } else if (button.id === 'calculate') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else {
            result.value += button.dataset.value;
        }
    });
});

// Theme switching
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9+\-*/.()]/.test(key)) {
        result.value += key;
    } else if (key === 'Enter') {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = 'Error';
        }
    } else if (key === 'Escape') {
        result.value = '';
    }
});