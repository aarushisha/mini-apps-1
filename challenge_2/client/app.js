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
      var data = reader.result;
      // console.log(data); //upload file results (json)
      $.ajax({
        type: "POST",
        url: '/converter',
        data: {results : data},
        success: function(data) {
          console.log('Success!!!!!', data);
          var downloadCSV = document.getElementById('downloadCSV');
          // console.log(downloadCSV);
          downloadCSV.innerHTML = "Click to Download CSV";
          downloadCSV.href = URL.createObjectURL(data);
        },
      });


    }





    

  })
});


