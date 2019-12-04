'use strict';

const handlebars = require('handlebars');

const subjects = ['shark', 'popcorn', 'poison', 'fork', 'cherry', 'toothbrush', 'cannon'];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const templatePhrase = handlebars.compile(`<p>{{subject}} is great to {{punchline}}</p>`);

const resultingPhrase = templatePhrase({
  subject: subjects[Math.floor(Math.random() * subjects.length)],
  punchline: punchlines[Math.floor(Math.random() * punchlines.length)],
});

console.log(resultingPhrase);