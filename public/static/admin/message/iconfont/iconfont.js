(function(window){var svgSprite='<svg><symbol id="icon-iconfontquestion" viewBox="0 0 1024 1024"><path d="M512 77C271.8 77 77 271.8 77 512c0 240.2 194.8 435 435 435 240.2 0 435-194.8 435-435C947 271.8 752.2 77 512 77L512 77zM509.2 816.4c-35.4 0-64.2-28.2-64.2-62.9s28.7-62.9 64.2-62.9c35.4 0 64.2 28.2 64.2 62.9S544.7 816.4 509.2 816.4L509.2 816.4zM681.6 460.5c-12.6 19.8-39.3 46.7-80.3 80.8-21.2 17.6-34.4 31.8-39.5 42.6-5.1 10.7-7.5 29.9-7 57.6l-91.4 0c-0.2-13.1-0.4-21.1-0.4-24 0-29.6 4.9-53.9 14.7-73 9.8-19.1 29.4-40.6 58.7-64.4 29.3-23.9 46.9-39.5 52.6-46.9 8.8-11.7 13.3-24.6 13.3-38.6 0-19.5-7.9-36.2-23.5-50.2-15.6-13.9-36.8-20.9-63.3-20.9-25.6 0-47 7.3-64.2 21.8-17.2 14.5-32 46.5-35.5 66.3-3.3 18.7-93.4 26.6-92.3-11.3 1.1-37.9 20.8-79 54.6-108.8 33.8-29.8 78.2-44.7 133.1-44.7 57.8 0 103.7 15.1 137.9 45.3 34.2 30.2 51.2 65.3 51.2 105.4C700.4 419.7 694.1 440.7 681.6 460.5L681.6 460.5z"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M947.4 864C893.2 697.7 736.2 578.9 551 575.5c-23.1-0.4-44.9 0.1-65.6 1.5v164.3c0.1 0.5 0.2 1 0.2 1.5 0 4-3.3 7.3-7.3 7.3-2.7 0-5-1.4-6.2-3.5v0.7L68.8 465.4h2.1c-4 0-7.3-3.3-7.3-7.3 0-2.9 1.7-5.4 4.1-6.6L472 169v0.7c1.3-2.1 3.6-3.5 6.2-3.5 4 0 7.3 3.3 7.3 7.3 0 0.5-0.1 1-0.2 1.5v159.4c18.5-0.9 37.9-1.2 58.3-0.8 230.1 3.9 416.7 196.9 416.7 427.1 0.1 35.5-4.5 70.2-12.9 103.3z m-462-704.4v0.2h-0.4l0.4-0.2z m0 596.9l-0.3-0.2h0.3v0.2z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)