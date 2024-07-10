document.addEventListener('DOMContentLoaded', () => {
    const jokeBtn = document.getElementById('joke-btn');
    const jokeBox = document.getElementById('joke-box');

    jokeBtn.addEventListener('click', async () => {
        try {
            const joke = await fetchJoke();
            jokeBox.textContent = joke;
        } catch (error) {
            jokeBox.textContent = 'Oops! Something went wrong. Try again later.';
            console.error('Error fetching joke:', error);
        }
    });
});

async function fetchJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        return data.joke;
    } catch (error) {
        throw new Error('Failed to fetch the joke');
    }
}
