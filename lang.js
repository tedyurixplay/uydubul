(function(){var b=document.body,s=location.hash==='#en'||(!location.hash&&!/^tr/i.test(navigator.language||'tr'));
function set(en){b.classList.toggle('lang-en',en);document.documentElement.lang=en?'en':'tr';
var a=document.querySelectorAll('.lang button');for(var i=0;i<a.length;i++)a[i].classList.toggle('on',(a[i].dataset.l==='en')===en);}
set(s);var a=document.querySelectorAll('.lang button');
for(var i=0;i<a.length;i++)a[i].onclick=function(){set(this.dataset.l==='en');};})();
