# locale-compare-polyfill

Polyfill for String.localeCompare

localeCompare is not supported in Safari and most mobile browsers.


## install

```
npm install locale-compare-polyfill
npm test
```

## usage

```
'ø'.localeCompare('p') // -1
'ø'.localeCompare('p', 'da') // 1 a positive value: in danish, ø sorts after p
```
