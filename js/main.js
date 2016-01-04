/**
 * Created by Piotrek on 03/01/2016.
 */
$(document).ready(function () {
    $(document).foundation();
    moveTopBar();
    adjustTopBar();
});

/**
 * Moves top bar to top of the page when screen size is small. And vice versa.
 */
function moveTopBar() {
    var topbar = $('#movableTopBar');
    if (Foundation.utils.is_small_only()) {
        if (topbar.parent().is('div.sticky')) {
            topbar.prependTo('body');
        }
    } else {
        if (topbar.parent().is('body')) {
            topbar.prependTo('div.sticky');
        }
    }
}

/**
 * Keeps on moving topbar when screen is resized
 */
function adjustTopBar() {
    $(window).resize(function () {
        moveTopBar();
    });
}