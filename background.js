console.log("loaded");


var currentTabUrl = "";
var hostname = "";


chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	 currentTabUrl = tabs[0].url
	 hostname = tabs[0].hostname
	  console.log(currentTabUrl);

})
