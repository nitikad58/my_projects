var names=[ "Steel Tubes", "Azomite Powder", "Titanium Rods","Platinum Bars"];

// invoke the carousel
$('#myCarousel').carousel({
    interval: false
    });
    
    /* SLIDE ON CLICK */ 
    $('.carousel-linked-nav > li > a').click(function() {
    
    // grab href, remove pound sign, convert to number
    var item = Number($(this).attr('href').substring(1));
    
    // slide to number -1 (account for zero indexing)
    $('#myCarousel').carousel(item - 1);
    
    // remove current active class
    $('.carousel-linked-nav .active').removeClass('active');
    
    // add active class to just clicked on item
    $(this).parent().addClass('active');

    $('#productname').text(names[item-1]);
    // don't follow the link
    return false;
    });

    $('#myCarousel').bind('slid.bs.carousel', function() {

        // remove active class
        $('.carousel-linked-nav .active').removeClass('active');
    
        // get index of currently active item
        var idx = $('#myCarousel .item.active').index();
    
        // select currently active item and add active class
        $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');

    });    
 

 function readMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }

$(document).ready(function(){
  $("#quantity").on("change",  function(){
    var quantity =Number($(this).val()) ;
    if(quantity  < 2)
    {
      $("#units").text("Ton");
    }
    else 
    {
      $("#units").text("Tons");
    }  
  });
});

$(document).ready(function(){
  $("#send-inquiry").click( function(){
    var quantity =Number($(this).val()) ;
    if(quantity != 1)
    {
      $("#quantity").val(1);
      $("#units").text("Ton");
    }
  });
});
 
$(document).ready(function(){
 $("#Previous").click( function(){
    var ProductName = $('#productname').text();
    var indexOfProduct = names.indexOf(ProductName);
      if (indexOfProduct > 0)
      {
        $('#productname').text(names[indexOfProduct-1]);
      }
      else{
        $('#productname').text(names[3]);
      }

  });
});

$(document).ready(function(){
  $("#Next").click(function(){
    var ProductName = $('#productname').text();
    var indexOfProduct = names.indexOf(ProductName);
      if (indexOfProduct < 3)
       {
        $('#productname').text(names[indexOfProduct+1]);
      }
    else{
      $('#productname').text(names[0]);
    }

  });
});

