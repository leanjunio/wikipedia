/*
Objective:

1. Allow user to search Wikipedia entries in a search box and see resulting entries
2. A button is available to be clicked so that a random Wikipedia entry is prompted

Notes on the api results:
There are 4 queries that are resulted when the call is successful
	- searched string
    - Main "title"
    - Main description
    - link to the wikipedia
*/

$(document).ready(function () {

	// When the submit button is clicked...
    $('.submit').click(function()   {

    	// Take the search query and put it in a variable
        var query = $('.search-query').val();

        // Shows that the searched query is taken
        console.log(query);

        $.ajax({
            type: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&format=json&callback=?',
            async: false,
            dataType: 'json',
            success: function(data) {

            	// Clear the table of the previous results
                $('tbody').html('')

                // Populate the table with the results that came from the call
                for (var i = 0; i < data[1].length; i++) {
                    $('tbody').prepend('<tr><td>' + data[1][i] + '</td><td>' + data[2][i] + '</td><td><a target="blank" href="' + data[3][i] + '">' + data[3][i] + '</a></td>');
                }
            }
        });
    })
});

