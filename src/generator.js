var BASIC_LATIN = [0x0020, 0x007F];
var LATIN_1 = [0x00A0, 0x00FF];
var LATIN_EXTENDED_A = [0x0100, 0x017F];
var LATIN_EXTENDED_B = [0x0180, 0x024F];
var IPA_EXTENSIONS = [0x0250, 0x02AF];
var GREEK_COPTIC = [0x0370, 0x03FF];
var CYRILLIC = [0x0400, 0x04FF];
var CYRILLIC_SUPPLEMENTARY = [0x0500, 0x052F];
var ARMENIAN = [0x0530, 0x058F];
var HEBREW = [0x0590, 0x05FF];
var ARABIC = [0x0600, 0x06FF];

var locales = [
  {lang:'hu', set: [BASIC_LATIN, LATIN_1, LATIN_EXTENDED_A]},
  {lang:'da', set: [BASIC_LATIN, LATIN_1]},
  {lang:'nb', set: [BASIC_LATIN, LATIN_1]},
  {lang:'se', set: [BASIC_LATIN, LATIN_1]},
  {lang:'fi', set: [BASIC_LATIN, LATIN_1]},
  {lang:'de', set: [BASIC_LATIN, LATIN_1]},
  {lang:'en', set: [BASIC_LATIN]},
];

var characterMaps = locales.map(locale => ({
  'map': locale.set.reduce((obj, range) => {
    for (let i = range[0]; i <= range[1]; i++) {
      obj.push(String.fromCharCode(i));
    }
    return obj;
  }, []).sort((a, b) => (a.localeCompare(b, locale.lang))).join(''),
  'lang': locale.lang,
}));

characterMaps.forEach(map => console.log(map.lang + ': ' + map.map));
