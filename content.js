// content.js
var pageSRC = $( 'body' ).html().toString();
var topicREG = /\/topic\/[^"]*/g;
var urlList = pageSRC.match(topicREG);
console.log(urlList)
for (var i = 0; i < urlList.length; i++) {
		console.log(i)
		console.log(urlList[i])
}
