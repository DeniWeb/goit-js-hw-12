import{a as u,i as l,S as p}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const f="https://pixabay.com/api/",y="48809440-7649b5744f5d98f4a92a91a9c",L=40;async function m(e,r=1){const i={key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:r};try{return(await u.get(f,{params:i})).data}catch{return iziToast.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),{hits:[],totalHits:0}}}function w(e){const{webformatURL:r,largeImageURL:i,tags:a,likes:t,views:o,comments:n,downloads:h}=e;return`<li class="gallery-item">
                <a href="${i}" class="gallery-link">
                    <img src="${r}" alt="${a}" class="gallery-image" />
                </a>
                <div class="desc">
                    <ul class="desc-wrapper">
                        <li class="desc-item">
                            <h3>Likes</h3>
                            <p>${t}</p>
                        </li>
                        <li class="desc-item">
                            <h3>Views</h3>
                            <p>${o}</p>
                        </li>
                        <li class="desc-item">
                            <h3>Comments</h3>
                            <p>${n}</p>
                        </li>
                        <li class="desc-item">
                            <h3>Downloads</h3>
                            <p>${h}</p>
                        </li>
                    </ul>
                </div>
            </li>`}function b(e){return e.map(w).join("")}const s={container:document.querySelector(".gallery"),form:document.querySelector(".form"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")};let c=1,d="";const v=40;s.form.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements.text.value.trim(),!d){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c=1,s.container.innerHTML="",s.loader.classList.remove("hidden"),s.btnLoadMore.classList.add("hidden");try{const i=(await m(d,c)).hits||[];i.length>0?(g(i),s.btnLoadMore.classList.remove("hidden")):l.info({title:"Info",message:"Sorry, there are no images matching your search query.",position:"topRight"})}catch{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{s.loader.classList.add("hidden"),e.target.reset()}});s.btnLoadMore.addEventListener("click",async()=>{c+=1,s.loader.classList.remove("hidden");try{const e=await m(d,c),r=e.hits||[];r.length>0&&(g(r),S());const i=Math.ceil(e.totalHits/v);(c>=i||r.length===0)&&(s.btnLoadMore.classList.add("hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{s.loader.classList.add("hidden")}});function g(e){const r=b(e);s.container.insertAdjacentHTML("beforeend",r),P.refresh()}const P=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(){const{height:e}=s.container.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
