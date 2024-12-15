function provideRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 25,
  });
}

function requestRecipe(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "a9e857fe88f94odb09ad1fcdt90348f2";
  let context =
    "You are a AI assistant that is well versed in different types of delicious desserts and their recipes.Please provide the recipe with no added extra content in HTML format but do not state that it is in html. Please behave";
  let prompt = `Generate a dessert recipe for ${userInstructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeIncoming = document.querySelector("#recipe");
  recipeIncoming.innerHTML = ` <div class = "waiting">Your guide to a sweet treat is on its way!😋</div>`;

  axios.get(apiUrl).then(provideRecipe);
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", requestRecipe);
