$(function() {
	/* ChartJS */
	'use strict';

	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function() {
		// console.log('xxx')
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
		// document.getElementById('trackData').innerHTML = xmlHttp.responseText;
		var tracklist = JSON.parse(xmlHttp.responseText);
		// console.log(tracklist)
		for (var i =0; i< tracklist.length; i++){
			var tr = document.createElement('tr');
			var url = document.createElement('td');
			var size = document.createElement('td');
			var frequency = document.createElement('td');
			url.innerHTML = tracklist[i].url;
			size.innerHTML = tracklist[i].size;
			frequency.innerHTML = tracklist[i].frequency;

			tr.appendChild(url)
			tr.appendChild(size)
			tr.appendChild(frequency)
			document.getElementById('trackData').appendChild(tr)
		}
		
	}
		
	};

	xmlHttp.open("POST", "http://176.122.147.10:2222/test/getmonitor", true); // true for asynchronous 
	xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlHttp.send(JSON.stringify({}));
})