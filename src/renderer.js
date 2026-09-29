let zip=null,target="auto";const $=id=>document.getElementById(id),drop=$("drop"),build=$("build"),logs=$("logs"),state=$("state");
function showFile(){if(!zip)return;$("fileTitle").textContent=zip.split(/[\\/]/).pop();$("fileMeta").textContent="ZIP project selected";build.disabled=false}
$("choose").onclick=async()=>{zip=await window.buildzip.chooseZip();showFile()};
["dragover","dragenter"].forEach(e=>drop.addEventListener(e,x=>{x.preventDefault();drop.classList.add("drag")}));
["dragleave","drop"].forEach(e=>drop.addEventListener(e,x=>{x.preventDefault();drop.classList.remove("drag")}));
drop.addEventListener("drop",e=>{const f=e.dataTransfer.files[0];if(f&&f.name.toLowerCase().endsWith(".zip")){zip=f.path;showFile()}});
document.querySelectorAll(".targets button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".targets button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");target=b.dataset.t});
window.buildzip.onLog(m=>{if(logs.querySelector(".empty"))logs.innerHTML="";const d=document.createElement("div");d.className="log "+(m.type||"");d.textContent="["+String(m.time||"")+"] "+String(m.text||"");logs.appendChild(d);logs.scrollTop=logs.scrollHeight;if(m.type==="error")state.textContent="Build failed";if(m.type==="success")state.textContent="Build complete"});
build.onclick=async()=>{if(!zip)return;build.disabled=true;logs.innerHTML="";state.textContent="Building…";const r=await window.buildzip.build(zip,target);if(r&&r.ok)state.textContent="Done · "+r.target;else state.textContent="Build failed";build.disabled=false};