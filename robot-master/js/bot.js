var text = $("#f-left");
text.focus();
function action() 
{
	if(text.val()==null||text.val()=="")
	{
		text.focus();
		return;
	}

	$(".b-body").append("<div class='mWord'><span></span><p>" + text.val() + "</p></div>");
	$(".b-body").scrollTop(10000000);
	
	var args= {
			type : "get",
			//url:"https://api.ownthink.com/bot",
			url:"http://api.qingyunke.com/api.php",
			//data : {"appid" : "xiaosi", "spoken" : text.val()},
			data : {"key" : "free", "appid" : 0 , "msg": text.val()},
			success : function(redata)
			{
				//var my_data = $.parseJSON(redata)

				//var array= [my_data.data.info.text];
				var array= [redata];

				if(redata.hasOwnProperty("heuristic"))
				{
					for (var i=0; i < my_data.data.info.heuristic.length; i++)
					{
						array.push(my_data.data.info.heuristic[i]);
					}
				} 

				for (var i=0; i < array.length; i++)
				{
					//   console.log(array[i]);
					var result = array[i];
					$(".b-body").append("<div class='rotWord'><span></span> <p id='member'>" + result + "</p></div>");
					$(".b-body").scrollTop(10000000);
				}
			}
		}
	
	ajax(args);
	text.val("");
	text.focus();
	
};

$("#btn").click(function()
{
	action();
});
$(document).keydown(function(event)
{
	if(event.keyCode==13)
	{
		action();
	}
});

function ajax(mJson)
{
	var type=mJson.type;
	var url=mJson.url;
	var data=mJson.data;
	var success=mJson.success;
	var error=mJson.error;
	var dataStr='';
	
	if(data)
	{
		var arr = Object.keys(data);
		var len = arr.length;
		var i = 0;
		
		for (var key in data)
		{
			dataStr+=key+'='+data[key];
	
			if (++i<len)
			{
				dataStr+='&';
			}
		}
		
		if(type.toLowerCase()=='get')
		{
			url+='?'+dataStr;
		}
	}
	
	console.log(url);
	$.ajax({
		url: 'http://192.168.0.101:7777/test_post/nn',
		type: 'GET',
		dataType: 'json',
		data:{'msg':data.msg}
		//data:{'code':'123'}
	})
	.done(function(dat) {
		success&&success(dat.ans);
	})
	.fail(function() {
		alert('服务器超时，请重试！');
	});
	// var script = document.createElement("script");
	// script.setAttribute("src",url);
	// document.getElementsByTagName("head")[0].appendChild(script);
	// function createCORS(method, url){
	// 	var xhr = new XMLHttpRequest();
	// 	if('withCredentials' in xhr){
	// 	 xhr.open(method, url, true);
	// 	}else if(typeof XDomainRequest != 'undefined'){
	// 	 var xhr = new XDomainRequest();
	// 	 xhr.open(method, url, true);
	// 	}else{
	// 	 xhr = null;
	// 	}
	// 	return xhr;
	//    }

	// var xhr = createCORS("get",url);
	// //xhr.setRequestHeader('content-type' , 'application/x-www-form-urlencoded');

	// if(xhr){
	// 	xhr.onload = function(){
	// 		success&&success(xhr.responseText);
	// 	};
	// 	xhr.send(null);
	// }

	// var xhr=new XMLHttpRequest();
	// xhr.open(type,url,true);
	// xhr.setRequestHeader('content-type' , 'application/x-www-form-urlencoded');
	// xhr.send(null);

	// xhr.onreadystatechange=function()
	// {
	// 	if(xhr.readyState==4)
	// 	{
	// 		if(xhr.status>=200&&xhr.status<300)
	// 		{
	// 			success&&success(xhr.responseText);
	// 		}
	// 		else
	// 		{
	// 			error&&error(xhr.status);
	// 		}
	// 	}
	// }
}		
