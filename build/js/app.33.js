(()=>{var pm=Object.create;var _h=Object.defineProperty;var mm=Object.getOwnPropertyDescriptor;var gm=Object.getOwnPropertyNames;var _m=Object.getPrototypeOf,xm=Object.prototype.hasOwnProperty;var xh=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var vm=(o,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of gm(e))!xm.call(o,n)&&n!==t&&_h(o,n,{get:()=>e[n],enumerable:!(i=mm(e,n))||i.enumerable});return o};var pl=(o,e,t)=>(t=o!=null?pm(_m(o)):{},vm(e||!o||!o.__esModule?_h(t,"default",{value:o,enumerable:!0}):t,o));var _l=xh((gw,gl)=>{function ml(){}ml.prototype={on:function(o,e,t){var i=this.e||(this.e={});return(i[o]||(i[o]=[])).push({fn:e,ctx:t}),this},once:function(o,e,t){var i=this;function n(){i.off(o,n),e.apply(t,arguments)}return n._=e,this.on(o,n,t)},emit:function(o){var e=[].slice.call(arguments,1),t=((this.e||(this.e={}))[o]||[]).slice(),i=0,n=t.length;for(i;i<n;i++)t[i].fn.apply(t[i].ctx,e);return this},off:function(o,e){var t=this.e||(this.e={}),i=t[o],n=[];if(i&&e)for(var s=0,r=i.length;s<r;s++)i[s].fn!==e&&i[s].fn._!==e&&n.push(i[s]);return n.length?t[o]=n:delete t[o],this}};gl.exports=ml;gl.exports.TinyEmitter=ml});var Hd=xh((gc,_c)=>{(function(o,e){typeof gc=="object"&&typeof _c<"u"?_c.exports=e():typeof define=="function"&&define.amd?define(e):(o||self).virtualScroll=e()})(gc,function(){var o=0;function e(m){return"__private_"+o+++"_"+m}function t(m,g){if(!Object.prototype.hasOwnProperty.call(m,g))throw new TypeError("attempted to use private field on non-instance");return m}function i(){}i.prototype={on:function(m,g,p){var f=this.e||(this.e={});return(f[m]||(f[m]=[])).push({fn:g,ctx:p}),this},once:function(m,g,p){var f=this;function _(){f.off(m,_),g.apply(p,arguments)}return _._=g,this.on(m,_,p)},emit:function(m){for(var g=[].slice.call(arguments,1),p=((this.e||(this.e={}))[m]||[]).slice(),f=0,_=p.length;f<_;f++)p[f].fn.apply(p[f].ctx,g);return this},off:function(m,g){var p=this.e||(this.e={}),f=p[m],_=[];if(f&&g)for(var y=0,v=f.length;y<v;y++)f[y].fn!==g&&f[y].fn._!==g&&_.push(f[y]);return _.length?p[m]=_:delete p[m],this}};var n=i;n.TinyEmitter=i;var s,r="virtualscroll",a=e("options"),l=e("el"),c=e("emitter"),u=e("event"),h=e("touchStart"),d=e("bodyTouchAction");return function(){function m(p){var f=this;Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),this._onWheel=function(_){var y=t(f,a)[a],v=t(f,u)[u];v.deltaX=_.wheelDeltaX||-1*_.deltaX,v.deltaY=_.wheelDeltaY||-1*_.deltaY,s.isFirefox&&_.deltaMode===1&&(v.deltaX*=y.firefoxMultiplier,v.deltaY*=y.firefoxMultiplier),v.deltaX*=y.mouseMultiplier,v.deltaY*=y.mouseMultiplier,f._notify(_)},this._onMouseWheel=function(_){var y=t(f,u)[u];y.deltaX=_.wheelDeltaX?_.wheelDeltaX:0,y.deltaY=_.wheelDeltaY?_.wheelDeltaY:_.wheelDelta,f._notify(_)},this._onTouchStart=function(_){var y=_.targetTouches?_.targetTouches[0]:_;t(f,h)[h].x=y.pageX,t(f,h)[h].y=y.pageY},this._onTouchMove=function(_){var y=t(f,a)[a];y.preventTouch&&!_.target.classList.contains(y.unpreventTouchClass)&&_.preventDefault();var v=t(f,u)[u],b=_.targetTouches?_.targetTouches[0]:_;v.deltaX=(b.pageX-t(f,h)[h].x)*y.touchMultiplier,v.deltaY=(b.pageY-t(f,h)[h].y)*y.touchMultiplier,t(f,h)[h].x=b.pageX,t(f,h)[h].y=b.pageY,f._notify(_)},this._onKeyDown=function(_){var y=t(f,u)[u];y.deltaX=y.deltaY=0;var v=window.innerHeight-40;switch(_.keyCode){case 37:case 38:y.deltaY=t(f,a)[a].keyStep;break;case 39:case 40:y.deltaY=-t(f,a)[a].keyStep;break;case 32:y.deltaY=v*(_.shiftKey?1:-1);break;default:return}f._notify(_)},t(this,l)[l]=window,p&&p.el&&(t(this,l)[l]=p.el,delete p.el),s||(s={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),t(this,a)[a]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},p),t(this,c)[c]=new n,t(this,u)[u]={y:0,x:0,deltaX:0,deltaY:0},t(this,h)[h]={x:null,y:null},t(this,d)[d]=null,t(this,a)[a].passive!==void 0&&(this.listenerOptions={passive:t(this,a)[a].passive})}var g=m.prototype;return g._notify=function(p){var f=t(this,u)[u];f.x+=f.deltaX,f.y+=f.deltaY,t(this,c)[c].emit(r,{x:f.x,y:f.y,deltaX:f.deltaX,deltaY:f.deltaY,originalEvent:p})},g._bind=function(){s.hasWheelEvent&&t(this,l)[l].addEventListener("wheel",this._onWheel,this.listenerOptions),s.hasMouseWheelEvent&&t(this,l)[l].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),s.hasTouch&&t(this,a)[a].useTouch&&(t(this,l)[l].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),t(this,l)[l].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),s.hasPointer&&s.hasTouchWin&&(t(this,d)[d]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",t(this,l)[l].addEventListener("MSPointerDown",this._onTouchStart,!0),t(this,l)[l].addEventListener("MSPointerMove",this._onTouchMove,!0)),s.hasKeyDown&&t(this,a)[a].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},g._unbind=function(){s.hasWheelEvent&&t(this,l)[l].removeEventListener("wheel",this._onWheel),s.hasMouseWheelEvent&&t(this,l)[l].removeEventListener("mousewheel",this._onMouseWheel),s.hasTouch&&(t(this,l)[l].removeEventListener("touchstart",this._onTouchStart),t(this,l)[l].removeEventListener("touchmove",this._onTouchMove)),s.hasPointer&&s.hasTouchWin&&(document.body.style.msTouchAction=t(this,d)[d],t(this,l)[l].removeEventListener("MSPointerDown",this._onTouchStart,!0),t(this,l)[l].removeEventListener("MSPointerMove",this._onTouchMove,!0)),s.hasKeyDown&&t(this,a)[a].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},g.on=function(p,f){t(this,c)[c].on(r,p,f);var _=t(this,c)[c].e;_&&_[r]&&_[r].length===1&&this._bind()},g.off=function(p,f){t(this,c)[c].off(r,p,f);var _=t(this,c)[c].e;(!_[r]||_[r].length<=0)&&this._unbind()},g.destroy=function(){t(this,c)[c].off(),this._unbind()},m}()})});var vh=pl(_l(),1),Tt=class extends vh.default{constructor({element:e,config:t,addClass:i}){super(),this.element=e,this.config={root:null,margin:"10px",threshold:.1,...t},i!==void 0&&(this.addClass=i),this.init(),this.start()}init(){this.in=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&this.isIn()})},{rootMargin:this.config.margin,threshold:this.config.threshold}),this.out=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting||this.isOut()})},{rootMargin:"000px",threshold:0})}start(){this.in.observe(this.element),this.out.observe(this.element)}stop(){this.in.unobserve(this.element),this.out.unobserve(this.element)}isIn(){this.addClass&&this.element.classList.add(this.addClass),this.emit("IN")}isOut(){this.addClass&&this.element.classList.remove(this.addClass),this.emit("OUT")}};function Ui(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ah(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}var Xt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},Ol,Wt,st,ri=1e8,Ge=1/ri,Dl=Math.PI*2,ym=Dl/4,bm=0,Eh=Math.sqrt,wm=Math.cos,Mm=Math.sin,ot=function(e){return typeof e=="string"},Qe=function(e){return typeof e=="function"},Hi=function(e){return typeof e=="number"},Mo=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},qt=function(e){return e!==!1},Ch=function(){return typeof window<"u"},fo=function(e){return Qe(e)||ot(e)},Ph=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,Tl=/(?:-?\.?\d|\.)+/gi,Nl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Hn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kl=/[+-]=-?[.\d]+/,Rh=/[^,'"\[\]\s]+/gi,Sm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,si,Al,Bl,Kt={},_o={},Lh,Ih=function(e){return(_o=Vn(e,Kt))&&Lt},So=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xo=function(e,t){return!t&&console.warn(e)},Fh=function(e,t){return e&&(Kt[e]=t)&&_o&&(_o[e]=t)||Kt},Mr=function(){return 0},Dm={suppressEvents:!0,isStart:!0,kill:!1},po={suppressEvents:!0,kill:!1},Tm={suppressEvents:!0},Ul={},hn=[],El={},zh,Ht={},vl={},yh=30,mo=[],Vl="",Hl=function(e){var t=e[0],i,n;if(Ei(t)||Qe(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=mo.length;n--&&!mo[n].targetTest(t););i=mo[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new ql(e[n],i)))||e.splice(n,1);return e},dn=function(e){return e._gsap||Hl(oi(e))[0]._gsap},Gl=function(e,t,i){return(i=e[t])&&Qe(i)?e[t]():Mo(i)&&e.getAttribute&&e.getAttribute(t)||i},It=function(e,t){return(e=e.split(",")).forEach(t)||e},et=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Gn=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},Am=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},vo=function(){var e=hn.length,t=hn.slice(0),i,n;for(El={},hn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Oh=function(e,t,i,n){hn.length&&vo(),e.render(t,i,n||Wt&&t<0&&(e._initted||e._startAt)),hn.length&&vo()},Nh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Rh).length<2?t:ot(e)?e.trim():e},kh=function(e){return e},li=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Em=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Vn=function(e,t){for(var i in t)e[i]=t[i];return e},bh=function o(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ei(t[i])?o(e[i]||(e[i]={}),t[i]):t[i]);return e},yo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},yr=function(e){var t=e.parent||Ke,i=e.keyframes?Em(Et(e.keyframes)):li;if(qt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Cm=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Bh=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=e[n],a;if(s)for(a=t[s];r&&r[s]>a;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=r,t.parent=t._dp=e,t},Do=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,r=t._next;s?s._next=r:e[i]===t&&(e[i]=r),r?r._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},fn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Bn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Pm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cl=function(e,t,i,n){return e._startAt&&(Wt?e._startAt.revert(po):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},Rm=function o(e){return!e||e._ts&&o(e.parent)},wh=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},bo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},To=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ge)||0))},Ao=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),To(e),i._dirty||Bn(i,e)),e},Uh=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=bo(e.rawTime(),t),(!t._dur||Dr(0,t.totalDuration(),i)-t._tTime>Ge)&&t.render(i,!0)),Bn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ge}},Ai=function(e,t,i,n){return t.parent&&fn(t),t._start=yt((Hi(i)?i:i||e!==Ke?ni(e,i,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bh(e,t,"_first","_last",e._sort?"_start":0),Pl(t)||(e._recent=t),n||Uh(e,t),e._ts<0&&Ao(e,e._tTime),e},Vh=function(e,t){return(Kt.ScrollTrigger||So("scrollTrigger",t))&&Kt.ScrollTrigger.create(t,e)},Hh=function(e,t,i,n,s){if(Zl(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&zh!==Gt.frame)return hn.push(e),e._lazy=[s,n],1},Lm=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Pl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Im=function(e,t,i,n){var s=e.ratio,r=t<0||!t&&(!e._start&&Lm(e)&&!(!e._initted&&Pl(e))||(e._ts<0||e._dp._ts<0)&&!Pl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Dr(0,e._tDur,t),u=ys(l,a),e._yoyo&&u&1&&(r=1-r),u!==ys(e._tTime,a)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Wt||n||e._zTime===Ge||!t&&e._zTime){if(!e._initted&&Hh(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?Ge:0),i||(i=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=l,c=e._pt;c;)c.r(r,c.d),c=c._next;t<0&&Cl(e,t,i,!0),e._onUpdate&&!i&&ai(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&fn(e,1),!i&&!Wt&&(ai(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fm=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},bs=function(e,t,i,n){var s=e._repeat,r=yt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:yt(r*(s+1)+e._rDelay*s):r,a>0&&!n&&Ao(e,e._tTime=e._tDur*a),e.parent&&To(e),i||Bn(e.parent,e),e},Mh=function(e){return e instanceof At?Bn(e):bs(e,e._dur)},zm={_start:0,endTime:Mr,totalDuration:Mr},ni=function o(e,t,i){var n=e.labels,s=e._recent||zm,r=e.duration()>=ri?s.endTime(!1):e._dur,a,l,c;return ot(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=r),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Et(i)?i[0]:i).totalDuration()),a>1?o(e,t.substr(0,a-1),i)+l:r+l)):t==null?r:+t},br=function(e,t,i){var n=Hi(t[1]),s=(n?2:1)+(e<2?0:1),r=t[s],a,l;if(n&&(r.duration=t[1]),r.parent=i,e){for(a=r,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qt(l.vars.inherit)&&l.parent;r.immediateRender=qt(a.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new nt(t[0],r,t[s+1])},pn=function(e,t){return e||e===0?t(e):t},Dr=function(e,t,i){return i<e?e:i>t?t:i},bt=function(e,t){return!ot(e)||!(t=Sm.exec(e))?"":t[1]},Om=function(e,t,i){return pn(i,function(n){return Dr(e,t,n)})},Rl=[].slice,Gh=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==si},Nm=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ot(n)&&!t||Gh(n,1)?(s=i).push.apply(s,oi(n)):i.push(n)})||i},oi=function(e,t,i){return st&&!t&&st.selector?st.selector(e):ot(e)&&!i&&(Al||!ws())?Rl.call((t||Bl).querySelectorAll(e),0):Et(e)?Nm(e,i):Gh(e)?Rl.call(e,0):e?[e]:[]},Ll=function(e){return e=oi(e)[0]||xo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return oi(t,i.querySelectorAll?i:i===e?xo("Invalid scope")||Bl.createElement("div"):e)}},Wh=function(e){return e.sort(function(){return .5-Math.random()})},qh=function(e){if(Qe(e))return e;var t=Ei(e)?e:{each:e},i=Un(t.ease),n=t.from||0,s=parseFloat(t.base)||0,r={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,u=n,h=n;return ot(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],h=n[1]),function(d,m,g){var p=(g||t).length,f=r[p],_,y,v,b,w,S,E,x,M;if(!f){if(M=t.grid==="auto"?0:(t.grid||[1,ri])[1],!M){for(E=-ri;E<(E=g[M++].getBoundingClientRect().left)&&M<p;);M--}for(f=r[p]=[],_=l?Math.min(M,p)*u-.5:n%M,y=M===ri?0:l?p*h/M-.5:n/M|0,E=0,x=ri,S=0;S<p;S++)v=S%M-_,b=y-(S/M|0),f[S]=w=c?Math.abs(c==="y"?b:v):Eh(v*v+b*b),w>E&&(E=w),w<x&&(x=w);n==="random"&&Wh(f),f.max=E-x,f.min=x,f.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(M>p?p-1:c?c==="y"?p/M:M:Math.max(M,p/M))||0)*(n==="edges"?-1:1),f.b=p<0?s-p:s,f.u=bt(t.amount||t.each)||0,i=i&&p<0?$h(i):i}return p=(f[d]-f.min)/f.max||0,yt(f.b+(i?i(p):p)*f.v)+f.u}},Il=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=yt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Hi(i)?0:bt(i))}},Xh=function(e,t){var i=Et(e),n,s;return!i&&Ei(e)&&(n=i=e.radius||ri,e.values?(e=oi(e.values),(s=!Hi(e[0]))&&(n*=n)):e=Il(e.increment)),pn(t,i?Qe(e)?function(r){return s=e(r),Math.abs(s-r)<=n?s:r}:function(r){for(var a=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=ri,u=0,h=e.length,d,m;h--;)s?(d=e[h].x-a,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!n||c<=n?e[u]:r,s||u===r||Hi(r)?u:u+bt(r)}:Il(e))},Yh=function(e,t,i,n){return pn(Et(e)?!t:i===!0?!!(i=0):!n,function(){return Et(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},km=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,r){return r(s)},n)}},Bm=function(e,t){return function(i){return e(parseFloat(i))+(t||bt(i))}},Um=function(e,t,i){return Jh(e,t,0,1,i)},Zh=function(e,t,i){return pn(i,function(n){return e[~~t(n)]})},Vm=function o(e,t,i){var n=t-e;return Et(e)?Zh(e,o(0,e.length),t):pn(i,function(s){return(n+(s-e)%n)%n+e})},Hm=function o(e,t,i){var n=t-e,s=n*2;return Et(e)?Zh(e,o(0,e.length-1),t):pn(i,function(r){return r=(s+(r-e)%s)%s||0,e+(r>n?s-r:r)})},Ds=function(e){for(var t=0,i="",n,s,r,a;~(n=e.indexOf("random(",t));)r=e.indexOf(")",n),a=e.charAt(n+7)==="[",s=e.substr(n+7,r-n-7).match(a?Rh:Tl),i+=e.substr(t,n-t)+Yh(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=r+1;return i+e.substr(t,e.length-t)},Jh=function(e,t,i,n,s){var r=t-e,a=n-i;return pn(s,function(l){return i+((l-e)/r*a||0)})},Gm=function o(e,t,i,n){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var r=ot(e),a={},l,c,u,h,d;if(i===!0&&(n=1)&&(i=null),r)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,s=function(g){g*=h;var p=Math.min(d,~~g);return u[p](g-p)},i=t}else n||(e=Vn(Et(e)?[]:{},e));if(!u){for(l in t)Xl.call(a,e,l,"get",t[l]);s=function(g){return jl(g,a)||(r?e.p:e)}}}return pn(i,s)},Sh=function(e,t,i){var n=e.labels,s=ri,r,a,l;for(r in n)a=n[r]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=r,s=a);return l},ai=function(e,t,i){var n=e.vars,s=n[t],r=st,a=e._ctx,l,c,u;if(!!s)return l=n[t+"Params"],c=n.callbackScope||e,i&&hn.length&&vo(),a&&(st=a),u=l?s.apply(c,l):s.call(c),st=r,u},xr=function(e){return fn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&ai(e,"onInterrupt"),e},xs,Wm=function(e){e=!e.name&&e.default||e;var t=e.name,i=Qe(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Mr,render:jl,add:Xl,kill:og,modifier:rg,rawVars:0},r={targetTest:0,get:0,getSetter:Eo,aliases:{},register:0};if(ws(),e!==n){if(Ht[t])return;li(n,li(yo(e,s),r)),Vn(n.prototype,Vn(s,yo(e,r))),Ht[n.prop=t]=n,e.targetTest&&(mo.push(n),Ul[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fh(t,n),e.register&&e.register(Lt,n,Ft)},qe=255,vr={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},yl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*qe+.5|0},Kh=function(e,t,i){var n=e?Hi(e)?[e>>16,e>>8&qe,e&qe]:0:vr.black,s,r,a,l,c,u,h,d,m,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vr[e])n=vr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),a=e.charAt(3),e="#"+s+s+r+r+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&qe,n&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Tl),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,n.length>3&&(n[3]*=1),n[0]=yl(l+1/3,s,r),n[1]=yl(l,s,r),n[2]=yl(l-1/3,s,r);else if(~e.indexOf("="))return n=e.match(Nl),i&&n.length<4&&(n[3]=1),n}else n=e.match(Tl)||vr.transparent;n=n.map(Number)}return t&&!g&&(s=n[0]/qe,r=n[1]/qe,a=n[2]/qe,h=Math.max(s,r,a),d=Math.min(s,r,a),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===s?(r-a)/m+(r<a?6:0):h===r?(a-s)/m+2:(s-r)/m+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},jh=function(e){var t=[],i=[],n=-1;return e.split(Vi).forEach(function(s){var r=s.match(Hn)||[];t.push.apply(t,r),i.push(n+=r.length+1)}),t.c=i,t},Dh=function(e,t,i){var n="",s=(e+n).match(Vi),r=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Kh(d,t,1))&&r+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=jh(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Vi,"1").split(Hn),h=c.length-1;a<h;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Vi),h=c.length-1;a<h;a++)n+=c[a]+s[a];return n+c[h]},Vi=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),qm=/hsl[a]?\(/,Wl=function(e){var t=e.join(" "),i;if(Vi.lastIndex=0,Vi.test(t))return i=qm.test(t),e[1]=Dh(e[1],i),e[0]=Dh(e[0],i,jh(e[1])),!0},Sr,Gt=function(){var o=Date.now,e=500,t=33,i=o(),n=i,s=1e3/240,r=s,a=[],l,c,u,h,d,m,g=function p(f){var _=o()-n,y=f===!0,v,b,w,S;if(_>e&&(i+=_-t),n+=_,w=n-i,v=w-r,(v>0||y)&&(S=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,r+=v+(v>=s?4:s-v),b=1),y||(l=c(p)),b)for(m=0;m<a.length;m++)a[m](w,d,S,f)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(f){return d/(1e3/(f||60))},wake:function(){Lh&&(!Al&&Ch()&&(si=Al=window,Bl=si.document||{},Kt.gsap=Lt,(si.gsapVersions||(si.gsapVersions=[])).push(Lt.version),Ih(_o||si.GreenSockGlobals||!si.gsap&&si||{}),u=si.requestAnimationFrame),l&&h.sleep(),c=u||function(f){return setTimeout(f,r-h.time*1e3+1|0)},Sr=1,g(2))},sleep:function(){(u?si.cancelAnimationFrame:clearTimeout)(l),Sr=0,c=Mr},lagSmoothing:function(f,_){e=f||1/Ge,t=Math.min(_,e,0)},fps:function(f){s=1e3/(f||240),r=h.time*1e3+s},add:function(f,_,y){var v=_?function(b,w,S,E){f(b,w,S,E),h.remove(v)}:f;return h.remove(f),a[y?"unshift":"push"](v),ws(),v},remove:function(f,_){~(_=a.indexOf(f))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},h}(),ws=function(){return!Sr&&Gt.wake()},Le={},Xm=/^[\d.\-M][\d.\-,\s]/,Ym=/["']/g,Zm=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,r=i.length,a,l,c;s<r;s++)l=i[s],a=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(Ym,"").trim():+c,n=l.substr(a+1).trim();return t},Jm=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Km=function(e){var t=(e+"").split("("),i=Le[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Zm(t[1])]:Jm(e).split(",").map(Nh)):Le._CE&&Xm.test(e)?Le._CE("",e):i},$h=function(e){return function(t){return 1-e(1-t)}},Qh=function o(e,t){for(var i=e._first,n;i;)i instanceof At?o(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?o(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Un=function(e,t){return e&&(Qe(e)?e:Le[e]||Km(e))||t},Wn=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},r;return It(e,function(a){Le[a]=Kt[a]=s,Le[r=a.toLowerCase()]=i;for(var l in s)Le[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Le[a+"."+l]=s[l]}),s},ed=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bl=function o(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),r=s/Dl*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*Mm((u-r)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ed(a);return s=Dl/s,l.config=function(c,u){return o(e,c,u)},l},wl=function o(e,t){t===void 0&&(t=1.70158);var i=function(r){return r?--r*r*((t+1)*r+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ed(i);return n.config=function(s){return o(e,s)},n};It("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Wn(o+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Le.Linear.easeNone=Le.none=Le.Linear.easeIn;Wn("Elastic",bl("in"),bl("out"),bl());(function(o,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?o*a*a:a<i?o*Math.pow(a-1.5/e,2)+.75:a<n?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Wn("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Wn("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Wn("Circ",function(o){return-(Eh(1-o*o)-1)});Wn("Sine",function(o){return o===1?1:-wm(o*ym)+1});Wn("Back",wl("in"),wl("out"),wl());Le.SteppedEase=Le.steps=Kt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,r=1-Ge;return function(a){return((n*Dr(0,r,a)|0)+s)*i}}};vs.ease=Le["quad.out"];It("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Vl+=o+","+o+"Params,"});var ql=function(e,t){this.id=bm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gl,this.set=t?t.getSetter:Eo},Ms=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Sr||Gt.wake()}var e=o.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ao(this,i),!s._dp||s.parent||Uh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ai(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ge||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Oh(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+wh(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+wh(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ys(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?bo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ge?0:this._rts,this.totalTime(Dr(-this._delay,this._tDur,n),!0),To(this),Pm(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Ai(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(qt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bo(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Tm);var n=Wt;return Wt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Wt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Mh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Mh(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(ni(this,i),qt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,qt(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ge:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Ge)},e.eventCallback=function(i,n,s){var r=this.vars;return arguments.length>1?(n?(r[i]=n,s&&(r[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete r[i],this):r[i]},e.then=function(i){var n=this;return new Promise(function(s){var r=Qe(i)?i:kh,a=function(){var c=n.then;n.then=null,Qe(r)&&(r=r(n))&&(r.then||r===n)&&(n.then=c),s(r),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){xr(this)},o}();li(Ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var At=function(o){Ah(e,o);function e(i,n){var s;return i===void 0&&(i={}),s=o.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=qt(i.sortChildren),Ke&&Ai(i.parent||Ke,Ui(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Vh(Ui(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,r){return br(0,arguments,this),this},t.from=function(n,s,r){return br(1,arguments,this),this},t.fromTo=function(n,s,r,a){return br(2,arguments,this),this},t.set=function(n,s,r){return s.duration=0,s.parent=this,yr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nt(n,s,ni(this,r),1),this},t.call=function(n,s,r){return Ai(this,nt.delayedCall(0,n,s),r)},t.staggerTo=function(n,s,r,a,l,c,u){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new nt(n,r,ni(this,l)),this},t.staggerFrom=function(n,s,r,a,l,c,u){return r.runBackwards=1,yr(r).immediateRender=qt(r.immediateRender),this.staggerTo(n,s,r,a,l,c,u)},t.staggerFromTo=function(n,s,r,a,l,c,u,h){return a.startAt=r,yr(a).immediateRender=qt(a.immediateRender),this.staggerTo(n,s,a,l,c,u,h)},t.render=function(n,s,r){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:yt(n),h=this._zTime<0!=n<0&&(this._initted||!c),d,m,g,p,f,_,y,v,b,w,S,E;if(this!==Ke&&u>l&&n>=0&&(u=l),u!==this._tTime||r||h){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),d=u,b=this._start,v=this._ts,_=!v,h&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,f=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(f*100+n,s,r);if(d=yt(u%f),u===l?(p=this._repeat,d=c):(p=~~(u/f),p&&p===u/f&&(d=c,p--),d>c&&(d=c)),w=ys(this._tTime,f),!a&&this._tTime&&w!==p&&(w=p),S&&p&1&&(d=c-d,E=1),p!==w&&!this._lock){var x=S&&w&1,M=x===(S&&p&1);if(p<w&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(E?0:yt(p*f)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Qh(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Fm(this,yt(a),yt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&d&&!s&&(ai(this,"onStart"),this._tTime!==u))return this;if(d>=a&&n>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(n,s,r);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,r),d!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-Ge);break}}m=g}else{m=this._last;for(var L=n<0?n:d;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(n,s,r);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,s,r||Wt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=L?-Ge:Ge);break}}m=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Ge)._zTime=d>=a?1:-1,this._ts))return this._start=b,To(this),this.render(n,s,r);this._onUpdate&&!s&&ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fn(this,1),!s&&!(n<0&&!a)&&(u||a||!l)&&(ai(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var r=this;if(Hi(s)||(s=ni(this,s,n)),!(n instanceof Ms)){if(Et(n))return n.forEach(function(a){return r.add(a,s)}),this;if(ot(n))return this.addLabel(n,s);if(Qe(n))n=nt.delayedCall(0,n);else return this}return this!==n?Ai(this,n,s):this},t.getChildren=function(n,s,r,a){n===void 0&&(n=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-ri);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nt?s&&l.push(c):(r&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===n)return s[r]},t.remove=function(n){return ot(n)?this.removeLabel(n):Qe(n)?this.killTweensOf(n):(Do(this,n),n===this._recent&&(this._recent=this._last),Bn(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(Gt.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),o.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=ni(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,r){var a=nt.delayedCall(0,s||Mr,r);return a.data="isPause",this._hasPause=1,Ai(this,a,ni(this,n))},t.removePause=function(n){var s=this._first;for(n=ni(this,n);s;)s._start===n&&s.data==="isPause"&&fn(s),s=s._next},t.killTweensOf=function(n,s,r){for(var a=this.getTweensOf(n,r),l=a.length;l--;)un!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var r=[],a=oi(n),l=this._first,c=Hi(s),u;l;)l instanceof nt?Am(l._targets,a)&&(c?(!un||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(a,s)).length&&r.push.apply(r,u),l=l._next;return r},t.tweenTo=function(n,s){s=s||{};var r=this,a=ni(r,n),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=nt.to(r,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale())||Ge,onStart:function(){if(r.pause(),!m){var f=s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==f&&bs(g,f,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(n,s,r){return this.tweenTo(s,li({startAt:{time:ni(this,n)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Sh(this,ni(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Sh(this,ni(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ge)},t.shiftChildren=function(n,s,r){r===void 0&&(r=0);for(var a=this._first,l=this.labels,c;a;)a._start>=r&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=r&&(l[c]+=n);return Bn(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return o.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Bn(this)},t.totalDuration=function(n){var s=0,r=this,a=r._last,l=ri,c,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-n:n));if(r._dirty){for(h=r.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&r._sort&&a._ts&&!r._lock?(r._lock=1,Ai(r,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;bs(r,r===Ke&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(n){if(Ke._ts&&(Oh(Ke,bo(n,Ke)),zh=Gt.frame),Gt.frame>=yh){yh+=Xt.autoSleep||120;var s=Ke._first;if((!s||!s._ts)&&Xt.autoSleep&&Gt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gt.sleep()}}},e}(Ms);li(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var jm=function(e,t,i,n,s,r,a){var l=new Ft(this._pt,e,t,0,1,Kl,null,s),c=0,u=0,h,d,m,g,p,f,_,y;for(l.b=i,l.e=n,i+="",n+="",(_=~n.indexOf("random("))&&(n=Ds(n)),r&&(y=[i,n],r(y,e,t),i=y[0],n=y[1]),d=i.match(xl)||[];h=xl.exec(n);)g=h[0],p=n.substring(c,h.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(f=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:f,c:g.charAt(1)==="="?Gn(f,g)-f:parseFloat(g)-f,m:m&&m<4?Math.round:0},c=xl.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(kl.test(n)||_)&&(l.e=0),this._pt=l,l},Xl=function(e,t,i,n,s,r,a,l,c,u){Qe(n)&&(n=n(s||0,e,r));var h=e[t],d=i!=="get"?i:Qe(h)?c?e[t.indexOf("set")||!Qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=Qe(h)?c?ig:nd:Jl,g;if(ot(n)&&(~n.indexOf("random(")&&(n=Ds(n)),n.charAt(1)==="="&&(g=Gn(d,n)+(bt(d)||0),(g||g===0)&&(n=g))),!u||d!==n||Fl)return!isNaN(d*n)&&n!==""?(g=new Ft(this._pt,e,t,+d||0,n-(d||0),typeof h=="boolean"?sg:sd,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&So(t,n),jm.call(this,e,t,d,n,m,l||Xt.stringFilter,c))},$m=function(e,t,i,n,s){if(Qe(e)&&(e=wr(e,s,t,i,n)),!Ei(e)||e.style&&e.nodeType||Et(e)||Ph(e))return ot(e)?wr(e,s,t,i,n):e;var r={},a;for(a in e)r[a]=wr(e[a],s,t,i,n);return r},Yl=function(e,t,i,n,s,r){var a,l,c,u;if(Ht[e]&&(a=new Ht[e]).init(s,a.rawVars?t[e]:$m(t[e],n,s,r,i),i,n,r)!==!1&&(i._pt=l=new Ft(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xs))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},un,Fl,Zl=function o(e,t,i){var n=e.vars,s=n.ease,r=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.onUpdateParams,h=n.callbackScope,d=n.runBackwards,m=n.yoyoEase,g=n.keyframes,p=n.autoRevert,f=e._dur,_=e._startAt,y=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:y,w=e._overwrite==="auto"&&!Ol,S=e.timeline,E,x,M,L,H,q,I,P,F,R,B,z,T;if(S&&(!g||!s)&&(s="none"),e._ease=Un(s,vs.ease),e._yEase=m?$h(Un(m===!0?s:m,vs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!S&&!!n.runBackwards,!S||g&&!n.stagger){if(P=y[0]?dn(y[0]).harness:0,z=P&&n[P.prop],E=yo(n,Ul),_&&(_._zTime<0&&_.progress(1),t<0&&d&&a&&!p?_.render(-1,!0):_.revert(d&&f?po:Dm),_._lazy=0),r){if(fn(e._startAt=nt.set(y,li({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:qt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},r))),e._startAt._dp=0,t<0&&(Wt||!a&&!p)&&e._startAt.revert(po),a&&f&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(d&&f&&!_){if(t&&(a=!1),M=li({overwrite:!1,data:"isFromStart",lazy:a&&qt(l),immediateRender:a,stagger:0,parent:v},E),z&&(M[P.prop]=z),fn(e._startAt=nt.set(y,M)),e._startAt._dp=0,t<0&&(Wt?e._startAt.revert(po):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,Ge,Ge);else if(!t)return}for(e._pt=e._ptCache=0,l=f&&qt(l)||l&&!f,x=0;x<y.length;x++){if(H=y[x],I=H._gsap||Hl(y)[x]._gsap,e._ptLookup[x]=R={},El[I.id]&&hn.length&&vo(),B=b===y?x:b.indexOf(H),P&&(F=new P).init(H,z||E,e,B,b)!==!1&&(e._pt=L=new Ft(e._pt,H,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(N){R[N]=L}),F.priority&&(q=1)),!P||z)for(M in E)Ht[M]&&(F=Yl(M,E,e,B,H,b))?F.priority&&(q=1):R[M]=L=Xl.call(e,H,M,"get",E[M],B,b,0,n.stringFilter);e._op&&e._op[x]&&e.kill(H,e._op[x]),w&&e._pt&&(un=e,Ke.killTweensOf(H,R,e.globalTime(t)),T=!e.parent,un=0),e._pt&&l&&(El[I.id]=1)}q&&$l(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!T,g&&t<=0&&S.render(ri,!0,!0)},Qm=function(e,t,i,n,s,r,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,d;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(c=h[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Fl=1,e.vars[t]="+=0",Zl(e,a),Fl=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(n||n===0)&&!s?n:c.s+(n||0)+r*c.c,c.c=i-c.s,u.e&&(u.e=et(i)+bt(u.e)),u.b&&(u.b=c.s+bt(u.b))},eg=function(e,t){var i=e[0]?dn(e[0]).harness:0,n=i&&i.aliases,s,r,a,l;if(!n)return t;s=Vn({},t);for(r in n)if(r in s)for(l=n[r].split(","),a=l.length;a--;)s[l[a]]=s[r];return s},tg=function(e,t,i,n){var s=t.ease||n||"power1.inOut",r,a;if(Et(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(r in t)a=i[r]||(i[r]=[]),r==="ease"||a.push({t:parseFloat(e),v:t[r],e:s})},wr=function(e,t,i,n,s){return Qe(e)?e.call(t,i,n,s):ot(e)&&~e.indexOf("random(")?Ds(e):e},td=Vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",id={};It(td+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return id[o]=1});var nt=function(o){Ah(e,o);function e(i,n,s,r){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=o.call(this,r?n:yr(n))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,p=l.defaults,f=l.scrollTrigger,_=l.yoyoEase,y=n.parent||Ke,v=(Et(i)||Ph(i)?Hi(i[0]):"length"in n)?[i]:oi(i),b,w,S,E,x,M,L,H;if(a._targets=v.length?Hl(v):xo("GSAP target "+i+" not found. https://greensock.com",!Xt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||fo(c)||fo(u)){if(n=a.vars,b=a.timeline=new At({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:v}),b.kill(),b.parent=b._dp=Ui(a),b._start=0,d||fo(c)||fo(u)){if(E=v.length,L=d&&qh(d),Ei(d))for(x in d)~td.indexOf(x)&&(H||(H={}),H[x]=d[x]);for(w=0;w<E;w++)S=yo(n,id),S.stagger=0,_&&(S.yoyoEase=_),H&&Vn(S,H),M=v[w],S.duration=+wr(c,Ui(a),w,M,v),S.delay=(+wr(u,Ui(a),w,M,v)||0)-a._delay,!d&&E===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),b.to(M,S,L?L(w,M,v):0),b._ease=Le.none;b.duration()?c=u=0:a.timeline=0}else if(g){yr(li(b.vars.defaults,{ease:"none"})),b._ease=Un(g.ease||n.ease||"none");var q=0,I,P,F;if(Et(g))g.forEach(function(R){return b.to(v,R,">")}),b.duration();else{S={};for(x in g)x==="ease"||x==="easeEach"||tg(x,g[x],S,g.easeEach);for(x in S)for(I=S[x].sort(function(R,B){return R.t-B.t}),q=0,w=0;w<I.length;w++)P=I[w],F={ease:P.e,duration:(P.t-(w?I[w-1].t:0))/100*c},F[x]=P.v,b.to(v,F,q),q+=F.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return m===!0&&!Ol&&(un=Ui(a),Ke.killTweensOf(v),un=0),Ai(y,Ui(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(h||!c&&!g&&a._start===yt(y._time)&&qt(h)&&Rm(Ui(a))&&y.data!=="nested")&&(a._tTime=-Ge,a.render(Math.max(0,-u)||0)),f&&Vh(Ui(a),f),a}var t=e.prototype;return t.render=function(n,s,r){var a=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-Ge&&!u?l:n<Ge?0:n,d,m,g,p,f,_,y,v,b;if(!c)Im(this,n,s,r);else if(h!==this._tTime||!n||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,v=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+n,s,r);if(d=yt(h%p),h===l?(g=this._repeat,d=c):(g=~~(h/p),g&&g===h/p&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,d=c-d),f=ys(this._tTime,p),d===a&&!r&&this._initted)return this._tTime=h,this;g!==f&&(v&&this._yEase&&Qh(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=r=1,this.render(yt(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(Hh(this,u?n:d,r,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(n,s,r)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!s&&(ai(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;v&&v.render(n<0?n:!d&&_?-Ge:v._dur*v._ease(d/this._dur),s,r)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Cl(this,n,s,r),ai(this,"onUpdate")),this._repeat&&g!==f&&this.vars.onRepeat&&!s&&this.parent&&ai(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cl(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&fn(this,1),!s&&!(u&&!a)&&(h||a||_)&&(ai(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),o.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,r,a){Sr||Gt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Zl(this,l),c=this._ease(l/this._dur),Qm(this,n,s,r,a,c,l)?this.resetTo(n,s,r,a):(Ao(this,0),this.parent||Bh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,un&&un.vars.overwrite!==!0)._first||xr(this),this.parent&&r!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,l=n?oi(n):a,c=this._ptLookup,u=this._pt,h,d,m,g,p,f,_;if((!s||s==="all")&&Cm(a,l))return s==="all"&&(this._pt=0),xr(this);for(h=this._op=this._op||[],s!=="all"&&(ot(s)&&(p={},It(s,function(y){return p[y]=1}),s=p),s=eg(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(h[_]=s,g=d,m={}):(m=h[_]=h[_]||{},g=s);for(p in g)f=d&&d[p],f&&((!("kill"in f.d)||f.d.kill(p)===!0)&&Do(this,f,"_pt"),delete d[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&xr(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return br(1,arguments)},e.delayedCall=function(n,s,r,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},e.fromTo=function(n,s,r){return br(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,r){return Ke.killTweensOf(n,s,r)},e}(Ms);li(nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});It("staggerTo,staggerFrom,staggerFromTo",function(o){nt[o]=function(){var e=new At,t=Rl.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Jl=function(e,t,i){return e[t]=i},nd=function(e,t,i){return e[t](i)},ig=function(e,t,i,n){return e[t](n.fp,i)},ng=function(e,t,i){return e.setAttribute(t,i)},Eo=function(e,t){return Qe(e[t])?nd:Mo(e[t])&&e.setAttribute?ng:Jl},sd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Kl=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},jl=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},rg=function(e,t,i,n){for(var s=this._pt,r;s;)r=s._next,s.p===n&&s.modifier(e,t,i),s=r},og=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Do(this,t,"_pt"):t.dep||(i=1),t=n;return!i},ag=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},$l=function(e){for(var t=e._pt,i,n,s,r;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:r)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:r=t,t=i}e._pt=s},Ft=function(){function o(t,i,n,s,r,a,l,c,u){this.t=i,this.s=s,this.c=r,this.p=n,this.r=a||sd,this.d=l||this,this.set=c||Jl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=ag,this.m=i,this.mt=s,this.tween=n},o}();It(Vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ul[o]=1});Kt.TweenMax=Kt.TweenLite=nt;Kt.TimelineLite=Kt.TimelineMax=At;Ke=new At({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xt.stringFilter=Wl;var Ss=[],go={},lg=[],Th=0,Ml=function(e){return(go[e]||lg).map(function(t){return t()})},zl=function(){var e=Date.now(),t=[];e-Th>2&&(Ml("matchMediaInit"),Ss.forEach(function(i){var n=i.queries,s=i.conditions,r,a,l,c;for(a in n)r=si.matchMedia(n[a]).matches,r&&(l=1),r!==s[a]&&(s[a]=r,c=1);c&&(i.revert(),l&&t.push(i))}),Ml("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),Th=e,Ml("matchMedia"))},rd=function(){function o(t,i){this.selector=i&&Ll(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(i,n,s){Qe(i)&&(s=n,n=i,i=Qe);var r=this,a=function(){var c=st,u=r.selector,h;return c&&c!==r&&c.data.push(r),s&&(r.selector=Ll(s)),st=r,h=n.apply(r,arguments),Qe(h)&&r._r.push(h),st=c,r.selector=u,r.isReverted=!1,h};return r.last=a,i===Qe?a(r):i?r[i]=a:a},e.ignore=function(i){var n=st;st=null,i(this),st=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof o?i.push.apply(i,n.getTweens()):n instanceof nt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i){var r=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}))}),r.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Ms)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n){var a=Ss.indexOf(this);~a&&Ss.splice(a,1)}},e.revert=function(i){this.kill(i||{})},o}(),cg=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(i,n,s){Ei(i)||(i={matches:i});var r=new rd(0,s||this.scope),a=r.conditions={},l,c,u;this.contexts.push(r),n=r.add("onMatch",n),r.queries=i;for(c in i)c==="all"?u=1:(l=si.matchMedia(i[c]),l&&(Ss.indexOf(r)<0&&Ss.push(r),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(zl):l.addEventListener("change",zl)));return u&&n(r),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},o}(),wo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Wm(n)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return Ke.getTweensOf(e,t)},getProperty:function(e,t,i,n){ot(e)&&(e=oi(e)[0]);var s=dn(e||{}).get,r=i?kh:Nh;return i==="native"&&(i=""),e&&(t?r((Ht[t]&&Ht[t].get||s)(e,t,i,n)):function(a,l,c){return r((Ht[a]&&Ht[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=oi(e),e.length>1){var n=e.map(function(u){return Lt.quickSetter(u,t,i)}),s=n.length;return function(u){for(var h=s;h--;)n[h](u)}}e=e[0]||{};var r=Ht[t],a=dn(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=r?function(u){var h=new r;xs._pt=0,h.init(e,i?u+i:u,xs,0,[e]),h.render(1,h),xs._pt&&jl(1,xs)}:a.set(e,l);return r?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var n,s=Lt.to(e,Vn((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),r=function(l,c,u){return s.resetTo(t,l,c,u)};return r.tween=s,r},isTweening:function(e){return Ke.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Un(e.ease,vs.ease)),bh(vs,e||{})},config:function(e){return bh(Xt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,r=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Ht[a]&&!Kt[a]&&xo(t+" effect requires "+a+" plugin.")}),vl[t]=function(a,l,c){return i(oi(a),li(l||{},s),c)},r&&(At.prototype[t]=function(a,l,c){return this.add(vl[t](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Le[e]=Un(t)},parseEase:function(e,t){return arguments.length?Un(e,t):Le},getById:function(e){return Ke.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new At(e),n,s;for(i.smoothChildTiming=qt(e.smoothChildTiming),Ke.remove(i),i._dp=0,i._time=i._tTime=Ke._time,n=Ke._first;n;)s=n._next,(t||!(!n._dur&&n instanceof nt&&n.vars.onComplete===n._targets[0]))&&Ai(i,n,n._start-n._delay),n=s;return Ai(Ke,i,0),i},context:function(e,t){return e?new rd(e,t):st},matchMedia:function(e){return new cg(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||zl()},addEventListener:function(e,t){var i=go[e]||(go[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=go[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Vm,wrapYoyo:Hm,distribute:qh,random:Yh,snap:Xh,normalize:Um,getUnit:bt,clamp:Om,splitColor:Kh,toArray:oi,selector:Ll,mapRange:Jh,pipe:km,unitize:Bm,interpolate:Gm,shuffle:Wh},install:Ih,effects:vl,ticker:Gt,updateRoot:At.updateRoot,plugins:Ht,globalTimeline:Ke,core:{PropTween:Ft,globals:Fh,Tween:nt,Timeline:At,Animation:Ms,getCache:dn,_removeLinkedListItem:Do,reverting:function(){return Wt},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Ol=e}}};It("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return wo[o]=nt[o]});Gt.add(At.updateRoot);xs=wo.to({},{duration:0});var ug=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},hg=function(e,t){var i=e._targets,n,s,r;for(n in t)for(s=i.length;s--;)r=e._ptLookup[s][n],r&&(r=r.d)&&(r._pt&&(r=ug(r,n)),r&&r.modifier&&r.modifier(t[n],e,i[s],n))},Sl=function(e,t){return{name:e,rawVars:1,init:function(n,s,r){r._onInit=function(a){var l,c;if(ot(s)&&(l={},It(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}hg(a,s)}}}},Lt=wo.registerPlugin({name:"attr",init:function(e,t,i,n,s){var r,a,l;this.tween=i;for(r in t)l=e.getAttribute(r)||"",a=this.add(e,"setAttribute",(l||0)+"",t[r],n,s,0,0,r),a.op=r,a.b=l,this._props.push(r)},render:function(e,t){for(var i=t._pt;i;)Wt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Sl("roundProps",Il),Sl("modifiers"),Sl("snap",Xh))||wo;nt.version=At.version=Lt.version="3.11.3";Lh=1;Ch()&&ws();var dg=Le.Power0,fg=Le.Power1,pg=Le.Power2,mg=Le.Power3,gg=Le.Power4,_g=Le.Linear,xg=Le.Quad,vg=Le.Cubic,yg=Le.Quart,bg=Le.Quint,wg=Le.Strong,Mg=Le.Elastic,Sg=Le.Back,Dg=Le.SteppedEase,Tg=Le.Bounce,Ag=Le.Sine,Eg=Le.Expo,Cg=Le.Circ;var od,mn,As,rc,Zn,Pg,ad,oc,Rg=function(){return typeof window<"u"},qi={},Yn=180/Math.PI,Es=Math.PI/180,Ts=Math.atan2,ld=1e8,ac=/([A-Z])/g,Lg=/(left|right|width|margin|padding|x)/i,Ig=/[\s,\(]\S/,Wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Og=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},md=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ng=function(e,t,i){return e.style[t]=i},kg=function(e,t,i){return e.style.setProperty(t,i)},Bg=function(e,t,i){return e._gsap[t]=i},Ug=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Vg=function(e,t,i,n,s){var r=e._gsap;r.scaleX=r.scaleY=i,r.renderTransform(s,r)},Hg=function(e,t,i,n,s){var r=e._gsap;r[t]=i,r.renderTransform(s,r)},je="transform",gi=je+"Origin",Gg=function(e,t){var i=this,n=this.target,s=n.style;if(e in qi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return i.tfm[r]=Gi(n,r)}):this.tfm[e]=n._gsap.x?n._gsap[e]:Gi(n,e)),this.props.indexOf(je)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(gi,t,"")),e=je}(s||t)&&this.props.push(e,t,s[e])},_d=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Wg=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].replace(ac,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)n[r]=this.tfm[r];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=oc(),s&&!s.isStart&&!i[je]&&(_d(i),n.uncache=1)}},xd=function(e,t){var i={target:e,props:[],revert:Wg,save:Gg};return t&&t.split(",").forEach(function(n){return i.save(n)}),i},vd,ic=function(e,t){var i=mn.createElementNS?mn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mn.createElement(e);return i.style?i:mn.createElement(e)},Ci=function o(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(ac,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&o(e,Cs(t)||t,1)||""},cd="O,Moz,ms,Ms,Webkit".split(","),Cs=function(e,t,i){var n=t||Zn,s=n.style,r=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(cd[r]+e in s););return r<0?null:(r===3?"ms":r>=0?cd[r]:"")+e},nc=function(){Rg()&&window.document&&(od=window,mn=od.document,As=mn.documentElement,Zn=ic("div")||{style:{}},Pg=ic("div"),je=Cs(je),gi=je+"Origin",Zn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vd=!!Cs("perspective"),oc=Lt.core.reverting,rc=1)},Ql=function o(e){var t=ic("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,r;if(As.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),As.removeChild(t),this.style.cssText=s,r},ud=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},yd=function(e){var t;try{t=e.getBBox()}catch{t=Ql.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ql||(t=Ql.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ud(e,["x","cx","x1"])||0,y:+ud(e,["y","cy","y1"])||0,width:0,height:0}:t},bd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yd(e))},Ar=function(e,t){if(t){var i=e.style;t in qi&&t!==gi&&(t=je),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(ac,"-$1").toLowerCase())):i.removeAttribute(t)}},gn=function(e,t,i,n,s,r){var a=new Ft(e._pt,t,i,0,1,r?gd:md);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},hd={deg:1,rad:1,turn:1},qg={grid:1,flex:1},_n=function o(e,t,i,n){var s=parseFloat(i)||0,r=(i+"").trim().substr((s+"").length)||"px",a=Zn.style,l=Lg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=n==="px",m=n==="%",g,p,f,_;return n===r||!s||hd[n]||hd[r]?s:(r!=="px"&&!d&&(s=o(e,t,i,"px")),_=e.getCTM&&bd(e),(m||r==="%")&&(qi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],et(m?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(d?r:n),p=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===mn||!p.appendChild)&&(p=mn.body),f=p._gsap,f&&m&&f.width&&l&&f.time===Gt.time&&!f.uncache?et(s/f.width*h):((m||r==="%")&&!qg[Ci(p,"display")]&&(a.position=Ci(e,"position")),p===e&&(a.position="static"),p.appendChild(Zn),g=Zn[u],p.removeChild(Zn),a.position="absolute",l&&m&&(f=dn(p),f.time=Gt.time,f.width=p[u]),et(d?g*s/h:g&&s?h/g*s:0))))},Gi=function(e,t,i,n){var s;return rc||nc(),t in Wi&&t!=="transform"&&(t=Wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(s=Cr(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Po(Ci(e,gi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Co[t]&&Co[t](e,t,i)||Ci(e,t)||Gl(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?_n(e,t,s,i)+i:s},Xg=function(e,t,i,n){if(!i||i==="none"){var s=Cs(t,e,1),r=s&&Ci(e,s,1);r&&r!==i?(t=s,i=r):t==="borderColor"&&(i=Ci(e,"borderTopColor"))}var a=new Ft(this._pt,e.style,t,0,1,Kl),l=0,c=0,u,h,d,m,g,p,f,_,y,v,b,w;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=Ci(e,t)||n,e.style[t]=i),u=[i,n],Wl(u),i=u[0],n=u[1],d=i.match(Hn)||[],w=n.match(Hn)||[],w.length){for(;h=Hn.exec(n);)f=h[0],y=n.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),f!==(p=d[c++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),f.charAt(1)==="="&&(f=Gn(m,f)+b),_=parseFloat(f),v=f.substr((_+"").length),l=Hn.lastIndex-v.length,v||(v=v||Xt.units[t]||b,l===n.length&&(n+=v,a.e+=v)),b!==v&&(m=_n(e,t,p,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?gd:md;return kl.test(n)&&(a.e=0),this._pt=a,a},dd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yg=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=dd[i]||i,t[1]=dd[n]||n,t.join(" ")},Zg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,r=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qi[a]&&(l=1,a=a==="transformOrigin"?gi:je),Ar(i,a);l&&(Ar(i,je),r&&(r.svg&&i.removeAttribute("transform"),Cr(i,1),r.uncache=1,_d(n)))}},Co={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var r=e._pt=new Ft(e._pt,t,i,0,0,Zg);return r.u=n,r.pr=-10,r.tween=s,e._props.push(i),1}}},Er=[1,0,0,1,0,0],wd={},Md=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fd=function(e){var t=Ci(e,je);return Md(t)?Er:t.substr(7).match(Nl).map(et)},lc=function(e,t){var i=e._gsap||dn(e),n=e.style,s=fd(e),r,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Er:s):(s===Er&&!e.offsetParent&&e!==As&&!i.svg&&(l=n.display,n.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(c=1,a=e.nextElementSibling,As.appendChild(e)),s=fd(e),l?n.display=l:Ar(e,"display"),c&&(a?r.insertBefore(e,a):r?r.appendChild(e):As.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sc=function(e,t,i,n,s,r){var a=e._gsap,l=s||lc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,m=l[0],g=l[1],p=l[2],f=l[3],_=l[4],y=l[5],v=t.split(" "),b=parseFloat(v[0])||0,w=parseFloat(v[1])||0,S,E,x,M;i?l!==Er&&(E=m*f-g*p)&&(x=b*(f/E)+w*(-p/E)+(p*y-f*_)/E,M=b*(-g/E)+w*(m/E)-(m*y-g*_)/E,b=x,w=M):(S=yd(e),b=S.x+(~v[0].indexOf("%")?b/100*S.width:b),w=S.y+(~(v[1]||v[0]).indexOf("%")?w/100*S.height:w)),n||n!==!1&&a.smooth?(_=b-c,y=w-u,a.xOffset=h+(_*m+y*p)-_,a.yOffset=d+(_*g+y*f)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=w,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[gi]="0px 0px",r&&(gn(r,a,"xOrigin",c,b),gn(r,a,"yOrigin",u,w),gn(r,a,"xOffset",h,a.xOffset),gn(r,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+w)},Cr=function(e,t){var i=e._gsap||new ql(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,r="px",a="deg",l=getComputedStyle(e),c=Ci(e,gi)||"0",u,h,d,m,g,p,f,_,y,v,b,w,S,E,x,M,L,H,q,I,P,F,R,B,z,T,N,X,G,$,te,se;return u=h=d=p=f=_=y=v=b=0,m=g=1,i.svg=!!(e.getCTM&&bd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[je]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[je]!=="none"?l[je]:"")),n.scale=n.rotate=n.translate="none"),E=lc(e,i.svg),i.svg&&(i.uncache?(z=e.getBBox(),c=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),sc(e,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,E)),w=i.xOrigin||0,S=i.yOrigin||0,E!==Er&&(H=E[0],q=E[1],I=E[2],P=E[3],u=F=E[4],h=R=E[5],E.length===6?(m=Math.sqrt(H*H+q*q),g=Math.sqrt(P*P+I*I),p=H||q?Ts(q,H)*Yn:0,y=I||P?Ts(I,P)*Yn+p:0,y&&(g*=Math.abs(Math.cos(y*Es))),i.svg&&(u-=w-(w*H+S*I),h-=S-(w*q+S*P))):(se=E[6],$=E[7],N=E[8],X=E[9],G=E[10],te=E[11],u=E[12],h=E[13],d=E[14],x=Ts(se,G),f=x*Yn,x&&(M=Math.cos(-x),L=Math.sin(-x),B=F*M+N*L,z=R*M+X*L,T=se*M+G*L,N=F*-L+N*M,X=R*-L+X*M,G=se*-L+G*M,te=$*-L+te*M,F=B,R=z,se=T),x=Ts(-I,G),_=x*Yn,x&&(M=Math.cos(-x),L=Math.sin(-x),B=H*M-N*L,z=q*M-X*L,T=I*M-G*L,te=P*L+te*M,H=B,q=z,I=T),x=Ts(q,H),p=x*Yn,x&&(M=Math.cos(x),L=Math.sin(x),B=H*M+q*L,z=F*M+R*L,q=q*M-H*L,R=R*M-F*L,H=B,F=z),f&&Math.abs(f)+Math.abs(p)>359.9&&(f=p=0,_=180-_),m=et(Math.sqrt(H*H+q*q+I*I)),g=et(Math.sqrt(R*R+se*se)),x=Ts(F,R),y=Math.abs(x)>2e-4?x*Yn:0,b=te?1/(te<0?-te:te):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Md(Ci(e,je)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+r,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+r,i.z=d+r,i.scaleX=et(m),i.scaleY=et(g),i.rotation=et(p)+a,i.rotationX=et(f)+a,i.rotationY=et(_)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=b+r,(i.zOrigin=parseFloat(c.split(" ")[2])||0)&&(n[gi]=Po(c)),i.xOffset=i.yOffset=0,i.force3D=Xt.force3D,i.renderTransform=i.svg?Kg:vd?Sd:Jg,i.uncache=0,i},Po=function(e){return(e=e.split(" "))[0]+" "+e[1]},ec=function(e,t,i){var n=bt(t);return et(parseFloat(t)+parseFloat(_n(e,"x",i+"px",n)))+n},Jg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sd(e,t)},qn="0deg",Tr="0px",Xn=") ",Sd=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,r=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,m=i.skewY,g=i.scaleX,p=i.scaleY,f=i.transformPerspective,_=i.force3D,y=i.target,v=i.zOrigin,b="",w=_==="auto"&&e&&e!==1||_===!0;if(v&&(h!==qn||u!==qn)){var S=parseFloat(u)*Es,E=Math.sin(S),x=Math.cos(S),M;S=parseFloat(h)*Es,M=Math.cos(S),r=ec(y,r,E*M*-v),a=ec(y,a,-Math.sin(S)*-v),l=ec(y,l,x*M*-v+v)}f!==Tr&&(b+="perspective("+f+Xn),(n||s)&&(b+="translate("+n+"%, "+s+"%) "),(w||r!==Tr||a!==Tr||l!==Tr)&&(b+=l!==Tr||w?"translate3d("+r+", "+a+", "+l+") ":"translate("+r+", "+a+Xn),c!==qn&&(b+="rotate("+c+Xn),u!==qn&&(b+="rotateY("+u+Xn),h!==qn&&(b+="rotateX("+h+Xn),(d!==qn||m!==qn)&&(b+="skew("+d+", "+m+Xn),(g!==1||p!==1)&&(b+="scale("+g+", "+p+Xn),y.style[je]=b||"translate(0, 0)"},Kg=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,r=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,m=i.target,g=i.xOrigin,p=i.yOrigin,f=i.xOffset,_=i.yOffset,y=i.forceCSS,v=parseFloat(r),b=parseFloat(a),w,S,E,x,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Es,c*=Es,w=Math.cos(l)*h,S=Math.sin(l)*h,E=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=Es,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,x*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,S*=M)),w=et(w),S=et(S),E=et(E),x=et(x)):(w=h,x=d,S=E=0),(v&&!~(r+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=_n(m,"x",r,"px"),b=_n(m,"y",a,"px")),(g||p||f||_)&&(v=et(v+g-(g*w+p*E)+f),b=et(b+p-(g*S+p*x)+_)),(n||s)&&(M=m.getBBox(),v=et(v+n/100*M.width),b=et(b+s/100*M.height)),M="matrix("+w+","+S+","+E+","+x+","+v+","+b+")",m.setAttribute("transform",M),y&&(m.style[je]=M)},jg=function(e,t,i,n,s){var r=360,a=ot(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Yn:1),c=l-n,u=n+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),h==="cw"&&c<0?c=(c+r*ld)%r-~~(c/r)*r:h==="ccw"&&c>0&&(c=(c-r*ld)%r-~~(c/r)*r)),e._pt=d=new Ft(e._pt,t,i,n,c,Fg),d.e=u,d.u="deg",e._props.push(i),d},pd=function(e,t){for(var i in t)e[i]=t[i];return e},$g=function(e,t,i){var n=pd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=i.style,a,l,c,u,h,d,m,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),r[je]=t,a=Cr(i,1),Ar(i,je),i.setAttribute("transform",c)):(c=getComputedStyle(i)[je],r[je]=t,a=Cr(i,1),r[je]=c);for(l in qi)c=n[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=bt(c),g=bt(u),h=m!==g?_n(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Ft(e._pt,a,l,h,d-h,tc),e._pt.u=g||0,e._props.push(l));pd(a,n)};It("padding,margin,Width,Radius",function(o,e){var t="Top",i="Right",n="Bottom",s="Left",r=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?o+a:"border"+a+o});Co[e>1?"border"+o:o]=function(a,l,c,u,h){var d,m;if(arguments.length<4)return d=r.map(function(g){return Gi(a,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},r.forEach(function(g,p){return m[g]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,m,h)}});var cc={name:"css",register:nc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var r=this._props,a=e.style,l=i.vars.startAt,c,u,h,d,m,g,p,f,_,y,v,b,w,S,E,x;rc||nc(),this.styles=this.styles||xd(e),x=this.styles.props,this.tween=i;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Ht[p]&&Yl(p,t,i,n,e,s)))){if(m=typeof u,g=Co[p],m==="function"&&(u=u.call(i,n,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ds(u)),g)g(this,e,p,u,i)&&(E=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Vi.lastIndex=0,Vi.test(c)||(f=bt(c),_=bt(u)),_?f!==_&&(c=_n(e,p,c,_)+_):f&&(u+=f),this.add(a,"setProperty",c,u,n,s,0,0,p),r.push(p),x.push(p,0,a[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,n,e,s):l[p],ot(c)&&~c.indexOf("random(")&&(c=Ds(c)),bt(c+"")||(c+=Xt.units[p]||bt(Gi(e,p))||""),(c+"").charAt(1)==="="&&(c=Gi(e,p))):c=Gi(e,p),d=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),p in Wi&&(p==="autoAlpha"&&(d===1&&Gi(e,"visibility")==="hidden"&&h&&(d=0),x.push("visibility",0,a.visibility),gn(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Wi[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in qi,v){if(this.styles.save(p),b||(w=e._gsap,w.renderTransform&&!t.parseTransform||Cr(e,t.parseTransform),S=t.smoothOrigin!==!1&&w.smooth,b=this._pt=new Ft(this._pt,a,je,0,1,w.renderTransform,w,0,-1),b.dep=1),p==="scale")this._pt=new Ft(this._pt,w,"scaleY",d,(y?Gn(d,y+h):h)-d||0,tc),this._pt.u=0,r.push("scaleY",p),p+="X";else if(p==="transformOrigin"){x.push(gi,0,a[gi]),u=Yg(u),w.svg?sc(e,u,0,S,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==w.zOrigin&&gn(this,w,"zOrigin",w.zOrigin,_),gn(this,a,p,Po(c),Po(u)));continue}else if(p==="svgOrigin"){sc(e,u,1,S,0,this);continue}else if(p in wd){jg(this,w,p,d,y?Gn(d,y+u):u);continue}else if(p==="smoothOrigin"){gn(this,w,"smooth",w.smooth,u);continue}else if(p==="force3D"){w[p]=u;continue}else if(p==="transform"){$g(this,u,e);continue}}else p in a||(p=Cs(p)||p);if(v||(h||h===0)&&(d||d===0)&&!Ig.test(u)&&p in a)f=(c+"").substr((d+"").length),h||(h=0),_=bt(u)||(p in Xt.units?Xt.units[p]:f),f!==_&&(d=_n(e,p,c,_)),this._pt=new Ft(this._pt,v?w:a,p,d,(y?Gn(d,y+h):h)-d,!v&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?Og:tc),this._pt.u=_||0,f!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=zg);else if(p in a)Xg.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,n,s);else{So(p,u);continue}v||(p in a?x.push(p,0,a[p]):x.push(p,1,c||e[p])),r.push(p)}}E&&$l(this)},render:function(e,t){if(t.tween._time||!oc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gi,aliases:Wi,getSetter:function(e,t,i){var n=Wi[t];return n&&n.indexOf(",")<0&&(t=n),t in qi&&t!==gi&&(e._gsap.x||Gi(e,"x"))?i&&ad===i?t==="scale"?Ug:Bg:(ad=i||{})&&(t==="scale"?Vg:Hg):e.style&&!Mo(e.style[t])?Ng:~t.indexOf("-")?kg:Eo(e,t)},core:{_removeProperty:Ar,_getMatrix:lc}};Lt.utils.checkPrefix=Cs;Lt.core.getStyleSaver=xd;(function(o,e,t,i){var n=It(o+","+e+","+t,function(s){qi[s]=1});It(e,function(s){Xt.units[s]="deg",wd[s]=1}),Wi[n[13]]=o+","+e,It(i,function(s){var r=s.split(":");Wi[r[1]]=n[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");It("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Xt.units[o]="px"});Lt.registerPlugin(cc);var Pe=Lt.registerPlugin(cc)||Lt,Dw=Pe.core.Tween;var Dd=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function uc(o){var e=o.nodeType,t="";if(e===1||e===9||e===11){if(typeof o.textContent=="string")return o.textContent;for(o=o.firstChild;o;o=o.nextSibling)t+=uc(o)}else if(e===3||e===4)return o.nodeValue;return t}var Jn,Cd,Pd,Qg=/(?:\r|\n|\t\t)/g,e0=/(?:\s\s+)/g,t0=function(){Jn=document,Cd=window,Pd=1},i0=1,Rd=function(e){return Cd.getComputedStyle(e)},n0=Array.isArray,Td=[].slice,dc=function(e,t){var i;return n0(e)?e:(i=typeof e)=="string"&&!t&&e?Td.call(Jn.querySelectorAll(e),0):e&&i==="object"&&"length"in e?Td.call(e,0):e?[e]:[]},fc=function(e){return e.position==="absolute"||e.absolute===!0},s0=function(e,t){for(var i=t.length,n;--i>-1;)if(n=t[i],e.substr(0,n.length)===n)return n.length},r0=" style='position:relative;display:inline-block;'",Ad=function(e,t){e===void 0&&(e="");var i=~e.indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+r0+(e?" class='"+e+(i?n++:"")+"'>":">")}},Ld=function o(e,t,i){var n=e.nodeType;if(n===1||n===9||n===11)for(e=e.firstChild;e;e=e.nextSibling)o(e,t,i);else(n===3||n===4)&&(e.nodeValue=e.nodeValue.split(t).join(i))},hc=function(e,t){for(var i=t.length;--i>-1;)e.push(t[i])},Ed=function(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling,n)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}},o0=function o(e){var t=dc(e.childNodes),i=t.length,n,s;for(n=0;n<i;n++)s=t[n],s._isSplit?o(s):n&&s.previousSibling&&s.previousSibling.nodeType===3?(s.previousSibling.nodeValue+=s.nodeType===3?s.nodeValue:s.firstChild.nodeValue,e.removeChild(s)):s.nodeType!==3&&(e.insertBefore(s.firstChild,s),e.removeChild(s))},Pi=function(e,t){return parseFloat(t[e])||0},a0=function(e,t,i,n,s,r,a){var l=Rd(e),c=Pi("paddingLeft",l),u=-999,h=Pi("borderBottomWidth",l)+Pi("borderTopWidth",l),d=Pi("borderLeftWidth",l)+Pi("borderRightWidth",l),m=Pi("paddingTop",l)+Pi("paddingBottom",l),g=Pi("paddingLeft",l)+Pi("paddingRight",l),p=Pi("fontSize",l)*(t.lineThreshold||.2),f=l.textAlign,_=[],y=[],v=[],b=t.wordDelimiter||" ",w=t.tag?t.tag:t.span?"span":"div",S=t.type||t.split||"chars,words,lines",E=s&&~S.indexOf("lines")?[]:null,x=~S.indexOf("words"),M=~S.indexOf("chars"),L=fc(t),H=t.linesClass,q=~(H||"").indexOf("++"),I=[],P=l.display==="flex",F=e.style.display,R,B,z,T,N,X,G,$,te,se,W,Me;for(q&&(H=H.split("++").join("")),P&&(e.style.display="block"),B=e.getElementsByTagName("*"),z=B.length,N=[],R=0;R<z;R++)N[R]=B[R];if(E||L)for(R=0;R<z;R++)T=N[R],X=T.parentNode===e,(X||L||M&&!x)&&(Me=T.offsetTop,E&&X&&Math.abs(Me-u)>p&&(T.nodeName!=="BR"||R===0)&&(G=[],E.push(G),u=Me),L&&(T._x=T.offsetLeft,T._y=Me,T._w=T.offsetWidth,T._h=T.offsetHeight),E&&((T._isSplit&&X||!M&&X||x&&X||!x&&T.parentNode.parentNode===e&&!T.parentNode._isSplit)&&(G.push(T),T._x-=c,Ed(T,e,b)&&(T._wordEnd=!0)),T.nodeName==="BR"&&(T.nextSibling&&T.nextSibling.nodeName==="BR"||R===0)&&E.push([])));for(R=0;R<z;R++){if(T=N[R],X=T.parentNode===e,T.nodeName==="BR"){E||L?(T.parentNode&&T.parentNode.removeChild(T),N.splice(R--,1),z--):x||e.appendChild(T);continue}if(L&&(te=T.style,!x&&!X&&(T._x+=T.parentNode._x,T._y+=T.parentNode._y),te.left=T._x+"px",te.top=T._y+"px",te.position="absolute",te.display="block",te.width=T._w+1+"px",te.height=T._h+"px"),!x&&M)if(T._isSplit)for(T._next=B=T.nextSibling,T.parentNode.appendChild(T);B&&B.nodeType===3&&B.textContent===" ";)T._next=B.nextSibling,T.parentNode.appendChild(B),B=B.nextSibling;else T.parentNode._isSplit?(T._parent=T.parentNode,!T.previousSibling&&T.firstChild&&(T.firstChild._isFirst=!0),T.nextSibling&&T.nextSibling.textContent===" "&&!T.nextSibling.nextSibling&&I.push(T.nextSibling),T._next=T.nextSibling&&T.nextSibling._isFirst?null:T.nextSibling,T.parentNode.removeChild(T),N.splice(R--,1),z--):X||(Me=!T.nextSibling&&Ed(T.parentNode,e,b),T.parentNode._parent&&T.parentNode._parent.appendChild(T),Me&&T.parentNode.appendChild(Jn.createTextNode(" ")),w==="span"&&(T.style.display="inline"),_.push(T));else T.parentNode._isSplit&&!T._isSplit&&T.innerHTML!==""?y.push(T):M&&!T._isSplit&&(w==="span"&&(T.style.display="inline"),_.push(T))}for(R=I.length;--R>-1;)I[R].parentNode.removeChild(I[R]);if(E){for(L&&(se=Jn.createElement(w),e.appendChild(se),W=se.offsetWidth+"px",Me=se.offsetParent===e?0:e.offsetLeft,e.removeChild(se)),te=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for($=b===" "&&(!L||!x&&!M),R=0;R<E.length;R++){for(G=E[R],se=Jn.createElement(w),se.style.cssText="display:block;text-align:"+f+";position:"+(L?"absolute;":"relative;"),H&&(se.className=H+(q?R+1:"")),v.push(se),z=G.length,B=0;B<z;B++)G[B].nodeName!=="BR"&&(T=G[B],se.appendChild(T),$&&T._wordEnd&&se.appendChild(Jn.createTextNode(" ")),L&&(B===0&&(se.style.top=T._y+"px",se.style.left=c+Me+"px"),T.style.top="0px",Me&&(T.style.left=T._x-Me+"px")));z===0?se.innerHTML="&nbsp;":!x&&!M&&(o0(se),Ld(se,String.fromCharCode(160)," ")),L&&(se.style.width=W,se.style.height=T._h+"px"),e.appendChild(se)}e.style.cssText=te}L&&(a>e.clientHeight&&(e.style.height=a-m+"px",e.clientHeight<a&&(e.style.height=a+h+"px")),r>e.clientWidth&&(e.style.width=r-g+"px",e.clientWidth<r&&(e.style.width=r+d+"px"))),P&&(F?e.style.display=F:e.style.removeProperty("display")),hc(i,_),x&&hc(n,y),hc(s,v)},l0=function(e,t,i,n){var s=t.tag?t.tag:t.span?"span":"div",r=t.type||t.split||"chars,words,lines",a=~r.indexOf("chars"),l=fc(t),c=t.wordDelimiter||" ",u=c!==" "?"":l?"&#173; ":" ",h="</"+s+">",d=1,m=t.specialChars?typeof t.specialChars=="function"?t.specialChars:s0:null,g,p,f,_,y,v,b,w,S=Jn.createElement("div"),E=e.parentNode;for(E.insertBefore(S,e),S.textContent=e.nodeValue,E.removeChild(e),e=S,g=uc(e),b=g.indexOf("<")!==-1,t.reduceWhiteSpace!==!1&&(g=g.replace(e0," ").replace(Qg,"")),b&&(g=g.split("<").join("{{LT}}")),y=g.length,p=(g.charAt(0)===" "?u:"")+i(),f=0;f<y;f++)if(v=g.charAt(f),m&&(w=m(g.substr(f),t.specialChars)))v=g.substr(f,w||1),p+=a&&v!==" "?n()+v+"</"+s+">":v,f+=w-1;else if(v===c&&g.charAt(f-1)!==c&&f){for(p+=d?h:"",d=0;g.charAt(f+1)===c;)p+=u,f++;f===y-1?p+=u:g.charAt(f+1)!==")"&&(p+=u+i(),d=1)}else v==="{"&&g.substr(f,6)==="{{LT}}"?(p+=a?n()+"{{LT}}</"+s+">":"{{LT}}",f+=5):v.charCodeAt(0)>=55296&&v.charCodeAt(0)<=56319||g.charCodeAt(f+1)>=65024&&g.charCodeAt(f+1)<=65039?(_=((g.substr(f,12).split(Dd)||[])[1]||"").length||2,p+=a&&v!==" "?n()+g.substr(f,_)+"</"+s+">":g.substr(f,_),f+=_-1):p+=a&&v!==" "?n()+v+"</"+s+">":v;e.outerHTML=p+(d?h:""),b&&Ld(E,"{{LT}}","<")},c0=function o(e,t,i,n){var s=dc(e.childNodes),r=s.length,a=fc(t),l,c;if(e.nodeType!==3||r>1){for(t.absolute=!1,l=0;l<r;l++)c=s[l],c._next=c._isFirst=c._parent=c._wordEnd=null,(c.nodeType!==3||/\S+/.test(c.nodeValue))&&(a&&c.nodeType!==3&&Rd(c).display==="inline"&&(c.style.display="inline-block",c.style.position="relative"),c._isSplit=!0,o(c,t,i,n));t.absolute=a,e._isSplit=!0;return}l0(e,t,i,n)},Xi=function(){function o(t,i){Pd||t0(),this.elements=dc(t),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=i||{},i0&&this.split(i)}var e=o.prototype;return e.split=function(i){this.isSplit&&this.revert(),this.vars=i=i||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var n=this.elements.length,s=i.tag?i.tag:i.span?"span":"div",r=Ad(i.wordsClass,s),a=Ad(i.charsClass,s),l,c,u;--n>-1;)u=this.elements[n],this._originals[n]=u.innerHTML,l=u.clientHeight,c=u.clientWidth,c0(u,i,r,a),a0(u,i,this.chars,this.words,this.lines,c,l);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},e.revert=function(){var i=this._originals;if(!i)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(n,s){return n.innerHTML=i[s]}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},o.create=function(i,n){return new o(i,n)},o}();Xi.version="3.11.3";Pe.registerPlugin(Xi);var Ps=class extends Tt{constructor({element:e,anim:t}){super({element:e,config:{root:null,margin:"10px",threshold:.8},addClass:"active"}),this.anim={d:1.2,ease:"expo.out",delay:.1,each:.05,from:"start",once:!0,...t},this.element=e,this.animated=u0(this.element),this.setOut()}isIn(){this.animateIn(),this.anim.once&&this.stop()}isOut(){this.setOut()}animateIn(){this.animation&&this.animation.kill(),this.animation=Pe.to(this.animated,{y:"0%",duration:this.anim.d,ease:this.anim.ease,delay:this.anim.delay,stagger:{each:this.anim.each,from:this.anim.from}})}animateOut(){this.stop(),this.animation&&this.animation.kill(),this.animation=Pe.to(this.animated,{y:"200%",duration:this.anim.d,ease:this.anim.ease,delay:0,stagger:{each:this.anim.each*.1,from:this.anim.from}})}setIn(){this.animation&&this.animation.kill(),Pe.set(this.animated,{y:"0%"})}setOut(){this.animation&&this.animation.kill(),Pe.set(this.animated,{y:"200%"})}};function u0(o){switch(o.dataset.a){case"char":return Id(o);case"word":return h0(o);case"line":return d0(o);default:return Id(o)}}function Id(o){let e=new Xi(o,{type:"chars"}).chars;return new Xi(e,{type:"chars"}).chars}function h0(o){let e=new Xi(o,{type:"words"}).words;return new Xi(e,{type:"words"}).words}function d0(o){let e=new Xi(o,{type:"lines"}).lines;return new Xi(e,{type:"lines"}).lines}var Ro=class extends Tt{constructor({element:e,anim:t}){super({element:e,config:{root:null,margin:"10px",threshold:.4},addClass:"active"}),this.direction=f0(e,80),this.anim={d:1.2,ease:"expo.out",delay:.3,each:.05,from:"start",once:!0,...t},this.element=e,this.animated=this.element.children[0]}isIn(){this.animateIn(),this.anim.once&&this.stop()}isOut(){this.setOut()}animateIn(){this.animation&&this.animation.kill(),this.animation=Pe.to(this.animated,{y:"0%",x:"0%",autoAlpha:1,duration:this.anim.d,ease:this.anim.ease,delay:this.anim.delay})}animateOut(){this.animation&&this.animation.kill(),this.animation=Pe.to(this.animated,{...this.direction,autoAlpha:0,duration:this.anim.d,ease:this.anim.ease,delay:0})}setIn(){this.animation&&this.animation.kill(),Pe.set(this.animated,{y:"0%",x:"0%",autoAlpha:1})}setOut(){this.animation&&this.animation.kill(),Pe.set(this.animated,{...this.direction,autoAlpha:0})}};function f0(o,e=50){switch(o.dataset.a){case"up":return{x:"0%",y:`${e}%`};case"down":return{x:"0%",y:`-${e}%`};case"left":return{x:`-${e}%`,y:"0%"};case"right":return{x:`${e}%`,y:"0%"};default:return{x:"0%",y:"0%"}}}var Lo=class extends Tt{constructor({element:e,anim:t}){super({element:e,config:{root:null,margin:"10px",threshold:.8}}),this.anim={d:1.2,ease:"slow",delay:.1,each:.05,from:"start",once:!0,...t},this.element=e,this.animated=this.element}isIn(){this.animateIn(),this.anim.once&&this.stop()}isOut(){this.setOut()}animateIn(){this.animation&&this.animation.kill(),this.animation=Pe.to(this.animated,{autoAlpha:1,duration:this.anim.d,ease:this.anim.ease,delay:this.anim.delay})}animateOut(){this.stop(),this.animation&&this.animation.kill(),this.animation=Pe.to(this.animated,{autoAlpha:0,duration:this.anim.d,ease:this.anim.ease,delay:0})}setIn(){this.animation&&this.animation.kill(),Pe.set(this.animated,{autoAlpha:1})}setOut(){this.animation&&this.animation.kill(),Pe.set(this.animated,{autoAlpha:0})}};var Rs=function(){return Rs=Object.assign||function(o){for(var e,t=1,i=arguments.length;t<i;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o},Rs.apply(this,arguments)};function kd(o,e,t){if(t||arguments.length===2)for(var i,n=0,s=e.length;n<s;n++)!i&&n in e||(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return o.concat(i||Array.prototype.slice.call(e))}function Fd(o){return Array.prototype.slice.call(o)}function zd(o,e){var t=Math.floor(o);return t===e||t+1===e?o:e}function Od(){return Date.now()}function pc(o,e,t){if(e="data-keen-slider-"+e,t===null)return o.removeAttribute(e);o.setAttribute(e,t||"")}function Io(o,e){return e=e||document,typeof o=="function"&&(o=o(e)),Array.isArray(o)?o:typeof o=="string"?Fd(e.querySelectorAll(o)):o instanceof HTMLElement?[o]:o instanceof NodeList?Fd(o):[]}function Pr(o){o.raw&&(o=o.raw),o.cancelable&&!o.defaultPrevented&&o.preventDefault()}function Rr(o){o.raw&&(o=o.raw),o.stopPropagation&&o.stopPropagation()}function Bd(){var o=[];return{add:function(e,t,i,n){e.addListener?e.addListener(i):e.addEventListener(t,i,n),o.push([e,t,i,n])},input:function(e,t,i,n){this.add(e,t,function(s){return function(r){r.nativeEvent&&(r=r.nativeEvent);var a=r.changedTouches||[],l=r.targetTouches||[],c=r.detail&&r.detail.x?r.detail:null;return s({id:c?c.identifier?c.identifier:"i":l[0]?l[0]?l[0].identifier:"e":"d",idChanged:c?c.identifier?c.identifier:"i":a[0]?a[0]?a[0].identifier:"e":"d",raw:r,x:c&&c.x?c.x:l[0]?l[0].screenX:c?c.x:r.pageX,y:c&&c.y?c.y:l[0]?l[0].screenY:c?c.y:r.pageY})}}(i),n)},purge:function(){o.forEach(function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])}),o=[]}}}function mc(o,e,t){return Math.min(Math.max(o,e),t)}function _i(o){return(o>0?1:0)-(o<0?1:0)||+o}function Nd(o){var e=o.getBoundingClientRect();return{height:zd(e.height,o.offsetHeight),width:zd(e.width,o.offsetWidth)}}function zt(o,e,t,i){var n=o&&o[e];return n==null?t:i&&typeof n=="function"?n():n}function ci(o){return Math.round(1e6*o)/1e6}function p0(o){var e,t,i,n,s,r;function a(d){r||(r=d),l(!0);var m=d-r;m>i&&(m=i);var g=n[t];if(g[3]<m)return t++,a(d);var p=g[2],f=g[4],_=g[0],y=g[1]*(0,g[5])(f===0?1:(m-p)/f);if(y&&o.track.to(_+y),m<i)return u();r=null,l(!1),c(null),o.emit("animationEnded")}function l(d){e.active=d}function c(d){e.targetIdx=d}function u(){var d;d=a,s=window.requestAnimationFrame(d)}function h(){var d;d=s,window.cancelAnimationFrame(d),l(!1),c(null),r&&o.emit("animationStopped"),r=null}return e={active:!1,start:function(d){if(h(),o.track.details){var m=0,g=o.track.details.position;t=0,i=0,n=d.map(function(p){var f,_=Number(g),y=(f=p.earlyExit)!==null&&f!==void 0?f:p.duration,v=p.easing,b=p.distance*v(y/p.duration)||0;g+=b;var w=i;return i+=y,m+=b,[_,p.distance,w,i,p.duration,v]}),c(o.track.distToIdx(m)),u(),o.emit("animationStarted")}},stop:h,targetIdx:null}}function m0(o){var e,t,i,n,s,r,a,l,c,u,h,d,m,g,p=1/0,f=[],_=null,y=0;function v(P){q(y+P)}function b(P){var F=w(y+P).abs;return x(F)?F:null}function w(P){var F=Math.floor(Math.abs(ci(P/t))),R=ci((P%t+t)%t);R===t&&(R=0);var B=_i(P),z=a.indexOf(kd([],a,!0).reduce(function(N,X){return Math.abs(X-R)<Math.abs(N-R)?X:N})),T=z;return B<0&&F++,z===r&&(T=0,F+=B>0?1:-1),{abs:T+F*r*B,origin:z,rel:T}}function S(P,F,R){var B;if(F||!L())return E(P,R);if(!x(P))return null;var z=w(R??y),T=z.abs,N=P-z.rel,X=T+N;B=E(X);var G=E(X-r*_i(N));return(G!==null&&Math.abs(G)<Math.abs(B)||B===null)&&(B=G),ci(B)}function E(P,F){if(F==null&&(F=ci(y)),!x(P)||P===null)return null;P=Math.round(P);var R=w(F),B=R.abs,z=R.rel,T=R.origin,N=H(P),X=(F%t+t)%t,G=a[T],$=Math.floor((P-(B-z))/r)*t;return ci(G-X-G+a[N]+$+(T===r?t:0))}function x(P){return M(P)===P}function M(P){return mc(P,c,u)}function L(){return n.loop}function H(P){return(P%r+r)%r}function q(P){var F;F=P-y,f.push({distance:F,timestamp:Od()}),f.length>6&&(f=f.slice(-6)),y=ci(P);var R=I().abs;if(R!==_){var B=_!==null;_=R,B&&o.emit("slideChanged")}}function I(P){var F=P?null:function(){if(r){var R=L(),B=R?(y%t+t)%t:y,z=(R?y%t:y)-s[0][2],T=0-(z<0&&R?t-Math.abs(z):z),N=0,X=w(y),G=X.abs,$=X.rel,te=s[$][2],se=s.map(function(W,Me){var ce=T+N;(ce<0-W[0]||ce>1)&&(ce+=(Math.abs(ce)>t-1&&R?t:0)*_i(-ce));var ye=Me-$,le=_i(ye),ze=ye+G;R&&(le===-1&&ce>te&&(ze+=r),le===1&&ce<te&&(ze-=r),h!==null&&ze<h&&(ce+=t),d!==null&&ze>d&&(ce-=t));var Se=ce+W[0]+W[1],me=Math.max(ce>=0&&Se<=1?1:Se<0||ce>1?0:ce<0?Math.min(1,(W[0]+ce)/W[0]):(1-ce)/W[0],0);return N+=W[0]+W[1],{abs:ze,distance:n.rtl?-1*ce+1-W[0]:ce,portion:me,size:W[0]}});return G=M(G),$=H(G),{abs:M(G),length:i,max:g,maxIdx:u,min:m,minIdx:c,position:y,progress:R?B/t:y/i,rel:$,slides:se,slidesLength:t}}}();return e.details=F,o.emit("detailsChanged"),F}return e={absToRel:H,add:v,details:null,distToIdx:b,idxToDist:S,init:function(P){if(function(){if(n=o.options,s=(n.trackConfig||[]).map(function(z){return[zt(z,"size",1),zt(z,"spacing",0),zt(z,"origin",0)]}),r=s.length){t=ci(s.reduce(function(z,T){return z+T[0]+T[1]},0));var R,B=r-1;i=ci(t+s[0][2]-s[B][0]-s[B][2]-s[B][1]),a=s.reduce(function(z,T){if(!z)return[0];var N=s[z.length-1],X=z[z.length-1]+(N[0]+N[2])+N[1];return X-=T[2],z[z.length-1]>X&&(X=z[z.length-1]),X=ci(X),z.push(X),(!R||R<X)&&(l=z.length-1),R=X,z},null),i===0&&(l=0),a.push(ci(t))}}(),!r)return I(!0);var F;(function(){var R=o.options.range,B=o.options.loop;h=c=B?zt(B,"min",-1/0):0,d=u=B?zt(B,"max",p):l;var z=zt(R,"min",null),T=zt(R,"max",null);z&&(c=z),T&&(u=T),m=c===-1/0?c:o.track.idxToDist(c||0,!0,0),g=u===p?u:S(u,!0,0),T===null&&(d=u),zt(R,"align",!1)&&u!==p&&s[H(u)][2]===0&&(g-=1-s[H(u)][0],u=b(g-y)),m=ci(m),g=ci(g)})(),F=P,Number(F)===F?v(E(M(P))):I()},to:q,velocity:function(){var P=Od(),F=f.reduce(function(R,B){var z=B.distance,T=B.timestamp;return P-T>200||(_i(z)!==_i(R.distance)&&R.distance&&(R={distance:0,lastTimestamp:0,time:0}),R.time&&(R.distance+=z),R.lastTimestamp&&(R.time+=T-R.lastTimestamp),R.lastTimestamp=T),R},{distance:0,lastTimestamp:0,time:0});return F.distance/F.time||0}}}function g0(o){var e,t,i,n,s,r,a,l;function c(_){return 2*_}function u(_){return mc(_,a,l)}function h(_){return 1-Math.pow(1-_,3)}function d(){return i?o.track.velocity():0}function m(){f();var _=o.options.mode==="free-snap",y=o.track,v=d();n=_i(v);var b=o.track.details,w=[];if(v||!_){var S=g(v),E=S.dist,x=S.dur;if(x=c(x),E*=n,_){var M=y.idxToDist(y.distToIdx(E),!0);M&&(E=M)}w.push({distance:E,duration:x,easing:h});var L=b.position,H=L+E;if(H<s||H>r){var q=H<s?s-L:r-L,I=0,P=v;if(_i(q)===n){var F=Math.min(Math.abs(q)/Math.abs(E),1),R=function(T){return 1-Math.pow(1-T,1/3)}(F)*x;w[0].earlyExit=R,P=v*(1-F)}else w[0].earlyExit=0,I+=q;var B=g(P,100),z=B.dist*n;o.options.rubberband&&(w.push({distance:z,duration:c(B.dur),easing:h}),w.push({distance:-z+I,duration:500,easing:h}))}o.animator.start(w)}else o.moveToIdx(u(b.abs),!0,{duration:500,easing:function(T){return 1+--T*T*T*T*T}})}function g(_,y){y===void 0&&(y=1e3);var v=147e-9+(_=Math.abs(_))/y;return{dist:Math.pow(_,2)/v,dur:_/v}}function p(){var _=o.track.details;_&&(s=_.min,r=_.max,a=_.minIdx,l=_.maxIdx)}function f(){o.animator.stop()}o.on("updated",p),o.on("optionsChanged",p),o.on("created",p),o.on("dragStarted",function(){i=!1,f(),e=t=o.track.details.abs}),o.on("dragChecked",function(){i=!0}),o.on("dragEnded",function(){var _=o.options.mode;_==="snap"&&function(){var y=o.track,v=o.track.details,b=v.position,w=_i(d());(b>r||b<s)&&(w=0);var S=e+w;v.slides[y.absToRel(S)].portion===0&&(S-=w),e!==t&&(S=t),_i(y.idxToDist(S,!0))!==w&&(S+=w),S=u(S);var E=y.idxToDist(S,!0);o.animator.start([{distance:E,duration:500,easing:function(x){return 1+--x*x*x*x*x}}])}(),_!=="free"&&_!=="free-snap"||m()}),o.on("dragged",function(){t=o.track.details.abs})}function _0(o){var e,t,i,n,s,r,a,l,c,u,h,d,m,g,p,f,_,y,v=Bd();function b(I){if(r&&l===I.id){var P=x(I);if(c){if(!E(I))return S(I);u=P,c=!1,o.emit("dragChecked")}if(f)return u=P;Pr(I);var F=function(B){if(_===-1/0&&y===1/0)return B;var z=o.track.details,T=z.length,N=z.position,X=mc(B,_-N,y-N);if(T===0)return 0;if(!o.options.rubberband)return X;if(N<=y&&N>=_||N<_&&t>0||N>y&&t<0)return B;var G=(N<_?N-_:N-y)/T,$=n*T,te=Math.abs(G*$),se=Math.max(0,1-te/s*2);return se*se*B}(a(u-P)/n*i);t=_i(F);var R=o.track.details.position;(R>_&&R<y||R===_&&t>0||R===y&&t<0)&&Rr(I),h+=F,!d&&Math.abs(h*n)>5&&(d=!0),o.track.add(F),u=P,o.emit("dragged")}}function w(I){!r&&o.track.details&&o.track.details.length&&(h=0,r=!0,d=!1,c=!0,l=I.id,E(I),u=x(I),o.emit("dragStarted"))}function S(I){r&&l===I.idChanged&&(r=!1,o.emit("dragEnded"))}function E(I){var P=M(),F=P?I.y:I.x,R=P?I.x:I.y,B=m!==void 0&&g!==void 0&&Math.abs(g-R)<=Math.abs(m-F);return m=F,g=R,B}function x(I){return M()?I.y:I.x}function M(){return o.options.vertical}function L(){n=o.size,s=M()?window.innerHeight:window.innerWidth;var I=o.track.details;I&&(_=I.min,y=I.max)}function H(I){d&&(Rr(I),Pr(I))}function q(){if(v.purge(),o.options.drag&&!o.options.disabled){var I;I=o.options.dragSpeed||1,a=typeof I=="function"?I:function(F){return F*I},i=o.options.rtl?-1:1,L(),e=o.container,function(){var F="data-keen-slider-clickable";Io("[".concat(F,"]:not([").concat(F,"=false])"),e).map(function(R){v.add(R,"dragstart",Rr),v.add(R,"mousedown",Rr),v.add(R,"touchstart",Rr)})}(),v.add(e,"dragstart",function(F){Pr(F)}),v.add(e,"click",H,{capture:!0}),v.input(e,"ksDragStart",w),v.input(e,"ksDrag",b),v.input(e,"ksDragEnd",S),v.input(e,"mousedown",w),v.input(e,"mousemove",b),v.input(e,"mouseleave",S),v.input(e,"mouseup",S),v.input(e,"touchstart",w,{passive:!0}),v.input(e,"touchmove",b,{passive:!1}),v.input(e,"touchend",S),v.input(e,"touchcancel",S),v.add(window,"wheel",function(F){r&&Pr(F)});var P="data-keen-slider-scrollable";Io("[".concat(P,"]:not([").concat(P,"=false])"),o.container).map(function(F){return function(R){var B;v.input(R,"touchstart",function(z){B=x(z),f=!0,p=!0},{passive:!0}),v.input(R,"touchmove",function(z){var T=M(),N=T?R.scrollHeight-R.clientHeight:R.scrollWidth-R.clientWidth,X=B-x(z),G=T?R.scrollTop:R.scrollLeft,$=T&&R.style.overflowY==="scroll"||!T&&R.style.overflowX==="scroll";if(B=x(z),(X<0&&G>0||X>0&&G<N)&&p&&$)return f=!0;p=!1,Pr(z),f=!1}),v.input(R,"touchend",function(){f=!1})}(F)})}}o.on("updated",L),o.on("optionsChanged",q),o.on("created",q),o.on("destroyed",v.purge)}function x0(o){var e,t,i=null;function n(m,g,p){o.animator.active?r(m,g,p):requestAnimationFrame(function(){return r(m,g,p)})}function s(){n(!1,!1,t)}function r(m,g,p){var f=0,_=o.size,y=o.track.details;if(y&&e){var v=y.slides;e.forEach(function(b,w){if(m)!i&&g&&l(b,null,p),c(b,null,p);else{if(!v[w])return;var S=v[w].size*_;!i&&g&&l(b,S,p),c(b,v[w].distance*_-f,p),f+=S}})}}function a(m){return o.options.renderMode==="performance"?Math.round(m):m}function l(m,g,p){var f=p?"height":"width";g!==null&&(g=a(g)+"px"),m.style["min-"+f]=g,m.style["max-"+f]=g}function c(m,g,p){if(g!==null){g=a(g);var f=p?g:0;g="translate3d(".concat(p?0:g,"px, ").concat(f,"px, 0)")}m.style.transform=g,m.style["-webkit-transform"]=g}function u(){e&&(r(!0,!0,t),e=null),o.on("detailsChanged",s,!0)}function h(){n(!1,!0,t)}function d(){u(),t=o.options.vertical,o.options.disabled||o.options.renderMode==="custom"||(i=zt(o.options.slides,"perView",null)==="auto",o.on("detailsChanged",s),(e=o.slides).length&&h())}o.on("created",d),o.on("optionsChanged",d),o.on("beforeOptionsChanged",function(){u()}),o.on("updated",h),o.on("destroyed",u)}function v0(o,e){return function(t){var i,n,s,r,a,l,c=Bd();function u(x){var M;pc(t.container,"reverse",(M=t.container,window.getComputedStyle(M,null).getPropertyValue("direction")!=="rtl"||x?null:"")),pc(t.container,"v",t.options.vertical&&!x?"":null),pc(t.container,"disabled",t.options.disabled&&!x?"":null)}function h(){d()&&_()}function d(){var x=null;if(r.forEach(function(L){L.matches&&(x=L.__media)}),x===i)return!1;i||t.emit("beforeOptionsChanged"),i=x;var M=x?s.breakpoints[x]:s;return t.options=Rs(Rs({},s),M),u(),S(),E(),v(),!0}function m(x){var M=Nd(x);return(t.options.vertical?M.height:M.width)/t.size||1}function g(){return t.options.trackConfig.length}function p(x){for(var M in i=!1,s=Rs(Rs({},e),x),c.purge(),n=t.size,r=[],s.breakpoints||[]){var L=window.matchMedia(M);L.__media=M,r.push(L),c.add(L,"change",h)}c.add(window,"orientationchange",w),c.add(window,"resize",b),d()}function f(x){t.animator.stop();var M=t.track.details;t.track.init(x??(M?M.abs:0))}function _(x){f(x),t.emit("optionsChanged")}function y(x,M){if(x)return p(x),void _(M);S(),E();var L=g();v(),g()!==L?_(M):f(M),t.emit("updated")}function v(){var x=t.options.slides;if(typeof x=="function")return t.options.trackConfig=x(t.size,t.slides);for(var M=t.slides,L=M.length,H=typeof x=="number"?x:zt(x,"number",L,!0),q=[],I=zt(x,"perView",1,!0),P=zt(x,"spacing",0,!0)/t.size||0,F=I==="auto"?P:P/I,R=zt(x,"origin","auto"),B=0,z=0;z<H;z++){var T=I==="auto"?m(M[z]):1/I-P+F,N=R==="center"?.5-T/2:R==="auto"?0:R;q.push({origin:N,size:T,spacing:P}),B+=T}if(B+=P*(H-1),R==="auto"&&!t.options.loop&&I!==1){var X=0;q.map(function(G){var $=B-X;return X+=G.size+P,$>=1||(G.origin=1-$-(B>1?0:1-B)),G})}t.options.trackConfig=q}function b(){S();var x=t.size;t.options.disabled||x===n||(n=x,y())}function w(){b(),setTimeout(b,500),setTimeout(b,2e3)}function S(){var x=Nd(t.container);t.size=(t.options.vertical?x.height:x.width)||1}function E(){t.slides=Io(t.options.selector,t.container)}t.container=(l=Io(o,a||document)).length?l[0]:null,t.destroy=function(){c.purge(),t.emit("destroyed"),u(!0)},t.prev=function(){t.moveToIdx(t.track.details.abs-1,!0)},t.next=function(){t.moveToIdx(t.track.details.abs+1,!0)},t.update=y,p(t.options)}}var Ud=function(o,e,t){try{return function(i,n){var s,r={};return s={emit:function(a){r[a]&&r[a].forEach(function(c){c(s)});var l=s.options&&s.options[a];l&&l(s)},moveToIdx:function(a,l,c){var u=s.track.idxToDist(a,l);if(u){var h=s.options.defaultAnimation;s.animator.start([{distance:u,duration:zt(c||h,"duration",500),easing:zt(c||h,"easing",function(d){return 1+--d*d*d*d*d})}])}},on:function(a,l,c){c===void 0&&(c=!1),r[a]||(r[a]=[]);var u=r[a].indexOf(l);u>-1?c&&delete r[a][u]:c||r[a].push(l)},options:i},function(){if(s.track=m0(s),s.animator=p0(s),n)for(var a=0,l=n;a<l.length;a++)(0,l[a])(s);s.track.init(s.options.initial||0),s.emit("created")}(),s}(e,kd([v0(o,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x0,_0,g0],t||[],!0))}catch(i){console.error(i)}};var Lr=class{constructor(e,t={}){this.wrapper=e,this.element=e.querySelector('[data-slider="container"]'),this.config(t),this.ui={dots:[],current:0},y0(this.wrapper,this.element),this.init()}config(e){this.element.dataset.duration&&(this.element.dataset.duration*=1e3);let t=Fo(this.element.dataset.loop),i=Fo(this.element.dataset.rubberband),n=Fo(this.element.dataset.drag),s=Fo(this.element.dataset.centered),r=()=>{let{perview:l}=this.element.dataset;return l===void 0||l==="0"?"auto":Number(l)},a=()=>{let{spacing:l}=this.element.dataset;return l===void 0||l==="0"?0:Number(l)};this.config={loop:t,mode:this.element.dataset.mode||"free-snap",renderMode:"precision",rubberband:i,drag:n,dragSpeed:.5,defaultAnimation:{duration:+this.element.dataset.duration||100},initial:0,slides:{origin:s?"center":"auto",perView:r(),spacing:a()},range:{},...e}}init(){this.slider=new Ud(this.element,{selector:()=>[...this.element.children],...this.config}),this.initDom(),this.slider.on("slideChanged",this.update.bind(this))}initDom(){let e=this.wrapper.querySelector('[data-slider="left"]'),t=this.wrapper.querySelector('[data-slider="right"]');(e||t)&&this.createArrows(e,t);let i=this.wrapper.querySelector('[data-slider="dots"]');i&&this.createDots(i),this.onStart(0),this.slider.slides.forEach((n,s)=>{let r=n.querySelector("[data-active]");r&&r.dataset.active==="true"&&(n.style.filter="invert(1)")}),this.slider.moveToIdx(2)}createArrows(e,t){this.ui.hasArrows=!0,e&&(e.onclick=()=>this.slider.prev()),t&&(t.onclick=()=>this.slider.next())}createDots(e){this.ui.hasDots=!0;let t=[...e.children];if(t.length<1)return;let i=e.querySelector(".active");if(!i)return;let n=i.cloneNode(!0);n.classList.remove("active"),t.forEach(s=>s.remove()),this.slider.slides.forEach((s,r)=>{let a=n.cloneNode(!0);a.onclick=()=>this.slider.moveToIdx(r),this.ui.dots.push(a),e.appendChild(a)})}onStart(e){this.ui.hasDots&&this.ui.dots[e].classList.add("active"),this.ui.current=e}update(e=0){let t=typeof e=="number"?e:e.track.details.rel;this.updateDots(t),this.updateSlides(t),this.updateArrows(t),this.ui.current=t}updateSlides(e){this.slider.slides[this.ui.current].classList.remove("active"),this.slider.slides[e].classList.add("active")}updateDots(e){!this.ui.hasDots||(this.ui.dots[this.ui.current].classList.remove("active"),this.ui.dots[e].classList.add("active"))}updateArrows(e){this.ui.hasArrows}};function Fo(o){return o==="true"}function y0(o,e){[...o.querySelectorAll("[data-insert]")].forEach(i=>{let n=i.cloneNode(!0);i.dataset.insert==="end"&&e.appendChild(n),i.remove()})}var zo=class{constructor(){this.wrapper=document.querySelector("[data-mm='w']"),this.btns={open:document.querySelector("[data-mm='open']"),close:document.querySelector("[data-mm='close']"),isOpen:!1},this.init()}init(){Pe.set(this.wrapper,{autoAlpha:0}),this.wrapper.display="none",this.btns.open.addEventListener("click",()=>{this.isOpen||(this.open(),this.isOpen=!0,console.log("open"))}),this.btns.close.addEventListener("click",()=>{this.close(),console.log("close")})}open(){this.wrapper.display="flex",Pe.to(this.wrapper,{autoAlpha:1,duration:.5})}close(){Pe.to(this.wrapper,{autoAlpha:0,duration:.5,onComplete:()=>{this.isOpen=!1,this.wrapper.display="none"}})}};var Vd=o=>{let e=o.getBoundingClientRect(),t=0;return t=window.app?.scroll?.y||window.pageYOffset,{bottom:e.bottom+t,height:e.height,top:e.top+t,wh:window.innerHeight,offset:e.top+t}};function Oo(o,e,t,i,n){return i+(n-i)*(o-e)/(t-e)}function No(o,e,t){return Math.min(Math.max(t,o),e)}var Ls=class{constructor({el:e,config:t}){this.el=e,this.config={bounds:[0,1],...t},this.perc=0,this.resize()}resize(){this.bounds=Vd(this.el)}render(){let e=Oo(window?.app?.scroll?.y||0,this.bounds.top,this.bounds.bottom,this.config.bounds[0],this.config.bounds[1]);e=No(0,1,e),this.perc=e}};var ko=class extends Ls{constructor({element:e,wrapper:t}){super({el:t}),this.element=e,this.wrapper=t,Pe.set(this.element,{scaleY:0,transformOrigin:"top right"}),setTimeout(()=>this.resize(),1e3)}render(){let e=Oo(window?.app?.scroll?.y||0,this.bounds.top,this.bounds.bottom,this.config.bounds[0],this.config.bounds[1]);e=No(0,1,e),this.perc=e,this.element.style.transform=`scaleY(${e*100}%)`}};var Bo=class{constructor(){window.altApp||this.createText(),window.altApp||this.createAnimation(),window.altApp||this.createSlider(),window.altApp||(this.mobile=new zo)}resize(){}createText(){let o=[...document.querySelectorAll('[data-a="char"]')],e=[...document.querySelectorAll('[data-a="word"]')],t=[...document.querySelectorAll('[data-a="line"]')];this.text={chars:o.map(i=>new Ps({element:i})),words:e.map(i=>new Ps({element:i})),lines:t.map(i=>new Ps({element:i}))}}destroyText(){this.text.chars.forEach(o=>o.animateOut()),this.text.words.forEach(o=>o.animateOut()),this.text.lines.forEach(o=>o.animateOut())}createAnimation(){this.translateUp=[...document.querySelectorAll('[data-a="up"], [data-a="down"], [data-a="left"], [data-a="right"]')].map(o=>new Ro({element:o,anim:{d:1.8}})),this.alpha=[...document.querySelectorAll('[data-a="alpha"]')].map(o=>new Lo({element:o})),this.scale=[...document.querySelectorAll("[data-gl-slider]")].map(o=>new ko({wrapper:o,element:o.querySelector('[data-a-scale="y"]')}))}createSlider(){let o=document.querySelector("[data-slider='wrapper']");o&&(this.slider=new Lr(o));let e=document.querySelector("[data-leader='wrapper']");e&&(this.slider=new Lr(e))}render(){this.scale?.forEach(o=>{o.render()})}transitionOut(o){return new Promise(e=>{setTimeout(()=>{e()},500)})}transitionIn(o){return new Promise(e=>{setTimeout(()=>{e()},500)})}};var Uo=class{constructor(){this.resize()}resize(){document.documentElement.style.setProperty("--100vh",`${window.innerHeight}px`)}};var Wd=pl(_l(),1),qd=pl(Hd(),1);function Ir(){return Ir=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},Ir.apply(this,arguments)}function Gd(o,e){let t=o%e;return t<0&&(t+=e),t}var b0=["duration","easing"],xc=class{to(e,t={}){let{duration:i=1,easing:n=r=>r}=t,s=function(r,a){if(r==null)return{};var l,c,u={},h=Object.keys(r);for(c=0;c<h.length;c++)a.indexOf(l=h[c])>=0||(u[l]=r[l]);return u}(t,b0);this.target=e,this.fromKeys=Ir({},s),this.toKeys=Ir({},s),this.keys=Object.keys(Ir({},s)),this.keys.forEach(r=>{this.fromKeys[r]=e[r]}),this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0}stop(){this.isRunning=!1}raf(e){if(!this.isRunning)return;this.currentTime=Math.min(this.currentTime+e,this.duration);let t=this.easing(this.progress);this.keys.forEach(i=>{let n=this.fromKeys[i];this.target[i]=n+(this.toKeys[i]-n)*t}),t===1&&this.stop()}get progress(){return this.currentTime/this.duration}},Vo=class extends Wd.default{constructor({duration:e=1.2,easing:t=h=>Math.min(1,1.001-Math.pow(2,-10*h)),smooth:i=!0,smoothTouch:n=!1,touchMultiplier:s=2,direction:r="vertical",gestureDirection:a="vertical",infinite:l=!1,wrapper:c=window,content:u=document.body}={}){var h,d,m;super(),this.onWindowResize=()=>{this.wrapperWidth=window.innerWidth,this.wrapperHeight=window.innerHeight},this.onWrapperResize=([p])=>{if(p){let f=p.contentRect;this.wrapperWidth=f.width,this.wrapperHeight=f.height}},this.onContentResize=([p])=>{if(p){let f=p.contentRect;this.contentWidth=f.width,this.contentHeight=f.height}},this.onVirtualScroll=({deltaY:p,deltaX:f,originalEvent:_})=>{if(_.ctrlKey)return;if(this.smooth=_.changedTouches?this.smoothTouch:this.options.smooth,this.stopped)return void _.preventDefault();if(!this.smooth||_.buttons===4)return;this.smooth&&_.preventDefault();let y=0;y=this.gestureDirection==="both"?f+p:this.gestureDirection==="horizontal"?f:p,this.targetScroll-=y,this.scrollTo(this.targetScroll)},this.onScroll=p=>{this.isScrolling&&this.smooth||(this.targetScroll=this.scroll=this.lastScroll=this.wrapperNode[this.scrollProperty],this.notify())},window.lenisVersion="0.2.13",this.options={duration:e,easing:t,smooth:i,smoothTouch:n,touchMultiplier:s,direction:r,gestureDirection:a,infinite:l,wrapper:c,content:u},this.duration=e,this.easing=t,this.smooth=i,this.smoothTouch=n,this.touchMultiplier=s,this.direction=r,this.gestureDirection=a,this.infinite=l,this.wrapperNode=c,this.contentNode=u,this.wrapperNode.addEventListener("scroll",this.onScroll),this.wrapperNode===window?(this.wrapperNode.addEventListener("resize",this.onWindowResize),this.onWindowResize()):(this.wrapperHeight=this.wrapperNode.offsetHeight,this.wrapperWidth=this.wrapperNode.offsetWidth,this.wrapperObserver=new ResizeObserver(this.onWrapperResize),this.wrapperObserver.observe(this.wrapperNode)),this.contentHeight=this.contentNode.offsetHeight,this.contentWidth=this.contentNode.offsetWidth,this.contentObserver=new ResizeObserver(this.onContentResize),this.contentObserver.observe(this.contentNode),this.targetScroll=this.scroll=this.lastScroll=this.wrapperNode[this.scrollProperty],this.animate=new xc;let g=((h=navigator)==null||(d=h.userAgentData)==null?void 0:d.platform)||((m=navigator)==null?void 0:m.platform)||"unknown";this.virtualScroll=new qd.default({el:this.wrapperNode,firefoxMultiplier:50,mouseMultiplier:g.includes("Win")?1:.4,useKeyboard:!1,touchMultiplier:this.touchMultiplier,useTouch:!0,passive:!1}),this.virtualScroll.on(this.onVirtualScroll)}get scrollProperty(){let e;return e=this.wrapperNode===window?this.direction==="horizontal"?"scrollX":"scrollY":this.direction==="horizontal"?"scrollLeft":"scrollTop",e}start(){this.stopped=!1}stop(){this.stopped=!0,this.animate.stop()}destroy(){var e;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),(e=this.wrapperObserver)==null||e.disconnect(),this.contentObserver.disconnect()}get limit(){return this.direction==="horizontal"?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}raf(e){let t=e-(this.now||0);this.now=e,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*t),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)}get velocity(){return this.scroll-this.lastScroll}setScroll(e){let t=this.infinite?Gd(e,this.limit):e;this.direction==="horizontal"?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)}notify(){let e=this.infinite?Gd(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:e,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:e/this.limit})}scrollTo(e,{offset:t=0,immediate:i=!1,duration:n=this.duration,easing:s=this.easing}={}){if(e==null)return;let r;if(typeof e=="number")r=e;else if(e==="top"||e==="#top")r=0;else if(e==="bottom")r=this.limit;else{let a;if(typeof e=="string")a=document.querySelector(e);else{if(e==null||!e.nodeType)return;a=e}if(!a)return;let l=0;if(this.wrapperNode!==window){let u=this.wrapperNode.getBoundingClientRect();l=this.direction==="horizontal"?u.left:u.top}let c=a.getBoundingClientRect();r=(this.direction==="horizontal"?c.left:c.top)+this.scroll-l}r+=t,this.targetScroll=this.infinite?r:Math.max(0,Math.min(r,this.limit)),!this.smooth||i?this.setScroll(this.targetScroll):this.animate.to(this,{duration:n,easing:s,scroll:this.targetScroll})}};function Xd(o){return o===1?1:1-Math.pow(2,-10*o)}var Ho=class extends Vo{constructor(){super({duration:.5,smooth:!0,easing:Xd,direction:"vertical",smoothTouch:!1,touchMultiplier:2}),this.isActive=!0,this.timeFactor=3,this.time=0,this.init()}init(){this.y=window.scrollY,this.max=window.innerHeight,this.speed=0,this.percent=0,this.changeClass=document.querySelector(".to-gold"),this.on("scroll",({scroll:o,limit:e,velocity:t,progress:i})=>{this.y=o||0,this.max=e||window.innerHeight,this.speed=t||0,this.percent=i||0,this.y>window.innerHeight/2?this.changeClass.classList.contains("to-gold")&&this.changeClass.classList.remove("to-gold"):this.changeClass.classList.contains("to-gold")||this.changeClass.classList.add("to-gold")})}resize(){}render(){!this.isActive||this.raf(this.time+=this.timeFactor)}set active(o){this.isActive=o}};var Iu="146";var w0=0,Yd=1,M0=2;var xp=1,S0=2,Ur=3,En=0,di=1,tt=2,An=0,js=1,pa=2,Zd=3,Jd=4,D0=5,Ys=100,T0=101,A0=102,Kd=103,jd=104,E0=200,C0=201,P0=202,R0=203,vp=204,yp=205,L0=206,I0=207,F0=208,z0=209,O0=210,N0=0,k0=1,B0=2,$c=3,U0=4,V0=5,H0=6,G0=7,bp=0,W0=1,q0=2,nn=0,X0=1,Y0=2,Z0=3,J0=4,K0=5,wp=300,er=301,tr=302,Qc=303,eu=304,Ga=306,rs=1e3,Qt=1001,qr=1002,mt=1003,ma=1004;var ga=1005;var kt=1006,Fu=1007;var ds=1008;var os=1009,j0=1010,$0=1011,Mp=1012,Q0=1013,ts=1014,Tn=1015,Xr=1016,e_=1017,t_=1018,$s=1020,i_=1021,n_=1022,hi=1023,s_=1024,r_=1025,ns=1026,ir=1027,o_=1028,a_=1029,l_=1030,c_=1031,u_=1033,vc=33776,yc=33777,bc=33778,wc=33779,$d=35840,Qd=35841,ef=35842,tf=35843,h_=36196,nf=37492,sf=37496,rf=37808,of=37809,af=37810,lf=37811,cf=37812,uf=37813,hf=37814,df=37815,ff=37816,pf=37817,mf=37818,gf=37819,_f=37820,xf=37821,vf=36492,d_=2200,f_=2201,p_=2202,nr=2300,as=2301,Mc=2302,Zs=2400,Js=2401,_a=2402,zu=2500,m_=2501;var Sp=1,Ou=2,ls=3e3,Ue=3001,g_=3200,__=3201,Wa=0,x_=1;var Qi="srgb",is="srgb-linear";var Sc=7680;var v_=519,tu=35044;var yf="300 es",iu=1035,sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=1234567,Hr=Math.PI/180,Yr=180/Math.PI;function Mi(){let o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[o&255]+Ct[o>>8&255]+Ct[o>>16&255]+Ct[o>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Bt(o,e,t){return Math.max(e,Math.min(t,o))}function Nu(o,e){return(o%e+e)%e}function y_(o,e,t,i,n){return i+(o-e)*(n-i)/(t-e)}function b_(o,e,t){return o!==e?(t-o)/(e-o):0}function Gr(o,e,t){return(1-t)*o+t*e}function w_(o,e,t,i){return Gr(o,e,1-Math.exp(-t*i))}function M_(o,e=1){return e-Math.abs(Nu(o,e*2)-e)}function S_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function D_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function T_(o,e){return o+Math.floor(Math.random()*(e-o+1))}function A_(o,e){return o+Math.random()*(e-o)}function E_(o){return o*(.5-Math.random())}function C_(o){o!==void 0&&(bf=o);let e=bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P_(o){return o*Hr}function R_(o){return o*Yr}function nu(o){return(o&o-1)===0&&o!==0}function Dp(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function xa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function L_(o,e,t,i,n){let s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+i)/2),u=r((e+i)/2),h=s((e-i)/2),d=r((e-i)/2),m=s((i-e)/2),g=r((i-e)/2);switch(n){case"XYX":o.set(a*u,l*h,l*d,a*c);break;case"YZY":o.set(l*d,a*u,l*h,a*c);break;case"ZXZ":o.set(l*h,l*d,a*u,a*c);break;case"XZX":o.set(a*u,l*g,l*m,a*c);break;case"YXY":o.set(l*m,a*u,l*g,a*c);break;case"ZYZ":o.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Tp=Object.freeze({__proto__:null,DEG2RAD:Hr,RAD2DEG:Yr,generateUUID:Mi,clamp:Bt,euclideanModulo:Nu,mapLinear:y_,inverseLerp:b_,lerp:Gr,damp:w_,pingpong:M_,smoothstep:S_,smootherstep:D_,randInt:T_,randFloat:A_,randFloatSpread:E_,seededRandom:C_,degToRad:P_,radToDeg:R_,isPowerOfTwo:nu,ceilPowerOfTwo:Dp,floorPowerOfTwo:xa,setQuaternionFromProperEuler:L_,normalize:Xe,denormalize:tn}),ge=class{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class{constructor(){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,r,a,l,c){let u=this.elements;return u[0]=e,u[1]=n,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],p=n[0],f=n[3],_=n[6],y=n[1],v=n[4],b=n[7],w=n[2],S=n[5],E=n[8];return s[0]=r*p+a*y+l*w,s[3]=r*f+a*v+l*S,s[6]=r*_+a*b+l*E,s[1]=c*p+u*y+h*w,s[4]=c*f+u*v+h*S,s[7]=c*_+u*b+h*E,s[2]=d*p+m*y+g*w,s[5]=d*f+m*v+g*S,s[8]=d*_+m*b+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*a*c-i*s*u+i*a*l+n*s*c-n*r*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*r-a*c,d=a*l-u*s,m=c*s-r*l,g=t*h+i*d+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=h*p,e[1]=(n*c-u*i)*p,e[2]=(a*i-n*r)*p,e[3]=d*p,e[4]=(u*t-n*l)*p,e[5]=(n*s-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(r*t-i*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-n*c,n*l,-n*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),n=this.elements,s=n[0],r=n[3],a=n[6],l=n[1],c=n[4],u=n[7];return n[0]=t*s+i*l,n[3]=t*r+i*c,n[6]=t*a+i*u,n[1]=-i*s+t*l,n[4]=-i*r+t*c,n[7]=-i*a+t*u,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function Ap(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Zr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fa(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var Dc={[Qi]:{[is]:ss},[is]:{[Qi]:fa}},xi={legacyMode:!0,get workingColorSpace(){return is},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Dc[e]&&Dc[e][t]!==void 0){let i=Dc[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},vi={h:0,s:0,l:0},Go={h:0,s:0,l:0};function Tc(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Wo(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}var fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xi.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=is){return this.r=e,this.g=t,this.b=i,xi.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=is){if(e=Nu(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Tc(r,s,e+1/3),this.g=Tc(r,s,e),this.b=Tc(r,s,e-1/3)}return xi.toWorkingColorSpace(this,n),this}setStyle(e,t=Qi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xi.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xi.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xi.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xi.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qi){let i=Ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qi){return xi.fromWorkingColorSpace(Wo(this,at),e),Bt(at.r*255,0,255)<<16^Bt(at.g*255,0,255)<<8^Bt(at.b*255,0,255)<<0}getHexString(e=Qi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=is){xi.fromWorkingColorSpace(Wo(this,at),t);let i=at.r,n=at.g,s=at.b,r=Math.max(i,n,s),a=Math.min(i,n,s),l,c,u=(a+r)/2;if(a===r)l=0,c=0;else{let h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=is){return xi.fromWorkingColorSpace(Wo(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=Qi){return xi.fromWorkingColorSpace(Wo(this,at),e),e!==Qi?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(vi),vi.h+=e,vi.s+=t,vi.l+=i,this.setHSL(vi.h,vi.s,vi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Go);let i=Gr(vi.h,Go.h,t),n=Gr(vi.s,Go.s,t),s=Gr(vi.l,Go.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};fe.NAMES=Ep;var Is,va=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=Zr("canvas")),Is.width=e.width,Is.height=e.height;let i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=ss(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ss(t[i]/255)*255):t[i]=ss(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ya=class{constructor(e=null){this.isSource=!0,this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(Ac(n[r].image)):s.push(Ac(n[r]))}else s=Ac(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Ac(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?va.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var I_=0,_t=class extends sn{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,i=Qt,n=Qt,s=kt,r=ds,a=hi,l=os,c=1,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Mi(),this.name="",this.source=new ya(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=wp;var Ve=class{constructor(e=0,t=0,i=0,n=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(m+1)/2,w=(_+1)/2,S=(u+d)/4,E=(h+p)/4,x=(g+f)/4;return v>b&&v>w?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=S/i,s=E/i):b>w?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=S/n,s=x/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=E/s,n=x/s),this.set(i,n,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(h-p)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ut=class extends sn{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);let n={width:e,height:t,depth:1};this.texture=new _t(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ba=class extends _t{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=mt,this.minFilter=mt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var su=class extends _t{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=mt,this.minFilter=mt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],d=s[r+0],m=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==m||u!==g){let f=1-a,_=l*d+c*m+u*g+h*p,y=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){let w=Math.sqrt(v),S=Math.atan2(w,_*y);f=Math.sin(f*S)/w,a=Math.sin(a*S)/w}let b=a*y;if(l=l*f+d*b,c=c*f+m*b,u=u*f+g*b,h=h*f+p*b,f===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,r){let a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[r],d=s[r+1],m=s[r+2],g=s[r+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,n=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(s/2),d=l(i/2),m=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(r-n)*m}else if(i>a&&i>h){let m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(n+r)/m,this._z=(s+c)/m}else if(a>h){let m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(n+r)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+h-i-a);this._w=(r-n)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+r*a+n*c-s*l,this._y=n*u+r*l+s*a-i*c,this._z=s*u+r*c+i*l-n*a,this._w=r*u-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,r=this._w,a=r*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=r*h+this._w*d,this._x=i*h+this._x*d,this._y=n*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*n-a*i,u=l*i+a*t-s*n,h=l*n+s*i-r*t,d=-s*t-r*i-a*n;return this.x=c*l+d*-s+u*-a-h*-r,this.y=u*l+d*-r+h*-s-c*-a,this.z=h*l+d*-a+c*-r-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*r-i*l,this.z=i*a-n*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new O,wf=new Zt,rn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<i&&(i=h),d<n&&(n=d),u>s&&(s=u),h>r&&(r=h),d>a&&(a=d)}return this.min.set(t,i,n),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<i&&(i=h),d<n&&(n=d),u>s&&(s=u),h>r&&(r=h),d>a&&(a=d)}return this.min.set(t,i,n),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Kn.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox),Cc.applyMatrix4(e.matrixWorld),this.union(Cc);let n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),qo.subVectors(this.max,Fr),Fs.subVectors(e.a,Fr),zs.subVectors(e.b,Fr),Os.subVectors(e.c,Fr),xn.subVectors(zs,Fs),vn.subVectors(Os,zs),jn.subVectors(Fs,Os);let t=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-jn.z,jn.y,xn.z,0,-xn.x,vn.z,0,-vn.x,jn.z,0,-jn.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-jn.y,jn.x,0];return!Pc(t,Fs,zs,Os,qo)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Fs,zs,Os,qo))?!1:(Xo.crossVectors(xn,vn),t=[Xo.x,Xo.y,Xo.z],Pc(t,Fs,zs,Os,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yi=[new O,new O,new O,new O,new O,new O,new O,new O],Kn=new O,Cc=new rn,Fs=new O,zs=new O,Os=new O,xn=new O,vn=new O,jn=new O,Fr=new O,qo=new O,Xo=new O,$n=new O;function Pc(o,e,t,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){$n.fromArray(o,s);let a=n.x*Math.abs($n.x)+n.y*Math.abs($n.y)+n.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=i.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var F_=new rn,zr=new O,Rc=new O,on=class{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):F_.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(zr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Rc)),this.expandByPoint(zr.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new O,Lc=new O,Yo=new O,yn=new O,Ic=new O,Zo=new O,Fc=new O,Jr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.direction).multiplyScalar(t).add(this.origin),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Lc.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Lc);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Yo),a=yn.dot(this.direction),l=-yn.dot(Yo),c=yn.lengthSq(),u=Math.abs(1-r*r),h,d,m,g;if(u>0)if(h=r*l-a,d=r*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let p=1/u;h*=p,d*=p,m=h*(h+r*d+2*a)+d*(r*h+d+2*l)+c}else d=s,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),n&&n.copy(Yo).multiplyScalar(d).add(Lc),m}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);let i=Zi.dot(this.direction),n=Zi.dot(Zi)-i*i,s=e.radius*e.radius;if(n>s)return null;let r=Math.sqrt(s-n),a=i-r,l=i+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,n,s){Ic.subVectors(t,e),Zo.subVectors(i,e),Fc.crossVectors(Ic,Zo);let r=this.direction.dot(Fc),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;yn.subVectors(this.origin,e);let l=a*this.direction.dot(Zo.crossVectors(yn,Zo));if(l<0)return null;let c=a*this.direction.dot(Ic.cross(yn));if(c<0||l+c>r)return null;let u=-a*yn.dot(Fc);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,r,a,l,c,u,h,d,m,g,p,f){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=s,_[5]=r,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),r=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=r*u,m=r*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){let d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d+p*a,t[4]=g*a-m,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=r*l}else if(e.order==="ZXY"){let d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d-p*a,t[4]=-r*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=r*u,t[9]=p-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){let d=r*u,m=r*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){let d=r*l,m=r*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){let d=r*l,m=r*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=r*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,O_)}lookAt(e,t,i){let n=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),bn.crossVectors(i,jt),bn.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),bn.crossVectors(i,jt)),bn.normalize(),Jo.crossVectors(jt,bn),n[0]=bn.x,n[4]=Jo.x,n[8]=jt.x,n[1]=bn.y,n[5]=Jo.y,n[9]=jt.y,n[2]=bn.z,n[6]=Jo.z,n[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],p=i[6],f=i[10],_=i[14],y=i[3],v=i[7],b=i[11],w=i[15],S=n[0],E=n[4],x=n[8],M=n[12],L=n[1],H=n[5],q=n[9],I=n[13],P=n[2],F=n[6],R=n[10],B=n[14],z=n[3],T=n[7],N=n[11],X=n[15];return s[0]=r*S+a*L+l*P+c*z,s[4]=r*E+a*H+l*F+c*T,s[8]=r*x+a*q+l*R+c*N,s[12]=r*M+a*I+l*B+c*X,s[1]=u*S+h*L+d*P+m*z,s[5]=u*E+h*H+d*F+m*T,s[9]=u*x+h*q+d*R+m*N,s[13]=u*M+h*I+d*B+m*X,s[2]=g*S+p*L+f*P+_*z,s[6]=g*E+p*H+f*F+_*T,s[10]=g*x+p*q+f*R+_*N,s[14]=g*M+p*I+f*B+_*X,s[3]=y*S+v*L+b*P+w*z,s[7]=y*E+v*H+b*F+w*T,s[11]=y*x+v*q+b*R+w*N,s[15]=y*M+v*I+b*B+w*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*l*h-n*c*h-s*a*d+i*c*d+n*a*m-i*l*m)+p*(+t*l*m-t*c*d+s*r*d-n*r*m+n*c*u-s*l*u)+f*(+t*c*h-t*a*m-s*r*h+i*r*m+s*a*u-i*c*u)+_*(-n*a*u-t*l*h+t*a*d+n*r*h-i*r*d+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],y=h*f*c-p*d*c+p*l*m-a*f*m-h*l*_+a*d*_,v=g*d*c-u*f*c-g*l*m+r*f*m+u*l*_-r*d*_,b=u*p*c-g*h*c+g*a*m-r*p*m-u*a*_+r*h*_,w=g*h*l-u*p*l-g*a*d+r*p*d+u*a*f-r*h*f,S=t*y+i*v+n*b+s*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return e[0]=y*E,e[1]=(p*d*s-h*f*s-p*n*m+i*f*m+h*n*_-i*d*_)*E,e[2]=(a*f*s-p*l*s+p*n*c-i*f*c-a*n*_+i*l*_)*E,e[3]=(h*l*s-a*d*s-h*n*c+i*d*c+a*n*m-i*l*m)*E,e[4]=v*E,e[5]=(u*f*s-g*d*s+g*n*m-t*f*m-u*n*_+t*d*_)*E,e[6]=(g*l*s-r*f*s-g*n*c+t*f*c+r*n*_-t*l*_)*E,e[7]=(r*d*s-u*l*s+u*n*c-t*d*c-r*n*m+t*l*m)*E,e[8]=b*E,e[9]=(g*h*s-u*p*s-g*i*m+t*p*m+u*i*_-t*h*_)*E,e[10]=(r*p*s-g*a*s+g*i*c-t*p*c-r*i*_+t*a*_)*E,e[11]=(u*a*s-r*h*s-u*i*c+t*h*c+r*i*m-t*a*m)*E,e[12]=w*E,e[13]=(u*p*n-g*h*n+g*i*d-t*p*d-u*i*f+t*h*f)*E,e[14]=(g*a*n-r*p*n-g*i*l+t*p*l+r*i*f-t*a*f)*E,e[15]=(r*h*n-u*a*n+u*i*l-t*h*l-r*i*d+t*a*d)*E,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,a=e.y,l=e.z,c=s*r,u=s*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*r,0,c*l-n*a,u*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,u=r+r,h=a+a,d=s*c,m=s*u,g=s*h,p=r*u,f=r*h,_=a*h,y=l*c,v=l*u,b=l*h,w=i.x,S=i.y,E=i.z;return n[0]=(1-(p+_))*w,n[1]=(m+b)*w,n[2]=(g-v)*w,n[3]=0,n[4]=(m-b)*S,n[5]=(1-(d+_))*S,n[6]=(f+y)*S,n[7]=0,n[8]=(g+v)*E,n[9]=(f-y)*E,n[10]=(1-(d+p))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Ns.set(n[0],n[1],n[2]).length(),r=Ns.set(n[4],n[5],n[6]).length(),a=Ns.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],yi.copy(this);let c=1/s,u=1/r,h=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),i.x=s,i.y=r,i.z=a,this}makePerspective(e,t,i,n,s,r){let a=this.elements,l=2*s/(t-e),c=2*s/(i-n),u=(t+e)/(t-e),h=(i+n)/(i-n),d=-(r+s)/(r-s),m=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,r){let a=this.elements,l=1/(t-e),c=1/(i-n),u=1/(r-s),h=(t+e)*l,d=(i+n)*c,m=(r+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ns=new O,yi=new Ae,z_=new O(0,0,0),O_=new O(1,1,1),bn=new O,Jo=new O,jt=new O,Mf=new Ae,Sf=new Zt,cs=class{constructor(e=0,t=0,i=0,n=cs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],r=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Bt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};cs.DefaultOrder="XYZ";cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},N_=0,Df=new O,ks=new Zt,Ji=new Ae,Ko=new O,Or=new O,k_=new O,B_=new Zt,Tf=new O(1,0,0),Af=new O(0,1,0),Ef=new O(0,0,1),U_={type:"added"},Cf={type:"removed"},Ye=class extends sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();let e=new O,t=new cs,i=new Zt,n=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Yt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DefaultMatrixWorldAutoUpdate,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Tf,e)}rotateY(e){return this.rotateOnAxis(Af,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tf,e)}translateY(e){return this.translateOnAxis(Af,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ko.copy(e):Ko.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Or,Ko,this.up):Ji.lookAt(Ko,Or,this.up),this.quaternion.setFromRotationMatrix(Ji),n&&(Ji.extractRotation(n.matrixWorld),ks.setFromRotationMatrix(Ji),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(U_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Cf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,k_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,r=n.length;s<r;s++){let a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){let a=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Ye.DefaultUp=new O(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.DefaultMatrixWorldAutoUpdate=!0;var bi=new O,Ki=new O,zc=new O,ji=new O,Bs=new O,Us=new O,Pf=new O,Oc=new O,Nc=new O,kc=new O,wi=class{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),bi.subVectors(e,t),n.cross(bi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){bi.subVectors(n,t),Ki.subVectors(i,t),zc.subVectors(e,t);let r=bi.dot(bi),a=bi.dot(Ki),l=bi.dot(zc),c=Ki.dot(Ki),u=Ki.dot(zc),h=r*c-a*a;if(h===0)return s.set(-2,-1,-1);let d=1/h,m=(c*l-a*u)*d,g=(r*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ji),ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,t,i,n,s,r,a,l){return this.getBarycoord(e,t,i,n,ji),l.set(0,0),l.addScaledVector(s,ji.x),l.addScaledVector(r,ji.y),l.addScaledVector(a,ji.z),l}static isFrontFacing(e,t,i,n){return bi.subVectors(i,t),Ki.subVectors(e,t),bi.cross(Ki).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),bi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return wi.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,r,a;Bs.subVectors(n,i),Us.subVectors(s,i),Oc.subVectors(e,i);let l=Bs.dot(Oc),c=Us.dot(Oc);if(l<=0&&c<=0)return t.copy(i);Nc.subVectors(e,n);let u=Bs.dot(Nc),h=Us.dot(Nc);if(u>=0&&h<=u)return t.copy(n);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(i).addScaledVector(Bs,r);kc.subVectors(e,s);let m=Bs.dot(kc),g=Us.dot(kc);if(g>=0&&m<=g)return t.copy(s);let p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Us,a);let f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Pf.subVectors(s,n),a=(h-u)/(h-u+(m-g)),t.copy(n).addScaledVector(Pf,a);let _=1/(f+p+d);return r=p*_,a=d*_,t.copy(i).addScaledVector(Bs,r).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},V_=0,ei=class extends sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=js,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=vp,this.blendDst=yp,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sc,this.stencilZFail=Sc,this.stencilZPass=Sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){let r=[];for(let a in s){let l=s[a];delete l.metadata,r.push(l)}return r}if(t){let s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fi=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rt=new O,jo=new ge,wt=class{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=tu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Ma=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sa=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Mt=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var H_=0,ui=new Ae,Bc=new Ye,Vs=new O,$t=new rn,Nr=new rn,pt=new O,St=class extends sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?Sa:Ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors($t.min,Nr.min),$t.expandByPoint(pt),pt.addVectors($t.max,Nr.max),$t.expandByPoint(pt)):($t.expandByPoint(Nr.min),$t.expandByPoint(Nr.max))}$t.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)pt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(pt));if(t)for(let s=0,r=t.length;s<r;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),pt.add(Vs)),n=Math.max(n,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,n=t.position.array,s=t.normal.array,r=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new O,u[L]=new O;let h=new O,d=new O,m=new O,g=new ge,p=new ge,f=new ge,_=new O,y=new O;function v(L,H,q){h.fromArray(n,L*3),d.fromArray(n,H*3),m.fromArray(n,q*3),g.fromArray(r,L*2),p.fromArray(r,H*2),f.fromArray(r,q*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);let I=1/(p.x*f.y-f.x*p.y);!isFinite(I)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(I),y.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(I),c[L].add(_),c[H].add(_),c[q].add(_),u[L].add(y),u[H].add(y),u[q].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let L=0,H=b.length;L<H;++L){let q=b[L],I=q.start,P=q.count;for(let F=I,R=I+P;F<R;F+=3)v(i[F+0],i[F+1],i[F+2])}let w=new O,S=new O,E=new O,x=new O;function M(L){E.fromArray(s,L*3),x.copy(E);let H=c[L];w.copy(H),w.sub(E.multiplyScalar(E.dot(H))).normalize(),S.crossVectors(x,H);let I=S.dot(u[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=I}for(let L=0,H=b.length;L<H;++L){let q=b[L],I=q.start,P=q.count;for(let F=I,R=I+P;F<R;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let n=new O,s=new O,r=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,f),u.subVectors(r,s),h.subVectors(n,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),h.subVectors(n,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new St,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Rf=new Ae,Hs=new Jr,Uc=new on,wn=new O,Mn=new O,Sn=new O,Vc=new O,Hc=new O,Gc=new O,$o=new O,Qo=new O,ea=new O,ta=new ge,ia=new ge,na=new ge,Wc=new O,sa=new O,gt=class extends Ye{constructor(e=new St,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(s),e.ray.intersectsSphere(Uc)===!1)||(Rf.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(Rf),i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1))return;let r,a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,h=i.attributes.uv,d=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(n))for(let p=0,f=m.length;p<f;p++){let _=m[p],y=n[_.materialIndex],v=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,S=b;w<S;w+=3){let E=a.getX(w),x=a.getX(w+1),M=a.getX(w+2);r=ra(this,y,e,Hs,l,c,u,h,d,E,x,M),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=p,y=f;_<y;_+=3){let v=a.getX(_),b=a.getX(_+1),w=a.getX(_+2);r=ra(this,n,e,Hs,l,c,u,h,d,v,b,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let p=0,f=m.length;p<f;p++){let _=m[p],y=n[_.materialIndex],v=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=v,S=b;w<S;w+=3){let E=w,x=w+1,M=w+2;r=ra(this,y,e,Hs,l,c,u,h,d,E,x,M),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{let p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=p,y=f;_<y;_+=3){let v=_,b=_+1,w=_+2;r=ra(this,n,e,Hs,l,c,u,h,d,v,b,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}};function G_(o,e,t,i,n,s,r,a){let l;if(e.side===di?l=i.intersectTriangle(r,s,n,!0,a):l=i.intersectTriangle(n,s,r,e.side!==tt,a),l===null)return null;sa.copy(a),sa.applyMatrix4(o.matrixWorld);let c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:o}}function ra(o,e,t,i,n,s,r,a,l,c,u,h){wn.fromBufferAttribute(n,c),Mn.fromBufferAttribute(n,u),Sn.fromBufferAttribute(n,h);let d=o.morphTargetInfluences;if(s&&d){$o.set(0,0,0),Qo.set(0,0,0),ea.set(0,0,0);for(let g=0,p=s.length;g<p;g++){let f=d[g],_=s[g];f!==0&&(Vc.fromBufferAttribute(_,c),Hc.fromBufferAttribute(_,u),Gc.fromBufferAttribute(_,h),r?($o.addScaledVector(Vc,f),Qo.addScaledVector(Hc,f),ea.addScaledVector(Gc,f)):($o.addScaledVector(Vc.sub(wn),f),Qo.addScaledVector(Hc.sub(Mn),f),ea.addScaledVector(Gc.sub(Sn),f)))}wn.add($o),Mn.add(Qo),Sn.add(ea)}o.isSkinnedMesh&&(o.boneTransform(c,wn),o.boneTransform(u,Mn),o.boneTransform(h,Sn));let m=G_(o,e,t,i,wn,Mn,Sn,Wc);if(m){a&&(ta.fromBufferAttribute(a,c),ia.fromBufferAttribute(a,u),na.fromBufferAttribute(a,h),m.uv=wi.getUV(Wc,wn,Mn,Sn,ta,ia,na,new ge)),l&&(ta.fromBufferAttribute(l,c),ia.fromBufferAttribute(l,u),na.fromBufferAttribute(l,h),m.uv2=wi.getUV(Wc,wn,Mn,Sn,ta,ia,na,new ge));let g={a:c,b:u,c:h,normal:new O,materialIndex:0};wi.getNormal(wn,Mn,Sn,g.normal),m.face=g}return m}var us=class extends St{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};let a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],u=[],h=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function g(p,f,_,y,v,b,w,S,E,x,M){let L=b/E,H=w/x,q=b/2,I=w/2,P=S/2,F=E+1,R=x+1,B=0,z=0,T=new O;for(let N=0;N<R;N++){let X=N*H-I;for(let G=0;G<F;G++){let $=G*L-q;T[p]=$*y,T[f]=X*v,T[_]=P,c.push(T.x,T.y,T.z),T[p]=0,T[f]=0,T[_]=S>0?1:-1,u.push(T.x,T.y,T.z),h.push(G/E),h.push(1-N/x),B+=1}}for(let N=0;N<x;N++)for(let X=0;X<E;X++){let G=d+X+F*N,$=d+X+F*(N+1),te=d+(X+1)+F*(N+1),se=d+(X+1)+F*N;l.push(G,$,se),l.push($,te,se),z+=6}a.addGroup(m,z,M),m+=z,d+=B}}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sr(o){let e={};for(let t in o){e[t]={};for(let i in o[t]){let n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Nt(o){let e={};for(let t=0;t<o.length;t++){let i=sr(o[t]);for(let n in i)e[n]=i[n]}return e}function W_(o){let e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}var dr={clone:sr,merge:Nt},q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,He=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Da=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},lt=class extends Da{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=90,Ws=1,ru=class extends Ye{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let n=new lt(Gs,Ws,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new O(1,0,0)),this.add(n);let s=new lt(Gs,Ws,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);let r=new lt(Gs,Ws,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new O(0,1,0)),this.add(r);let a=new lt(Gs,Ws,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new O(0,-1,0)),this.add(a);let l=new lt(Gs,Ws,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,1)),this.add(l);let c=new lt(Gs,Ws,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new O(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[n,s,r,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,r),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},Ta=class extends _t{constructor(e,t,i,n,s,r,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,n,s,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ou=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ta(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new us(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:An});s.uniforms.tEquirect.value=t;let r=new gt(n,s),a=t.minFilter;return t.minFilter===ds&&(t.minFilter=kt),new ru(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}},qc=new O,Y_=new O,Z_=new Yt,en=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=qc.subVectors(i,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(qc),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Z_.getNormalMatrix(e),n=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new on,oa=new O,Kr=class{constructor(e=new en,t=new en,i=new en,n=new en,s=new en,r=new en){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,n=i[0],s=i[1],r=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7],d=i[8],m=i[9],g=i[10],p=i[11],f=i[12],_=i[13],y=i[14],v=i[15];return t[0].setComponents(a-n,h-l,p-d,v-f).normalize(),t[1].setComponents(a+n,h+l,p+d,v+f).normalize(),t[2].setComponents(a+s,h+c,p+m,v+_).normalize(),t[3].setComponents(a-s,h-c,p-m,v-_).normalize(),t[4].setComponents(a-r,h-u,p-g,v-y).normalize(),t[5].setComponents(a+r,h+u,p+g,v+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(oa.x=n.normal.x>0?e.max.x:e.min.x,oa.y=n.normal.y>0?e.max.y:e.min.y,oa.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cp(){let o=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function J_(o,e){let t=e.isWebGL2,i=new WeakMap;function n(c,u){let h=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){let d=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,d):(t?o.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(o.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h===void 0?i.set(c,n(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:r,remove:a,update:l}}var jr=class extends St{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,r=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){let y=_*d-r;for(let v=0;v<c;v++){let b=v*h-s;g.push(b,-y,0),p.push(0,0,1),f.push(v/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){let v=y+c*_,b=y+c*(_+1),w=y+1+c*(_+1),S=y+1+c*_;m.push(v,b,S),m.push(b,w,S)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(p,3)),this.setAttribute("uv",new Mt(f,2))}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}},K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix="vec3 transformed = vec3( position );",nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_x=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,qx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,av=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,uv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Pv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Uv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Vv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Hv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,qv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ey=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,oy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,my=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:K_,alphamap_pars_fragment:j_,alphatest_fragment:$_,alphatest_pars_fragment:Q_,aomap_fragment:ex,aomap_pars_fragment:tx,begin_vertex:ix,beginnormal_vertex:nx,bsdfs:sx,iridescence_fragment:rx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:cx,clipping_planes_vertex:ux,color_fragment:hx,color_pars_fragment:dx,color_pars_vertex:fx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:_x,displacementmap_pars_vertex:xx,displacementmap_vertex:vx,emissivemap_fragment:yx,emissivemap_pars_fragment:bx,encodings_fragment:wx,encodings_pars_fragment:Mx,envmap_fragment:Sx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Tx,envmap_pars_vertex:Ax,envmap_physical_pars_fragment:Bx,envmap_vertex:Ex,fog_vertex:Cx,fog_pars_vertex:Px,fog_fragment:Rx,fog_pars_fragment:Lx,gradientmap_pars_fragment:Ix,lightmap_fragment:Fx,lightmap_pars_fragment:zx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Nx,lights_pars_begin:kx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Vx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:qx,lights_fragment_begin:Xx,lights_fragment_maps:Yx,lights_fragment_end:Zx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:$x,map_fragment:Qx,map_pars_fragment:ev,map_particle_fragment:tv,map_particle_pars_fragment:iv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:sv,morphcolor_vertex:rv,morphnormal_vertex:ov,morphtarget_pars_vertex:av,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:uv,normal_pars_fragment:hv,normal_pars_vertex:dv,normal_vertex:fv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:xv,output_fragment:vv,packing:yv,premultiplied_alpha_fragment:bv,project_vertex:wv,dithering_fragment:Mv,dithering_pars_fragment:Sv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:Ev,shadowmap_vertex:Cv,shadowmask_pars_fragment:Pv,skinbase_vertex:Rv,skinning_pars_vertex:Lv,skinning_vertex:Iv,skinnormal_vertex:Fv,specularmap_fragment:zv,specularmap_pars_fragment:Ov,tonemapping_fragment:Nv,tonemapping_pars_fragment:kv,transmission_fragment:Bv,transmission_pars_fragment:Uv,uv_pars_fragment:Vv,uv_pars_vertex:Hv,uv_vertex:Gv,uv2_pars_fragment:Wv,uv2_pars_vertex:qv,uv2_vertex:Xv,worldpos_vertex:Yv,background_vert:Zv,background_frag:Jv,backgroundCube_vert:Kv,backgroundCube_frag:jv,cube_vert:$v,cube_frag:Qv,depth_vert:ey,depth_frag:ty,distanceRGBA_vert:iy,distanceRGBA_frag:ny,equirect_vert:sy,equirect_frag:ry,linedashed_vert:oy,linedashed_frag:ay,meshbasic_vert:ly,meshbasic_frag:cy,meshlambert_vert:uy,meshlambert_frag:hy,meshmatcap_vert:dy,meshmatcap_frag:fy,meshnormal_vert:py,meshnormal_frag:my,meshphong_vert:gy,meshphong_frag:_y,meshphysical_vert:xy,meshphysical_frag:vy,meshtoon_vert:yy,meshtoon_frag:by,points_vert:wy,points_frag:My,shadow_vert:Sy,shadow_frag:Dy,sprite_vert:Ty,sprite_frag:Ay},ne={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Yt},uv2Transform:{value:new Yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Yt}}},Ri={basic:{uniforms:Nt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Nt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Nt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Nt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Nt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Nt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Nt([ne.points,ne.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Nt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Nt([ne.common,ne.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Nt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Nt([ne.sprite,ne.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Nt([ne.common,ne.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Nt([ne.lights,ne.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ri.physical={uniforms:Nt([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Ey(o,e,t,i,n,s,r){let a=new fe(0),l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(f,_){let y=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));let b=o.xr,w=b.getSession&&b.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0),(o.autoClear||y)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ga)?(u===void 0&&(u=new gt(new us(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:sr(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==v||d!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,m=o.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new gt(new jr(2,2),new He({name:"BackgroundMaterial",uniforms:sr(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,m=o.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,_){i.buffers.color.setClear(f.r,f.g,f.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(f,_=1){a.set(f),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(a,l)},render:g}}function Cy(o,e,t,i){let n=o.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,a={},l=f(null),c=l,u=!1;function h(P,F,R,B,z){let T=!1;if(r){let N=p(B,R,F);c!==N&&(c=N,m(c.object)),T=_(P,B,R,z),T&&y(P,B,R,z)}else{let N=F.wireframe===!0;(c.geometry!==B.id||c.program!==R.id||c.wireframe!==N)&&(c.geometry=B.id,c.program=R.id,c.wireframe=N,T=!0)}z!==null&&t.update(z,34963),(T||u)&&(u=!1,x(P,F,R,B),z!==null&&o.bindBuffer(34963,t.get(z).buffer))}function d(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?o.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?o.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,F,R){let B=R.wireframe===!0,z=a[P.id];z===void 0&&(z={},a[P.id]=z);let T=z[F.id];T===void 0&&(T={},z[F.id]=T);let N=T[B];return N===void 0&&(N=f(d()),T[B]=N),N}function f(P){let F=[],R=[],B=[];for(let z=0;z<n;z++)F[z]=0,R[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:R,attributeDivisors:B,object:P,attributes:{},index:null}}function _(P,F,R,B){let z=c.attributes,T=F.attributes,N=0,X=R.getAttributes();for(let G in X)if(X[G].location>=0){let te=z[G],se=T[G];if(se===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;N++}return c.attributesNum!==N||c.index!==B}function y(P,F,R,B){let z={},T=F.attributes,N=0,X=R.getAttributes();for(let G in X)if(X[G].location>=0){let te=T[G];te===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));let se={};se.attribute=te,te&&te.data&&(se.data=te.data),z[G]=se,N++}c.attributes=z,c.attributesNum=N,c.index=B}function v(){let P=c.newAttributes;for(let F=0,R=P.length;F<R;F++)P[F]=0}function b(P){w(P,0)}function w(P,F){let R=c.newAttributes,B=c.enabledAttributes,z=c.attributeDivisors;R[P]=1,B[P]===0&&(o.enableVertexAttribArray(P),B[P]=1),z[P]!==F&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),z[P]=F)}function S(){let P=c.newAttributes,F=c.enabledAttributes;for(let R=0,B=F.length;R<B;R++)F[R]!==P[R]&&(o.disableVertexAttribArray(R),F[R]=0)}function E(P,F,R,B,z,T){i.isWebGL2===!0&&(R===5124||R===5125)?o.vertexAttribIPointer(P,F,R,z,T):o.vertexAttribPointer(P,F,R,B,z,T)}function x(P,F,R,B){if(i.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let z=B.attributes,T=R.getAttributes(),N=F.defaultAttributeValues;for(let X in T){let G=T[X];if(G.location>=0){let $=z[X];if($===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let te=$.normalized,se=$.itemSize,W=t.get($);if(W===void 0)continue;let Me=W.buffer,ce=W.type,ye=W.bytesPerElement;if($.isInterleavedBufferAttribute){let le=$.data,ze=le.stride,Se=$.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)w(G.location+me,le.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<G.locationSize;me++)b(G.location+me);o.bindBuffer(34962,Me);for(let me=0;me<G.locationSize;me++)E(G.location+me,se/G.locationSize,ce,te,ze*ye,(Se+se/G.locationSize*me)*ye)}else{if($.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)w(G.location+le,$.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<G.locationSize;le++)b(G.location+le);o.bindBuffer(34962,Me);for(let le=0;le<G.locationSize;le++)E(G.location+le,se/G.locationSize,ce,te,se*ye,se/G.locationSize*le*ye)}}else if(N!==void 0){let te=N[X];if(te!==void 0)switch(te.length){case 2:o.vertexAttrib2fv(G.location,te);break;case 3:o.vertexAttrib3fv(G.location,te);break;case 4:o.vertexAttrib4fv(G.location,te);break;default:o.vertexAttrib1fv(G.location,te)}}}}S()}function M(){q();for(let P in a){let F=a[P];for(let R in F){let B=F[R];for(let z in B)g(B[z].object),delete B[z];delete F[R]}delete a[P]}}function L(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let R in F){let B=F[R];for(let z in B)g(B[z].object),delete B[z];delete F[R]}delete a[P.id]}function H(P){for(let F in a){let R=a[F];if(R[P.id]===void 0)continue;let B=R[P.id];for(let z in B)g(B[z].object),delete B[z];delete R[P.id]}}function q(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:b,disableUnusedAttributes:S}}function Py(o,e,t,i){let n=i.isWebGL2,s;function r(c){s=c}function a(c,u){o.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(n)d=o,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=r,this.render=a,this.renderInstances=l}function Ry(o,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),f=o.getParameter(36347),_=o.getParameter(36348),y=o.getParameter(36349),v=d>0,b=r||e.has("OES_texture_float"),w=v&&b,S=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:S}}function Ly(o){let e=this,t=null,i=0,n=!1,s=!1,r=new en,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){let g=h.length!==0||d||i!==0||n;return n=d,t=u(h,m,0),i=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,m){let g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=o.get(h);if(!n||g===null||g.length===0||s&&!f)s?u(null):c();else{let y=s?0:i,v=y*4,b=_.clippingState||null;l.value=b,b=u(g,d,v,m);for(let w=0;w!==v;++w)b[w]=t[w];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,m,g){let p=h!==null?h.length:0,f=null;if(p!==0){if(f=l.value,g!==!0||f===null){let _=m+p*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<_)&&(f=new Float32Array(_));for(let v=0,b=m;v!==p;++v,b+=4)r.copy(h[v]).applyMatrix4(y,a),r.normal.toArray(f,b),f[b+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Iy(o){let e=new WeakMap;function t(r,a){return a===Qc?r.mapping=er:a===eu&&(r.mapping=tr),r}function i(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){let a=r.mapping;if(a===Qc||a===eu)if(e.has(r)){let l=e.get(r).texture;return t(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new ou(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){let a=r.target;a.removeEventListener("dispose",n);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Li=class extends Da{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,r=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ks=4,Lf=[.125,.215,.35,.446,.526,.582],es=20,Xc=new Li,If=new fe,Yc=null,Qn=(1+Math.sqrt(5))/2,Xs=1/Qn,Ff=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Qn,Xs),new O(0,Qn,-Xs),new O(Xs,0,Qn),new O(-Xs,0,Qn),new O(Qn,Xs,0),new O(-Qn,Xs,0)],Aa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Yc=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Xr,format:hi,encoding:ls,depthBuffer:!1},n=zf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fy(s)),this._blurMaterial=zy(s,e,t)}return n}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,i,n){let a=new lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(If),u.toneMapping=nn,u.autoClear=!1;let m=new fi({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1}),g=new gt(new us,m),p=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(If),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));let v=this._cubeSize;aa(n,y*v,_>2?v:0,v,v),u.setRenderTarget(n),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===er||e.mapping===tr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let s=n?this._cubemapMaterial:this._equirectMaterial,r=new gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Xc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Ff[(n-1)%Ff.length];this._blur(e,n-1,n,s,r)}t.autoClear=i}_blur(e,t,i,n,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new gt(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*es-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):es;f>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${es}`);let _=[],y=0;for(let E=0;E<es;++E){let x=E/p,M=Math.exp(-x*x/2);_.push(M),E===0?y+=M:E<f&&(y+=2*M)}for(let E=0;E<_.length;E++)_[E]=_[E]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let b=this._sizeLods[n],w=3*b*(n>v-Ks?n-v+Ks:0),S=4*(this._cubeSize-b);aa(t,w,S,3*b,2*b),l.setRenderTarget(t),l.render(h,Xc)}};function Fy(o){let e=[],t=[],i=[],n=o,s=o-Ks+1+Lf.length;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/a;r>o-Ks?l=Lf[r-o+Ks-1]:r===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,y=new Float32Array(p*g*m),v=new Float32Array(f*g*m),b=new Float32Array(_*g*m);for(let S=0;S<m;S++){let E=S%3*2/3-1,x=S>2?0:-1,M=[E,x,0,E+2/3,x,0,E+2/3,x+1,0,E,x,0,E+2/3,x+1,0,E,x+1,0];y.set(M,p*g*S),v.set(d,f*g*S);let L=[S,S,S,S,S,S];b.set(L,_*g*S)}let w=new St;w.setAttribute("position",new wt(y,p)),w.setAttribute("uv",new wt(v,f)),w.setAttribute("faceIndex",new wt(b,_)),e.push(w),n>Ks&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zf(o,e,t){let i=new Ut(o,e,t);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function zy(o,e,t){let i=new Float32Array(es),n=new O(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Of(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Nf(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oy(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qc||l===eu,u=l===er||l===tr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Aa(o)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||u&&h&&n(h)){t===null&&(t=new Aa(o));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Ny(o){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ky(o,e,t,i){let n={},s=new WeakMap;function r(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete n[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],34962);let m=h.morphAttributes;for(let g in m){let p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function c(h){let d=[],m=h.index,g=h.attributes.position,p=0;if(m!==null){let y=m.array;p=m.version;for(let v=0,b=y.length;v<b;v+=3){let w=y[v+0],S=y[v+1],E=y[v+2];d.push(w,S,S,E,E,w)}}else{let y=g.array;p=g.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let w=v+0,S=v+1,E=v+2;d.push(w,S,S,E,E,w)}}let f=new(Ap(d)?Sa:Ma)(d,1);f.version=p;let _=s.get(h);_&&e.remove(_),s.set(h,f)}function u(h){let d=s.get(h);if(d){let m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function By(o,e,t,i){let n=i.isWebGL2,s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){o.drawElements(s,m,a,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let p,f;if(n)p=o,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=h}function Uy(o){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Vy(o,e){return o[0]-e[0]}function Hy(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Gy(o,e,t){let i={},n=new Float32Array(8),s=new WeakMap,r=new Ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0,f=s.get(u);if(f===void 0||f.count!==p){let F=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",F)};f!==void 0&&f.texture.dispose();let v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],x=u.morphAttributes.color||[],M=0;v===!0&&(M=1),b===!0&&(M=2),w===!0&&(M=3);let L=u.attributes.position.count*M,H=1;L>e.maxTextureSize&&(H=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let q=new Float32Array(L*H*4*p),I=new ba(q,L,H,p);I.type=Tn,I.needsUpdate=!0;let P=M*4;for(let R=0;R<p;R++){let B=S[R],z=E[R],T=x[R],N=L*H*4*R;for(let X=0;X<B.count;X++){let G=X*P;v===!0&&(r.fromBufferAttribute(B,X),q[N+G+0]=r.x,q[N+G+1]=r.y,q[N+G+2]=r.z,q[N+G+3]=0),b===!0&&(r.fromBufferAttribute(z,X),q[N+G+4]=r.x,q[N+G+5]=r.y,q[N+G+6]=r.z,q[N+G+7]=0),w===!0&&(r.fromBufferAttribute(T,X),q[N+G+8]=r.x,q[N+G+9]=r.y,q[N+G+10]=r.z,q[N+G+11]=T.itemSize===4?r.w:1)}}f={count:p,texture:I,size:new ge(L,H)},s.set(u,f),u.addEventListener("dispose",F)}let _=0;for(let v=0;v<m.length;v++)_+=m[v];let y=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",y),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",f.size)}else{let g=m===void 0?0:m.length,p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];i[u.id]=p}for(let b=0;b<g;b++){let w=p[b];w[0]=b,w[1]=m[b]}p.sort(Hy);for(let b=0;b<8;b++)b<g&&p[b][1]?(a[b][0]=p[b][0],a[b][1]=p[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Vy);let f=u.morphAttributes.position,_=u.morphAttributes.normal,y=0;for(let b=0;b<8;b++){let w=a[b],S=w[0],E=w[1];S!==Number.MAX_SAFE_INTEGER&&E?(f&&u.getAttribute("morphTarget"+b)!==f[S]&&u.setAttribute("morphTarget"+b,f[S]),_&&u.getAttribute("morphNormal"+b)!==_[S]&&u.setAttribute("morphNormal"+b,_[S]),n[b]=E,y+=E):(f&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),n[b]=0)}let v=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function Wy(o,e,t,i){let n=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,h=e.get(l,u);return n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function r(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}var Pp=new _t,Rp=new ba,Lp=new su,Ip=new Ta,kf=[],Bf=[],Uf=new Float32Array(16),Vf=new Float32Array(9),Hf=new Float32Array(4);function fr(o,e,t){let i=o[0];if(i<=0||i>0)return o;let n=e*t,s=kf[n];if(s===void 0&&(s=new Float32Array(n),kf[n]=s),e!==0){i.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function ut(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function ht(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function qa(o,e){let t=Bf[e];t===void 0&&(t=new Int32Array(e),Bf[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function qy(o,e){let t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Xy(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;o.uniform2fv(this.addr,e),ht(t,e)}}function Yy(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;o.uniform3fv(this.addr,e),ht(t,e)}}function Zy(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;o.uniform4fv(this.addr,e),ht(t,e)}}function Jy(o,e){let t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Hf.set(i),o.uniformMatrix2fv(this.addr,!1,Hf),ht(t,i)}}function Ky(o,e){let t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Vf.set(i),o.uniformMatrix3fv(this.addr,!1,Vf),ht(t,i)}}function jy(o,e){let t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ut(t,i))return;Uf.set(i),o.uniformMatrix4fv(this.addr,!1,Uf),ht(t,i)}}function $y(o,e){let t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Qy(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;o.uniform2iv(this.addr,e),ht(t,e)}}function e1(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;o.uniform3iv(this.addr,e),ht(t,e)}}function t1(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;o.uniform4iv(this.addr,e),ht(t,e)}}function i1(o,e){let t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function n1(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;o.uniform2uiv(this.addr,e),ht(t,e)}}function s1(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;o.uniform3uiv(this.addr,e),ht(t,e)}}function r1(o,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;o.uniform4uiv(this.addr,e),ht(t,e)}}function o1(o,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Pp,n)}function a1(o,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Lp,n)}function l1(o,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ip,n)}function c1(o,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Rp,n)}function u1(o){switch(o){case 5126:return qy;case 35664:return Xy;case 35665:return Yy;case 35666:return Zy;case 35674:return Jy;case 35675:return Ky;case 35676:return jy;case 5124:case 35670:return $y;case 35667:case 35671:return Qy;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return i1;case 36294:return n1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}function h1(o,e){o.uniform1fv(this.addr,e)}function d1(o,e){let t=fr(e,this.size,2);o.uniform2fv(this.addr,t)}function f1(o,e){let t=fr(e,this.size,3);o.uniform3fv(this.addr,t)}function p1(o,e){let t=fr(e,this.size,4);o.uniform4fv(this.addr,t)}function m1(o,e){let t=fr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function g1(o,e){let t=fr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function _1(o,e){let t=fr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function x1(o,e){o.uniform1iv(this.addr,e)}function v1(o,e){o.uniform2iv(this.addr,e)}function y1(o,e){o.uniform3iv(this.addr,e)}function b1(o,e){o.uniform4iv(this.addr,e)}function w1(o,e){o.uniform1uiv(this.addr,e)}function M1(o,e){o.uniform2uiv(this.addr,e)}function S1(o,e){o.uniform3uiv(this.addr,e)}function D1(o,e){o.uniform4uiv(this.addr,e)}function T1(o,e,t){let i=this.cache,n=e.length,s=qa(t,n);ut(i,s)||(o.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Pp,s[r])}function A1(o,e,t){let i=this.cache,n=e.length,s=qa(t,n);ut(i,s)||(o.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Lp,s[r])}function E1(o,e,t){let i=this.cache,n=e.length,s=qa(t,n);ut(i,s)||(o.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Ip,s[r])}function C1(o,e,t){let i=this.cache,n=e.length,s=qa(t,n);ut(i,s)||(o.uniform1iv(this.addr,s),ht(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Rp,s[r])}function P1(o){switch(o){case 5126:return h1;case 35664:return d1;case 35665:return f1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return x1;case 35667:case 35671:return v1;case 35668:case 35672:return y1;case 35669:case 35673:return b1;case 5125:return w1;case 36294:return M1;case 36295:return S1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return C1}}var au=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=u1(t.type)}},lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=P1(t.type)}},cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let a=n[s];a.setValue(e,t[a.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Gf(o,e){o.seq.push(e),o.map[e.id]=e}function R1(o,e,t){let i=o.name,n=i.length;for(Zc.lastIndex=0;;){let s=Zc.exec(i),r=Zc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){Gf(t,c===void 0?new au(a,o,e):new lu(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new cu(a),Gf(t,h)),t=h}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);R1(s,r,this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let r=e[n];r.id in t&&i.push(r)}return i}};function Wf(o,e,t){let i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}var L1=0;function I1(o,e){let t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){let a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}function F1(o){switch(o){case ls:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function qf(o,e,t){let i=o.getShaderParameter(e,35713),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let r=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+I1(o.getShaderSource(e),r)}else return n}function z1(o,e){let t=F1(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function O1(o,e){let t;switch(e){case X0:t="Linear";break;case Y0:t="Reinhard";break;case Z0:t="OptimizedCineon";break;case J0:t="ACESFilmic";break;case K0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function N1(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function k1(o){let e=[];for(let t in o){let i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B1(o,e){let t={},i=o.getProgramParameter(e,35721);for(let n=0;n<i;n++){let s=o.getActiveAttrib(e,n),r=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Vr(o){return o!==""}function Xf(o,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yf(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(o){return o.replace(U1,V1)}function V1(o,e){let t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uu(t)}var H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(o){return o.replace(H1,G1)}function G1(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Jf(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xp?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ur&&(e="SHADOWMAP_TYPE_VSM"),e}function q1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bp:e="ENVMAP_BLENDING_MULTIPLY";break;case W0:e="ENVMAP_BLENDING_MIX";break;case q0:e="ENVMAP_BLENDING_ADD";break}return e}function Z1(o){let e=o.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function J1(o,e,t,i){let n=o.getContext(),s=t.defines,r=t.vertexShader,a=t.fragmentShader,l=W1(t),c=q1(t),u=X1(t),h=Y1(t),d=Z1(t),m=t.isWebGL2?"":N1(t),g=k1(s),p=n.createProgram(),f,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Vr).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Vr).join(`
`),_.length>0&&(_+=`
`)):(f=[Jf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),_=[m,Jf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Te.tonemapping_pars_fragment:"",t.toneMapping!==nn?O1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,z1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),r=uu(r),r=Xf(r,t),r=Yf(r,t),a=uu(a),a=Xf(a,t),a=Yf(a,t),r=Zf(r),a=Zf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let v=y+f+r,b=y+_+a,w=Wf(n,35633,v),S=Wf(n,35632,b);if(n.attachShader(p,w),n.attachShader(p,S),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),o.debug.checkShaderErrors){let M=n.getProgramInfoLog(p).trim(),L=n.getShaderInfoLog(w).trim(),H=n.getShaderInfoLog(S).trim(),q=!0,I=!0;if(n.getProgramParameter(p,35714)===!1){q=!1;let P=qf(n,w,"vertex"),F=qf(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+M+`
`+P+`
`+F)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||H==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:M,vertexShader:{log:L,prefix:f},fragmentShader:{log:H,prefix:_}})}n.deleteShader(w),n.deleteShader(S);let E;this.getUniforms=function(){return E===void 0&&(E=new Qs(n,p)),E};let x;return this.getAttributes=function(){return x===void 0&&(x=B1(n,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=S,this}var K1=0,hu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new du(e),t.set(e,i)),i}},du=class{constructor(e){this.id=K1++,this.code=e,this.usedTimes=0}};function j1(o,e,t,i,n,s,r){let a=new wa,l=new hu,c=[],u=n.isWebGL2,h=n.logarithmicDepthBuffer,d=n.vertexTextures,m=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,M,L,H,q){let I=H.fog,P=q.geometry,F=x.isMeshStandardMaterial?H.environment:null,R=(x.isMeshStandardMaterial?t:e).get(x.envMap||F),B=!!R&&R.mapping===Ga?R.image.height:null,z=g[x.type];x.precision!==null&&(m=n.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let T=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,N=T!==void 0?T.length:0,X=0;P.morphAttributes.position!==void 0&&(X=1),P.morphAttributes.normal!==void 0&&(X=2),P.morphAttributes.color!==void 0&&(X=3);let G,$,te,se;if(z){let ze=Ri[z];G=ze.vertexShader,$=ze.fragmentShader}else G=x.vertexShader,$=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);let W=o.getRenderTarget(),Me=x.alphaTest>0,ce=x.clearcoat>0,ye=x.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:x.type,vertexShader:G,fragmentShader:$,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?o.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ls,map:!!x.map,matcap:!!x.matcap,envMap:!!R,envMapMode:R&&R.mapping,envMapCubeUVHeight:B,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===x_,tangentSpaceNormalMap:x.normalMapType===Wa,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ue,clearcoat:ce,clearcoatMap:ce&&!!x.clearcoatMap,clearcoatRoughnessMap:ce&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ce&&!!x.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!x.iridescenceMap,iridescenceThicknessMap:ye&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===js,alphaMap:!!x.alphaMap,alphaTest:Me,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:nn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===tt,flipSided:x.side===di,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(M,x),y(M,x),M.push(o.outputEncoding)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputEncoding),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.combine),x.push(M.vertexUvs),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),x.push(a.mask)}function v(x){let M=g[x.type],L;if(M){let H=Ri[M];L=dr.clone(H.uniforms)}else L=x.uniforms;return L}function b(x,M){let L;for(let H=0,q=c.length;H<q;H++){let I=c[H];if(I.cacheKey===M){L=I,++L.usedTimes;break}}return L===void 0&&(L=new J1(o,M,x,s),c.push(L)),L}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function E(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:E}}function $1(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function i(s,r,a){o.get(s)[r]=a}function n(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Q1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Kf(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function jf(){let o=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(h,d,m,g,p,f){let _=o[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},o[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function a(h,d,m,g,p,f){let _=r(h,d,m,g,p,f);m.transmission>0?i.push(_):m.transparent===!0?n.push(_):t.push(_)}function l(h,d,m,g,p,f){let _=r(h,d,m,g,p,f);m.transmission>0?i.unshift(_):m.transparent===!0?n.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||Q1),i.length>1&&i.sort(d||Kf),n.length>1&&n.sort(d||Kf)}function u(){for(let h=e,d=o.length;h<d;h++){let m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:u,sort:c}}function eb(){let o=new WeakMap;function e(i,n){let s=o.get(i),r;return s===void 0?(r=new jf,o.set(i,[r])):n>=s.length?(r=new jf,s.push(r)):r=s[n],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function tb(){let o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new fe};break;case"SpotLight":t={position:new O,direction:new O,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new O,halfWidth:new O,halfHeight:new O};break}return o[e.id]=t,t}}}function ib(){let o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}var nb=0;function sb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rb(o,e){let t=new tb,i=ib(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)n.probe.push(new O);let s=new O,r=new Ae,a=new Ae;function l(u,h){let d=0,m=0,g=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,f=0,_=0,y=0,v=0,b=0,w=0,S=0,E=0,x=0;u.sort(sb);let M=h!==!0?Math.PI:1;for(let H=0,q=u.length;H<q;H++){let I=u[H],P=I.color,F=I.intensity,R=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=P.r*F*M,m+=P.g*F*M,g+=P.b*F*M;else if(I.isLightProbe)for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],F);else if(I.isDirectionalLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){let T=I.shadow,N=i.get(I);N.shadowBias=T.bias,N.shadowNormalBias=T.normalBias,N.shadowRadius=T.radius,N.shadowMapSize=T.mapSize,n.directionalShadow[p]=N,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=z,p++}else if(I.isSpotLight){let z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(P).multiplyScalar(F*M),z.distance=R,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[_]=z;let T=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,T.updateMatrices(I),I.castShadow&&x++),n.spotLightMatrix[_]=T.matrix,I.castShadow){let N=i.get(I);N.shadowBias=T.bias,N.shadowNormalBias=T.normalBias,N.shadowRadius=T.radius,N.shadowMapSize=T.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=B,S++}_++}else if(I.isRectAreaLight){let z=t.get(I);z.color.copy(P).multiplyScalar(F),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[y]=z,y++}else if(I.isPointLight){let z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*M),z.distance=I.distance,z.decay=I.decay,I.castShadow){let T=I.shadow,N=i.get(I);N.shadowBias=T.bias,N.shadowNormalBias=T.normalBias,N.shadowRadius=T.radius,N.shadowMapSize=T.mapSize,N.shadowCameraNear=T.camera.near,N.shadowCameraFar=T.camera.far,n.pointShadow[f]=N,n.pointShadowMap[f]=B,n.pointShadowMatrix[f]=I.shadow.matrix,w++}n.point[f]=z,f++}else if(I.isHemisphereLight){let z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(F*M),z.groundColor.copy(I.groundColor).multiplyScalar(F*M),n.hemi[v]=z,v++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;let L=n.hash;(L.directionalLength!==p||L.pointLength!==f||L.spotLength!==_||L.rectAreaLength!==y||L.hemiLength!==v||L.numDirectionalShadows!==b||L.numPointShadows!==w||L.numSpotShadows!==S||L.numSpotMaps!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=y,n.point.length=f,n.hemi.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+E-x,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=x,L.directionalLength=p,L.pointLength=f,L.spotLength=_,L.rectAreaLength=y,L.hemiLength=v,L.numDirectionalShadows=b,L.numPointShadows=w,L.numSpotShadows=S,L.numSpotMaps=E,n.version=nb++)}function c(u,h){let d=0,m=0,g=0,p=0,f=0,_=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let b=u[y];if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),d++}else if(b.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(b.isRectAreaLight){let w=n.rectArea[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),a.identity(),r.copy(b.matrixWorld),r.premultiply(_),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){let w=n.hemi[f];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:n}}function $f(o,e){let t=new rb(o,e),i=[],n=[];function s(){i.length=0,n.length=0}function r(h){i.push(h)}function a(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function ob(o,e){let t=new WeakMap;function i(s,r=0){let a=t.get(s),l;return a===void 0?(l=new $f(o,e),t.set(s,[l])):r>=a.length?(l=new $f(o,e),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:i,dispose:n}}var fu=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pu=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cb(o,e,t){let i=new Kr,n=new ge,s=new ge,r=new Ve,a=new fu({depthPacking:__}),l=new pu,c={},u=t.maxTextureSize,h={0:di,1:En,2:tt},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:ab,fragmentShader:lb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new gt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xp,this.render=function(b,w,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let E=o.getRenderTarget(),x=o.getActiveCubeFace(),M=o.getActiveMipmapLevel(),L=o.state;L.setBlending(An),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let H=0,q=b.length;H<q;H++){let I=b[H],P=I.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;n.copy(P.mapSize);let F=P.getFrameExtents();if(n.multiply(F),s.copy(P.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/F.x),n.x=s.x*F.x,P.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/F.y),n.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null){let B=this.type!==Ur?{minFilter:mt,magFilter:mt}:{};P.map=new Ut(n.x,n.y,B),P.map.texture.name=I.name+".shadowMap",P.camera.updateProjectionMatrix()}o.setRenderTarget(P.map),o.clear();let R=P.getViewportCount();for(let B=0;B<R;B++){let z=P.getViewport(B);r.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),L.viewport(r),P.updateMatrices(I,B),i=P.getFrustum(),v(w,S,P.camera,I,this.type)}P.isPointLightShadow!==!0&&this.type===Ur&&_(P,S),P.needsUpdate=!1}f.needsUpdate=!1,o.setRenderTarget(E,x,M)};function _(b,w){let S=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ut(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(w,null,S,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(w,null,S,m,p,null)}function y(b,w,S,E,x,M){let L=null,H=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H!==void 0?L=H:L=S.isPointLight===!0?l:a,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){let q=L.uuid,I=w.uuid,P=c[q];P===void 0&&(P={},c[q]=P);let F=P[I];F===void 0&&(F=L.clone(),P[I]=F),L=F}return L.visible=w.visible,L.wireframe=w.wireframe,M===Ur?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:h[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(S.matrixWorld),L.nearDistance=E,L.farDistance=x),L}function v(b,w,S,E,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ur)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let H=e.update(b),q=b.material;if(Array.isArray(q)){let I=H.groups;for(let P=0,F=I.length;P<F;P++){let R=I[P],B=q[R.materialIndex];if(B&&B.visible){let z=y(b,B,E,S.near,S.far,x);o.renderBufferDirect(S,null,H,z,b,R)}}}else if(q.visible){let I=y(b,q,E,S.near,S.far,x);o.renderBufferDirect(S,null,H,I,b,null)}}let L=b.children;for(let H=0,q=L.length;H<q;H++)v(L[H],w,S,E,x)}}function ub(o,e,t){let i=t.isWebGL2;function n(){let k=!1,J=new Ve,Q=null,ae=new Ve(0,0,0,0);return{setMask:function(he){Q!==he&&!k&&(o.colorMask(he,he,he,he),Q=he)},setLocked:function(he){k=he},setClear:function(he,Ne,ft,Dt,On){On===!0&&(he*=Dt,Ne*=Dt,ft*=Dt),J.set(he,Ne,ft,Dt),ae.equals(J)===!1&&(o.clearColor(he,Ne,ft,Dt),ae.copy(J))},reset:function(){k=!1,Q=null,ae.set(-1,0,0,0)}}}function s(){let k=!1,J=null,Q=null,ae=null;return{setTest:function(he){he?Me(2929):ce(2929)},setMask:function(he){J!==he&&!k&&(o.depthMask(he),J=he)},setFunc:function(he){if(Q!==he){switch(he){case N0:o.depthFunc(512);break;case k0:o.depthFunc(519);break;case B0:o.depthFunc(513);break;case $c:o.depthFunc(515);break;case U0:o.depthFunc(514);break;case V0:o.depthFunc(518);break;case H0:o.depthFunc(516);break;case G0:o.depthFunc(517);break;default:o.depthFunc(515)}Q=he}},setLocked:function(he){k=he},setClear:function(he){ae!==he&&(o.clearDepth(he),ae=he)},reset:function(){k=!1,J=null,Q=null,ae=null}}}function r(){let k=!1,J=null,Q=null,ae=null,he=null,Ne=null,ft=null,Dt=null,On=null;return{setTest:function(Je){k||(Je?Me(2960):ce(2960))},setMask:function(Je){J!==Je&&!k&&(o.stencilMask(Je),J=Je)},setFunc:function(Je,Bi,ti){(Q!==Je||ae!==Bi||he!==ti)&&(o.stencilFunc(Je,Bi,ti),Q=Je,ae=Bi,he=ti)},setOp:function(Je,Bi,ti){(Ne!==Je||ft!==Bi||Dt!==ti)&&(o.stencilOp(Je,Bi,ti),Ne=Je,ft=Bi,Dt=ti)},setLocked:function(Je){k=Je},setClear:function(Je){On!==Je&&(o.clearStencil(Je),On=Je)},reset:function(){k=!1,J=null,Q=null,ae=null,he=null,Ne=null,ft=null,Dt=null,On=null}}}let a=new n,l=new s,c=new r,u=new WeakMap,h=new WeakMap,d={},m={},g=new WeakMap,p=[],f=null,_=!1,y=null,v=null,b=null,w=null,S=null,E=null,x=null,M=!1,L=null,H=null,q=null,I=null,P=null,F=o.getParameter(35661),R=!1,B=0,z=o.getParameter(7938);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),R=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),R=B>=2);let T=null,N={},X=o.getParameter(3088),G=o.getParameter(2978),$=new Ve().fromArray(X),te=new Ve().fromArray(G);function se(k,J,Q){let ae=new Uint8Array(4),he=o.createTexture();o.bindTexture(k,he),o.texParameteri(k,10241,9728),o.texParameteri(k,10240,9728);for(let Ne=0;Ne<Q;Ne++)o.texImage2D(J+Ne,0,6408,1,1,0,6408,5121,ae);return he}let W={};W[3553]=se(3553,3553,1),W[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(2929),l.setFunc($c),Pt(!1),Di(Yd),Me(2884),xt(An);function Me(k){d[k]!==!0&&(o.enable(k),d[k]=!0)}function ce(k){d[k]!==!1&&(o.disable(k),d[k]=!1)}function ye(k,J){return m[k]!==J?(o.bindFramebuffer(k,J),m[k]=J,i&&(k===36009&&(m[36160]=J),k===36160&&(m[36009]=J)),!0):!1}function le(k,J){let Q=p,ae=!1;if(k)if(Q=g.get(J),Q===void 0&&(Q=[],g.set(J,Q)),k.isWebGLMultipleRenderTargets){let he=k.texture;if(Q.length!==he.length||Q[0]!==36064){for(let Ne=0,ft=he.length;Ne<ft;Ne++)Q[Ne]=36064+Ne;Q.length=he.length,ae=!0}}else Q[0]!==36064&&(Q[0]=36064,ae=!0);else Q[0]!==1029&&(Q[0]=1029,ae=!0);ae&&(t.isWebGL2?o.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ze(k){return f!==k?(o.useProgram(k),f=k,!0):!1}let Se={[Ys]:32774,[T0]:32778,[A0]:32779};if(i)Se[Kd]=32775,Se[jd]=32776;else{let k=e.get("EXT_blend_minmax");k!==null&&(Se[Kd]=k.MIN_EXT,Se[jd]=k.MAX_EXT)}let me={[E0]:0,[C0]:1,[P0]:768,[vp]:770,[O0]:776,[F0]:774,[L0]:772,[R0]:769,[yp]:771,[z0]:775,[I0]:773};function xt(k,J,Q,ae,he,Ne,ft,Dt){if(k===An){_===!0&&(ce(3042),_=!1);return}if(_===!1&&(Me(3042),_=!0),k!==D0){if(k!==y||Dt!==M){if((v!==Ys||S!==Ys)&&(o.blendEquation(32774),v=Ys,S=Ys),Dt)switch(k){case js:o.blendFuncSeparate(1,771,1,771);break;case pa:o.blendFunc(1,1);break;case Zd:o.blendFuncSeparate(0,769,0,1);break;case Jd:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case js:o.blendFuncSeparate(770,771,1,771);break;case pa:o.blendFunc(770,1);break;case Zd:o.blendFuncSeparate(0,769,0,1);break;case Jd:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,w=null,E=null,x=null,y=k,M=Dt}return}he=he||J,Ne=Ne||Q,ft=ft||ae,(J!==v||he!==S)&&(o.blendEquationSeparate(Se[J],Se[he]),v=J,S=he),(Q!==b||ae!==w||Ne!==E||ft!==x)&&(o.blendFuncSeparate(me[Q],me[ae],me[Ne],me[ft]),b=Q,w=ae,E=Ne,x=ft),y=k,M=null}function Vt(k,J){k.side===tt?ce(2884):Me(2884);let Q=k.side===di;J&&(Q=!Q),Pt(Q),k.blending===js&&k.transparent===!1?xt(An):xt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);let ae=k.stencilWrite;c.setTest(ae),ae&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),We(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Me(32926):ce(32926)}function Pt(k){L!==k&&(k?o.frontFace(2304):o.frontFace(2305),L=k)}function Di(k){k!==w0?(Me(2884),k!==H&&(k===Yd?o.cullFace(1029):k===M0?o.cullFace(1028):o.cullFace(1032))):ce(2884),H=k}function vt(k){k!==q&&(R&&o.lineWidth(k),q=k)}function We(k,J,Q){k?(Me(32823),(I!==J||P!==Q)&&(o.polygonOffset(J,Q),I=J,P=Q)):ce(32823)}function Ni(k){k?Me(3089):ce(3089)}function ki(k){k===void 0&&(k=33984+F-1),T!==k&&(o.activeTexture(k),T=k)}function C(k,J,Q){Q===void 0&&(T===null?Q=33984+F-1:Q=T);let ae=N[Q];ae===void 0&&(ae={type:void 0,texture:void 0},N[Q]=ae),(ae.type!==k||ae.texture!==J)&&(T!==Q&&(o.activeTexture(Q),T=Q),o.bindTexture(k,J||W[k]),ae.type=k,ae.texture=J)}function D(){let k=N[T];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(k){$.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),$.copy(k))}function de(k){te.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function Oe(k,J){let Q=h.get(J);Q===void 0&&(Q=new WeakMap,h.set(J,Q));let ae=Q.get(k);ae===void 0&&(ae=o.getUniformBlockIndex(J,k.name),Q.set(k,ae))}function Ze(k,J){let ae=h.get(J).get(k);u.get(k)!==ae&&(o.uniformBlockBinding(J,ae,k.__bindingPointIndex),u.set(k,ae))}function dt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},T=null,N={},m={},g=new WeakMap,p=[],f=null,_=!1,y=null,v=null,b=null,w=null,S=null,E=null,x=null,M=!1,L=null,H=null,q=null,I=null,P=null,$.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:ce,bindFramebuffer:ye,drawBuffers:le,useProgram:ze,setBlending:xt,setMaterial:Vt,setFlipSided:Pt,setCullFace:Di,setLineWidth:vt,setPolygonOffset:We,setScissorTest:Ni,activeTexture:ki,bindTexture:C,unbindTexture:D,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ve,texImage3D:ue,updateUBOMapping:Oe,uniformBlockBinding:Ze,texStorage2D:j,texStorage3D:_e,texSubImage2D:ie,texSubImage3D:re,compressedTexSubImage2D:be,compressedTexSubImage3D:oe,scissor:xe,viewport:de,reset:dt}}function hb(o,e,t,i,n,s,r){let a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,h=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap,p,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,D){return _?new OffscreenCanvas(C,D):Zr("canvas")}function v(C,D,Z,ee){let ie=1;if((C.width>ee||C.height>ee)&&(ie=ee/Math.max(C.width,C.height)),ie<1||D===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let re=D?xa:Math.floor,be=re(ie*C.width),oe=re(ie*C.height);p===void 0&&(p=y(be,oe));let j=Z?y(be,oe):p;return j.width=be,j.height=oe,j.getContext("2d").drawImage(C,0,0,be,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+oe+")."),j}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function b(C){return nu(C.width)&&nu(C.height)}function w(C){return a?!1:C.wrapS!==Qt||C.wrapT!==Qt||C.minFilter!==mt&&C.minFilter!==kt}function S(C,D){return C.generateMipmaps&&D&&C.minFilter!==mt&&C.minFilter!==kt}function E(C){o.generateMipmap(C)}function x(C,D,Z,ee,ie=!1){if(a===!1)return D;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=D;return D===6403&&(Z===5126&&(re=33326),Z===5131&&(re=33325),Z===5121&&(re=33321)),D===33319&&(Z===5126&&(re=33328),Z===5131&&(re=33327),Z===5121&&(re=33323)),D===6408&&(Z===5126&&(re=34836),Z===5131&&(re=34842),Z===5121&&(re=ee===Ue&&ie===!1?35907:32856),Z===32819&&(re=32854),Z===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function M(C,D,Z){return S(C,Z)===!0||C.isFramebufferTexture&&C.minFilter!==mt&&C.minFilter!==kt?Math.log2(Math.max(D.width,D.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?D.mipmaps.length:1}function L(C){return C===mt||C===ma||C===ga?9728:9729}function H(C){let D=C.target;D.removeEventListener("dispose",H),I(D),D.isVideoTexture&&g.delete(D)}function q(C){let D=C.target;D.removeEventListener("dispose",q),F(D)}function I(C){let D=i.get(C);if(D.__webglInit===void 0)return;let Z=C.source,ee=f.get(Z);if(ee){let ie=ee[D.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P(C),Object.keys(ee).length===0&&f.delete(Z)}i.remove(C)}function P(C){let D=i.get(C);o.deleteTexture(D.__webglTexture);let Z=C.source,ee=f.get(Z);delete ee[D.__cacheKey],r.memory.textures--}function F(C){let D=C.texture,Z=i.get(C),ee=i.get(D);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(Z.__webglFramebuffer[ie]),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ie=0;ie<Z.__webglColorRenderbuffer.length;ie++)Z.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[ie]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,re=D.length;ie<re;ie++){let be=i.get(D[ie]);be.__webglTexture&&(o.deleteTexture(be.__webglTexture),r.memory.textures--),i.remove(D[ie])}i.remove(D),i.remove(C)}let R=0;function B(){R=0}function z(){let C=R;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),R+=1,C}function T(C){let D=[];return D.push(C.wrapS),D.push(C.wrapT),D.push(C.wrapR||0),D.push(C.magFilter),D.push(C.minFilter),D.push(C.anisotropy),D.push(C.internalFormat),D.push(C.format),D.push(C.type),D.push(C.generateMipmaps),D.push(C.premultiplyAlpha),D.push(C.flipY),D.push(C.unpackAlignment),D.push(C.encoding),D.join()}function N(C,D){let Z=i.get(C);if(C.isVideoTexture&&Ni(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){let ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Z,C,D);return}}t.bindTexture(3553,Z.__webglTexture,33984+D)}function X(C,D){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){ce(Z,C,D);return}t.bindTexture(35866,Z.__webglTexture,33984+D)}function G(C,D){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){ce(Z,C,D);return}t.bindTexture(32879,Z.__webglTexture,33984+D)}function $(C,D){let Z=i.get(C);if(C.version>0&&Z.__version!==C.version){ye(Z,C,D);return}t.bindTexture(34067,Z.__webglTexture,33984+D)}let te={[rs]:10497,[Qt]:33071,[qr]:33648},se={[mt]:9728,[ma]:9984,[ga]:9986,[kt]:9729,[Fu]:9985,[ds]:9987};function W(C,D,Z){if(Z?(o.texParameteri(C,10242,te[D.wrapS]),o.texParameteri(C,10243,te[D.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,te[D.wrapR]),o.texParameteri(C,10240,se[D.magFilter]),o.texParameteri(C,10241,se[D.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(D.wrapS!==Qt||D.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,L(D.magFilter)),o.texParameteri(C,10241,L(D.minFilter)),D.minFilter!==mt&&D.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let ee=e.get("EXT_texture_filter_anisotropic");if(D.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&D.type===Xr&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(o.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,n.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function Me(C,D){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,D.addEventListener("dispose",H));let ee=D.source,ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));let re=T(D);if(re!==C.__cacheKey){ie[re]===void 0&&(ie[re]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),ie[re].usedTimes++;let be=ie[C.__cacheKey];be!==void 0&&(ie[C.__cacheKey].usedTimes--,be.usedTimes===0&&P(D)),C.__cacheKey=re,C.__webglTexture=ie[re].texture}return Z}function ce(C,D,Z){let ee=3553;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ee=35866),D.isData3DTexture&&(ee=32879);let ie=Me(C,D),re=D.source;t.bindTexture(ee,C.__webglTexture,33984+Z);let be=i.get(re);if(re.version!==be.__version||ie===!0){t.activeTexture(33984+Z),o.pixelStorei(37440,D.flipY),o.pixelStorei(37441,D.premultiplyAlpha),o.pixelStorei(3317,D.unpackAlignment),o.pixelStorei(37443,0);let oe=w(D)&&b(D.image)===!1,j=v(D.image,oe,!1,u);j=ki(D,j);let _e=b(j)||a,ve=s.convert(D.format,D.encoding),ue=s.convert(D.type),xe=x(D.internalFormat,ve,ue,D.encoding,D.isVideoTexture);W(ee,D,_e);let de,Oe=D.mipmaps,Ze=a&&D.isVideoTexture!==!0,dt=be.__version===void 0||ie===!0,k=M(D,j,_e);if(D.isDepthTexture)xe=6402,a?D.type===Tn?xe=36012:D.type===ts?xe=33190:D.type===$s?xe=35056:xe=33189:D.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===ns&&xe===6402&&D.type!==Mp&&D.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=ts,ue=s.convert(D.type)),D.format===ir&&xe===6402&&(xe=34041,D.type!==$s&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=$s,ue=s.convert(D.type))),dt&&(Ze?t.texStorage2D(3553,1,xe,j.width,j.height):t.texImage2D(3553,0,xe,j.width,j.height,0,ve,ue,null));else if(D.isDataTexture)if(Oe.length>0&&_e){Ze&&dt&&t.texStorage2D(3553,k,xe,Oe[0].width,Oe[0].height);for(let J=0,Q=Oe.length;J<Q;J++)de=Oe[J],Ze?t.texSubImage2D(3553,J,0,0,de.width,de.height,ve,ue,de.data):t.texImage2D(3553,J,xe,de.width,de.height,0,ve,ue,de.data);D.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(3553,k,xe,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,ve,ue,j.data)):t.texImage2D(3553,0,xe,j.width,j.height,0,ve,ue,j.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(35866,k,xe,Oe[0].width,Oe[0].height,j.depth);for(let J=0,Q=Oe.length;J<Q;J++)de=Oe[J],D.format!==hi?ve!==null?Ze?t.compressedTexSubImage3D(35866,J,0,0,0,de.width,de.height,j.depth,ve,de.data,0,0):t.compressedTexImage3D(35866,J,xe,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(35866,J,0,0,0,de.width,de.height,j.depth,ve,ue,de.data):t.texImage3D(35866,J,xe,de.width,de.height,j.depth,0,ve,ue,de.data)}else{Ze&&dt&&t.texStorage2D(3553,k,xe,Oe[0].width,Oe[0].height);for(let J=0,Q=Oe.length;J<Q;J++)de=Oe[J],D.format!==hi?ve!==null?Ze?t.compressedTexSubImage2D(3553,J,0,0,de.width,de.height,ve,de.data):t.compressedTexImage2D(3553,J,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,J,0,0,de.width,de.height,ve,ue,de.data):t.texImage2D(3553,J,xe,de.width,de.height,0,ve,ue,de.data)}else if(D.isDataArrayTexture)Ze?(dt&&t.texStorage3D(35866,k,xe,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ve,ue,j.data)):t.texImage3D(35866,0,xe,j.width,j.height,j.depth,0,ve,ue,j.data);else if(D.isData3DTexture)Ze?(dt&&t.texStorage3D(32879,k,xe,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ve,ue,j.data)):t.texImage3D(32879,0,xe,j.width,j.height,j.depth,0,ve,ue,j.data);else if(D.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(3553,k,xe,j.width,j.height);else{let J=j.width,Q=j.height;for(let ae=0;ae<k;ae++)t.texImage2D(3553,ae,xe,J,Q,0,ve,ue,null),J>>=1,Q>>=1}}else if(Oe.length>0&&_e){Ze&&dt&&t.texStorage2D(3553,k,xe,Oe[0].width,Oe[0].height);for(let J=0,Q=Oe.length;J<Q;J++)de=Oe[J],Ze?t.texSubImage2D(3553,J,0,0,ve,ue,de):t.texImage2D(3553,J,xe,ve,ue,de);D.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(3553,k,xe,j.width,j.height),t.texSubImage2D(3553,0,0,0,ve,ue,j)):t.texImage2D(3553,0,xe,ve,ue,j);S(D,_e)&&E(ee),be.__version=re.version,D.onUpdate&&D.onUpdate(D)}C.__version=D.version}function ye(C,D,Z){if(D.image.length!==6)return;let ee=Me(C,D),ie=D.source;t.bindTexture(34067,C.__webglTexture,33984+Z);let re=i.get(ie);if(ie.version!==re.__version||ee===!0){t.activeTexture(33984+Z),o.pixelStorei(37440,D.flipY),o.pixelStorei(37441,D.premultiplyAlpha),o.pixelStorei(3317,D.unpackAlignment),o.pixelStorei(37443,0);let be=D.isCompressedTexture||D.image[0].isCompressedTexture,oe=D.image[0]&&D.image[0].isDataTexture,j=[];for(let J=0;J<6;J++)!be&&!oe?j[J]=v(D.image[J],!1,!0,c):j[J]=oe?D.image[J].image:D.image[J],j[J]=ki(D,j[J]);let _e=j[0],ve=b(_e)||a,ue=s.convert(D.format,D.encoding),xe=s.convert(D.type),de=x(D.internalFormat,ue,xe,D.encoding),Oe=a&&D.isVideoTexture!==!0,Ze=re.__version===void 0||ee===!0,dt=M(D,_e,ve);W(34067,D,ve);let k;if(be){Oe&&Ze&&t.texStorage2D(34067,dt,de,_e.width,_e.height);for(let J=0;J<6;J++){k=j[J].mipmaps;for(let Q=0;Q<k.length;Q++){let ae=k[Q];D.format!==hi?ue!==null?Oe?t.compressedTexSubImage2D(34069+J,Q,0,0,ae.width,ae.height,ue,ae.data):t.compressedTexImage2D(34069+J,Q,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+J,Q,0,0,ae.width,ae.height,ue,xe,ae.data):t.texImage2D(34069+J,Q,de,ae.width,ae.height,0,ue,xe,ae.data)}}}else{k=D.mipmaps,Oe&&Ze&&(k.length>0&&dt++,t.texStorage2D(34067,dt,de,j[0].width,j[0].height));for(let J=0;J<6;J++)if(oe){Oe?t.texSubImage2D(34069+J,0,0,0,j[J].width,j[J].height,ue,xe,j[J].data):t.texImage2D(34069+J,0,de,j[J].width,j[J].height,0,ue,xe,j[J].data);for(let Q=0;Q<k.length;Q++){let he=k[Q].image[J].image;Oe?t.texSubImage2D(34069+J,Q+1,0,0,he.width,he.height,ue,xe,he.data):t.texImage2D(34069+J,Q+1,de,he.width,he.height,0,ue,xe,he.data)}}else{Oe?t.texSubImage2D(34069+J,0,0,0,ue,xe,j[J]):t.texImage2D(34069+J,0,de,ue,xe,j[J]);for(let Q=0;Q<k.length;Q++){let ae=k[Q];Oe?t.texSubImage2D(34069+J,Q+1,0,0,ue,xe,ae.image[J]):t.texImage2D(34069+J,Q+1,de,ue,xe,ae.image[J])}}}S(D,ve)&&E(34067),re.__version=ie.version,D.onUpdate&&D.onUpdate(D)}C.__version=D.version}function le(C,D,Z,ee,ie){let re=s.convert(Z.format,Z.encoding),be=s.convert(Z.type),oe=x(Z.internalFormat,re,be,Z.encoding);i.get(D).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,oe,D.width,D.height,D.depth,0,re,be,null):t.texImage2D(ie,0,oe,D.width,D.height,0,re,be,null)),t.bindFramebuffer(36160,C),We(D)?d.framebufferTexture2DMultisampleEXT(36160,ee,ie,i.get(Z).__webglTexture,0,vt(D)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,ee,ie,i.get(Z).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(C,D,Z){if(o.bindRenderbuffer(36161,C),D.depthBuffer&&!D.stencilBuffer){let ee=33189;if(Z||We(D)){let ie=D.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Tn?ee=36012:ie.type===ts&&(ee=33190));let re=vt(D);We(D)?d.renderbufferStorageMultisampleEXT(36161,re,ee,D.width,D.height):o.renderbufferStorageMultisample(36161,re,ee,D.width,D.height)}else o.renderbufferStorage(36161,ee,D.width,D.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(D.depthBuffer&&D.stencilBuffer){let ee=vt(D);Z&&We(D)===!1?o.renderbufferStorageMultisample(36161,ee,35056,D.width,D.height):We(D)?d.renderbufferStorageMultisampleEXT(36161,ee,35056,D.width,D.height):o.renderbufferStorage(36161,34041,D.width,D.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{let ee=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ie=0;ie<ee.length;ie++){let re=ee[ie],be=s.convert(re.format,re.encoding),oe=s.convert(re.type),j=x(re.internalFormat,be,oe,re.encoding),_e=vt(D);Z&&We(D)===!1?o.renderbufferStorageMultisample(36161,_e,j,D.width,D.height):We(D)?d.renderbufferStorageMultisampleEXT(36161,_e,j,D.width,D.height):o.renderbufferStorage(36161,j,D.width,D.height)}}o.bindRenderbuffer(36161,null)}function Se(C,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),N(D.depthTexture,0);let ee=i.get(D.depthTexture).__webglTexture,ie=vt(D);if(D.depthTexture.format===ns)We(D)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(D.depthTexture.format===ir)We(D)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function me(C){let D=i.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!D.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Se(D.__webglFramebuffer,C)}else if(Z){D.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,D.__webglFramebuffer[ee]),D.__webglDepthbuffer[ee]=o.createRenderbuffer(),ze(D.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,D.__webglFramebuffer),D.__webglDepthbuffer=o.createRenderbuffer(),ze(D.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function xt(C,D,Z){let ee=i.get(C);D!==void 0&&le(ee.__webglFramebuffer,C,C.texture,36064,3553),Z!==void 0&&me(C)}function Vt(C){let D=C.texture,Z=i.get(C),ee=i.get(D);C.addEventListener("dispose",q),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=D.version,r.memory.textures++);let ie=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,be=b(C)||a;if(ie){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)Z.__webglFramebuffer[oe]=o.createFramebuffer()}else{if(Z.__webglFramebuffer=o.createFramebuffer(),re)if(n.drawBuffers){let oe=C.texture;for(let j=0,_e=oe.length;j<_e;j++){let ve=i.get(oe[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&We(C)===!1){let oe=re?D:[D];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let j=0;j<oe.length;j++){let _e=oe[j];Z.__webglColorRenderbuffer[j]=o.createRenderbuffer(),o.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[j]);let ve=s.convert(_e.format,_e.encoding),ue=s.convert(_e.type),xe=x(_e.internalFormat,ve,ue,_e.encoding,C.isXRRenderTarget===!0),de=vt(C);o.renderbufferStorageMultisample(36161,de,xe,C.width,C.height),o.framebufferRenderbuffer(36160,36064+j,36161,Z.__webglColorRenderbuffer[j])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),W(34067,D,be);for(let oe=0;oe<6;oe++)le(Z.__webglFramebuffer[oe],C,D,36064,34069+oe);S(D,be)&&E(34067),t.unbindTexture()}else if(re){let oe=C.texture;for(let j=0,_e=oe.length;j<_e;j++){let ve=oe[j],ue=i.get(ve);t.bindTexture(3553,ue.__webglTexture),W(3553,ve,be),le(Z.__webglFramebuffer,C,ve,36064+j,3553),S(ve,be)&&E(3553)}t.unbindTexture()}else{let oe=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?oe=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),W(oe,D,be),le(Z.__webglFramebuffer,C,D,36064,oe),S(D,be)&&E(oe),t.unbindTexture()}C.depthBuffer&&me(C)}function Pt(C){let D=b(C)||a,Z=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ie=Z.length;ee<ie;ee++){let re=Z[ee];if(S(re,D)){let be=C.isWebGLCubeRenderTarget?34067:3553,oe=i.get(re).__webglTexture;t.bindTexture(be,oe),E(be),t.unbindTexture()}}}function Di(C){if(a&&C.samples>0&&We(C)===!1){let D=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Z=C.width,ee=C.height,ie=16384,re=[],be=C.stencilBuffer?33306:36096,oe=i.get(C),j=C.isWebGLMultipleRenderTargets===!0;if(j)for(let _e=0;_e<D.length;_e++)t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,oe.__webglFramebuffer),o.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer);for(let _e=0;_e<D.length;_e++){re.push(36064+_e),C.depthBuffer&&re.push(be);let ve=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),j&&o.framebufferRenderbuffer(36008,36064,36161,oe.__webglColorRenderbuffer[_e]),ve===!0&&(o.invalidateFramebuffer(36008,[be]),o.invalidateFramebuffer(36009,[be])),j){let ue=i.get(D[_e]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ue,0)}o.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,ie,9728),m&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let _e=0;_e<D.length;_e++){t.bindFramebuffer(36160,oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+_e,36161,oe.__webglColorRenderbuffer[_e]);let ve=i.get(D[_e]).__webglTexture;t.bindFramebuffer(36160,oe.__webglFramebuffer),o.framebufferTexture2D(36009,36064+_e,3553,ve,0)}t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}}function vt(C){return Math.min(h,C.samples)}function We(C){let D=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Ni(C){let D=r.render.frame;g.get(C)!==D&&(g.set(C,D),C.update())}function ki(C,D){let Z=C.encoding,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===iu||Z!==ls&&(Z===Ue?a===!1?e.has("EXT_sRGB")===!0&&ee===hi?(C.format=iu,C.minFilter=kt,C.generateMipmaps=!1):D=va.sRGBToLinear(D):(ee!==hi||ie!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),D}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=xt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Di,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=We}function db(o,e,t){let i=t.isWebGL2;function n(s,r=null){let a;if(s===os)return 5121;if(s===e_)return 32819;if(s===t_)return 32820;if(s===j0)return 5120;if(s===$0)return 5122;if(s===Mp)return 5123;if(s===Q0)return 5124;if(s===ts)return 5125;if(s===Tn)return 5126;if(s===Xr)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===i_)return 6406;if(s===hi)return 6408;if(s===s_)return 6409;if(s===r_)return 6410;if(s===ns)return 6402;if(s===ir)return 34041;if(s===o_)return 6403;if(s===n_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===iu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===a_)return 36244;if(s===l_)return 33319;if(s===c_)return 33320;if(s===u_)return 36249;if(s===vc||s===yc||s===bc||s===wc)if(r===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===Qd||s===ef||s===tf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$d)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ef)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===h_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nf||s===sf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nf)return r===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rf||s===of||s===af||s===lf||s===cf||s===uf||s===hf||s===df||s===ff||s===pf||s===mf||s===gf||s===_f||s===xf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===of)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===af)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===df)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ff)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_f)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xf)return r===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vf)return r===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$s?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}var mu=class extends lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},fb={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let p of e.hand.values()){let f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){let y=new ct;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}let _=c.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}},gu=class extends _t{constructor(e,t,i,n,s,r,a,l,c,u){if(u=u!==void 0?u:ns,u!==ns&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ns&&(i=ts),i===void 0&&u===ir&&(i=$s),super(null,n,s,r,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1}},_u=class extends sn{constructor(e,t){super();let i=this,n=null,s=1,r=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,m=null,g=t.getContextAttributes(),p=null,f=null,_=[],y=[],v=new lt;v.layers.enable(1),v.viewport=new Ve;let b=new lt;b.layers.enable(2),b.viewport=new Ve;let w=[v,b],S=new mu;S.layers.enable(1),S.layers.enable(2);let E=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let N=_[T];return N===void 0&&(N=new Wr,_[T]=N),N.getTargetRaySpace()},this.getControllerGrip=function(T){let N=_[T];return N===void 0&&(N=new Wr,_[T]=N),N.getGripSpace()},this.getHand=function(T){let N=_[T];return N===void 0&&(N=new Wr,_[T]=N),N.getHandSpace()};function M(T){let N=y.indexOf(T.inputSource);if(N===-1)return;let X=_[N];X!==void 0&&X.dispatchEvent({type:T.type,data:T.inputSource})}function L(){n.removeEventListener("select",M),n.removeEventListener("selectstart",M),n.removeEventListener("selectend",M),n.removeEventListener("squeeze",M),n.removeEventListener("squeezestart",M),n.removeEventListener("squeezeend",M),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",H);for(let T=0;T<_.length;T++){let N=y[T];N!==null&&(y[T]=null,_[T].disconnect(N))}E=null,x=null,e.setRenderTarget(p),d=null,h=null,u=null,n=null,f=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){s=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(T){l=T},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(T){if(n=T,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",M),n.addEventListener("selectstart",M),n.addEventListener("selectend",M),n.addEventListener("squeeze",M),n.addEventListener("squeezestart",M),n.addEventListener("squeezeend",M),n.addEventListener("end",L),n.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let N={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,N),n.updateRenderState({baseLayer:d}),f=new Ut(d.framebufferWidth,d.framebufferHeight,{format:hi,type:os,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let N=null,X=null,G=null;g.depth&&(G=g.stencil?35056:33190,N=g.stencil?ir:ns,X=g.stencil?$s:ts);let $={colorFormat:32856,depthFormat:G,scaleFactor:s};u=new XRWebGLBinding(n,t),h=u.createProjectionLayer($),n.updateRenderState({layers:[h]}),f=new Ut(h.textureWidth,h.textureHeight,{format:hi,type:os,depthTexture:new gu(h.textureWidth,h.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});let te=e.properties.get(f);te.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await n.requestReferenceSpace(a),z.setContext(n),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function H(T){for(let N=0;N<T.removed.length;N++){let X=T.removed[N],G=y.indexOf(X);G>=0&&(y[G]=null,_[G].dispatchEvent({type:"disconnected",data:X}))}for(let N=0;N<T.added.length;N++){let X=T.added[N],G=y.indexOf(X);if(G===-1){for(let te=0;te<_.length;te++)if(te>=y.length){y.push(X),G=te;break}else if(y[te]===null){y[te]=X,G=te;break}if(G===-1)break}let $=_[G];$&&$.dispatchEvent({type:"connected",data:X})}}let q=new O,I=new O;function P(T,N,X){q.setFromMatrixPosition(N.matrixWorld),I.setFromMatrixPosition(X.matrixWorld);let G=q.distanceTo(I),$=N.projectionMatrix.elements,te=X.projectionMatrix.elements,se=$[14]/($[10]-1),W=$[14]/($[10]+1),Me=($[9]+1)/$[5],ce=($[9]-1)/$[5],ye=($[8]-1)/$[0],le=(te[8]+1)/te[0],ze=se*ye,Se=se*le,me=G/(-ye+le),xt=me*-ye;N.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(xt),T.translateZ(me),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert();let Vt=se+me,Pt=W+me,Di=ze-xt,vt=Se+(G-xt),We=Me*W/Pt*Vt,Ni=ce*W/Pt*Vt;T.projectionMatrix.makePerspective(Di,vt,We,Ni,Vt,Pt)}function F(T,N){N===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(N.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(n===null)return;S.near=b.near=v.near=T.near,S.far=b.far=v.far=T.far,(E!==S.near||x!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,x=S.far);let N=T.parent,X=S.cameras;F(S,N);for(let $=0;$<X.length;$++)F(X[$],N);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),T.matrix.copy(S.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale);let G=T.children;for(let $=0,te=G.length;$<te;$++)G[$].updateMatrixWorld(!0);X.length===2?P(S,v,b):S.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(T){h!==null&&(h.fixedFoveation=T),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=T)};let R=null;function B(T,N){if(c=N.getViewerPose(l||r),m=N,c!==null){let X=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let G=!1;X.length!==S.cameras.length&&(S.cameras.length=0,G=!0);for(let $=0;$<X.length;$++){let te=X[$],se=null;if(d!==null)se=d.getViewport(te);else{let Me=u.getViewSubImage(h,te);se=Me.viewport,$===0&&(e.setRenderTargetTextures(f,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let W=w[$];W===void 0&&(W=new lt,W.layers.enable($),W.viewport=new Ve,w[$]=W),W.matrix.fromArray(te.transform.matrix),W.projectionMatrix.fromArray(te.projectionMatrix),W.viewport.set(se.x,se.y,se.width,se.height),$===0&&S.matrix.copy(W.matrix),G===!0&&S.cameras.push(W)}}for(let X=0;X<_.length;X++){let G=y[X],$=_[X];G!==null&&$!==void 0&&$.update(G,N,l||r)}R&&R(T,N),m=null}let z=new Cp;z.setAnimationLoop(B),this.setAnimationLoop=function(T){R=T},this.dispose=function(){}}};function pb(o,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,_,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(p,f):f.isMeshToonMaterial?(n(p,f),u(p,f)):f.isMeshPhongMaterial?(n(p,f),c(p,f)):f.isMeshStandardMaterial?(n(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,v)):f.isMeshMatcapMaterial?(n(p,f),m(p,f)):f.isMeshDepthMaterial?n(p,f):f.isMeshDistanceMaterial?(n(p,f),g(p,f)):f.isMeshNormalMaterial?n(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?a(p,f,_,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===di&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===di&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let b=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let v;f.aoMap?v=f.aoMap:f.lightMap&&(v=f.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===di&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function mb(o,e,t,i){let n={},s={},r=[],a=t.isWebGL2?o.getParameter(35375):0;function l(y,v){let b=v.program;i.uniformBlockBinding(y,b)}function c(y,v){let b=n[y.id];b===void 0&&(g(y),b=u(y),n[y.id]=b,y.addEventListener("dispose",f));let w=v.program;i.updateUBOMapping(y,w);let S=e.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function u(y){let v=h();y.__bindingPointIndex=v;let b=o.createBuffer(),w=y.__size,S=y.usage;return o.bindBuffer(35345,b),o.bufferData(35345,w,S),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,b),b}function h(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=n[y.id],b=y.uniforms,w=y.__cache;o.bindBuffer(35345,v);for(let S=0,E=b.length;S<E;S++){let x=b[S];if(m(x,S,w)===!0){let M=x.value,L=x.__offset;typeof M=="number"?(x.__data[0]=M,o.bufferSubData(35345,L,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):M.toArray(x.__data),o.bufferSubData(35345,L,x.__data))}}o.bindBuffer(35345,null)}function m(y,v,b){let w=y.value;if(b[v]===void 0)return typeof w=="number"?b[v]=w:b[v]=w.clone(),!0;if(typeof w=="number"){if(b[v]!==w)return b[v]=w,!0}else{let S=b[v];if(S.equals(w)===!1)return S.copy(w),!0}return!1}function g(y){let v=y.uniforms,b=0,w=16,S=0;for(let E=0,x=v.length;E<x;E++){let M=v[E],L=p(M);if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,E>0){S=b%w;let H=w-S;S!==0&&H-L.boundary<0&&(b+=w-S,M.__offset=b)}b+=L.storage}return S=b%w,S>0&&(b+=w-S),y.__size=b,y.__cache={},this}function p(y){let v=y.value,b={boundary:0,storage:0};return typeof v=="number"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function f(y){let v=y.target;v.removeEventListener("dispose",f);let b=r.indexOf(v.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function _(){for(let y in n)o.deleteBuffer(n[y]);r=[],n={},s={}}return{bind:l,update:c,dispose:_}}function gb(){let o=Zr("canvas");return o.style.display="block",o}function Bu(o={}){this.isWebGLRenderer=!0;let e=o.canvas!==void 0?o.canvas:gb(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ls,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,f=!1,_=0,y=0,v=null,b=-1,w=null,S=new Ve,E=new Ve,x=null,M=e.width,L=e.height,H=1,q=null,I=null,P=new Ve(0,0,M,L),F=new Ve(0,0,M,L),R=!1,B=new Kr,z=!1,T=!1,N=null,X=new Ae,G=new ge,$=new O,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?H:1}let W=t;function Me(A,V){for(let Y=0;Y<A.length;Y++){let U=A[Y],K=e.getContext(U,V);if(K!==null)return K}return null}try{let A={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Iu}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),W===null){let V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),W=Me(V,A),W===null)throw Me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ce,ye,le,ze,Se,me,xt,Vt,Pt,Di,vt,We,Ni,ki,C,D,Z,ee,ie,re,be,oe,j,_e;function ve(){ce=new Ny(W),ye=new Ry(W,ce,o),ce.init(ye),oe=new db(W,ce,ye),le=new ub(W,ce,ye),ze=new Uy,Se=new $1,me=new hb(W,ce,le,Se,ye,oe,ze),xt=new Iy(p),Vt=new Oy(p),Pt=new J_(W,ye),j=new Cy(W,ce,Pt,ye),Di=new ky(W,Pt,ze,j),vt=new Wy(W,Di,Pt,ze),ie=new Gy(W,ye,me),D=new Ly(Se),We=new j1(p,xt,Vt,ce,ye,j,D),Ni=new pb(p,Se),ki=new eb,C=new ob(ce,ye),ee=new Ey(p,xt,Vt,le,vt,u,r),Z=new cb(p,vt,ye),_e=new mb(W,ze,ye,le),re=new Py(W,ce,ze,ye),be=new By(W,ce,ze,ye),ze.programs=We.programs,p.capabilities=ye,p.extensions=ce,p.properties=Se,p.renderLists=ki,p.shadowMap=Z,p.state=le,p.info=ze}ve();let ue=new _u(p,W);this.xr=ue,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(M,L,!1))},this.getSize=function(A){return A.set(M,L)},this.setSize=function(A,V,Y){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=A,L=V,e.width=Math.floor(A*H),e.height=Math.floor(V*H),Y!==!1&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(M*H,L*H).floor()},this.setDrawingBufferSize=function(A,V,Y){M=A,L=V,H=Y,e.width=Math.floor(A*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,V,Y,U){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,V,Y,U),le.viewport(S.copy(P).multiplyScalar(H).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,V,Y,U){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,V,Y,U),le.scissor(E.copy(F).multiplyScalar(H).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(A){le.setScissorTest(R=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,V=!0,Y=!0){let U=0;A&&(U|=16384),V&&(U|=256),Y&&(U|=1024),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),ki.dispose(),C.dispose(),Se.dispose(),xt.dispose(),Vt.dispose(),vt.dispose(),j.dispose(),_e.dispose(),We.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ae),ue.removeEventListener("sessionend",he),N&&(N.dispose(),N=null),Ne.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let A=ze.autoReset,V=Z.enabled,Y=Z.autoUpdate,U=Z.needsUpdate,K=Z.type;ve(),ze.autoReset=A,Z.enabled=V,Z.autoUpdate=Y,Z.needsUpdate=U,Z.type=K}function Oe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){let V=A.target;V.removeEventListener("dispose",Ze),dt(V)}function dt(A){k(A),Se.remove(A)}function k(A){let V=Se.get(A).programs;V!==void 0&&(V.forEach(function(Y){We.releaseProgram(Y)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Y,U,K,pe){V===null&&(V=te);let we=K.isMesh&&K.matrixWorld.determinant()<0,Ee=um(A,V,Y,U,K);le.setMaterial(U,we);let De=Y.index,ke=Y.attributes.position;if(De===null){if(ke===void 0||ke.count===0)return}else if(De.count===0)return;let Re=1;U.wireframe===!0&&(De=Di.getWireframeAttribute(Y),Re=2),j.setup(K,U,Ee,Y,De);let Ie,$e=re;De!==null&&(Ie=Pt.get(De),$e=be,$e.setIndex(Ie));let Nn=De!==null?De.count:ke.count,ms=Y.drawRange.start*Re,gs=Y.drawRange.count*Re,Ti=pe!==null?pe.start*Re:0,Be=pe!==null?pe.count*Re:1/0,_s=Math.max(ms,Ti),it=Math.min(Nn,ms+gs,Ti+Be)-1,ii=Math.max(0,it-_s+1);if(ii!==0){if(K.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*se()),$e.setMode(1)):$e.setMode(4);else if(K.isLine){let cn=U.linewidth;cn===void 0&&(cn=1),le.setLineWidth(cn*se()),K.isLineSegments?$e.setMode(1):K.isLineLoop?$e.setMode(2):$e.setMode(3)}else K.isPoints?$e.setMode(0):K.isSprite&&$e.setMode(4);if(K.isInstancedMesh)$e.renderInstances(_s,ii,K.count);else if(Y.isInstancedBufferGeometry){let cn=Math.min(Y.instanceCount,Y._maxInstanceCount);$e.renderInstances(_s,ii,cn)}else $e.render(_s,ii)}},this.compile=function(A,V){function Y(U,K,pe){U.transparent===!0&&U.side===tt?(U.side=di,U.needsUpdate=!0,ti(U,K,pe),U.side=En,U.needsUpdate=!0,ti(U,K,pe),U.side=tt):ti(U,K,pe)}d=C.get(A),d.init(),g.push(d),A.traverseVisible(function(U){U.isLight&&U.layers.test(V.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(p.physicallyCorrectLights),A.traverse(function(U){let K=U.material;if(K)if(Array.isArray(K))for(let pe=0;pe<K.length;pe++){let we=K[pe];Y(we,A,U)}else Y(K,A,U)}),g.pop(),d=null};let J=null;function Q(A){J&&J(A)}function ae(){Ne.stop()}function he(){Ne.start()}let Ne=new Cp;Ne.setAnimationLoop(Q),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){J=A,ue.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},ue.addEventListener("sessionstart",ae),ue.addEventListener("sessionend",he),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(V),V=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,V,v),d=C.get(A,g.length),d.init(),g.push(d),X.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B.setFromProjectionMatrix(X),T=this.localClippingEnabled,z=D.init(this.clippingPlanes,T,V),h=ki.get(A,m.length),h.init(),m.push(h),ft(A,V,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(q,I),z===!0&&D.beginShadows();let Y=d.state.shadowsArray;if(Z.render(Y,A,V),z===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,A),d.setupLights(p.physicallyCorrectLights),V.isArrayCamera){let U=V.cameras;for(let K=0,pe=U.length;K<pe;K++){let we=U[K];Dt(h,A,we,we.viewport)}}else Dt(h,A,V);v!==null&&(me.updateMultisampleRenderTarget(v),me.updateRenderTargetMipmap(v)),A.isScene===!0&&A.onAfterRender(p,A,V),j.resetDefaultState(),b=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function ft(A,V,Y,U){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||B.intersectsSprite(A)){U&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);let we=vt.update(A),Ee=A.material;Ee.visible&&h.push(A,we,Ee,Y,$.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ze.render.frame&&(A.skeleton.update(),A.skeleton.frame=ze.render.frame),!A.frustumCulled||B.intersectsObject(A))){U&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);let we=vt.update(A),Ee=A.material;if(Array.isArray(Ee)){let De=we.groups;for(let ke=0,Re=De.length;ke<Re;ke++){let Ie=De[ke],$e=Ee[Ie.materialIndex];$e&&$e.visible&&h.push(A,we,$e,Y,$.z,Ie)}}else Ee.visible&&h.push(A,we,Ee,Y,$.z,null)}}let pe=A.children;for(let we=0,Ee=pe.length;we<Ee;we++)ft(pe[we],V,Y,U)}function Dt(A,V,Y,U){let K=A.opaque,pe=A.transmissive,we=A.transparent;d.setupLightsView(Y),pe.length>0&&On(K,V,Y),U&&le.viewport(S.copy(U)),K.length>0&&Je(K,V,Y),pe.length>0&&Je(pe,V,Y),we.length>0&&Je(we,V,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function On(A,V,Y){let U=ye.isWebGL2;N===null&&(N=new Ut(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")?Xr:os,minFilter:ds,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(G),U?N.setSize(G.x,G.y):N.setSize(xa(G.x),xa(G.y));let K=p.getRenderTarget();p.setRenderTarget(N),p.clear();let pe=p.toneMapping;p.toneMapping=nn,Je(A,V,Y),p.toneMapping=pe,me.updateMultisampleRenderTarget(N),me.updateRenderTargetMipmap(N),p.setRenderTarget(K)}function Je(A,V,Y){let U=V.isScene===!0?V.overrideMaterial:null;for(let K=0,pe=A.length;K<pe;K++){let we=A[K],Ee=we.object,De=we.geometry,ke=U===null?we.material:U,Re=we.group;Ee.layers.test(Y.layers)&&Bi(Ee,V,Y,De,ke,Re)}}function Bi(A,V,Y,U,K,pe){A.onBeforeRender(p,V,Y,U,K,pe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(p,V,Y,U,A,pe),K.transparent===!0&&K.side===tt?(K.side=di,K.needsUpdate=!0,p.renderBufferDirect(Y,V,U,K,A,pe),K.side=En,K.needsUpdate=!0,p.renderBufferDirect(Y,V,U,K,A,pe),K.side=tt):p.renderBufferDirect(Y,V,U,K,A,pe),A.onAfterRender(p,V,Y,U,K,pe)}function ti(A,V,Y){V.isScene!==!0&&(V=te);let U=Se.get(A),K=d.state.lights,pe=d.state.shadowsArray,we=K.state.version,Ee=We.getParameters(A,K.state,pe,V,Y),De=We.getProgramCacheKey(Ee),ke=U.programs;U.environment=A.isMeshStandardMaterial?V.environment:null,U.fog=V.fog,U.envMap=(A.isMeshStandardMaterial?Vt:xt).get(A.envMap||U.environment),ke===void 0&&(A.addEventListener("dispose",Ze),ke=new Map,U.programs=ke);let Re=ke.get(De);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===we)return mh(A,Ee),Re}else Ee.uniforms=We.getUniforms(A),A.onBuild(Y,Ee,p),A.onBeforeCompile(Ee,p),Re=We.acquireProgram(Ee,De),ke.set(De,Re),U.uniforms=Ee.uniforms;let Ie=U.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=D.uniform),mh(A,Ee),U.needsLights=dm(A),U.lightsStateVersion=we,U.needsLights&&(Ie.ambientLightColor.value=K.state.ambient,Ie.lightProbe.value=K.state.probe,Ie.directionalLights.value=K.state.directional,Ie.directionalLightShadows.value=K.state.directionalShadow,Ie.spotLights.value=K.state.spot,Ie.spotLightShadows.value=K.state.spotShadow,Ie.rectAreaLights.value=K.state.rectArea,Ie.ltc_1.value=K.state.rectAreaLTC1,Ie.ltc_2.value=K.state.rectAreaLTC2,Ie.pointLights.value=K.state.point,Ie.pointLightShadows.value=K.state.pointShadow,Ie.hemisphereLights.value=K.state.hemi,Ie.directionalShadowMap.value=K.state.directionalShadowMap,Ie.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ie.spotShadowMap.value=K.state.spotShadowMap,Ie.spotLightMatrix.value=K.state.spotLightMatrix,Ie.spotLightMap.value=K.state.spotLightMap,Ie.pointShadowMap.value=K.state.pointShadowMap,Ie.pointShadowMatrix.value=K.state.pointShadowMatrix);let $e=Re.getUniforms(),Nn=Qs.seqWithValue($e.seq,Ie);return U.currentProgram=Re,U.uniformsList=Nn,Re}function mh(A,V){let Y=Se.get(A);Y.outputEncoding=V.outputEncoding,Y.instancing=V.instancing,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function um(A,V,Y,U,K){V.isScene!==!0&&(V=te),me.resetTextureUnits();let pe=V.fog,we=U.isMeshStandardMaterial?V.environment:null,Ee=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ls,De=(U.isMeshStandardMaterial?Vt:xt).get(U.envMap||we),ke=U.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Re=!!U.normalMap&&!!Y.attributes.tangent,Ie=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,Nn=!!Y.morphAttributes.color,ms=U.toneMapped?p.toneMapping:nn,gs=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ti=gs!==void 0?gs.length:0,Be=Se.get(U),_s=d.state.lights;if(z===!0&&(T===!0||A!==w)){let Jt=A===w&&U.id===b;D.setState(U,A,Jt)}let it=!1;U.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_s.state.version||Be.outputEncoding!==Ee||K.isInstancedMesh&&Be.instancing===!1||!K.isInstancedMesh&&Be.instancing===!0||K.isSkinnedMesh&&Be.skinning===!1||!K.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==De||U.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==D.numPlanes||Be.numIntersection!==D.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Re||Be.morphTargets!==Ie||Be.morphNormals!==$e||Be.morphColors!==Nn||Be.toneMapping!==ms||ye.isWebGL2===!0&&Be.morphTargetsCount!==Ti)&&(it=!0):(it=!0,Be.__version=U.version);let ii=Be.currentProgram;it===!0&&(ii=ti(U,V,K));let cn=!1,_r=!1,hl=!1,Rt=ii.getUniforms(),kn=Be.uniforms;if(le.useProgram(ii.program)&&(cn=!0,_r=!0,hl=!0),U.id!==b&&(b=U.id,_r=!0),cn||w!==A){if(Rt.setValue(W,"projectionMatrix",A.projectionMatrix),ye.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,_r=!0,hl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){let Jt=Rt.map.cameraPosition;Jt!==void 0&&Jt.setValue(W,$.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&Rt.setValue(W,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){Rt.setOptional(W,K,"bindMatrix"),Rt.setOptional(W,K,"bindMatrixInverse");let Jt=K.skeleton;Jt&&(ye.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Rt.setValue(W,"boneTexture",Jt.boneTexture,me),Rt.setValue(W,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let dl=Y.morphAttributes;if((dl.position!==void 0||dl.normal!==void 0||dl.color!==void 0&&ye.isWebGL2===!0)&&ie.update(K,Y,U,ii),(_r||Be.receiveShadow!==K.receiveShadow)&&(Be.receiveShadow=K.receiveShadow,Rt.setValue(W,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(kn.envMap.value=De,kn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),_r&&(Rt.setValue(W,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&hm(kn,hl),pe&&U.fog===!0&&Ni.refreshFogUniforms(kn,pe),Ni.refreshMaterialUniforms(kn,U,H,L,N),Qs.upload(W,Be.uniformsList,kn,me)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Qs.upload(W,Be.uniformsList,kn,me),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Rt.setValue(W,"center",K.center),Rt.setValue(W,"modelViewMatrix",K.modelViewMatrix),Rt.setValue(W,"normalMatrix",K.normalMatrix),Rt.setValue(W,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Jt=U.uniformsGroups;for(let fl=0,fm=Jt.length;fl<fm;fl++)if(ye.isWebGL2){let gh=Jt[fl];_e.update(gh,ii),_e.bind(gh,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function hm(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function dm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(A,V,Y){Se.get(A.texture).__webglTexture=V,Se.get(A.depthTexture).__webglTexture=Y;let U=Se.get(A);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Y===void 0,U.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){let Y=Se.get(A);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Y=0){v=A,_=V,y=Y;let U=!0,K=null,pe=!1,we=!1;if(A){let De=Se.get(A);De.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),U=!1):De.__webglFramebuffer===void 0?me.setupRenderTarget(A):De.__hasExternalTextures&&me.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);let ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);let Re=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Re[V],pe=!0):ye.isWebGL2&&A.samples>0&&me.useMultisampledRTT(A)===!1?K=Se.get(A).__webglMultisampledFramebuffer:K=Re,S.copy(A.viewport),E.copy(A.scissor),x=A.scissorTest}else S.copy(P).multiplyScalar(H).floor(),E.copy(F).multiplyScalar(H).floor(),x=R;if(le.bindFramebuffer(36160,K)&&ye.drawBuffers&&U&&le.drawBuffers(A,K),le.viewport(S),le.scissor(E),le.setScissorTest(x),pe){let De=Se.get(A.texture);W.framebufferTexture2D(36160,36064,34069+V,De.__webglTexture,Y)}else if(we){let De=Se.get(A.texture),ke=V||0;W.framebufferTextureLayer(36160,36064,De.__webglTexture,Y||0,ke)}b=-1},this.readRenderTargetPixels=function(A,V,Y,U,K,pe,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){le.bindFramebuffer(36160,Ee);try{let De=A.texture,ke=De.format,Re=De.type;if(ke!==hi&&oe.convert(ke)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ie=Re===Xr&&(ce.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ce.has("EXT_color_buffer_float"));if(Re!==os&&oe.convert(Re)!==W.getParameter(35738)&&!(Re===Tn&&(ye.isWebGL2||ce.has("OES_texture_float")||ce.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-U&&Y>=0&&Y<=A.height-K&&W.readPixels(V,Y,U,K,oe.convert(ke),oe.convert(Re),pe)}finally{let De=v!==null?Se.get(v).__webglFramebuffer:null;le.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(A,V,Y=0){let U=Math.pow(2,-Y),K=Math.floor(V.image.width*U),pe=Math.floor(V.image.height*U);me.setTexture2D(V,0),W.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,K,pe),le.unbindTexture()},this.copyTextureToTexture=function(A,V,Y,U=0){let K=V.image.width,pe=V.image.height,we=oe.convert(Y.format),Ee=oe.convert(Y.type);me.setTexture2D(Y,0),W.pixelStorei(37440,Y.flipY),W.pixelStorei(37441,Y.premultiplyAlpha),W.pixelStorei(3317,Y.unpackAlignment),V.isDataTexture?W.texSubImage2D(3553,U,A.x,A.y,K,pe,we,Ee,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(3553,U,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,we,V.mipmaps[0].data):W.texSubImage2D(3553,U,A.x,A.y,we,Ee,V.image),U===0&&Y.generateMipmaps&&W.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Y,U,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,De=oe.convert(U.format),ke=oe.convert(U.type),Re;if(U.isData3DTexture)me.setTexture3D(U,0),Re=32879;else if(U.isDataArrayTexture)me.setTexture2DArray(U,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment);let Ie=W.getParameter(3314),$e=W.getParameter(32878),Nn=W.getParameter(3316),ms=W.getParameter(3315),gs=W.getParameter(32877),Ti=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;W.pixelStorei(3314,Ti.width),W.pixelStorei(32878,Ti.height),W.pixelStorei(3316,A.min.x),W.pixelStorei(3315,A.min.y),W.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isData3DTexture?W.texSubImage3D(Re,K,V.x,V.y,V.z,pe,we,Ee,De,ke,Ti.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Re,K,V.x,V.y,V.z,pe,we,Ee,De,Ti.data)):W.texSubImage3D(Re,K,V.x,V.y,V.z,pe,we,Ee,De,ke,Ti),W.pixelStorei(3314,Ie),W.pixelStorei(32878,$e),W.pixelStorei(3316,Nn),W.pixelStorei(3315,ms),W.pixelStorei(32877,gs),K===0&&U.generateMipmaps&&W.generateMipmap(Re),le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){_=0,y=0,v=null,le.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var xu=class extends Bu{};xu.prototype.isWebGL1Renderer=!0;var rr=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},Ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tu,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ot=new O,or=class{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),i=Xe(i,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Qf=new O,ep=new Ve,tp=new Ve,_b=new O,ip=new Ae,Ca=class extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ve,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,n=this.geometry;ep.fromBufferAttribute(n.attributes.skinIndex,e),tp.fromBufferAttribute(n.attributes.skinWeight,e),Qf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let r=tp.getComponent(s);if(r!==0){let a=ep.getComponent(s);ip.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(_b.copy(Qf).applyMatrix4(ip),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},$r=class extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}},vu=class extends _t{constructor(e=null,t=1,i=1,n,s,r,a,l,c=mt,u=mt,h,d){super(null,r,a,l,c,u,n,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},np=new Ae,xb=new Ae,ar=class{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ae;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let a=e[s]?e[s].matrixWorld:xb;np.multiplyMatrices(a,t[s]),np.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new ar(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Dp(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new vu(t,e,e,hi,Tn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new $r),this.bones.push(r),this.boneInverses.push(new Ae().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let r=t[n];e.bones.push(r.uuid);let a=i[n];e.boneInverses.push(a.toArray())}return e}},Pa=class extends wt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sp=new Ae,rp=new Ae,la=[],vb=new Ae,kr=new gt,Ra=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,vb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,sp),rp.multiplyMatrices(i,sp),kr.matrixWorld=rp,kr.raycast(e,la);for(let r=0,a=la.length;r<a;r++){let l=la[r];l.instanceId=s,l.object=this,t.push(l)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Qr=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},op=new O,ap=new O,lp=new Ae,Jc=new Jr,ca=new on,lr=class extends Ye{constructor(e=new St,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)op.fromBufferAttribute(t,n-1),ap.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=op.distanceTo(ap);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(n),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;lp.copy(n).invert(),Jc.copy(e.ray).applyMatrix4(lp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,d=new O,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){let _=Math.max(0,r.start),y=Math.min(g.count,r.start+r.count);for(let v=_,b=y-1;v<b;v+=m){let w=g.getX(v),S=g.getX(v+1);if(c.fromBufferAttribute(f,w),u.fromBufferAttribute(f,S),Jc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let _=Math.max(0,r.start),y=Math.min(f.count,r.start+r.count);for(let v=_,b=y-1;v<b;v+=m){if(c.fromBufferAttribute(f,v),u.fromBufferAttribute(f,v+1),Jc.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},cp=new O,up=new O,La=class extends lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)cp.fromBufferAttribute(t,n),up.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+cp.distanceTo(up);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ia=class extends lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},eo=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hp=new Ae,yu=new Jr,ua=new on,ha=new O,Fa=class extends Ye{constructor(e=new St,t=new eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(n),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;hp.copy(n).invert(),yu.copy(e.ray).applyMatrix4(hp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=d,p=m;g<p;g++){let f=c.getX(g);ha.fromBufferAttribute(h,f),dp(ha,f,l,n,e,t,this)}}else{let d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let g=d,p=m;g<p;g++)ha.fromBufferAttribute(h,g),dp(ha,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function dp(o,e,t,i,n,s,r){let a=yu.distanceSqToPoint(o);if(a<t){let l=new O;yu.closestPointToPoint(o,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}var hs=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Dn(o,e,t){return Fp(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function da(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Fp(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function yb(o){function e(n,s){return o[n]-o[s]}let t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function fp(o,e,t){let i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){let a=t[s]*e;for(let l=0;l!==e;++l)n[r++]=o[a+l]}return n}function zp(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=o[n++];while(s!==void 0)}var Cn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){let a=i+r>>>1;e<t[a]?r=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bu=class extends Cn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zs,endingEnd:Zs}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,r=e+1,a=n[s],l=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case Js:s=e,a=2*t-i;break;case _a:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Js:r=e,l=2*i-t;break;case _a:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(n-t),p=g*g,f=p*g,_=-d*f+2*d*p-d*g,y=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,v=(-1-m)*f+(1.5+m)*p+.5*g,b=m*f-m*p;for(let w=0;w!==a;++w)s[w]=_*r[u+w]+y*r[c+w]+v*r[l+w]+b*r[h+w];return s}},za=class extends Cn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(n-t),h=1-u;for(let d=0;d!==a;++d)s[d]=r[c+d]*h+r[l+d]*u;return s}},wu=class extends Cn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},pi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case as:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return as;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=Dn(i,s,r),this.values=Dn(this.values,s*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(n!==void 0&&Fp(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=Dn(this.times),t=Dn(this.values),i=this.getValueSize(),n=this.getInterpolation()===Mc,s=e.length-1,r=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(n)l=!0;else{let h=a*i,d=h-i,m=h+i;for(let g=0;g!==i;++g){let p=t[h+g];if(p!==t[d+g]||p!==t[m+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];let h=a*i,d=r*i;for(let m=0;m!==i;++m)t[d+m]=t[h+m]}++r}}if(s>0){e[r]=e[s];for(let a=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=Dn(e,0,r),this.values=Dn(t,0,r*i)):(this.times=e,this.values=t),this}clone(){let e=Dn(this.times,0),t=Dn(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=as;var Pn=class extends pi{};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=nr;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends pi{};Oa.prototype.ValueTypeName="color";var Rn=class extends pi{};Rn.prototype.ValueTypeName="number";var Mu=class extends Cn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let u=c+a;c!==u;c+=4)Zt.slerpFlat(s,0,r,c-a,r,c,l);return s}},Fi=class extends pi{InterpolantFactoryMethodLinear(e){return new Mu(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.DefaultInterpolation=as;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ln=class extends pi{};Ln.prototype.ValueTypeName="string";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=nr;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends pi{};In.prototype.ValueTypeName="vector";var cr=class{constructor(e,t=-1,i,n=zu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,a=i.length;r!==a;++r)t.push(wb(i[r]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(pi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=yb(l);l=fp(l,1,u),c=fp(c,1,u),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Rn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],d=n[h];d||(n[h]=d=[]),d.push(c)}}let r=[];for(let a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,m,g,p){if(m.length!==0){let f=[],_=[];zp(m,f,_,g),f.length!==0&&p.push(new h(d,f,_))}},n=[],s=e.name||"default",r=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let m={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(let p in m){let f=[],_=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];f.push(v.time),_.push(v.morphTarget===p?1:0)}n.push(new Rn(".morphTargetInfluence["+p+"]",f,_))}l=m.length*r}else{let m=".bones["+t[h].name+"]";i(In,m+".position",d,"pos",n),i(Fi,m+".quaternion",d,"rot",n),i(In,m+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function bb(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rn;case"vector":case"vector2":case"vector3":case"vector4":return In;case"color":return Oa;case"quaternion":return Fi;case"bool":case"boolean":return Pn;case"string":return Ln}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function wb(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bb(o.type);if(o.times===void 0){let t=[],i=[];zp(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}var ur={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},Su=class{constructor(e,t,i){let n=this,s=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&n.onStart!==void 0&&n.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,n.onProgress!==void 0&&n.onProgress(u,r,a),r===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},Mb=new Su,Fn=class{constructor(e){this.manager=e!==void 0?e:Mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},$i={},Du=class extends Error{constructor(e,t){super(e),this.response=t}},to=class extends Fn{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ur.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:i,onError:n});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:i,onError:n});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=$i[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0,p=0,f=new ReadableStream({start(_){y();function y(){h.read().then(({done:v,value:b})=>{if(v)_.close();else{p+=b.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let S=0,E=u.length;S<E;S++){let x=u[S];x.onProgress&&x.onProgress(w)}_.enqueue(b),y()}})}}});return new Response(f)}else throw new Du(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ur.add(e,c);let u=$i[e];delete $i[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=$i[e];if(u===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let h=0,d=u.length;h<d;h++){let m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Tu=class extends Fn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=ur.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;let a=Zr("img");function l(){u(),ur.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),n&&n(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var hr=class extends Fn{constructor(e){super(e)}load(e,t,i,n){let s=new _t,r=new Tu(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},io=class extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Kc=new Ae,pp=new O,mp=new O,no=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kr,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(pp),mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mp),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Au=class extends no{constructor(){super(new lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Yr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Na=class extends io{constructor(e,t,i=0,n=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new Au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gp=new Ae,Br=new O,jc=new O,Eu=class extends no{constructor(){super(new lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),i.position.copy(Br),jc.copy(i.position),jc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jc),i.updateMatrixWorld(),n.makeTranslation(-Br.x,-Br.y,-Br.z),gp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gp)}},ka=class extends io{constructor(e,t,i=0,n=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cu=class extends no{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ba=class extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DefaultUp),this.updateMatrix(),this.target=new Ye,this.shadow=new Cu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var zi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ua=class extends Fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=ur.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){ur.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var Va=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_p();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _p(){return(typeof performance>"u"?Date:performance).now()}var Pu=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,r=this.cumulativeWeight;if(r===0){for(let a=0;a!==n;++a)i[s+a]=i[a];r=t}else{r+=t;let a=t/r;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){Zt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let r=this._workIndex*s;Zt.multiplyQuaternionsFlat(e,r,e,t,e,i),Zt.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){let r=1-n;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*r+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){let a=t+r;e[a]=e[a]+e[i+r]*n}}},Uu="\\[\\]\\.:\\/",Sb=new RegExp("["+Uu+"]","g"),Vu="[^"+Uu+"]",Db="[^"+Uu.replace("\\.","")+"]",Tb=/((?:WC+[\/:])*)/.source.replace("WC",Vu),Ab=/(WCOD+)?/.source.replace("WCOD",Db),Eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),Cb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),Pb=new RegExp("^"+Tb+Ab+Eb+Cb+"$"),Rb=["material","materials","bones","map"],Ru=class{constructor(e,t,i){let n=i||Fe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Fe=class{constructor(e,t,i){this.path=t,this.parsedPath=i||Fe.parseTrackName(t),this.node=Fe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Fe.Composite(e,t,i):new Fe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sb,"")}static parseTrackName(e){let t=Pb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Rb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=Fe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[n];if(r===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Ru;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lu=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Zs,endingEnd:Zs};for(let c=0;c!==r;++c){let u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=f_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let n=this._clip.duration,s=e._clip.duration,r=s/n,a=n/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,r=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let r=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case m_:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulateAdditive(a);break;case zu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(r),c[u].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,r=i===p_;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===d_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){let a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=Js,n.endingEnd=Js):(e?n.endingStart=this.zeroSlopeAtStart?Js:Zs:n.endingStart=_a,t?n.endingEnd=this.zeroSlopeAtEnd?Js:Zs:n.endingEnd=_a)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);let a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}},Lb=new Float32Array(1),Ha=class extends sn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){let d=n[h],m=d.name,g=u[m];if(g!==void 0)++g.referenceCount,r[h]=g;else{if(g=r[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}let p=t&&t._propertyBindings[h].binding.parsedPath;g=new Pu(Fe.create(i,m,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),r[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,s=this._bindings,r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,a=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new za(new Float32Array(2),new Float32Array(2),1,Lb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let n=t||this._root,s=n.uuid,r=typeof e=="string"?cr.findByName(n,e):e,a=r!==null?r.uuid:e,l=this._actionsByClip[a],c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=zu),l!==void 0){let h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;let u=new Lu(this,r,t,i);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){let i=t||this._root,n=i.uuid,s=typeof e=="string"?cr.findByName(i,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){let r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){let c=r[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let a=i[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);var so="https://pub-d1b159ea0b264837ac688f621ee2ddea.r2.dev/",Ib=so+"vcore-f0.glb",Fb=so+"gold-metal-v0.webp",zb=so+"black-matte-v0.webp",Ob=so+"metal-matte-v1.webp",Nb=so+"faces.webp",Oi={model:Ib,mt_gold:Fb,mt_black:zb,tx_faces:Nb,mt_metal:Ob};var kb=new hr;function an(o){return new Promise(e=>{kb.load(o,t=>{t.needsUpdate=!0,e(t)})})}var Xa=class extends Fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xu(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new ih(t)})}load(e,t,i,n){let s=this,r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=zi.extractUrlBase(e),this.manager.itemStart(e);let a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new to(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s,r={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(zi.decodeText(new Uint8Array(e,0,4))===Gp){try{r[Ce.KHR_BINARY_GLTF]=new nh(e)}catch(u){n&&n(u);return}s=JSON.parse(r[Ce.KHR_BINARY_GLTF].content)}else s=JSON.parse(zi.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let u=this.pluginCallbacks[c](l);a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){let u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case Ce.KHR_MATERIALS_UNLIT:r[u]=new Wu;break;case Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[u]=new oh;break;case Ce.KHR_DRACO_MESH_COMPRESSION:r[u]=new sh(s,this.dracoLoader);break;case Ce.KHR_TEXTURE_TRANSFORM:r[u]=new rh;break;case Ce.KHR_MESH_QUANTIZATION:r[u]=new ah;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}};function Bb(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}var Ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gu=class{constructor(e){this.parser=e,this.name=Ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new fe(16777215);l.color!==void 0&&u.fromArray(l.color);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ba(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ka(u),c.distance=h;break;case"spot":c=new Na(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},Wu=class{constructor(){this.name=Ce.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,i){let n=[];e.color=new fe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Ue))}return Promise.all(n)}},qu=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(a,a)}return Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let r=n.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ue)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;let a=r.attenuationColor||[1,1,1];return t.attenuationColor=new fe(a[0],a[1],a[2]),Promise.all(s)}},ju=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},$u=class{constructor(e){this.parser=e,this.name=Ce.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ii}extendMaterialParams(e,t){let i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));let a=r.specularColorFactor||[1,1,1];return t.specularColor=new fe(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,Ue)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=Ce.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},eh=class{constructor(e){this.parser=e,this.name=Ce.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],a=n.images[r.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},th=class{constructor(e){this.name=Ce.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=n.byteOffset||0,c=n.byteLength||0,u=n.count,h=n.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,n.mode,n.filter).then(function(m){return m.buffer}):r.ready.then(function(){let m=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(m),u,h,d,n.mode,n.filter),m})})}else return null}},ih=class{constructor(e){this.name=Ce.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,a=[],l={};for(let c in r)a.push(this.parser.getDependency("accessor",r[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(let g of h){let p=new Ae,f=new O,_=new Zt,y=new O(1,1,1),v=new Ra(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),v.setMatrixAt(b,p.compose(f,_,y));for(let b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Ye.prototype.copy.call(v,g),v.frustumCulled=!1,this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}},Gp="glTF",ro=12,Op={JSON:1313821514,BIN:5130562},nh=class{constructor(e){this.name=Ce.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ro);if(this.header={magic:zi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ro,n=new DataView(e,ro),s=0;for(;s<i;){let r=n.getUint32(s,!0);s+=4;let a=n.getUint32(s,!0);if(s+=4,a===Op.JSON){let l=new Uint8Array(e,ro+s,r);this.content=zi.decodeText(l)}else if(a===Op.BIN){let l=ro+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ce.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(let u in r){let h=ch[u]||u.toLowerCase();a[h]=r[u]}for(let u in e.attributes){let h=ch[u]||u.toLowerCase();if(r[u]!==void 0){let d=i.accessors[e.attributes[u]],m=lo[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){n.decodeDracoFile(u,function(d){for(let m in d.attributes){let g=d.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(d)},a,c)})})}},rh=class{constructor(){this.name=Ce.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ao=class extends hs{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;let t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),n=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new fe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(let c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",n).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}},oh=class{constructor(){this.name=Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return ao}extendParams(e,t,i){let n=t.extensions[this.name];e.color=new fe(1,1,1),e.opacity=1;let s=[];if(Array.isArray(n.diffuseFactor)){let r=n.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(n.diffuseTexture!==void 0&&s.push(i.assignTexture(e,"map",n.diffuseTexture,Ue)),e.emissive=new fe(0,0,0),e.glossiness=n.glossinessFactor!==void 0?n.glossinessFactor:1,e.specular=new fe(1,1,1),Array.isArray(n.specularFactor)&&e.specular.fromArray(n.specularFactor),n.specularGlossinessTexture!==void 0){let r=n.specularGlossinessTexture;s.push(i.assignTexture(e,"glossinessMap",r)),s.push(i.assignTexture(e,"specularMap",r,Ue))}return Promise.all(s)}createMaterial(e){let t=new ao(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Wa,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}},ah=class{constructor(){this.name=Ce.KHR_MESH_QUANTIZATION}},Ya=class extends Cn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=n-t,h=(i-t)/u,d=h*h,m=d*h,g=e*c,p=g-c,f=-2*m+3*d,_=m-d,y=1-f,v=_-d+h;for(let b=0;b!==a;b++){let w=r[p+b+a],S=r[p+b+l]*u,E=r[g+b+a],x=r[g+b]*u;s[b]=y*w+v*S+f*E+_*x}return s}},Ub=new Zt,lh=class extends Ya{interpolate_(e,t,i,n){let s=super.interpolate_(e,t,i,n);return Ub.fromArray(s).normalize().toArray(s),s}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Np={9728:mt,9729:kt,9984:ma,9985:Fu,9986:ga,9987:ds},kp={33071:Qt,33648:qr,10497:rs},Bp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vb={CUBICSPLINE:void 0,LINEAR:as,STEP:nr},Hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hb(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new hs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),o.DefaultMaterial}function oo(o,e,t){for(let i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function fs(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gb(o,e,t){let i=!1,n=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(o);let r=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(i){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;r.push(d)}if(n){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(s){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return i&&(o.morphAttributes.position=u),n&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Wb(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qb(o){let e=o.extensions&&o.extensions[Ce.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Up(e.attributes):t=o.indices+":"+Up(o.attributes)+":"+o.mode,t}function Up(o){let e="",t=Object.keys(o).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+o[t[i]]+";";return e}function uh(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xb(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bb,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new hr(this.options.manager):this.textureLoader=new Ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new to(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let a={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};oo(s,a,n),fs(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){let r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),s=(r,a)=>{let l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(let[c,u]of r.children.entries())s(u,a.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this.loadNode(t);break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ce.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,r){i.load(zi.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0)return Promise.resolve(null);let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){let a=r[0],l=Bp[n.type],c=lo[n.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=n.byteOffset||0,m=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,p,f;if(m&&m!==h){let _=Math.floor(d/m),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+_+":"+n.count,v=t.cache.get(y);v||(p=new c(a,_*m,n.count*m/u),v=new Ea(p,m/u),t.cache.add(y,v)),f=new or(v,l,d%m/u,g)}else a===null?p=new c(n.count*l):p=new c(a,d,n.count*l),f=new wt(p,l,g);if(n.sparse!==void 0){let _=Bp.SCALAR,y=lo[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,w=new y(r[1],v,n.sparse.count*_),S=new c(r[2],b,n.sparse.count*l);a!==null&&(f=new wt(f.array.slice(),f.itemSize,f.normalized));for(let E=0,x=w.length;E<x;E++){let M=w[E];if(f.setX(M,S[E*l]),l>=2&&f.setY(M,S[E*l+1]),l>=3&&f.setZ(M,S[E*l+2]),l>=4&&f.setW(M,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s],a=this.textureLoader;if(r.uri){let l=i.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let n=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=r.name||a.name||"";let d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Np[d.magFilter]||kt,u.minFilter=Np[d.minFilter]||ds,u.wrapS=kp[d.wrapS]||rs,u.wrapT=kp[d.wrapT]||rs,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let r=n.images[e],a=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){let f=new _t(p);f.needsUpdate=!0,d(f)}),t.load(zi.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=r.mimeType||Xb(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){let s=this;return this.getDependency("texture",i.index).then(function(r){if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ce.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Ce.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(r);r=s.extensions[Ce.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return n!==void 0&&(r.encoding=n),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new eo,ei.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Qr,ei.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(n||s||r){let a="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return hs}loadMaterial(e){let t=this,i=this.json,n=this.extensions,s=i.materials[e],r,a={},l=s.extensions||{},c=[];if(l[Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){let h=n[Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else if(l[Ce.KHR_MATERIALS_UNLIT]){let h=n[Ce.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ue)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=tt);let u=s.alphaMode||Hu.OPAQUE;if(u===Hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Hu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==fi&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ge(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==fi&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==fi&&(a.emissive=new fe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==fi&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ue)),Promise.all(c).then(function(){let h;return r===ao?h=n[Ce.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new r(a),s.name&&(h.name=s.name),fs(h,s),t.associations.set(h,{materials:e}),s.extensions&&oo(n,h,s),h})}createUniqueName(e){let t=Fe.sanitizeNodeName(e||""),i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vp(l,a,t)})}let r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=qb(c),h=n[u];if(h)r.push(h.promise);else{let d;c.extensions&&c.extensions[Ce.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Vp(new St,c,t),n[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){let u=r[l].material===void 0?Hb(this.cache):this.getDependency("material",r[l].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){let p=u[m],f=r[m],_,y=c[m];if(f.mode===mi.TRIANGLES||f.mode===mi.TRIANGLE_STRIP||f.mode===mi.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new Ca(p,y):new gt(p,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===mi.TRIANGLE_STRIP?_.geometry=Hp(_.geometry,Sp):f.mode===mi.TRIANGLE_FAN&&(_.geometry=Hp(_.geometry,Ou));else if(f.mode===mi.LINES)_=new La(p,y);else if(f.mode===mi.LINE_STRIP)_=new lr(p,y);else if(f.mode===mi.LINE_LOOP)_=new Ia(p,y);else if(f.mode===mi.POINTS)_=new Fa(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&Wb(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),fs(_,s),f.extensions&&oo(n,_,f),t.assignFinalMaterial(_),h.push(_)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];let d=new ct;t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new lt(Tp.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Li(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),fs(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",t.inverseBindMatrices).then(function(n){return i.inverseBindMatrices=n,i})}loadAnimation(e){let i=this.json.animations[e],n=[],s=[],r=[],a=[],l=[];for(let c=0,u=i.channels.length;c<u;c++){let h=i.channels[c],d=i.samplers[h.sampler],m=h.target,g=m.node,p=i.parameters!==void 0?i.parameters[d.input]:d.input,f=i.parameters!==void 0?i.parameters[d.output]:d.output;n.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",f)),a.push(d),l.push(m)}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2],m=c[3],g=c[4],p=[];for(let _=0,y=u.length;_<y;_++){let v=u[_],b=h[_],w=d[_],S=m[_],E=g[_];if(v===void 0)continue;v.updateMatrix();let x;switch(zn[E.path]){case zn.weights:x=Rn;break;case zn.rotation:x=Fi;break;case zn.position:case zn.scale:default:x=In;break}let M=v.name?v.name:v.uuid,L=S.interpolation!==void 0?Vb[S.interpolation]:as,H=[];zn[E.path]===zn.weights?v.traverse(function(I){I.morphTargetInfluences&&H.push(I.name?I.name:I.uuid)}):H.push(M);let q=w.array;if(w.normalized){let I=uh(q.constructor),P=new Float32Array(q.length);for(let F=0,R=q.length;F<R;F++)P[F]=q[F]*I;q=P}for(let I=0,P=H.length;I<P;I++){let F=new x(H[I]+"."+zn[E.path],b.array,q,L);S.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(B){let z=this instanceof Fi?lh:Ya;return new z(this.times,this.values,this.getValueSize()/3,B)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(F)}}let f=i.name?i.name:"animation_"+e;return new cr(f,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(a){if(!!a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){let t=this.json,i=this.extensions,n=this,s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"";return function(){let a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new $r:a.length>1?l=new ct:a.length===1?l=a[0]:l=new Ye,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=r),fs(l,s),s.extensions&&oo(i,l,s),s.matrix!==void 0){let c=new Ae;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=e,l})}loadScene(e){let t=this.json,i=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),fs(r,n),n.extensions&&oo(i,r,n);let a=n.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Wp(a[c],r,t,s));return Promise.all(l).then(function(){let c=u=>{let h=new Map;for(let[d,m]of s.associations)(d instanceof ei||d instanceof _t)&&h.set(d,m);return u.traverse(d=>{let m=s.associations.get(d);m!=null&&h.set(d,m)}),h};return s.associations=c(r),r})}};function Wp(o,e,t,i){let n=t.nodes[o];return i.getDependency("node",o).then(function(s){if(n.skin===void 0)return s;let r;return i.getDependency("skin",n.skin).then(function(a){r=a;let l=[];for(let c=0,u=r.joints.length;c<u;c++)l.push(i.getDependency("node",r.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;let c=[],u=[];for(let h=0,d=a.length;h<d;h++){let m=a[h];if(m){c.push(m);let g=new Ae;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[h])}l.bind(new ar(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);let r=[];if(n.children){let a=n.children;for(let l=0,c=a.length;l<c;l++){let u=a[l];r.push(Wp(u,s,t,i))}}return Promise.all(r)})}function Yb(o,e,t){let i=e.attributes,n=new rn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let u=uh(lo[a.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new O,l=new O;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){let p=uh(lo[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;let r=new on;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=r}function Vp(o,e,t){let i=e.attributes,n=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(let r in i){let a=ch[r]||r.toLowerCase();a in o.attributes||n.push(s(i[r],a))}if(e.indices!==void 0&&!o.index){let r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});n.push(r)}return fs(o,e),Yb(o,e,t),Promise.all(n).then(function(){return e.targets!==void 0?Gb(o,e.targets,t):o})}function Hp(o,e){let t=o.getIndex();if(t===null){let r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}let i=t.count-2,n=[];if(e===Ou)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=o.clone();return s.setIndex(n),s}var Zb=new Xa,dh=(o,e)=>new Promise((t,i)=>{Zb.load(o,n=>{let{scene:s,animations:r}=n;t(n)})});function qp(){let e=Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0],{redirect:t,redirectActive:i}=document.querySelector("body").dataset,n=window.location.search;return i==="true"&&e==="America"?n==="?noredirect=true"?!1:(window.location.href=t||"/geoblock",!0):!1}var Za=class{constructor(o){this.data=o,this.wrapper=document.querySelector('[data-loader="w"]'),this.videoActive=document.querySelector("[data-video-active]").dataset.videoActive,this.videoActive==="true"?this.videoActive=!0:this.videoActive=!1,this.page=document.querySelector('[data-page="w"]'),Pe.set(this.page,{autoAlpha:0}),this.video=document.querySelector('[data-loader="video"]'),this.videoCookie=Kb(),this.pop=document.querySelector('[data-popup="wrap"]')}async load(){if(window.altApp){let[o,e,t,i]=await Promise.all([dh(Oi.model),an(Oi.mt_black),an(Oi.mt_gold),an(Oi.mt_metal)]);return this.fadeOut(),{model:o.scene,animations:o.animations,mt_black:e,mt_gold:t,mt_metal:i}}else{if(qp())return;let[o,e,t,i,n,s]=await Promise.all([dh(Oi.model),an(Oi.mt_black),an(Oi.mt_gold),an(Oi.tx_faces),an(Oi.mt_metal),this.videoActive?this.fadeVideoIn():this.jumpVideo()]);return i.flipY=!1,this.fadeOut(),{model:o.scene,animations:o.animations,mt_black:e,mt_gold:t,tx_faces:i,mt_metal:n}}}async fadeVideoIn(){return new Promise(o=>{this.video.addEventListener("ended",()=>o()),this.video.play()})}async jumpVideo(){this.video.remove(),new Promise(o=>o())}fadeOut(){window.altApp||Pe.to(this.wrapper,{duration:.5,delay:0,autoAlpha:0,onComplete:()=>{this.wrapper.remove(),this.videoCookie?this.popupIn():this.popupOut(),window.scrollTo(0,0),Pe.to(this.page,{duration:.4,delay:.1,autoAlpha:1,ease:"expo.in"})}})}popupIn(){Pe.set(this.pop,{autoAlpha:0}),this.pop.style.display="block",Pe.to(this.pop,{autoAlpha:1})}popupOut(){this.pop?.remove()}};function Jb(o){let e=o+"=",i=decodeURIComponent(document.cookie).split(";");for(let n=0;n<i.length;n++){let s=i[n];for(;s.charAt(0)==" ";)s=s.substring(1);if(s.indexOf(e)==0)return s.substring(e.length,s.length)}return""}function Kb(){let o="vcorevideo",e="true";if(Jb(o))return!1;{let n=new Date;n.setTime(n.getTime()+1*24*60*60*1e3);let s="expires="+n.toUTCString();return document.cookie=o+"="+e+";"+s,!0}}var Ja=class{constructor(o="c"){this.w=window.innerWidth,this.h=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.container=document.querySelector(o)}resize(){this.w=this.container.offsetWidth,this.h=this.container.offsetHeight}get viewSize(){let o=this.camera.fov*Math.PI/180,e=Math.abs(this.camera.position.z*Math.tan(o/2)*2);return{w:e*(this.w/this.h),h:e}}};var Xp=`#define MPI 3.1415926535897932384626433832795

uniform float u_time;
// uniform vec4 u_spin_angle;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}



void main() {
  vec3 pos = position;



  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  v_uv = uv;
  v_normal = normal;
  v_view = normalize(-gl_Position.xyz);
}
`;var Yp=`uniform float u_time;
uniform sampler2D u_mt_black; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec4 img = texture2D(u_mt_black, fakeUv);

  gl_FragColor.rgb = img.rgb;
  // gl_FragColor.rgb = vec3(fakeUv, 1.);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;var Ka=class extends He{constructor(o){super({vertexShader:Xp,fragmentShader:Yp});let{mt_black:e}=window.app.gl.assets;this.uniforms={u_time:{value:o?.u_time||0},u_mt_black:{value:e}},this.side=tt}set time(o){this.uniforms.u_time.value=o}};var Zp=`#define MPI 3.1415926535897932384626433832795

uniform float u_time;
// uniform vec4 u_spin_angle;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}



void main() {
  vec3 pos = position;



  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  v_uv = uv;
  v_normal = normal;
  v_view = normalize(-gl_Position.xyz);


}
`;var Jp=`uniform float u_time;
uniform sampler2D u_mt_black; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec4 img = texture2D(u_mt_black, fakeUv);

  gl_FragColor.rgb = img.rgb * .2;
  // gl_FragColor.rgb = vec3(fakeUv, 1.);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;var ja=class extends He{constructor(o){super({vertexShader:Zp,fragmentShader:Jp});let{mt_metal:e}=window.app.gl.assets;this.uniforms={u_time:{value:o?.u_time||0},u_mt_black:{value:e}},this.side=tt}set time(o){this.uniforms.u_time.value=o}};var Kp=`#define MPI 3.1415926535897932384626433832795

uniform float u_time;
// uniform vec4 u_spin_angle;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}



void main() {
  vec3 pos = position;



  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  v_uv = uv;
  v_normal = normal;
  v_view = normalize(-gl_Position.xyz);
}
`;var jp=`uniform float u_time;
uniform sampler2D u_tx_faces; 
uniform float u_face_swap;
uniform float u_alpha;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

const float rgb_fac = .002;
const float faces_fac =  0.2 ; // 0.1666666667

//	Classic Perlin 3D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

void main() {
  float re_time = u_time * 2.;
  float circ_grad = smoothstep(
    .6, .1, 
    distance(v_uv, vec2(.5))
  );

  // image managing
  vec2 t_uv = vec2(
    v_uv.x * faces_fac + u_face_swap * faces_fac, 
    v_uv.y
  );

  // rgb image
  float imgr = texture2D(u_tx_faces, t_uv + vec2(rgb_fac * sin(re_time), 0.)).r;
  float imgg = texture2D(u_tx_faces, t_uv + vec2(0., rgb_fac * cos(re_time))).g;
  float imgb = texture2D(u_tx_faces, t_uv + vec2(-rgb_fac * atan(re_time), 0.)).b;
  vec3 imgrgb = vec3(imgr, imgg, imgb);
  

  // scanlines
  float scanlines = step(.2, fract((v_uv.y + u_time) * 60.));
  float ns = cnoise(vec3(v_uv.x * 2., v_uv.y * 3., re_time)) * 1. - circ_grad;

  float imga = texture2D(u_tx_faces, t_uv).a * (circ_grad * scanlines) ;  


  gl_FragColor.rgb = imgrgb;
  gl_FragColor.a = (imga * 2. * circ_grad) - u_alpha;
}
 


`;var $a=class extends He{constructor(o){super({vertexShader:Kp,fragmentShader:jp});let{tx_faces:e}=window.app.gl.assets;this.uniforms={u_time:{value:o?.u_time||0},u_tx_faces:{value:e},u_face_swap:{value:0},u_alpha:{value:0}},this.side=tt,this.transparent=!0,setInterval(()=>{this.face_swap=Math.floor(Math.random()*5)},5e3)}set time(o){this.uniforms.u_time.value=o}set face_swap(o){this.uniforms.u_face_swap.value=o}set alpha(o){this.uniforms.u_alpha.value=o}};var $p=`#define MPI 3.1415926535897932384626433832795

uniform float u_time;
// uniform vec4 u_spin_angle;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}



void main() {
  vec3 pos = position;



  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  v_uv = uv;
  v_normal = normal;
  v_view = normalize(-gl_Position.xyz);
}
`;var Qp=`uniform float u_time;
uniform sampler2D u_mt_black; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec4 img = texture2D(u_mt_black, fakeUv);

  // gl_FragColor.rgb = img.rgb;
  gl_FragColor.rgb = vec3(1.);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;var Qa=class extends He{constructor(o){super({vertexShader:$p,fragmentShader:Qp});let{mt_black:e}=window.app.gl.assets;this.uniforms={u_time:{value:o?.u_time||0},u_mt_black:{value:e}},this.side=tt}set time(o){this.uniforms.u_time.value=o}};var el=class extends ct{constructor(){super(),this.model=window.app.gl.assets.model.children[0],this.animations=window.app.gl.assets.animations,this.mixer=new Ha(this.model),this.animations.forEach(e=>{this.mixer.clipAction(e).play()}),this.holoMat=new $a,this.traverse(),this.add(this.model)}resize(){}render(e,{x:t,y:i},n=.005){this.holoMat.time=e*.4,this.holoMat.alpha=n*20,this.mixer.setTime(n*10)}traverse(){let e=new Ka,t=new ja;this.model.traverse(i=>{i.isMesh&&(i.material=e,i.name.substring(0,4)==="met_"?i.material=t:i.name.substring(0,4)==="hol_"?i.material=this.holoMat:i.name==="room"||(i.name.substring(0,5)==="light"?i.material=new Qa:i.name))})}};var em=`#define MPI 3.1415926535897932384626433832795

uniform float u_time;
varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


void main() {
  vec3 pos = position;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);


  
  v_uv = uv;
  v_normal = vec4(vec4(normal, 1.) * modelViewMatrix).xyz;
  v_view = normalize(- gl_Position.xyz);
}
`;var tm=`uniform float u_time;

uniform sampler2D u_mt_gold; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


// varying vec3 vPosition;


void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec4 img = texture2D(u_mt_gold, fakeUv);


  gl_FragColor.rgb = (img.rgb);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;var co=class extends He{constructor(o){super({vertexShader:em,fragmentShader:tm});let{mt_gold:e,mt_black:t}=window.app.gl.assets;this.uniforms={u_time:{value:o?.u_time||0},u_mt_gold:{value:e}},this.side=tt}set time(o){this.uniforms.u_time.value=o}};var im=`#define MPI 3.1415926535897932384626433832795

uniform float u_time;
// uniform vec4 u_spin_angle;

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;


mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}


void main() {
  vec3 pos = position;


  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  
  v_uv = uv;
  v_normal = vec4(vec4(normal, 1.) * modelViewMatrix).xyz;
  v_view = normalize(-gl_Position.xyz);

}
`;var nm=`uniform float u_time;
uniform sampler2D u_mt_black; 

varying vec2 v_uv;
varying vec3 v_normal;
varying vec3 v_view;

void main() {

  vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
  vec3 y = cross(v_view, x);
  vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
  vec4 img = texture2D(u_mt_black, fakeUv);

  gl_FragColor.rgb = img.rgb * 1.1;
  // gl_FragColor.rgb = vec3(fakeUv, 1.);
  gl_FragColor.a = 1.;
  // gl_FragColor = vec4(1., 0., 0., 1.);
}
`;var tl=class extends He{constructor(o){super({vertexShader:im,fragmentShader:nm});let{mt_black:e}=window.app.gl.assets;this.uniforms={u_time:{value:o?.u_time||0},u_mt_black:{value:e}},this.side=tt}set time(o){this.uniforms.u_time.value=o}};function sm(){let o=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(o=!0)}(navigator.userAgent||navigator.vendor||window.opera),o}var pr=class extends ct{constructor(){super(),this.model=window.app.gl.assets.model,this.traverse(),this.speedFactor=sm()?1:.5,this.add(this.pcs.sphere,this.pcs.coin),this.pcs.sphere.visible=!1}render(e,{ex:t,ey:i}){let n=e*this.speedFactor;this.pcs?.sphere&&(this.pcs.coin.rotation.set(e,Math.sin(e)*.4,e),this.pcs.spin.forEach((s,r)=>{let{x:a,y:l,z:c,rand:u}=s.rf;s.rotation.set(a*(u+n),l*(u+n),c*(u+n))}))}traverse(){let[e,t]=this.model.children;this.pcs={spin:[]},this.pcs.sphere=new ct,t.traverse(i=>{i.isMesh&&(i.name.substr(0,1)==="r"?(this.pcs.spin.push(i),i.material=new tl,i.rf=cw(i.name)):i.name.substr(0,4)==="coin"&&(this.pcs[i.name]=i,i.material=new co))}),this.pcs.sphere.add(...this.pcs.spin),this.pcs.spin[4].material=new co}};function cw(o){let e=Math.random()*30;switch(o.substr(1,1)){case"v":return{x:0,y:1,z:0,rand:e};case"h":return{x:1,y:0,z:0,rand:e};case"-":return{x:1,y:1,z:0,rand:e};default:return{x:0,y:0,z:0,rand:e}}}var il=class extends rr{constructor(){super(),this.create(),this.initEvents()}create(){this.ctrl=new ct,this.ctrl.position.y=-1,this.spinning=new pr,this.char=new el,this.ctrl.add(this.spinning,this.char),this.add(this.ctrl),this.transform=new Ls({el:document.querySelector('[data-gl-track="hero"]'),config:{bounds:[.001,.9]}}),this.setSliderTriggers()}setSliderTriggers(){let o=[...document.querySelectorAll("[data-slider-trigger]")];this.slider={x:0,rz:0,z:0,isIn:!1};let e=[{d:1.2,x:.7,rz:-2,z:0},{d:1.2,x:-.7,rz:-4,z:.2},{d:1.2,x:.7,rz:-6,z:.5},{d:1.2,x:-.7,rz:-8,z:.2}],t={d:1.2,x:0,rz:0,z:0},i=n=>{this.sliderAnimation&&this.sliderAnimation.kill(),this.sliderAnimation=Pe.to(this.slider,{duration:n.d||1.2,ease:"power3.out",x:n.x||0,rz:n.rz||0,z:n.z||0})};o.forEach((n,s)=>{let r=new Tt({element:n,config:{margin:"10%",threshold:1}}).on("IN",()=>{i(e[s])})}),new Tt({element:document.querySelector("[data-gl-slidermvmt]")}).on("OUT",()=>{i({x:0,rz:0,z:0})})}render(o){this.transform.render(),this.ctrl.position.y=(-1+this.transform.perc)*.8,this.ctrl.position.x=this.slider.x,this.ctrl.position.z=this.slider.z,this.ctrl.rotation.x=.2-this.mouse.ey*.1,this.ctrl.rotation.y=this.mouse.ex*.1;let{y:e}=window.app.scroll;e=-e*8e-4,this.spinning.rotation.z=e+this.slider.rz,this.spinning&&this.spinning.render(o,this.mouse),this.char&&this.char.render(o,this.mouse,this.transform.perc)}resize(){this.transform?.resize(),this.tra?.resize(),this.vp.w=window.innerWidth,this.vp.h=window.innerHeight}initEvents(){this.vp={w:window.innerWidth,h:window.innerHeight},this.mouse={x:0,y:0,ex:0,ey:0},window.onmousemove=({clientX:o,clientY:e})=>{this.mouse.x=o/this.vp.w*2-1,this.mouse.y=(e/this.vp.h*2-1)*-1,Pe.to(this.mouse,{duration:3,ex:this.mouse.x,ey:this.mouse.y,ease:"power3.out"})},new Tt({element:document.querySelector('[data-gl-track="hero"]')}).on("IN",()=>{this.char.visible=!0,this.spinning.pcs.sphere.visible=!1}).on("OUT",()=>{this.char.visible=!1,this.spinning.pcs.sphere.visible=!1}),new Tt({element:document.querySelector("[data-gl-slidermvmt]")}).on("IN",()=>{this.char.visible=!1,this.spinning.pcs.sphere.visible=!0})}};var nl=class extends rr{constructor(){super(),this.create(),this.initEvents()}create(){this.ctrl=new ct,this.spinning=new pr,this.spinning.pcs.sphere.visible=!0,this.ctrl.scale.set(.8,.8,.8),this.ctrl.add(this.spinning),this.add(this.ctrl)}render(o){this.spinning&&this.spinning.render(o,this.mouse)}resize(){this.vp.w=window.innerWidth,this.vp.h=window.innerHeight}initEvents(){this.vp={w:window.innerWidth,h:window.innerHeight},this.mouse={x:0,y:0,ex:0,ey:0},window.onmousemove=({clientX:o,clientY:e})=>{this.mouse.x=o/this.vp.w*2-1,this.mouse.y=(e/this.vp.h*2-1)*-1,Pe.to(this.mouse,{duration:3,ex:this.mouse.x,ey:this.mouse.y,ease:"power3.out"})}}};var sl=class extends lt{constructor(o=70,e=window.innerWidth/window.innerHeight,t=.5,i=40){super(o,e,t,i)}};var mr={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};var Si=class{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uw=new Li(-1,1,1,-1,0,1),fh=new St;fh.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3));fh.setAttribute("uv",new Mt([0,2,0,0,2,0],2));var gr=class{constructor(e){this._mesh=new gt(fh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ps=class extends Si{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof He?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dr.clone(e.uniforms),this.material=new He({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new gr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var uo=class extends Si{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},rl=class extends Si{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ol=class{constructor(e,t){if(this.renderer=e,t===void 0){let i=e.getSize(new ge);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Ut(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],mr===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ps===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ps(mr),this.clock=new Va}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uo!==void 0&&(r instanceof uo?i=!0:r instanceof rl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cD=new Li(-1,1,1,-1,0,1),rm=new St;rm.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3));rm.setAttribute("uv",new Mt([0,2,0,0,2,0],2));var al=class extends Si{constructor(e,t,i,n,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=n}};var ph={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ln=class extends Si{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ut(s,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ut(s,r);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new Ut(s,r);m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),r=Math.round(r/2)}ph===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");let a=ph;this.highPassUniforms=dr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new ge(s,r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,mr===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");let u=mr;this.copyUniforms=dr.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new He({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:pa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new fe,this.oldClearAlpha=1,this.basic=new fi,this.fsQuad=new gr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.texSize.value=new ge(i,n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ln.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ln.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){return new He({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new He({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ln.BlurDirectionX=new ge(1,0);ln.BlurDirectionY=new ge(0,1);var om=`
uniform float opacity;
uniform sampler2D tDiffuse;
uniform float u_dark;
uniform float u_time;
uniform float u_intro;


varying vec2 vUv;

//	Classic Perlin 3D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}


const vec3 COL_BG = vec3(0.047058823529411764, 0.047058823529411764, 0.047058823529411764);

void main() {
    // textures
    vec3 tx_scene = texture2D(tDiffuse, vUv).rgb;
    vec3 tx_scene_dark = mix(COL_BG, tx_scene.rrr, .00);

    // mix
    vec3 final_col = mix(tx_scene, tx_scene_dark, u_dark);

    final_col = mix(COL_BG, final_col, u_intro); // intro fade


    gl_FragColor.rgb = final_col;
    gl_FragColor.a = 1.;
}`;var am=`
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var fw={uniforms:{tDiffuse:{value:null},opacity:{value:1},u_dark:{value:0},u_time:{value:0},u_intro:{value:0}},vertexShader:am,fragmentShader:om},ll=class extends ps{constructor(){super(fw),this.open()}set dark(e){this.toDark&&this.toDark.kill(),this.toDark=Pe.to(this.uniforms.u_dark,{duration:.4,value:e,ease:"power3.out"})}set time(e){this.uniforms.u_time.value=e}open(){Pe.to(this.uniforms.u_intro,{duration:.8,value:1,delay:.4,ease:"expo.in"})}};var cl=class extends ol{constructor({renderer:e,scene:t,camera:i}){super(e),this.isOn=!0,this.renderer=e,this.renderPass=new al(t,i),this.addPass(this.renderPass),this.createPasses(),this.addEvents()}createPasses(){this.bloomPass=new ln(new ge(window.innerWidth,window.innerHeight),3,.05,.8),this.addPass(this.bloomPass),this.shader=new ll,this.addPass(this.shader)}renderPasses(e){this.shader.time=e}addEvents(){let e=document.querySelector('[data-gl-track="cards"]');e&&new Tt({element:e,config:{threshold:0}}).on("IN",()=>{this.shader.dark=1}).on("OUT",()=>{this.shader.dark=0});let t=document.querySelector('[data-gl-track="footer"]');t&&new Tt({element:t,config:{threshold:0}}).on("IN",()=>{this.shader.dark=1}).on("OUT",()=>{this.shader.dark=0})}};var ho=class{constructor(e){this.vp=new Ja(e),this.renderer=new Bu({}),this.renderer.setPixelRatio(this.vp.pixelRatio),this.renderer.setSize(this.vp.w,this.vp.h),this.renderer.setClearColor(789516,1),this.vp.container.appendChild(this.renderer.domElement),this.camera=this.vp.camera=new sl,this.camera.position.set(0,0,2),this.paused=!1,this.time=0,this.load()}async load(){this.loader=new Za,this.assets=await this.loader.load(),this.init()}init(){this.create(),this.initEvents(),this.render(),this.post=new cl({renderer:this.renderer,scene:this.scene,camera:this.camera})}initEvents(){new ResizeObserver(e=>this.resize(e[0].contentRect)).observe(this.vp.container)}create(){window.altApp?this.scene=new nl:this.scene=new il}render(){this.paused||(this.time+=.01,this.scene&&this.scene.render&&this.scene.render(this.time),this.post?.isOn?(this.post.renderPasses(this.time),this.post.render()):this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render.bind(this)))}resize(){this.vp.resize(),this.renderer.setSize(this.vp.w,this.vp.h),this.camera.aspect=this.vp.w/this.vp.h,this.camera.updateProjectionMatrix(),this.scene&&this.scene.resize()}get viewSize(){let e=this.camera.fov*Math.PI/180,t=Math.abs(this.camera.position.z*Math.tan(e/2)*2);return{w:t*(this.vp.w/this.vp.h),h:t}}};function lm(){console.log("%cSite by offbrand. https://www.itsoffbrand.com/","font-size:10px; color:#fff; background:#000; padding: 5px 10px;")}var ul=class{constructor(e){this.body=document.querySelector("body"),this.viewport=new Uo,lm(),this.time=0,this.init()}init(){window.altApp||(this.scroll=new Ho),this.dom=new Bo,this.gl=new ho("[data-gl='c']"),this.initEvents(),this.render()}initEvents(){new ResizeObserver(e=>this.resize(e[0])).observe(this.body)}resize({contentRect:e}){this.viewport?.resize(),this.dom?.resize()}render(){this.scroll?.render(),this.dom?.render(),window.requestAnimationFrame(this.render.bind(this))}};window.isEditorView=!1;pw();window.location.pathname!=="/"?(window.altApp=!0,window.app=new ul):(window.altApp=!1,window.app=new ul);function cm(){let o=document.querySelector(".w-editor-bem-EditSiteButton"),e=document.querySelector(".w-editor-bem-EditorMainMenu");o&&o.addEventListener("click",()=>{console.log("stopped the f'in scroll because editor is open"),window.app.scroll.destroy()}),e&&e.addEventListener("click",()=>{console.log("stopped the f'in scroll because editor is open"),window.app.scroll.destroy()})}function pw(){let o=document.documentElement,e=new Event("editorToggle"),t={attributes:!0,childList:!1,subtree:!1},i=(s,r)=>{for(let a of s)a.type==="attributes"&&o.classList.contains("w-editor"),cm()};new MutationObserver(i).observe(o,t)}})();
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * SplitText: 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * strings: 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
