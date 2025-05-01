var timeout;
var m_touchdevice;

function isTouchDevice() {
    var msTouchEnabled = window.navigator.msMaxTouchPoints;
    var generalTouchEnabled = "ontouchstart" in document.createElement("div");
 
    if (msTouchEnabled || generalTouchEnabled) {
        return true;
    }
    return false;
}

function screenwidth()
{ 
	var w = window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;
	return w;
}

function screenheight()
{
	var h = window.innerHeight ||
	document.documentElement.clientHeight ||
	document.body.clientHeight;
	return h;
}

function general()
{
	m_touchdevice = isTouchDevice();
	if(m_touchdevice)
		timeout = 5000;
	else
		timeout = 300;
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function GetMap(gridref)
{
	setTimeout(function(){document.location.href = "../../php/getmap2.php?" + gridref;},500);
	hidepic;
}

function GoBack()
{
	window.history.back();
}
   
