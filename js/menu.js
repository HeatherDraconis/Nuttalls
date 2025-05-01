function layoutmenu()
	{
	var scrwidth = screenwidth();
	var scrheight = screenheight();
	if(scrwidth < 530)
		setmenu("small");
	else
		setmenu("big");
	
	var mainmenu = document.getElementById("mainmenu");
	if(mainmenu)
		{
		if(isTouchDevice())
			mainmenu.className = "menutouch";
		else
			mainmenu.className = "menutouch";
		}
	var backdrop = document.getElementById("backdrop");
	if(scrwidth < 1024)
		{
		backdrop.style.width = scrwidth + "px";
		}
	else
		{
		backdrop.style.width = "1024px";
		}
	}

function layoutsortmenu()
	{
	var sortmenu = document.getElementById("sortmenu");
	var scrwidth = screenwidth();
	if(sortmenu)
		{
		if(scrwidth < 530)
			sortmenu.className = "menusmalltouch";
		else
			sortmenu.className = "menutouch";
		}
	}

function setmenu(size)
	{
	if(size=="small")
			{
			document.getElementById("nav").style.width = "320px";	
			document.getElementById("MI1").style.display = "none";	
			document.getElementById("MI2").style.display = "none";
			document.getElementById("MI3").style.display = "none";	
			document.getElementById("MI4").style.display = "block";
			}
	else
			{
			document.getElementById("nav").style.width = "530px";	
			document.getElementById("MI1").style.display = "block";	
			document.getElementById("MI2").style.display = "block";
			document.getElementById("MI3").style.display = "block";	
			document.getElementById("MI4").style.display = "none";
			}
	}
var ddsubmenuitem;
var closetimer;
	
// open hidden menu
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();
	if(ddsubmenuitem)
		{
		// close previous submenu
		ddsubmenuitem.style.visibility = 'hidden';
		ddsubmenuitem = 0;
		}
	
	// show submenu
	{
		ddsubmenuitem = document.getElementById(id);
		ddsubmenuitem.style.visibility = 'visible';
		if(m_touchdevice)
			closetimer = window.setTimeout(mclose, timeout);

	}
}

//close submenu
function mclose()
{
	mcancelclosetime();
	if(ddsubmenuitem)
		{
		// close submenu
		ddsubmenuitem.style.visibility = 'hidden';
		ddsubmenuitem = 0;
		}
}

// start close timer
function mclosetime()
{
	mcancelclosetime;
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

		
