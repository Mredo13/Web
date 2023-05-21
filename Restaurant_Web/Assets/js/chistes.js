const btnJoke = document.getElementById("btn-joke");
const jokeContainer = document.getElementById("joke-container");

btnJoke.addEventListener("click", () => {
    const apiUrl = "https://v2.jokeapi.dev/joke/Any?lang=es";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let jokeText;

            if (data.type === "single") {
                jokeText = data.joke;
            } else {
                jokeText = `${data.setup} ${data.delivery}`;
            }

            jokeContainer.innerHTML = jokeText;
        })
        .catch(error => console.error(error));
});
