(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @description
   *
   */
  angular
    .module('home', [
      'ui.router'
    ]);
}());

(function () {
  $('#menuToggle, .menu-close').on('click', function () {
    $('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
})(jQuery)
