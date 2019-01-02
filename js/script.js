
$(document).ready(function () {

    // Shows Paragraph if image is clicked.
    $(".card_image").click(function() {
        $(this).next().children('p').slideDown();
    }); 

    // Highlights card if card is clicked
    $(".card").click(function() {
        $(this).toggleClass("highlight");
    }); 

    // Hide all unselected cards
    $("#select_btn").click(function() {
        $(".card").not(".highlight").slideUp('medium');
    })

    // Shows all hidden cards
    $("#all_btn").click(function(){
        $(".card").slideDown('fast');
    })
});