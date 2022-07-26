'use strict';


// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}


const GoogleMaps = function(el, coords) {
    const gm = window.google && window.google.maps;

    if (!gm) return;
    
    const map = new gm.Map(el);
    const bounds = new gm.LatLngBounds();
    const infoWindow = new gm.InfoWindow();
    
    for (let coord in coords) {
        placeMarker(coords[coord]);
    }
    
    map.fitBounds(bounds);
    
    const idleListener = gm.event.addListener(map, 'idle', function() {
        if (map.getZoom() > 14) map.setZoom(14);
        gm.event.removeListener(idleListener);
    });
    
    
    if (infoWindow) {
        gm.event.addListener(map, 'click', function() {
            infoWindow.close();
        });
    }

    
    function placeMarker(loc) {
        const marker = new gm.Marker({
            map: map,
            position: {
                lat: Number(loc.latitude),
                lng: Number(loc.longitude),
            },
        });
        
        if (infoWindow) {
            gm.event.addListener(marker, 'click', function() {
                infoWindow.close(); 
                infoWindow.setContent(infoWindowTemplate(loc));
                infoWindow.open(map, marker);
            });
        }

        bounds.extend(marker.position);
    }
    
    
    function infoWindowTemplate(data) {
        const text = data.location_name;
        const link = data.location_link;
        
        const content = link 
            ? '<a href="'+ link +'">' + text + '</a>' 
            : text;
        
        return '<div class="google-map-infowindow-content">' + content + '</div>';
    }
};










var purecookieTitle="Cookies.",purecookieDesc="Diese Website verwendet keine Cookies, um die Nutzerfreundlichkeit zu verbessern. Durch die weitere Nutzung der Website stimmen Sie dem zu. Weitere Informationen finden Sie in der Datenschutzerklärung.",
purecookieLink='<a href="datenschutz.html" target="_blank">Datenschutzerklärung</a>',
purecookieButton="Ok";
function pureFadeIn(e,o){
var i=document.getElementById(e);
i.style.opacity=0,i.style.display=o||"block",
function e(){var o=parseFloat(i.style.opacity);(o+=.02)>1||(i.style.opacity=o,requestAnimationFrame(e))}()}function pureFadeOut(e){
var o=document.getElementById(e);o.style.opacity=1,function e(){
(o.style.opacity-=.02)<0?o.style.display="none":requestAnimationFrame(e)}()
}function setCookie(e,o,i){var t="";if(i){
var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),t="; expires="+n.toUTCString()}
document.cookie=e+"="+(o||"")+t+"; path=/"}
function getCookie(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){
for(var n=i[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(o))return n.substring(o.length,n.length)}
return null}function eraseCookie(e){document.cookie=e+"=; Max-Age=-99999999;"}
function cookieConsent(){
getCookie("purecookieDismiss")||(document.body.innerHTML+='<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>'+purecookieTitle+'</a></div><div class="cookieDesc"><p>'+purecookieDesc+" "+purecookieLink+'</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'+purecookieButton+"</a></div></div>",pureFadeIn("cookieConsentContainer"))}
function purecookieDismiss(){setCookie("purecookieDismiss","1",7),pureFadeOut("cookieConsentContainer")}
window.onload=function(){cookieConsent()};