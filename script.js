// Purpose: This script is used to filter the cards based on the category selected by the user.
$(document).ready(function() {
    // When a filter button is clicked
    $('.options').on('click', function() {
        // Get the data-filter value of the clicked button
        var filterValue = $(this).attr('data-filter');

        // If the 'Show All' button is clicked, show all cards with fadeIn animation
        if (filterValue === '*') {
            $('.card').fadeIn(500); // Fade in all cards
        } else {
            // First, fade out all the cards
            $('.card').fadeOut(300, function() {
                // After fading out, show only the filtered category with fadeIn
                $(filterValue).fadeIn(500); // Fade in the cards that match the category
            });
        }

        // Toggle active class to highlight the clicked button
        $('.options').removeClass('active');
        $(this).addClass('active');
    });
});
