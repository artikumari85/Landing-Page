// Shery.imageEffect("#back",{style: 5, debug: true,gooey: true})    /* elements jiske andar images hai or configurations seeting hai */

 Shery.imageEffect("#back",{style: 5, config: 
 {"a":{"value":2,"range":[0,30]},
"b":{"value":0.75,"range":[-1,1]},
"zindex":{"value":-9996999,
 "range":[-9999999,9999999]},
 "aspect":{"value":2.012021924628586},
 "ignoreShapeAspect":{"value":true},
 "shapePosition":{"value":{"x":0,"y":0}},
 "shapeScale":{"value":{"x":0.5,"y":0.5}},
 "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
 "shapeRadius":{"value":0,"range":[0,2]},
 "currentScroll":{"value":0},
 "scrollLerp":{"value":0.07},
 "gooey":{"value":true},
 "infiniteGooey":{"value":true},
 "growSize":{"value":4,"range":[1,15]},
 "durationOut":{"value":1,"range":[0.1,5]},
 "durationIn":{"value":1.5,"range":[0.1,5]},
 "displaceAmount":{"value":0.5},
 "masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},
 "scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},
 "noEffectGooey":{"value":true},
 "onMouse":{"value":1},
 "noise_speed":{"value":0.2,"range":[0,10]},
 "metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},
 "antialias_threshold":{"value":0,"range":[0,0.1]},
 "noise_height":{"value":0.5,"range":[0,2]},
 "noise_scale":{"value":10,"range":[0,100]}},
 gooey: true})


// YEH HUM LG RHE H JB CLICK KARE TO JO TEXT H VO EK EK KR KE CHANGE KARE

// sare elements ke liye 
var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){
    // har bar humko ek ek row mile gi phle pahli row phir dusari row mile gi

    // sb h1 ko select karo 
var h1s = elem.querySelectorAll("h1")
var index = 0;
// yeh basically hum mouse ke click krne pe agr koi kare ga to ek ek ek upar jldi jldi aa jye ga aisa na ho to yeh kare ge
var animating = false;

document.querySelector("button")
    .addEventListener("click",function(){
        // jn ap click karo ge animating ki value false hai not lg hai to yeh true ho jye ga to if chle ga to animating ki value hogi true
        
     if(!animating){
        animating = true ;
           gsap.to(h1s[index],{
            top : "-100%",
            ease : Expo.easeInOut,
            duration: 1,
            onComplete : function(){
                gsap.set(this._targets[0],{top:"100%"})
                // or jb animating complete ho jye to usske baad animating ki value vapash se false krdo taki jb hum click kare ge to animating
                // ki value false ho jye gi phir if wali condition same chale gi
                animating = false;
            }

        });

        // index === h1s.length-1 ? (index = 0): index++;
        index = (index + 1) % h1s.length;
         gsap.to(h1s[index],{
            top : "-=100%",
            ease : Expo.easeInOut,
            duration: 1

        });
     }

    });

})




// // sb h1 ko select karo 
// var h1s = document.querySelectorAll("h1")
// var index = 0;
// document.querySelector("#main")
//     .addEventListener("click",function(){
//         // mai gsap se bola rha hu eliminate karo yeh jo sare h1s hai jo array jaisa structure aaye array nhi array jaisa
//         gsap.to(h1s[index],{
//             // tum upar chale jao to tumhari value top se -=100%
//             top : "-=100%",
//             ease : Expo.easeInOut,
//             duration: 1,
//             // jb phla wala text upar chla jye
//             onComplete : function(){
//                 gsap.set(this._targets[0],{top:"100%"})
//             }

//         });
//         // jo niche wala h vo upar aa jye or index ki value bada do index++
//         // index++;
//         // jb value 5 pe upar ho jye to ussko badate nhi hona h phir se 0 se start karo

//         index === h1s.length-1 ? (index = 0): index++;   /*index ki value agr kabhi bar ho jati hai sare h1s ki length-1 se agr bar ho jaati hai to ushi vakat? index ki value zero (=0) kr dena nhi to index ki valur badthe rahna */
//          gsap.to(h1s[index],{
//             // tum upar chale jao to tumhari value top se -=100%
//             top : "-=100%",
//             ease : Expo.easeInOut,
//             duration: 1

//         });

//     });
