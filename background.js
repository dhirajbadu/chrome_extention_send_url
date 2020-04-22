console.log("loaded");


var currentTabUrl = "";


chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	 currentTabUrl = tabs[0].url
	  console.log(currentTabUrl);

})
