// $("#postButton").on(`click`, function () {
    // document.querySelector("#postButton").addEventListener(`click`, () =>{ 
    // const reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //       const uploaded_image = reader.result;
    //     imgCheck.src = uploaded_image;
    //     // document.querySelector(".imgPost").src = uploaded_image;
    //     });
    //     reader.readAsDataURL(this.files[0]);
    // });

$(`#postButton`).on(`click` , () => {
    $(`#image`).trigger("click",(e)=>{
        // e.preventDefault();
    });
})

// });