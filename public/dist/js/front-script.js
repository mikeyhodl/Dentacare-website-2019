var initAddressSuggesters,checkAddress,setupMap,mapsLoaded=!0,mapsWaiting=[],prepareMapFunction=function(e){mapsLoaded?e():mapsWaiting.push(e)};$(document).ready(function(e){setupMap=function(e,t){if(e.find(".suggester-map-div").show(),e.find(".suggester-map-div").attr("inited"))e.find(".suggester-map-div").data("map").panTo(t),e.find(".suggester-map-div").data("marker").setPosition(t);else{var i=new google.maps.Map(e.find(".suggester-map-div")[0],{center:t,zoom:14,backgroundColor:"none"}),o=new google.maps.Marker({map:i,icon:"/assets/images/map-pin-inactive.png",draggable:!0,position:t});o.addListener("dragend",function(t){this.map.panTo(this.getPosition()),(new google.maps.Geocoder).geocode({location:this.getPosition()},function(e,t){if("OK"==t){var i=e[0].formatted_address,o=this.find(".country-select option:selected").text();i=i.replace(", "+o,""),this.find(".address-suggester").val(i).blur()}else checkAddress(null,this)}.bind(e))}),e.find(".suggester-map-div").attr("inited",1),e.find(".suggester-map-div").data("map",i),e.find(".suggester-map-div").data("marker",o)}},initAddressSuggesters=function(){prepareMapFunction(function(){e(".address-suggester").each(function(){if(e(this).hasClass("dont-init"))return!1;var t=e(this).closest(".address-suggester-wrapper");if(t.find(".country-select").change(function(){var t=e(this).find("option:selected").val();s.setComponentRestrictions({country:t})}),t.find(".suggester-map-div").attr("lat")){var i={lat:parseFloat(t.find(".suggester-map-div").attr("lat")),lng:parseFloat(t.find(".suggester-map-div").attr("lon"))};setupMap(t,i)}var o=e(this)[0],n={componentRestrictions:{country:t.find(".country-select option:selected").val()},types:["address"]},s=new google.maps.places.Autocomplete(o,n);s.suggester_container=t,google.maps.event.addListener(s,"place_changed",function(){var e=this.getPlace();this.suggester_container.find(".address-suggester").val(e.formatted_address?e.formatted_address:e.name).blur()}.bind(s)),e(this).blur(function(t){var i=e(this).closest(".address-suggester-wrapper"),o=(i.find(".country-select option:selected").text(),i.find(".country-select option:selected").val()),n=new google.maps.Geocoder,s=e(this).val();n.geocode({address:s,region:o},function(e,t){checkAddress("OK"==t?e[0]:null,this)}.bind(i))})})}),e(".address-suggester").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1})},checkAddress=function(e,t){if(t.find(".geoip-hint").hide(),t.find(".geoip-confirmation").hide(),t.find(".suggester-map-div").hide(),e&&e.geometry){var i=t.find(".address-suggester").val(),o=t.find(".country-select option:selected").text();i=i.replace(", "+o,""),t.find(".address-suggester").val(i);var n={lat:e.geometry.location.lat(),lng:e.geometry.location.lng()};return setupMap(t,n),void t.find(".geoip-confirmation").show()}t.find(".geoip-hint").show()},e(".address-suggester").length&&initAddressSuggesters()}),console.log("Don't touch the code. Or do ... ¯\\_(ツ)_/¯"),checkIfCookie(),$(document).ready(function(){}),$(window).on("load",function(){}),$(window).on("load",function(){}),$(window).on("resize",function(){}),$(window).on("scroll",function(){});var mobile_os={Android:function(){return navigator.userAgent.match(/Android/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)}};function checkIfCookie(){$(".privacy-policy-cookie").length>0&&($(".privacy-policy-cookie .accept-all").click(function(){basic.cookies.set("performance_cookies",1),basic.cookies.set("functionality_cookies",1),basic.cookies.set("marketing_cookies",1),basic.cookies.set("strictly_necessary_policy",1),window.location.reload()}),$(".adjust-cookies").click(function(){$(".customize-cookies").remove(),$(".privacy-policy-cookie").append('<div class="customize-cookies"><button class="close-customize-cookies close-customize-cookies-popup">×</button><div class="text-center"><img src="/assets/images/cookie-icon.svg" alt="Cookie icon" class="cookie-icon"/></div><div class="text-center padding-top-10 padding-bottom-20 fs-20">Select cookies to accept:</div><div class="cookies-options-list"><ul><li><div class="pretty p-svg p-curve"><input checked disabled type="checkbox" id="strictly-necessary-cookies"/><div class="state p-success"><svg class="svg svg-icon" viewBox="0 0 20 20"><path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path></svg><label for="strictly-necessary-cookies"><span>Strictly necessary</span> <i class="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" title="Cookies essential to navigate around the website and use its features. Without them, you wouldn’t be able to use basic services like signup or login."></i></label></div></div></li><li><div class="pretty p-svg p-curve"><input checked type="checkbox" id="functionality-cookies"/><div class="state p-success"><svg class="svg svg-icon" viewBox="0 0 20 20"><path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path></svg><label for="functionality-cookies">Functionality cookies <i class="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" title="These cookies allow users to customise how a website looks for them; they can remember usernames, preferences, etc."></i></label></div></div></li></ul><ul><li><div class="pretty p-svg p-curve"><input checked type="checkbox" id="performance-cookies"/><div class="state p-success"><svg class="svg svg-icon" viewBox="0 0 20 20"><path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path></svg><label for="performance-cookies">Performance cookies <i class="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" title="These cookies collect data for statistical purposes on how visitors use a website, they don’t contain personal data and are used to improve user experience."></i></label></div></div></li><li><div class="pretty p-svg p-curve"><input checked type="checkbox" id="marketing-cookies"/><div class="state p-success"><svg class="svg svg-icon" viewBox="0 0 20 20"><path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path></svg><label for="marketing-cookies">Marketing cookies <i class="fa fa-info-circle" aria-hidden="true" data-toggle="tooltip" title="Marketing cookies are used e.g. to deliver advertisements more relevant to you or limit the number of times you see an advertisement."></i></label></div></div></li></ul></div><div class="text-center actions"><a href="javascript:void(0);" class="light-blue-white-btn margin-right-10 close-customize-cookies-popup">CANCEL</a><a href="javascript:void(0);" class="white-light-blue-btn custom-cookie-save">SAVE</a></div><div class="custom-triangle"></div></div>'),initTooltips(),$(".close-customize-cookies-popup").click(function(){$(".customize-cookies").remove()}),$(".custom-cookie-save").click(function(){basic.cookies.set("strictly_necessary_policy",1),$("#functionality-cookies").is(":checked")&&basic.cookies.set("functionality_cookies",1),$("#marketing-cookies").is(":checked")&&basic.cookies.set("marketing_cookies",1),$("#performance-cookies").is(":checked")&&basic.cookies.set("performance_cookies",1),window.location.reload()})}))}function initTooltips(){$('[data-toggle="tooltip"]')&&$('[data-toggle="tooltip"]').tooltip()}function initCaptchaRefreshEvent(){$(".refresh-captcha").length>0&&$(".refresh-captcha").click(function(){$.ajax({type:"GET",url:"/refresh-captcha",dataType:"json",success:function(e){$(".captcha-container span").html(e.captcha)}})})}function successfulUserLogin(e){$(".response-layer").hide(),basic.closeDialog(),e.success?e.upgradeable_content?($(".upgradeable-html").html(e.upgradeable_content),$("form#dentacare-withdraw").on("submit",function(t){t.preventDefault();var i=$(this);i.find(".error-handle").remove();var o=i.find(".form-field"),n=!0;"true"==i.attr("data-stoppage")&&(customErrorHandle(i,"You don't have any DCN balance at the moment."),n=!1);for(var s=0,a=o.length;s<a;s+=1)""==o.eq(s).val().trim()?(customErrorHandle(o.eq(s).closest(".field-parent"),"This field is required."),n=!1):"dentacare-address"==o.eq(s).attr("name")&&42!=o.eq(s).val().trim().length&&(customErrorHandle(o.eq(s).closest(".field-parent"),"Please use valid Wallet Address."),n=!1);n&&($(".response-layer").show(),setTimeout(function(){fireGoogleAnalyticsEvent("Withdraw","Collect","Rewards",e.amount),$.ajax({type:"POST",url:"/submit-withdraw-dentacare-dcn",dataType:"json",data:{token:e.token,amount:e.amount,address:i.find('input[name="dentacare-address"]').val().trim()},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){$(".response-layer").hide(),basic.closeDialog(),e.success?(i.find('input[name="dentacare-address"]').val(""),basic.showAlert(e.success,"",!0)):e.error&&basic.showAlert(e.error,"",!0)}})},1e3))})):basic.showAlert(e.success,"",!0):e.error&&basic.showAlert(e.error,"",!0)}if(mobile_os.iOS()?$(".android-btn").remove():mobile_os.Android()&&$(".ios-btn").remove(),initCaptchaRefreshEvent(),$("body").hasClass("home")?($(".moving-phones-container").length&&($("body").addClass("overflow-hidden"),$(window).width()>768&&setTimeout(function(){$(".moving-phones-container").animate({left:"0"},1500,null,function(){$(".first-phone").addClass("right-rotation"),$(".second-phone").addClass("right-rotation"),$(".third-phone").addClass("left-rotation"),$(".moving-phones-container").addClass("move-back-top")})},1e3),$("body").removeClass("overflow-hidden")),$(".testimonials-slider").length>0&&$(".testimonials-slider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:8e3,adaptiveHeight:!0}),$(".oral-care-journey-slider .init-slider").length>0&&$(".oral-care-journey-slider .init-slider").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:1}}]})):$("body").hasClass("forgotten-password")?$("form#forgotten-password").on("submit",function(e){var t=$(this);""!=t.find('input[type="email"]').val().trim()&&basic.validateEmail(t.find('input[type="email"]').val().trim())||(basic.showAlert("Please try again with valid email.","",!0),e.preventDefault())}):$("body").hasClass("withdraw-dentacare-dcn")&&(window.fbAsyncInit=function(){FB.init({appId:"1500240286681345",cookie:!0,xfbml:!0,version:"v2.10"}),FB.AppEvents.logPageView()},function(e,t,i){var o,n=e.getElementsByTagName(t)[0];e.getElementById(i)||((o=e.createElement(t)).id=i,o.src="//connect.facebook.net/bg_BG/sdk.js",n.parentNode.insertBefore(o,n))}(document,"script","facebook-jssdk"),$("body").on("click",".facebook-dentacare-btn",function(e){var t={scope:"email"};e&&(t.auth_type="rerequest"),FB.login(function(e){if(e.authResponse){var t=e.authResponse.accessToken;$(".response-layer").show(),setTimeout(function(){FB.api("/me?fields=id,email,name,permissions",function(e){var i,o=e.id;if(null==e.email)return basic.showAlert("Please go to your facebook account privacy settings and make your email public. Without giving us access to your email we cannot proceed with the login.","",!0),$(".response-layer").hide(),!0;i=e.email,$.ajax({type:"POST",url:"/social-authenticate-dentacare-user",dataType:"json",data:{email:i,user_id:o,token:t},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},success:function(e){successfulUserLogin(e)}})})},1e3)}},t)}),$("body").on("click",".google-dentacare-btn",function(){if(""==basic.cookies.get("social-allowed"))return basic.showAlert("Coming soon.","",!0),!1}),$("form#dentacare-sign-in").on("submit",function(e){e.preventDefault();var t=$(this);t.find(".error-handle").remove();for(var i=t.find(".form-field"),o=!0,n=0,s=i.length;n<s;n+=1)""==i.eq(n).val().trim()?(customErrorHandle(i.eq(n).closest(".field-parent"),"This field is required."),o=!1):"email"!=i.eq(n).attr("name")||basic.validateEmail(i.eq(n).val().trim())||(customErrorHandle(i.eq(n).closest(".field-parent"),"Please use valid email address."),o=!1);o&&($(".response-layer").show(),setTimeout(function(){$.ajax({type:"POST",url:"/authenticate-dentacare-user",dataType:"json",data:{email:t.find('input[name="email"]').val().trim(),password:t.find('input[name="password"]').val().trim()},success:function(e){successfulUserLogin(e)}})},1e3))})),$("body").hasClass("logged-in")){var add_overflow_hidden_on_hidden_box_show=!1,sm_screen_width=!1;$("body").addClass("overflow-hidden"),$(window).width()<992&&(add_overflow_hidden_on_hidden_box_show=!0,$(window).width()>767&&(sm_screen_width=!0)),$("body").removeClass("overflow-hidden"),sm_screen_width&&$(document).on("click","body",function(){$(".hidden-box-parent").find(event.target).length||($(".logged-user-right-nav .hidden-box").removeClass("show-this"),$(".logged-user-right-nav .up-arrow").removeClass("show-this"))}),add_overflow_hidden_on_hidden_box_show?$(".logged-user-right-nav .user-name, .logged-user-right-nav .header-avatar").click(function(){$(".logged-user-right-nav .hidden-box").toggleClass("show-this"),sm_screen_width?$(".logged-user-right-nav .up-arrow").toggleClass("show-this"):$("body").toggleClass("overflow-hidden")}):$(".logged-user-right-nav > .hidden-box-parent").hover(function(){$(".logged-user-right-nav .hidden-box").addClass("show-this"),$(".logged-user-right-nav .up-arrow").addClass("show-this")},function(){$(".logged-user-right-nav .hidden-box").removeClass("show-this"),$(".logged-user-right-nav .up-arrow").removeClass("show-this")}),$(".logged-user-right-nav .close-btn a").click(function(){$(".logged-user-right-nav .hidden-box").removeClass("show-this"),add_overflow_hidden_on_hidden_box_show&&($("body").removeClass("overflow-hidden"),sm_screen_width&&$(".logged-user-right-nav .up-arrow").removeClass("show-this"))})}function fixButtonsFocus(){$(document).on("click",".light-blue-white-btn",function(){$(this).blur()}),$(document).on("click",".white-light-blue-btn",function(){$(this).blur()})}function hidePopupOnBackdropClick(){$(document).on("click",".bootbox",function(){var e=event.target.className;(e=e.replace(/ /g,"."))&&!$("."+e).parents(".modal-dialog").length&&($(".bootbox.login-signin-popup").length&&$(".hidden-login-form").html(hidden_popup_content),$(".bootbox.login-signin-popup").length&&$(".hidden-login-form").html(hidden_popup_content),bootbox.hideAll())})}fixButtonsFocus(),hidePopupOnBackdropClick();var hidden_popup_content=$(".hidden-login-form").html();function bindLoginSigninPopupShow(){$(document).on("click",".show-login-signin",function(){openLoginSigninPopup()})}function openLoginSigninPopup(){return basic.closeDialog(),$(".hidden-login-form").html(""),basic.showDialog(hidden_popup_content,"login-signin-popup",null,!0),$(".login-signin-popup .dentist .form-register .address-suggester").removeClass("dont-init"),initAddressSuggesters(),$(".login-signin-popup .popup-header-action a").click(function(){$(".login-signin-popup .popup-body > .inline-block").addClass("custom-hide"),$(".login-signin-popup .popup-body ."+$(this).attr("data-type")).removeClass("custom-hide")}),$(".login-signin-popup .call-sign-up").click(function(){$(".login-signin-popup .form-login").hide(),$(".login-signin-popup .form-register").show()}),$(".login-signin-popup .call-log-in").click(function(){$(".login-signin-popup .form-login").show(),$(".login-signin-popup .form-register").hide()}),$(".login-signin-popup .patient .form-register #privacy-policy-registration-patient").on("change",function(){$(this).is(":checked")?($(".login-signin-popup .patient .form-register .facebook-custom-btn").removeAttr("custom-stopper"),$(".login-signin-popup .patient .form-register .civic-custom-btn").removeAttr("custom-stopper")):($(".login-signin-popup .patient .form-register .facebook-custom-btn").attr("custom-stopper","true"),$(".login-signin-popup .patient .form-register .civic-custom-btn").attr("custom-stopper","true"))}),$(document).on("civicCustomBtnClicked",function(e){$(".login-signin-popup .patient .form-register .step-errors-holder").html("")}),$(document).on("civicRead",async function(e){$(".response-layer").show()}),$(document).on("receivedFacebookToken",async function(e){$(".response-layer").show()}),$(document).on("facebookCustomBtnClicked",function(e){$(".login-signin-popup .patient .form-register .step-errors-holder").html("")}),$(document).on("customCivicFbStopperTriggered",function(e){customErrorHandle($(".login-signin-popup .patient .form-register .step-errors-holder"),"Please agree with our privacy policy.")}),$(".login-signin-popup form#dentist-login").on("submit",async function(e){var t=$(this);e.preventDefault(),$(".login-signin-popup form#dentist-login .error-handle").length&&$(".login-signin-popup form#dentist-login .error-handle").remove();for(var i=t.find(".form-field"),o=!0,n=0,s=i.length;n<s;n+=1)"email"!=i.eq(n).attr("type")||basic.validateEmail(i.eq(n).val().trim())?"password"==i.eq(n).attr("type")&&i.eq(n).val().length<6&&(customErrorHandle(i.eq(n).closest(".field-parent"),"Passwords must be min length 6."),o=!1):(customErrorHandle(i.eq(n).closest(".field-parent"),"Please use valid email address."),o=!1),""==i.eq(n).val().trim()&&(customErrorHandle(i.eq(n).closest(".field-parent"),"This field is required."),o=!1);var a=await $.ajax({type:"POST",url:"/check-dentist-account",dataType:"json",data:{email:$('.login-signin-popup form#dentist-login input[name="email"]').val().trim(),password:$('.login-signin-popup form#dentist-login input[name="password"]').val().trim()},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}});o&&(a.success?(fireGoogleAnalyticsEvent("DentistLogin","Click","Dentist Login"),this.submit()):a.error&&customErrorHandle(t.find('input[name="password"]').closest(".field-parent"),a.message))}),$(".login-signin-popup .dentist .form-register .prev-step").click(function(){var e=$(".login-signin-popup .dentist .form-register .step.visible"),t=e.prev();e.removeClass("visible"),t.hasClass("first")&&$(this).hide(),t.addClass("visible"),$(".login-signin-popup .dentist .form-register .next-step").val("Next"),$(".login-signin-popup .dentist .form-register .next-step").attr("data-current-step",t.attr("data-step"))}),$(".login-signin-popup .step.second .user-type-container .user-type").click(function(){$(".login-signin-popup .step.second .user-type-container .user-type").removeClass("active"),$(this).addClass("active"),$('.login-signin-popup .step.second .user-type-container [name="user-type"]').val($(this).attr("data-type"))}),$(".login-signin-popup #dentist-country").on("change",function(){$(".login-signin-popup .step.third .phone .country-code").html("+"+$(this).find("option:selected").attr("data-code"))}),styleAvatarUploadButton(".bootbox.login-signin-popup .dentist .form-register .step.fourth .avatar .btn-wrapper label"),initCaptchaRefreshEvent(),$(".login-signin-popup .dentist .form-register .next-step").click(async function(){var e=$(this);switch(e.attr("data-current-step")){case"first":var t=$(".login-signin-popup .dentist .form-register .step.first .form-field"),i=!1;$(".login-signin-popup .dentist .form-register .step.first").parent().find(".error-handle").remove();for(var o=0,n=t.length;o<n;o+=1){if("email"!=t.eq(o).attr("type")||basic.validateEmail(t.eq(o).val().trim())){if("email"==t.eq(o).attr("type")&&basic.validateEmail(t.eq(o).val().trim())){(await checkIfFreeEmail(t.eq(o).val().trim())).error&&(customErrorHandle(t.eq(o).closest(".field-parent"),"The email has already been taken."),i=!0)}}else customErrorHandle(t.eq(o).closest(".field-parent"),"Please use valid email address."),i=!0;"password"==t.eq(o).attr("type")&&t.eq(o).val().length<6&&(customErrorHandle(t.eq(o).closest(".field-parent"),"Passwords must be min length 6."),i=!0),""==t.eq(o).val().trim()&&(customErrorHandle(t.eq(o).closest(".field-parent"),"This field is required."),i=!0)}$(".login-signin-popup .dentist .form-register .step.first .form-field.password").val().trim()!=$(".login-signin-popup .step.first .form-field.repeat-password").val().trim()&&(customErrorHandle($(".login-signin-popup .step.first .form-field.repeat-password").closest(".field-parent"),"Both passwords don't match."),i=!0),i||(fireGoogleAnalyticsEvent("DentistRegistration","ClickNext","DentistRegistrationStep1"),$(".login-signin-popup .dentist .form-register .step").removeClass("visible"),$(".login-signin-popup .dentist .form-register .step.second").addClass("visible"),$(".login-signin-popup .prev-step").show(),e.attr("data-current-step","second"),e.val("Next"));break;case"second":var s=$(".login-signin-popup .dentist .form-register .step.second .form-field.required");i=!1;$(".login-signin-popup .dentist .form-register .step.second").find(".error-handle").remove();for(o=0,n=s.length;o<n;o+=1)s.eq(o).is("select")?""==s.eq(o).val().trim()&&(customErrorHandle(s.eq(o).closest(".field-parent"),"This field is required."),i=!0):s.eq(o).is("input")&&""==s.eq(o).val().trim()&&(customErrorHandle(s.eq(o).closest(".field-parent"),"This field is required."),i=!0);/^[a-z A-Z]+$/.test($('.login-signin-popup .dentist .form-register .step.second input[name="latin-name"]').val().trim())||(customErrorHandle($('.login-signin-popup .dentist .form-register .step.second input[name="latin-name"]').closest(".field-parent"),"This field should contain only latin characters."),i=!0),$(".login-signin-popup .dentist .form-register .step.second #privacy-policy-registration").is(":checked")||(customErrorHandle($(".login-signin-popup .dentist .form-register .step.second .privacy-policy-row"),'Please agree with our <a href="//dentacoin.com/privacy-policy" target="_blank">Privacy policy</a>.'),i=!0),i||(fireGoogleAnalyticsEvent("DentistRegistration","ClickNext","DentistRegistrationStep2"),$(".login-signin-popup .dentist .form-register .step").removeClass("visible"),$(".login-signin-popup .dentist .form-register .step.third").addClass("visible"),e.attr("data-current-step","third"),e.val("Next"));break;case"third":var a=$(".login-signin-popup .dentist .form-register .step.third .form-field.required");i=!1;$(".login-signin-popup .dentist .form-register .step.third").find(".error-handle").remove();for(o=0,n=a.length;o<n;o+=1)a.eq(o).is("select")?""==a.eq(o).val().trim()&&(customErrorHandle(a.eq(o).closest(".field-parent"),"This field is required."),i=!0):a.eq(o).is("input")&&(""==a.eq(o).val().trim()&&(customErrorHandle(a.eq(o).closest(".field-parent"),"This field is required."),i=!0),"url"!=a.eq(o).attr("type")||basic.validateUrl(a.eq(o).val().trim())?"number"!=a.eq(o).attr("type")||basic.validatePhone(a.eq(o).val().trim())||(customErrorHandle(a.eq(o).closest(".field-parent"),"Please use valid numbers."),i=!0):(customErrorHandle(a.eq(o).closest(".field-parent"),"Please enter your website URL starting with http:// or https://."),i=!0));var r=await validatePhone($('.login-signin-popup .dentist .form-register .step.third input[name="phone"]').val().trim(),$('.login-signin-popup .dentist .form-register .step.third select[name="country-code"]').val());has(r,"success")&&!r.success&&(customErrorHandle($('.login-signin-popup .dentist .form-register .step.third input[name="phone"]').closest(".field-parent"),"Please use valid phone."),i=!0),i||(fireGoogleAnalyticsEvent("DentistRegistration","ClickNext","DentistRegistrationStep3"),$(".login-signin-popup .dentist .form-register .step").removeClass("visible"),$(".login-signin-popup .dentist .form-register .step.fourth").addClass("visible"),e.attr("data-current-step","fourth"),e.val("Create account"));break;case"fourth":$(".login-signin-popup .dentist .form-register .step.fourth").find(".error-handle").remove();i=!1;if(""==$(".dentist .form-register .step.fourth #custom-upload-avatar").val().trim()&&(customErrorHandle($(".step.fourth .step-errors-holder"),"Please select avatar."),i=!0),null==$('.login-signin-popup .dentist .form-register .step.fourth [name="specializations[]"]:checked').val()&&(customErrorHandle($(".login-signin-popup .step.fourth .step-errors-holder"),"Please select specialization/s."),i=!0),$(".login-signin-popup .dentist .form-register .step.fourth .captcha-parent").length&&$(".login-signin-popup .dentist .form-register .step.fourth #register-captcha").length)(await checkCaptcha($(".login-signin-popup .dentist .form-register .step.fourth #register-captcha").val().trim())).error&&(customErrorHandle($(".login-signin-popup .step.fourth .step-errors-holder"),"Please enter correct captcha."),i=!0);else i=!0,window.location.reload();i||(fireGoogleAnalyticsEvent("DentistRegistration","ClickNext","DentistRegistrationComplete"),$(".response-layer").show(),$(".login-signin-popup form#dentist-register").submit())}}),!1}function customErrorHandle(e,t){e.append('<div class="error-handle">'+t+"</div>")}function onEnrichProfileFormSubmit(){$(document).on("submit",".enrich-profile-container #enrich-profile",function(e){var t=!1,i=$(this);i.find(".error-handle").remove(),""==i.find('[name="description"]').val().trim()&&(t=!0,customErrorHandle(i.find('[name="description"]').parent(),"Please enter short description.")),t?e.preventDefault():"dentist"==$(".enrich-profile-container").attr("data-type")?fireGoogleAnalyticsEvent("DentistRegistration","ClickSave","DentistDescr"):"clinic"==$(".enrich-profile-container").attr("data-type")&&fireGoogleAnalyticsEvent("DentistRegistration","ClickSave","ClinicDescr")})}function styleAvatarUploadButton(e){jQuery(".upload-file.avatar").length&&jQuery(".upload-file.avatar").each(function(t,i){var o=jQuery(this);o.attr("data-current-user-avatar")?o.find(".btn-wrapper").append('<label for="custom-upload-avatar" role="button" style="background-image:url('+o.attr("data-current-user-avatar")+');"><div class="inner"><i class="fa fa-plus fs-0" aria-hidden="true"></i><div class="inner-label fs-0">Add profile photo</div></div></label>'):o.find(".btn-wrapper").append('<label for="custom-upload-avatar" role="button"><div class="inner"><i class="fa fa-plus" aria-hidden="true"></i><div class="inner-label">Add profile photo</div></div></label>');var n=document.querySelectorAll(".inputfile");Array.prototype.forEach.call(n,function(t){t.nextElementSibling.innerHTML;t.addEventListener("change",function(t){readURL(this,e);this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):t.target.value.split("\\").pop()}),t.addEventListener("focus",function(){t.classList.add("has-focus")}),t.addEventListener("blur",function(){t.classList.remove("has-focus")})})})}function readURL(e,t){if(e.files&&e.files[0]){var i=new FileReader;i.onload=function(e){$(t).css({"background-image":'url("'+e.target.result+'")'}),$(t).find(".inner i").addClass("fs-0"),$(t).find(".inner .inner-label").addClass("fs-0")},i.readAsDataURL(e.files[0])}}async function checkIfFreeEmail(e){return await $.ajax({type:"POST",url:"/check-email",dataType:"json",data:{email:e},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})}async function checkCaptcha(e){return await $.ajax({type:"POST",url:"/check-captcha",dataType:"json",data:{captcha:e},headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}})}async function validatePhone(e,t){return await $.ajax({type:"POST",url:"https://api.dentacoin.com/api/phone/",dataType:"json",data:{phone:e,country_code:t}})}function apiEventsListeners(){$(document).on("successResponseCoreDBApi",async function(e){if(e.response_data.token){var t={token:e.response_data.token,id:e.response_data.data.id,_token:$('meta[name="csrf-token"]').attr("content")};$('input[type="hidden"][name="route"]').length&&$('input[type="hidden"][name="slug"]').length&&(t.route=$('input[type="hidden"][name="route"]').val(),t.slug=$('input[type="hidden"][name="slug"]').val()),null!=basic.property_exists(t,"address")&&innerAddressCheck(t.address),e.response_data.new_account?"facebook"==e.platform_type?fireGoogleAnalyticsEvent("PatientRegistration","ClickFB","Patient Registration FB"):"civic"==e.platform_type&&fireGoogleAnalyticsEvent("PatientRegistration","ClickNext","Patient Registration Civic"):"facebook"==e.platform_type?fireGoogleAnalyticsEvent("PatientLogin","Click","Login FB"):"civic"==e.platform_type&&fireGoogleAnalyticsEvent("PatientLogin","Click","Login Civic"),customJavascriptForm("/patient-login",t,"post")}}),$(document).on("errorResponseCoreDBApi",function(e){var t="";if(e.response_data.errors)for(var i in e.response_data.errors)t+=e.response_data.errors[i]+"<br>";$(".response-layer").hide(),basic.showAlert(t,"",!0)})}function customJavascriptForm(e,t,i){i=i||"post";var o=document.createElement("form");for(var n in o.setAttribute("method",i),o.setAttribute("action",e),t)if(t.hasOwnProperty(n)){var s=document.createElement("input");s.setAttribute("type","hidden"),s.setAttribute("name",n),s.setAttribute("value",t[n]),o.appendChild(s)}document.body.appendChild(o),o.submit()}function bindGoogleAlikeButtonsEvents(){$("body").on("click",".custom-google-label-style label",function(){$(this).addClass("active-label"),"true"==$(".custom-google-label-style").attr("data-input-blue-green-border")&&$(this).parent().find("input").addClass("blue-green-border")}),$("body").on("keyup change focusout",".custom-google-label-style input",function(){$(this).val().trim().length?($(this).closest(".custom-google-label-style").find("label").addClass("active-label"),"true"==$(this).closest(".custom-google-label-style").attr("data-input-blue-green-border")&&$(this).addClass("blue-green-border")):($(this).closest(".custom-google-label-style").find("label").removeClass("active-label"),"true"==$(this).closest(".custom-google-label-style").attr("data-input-blue-green-border")&&$(this).removeClass("blue-green-border"))})}function has(e,t){return!!e&&hasOwnProperty.call(e,t)}function fireGoogleAnalyticsEvent(e,t,i,o){null!=o&&({event_category:e,event_action:t,event_label:i}.value=o)}function bindDentacareGooglePlayBtnClick(){$(document).on("click",".dentacare-google-play-btn-click",function(e){e.preventDefault(),fireGoogleAnalyticsEvent("Download","Click","Google Play"),fbq("track","DentaGooglePlay"),window.open($(this).attr("href"))})}function bindDentacareAppStoreBtnClick(){$(document).on("click",".dentacare-app-store-btn-click",function(e){e.preventDefault(),fireGoogleAnalyticsEvent("Download","Click","Apple"),fbq("track","DentaAppStore"),window.open($(this).attr("href"))})}function bindTRPLinkTracker(){$(document).on("click",".trp-link-tracker",function(e){e.preventDefault(),console.log("lolwhat"),fireGoogleAnalyticsEvent("Tools","Click","TRP"),window.open($(this).attr("href"))})}function bindDVLinkTracker(){$(document).on("click",".vox-link-tracker",function(e){e.preventDefault(),fireGoogleAnalyticsEvent("Tools","Click","Vox"),window.open($(this).attr("href"))})}bindLoginSigninPopupShow(),onEnrichProfileFormSubmit(),apiEventsListeners(),bindGoogleAlikeButtonsEvents(),bindDentacareGooglePlayBtnClick(),bindDentacareAppStoreBtnClick(),bindTRPLinkTracker(),bindDVLinkTracker();
