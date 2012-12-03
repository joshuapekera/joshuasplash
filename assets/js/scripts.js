/*
  * Viewport Slideout
  * (c) Joshua Pekera, joshuapekera.com
  * MIT License
*/
(function( win ){
	var doc = win.document;
	
	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
		
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 15 );
		
		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );

(function() {
    
	var body = document.body;
	var trigger = document.querySelectorAll('#page .plus')[0];
	var closeMask = document.getElementById('close-mask');
	var pageView = document.getElementById('page');
	var menuView = document.getElementById('menu');

	trigger.addEventListener('click', function() {
		if (hasClass(body, 'menu-open')) {
			hideMenu();
		} else {
			showMenu();
		}
	});

	closeMask.addEventListener('click', function(e) {
		e.preventDefault();
		hideMenu();
	});
    
	function doOnOrientationChange() {
		switch(window.orientation) {
			case -90:
			case 90:
			result = 1;
			break;
			default:
			result = 0;
			break;
			}
		if (hasClass(body, 'menu-open')) {
			showMenu();
		}
	}
	window.onorientationchange = function() {
		doOnOrientationChange();
	};
	setTimeout(function() { window.scrollTo(0, 0); }, 100);
	
	function getDocumentHeight() {
	return Math.max(
		Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
		Math.max(document.body.offsetHeight, document.documentElement.offsetHeight),
		Math.max(document.body.clientHeight, document.documentElement.clientHeight)
	);
    }
    
	function getDocumentWidth() {
	return Math.max(
		Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
		Math.max(document.body.offsetWidth, document.documentElement.offsetWidth),
		Math.max(document.body.clientWidth, document.documentElement.clientWidth)
	);
	}
		
    function showMenu() {
        // window.scrollTo(0, 0);
        body.setAttribute('class', 'menu-open');
        closeMask.style.display = 'block';
        menuView.style.display = 'block';
        pageView.style.width = getDocumentWidth() - 20 + "px";
        closeMask.style.width = getDocumentWidth() + "px";
        closeMask.style.height = getDocumentHeight() + "px";
        menuView.style.height = getDocumentHeight() + "px";
    }

    function hideMenu() {
        window.scrollTo(0, 0);
        body.removeAttribute('class');
        closeMask.style.display = 'none';
        closeMask.removeAttribute('style', 'width');
        closeMask.removeAttribute('style', 'height');
        pageView.removeAttribute('style', 'width');
        setTimeout(function() { menuView.style.display = "none"; }, 290);
    }

    function hasClass(el, selector) {
        var className = " " + selector + " ";
        return (el.nodeType === 1 && (" " + el.className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) > -1);
    }
})();
function dummy() {
    return this.name_;
}
var body = document.body;
//var link = body.querySelector('active');
var link = body.getElementsByTagName('a','li');
for(var i = 0; i < link.length; i++){
	link[i].addEventListener('touchstart', function() {
		link.onmouseover.call(link);
	}, false);
	link[i].addEventListener('touchend', function() {
		link.onmouseout.call(link);
	}, false);
}