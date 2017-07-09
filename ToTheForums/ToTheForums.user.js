// ==UserScript==
// @name         ToTheForum
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This US takes the user to the forums on a click of a button
// @author       You
// @match        http*://scratch.mit.edu/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://matthias-vogt.github.io/legitRipple.js/js/ripple.js
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var fab = {
        html: "<a href=\"/discuss\" class=\"_FAB1_\"><img src=\"https://scratchuserscripts.github.io/scripts/ToTheForums/forum.png?v=0.1\" /></a>"
    };
    $('body').append(fab.html);
    $('head').append("<link href=\"https://matthias-vogt.github.io/legitRipple.js/css/ripple.css\" type=\"text/css\" rel=\"stylesheet\">");
    $('._FAB1_').css({
        'position':'fixed',
        'bottom':'10px',
        'right':'10px',
        'width':'60px',
        'height':'60px',
        'background-color':'#0075F2',
        'border':'0',
        'border-radius':'100%',
        'padding':'0',
        'outline':'none'
    });
    $('._FAB1_').ripple();
})();
