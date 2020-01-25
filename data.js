const tweets= []
function add (name, content) {
  tweets.unshift({ name: name, content: content, comments: []});
}
function list () {
  return tweets;
}

function comment(id, name, content) {
	tweets[id].comments.push({ name: name, content: content });
}


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
const getFakeName = function() {
  const fakeFirsts = ['Toni', 'Guille', 'Santi', 'Facu', 'Alan', 'Pinki', 'Tincho', 'Solano', 'R2D2'];
  const fakeLasts = ['Scanlan', 'Aszyn', 'Tralice', 'Velasco', 'Sainz', 'Palacio', 'Palacios', 'Lidueña', 'Fisicaro', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
const getFakeTweet = function() {
  const awesome_adj = ['increible', 'emocionante', 'increible', 'gracioso', 'dulce', 'cool',  'sorprendente', 'impresionante'];
  return "Plataforma 5 es " + randArrayEl(awesome_adj) + "! Los profesores simplemente son " + randArrayEl(awesome_adj) + ". #P5Love #codedreams";
};

module.exports = { add: add, list: list, comment: comment};

for (let i = 0; i < 10; i++) {
  
  module.exports.add( getFakeName(), getFakeTweet() );
}