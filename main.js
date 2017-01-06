$(document).ready(function(){
  $('.submit').click(function(){
    var q = $('.wiki').val();
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + q + '&format=json&callback=?';
    
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      success: function(data) {
        //console.log(data[1][0]);
        //console.log(data[2][0]);
        //console.log(data[3][0]);
        $('#output').html('');
        for (var i=0;i<data[1].length;i++)  {
          //<li><a href="site">Data</a><p>description</p></li>
          $('#output').prepend('<li><a href="' + data[3][i] +'">' + data[1][i] + '</a><p>' + data[2][i] + '</p></li>');
        }
      },
      error: function(errorMessage) {
        console.log('fail');
      }
    });
  });
});