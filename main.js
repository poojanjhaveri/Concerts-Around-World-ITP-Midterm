// JavaScript Document
console.log("Poojan");
var map = new google.maps.Map(document.getElementById('map'),{
	zoom:2,
	center:new google.maps.LatLng(36.05178307933835,42.49737373046878),
	mapTypeId:google.maps.MapTypeId.ROADMAP
	});
		

$(window).load(function () {
        
jsonRequest("http://api.eventful.com/json/events/search?c=music&app_key=gVsKKsfS5PsGS6sg&page_number=1&date=Future&keywords=kanye-west&callback=processJSONP"); // Request
});
		
/*
Function for JSON Request
*/
function jsonRequest(url)
{
     var script=document.createElement('script');
     script.src=url;
     document.getElementsByTagName('head')[0].appendChild(script);
}

/*
Callback function after the request
*/
function processJSONP(data)
{
	console.log("hie");
	var $content = $('#content');			// selector caching
	$content.html("");						// Erase the content at beginning of every json Request
	console.log(data);
	if(data.events.length==0)				// Results count is zero. So no data obtained
	{
		$content.html("No events found");		// No vaid concerts found
		}
	else
	{
	  for(var i=0;i<data.events.event.length;i++)
	  {
		  console.log(data.events.event[i]);
	//	 var htmlWithData = templateFunction(data.events.event[i]);	 // pass the data to the function so that it compiles
	//	 $content.append(htmlWithData);					// Append the data to existing div
	  }
	}

   
}