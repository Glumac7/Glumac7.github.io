function main_page()
{
	document.querySelector('nav').style.display = "flex";
	document.querySelector('main').style.display = "block";
	document.querySelector('#loader').style.display = "none";
}

/*MOBILE BURGER ICON!*/
function burger_icon()
{
	var burger = document.querySelector('.burger-container');

	if (burger.classList) burger.classList.toggle("open");
	else 
	{
	    var classes = burger.className.split(" ");
	    var i = classes.indexOf("open");

		if (i >= 0) 
			classes.splice(i, 1);
	        
		else 
			classes.push("open");
	}
}

/*HEADER SCROLL EFECT!*/
window.addEventListener("scroll", function()
{
	if(document.body.offsetWidth >= 991)
	{
		var scrollTop = window.pageYOffset || document.body.scrollTop;
		var logo = document.querySelector('.navbar-brand');
		var nav = document.querySelector('#nav');
		var links = document.getElementById('nav-ul').children;

		if(scrollTop)
		{
			nav.style.backgroundColor = "rgba(255, 255, 255, .95)";
			logo.style.fontSize = "30px";
			logo.style.color = "#0090e0";
		    
		    for (let i = 0; i < links.length; i++) 
		    {
		    	var a_tags;
		        a_tags = links[i].children;
		        a_tags[0].style.color = "#606060";
		    }
		}
		else
		{
			nav.style.backgroundColor = "rgba(0,0,0,0)";
			logo.style.fontSize = "40px";
			logo.style.color = "#eee";
			
		    for (let i = 0; i < links.length; i++) 
		    {
		    	var a_tags;
		        a_tags = links[i].children;
		        a_tags[0].style.color = "#eee";
		    }
		}
	}

}, false);
