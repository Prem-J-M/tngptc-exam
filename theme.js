/* TNGPTC shared theme: 8 shiny themes + "Created by Prem J D2" credit */
(function(){
var T=[
{k:"royal",n:"Royal Gold",d:0,bg:"#f4f6fb",card:"#ffffff",text:"#0f172a",muted:"#64748b",line:"#e2e8f0",brand:"#1e1b4b",brand2:"#4338ca",bt:"#ffffff",acc:"#d97706",accl:"#fef3c7",field:"#f1f5f9",fb:"#cbd5e1",sel:"#fff7e0",ans:"#e0e7ff",glow:"rgba(217,119,6,.42)",h1:"#1e1b4b",h2:"#4338ca",g1:"rgba(217,119,6,.18)",g2:"rgba(67,56,202,.18)"},
{k:"neon",n:"Neon Night",d:1,bg:"#070b1a",card:"#101830",text:"#eaf2ff",muted:"#8fa3c7",line:"#24325a",brand:"#22d3ee",brand2:"#a855f7",bt:"#04111f",acc:"#22d3ee",accl:"rgba(34,211,238,.15)",field:"#0a1226",fb:"#2c3d6b",sel:"#12304a",ans:"#2a1f5c",glow:"rgba(34,211,238,.5)",h1:"#0b1230",h2:"#5b21b6",g1:"rgba(168,85,247,.26)",g2:"rgba(34,211,238,.2)"},
{k:"ocean",n:"Ocean Aqua",d:0,bg:"#eefafc",card:"#ffffff",text:"#06293a",muted:"#4b7384",line:"#c9e6ee",brand:"#0c4a6e",brand2:"#0891b2",bt:"#ffffff",acc:"#f97316",accl:"#ffedd5",field:"#e6f6f9",fb:"#b4d9e2",sel:"#e0f7fa",ans:"#cffafe",glow:"rgba(6,182,212,.45)",h1:"#0c4a6e",h2:"#0891b2",g1:"rgba(6,182,212,.22)",g2:"rgba(249,115,22,.14)"},
{k:"emerald",n:"Emerald Luxe",d:1,bg:"#04130e",card:"#0d231b",text:"#e8fff4",muted:"#8fbfa8",line:"#1d4635",brand:"#fbbf24",brand2:"#10b981",bt:"#04130e",acc:"#fbbf24",accl:"rgba(251,191,36,.15)",field:"#07190f",fb:"#25573f",sel:"#2a2a0c",ans:"#0f3d2b",glow:"rgba(251,191,36,.45)",h1:"#064e3b",h2:"#047857",g1:"rgba(16,185,129,.24)",g2:"rgba(251,191,36,.14)"},
{k:"sunset",n:"Sunset Blaze",d:0,bg:"#fff6ef",card:"#ffffff",text:"#3a1209",muted:"#8a5a48",line:"#f6d8c6",brand:"#be123c",brand2:"#ea580c",bt:"#ffffff",acc:"#f59e0b",accl:"#fef3c7",field:"#fff0e6",fb:"#f2c3a8",sel:"#ffedd5",ans:"#ffe4e6",glow:"rgba(249,115,22,.5)",h1:"#9f1239",h2:"#ea580c",g1:"rgba(249,115,22,.22)",g2:"rgba(190,18,60,.15)"},
{k:"rose",n:"Rose Quartz",d:0,bg:"#fdf2f8",card:"#ffffff",text:"#3b0a2a",muted:"#86506f",line:"#f5d0e6",brand:"#9d174d",brand2:"#c026d3",bt:"#ffffff",acc:"#ec4899",accl:"#fce7f3",field:"#fbe8f3",fb:"#eab7d6",sel:"#fce7f3",ans:"#f3e8ff",glow:"rgba(236,72,153,.5)",h1:"#831843",h2:"#a21caf",g1:"rgba(236,72,153,.22)",g2:"rgba(192,38,211,.16)"},
{k:"galaxy",n:"Violet Galaxy",d:1,bg:"#0f0720",card:"#1a0f33",text:"#f3e8ff",muted:"#b79fd9",line:"#3b2468",brand:"#f0abfc",brand2:"#a855f7",bt:"#1a0533",acc:"#f472b6",accl:"rgba(244,114,182,.16)",field:"#130a28",fb:"#4a2e82",sel:"#2d1450",ans:"#2e1a63",glow:"rgba(244,114,182,.5)",h1:"#2e1065",h2:"#6d28d9",g1:"rgba(168,85,247,.28)",g2:"rgba(244,114,182,.18)"},
{k:"ruby",n:"Ruby Black",d:1,bg:"#0c0a0a",card:"#1b1414",text:"#fdf2f2",muted:"#c4a1a1",line:"#3d2323",brand:"#fca5a5",brand2:"#ef4444",bt:"#1a0505",acc:"#fbbf24",accl:"rgba(251,191,36,.15)",field:"#140d0d",fb:"#5a3030",sel:"#2e1a0a",ans:"#3a1414",glow:"rgba(239,68,68,.5)",h1:"#450a0a",h2:"#b91c1c",g1:"rgba(239,68,68,.25)",g2:"rgba(251,191,36,.12)"}
];
var KEY="tngptc_theme",cur="royal";
try{cur=localStorage.getItem(KEY)||"royal"}catch(e){}
if(!T.some(function(t){return t.k===cur}))cur="royal";
var de=document.documentElement;de.setAttribute("data-pt",cur);

var css="";
T.forEach(function(t){
 css+='html:root[data-pt="'+t.k+'"]{--bg:'+t.bg+';--card:'+t.card+';--text:'+t.text+';--muted:'+t.muted+';--line:'+t.line+';--brand:'+t.brand+';--brand2:'+t.brand2+';--bt:'+t.bt+';--onb:'+t.bt+';--accent:'+t.acc+';--accent-l:'+t.accl+';--field:'+t.field+';--fb:'+t.fb+';--sel:'+t.sel+';--ans:'+t.ans+';--glow:'+t.glow+';--h1:'+t.h1+';--h2:'+t.h2+';--g1:'+t.g1+';--g2:'+t.g2+';--shadow:0 14px 32px -12px '+t.glow+',0 0 0 1px '+t.line+';color-scheme:'+(t.d?'dark':'light')+'}\n';
});
css+=
'html:root[data-pt] body{background:radial-gradient(circle at 90% 6%,var(--g1),transparent 42%),radial-gradient(circle at 6% 94%,var(--g2),transparent 44%),var(--bg)!important;background-attachment:fixed!important;color:var(--text)}'+
'html:root[data-pt] header,html:root[data-pt] #hd{position:relative;overflow:hidden;background:linear-gradient(120deg,var(--h1),var(--h2),var(--h1))!important;background-size:200% 100%!important;animation:ptflow 9s ease-in-out infinite;color:#fff!important;border-bottom:3px solid var(--accent)!important;box-shadow:0 8px 26px -8px var(--glow)!important}'+
'html:root[data-pt] header::after,html:root[data-pt] #hd::after{content:"";position:absolute;top:0;left:-60%;width:35%;height:100%;background:linear-gradient(105deg,transparent,rgba(255,255,255,.35),transparent);transform:skewX(-20deg);animation:ptshine 5s ease-in-out infinite;pointer-events:none}'+
'html:root[data-pt] header a,html:root[data-pt] header button,html:root[data-pt] #hd button{border-color:var(--accent)!important;color:#fff!important}'+
'html:root[data-pt] .side{background:linear-gradient(150deg,var(--h1),var(--h2),var(--h1))!important;background-size:200% 200%!important;animation:ptflow 10s ease-in-out infinite}'+
'html:root[data-pt] .card{border-top-color:var(--accent)!important;box-shadow:var(--shadow),0 0 24px -8px var(--glow)!important}'+
'html:root[data-pt] .btn:not(.alt):not(.red){position:relative;overflow:hidden;background:linear-gradient(135deg,var(--brand2),var(--brand))!important;color:var(--bt)!important;box-shadow:0 8px 20px -6px var(--glow),0 0 16px var(--glow),inset 0 1px 0 rgba(255,255,255,.4)!important}'+
'html:root[data-pt] .btn:not(.alt):not(.red)::after{content:"";position:absolute;top:0;left:-70%;width:40%;height:100%;background:linear-gradient(105deg,transparent,rgba(255,255,255,.55),transparent);transform:skewX(-20deg);animation:ptshine 4.5s ease-in-out infinite;pointer-events:none}'+
'html:root[data-pt] button:not(.btn):not(#ptb):not(.ptsw):not([class]):not([id]){color:inherit}'+
'html:root[data-pt] a{color:var(--brand)}html:root[data-pt] header a{color:#fff}'+
'@keyframes ptshine{0%,55%{left:-70%}100%{left:130%}}@keyframes ptflow{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}'+
'@keyframes ptgold{0%{background-position:0 0}100%{background-position:300% 0}}'+
'#ptb{position:fixed;right:12px;bottom:14px;width:42px;height:42px;border-radius:50%;border:2px solid var(--accent);background:linear-gradient(135deg,var(--brand2),var(--brand));color:var(--bt);font-size:20px;line-height:1;cursor:pointer;z-index:2147483000;box-shadow:0 0 16px var(--glow),0 6px 14px rgba(0,0,0,.3);padding:0}'+
'#ptp{position:fixed;right:12px;bottom:64px;width:min(300px,calc(100vw - 24px));background:var(--card);color:var(--text);border:1px solid var(--line);border-top:3px solid var(--accent);border-radius:18px;padding:12px;z-index:2147483000;box-shadow:0 18px 40px -10px rgba(0,0,0,.5),0 0 24px -6px var(--glow);display:none}'+
'#ptp.on{display:block}#ptp h4{margin:0 0 10px;font:700 14px system-ui,sans-serif;color:var(--text)}'+
'#ptg{display:grid;grid-template-columns:repeat(4,1fr);gap:10px 6px}'+
'.ptsw{display:flex;flex-direction:column;align-items:center;gap:4px;background:none;border:0;padding:0;font:600 10px/1.2 system-ui,sans-serif;color:var(--muted);cursor:pointer}'+
'.ptsw i{display:block;width:46px;height:46px;border-radius:50%;border:3px solid transparent;box-shadow:0 0 0 1px var(--line),0 4px 10px rgba(0,0,0,.25)}'+
'.ptsw.sel i{border-color:var(--text);box-shadow:0 0 0 2px var(--accent),0 0 14px var(--glow)}.ptsw.sel{color:var(--text)}'+
'#ptc{display:block;width:100%;text-align:center;font:800 13px/1.4 system-ui,sans-serif;letter-spacing:.06em;padding:16px 8px calc(14px + env(safe-area-inset-bottom,0px));background:linear-gradient(90deg,var(--brand),var(--accent),var(--brand2),var(--accent),var(--brand));background-size:300% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;animation:ptgold 3s linear infinite;filter:drop-shadow(0 0 5px var(--glow));-webkit-user-select:none;user-select:none}'+
'html:root[data-pt] header #who,html:root[data-pt] #hd #who{display:none!important}'+
'#ptc.in{display:inline-block;width:auto;max-width:100%;white-space:nowrap;padding:0 6px;font-size:12px;background:linear-gradient(90deg,#fff,var(--accent),#fff,var(--accent),#fff);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;filter:drop-shadow(0 0 4px var(--glow))}'+
'#ptc.fx{position:fixed;left:0;right:0;bottom:0;z-index:5;pointer-events:none;padding:8px 8px calc(8px + env(safe-area-inset-bottom,0px))}';
var st=document.createElement("style");st.id="pt-style";st.textContent=css;
(document.head||de).appendChild(st);

function apply(k){
 cur=k;de.setAttribute("data-pt",k);
 try{localStorage.setItem(KEY,k)}catch(e){}
 var mc=document.querySelector('meta[name="theme-color"]');
 var t=T.filter(function(x){return x.k===k})[0];
 if(mc&&t)mc.setAttribute("content",t.h1);
 var s=document.querySelectorAll(".ptsw");
 for(var i=0;i<s.length;i++)s[i].classList.toggle("sel",s[i].getAttribute("data-k")===k);
}
function build(){
 if(document.getElementById("ptb"))return;
 var b=document.createElement("button");b.id="ptb";b.type="button";b.textContent="\uD83C\uDFA8";b.setAttribute("aria-label","Themes");
 var p=document.createElement("div");p.id="ptp";
 p.innerHTML='<h4>Choose theme</h4><div id="ptg"></div>';
 var g=p.querySelector("#ptg");
 T.forEach(function(t){
  var s=document.createElement("button");s.type="button";s.className="ptsw"+(t.k===cur?" sel":"");s.setAttribute("data-k",t.k);
  s.innerHTML='<i style="background:linear-gradient(135deg,'+t.h1+' 0%,'+t.h2+' 50%,'+t.acc+' 100%)"></i><span>'+t.n+'</span>';
  s.addEventListener("click",function(){apply(t.k)});
  g.appendChild(s);
 });
 b.addEventListener("click",function(e){e.stopPropagation();p.classList.toggle("on")});
 document.addEventListener("click",function(e){if(!p.contains(e.target)&&e.target!==b)p.classList.remove("on")});
 var c=document.createElement("div");c.id="ptc";c.textContent="\u2728 Created by Prem J \u00B7 D2 \u2728";
 var hd=document.querySelector("header")||document.getElementById("hd"),sd=document.querySelector(".side");
 if(hd){c.className="in";var w=hd.querySelector("#who");if(w)hd.insertBefore(c,w);else{var f=hd.firstElementChild;hd.insertBefore(c,f?f.nextSibling:null)}}
 else if(sd){c.className="in";sd.insertBefore(c,sd.firstChild)}
 else document.body.appendChild(c);
 document.body.appendChild(p);document.body.appendChild(b);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);else build();
})();
