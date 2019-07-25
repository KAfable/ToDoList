//check off specific todos by clicking
//on click can only be added to existing ul's, hence it is added to the parent ul to affect future children
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
  event.stopPropagation();
});

//Remove the actual to do list
$("ul").on("click", "span", function() {
  $(this)
    .parent()
    .fadeOut(500, () => $(this).remove());
  event.stopPropagation();
});

//Accept the form input
//cannot use arrow notation since you use this
$("input").keypress(function(event) {
  if (event.which === 13) {
    let newText = $(this).val();
    $(this).val("");
    //create a new li and make the text value
    $("ul").append(`<li><span>X</span> ${newText}</li>`);
  }
});
