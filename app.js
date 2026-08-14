const revealEls=[...document.querySelectorAll('.reveal,.fade')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});
revealEls.forEach(el=>io.observe(el));
const spot=document.querySelector('.spotlight');
if(spot){window.addEventListener('mousemove',e=>{spot.style.left=e.clientX+'px';spot.style.top=e.clientY+'px'})}
const menuBtn=document.querySelector('.menu-btn'),mobile=document.querySelector('.mobile-menu');
if(menuBtn&&mobile){menuBtn.addEventListener('click',()=>mobile.classList.toggle('open'));mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')))}
const modal=document.querySelector('.modal');
function openModal(title,text){if(!modal)return;modal.querySelector('[data-modal-title]').textContent=title;modal.querySelector('[data-modal-text]').textContent=text;modal.classList.add('open')}
document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openModal(el.dataset.demoTitle||'Prototype interaction',el.dataset.demo)}));
if(modal){modal.addEventListener('click',e=>{if(e.target===modal||e.target.matches('[data-close]'))modal.classList.remove('open')})}
document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();openModal('Inquiry received — demo','In production, this form would route Francella a structured tattoo inquiry for review before calendar access or scheduling. No appointment is promised until she approves the project.')}));
