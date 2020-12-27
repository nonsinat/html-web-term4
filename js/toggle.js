
jQuery('#expander').on('click', function() {
    jQuery(this).siblings().slideToggle('fast');
    jQuery(this).find('i').toggleClass('fas fa-plus fas fa-minus');
    // jQuery(this).find('i').toggleClass('fas fa-minusfas fa-plus ,');
  });