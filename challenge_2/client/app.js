//need document.ready to make function available after the document is loaded

$(document).ready(function(){

  $('form').submit(function(event) {
    event.preventDefault();
    var data = new FormData();
    jQuery.each(jQuery('form')[0].files, function(i, file) {
      data.append('file-'+i, file);
    });

    $.ajax({
      url: '/converter',
      data: data,
      method: 'POST',
      success: function(data) {
        console.log(data);
      }
    })

  })
});


