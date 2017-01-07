/*
Notes on the api

1. There are 4 queries that are resulted
    - searched string
    - Main "title"
    - Main description
    - link to the wikipedia

2. List out the main titles
*/

$(document).ready(function () {
    $('.submit').click(function()   {
        var query = $('.search-query').val();
        console.log(query);

        $.ajax({
            type: 'GET',
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + query + '&format=json&callback=?',
            // example: https://en.wikipedia.org/w/api.php?action=opensearch&search=dog&format=json&callback=?
            async: false,
            dataType: 'json',
            success: function(data) {
                // Find a way to populate the table with the data that is presented
                $('tbody').html('')
                for (var i = 0; i < data[1].length; i++) {
                    $('tbody').prepend('<tr><td>' + data[1][i] + '</td><td>' + data[2][i] + '</td><td>' + data[3][i] + '</td>');
                }

            }
        });
    })
});

$('input.autocomplete').autocomplete({
	data: {
		"Apple": null,
		"Microsoft": null,
		"Google": 'http://placehold.it/250x250'
	}
});

function displayData(query) {   //function displays data to the table in fashion.

}
