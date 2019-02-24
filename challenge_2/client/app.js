$(document).ready(function(){
  console.log('document is ready');

  $('#form').submit(function(event) {
    event.preventDefault();
    var json = document.getElementsByName('json');
    var file = json[0].files[0];
    console.log(file);

    var reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function(event) {
      var result = reader.result;
      console.log(result); //upload file results (json)


      $.post({
        type: "POST",
        url: '/converter',
        data: result,
        processData: false,
        contentType: false,
        success: function(result) {
          console.log(result);
        }
      });


    }





    

  })
});


