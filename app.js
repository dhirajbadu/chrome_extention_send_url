$(".sendRequest").click(function(){
var url = "http://www.google.com/search?q="+currentTabUrl;
window.open(url, '_blank');
$("#successMsg").removeClass("hide").removeClass("show").addClass("show")
});


$(".closebtn").click(function(){
$(this).parent().removeClass("hide").removeClass("show").addClass("hide")
});