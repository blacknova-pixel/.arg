// ===== BAREIRO JORGE | PERSONALIZACIÓN =====
const TEXTO_CENTRAL = "AUNQUEDA TUS RETRATOS"; // Cambia solo esta frase.

const text = document.getElementById("mainText");
const replay = document.getElementById("replay");
text.textContent = TEXTO_CENTRAL;

// Partículas multicolor
const colors=["#ff1744","#ffea00","#00e5ff","#7c4dff","#ff2bd6"];
const box=document.querySelector(".particles");
for(let i=0;i<70;i++){
  const p=document.createElement("i");
  const s=1+Math.random()*4;
  p.style.left=Math.random()*100+"%";
  p.style.width=p.style.height=s+"px";
  p.style.color=colors[Math.floor(Math.random()*colors.length)];
  p.style.animationDuration=(4+Math.random()*8)+"s";
  p.style.animationDelay=(-Math.random()*10)+"s";
  box.appendChild(p);
}

// Entrada + salida
function play(){
  text.classList.remove("exit");
  text.style.animation="none";
  void text.offsetWidth;
  text.style.animation="";
  setTimeout(()=>text.classList.add("exit"),3600);
}
replay.addEventListener("click",play);
setTimeout(play,5200);

// ===== CORTAFUEGO VISUAL =====
// No existe protección web absoluta contra un atacante.
// Esto detecta errores críticos y evita dejar una pantalla parcialmente rota.
window.addEventListener("error",()=>document.body.classList.add("locked"));
window.addEventListener("unhandledrejection",()=>document.body.classList.add("locked"));

// Si el documento pierde elementos esenciales, bloquea la interfaz.
setInterval(()=>{
  const ok=document.querySelector(".brand") &&
           document.querySelector(".heart") &&
           document.querySelector("#mainText") &&
           document.querySelector(".poetry");
  if(!ok) document.body.classList.add("locked");
},3000);
