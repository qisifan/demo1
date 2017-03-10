 var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
        var tagFont = 40 * (docEl.clientWidth / 750);
        if( tagFont > 60){
            docEl.style.fontSize =  '32px';
        }else{
            docEl.style.fontSize = 40 * (docEl.clientWidth / 750) + 'px';
        } 
    };
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);