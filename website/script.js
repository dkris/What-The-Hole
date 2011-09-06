var data, area, wNum,pNum, cAdd, hSho,name;

YUI().use('json-parse', function (Y) {

	var jsonString =     '{' +
	        '"Councilor":{' +
	            '"1": {' + 
	            '"Name": "Smt. P Sowmya",' +
	            '"WardNumber": "117",' +
	            '"WardName": "Shathinagar",' +
	            '"Phone Number": "9986220732",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/117.jpg",' +
	            '"Address": "#26, 3rd cross, 1st main road, Vinayakanagara, Adugodi Post, Bangalore-27"' +
	            '},' +
	            '"2": {' +
	            '"Name": "Sri. Muni Sanjeevayya",' +
	            '"WardNumber": "170",' +
	            '"WardName": "Jayanagar East",' +
	            '"PhoneNumber": "9900196934",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/170.jpg",' +
	            '"Address": "#572, 2nd main road, Puttayyanapalya, Jayanagar 9th Layout, Bangalore-69"' +
	            '},' +
				'"3": {' +
	            '"Name": "Smt. P Sowmya",' +
	            '"WardNumber": "117",' +
	            '"WardName": "Richmond Town",' +
	            '"Phone Number": "9986220732",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/117.jpg",' +
	            '"Address": "#26, 3rd cross, 1st main road, Vinayakanagara, Adugodi Post, Bangalore-27"' +
	            '},' +
				'"4": {' +
	            '"Name": "Smt. P Sowmya",' +
	            '"WardNumber": "117",' +
	            '"WardName": "Nilsandra",' +
	            '"Phone Number": "9986220732",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/117.jpg",' +
	            '"Address": "#26, 3rd cross, 1st main road, Vinayakanagara, Adugodi Post, Bangalore-27"' +
	            '},' +
	            '"5": {' +
	            '"Name": "Smt. Gangambika",' +
	            '"WardNumber": "153",' +
	            '"WardName": "Sadduguntepalya",' +
	            '"PhoneNumber": "9448063498",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/153.jpg",' +
	            '"Address": "#210/9, 7th main road, Byrasandra, Jayanagar, Bangalore-11"' +
	            '},' +
	            '"6": {' +
	            '"Name": "Sri. N. Chandrashekar Raju",' +
	            '"WardNumber": "177",' +
	            '"WardName": "JP Nagar Phase 3",' +
	            '"PhoneNumber": "9880185530",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/177.jpg",' +
	            '"Address": "#20/1, 22nd \'A\' Main, Marenahalli, 2nd stage, J.P Nagar, Bangalore"' +
	            '},' +
	            '"7": {' +
	            '"Name": "Sri. S.N. Murugesh Modaliyaar",' +
	            '"WardNumber": "147",' +
	            '"WardName": "Adugodi",' +
	            '"PhoneNumber": "9844020565",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/147.jpg",' +
	            '"Address": "#20/1, 22nd \'A\' Main, Marenahalli, 2nd stage, J.P Nagar, Bangalore"' +
	            '},' +
				'"8": {' +
	            '"Name": "Smt. P Sowmya",' +
	            '"WardNumber": "117",' +
	            '"WardName": "Shanthala Nagar",' +
	            '"PhoneNumber": "9986220732",' +
	            '"HeadShot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/117.jpg",' +
	            '"Address": "#26, 3rd cross, 1st main road, Vinayakanagara, Adugodi Post, Bangalore-27"' +
	            '}' +
	        '}' +
	        '}';

			
// JSON.parse throws a SyntaxError when passed invalid JSON
// We can now interact with the data
try {
    data = Y.JSON.parse(jsonString);
}
catch (e) {
    alert("Invalid product data");
}	 
});

function addMarkers(x,y, areaName, baseUrl, photoId, actualPhoto, desc, bigUrl, map){
	console.log(desc);
	var myLatLng = new google.maps.LatLng(x,y)
	var marker = new google.maps.Marker({
		position: myLatLng, 
		map: map,
		title:"Check Pothole"
	});
	var url;
	for(corp in data.Councilor){
	 	var  corpData = data.Councilor[corp];
		if(areaName == corpData.WardName){
			//console.log(corpData.Address);
			area = corpData.WardName;
			name = corpData.Name;
			hSho = encodeURI(corpData.HeadShot);
			wNum = corpData.WardNumber;
			pNum = corpData.PhoneNumber;
			cAdd = corpData.Address;
			url = 'info.php?photo='+encodeURI(bigUrl)+'&corpphoto='+encodeURI(hSho)+'&name='+encodeURI(name)+'&ward_num='+encodeURI(wNum)+'&ward_name='+encodeURI(area)+'&phone_num='+encodeURI(pNum)+'&address='+encodeURI(cAdd);
		}
	}
	
	console.log(url);
	console.log(areaName);
	var contentString = '<div id="content" style= "max-height: 180px; border: none;">'+
	    '<div id="siteNotice" "><img src='+ baseUrl +'>'+
		''+
	    '</div>'+
	    ''+
	    '<div style=" margin: 0 0 0 0;" id="bodyContent"><h3 id="firstHeading" class="header">'+ areaName +'</h3>'+
	    '<p>' +
	    '<div style=" margin: 0 0 0 0;" class="holeDesc" id="">'
	    + desc +
	    '</p>'+
	    '<p> <a href='+url+'>Report'+
	    '</a></p>'+
	    '</div>'+
	    '</div>';
	
		var infowindow = new google.maps.InfoWindow({
		    content: contentString
		});
		
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}