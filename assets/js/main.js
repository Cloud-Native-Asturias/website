/**
* Template Name: Maundy - v2.1.0
* Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  const englishConfig = {
      'Elevating the Asturian technological landscape through world-wide collaboration': "Elevating the Asturian technological landscape through world-wide collaboration",
      'aboutus': 'About us',
      'parrafo1': 'Asturias has been suffering from a pesimistic speech that doesn\'t make justice to all of us. It is true that our recent history and the current conjuncture aren\'t ideal but we must overcome this situation. From the Cloud Native Asturias we do not want to let this region to go bust without fighting for it.',
      'parrafo2.1': 'The',
      'parrafo2.2': 'CNCF',
      'parrafo2.3': 'give us the oportunity to expose our potential as a region, and from Cloud Native Asturias we accept the challenge. We must portray our potential through a unified, organized and simple message.',
      'parrafo3': '',
      'parrafo4': 'Asturias produces thousands of Software Engineers a year that come out of the two faculties. Although lots of them have pursued a career abroad, a great number of them whish to return home. No estamos creando una marca Asturias alrededor de todo este potencial, y estamos perdiendo oportunidades.',
      'parrafo5': 'Cloud Native Asturias recupera y potencia ese espíritu de unidad, tan latente en estos tiempos de distanciamiento social. Queremos enviar un mensaje unificado al mundo planteando un enfoque de abajo hacia arriba en el que cada uno de nosotros cuenta. Tenemos que salir de nuestra zona de confort y posicionarnos en el ámbito global. Debemos expandir nuestra zona de influencia y abarcar territorios que van más allá de nuestras fronteras, de tal manera que podamos aprender de otros pero teniendo la oportunidad de que nuestro mensaje también sea escuchado.Cada uno de nosotros tenemos una historia que contar que puede inspirar o servir de guía para el resto. Queremos conoceros a todos. Tenemos que visibilizar quiénes somos y lo que hacemos, y debemos explotar los recursos que tenemos a mano.',
      'parrafo6': 'Somos dos los que comenzamos este camino de Cloud Native Asturias, pero serán muchos los que se nos unirán por el camino. Participa, cuéntanos a qué te dedicas, y hazte notar. Al amparo de la red global Cloud Native Foundation haremos ruido y nos conocerán. Tenemos que poner a Asturias en el mapa tecnológico.',
      'parrafo7': 'Te esperamos.'

  }

  const spanishConfig = {
      'Elevating the Asturian technological landscape through world-wide collaboration': "Elevamos el horizonte tecnologico asturiano a traves de colaboracion internacional",
      'aboutus': "Sobre nosotros",
      'parrafo1': 'Asturias ha sido y es víctima de un discurso pesimista, de resignación y muy cómodo, que nos hace a todos los asturianos (y más a los profesionales) un flaco favor. Es cierto, que la coyuntura y la historia reciente de la región no han sido las mejores, pero tenemos que actuar. Debemos actuar. Desde esta organización no queremos ser cómplices de cómo nuestra región se desmantela poco a poco sin siquiera luchar por ella.',
      'parrafo2.1': 'La',
      'parrafo2.2': 'CNCF',
      'parrafo2.3': 'nos brinda una oportunidad de visibilizar el potencial asturiano y desde Cloud Native Asturias recogemos el guante. Necesitamos proyectar nuestro potencial y el potencial de esta región de una manera unificada, organizada y simple. Queremos ser en todo momento el altavoz de todos (y todas) las profesionales e instituciones asturianas que compartan la misma pasión por la tecnología cloud (o en la nube).',
      'parrafo3': 'Os preguntareis ¿por qué cloud?. Desde Cloud Native Asturias entendemos la tecnología en la nube (o tecnología Cloud) como un elemento esencial en cualquier tipo de proyecto informático que se desarrolle hoy en día. Tiene un elemento crítico y central con el que cualquier profesional dedicado a la industria de la informática tendrá que lidiar en mayor o menor medida. Y es por ello una herramienta que tiene la capacidad de unir a una gran parte de los profesionales de este sector.',
      'parrafo4': 'Asturias cuenta con dos escuelas de ingeniería informática que han generado en las últimas décadas millares de profesionales. Muchos se han visto obligados a partir, y otros muchos buscan suerte en casa, pero lo que es indiscutible es que esos profesionales son un activo propio que no estamos explotando a nivel Asturias. No estamos creando una marca Asturias alrededor de todo este potencial, y estamos perdiendo oportunidades.',
      'parrafo5': 'Cloud Native Asturias recupera y potencia ese espíritu de unidad, tan latente en estos tiempos de distanciamiento social. Queremos enviar un mensaje unificado al mundo planteando un enfoque de abajo hacia arriba en el que cada uno de nosotros cuenta. Tenemos que salir de nuestra zona de confort y posicionarnos en el ámbito global. Debemos expandir nuestra zona de influencia y abarcar territorios que van más allá de nuestras fronteras, de tal manera que podamos aprender de otros pero teniendo la oportunidad de que nuestro mensaje también sea escuchado.Cada uno de nosotros tenemos una historia que contar que puede inspirar o servir de guía para el resto. Queremos conoceros a todos. Tenemos que visibilizar quiénes somos y lo que hacemos, y debemos explotar los recursos que tenemos a mano.',
      'parrafo6': 'Somos dos los que comenzamos este camino de Cloud Native Asturias, pero serán muchos los que se nos unirán por el camino. Participa, cuéntanos a qué te dedicas, y hazte notar. Al amparo de la red global Cloud Native Foundation haremos ruido y nos conocerán. Tenemos que poner a Asturias en el mapa tecnológico.',
      'parrafo7': 'Te esperamos.'
  }

  const elements = document.querySelectorAll("[data-i18n]");
  const replaceText = (el) => {
      const key = el.innerText;
      var lang = getParameterByName('lang');
      if (lang === 'es') {
        el.innerText = spanishConfig[key] || key;
      } else {
        el.innerText = englishConfig[key] || key;
      }
  }
  elements.forEach(el => replaceText(el));

  function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Set the count down timer
  if ($('.countdown').length) {
    var count = $('.countdown').data('count');
    var template = $('.countdown').html();
    $('.countdown').countdown(count, function(event) {
      $(this).html(event.strftime(template));
    });
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

})(jQuery);
