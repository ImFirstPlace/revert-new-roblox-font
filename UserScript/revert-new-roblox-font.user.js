// ==UserScript==
// @name         Revert New Roblox Font
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Reverts the new Roblox 'Builder Sans' to the old 'HCo Gotham SSm' font
// @author       ImFirstPlace
// @match        *://www.roblox.com/*
// @match        *://web.roblox.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=roblox.com
// @grant        GM_addStyle
// @run-at       document-start
// @downloadURL https://github.com/ImFirstPlace/revert-new-roblox-font/raw/main/UserScript/revert-new-roblox-font.user.js
// @updateURL https://github.com/ImFirstPlace/revert-new-roblox-font/raw/main/UserScript/revert-new-roblox-font.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('* { font-family: HCo Gotham SSm,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif !important }')
})();