
const text = "I build AI-powered tools and automated systems.";
let i=0;
function type(){ if(i<text.length){ document.getElementById('typing').textContent += text.charAt(i); i++; setTimeout(type,80);} }
type();
