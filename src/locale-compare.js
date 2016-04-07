(function() {
  'use strict';

  var localeCompareSupport = 'ø'.localeCompare('p', 'da-DK') > 0;

  if (!localeCompareSupport) {

    var orders = {
      'da': '  _-,;:!¡?¿.·\'"«»()[]{}§¶@*/\&#%`´^¯¨¸°©®+±÷×<=>¬|¦~¤¢$£¥01¹½¼2²3³¾456789AaªÁáÀàÂâÃãBbCcÇçDdÐðEeÉéÈèÊêËëFfGgHhIiÍíÌìÎîÏïJjKkLlMmNnÑñOoºÓóÒòÔôÕõPpQqRrSsßTtÞþUuÚúÙùÛûVvWwXxYyÝýÿÜüZzÆæÄäØøÖöÅåµ'
    };

    var original = String.prototype.localeCompare;

    String.prototype.localeCompare = function(other, locale) {
      if (!locale) { return original.apply(this, arguments); }
      var lang = locale.split('-')[0];
      var order = orders[lang];

      var charA = null, charB = null, index = 0;
      while (charA === charB && index < 100) {
        charA = this.toString[index];
        charB = other[index];
        index++;
      }
      return Math.max(-1, Math.min(1, order.indexOf(charA) - order.indexOf(charB)));
    }
  }
})();
