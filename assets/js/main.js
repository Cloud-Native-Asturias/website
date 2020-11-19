!(function($) {
  "use strict";

  const englishConfig = {
      'Elevating the Asturian technological landscape through world-wide collaboration': "Elevating the Asturian technological landscape through world-wide collaboration",
      'aboutus': 'About us',
      'parrafo1': 'What do we do?',
      'parrafo2': 'We help promote the technology industry in Asturias by reducing the gap between our technology professionals and a broader international network of professionals around the world.',
      'parrafo3': 'Why do we do it?',
      'parrafo4': 'In recent decades, traditional Asturian industries and sectors have been losing strength and relevance. It is time to shake it all up and place the tech industry as the main driver of our region. We have talent and great potential, so we must act locally and think globally.',
      'parrafo5': 'How do we do it?',
      'parrafo6': 'We follow a bottom-up approach to empower our tech professionals. Cloud Native Asturias provides them the international framework needed to shine and be heard beyond our frontiers. We are all in the same boat and we can’t do it alone.',
      'parrafo7': 'When is it a good time to do it?',
      'parrafo8': 'NOW! Join us! Reach out and start creating impact from day 1.'

  }

  const spanishConfig = {
      'Elevating the Asturian technological landscape through world-wide collaboration': "Elevamos el horizonte tecnologico asturiano a traves de colaboracion internacional",
      'aboutus': "Sobre nosotros",
      'parrafo1': '¿Qué hacemos?',
      'parrafo2': 'Ayudamos a promover la industria de la tecnología en Asturias reduciendo la brecha entre nuestros profesionales de la tecnología y profesionales de todo el mundo.',
      'parrafo3': '¿Por qué lo hacemos?',
      'parrafo4': 'En las últimas décadas, las industrias y sectores tradicionales asturianos han ido perdiendo fuerza y relevancia. Es hora de sacudirlo todo y colocar a la industria tecnológica como el principal impulsor de nuestra región. Tenemos talento y un gran potencial, por lo que debemos actuar localmente y pensar globalmente.',
      'parrafo5': '¿Cómo lo hacemos?',
      'parrafo6': 'Seguimos un enfoque de abajo hacia arriba para empoderar a nuestros profesionales de la tecnología. Cloud Native Asturias proporciona el marco internacional necesario para brillar y hacerse oír más allá de nuestras fronteras. Todos estamos en el mismo barco y no podemos hacerlo solos.',
      'parrafo7': '¿Cuándo es un buen momento para hacerlo?',
      'parrafo8': '¡AHORA! ¡Únete a nosotros! Ponte en contacto y comienza a generar impacto desde ya.'
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
