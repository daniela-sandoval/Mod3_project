class EditModal {
  constructor() {
    const showForm = document.querySelector(".js-btn");
  }

  displayModal() {
    modal.style.display = "block";
    span.addEventListener("click", () =>{
      modal.style.display = "none";
    })
    const newStoryForm = document.querySelector('.js-form')
    // newStoryForm.addEventListener("submit", testDomSlap)
    // fetchAdapter.makePost(testDomSlap)
  }

}