YUI().use('json-parse', function (Y) {
 
var jsonString = '{ "Councilor":{ "1": { "Name": "Smt. P Sowmya", "Ward Number": "117", "Ward Name": "Shathinagar", "Phone Number": "9986220732", "Head Shot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/117.jpg", "Address": "#26, 3rd cross, 1st main road, Vinayakanagara, Adugodi Post, Bangalore-27" }, "2": { "Name": "Sri. Muni Sanjeevayya", "Ward Number": "170", "Ward Name": "Jayanagar East", "Phone Number": "9900196934", "Head Shot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/170.jpg", "Address": "#572, 2nd main road, Puttayyanapalya, Jayanagar 9th Layout, Bangalore-69" }, "3": { "Name": "Smt. Gangambika", "Ward Number": "153", "Ward Name": "Jayanagar", "Phone Number": "9448063498", "Head Shot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/153.jpg", "Address": "#210/9, 7th main road, Byrasandra, Jayanagar, Bangalore-11" }, "4": { "Name": "Sri. N. Chandrashekar Raju", "Ward Number": "177", "Ward Name": "J.P Nagar", "Phone Number": "9880185530", "Head Shot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/177.jpg", "Address": "#20/1, 22nd 'A' Main, Marenahalli, 2nd stage, J.P Nagar, Bangalore" }, "5": { "Name": "Sri. S.N. Murugesh Modaliyaar", "Ward Number": "147", "Ward Name": "Adugodi", "Phone Number": "9844020565", "Head Shot": "http://bbmp.gov.in/images/bbmpgallery/councillorsphotos/147.jpg", "Address": "#200, 2nd C Main road, 8th Block, Koramangala, Bangalore-34" } } }'
 
// JSON.parse throws a SyntaxError when passed invalid JSON
try {
	console.log("pass");
    var data = Y.JSON.parse(jsonString);
}
catch (e) {
    alert("Invalid product data");
}
 
// We can now interact with the data

 
});