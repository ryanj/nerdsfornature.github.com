!function ($) {
  
  function load_ui (){
  	
  	// var wrap = $('div.load-wrap');
   //  $('ul.nav>li>a').on('click', function(e) {
   //  	var href = $(this).attr('href');
   //  	wrap.load(href + ' .container-fluid');
   //  	e.preventDefault();
   //  });

    $('img.img-circle').popover({
      placement: 'bottom',
      trigger: 'hover'
    });

  }
  $(document).ready(load_ui);

}(window.jQuery)
