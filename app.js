$('.clockpicker').clockpicker({
	placement: 'buttom',
	align: 'left',
	donetext: 'Done',
	doneclass: 'timePicked'
});


$(".sendRequest").click(function(){
	var time = $("#time").val();
	var hostname = get_hostname(currentTabUrl);
	console.log("hostname : " + hostname);
	var isValidHostName = hostname.includes("youtube");
	console.log("isValidHostName : " + isValidHostName);

	var url = "http://localhost:8080/chromeExtention/scrap?url="+currentTabUrl+"&starttime="+time;
	if(isValidHostName){
		send(url);
	}else{
		invalidMsg();
	}
	
});


$(".closebtn").click(function(){
	$(this).parent().removeClass("hide").removeClass("show").addClass("hide")
});

function get_hostname(url) {
	return $('<a>').prop('href', url).prop('hostname');

}

function send(url , param){
	$.ajax({
		type: "GET",
		url: url,
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
		dataType: 'json',
		timeout: 30000,
		beforeSend: function (xhr) {
			loading("sendRequest");
		},
		success: function (data) {
			unloading("sendRequest");
			console.log("success");
			if(data.status === 200){
				successMsg();
			}else{
				errorMsg();
			}
			
		},

		error: function (xhr, exception) {
			unloading("sendRequest");
			console.log("errorMsg");
			errorMsg();
			
		}
	});
}

function successMsg(){
	$("#successMsg").removeClass("hide").removeClass("show").addClass("show");
	$("#errorMsg").removeClass("hide").removeClass("show").addClass("hide");
	$("#invalidMsg").removeClass("hide").removeClass("show").addClass("hide");
}

function errorMsg(){
	$("#successMsg").removeClass("hide").removeClass("show").addClass("hide");
	$("#errorMsg").removeClass("hide").removeClass("show").addClass("show");
	$("#invalidMsg").removeClass("hide").removeClass("show").addClass("hide");
}

function invalidMsg(){
	$("#successMsg").removeClass("hide").removeClass("show").addClass("hide");
	$("#errorMsg").removeClass("hide").removeClass("show").addClass("hide");
	$("#invalidMsg").removeClass("hide").removeClass("show").addClass("show");
}


function loading(btnId){
	$("#"+btnId ).find(".fa-refresh").removeClass("hide").removeClass("show").addClass("show");
	$("#"+btnId).prop('disabled', true);
}

function unloading(btnId){
	$("#"+btnId + " .fa-refresh").removeClass("hide").removeClass("show").addClass("hide");
	$("#"+btnId).prop('disabled', false);
}