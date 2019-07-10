class ShowStoryModal {
  constructor() {
    graveYard.addEventListener("click", this.displayStoryModal)
  }

  displayStoryModal(event) {
    if (event.target.id === "tomb-con") {
      const storyId = event.target.dataset.id
      debugger
      // make fetch request for single story

      // add new js file class that deals with adding data to show modal that takes the data with it

      showStory.style.display = "block";
      storyclose.addEventListener("click", () => {
        showStory.style.display = "none";
      })
    }
  }

}