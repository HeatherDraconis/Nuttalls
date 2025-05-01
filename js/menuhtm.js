var menutext = "<li id=\x27MI1\x27><a href=\x27http://www.nuttalls.com/index.shtml\x27>Home</a></li>" + 
"<li><a href=\x27#\x27 " + 
"onmouseover=\x27mopen(\x22m1\x22)\x27 " + 
"onclick=\x27mopen(\x22m1\x22)\x27 " + 
"onmouseout=\x27mclosetime()\x27>Mountains</a>" + 
"<div id=\x27m1\x27 " + 
"onmouseover=\x27mcancelclosetime()\x27 " + 
"onmouseup=\x27mclose()\x27" + 
"onmouseout=\x27mclosetime()\x27>" + 
"<a href=\x27http://www.nuttalls.com/mountains/england.htm\x27>England</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/wales.htm\x27>Wales</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/completers.shtml\x27>Completers</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/records.htm\x27>Records</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/lakeland.htm\x27>Lakeland</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/tarns.htm\x27>Tarns</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/not_wainwrights.htm\x27>Not A.W.</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/2000.htm\x27>Changes</a>" + 
"<a href=\x27http://www.nuttalls.com/mountains/access.htm\x27>Access</a>" + 
"</div>" + 
"</li>" + 
"<li id=\x27MI5\x27><a href=\x27#\x27 " + 
"onmouseover=\x27mopen(\x22m3\x22)\x27 " + 
"onclick=\x27mopen(\x22m3\x22)\x27 " + 
"onmouseout=\x27mclosetime()\x27>News</a>" + 
"<div id=\x27m3\x27 " + 
"onmouseover=\x27mcancelclosetime()\x27 " + 
"onmouseup=\x27mclose()\x27" + 
"onmouseout=\x27mclosetime()\x27>" + 
"<a href=\x27http://www.nuttalls.com/news/news.htm\x27>News</a>" + 
"<a href=\x27http://www.nuttalls.com/events/events.htm\x27>Events</a>" + 
"<a href=\x27http://www.nuttalls.com/general/weather.htm\x27>Weather</a>" + 
"<a href=\x27http://www.nuttalls.com/general/organisations.htm\x27>Links</a>" + 
"<a href=\x27http://www.nuttalls.com/general/holidays.htm\x27>Holidays</a>" + 
"</div>" + 
"</li>" + 
"<li id=\x27MI3\x27><a href=\x27#\x27 " + 
"onmouseover=\x27mopen(\x22m4\x22)\x27 " + 
"onclick=\x27mopen(\x22m4\x22)\x27 " + 
"onmouseout=\x27mclosetime()\x27>Books</a>" + 
"<div id=\x27m4\x27 " + 
"onmouseover=\x27mcancelclosetime()\x27 " + 
"onmouseup=\x27mclose()\x27" + 
"onmouseout=\x27mclosetime()\x27>" + 
"<a href=\x27http://www.nuttalls.com/general/books.htm\x27>Books</a>" + 
"<a href=\x27http://www.nuttalls.com/photolib/photolib.htm\x27>Photos</a>" + 
"<a href=\x27http://www.nuttalls.com/articles/articles.htm\x27>Articles</a>" +
"<a href=\x27http://www.nuttalls.com/general/more.htm\x27>Authors</a>" + 
"<a href=\x27http://www.nuttalls.com/orders/orderform.htm\x27>CDs</a>" + 
"<a href=\x27http://www.nuttalls.com/email.htm\x27>e-mail</a>" + 
"<a href=\x27http://www.nuttalls.com/support/support_request.htm\x27>Support</a>" + 
"</div>" + 
"</li>" + 
"<li id=\x27MI4\x27><a href=\x27#\x27 " + 
"onmouseover=\x27mopen(\x22m5\x22)\x27 " + 
"onclick=\x27mopen(\x22m5\x22)\x27 " + 
"onmouseout=\x27mclosetime()\x27>Walks etc</a>" + 
"<div id=\x27m5\x27 " + 
"onmouseover=\x27mcancelclosetime()\x27 " + 
"onmouseup=\x27mclose()\x27" + 
"onmouseout=\x27mclosetime()\x27>" + 
"<a href=\x27http://www.nuttalls.com/walks/walks.htm\x27>Walks</a>" + 
"<a href=\x27http://www.nuttalls.com/general/books.htm\x27>Books</a>" + 
"<a href=\x27http://www.nuttalls.com/photolib/photolib.htm\x27>Photos</a>" + 
"<a href=\x27http://www.nuttalls.com/articles/articles.htm\x27>Articles</a>" +
"<a href=\x27http://www.nuttalls.com/general/more.htm\x27>Authors</a>" + 
"<a href=\x27http://www.nuttalls.com/email.htm\x27>e-mail</a>" + 
"<a href=\x27http://www.nuttalls.com/support.htm\x27>Support</a>" + 
"<a href=\x27http://www.nuttalls.com/index.shtml\x27>Home</a>" + 
"</div>" + 
"</li>" + 
"<li id=\x27MI2\x27><a href=\x27http://www.nuttalls.com/walks/walks.htm\x27>Walks</a></li>";

function createmenu()
{
document.getElementById("mainmenu").innerHTML=menutext;
}
