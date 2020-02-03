gsap.from("#title", {x: -500, opacity: 0, duration: 1, ease:Power2.easeOut});
gsap.from("#type", {y: 1000, opacity: 0, duration: 1, ease:Power2.easeOut});
gsap.from("#indic", {opacity: 0, y: 1000, duration: 1, ease:Power2.easeOut});

/*proj 1 2-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var mqlmax= window.matchMedia('(max-width: 600px)');
var mqlmin = window.matchMedia('(min-width: 600px)');

if(mqlmin.matches) {
	var tl = gsap.timeline({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();
	
	tl.to("#projet_1_2", {scale: 0.5, duration: 1, ease:Power1.easeOut});
	tl.to("#back", { css:{color: "black",}},"-=1");

	tl.to("#projet_1", {scale: 0.5, duration: 1, ease:Power1.easeOut},"-=1");
	tl.to("#projet_2", {scale: 0.5, duration: 1, ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {scale: 0.5, duration: 1, opacity: 0, ease:Power1.easeOut},"-=1");
	tl.to("#projTxt_2", {scale: 0.5, duration: 1, opacity: 0, ease:Power1.easeOut},"-=1");
	
	tl.to("#projet_1_2", {duration: 0.3, ease:Power1.easeOut, css:{zIndex:1, opacity: 0}});

	tl.to("#projet_1", {duration:1, x: "-30%", ease:Power1.easeOut});
	tl.to("#projet_2", {duration:1, x: "30%", ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {duration:1, x: "-30%", ease:Power1.easeOut},"-=1");
	tl.to("#projTxt_2", {duration:1, x: "30%", ease:Power1.easeOut},"-=1");
	
	tl.to("#projet_1", {duration:1, y: "-30%", ease:Power1.easeOut});
	tl.to("#projet_2", {duration:1, y: "30%", ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {duration:1, y: "-30%", ease:Power1.easeOut},"-=1");
	tl.to("#projTxt_2", {duration:1, y: "30%", ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_1", {duration:1, x: "30%", opacity: 1, ease:Power1.easeOut});
	tl.to("#projTxt_2", {duration:1, x: "-30%", opacity: 1, ease:Power1.easeOut},"-=1");

	tl.to("#projTxt_2", {duration:1});
	
	const scene = new ScrollMagic.Scene({
	  triggerElement: ".scrollProj_1_2",
	            triggerHook: "onLeave",
	            duration: "100%"
	})
	    .setPin(".scrollProj_1_2")
	    .setTween(tl)
		.addTo(controller);
	
	
	function updatePercentage() {
	  tl.progress();
	}
}

else {

	var tl2 = gsap.timeline({onUpdate:updatePercentage});
	const controller = new ScrollMagic.Controller();

	tl2.to("#projet_1_2", {duration: 0.3, ease:Power1.easeOut, css:{zIndex:1, opacity: 0}});

	tl2.to("#projet_1", {duration:1, y: "-100%", ease:Power1.easeOut});
	tl2.to("#projet_2", {duration:1, y: "100%", ease:Power1.easeOut},"-=1");
	

	tl2.to("#projTxt_1", {duration:1, y: "-30%", opacity: 1, ease:Power1.easeOut});
	tl2.to("#projTxt_2", {duration:1, y: "30%", opacity: 1, ease:Power1.easeOut},"-=1");

	const scene = new ScrollMagic.Scene({
	  triggerElement: ".scrollProj_1_2",
	            triggerHook: "onLeave",
	            duration: "100%"
	})
	    .setPin(".scrollProj_1_2")
	    .setTween(tl2)
		.addTo(controller);
	
	
	function updatePercentage() {
	  tl2.progress();
	}
}

/*proj 3 4------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

if(mqlmin.matches) {
var tl3 = gsap.timeline({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl3.to("#back", {css:{color: "white"}});
tl3.from("#img3", {duration: 1, x: "-5%", ease:Power1.easeOut},"-=1");
tl3.from("#img4", {duration:1, x: "5%", ease:Power1.easeOut},"-=1");

tl3.from(".descproj_right", {duration: 1, x: "-90%", opacity:0, ease:Power1.easeOut},"-=1");
tl3.from(".descproj_left", {duration:1, x: "90%", opacity:0, ease:Power1.easeOut},"-=1");

const scene = new ScrollMagic.Scene({
  triggerElement: "#projets_3_4",
            triggerHook: "onLeave",
            duration: "100%"
})
    .setPin("#projets_3_4")
    .setTween(tl3)
	.addTo(controller);


function updatePercentage() {
  tl3.progress();
}
}
else{
var tl3 = gsap.timeline({onUpdate:updatePercentage});

tl3.to("#back", {css:{color: "white"}});
tl3.to("#img3", {duration: 1, x: "10vw", ease:Power1.easeOut},"-=1");
tl3.to("#img4", {duration:1, x: "10vw", ease:Power1.easeOut},"-=1");
}

if(mqlmin.matches) {
var tl4 = gsap.timeline({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl4.to("#back", {css:{color: "black"}});
tl4.from("#img5", {duration: 1, x: "-5%", ease:Power1.easeOut},"-=1");
tl4.from("#img6", {duration:1, x: "5%", ease:Power1.easeOut},"-=1");

tl4.from(".descproj_right_5", {duration: 1, x: "-90%", opacity:0, ease:Power1.easeOut},"-=1");
tl4.from(".descproj_left_6", {duration:1, x: "90%", opacity:0, ease:Power1.easeOut},"-=1");

const scene = new ScrollMagic.Scene({
  triggerElement: "#projets_5_6",
            triggerHook: "onLeave",
            duration: "100%"
})
    .setPin("#projets_5_6")
    .setTween(tl4)
	.addTo(controller);


function updatePercentage() {
  tl4.progress();
}
}

else{
var tl4 = gsap.timeline();

tl4.to("#back", {css:{color: "black"}});
tl4.to("#img5", {duration: 1, x: "10vw", ease:Power1.easeOut},"-=1");
tl4.to("#img6", {duration:1, x: "10vw", ease:Power1.easeOut},"-=1");

}