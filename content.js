// content.js
var pageSRC = $( 'body' ).html().toString();
var topicREG = /\/topic\/[^"]*/g;
var facebookPREF = "https://www.facebook.com"
var urlList = pageSRC.match(topicREG);
for (var i = 0; i < urlList.length; i++) {
		console.log(i);
		var builtURL = facebookPREF+urlList[i];
		var newsReq = $.get(builtURL, function(pageSRC, success) {
				if(success=="success") {
					// looked ahead and got headline- parse headline
					getRawHeadLineReg = /<div\sclass="_4l5g">.*<div class="_4l5h">[^<]*/g
					rawHeadLine = pageSRC.match(getRawHeadLineReg).toString();
					headLine = rawHeadLine.replace(/<div[^>]*>/g, '');
					headLine = headLine.replace(/<\/div>/g, '\n -------------------------------------------------------- \n')
					headLine = headLine.replace(/&#039;/g, "'");

					alert(headLine)
					// have headline- carry on with code replacement 
				}
		});
}
