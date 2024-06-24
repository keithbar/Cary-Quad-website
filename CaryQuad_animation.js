(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CaryQuad_animation_atlas_1", frames: [[0,730,132,221],[134,730,106,269],[206,349,216,299],[0,0,311,347],[0,349,204,379],[242,650,129,218],[313,0,142,323],[373,650,112,247]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CaryQuad_logo_0000_Layer8 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0001_Layer7 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0002_Layer6 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0003_Layer5 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0004_Layer4 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0005_Layer3 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0006_Layer2 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CaryQuad_logo_0007_Layer1 = function() {
	this.initialize(ss["CaryQuad_animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.logotest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [20];
	// timeline functions:
	this.frame_20 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(8));

	// D
	this.instance = new lib.CaryQuad_logo_0000_Layer8();
	this.instance.setTransform(1455.6,1410.8,1,1,-29.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({y:656.05},0).wait(1).to({x:1357.4,y:465.85},0).wait(1).to({x:1237.75,y:259},0).wait(1).to({rotation:14.9996,x:1315,y:197.9},0).wait(1).to({rotation:0,x:1281,y:228},0).wait(8));

	// A2
	this.instance_1 = new lib.CaryQuad_logo_0001_Layer7();
	this.instance_1.setTransform(1072.35,1024.5,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({x:1238,y:555.05},0).wait(1).to({y:294.3},0).wait(1).to({rotation:14.9994,x:1200.25,y:205.35},0).wait(1).to({rotation:0,x:1164,y:214},0).wait(1).to({x:1191,y:197},0).wait(13));

	// U
	this.instance_2 = new lib.CaryQuad_logo_0002_Layer6();
	this.instance_2.setTransform(522.4,1167.1,1,1,14.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({x:878.3,y:553.45},0).wait(1).to({x:1015.25,y:357.65},0).wait(1).to({y:216.5},0).wait(1).to({rotation:-7.2249,x:985.65,y:254.1},0).wait(1).to({x:955.05,y:216.15},0).wait(1).to({rotation:0,x:998,y:193},0).wait(16));

	// Q
	this.instance_3 = new lib.CaryQuad_logo_0003_Layer5();
	this.instance_3.setTransform(587.85,1302.8,1,1,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({x:679.85,y:784.6},0).wait(1).to({x:731.05,y:551.4},0).wait(1).to({x:807.75,y:385.7},0).wait(1).to({rotation:-14.9996,x:845.3,y:271.1},0).wait(1).to({rotation:0,x:845,y:223},0).wait(1).to({x:770,y:183},0).wait(20));

	// Y
	this.instance_4 = new lib.CaryQuad_logo_0004_Layer4();
	this.instance_4.setTransform(1879.9,1212.4,1,1,44.9994);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({x:1482,y:678.55},0).wait(1).to({x:936.75,y:347.2},0).wait(1).to({x:694.35,y:197},0).wait(1).to({rotation:14.9996,x:583,y:193.65},0).wait(1).to({rotation:0,x:536,y:173},0).wait(11));

	// R
	this.instance_5 = new lib.CaryQuad_logo_0005_Layer3();
	this.instance_5.setTransform(279.1,1268.35,1,1,29.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({x:190.1,y:648.55},0).wait(1).to({x:392.6,y:433.75},0).wait(1).to({x:524.5,y:258.7},0).wait(1).to({rotation:-14.9996,x:435.35,y:296.7},0).wait(1).to({rotation:0,x:461,y:252},0).wait(18));

	// A1
	this.instance_6 = new lib.CaryQuad_logo_0006_Layer2();
	this.instance_6.setTransform(656.6,1386.9,1,1,-14.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({x:484.8,y:601.45},0).wait(1).to({x:285.35,y:221},0).wait(1).to({rotation:14.9994,x:368.95,y:184.2},0).wait(1).to({rotation:0,x:325,y:189},0).wait(22));

	// C
	this.instance_7 = new lib.CaryQuad_logo_0007_Layer1();
	this.instance_7.setTransform(0,1103.7,1,1,-14.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:107.4,y:628.15},0).wait(1).to({x:184.1,y:444.05},0).wait(1).to({x:218.7,y:284.5},0).wait(1).to({rotation:0,x:226,y:240},0).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(852,554.3,1172.2,1144.6000000000001);
// library properties:
lib.properties = {
	id: 'DC220379A52EF14A83BF668CF0B81D15',
	width: 1704,
	height: 777,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/CaryQuad_animation_atlas_1.png", id:"CaryQuad_animation_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DC220379A52EF14A83BF668CF0B81D15'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		//var iw = window.innerWidth, ih=window.innerHeight;
		var banner = document.getElementById('banner');
		var iw = banner.offsetWidth, ih = banner.offsetHeight;

		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;