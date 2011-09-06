<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>index</title>
    <meta name="generator" content="TextMate http://macromates.com/">
    <meta name="author" content="Dhruva Krishnan">
    <link rel="stylesheet" href="http://yui.yahooapis.com/3.3.0/build/cssgrids/grids.css" type="text/css">
    <link rel="stylesheet" href="styles.css" type="text/css">
    <script src="http://yui.yahooapis.com/3.3.0/build/yui/yui-min.js"></script>
</head>
<body>
<div id="maincontainer">

<div id="topsection"><div style="font-family: 'Artifika', serif; font: 2em; #d84040;
"><h1>Pothole and Corporator Info</h1></div></div>

<div id="contentwrapper">
<div id="contentcolumn">
<?php
    echo '<img src='.$_GET["photo"].' />'; 
?>
</div>
</div>

<div id="leftcolumn">
<div class="holeDesc">
<?php
echo "<img src=".$_GET['corpphoto']." height=100 width=100/><br/>";
echo "".$_GET['name']."<br/>";
echo "Ward Number: ".$_GET['ward_num']."<br/>";
echo "Ward Name: ".$_GET['ward_name']."<br/>";
echo "Phone Number: ".$_GET['phone_num']."<br/>";
?>
</div>
</div>


</div>
</body>
</html>