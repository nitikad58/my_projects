let searchUrl= 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

$(document).ready(function(){
  $("button").click(function(){
    var userInput= document.getElementById("userinput").value;
    let urll= searchUrl + userInput;

    $.ajax({url: urll, success: function(result){

        let arrayofitems = result.split(",");
        let item= document.createElement("li");
       
        for i in arrayofitems{
          let txtnode =document.createTextNode(i);
           
        }
      $("#div1").html(item);
   }});
  });
});