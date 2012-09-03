// Viewport Slideout
(function() {
    
    var body = document.body,
            plus = document.querySelectorAll('#page .plus')[0],
            closeMask = document.getElementById('close-mask'),
            pageTop = document.getElementById('page'),
            menuView = document.getElementById('menu');

    plus.addEventListener('click', function() {
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

    setTimeout(function() { window.scrollTo(0, 0); }, 100);

    function showMenu() {
        // window.scrollTo(0, 0);
        body.setAttribute('class', 'menu-open');
        closeMask.style.display = 'block';
        menuView.style.display = 'block';
        pageTop.style.width = window.innerWidth - 40 + "px";
        closeMask.style.width = window.innerWidth + "px";
        closeMask.style.height = window.outerHeight + "px";
        menuView.style.height = window.outerHeight + "px";
    }

    function hideMenu() {
        window.scrollTo(0, 0);
        body.removeAttribute('class');
        closeMask.style.display = 'none';
        closeMask.removeAttribute('style', 'width');
        closeMask.removeAttribute('style', 'height');
        pageTop.removeAttribute('style', 'width');
        //menuView.style.display = 'none';
    }

    function hasClass(el, selector) {
          var className = " " + selector + " ";             
        return (el.nodeType === 1 && (" " + el.className + " ").replace(/[\n\t\r]/g, " ").indexOf(className) > -1);
    }
    
})();