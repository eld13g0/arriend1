
//Scroll reveal 

ScrollReveal().reveal('.contenedor-info', { delay: 500 });
ScrollReveal().reveal('.contenedor-casas', { delay: 500 });
ScrollReveal().reveal('.contenedor-decoracion', { delay: 500 });
ScrollReveal().reveal('.mapa', { delay: 500 });
ScrollReveal().reveal('.contenedor-footer', { delay: 500 });






// API 

$.getJSON('https://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    $("<p/>", {
        html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
    }).appendTo("#api");
}).fail(function() {
    console.log('Error al consumir la API!');
});



//Validacion jQuery

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
    });
    
    $("#formulario").validate({
      rules: {
        nombre: {
              required: true,
              minlength: 5,
              maxlength: 10
    },
    
    email: {
              required: true,
              Email: true
    },
    mensaje: {
            required: true,
        }
    },
    
    messages: {
          nombre: "Ingrese un nombre",
          email: "Ingrese un email valido",
          mensaje: "Ingrese un mensaje"
         
    },
});




// Accordion

function openCity(evt, cityName) {
    // Declare all variables
    var i,panel, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }















