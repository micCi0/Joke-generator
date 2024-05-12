
//declaration
const button = document.querySelector("button"),
result = document.querySelector("p");

async function generateJoke() {
    //API url
    const url = "https://v2.jokeapi.dev/joke/Any?type=single";
    //fetch url
    const data = await fetch(url);
    //get json format
    const json = await data.json();

    const category = json.category;
    const joke = json.joke;

    //display result
    result.textContent = `${category}: ${joke}`;
}


//event listeners

button.addEventListener("click" , generateJoke);
onload = generateJoke(); // window.onload