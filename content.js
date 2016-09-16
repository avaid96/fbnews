// content.js
var pageSRC = $('body').html().toString();
var topicREG = /\/topic\/[^"]*/g;
var facebookPREF = "https://www.facebook.com"
var urlList = pageSRC.match(topicREG);
var pplTalk = document.getElementsByClassName("_5v9v")
for (var i = 0; i < urlList.length; i++) {
    var builtURL = facebookPREF + urlList[i];
    ! function(i) {
        $.get(builtURL, {
            param: i
        }, function(pageSRC, success) {
            if (success == "success") {
                // looked ahead and got headline- parse headline
                getRawHeadLineReg = /<div\sclass="_4l5g">.*<div class="_4l5h">[^<]*/g
                rawHeadLine = pageSRC.match(getRawHeadLineReg).toString();
                headLine = rawHeadLine.replace(/<div[^>]*>/g, '');
                headLine = headLine.replace(/<\/div>/g, ' -> ');
                headLine = headLine.replace(/&#039;/g, "'");
                headLine = headLine.replace(/&quot;/g, "\"");

                // have headline- carry on with code replacement 
                pplTalk[i].innerText = headLine + "->" + pplTalk[i].innerText
            } else {
                console.log("failed to load ahead");
            }
        });
    }(i);
}
