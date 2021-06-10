"use strict";var Wedding=Wedding||{};Wedding.UIComponents=function(e){var t=$.extend({tabletBreakpoint:1199,mobileBreakpoint:767,tablet:!1,mobile:!1},e||{});$(window).width()<=t.tabletBreakpoint&&$(window).width()>t.mobileBreakpoint&&(t.tablet=!0),$(window).width()<=t.mobileBreakpoint&&(t.mobile=!0),$.fn.textLimiter=function(e){var t=$.extend({selector:this,textLength:100},e||{}),s=$(t.selector).html();return(s=s.trim()).length>t.textLength&&$(t.selector).html(s.substring(0,e.textLength)+"..."),this},$.fn.smartResize=function(e){return e?this.bind("resize",m(e)):this.trigger(smartResize)},$.fn.smartScroll=function(e){return e?this.bind("scroll touchmove",m(e)):this.trigger(smartScroll)},this.init=function(){u(),c(),r(),n(),l(),d(),o(),i(),a(),s(),f()};var s=function(){if($(".guest").length){var n=function(e,t){if(e){var s=t||"There is something wrong, please try again";$(".message").removeClass("success").addClass("error").text(s).show("fade")}else{var a="1"===t[3]?"will":"will not",i="Congrats, You've been registered.<br/>Your name is "+t[0]+",<br/>your affiliation with bride & groom is from "+t[1]+",<br/>your relation with bride & groom is "+t[2]+",<br/>and you "+a+" bring your plus one / friend";$(".message").removeClass("error").addClass("success").html(i).show("fade")}},r=$(".guest #name"),c=$(".guest #affiliation"),d=$(".guest #relation");$(".guest").on("click",".submit",function(e){if(e.preventDefault(),0<r.val().length&&0<c.val().length&&0<d.val().length){var t=r.val(),s=c.val(),a=d.val(),i=$("#plus")[0].checked?"1":"0",o="https://script.google.com/macros/s/AKfycbwWKLLFBQH8DDmMgnTQqreC6YtM_SqbE1zsSxUa4MHpTZS8gzI/exec?callback=ctrlq&name="+t+"&affiliation="+s+"&relation="+a+"&plusone="+i,l=[t,s,a,i];$.get(o).done(function(e){"Name Already Exist"===e.result?n(!0,"Name Already Exist"):n(!1,l)}).fail(function(){n(!0,"")})}else{$(".message").removeClass("success").addClass("error").text("You have to fill name field, select relation, affiliation").show("fade")}})}},a=function(){"serviceWorker"in navigator&&$(window).load(function(){navigator.serviceWorker.register("/wedding/sw.js")})},i=function(){function i(){$.get(e,function(e){return e}).always(function(s){if(0<s.user.length)for(var e=function(t){$(".wishlist .item").each(function(e){$(this).hasClass("granted")||$(this).find(".title h2").attr("data-barang")!=s.user[t].barang||$(this).addClass("granted").append('<div class="granted-by"></div>').find(".links a").text("Our Wish Has Been Granted").addClass("show")})},t=0;t<s.user.length;t++)e(t)})}var o="https://script.google.com/macros/s/AKfycbwWKLLFBQH8DDmMgnTQqreC6YtM_SqbE1zsSxUa4MHpTZS8gzI/exec",e=o+"?callback=crtlq&action=get";i(),$(".wishlist").on("click",".item a",function(e){e.preventDefault();var t=$(this).closest(".item").find(".title h2").attr("data-barang"),s=$(this).siblings(".granted-name").val(),a=o+"?callback=ctrq&action=grant&barang="+t+"&IG="+s;$.get(a).always(function(e){"Grant wishlist successful"===e.result?i():$(".wishlist-message").removeClass("success").addClass("error").text("There is something wrong, please try again").show("fade").delay(5e3).hide("fade")})}),$(".wishlist").on("click",".item a",function(e){e.preventDefault();var t=$(this).closest(".item").find(".title h2").attr("data-barang"),s=$(this).siblings(".granted-name").val(),a=o+"?callback=ctrq&action=grant&barang="+t+"&IG="+s;$.get(a)})};this.reInitFunction=function(){$(".masonry").masonry("destroy"),$(".masonry").masonry({itemSelector:".card-wrap",columWidth:".card-sizer",percentPosition:!0,gutter:".gutter-sizer",transitionDuration:"0.8s",horizontalOrder:!0}).masonry("layout"),f()};var o=function(){if($("audio").length){if($(window).width()<=767)return $("audio,.sound-toggle").remove(),!1;var e=!0;$(".sound-toggle").on("click",function(){e?($("audio")[0].pause(),e=!1,$(".sound-toggle").addClass("disable")):($("audio")[0].play(),e=!0,$(".sound-toggle").removeClass("disable"))})}},l=function(){$(window).width();var l=$(window).height();$("section").hasClass("parallax")&&$(".parallax").each(function(e,t){var s,a;s=t,a=$(s).attr("data-image"),$(s).attr("style","background-image:url("+a+");")}),$(window).on("scroll touchmove",function(){$("section").hasClass("parallax")&&$(".parallax").each(function(e,t){var s,a,i,o;a=s=t,i=$(window).scrollTop(),(o=$(s).position().top)-l<i&&$(a).css({"background-position":"center "+((i-o)/2-l/5)+"px"})})})},n=function(){$("header").length&&40<$(document).scrollTop()&&$("header").addClass("minimize")},r=function(){var e='font-size: 25px;font-family: "Raleway", sans-serif;color: #ababab;text-transform: uppercase';$(".counter-init").ClassyCountdown({theme:"flat-colors",end:$.now()+10,now:$.now(),labels:!0,labelsOptions:{lang:{days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},style:'font-size: 20px;font-family: "Playfair Display", sans-serif;color: #ababab'},style:{element:"",labels:!1,days:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e},hours:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e},minutes:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e},seconds:{gauge:{thickness:.2,bgColor:"rgba( 244,244,244,1)",fgColor:"#F1A9A0"},textCSS:e}},onEndCallback:function(){}})},c=function(){$(".home").length&&(t.tablet&&t.mobile?$(".home .slider-component").hasClass("slick-initialized")&&$(".home .slider-component").slick("unslick"):!$(".home .slider-component").hasClass("slick-initialized")&&$(".home .slider-component").slick({dots:!1,infinite:!0,lazyLoad:"ondemand",arrows:!1,speed:1e3,fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3}))},d=function(){$(window).smartScroll(function(){g()})},g=function(){t.tablet||$("header, .to-top, main").toggleClass("minimize",40<$(document).scrollTop()),t.tablet||t.mobile?$(".to-top").hide():$(".to-top").removeAttr("style")},u=function(){0!==$(".to-top").length&&$(".to-top").smoothScroll({offset:-300,speed:500,easing:"swing"}),0!==$(".nav-menu").length&&$(".nav-menu li a").smoothScroll({offset:-66,speed:300,easing:"swing"})},f=function(){0!==$("select").length&&$("select").niceSelect()},m=function(s,a,i){var o=void 0;return function(){var e=this,t=arguments;o?clearTimeout(o):i&&s.apply(e,t),o=setTimeout(function(){i||s.apply(e,t),o=null},a||150)}}},Wedding.MapInteraction=function(e){$.extend({MapKey:"AIzaSyDqG408wlPZ832I5zRMmBZoJKTMqIJZ0fQ"},e||{});this.init=function(){t()};var t=function(){function e(e){this.setValues(e)}e.prototype=new google.maps.OverlayView,e.prototype.draw=function(){var t=this,e=this.div,s=this.title.split(" ").join("");e||(e=this.div=$('<div class="'+s+'"><div class="shadow"></div><div class="pulse"></div><div class="pin-wrap"><div class="pin"></div><div class="pin-label">'+this.title+"</div></div></div>")[0],this.pinLabel=this.div.getElementsByClassName("pin-label"),this.pinWrap=this.div.getElementsByClassName("pin-wrap"),this.pin=this.div.getElementsByClassName("pin"),this.pinShadow=this.div.getElementsByClassName("shadow"),e.style.position="absolute",e.style.cursor="pointer",this.getPanes().overlayImage.appendChild(e),this.pinLabel.innerHTML=this.title,google.maps.event.addDomListener(e,"click",function(e){google.maps.event.trigger(t,"click",e)}));var a=this.getProjection().fromLatLngToDivPixel(this.position);a&&(e.style.left=a.x+"px",e.style.top=a.y+"px")};var t=$(window).width()<=767?14:15,s=new google.maps.Map(document.getElementById("map"),{center:{lat:-6.2968075,lng:106.8855319},zoom:t,clickableIcons:!1,mapTypeControl:!1,styles:[{elementType:"geometry",stylers:[{color:"#e7eaf5"}]},{elementType:"labels.icon",stylers:[{visibility:"on"},{saturation:"-100"},{lightness:"41"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#dbdee9"},{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#d4d7e2"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#dbdee9 "}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c2c5d0"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]});new e({position:new google.maps.LatLng(-6.2968075,106.8855319),map:s,title:"Gedung Pewayangan Kautaman"})}};
