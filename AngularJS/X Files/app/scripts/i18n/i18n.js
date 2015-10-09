(function() {
  'use strict';

  function Resources ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
      prefix : 'scripts/i18n/resources-',
      suffix : '.json'
    });

    $translateProvider.determinePreferredLanguage(function() {
      // qualquer logica (cookie por exemplo) para determinar a traducao em
      // runtime.

      // Caso precise alterar em qualquer ponto da app, utilizar o service
      // $translate em algum controller.

      return 'en';
    });

    // $translateProvider.preferredLanguage('en'); // para determinar default.

    // determinar para escapar html e js para maior segurança.
    $translateProvider.useSanitizeValueStrategy('escaped');
  }

  angular.module('xFilesApp').config([ '$translateProvider', Resources ]);
})();
