(function() {
  'use strict';

  var localeCompareSupport = 'ø'.localeCompare('p', 'da-DK') > 0;

  if (!localeCompareSupport) {

    var characterMaps = {
      'da': '­  _-,;:!¡?¿.·\'"«»()[]{}§¶@*/\&#%`´^¯¨¸°©®+±÷×<=>¬|¦~¤¢$£¥01¹½¼2²3³¾456789AaªÁáÀàÂâÃãBbCcÇçDdÐðEeÉéÈèÊêËëFfGgHhIiÍíÌìÎîÏïJjKkLlMmNnÑñOoºÓóÒòÔôÕõPpQqRrSsßTtÞþUuÚúÙùÛûVvWwXxYyÝýÿÜüZzÆæÄäØøÖöÅåµ',
      'nb': '­  _-,;:!¡?¿.·\'"«»()[]{}§¶@*/\&#%`´^¯¨¸°©®+±÷×<=>¬|¦~¤¢$£¥01¹½¼2²3³¾456789aAªáÁàÀâÂãÃbBcCçÇdDðÐeEéÉèÈêÊëËfFgGhHiIíÍìÌîÎïÏjJkKlLmMnNñÑoOºóÓòÒôÔõÕpPqQrRsSßtTþÞuUúÚùÙûÛvVwWxXyYýÝÿüÜzZæÆäÄøØöÖåÅµ',
      'se': '­  _-,;:!¡?¿.·\'"«»()[]{}§¶@*/\&#%`´^¯¨¸°©®+±÷×<=>¬|¦~¤¢$£¥01¹½¼2²3³¾456789aAªáÁàÀâÂåÅäÄãÃæÆbBcCçÇdDðÐeEéÉèÈêÊëËfFgGhHiIíÍìÌîÎïÏjJkKlLmMnNñÑoOºóÓòÒôÔöÖõÕøØpPqQrRsSßtTuUúÚùÙûÛüÜvVwWxXyYýÝÿzZþÞµ',
      'fi': '­  _-,;:!¡?¿.·\'"«»()[]{}§¶@*/\&#%`´^¯¨¸°©®+±÷×<=>¬|¦~¤¢$£¥01¹½¼2²3³¾456789aAªáÁàÀâÂãÃbBcCçÇdDðÐeEéÉèÈêÊëËfFgGhHiIíÍìÌîÎïÏjJkKlLmMnNñÑoOºóÓòÒôÔõÕpPqQrRsSßtTuUúÚùÙûÛvVwWxXyYýÝÿüÜzZþÞåÅäÄæÆöÖøØµ',
      'de': '­  _-,;:!¡?¿.·\'"«»()[]{}§¶@*/\&#%`´^¯¨¸°©®+±÷×<=>¬|¦~¤¢$£¥01¹½¼2²3³¾456789aAªáÁàÀâÂåÅäÄãÃæÆbBcCçÇdDðÐeEéÉèÈêÊëËfFgGhHiIíÍìÌîÎïÏjJkKlLmMnNñÑoOºóÓòÒôÔöÖõÕøØpPqQrRsSßtTuUúÚùÙûÛüÜvVwWxXyYýÝÿzZþÞµ',
      'es': ' _-,;:!?.\'"()[]{}@*/\&#%`^+<=>|~$0123456789aAáÁbBcCdDeEéÉfFgGhHiIíÍjJkKlLmMnNñÑoOóÓpPqQrRsStTuUúÚüÜvVwWxXyYzZ',
      'cat': ' _-,;:!?.\'"()[]{}@*/\&#%`^+<=>|~$0123456789aAáÁàÀbBcCçÇdDeEéÉèÈfFgGhHiIíÍìÌïÏjJkKlLmMnNñÑoOóÓòÒpPqQrRsStTuUúÚùÙüÜvVwWxXyYzZ',
      'en': ' _-,;:!?.\'"()[]{}@*/\&#%`^+<=>|~$0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'
    };

    var original = String.prototype.localeCompare;

    String.prototype.localeCompare = function(other, locale) {
      if (!locale) { return original.apply(this, arguments); }
      var lang = locale.split('-')[0];
      var map = characterMaps[lang];

      var charA = null, charB = null, index = 0;
      while (charA === charB && index < 100) {
        charA = this.toString()[index];
        charB = other[index];
        index++;
      }
      return Math.max(-1, Math.min(1, map.indexOf(charA) - map.indexOf(charB)));
    }
  }
})();
