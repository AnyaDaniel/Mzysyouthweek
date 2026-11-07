'use strict';
(()=>{
 const advert=document.getElementById('advert'),content=document.getElementById('content'),dialog=document.getElementById('reveal'),explore=document.getElementById('explore'),seconds=document.getElementById('seconds'),progress=document.getElementById('progress'),copy=document.getElementById('adCopy');
 const duration=60000,start=performance.now();let completed=false,last=-1;
 const messages=['Something meaningful is coming. Let this moment be an invitation to pause.','Beyond the noise. Beyond the rush. Make room for a connection that lasts.','A sure foundation. A church family. A place for you to grow.','Almost there. One week. One sure foundation. An invitation with your name on it.'];
 document.body.classList.add('locked');content.inert=true;content.setAttribute('aria-hidden','true');advert.hidden=false;
 function tick(){
  if(completed)return;
  const elapsed=Math.min(duration,Math.max(0,performance.now()-start)),remaining=Math.ceil((duration-elapsed)/1000);
  if(remaining!==last){seconds.textContent=String(remaining).padStart(2,'0');last=remaining;copy.textContent=messages[Math.min(3,Math.floor(elapsed/15000))];}
  progress.style.strokeDashoffset=String(339.292*elapsed/duration);
  if(elapsed>=duration){completed=true;clearInterval(timer);advert.hidden=true;dialog.showModal();explore.focus();}
 }
 const timer=setInterval(tick,200);tick();document.addEventListener('visibilitychange',tick);
 dialog.addEventListener('cancel',event=>event.preventDefault());
 explore.addEventListener('click',()=>{dialog.close();content.inert=false;content.removeAttribute('aria-hidden');document.body.classList.remove('locked');window.scrollTo({top:0,behavior:'instant'});const title=document.querySelector('.hero h1');title.tabIndex=-1;title.focus({preventScroll:true});});
 document.getElementById('sharePage').addEventListener('click',async()=>{
  const data={title:'MZYS Youth Week 2026 · Unshakable Foundation',text:'There’s a place for you. Join us for MZYS Youth Week, 9–15 November 2026, in Abuja.',url:new URL('./',location.href).href};
  try{if(navigator.share)await navigator.share(data);else if(navigator.clipboard){await navigator.clipboard.writeText(data.url);document.getElementById('shareStatus').textContent='Invitation link copied. Share it with someone you love.';}else{document.getElementById('shareStatus').textContent=data.url;}}catch(error){if(error.name!=='AbortError')document.getElementById('shareStatus').textContent='Please copy this page’s address to share the invitation.';}
 });
})();
