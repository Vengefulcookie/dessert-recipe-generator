function requestRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "response.data.answer",
    autoStart: true,
    cursor: null,
    delay: 25,
  });

  alert("Your guide to a sweet treat is on its way!");
}

let recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", requestRecipe);
