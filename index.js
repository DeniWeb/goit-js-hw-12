import{a as u,i as l,S as p}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const f="https://pixabay.com/api/",y="48809440-7649b5744f5d98f4a92a91a9c",L=39;async function m(e,r=1){const i={key:y,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:r};try{return(await u.get(f,{params:i})).data}catch{return iziToast.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),{hits:[],totalHits:0}}}function b(e){const{webformatURL:r,largeImageURL:i,tags:a,likes:t,views:s,comments:n,downloads:g}=e;return`<li class="gallery-item">
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
                            <p>${s}</p>
                        </li>
                        <li class="desc-item">
                            <h3>Comments</h3>
                            <p>${n}</p>
                        </li>
                        <li class="desc-item">
                            <h3>Downloads</h3>
                            <p>${g}</p>
                        </li>
                    </ul>
                </div>
            </li>`}function w(e){return e.map(b).join("")}const o={container:document.querySelector(".gallery"),form:document.querySelector(".form"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")};let c=1,d="";const v=39;o.form.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements.text.value.trim(),!d){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c=1,o.container.innerHTML="",o.loader.classList.remove("hidden"),o.btnLoadMore.classList.add("hidden");try{const i=(await m(d,c)).hits||[];i.length>0?(h(i),o.btnLoadMore.classList.remove("hidden")):l.info({title:"Info",message:"Sorry, there are no images matching your search query.",position:"topRight"})}catch{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{o.loader.classList.add("hidden"),e.target.reset()}});o.btnLoadMore.addEventListener("click",async()=>{c+=1,o.loader.classList.remove("hidden"),o.btnLoadMore.classList.add("hidden");try{const e=await m(d,c),r=e.hits||[];r.length>0&&(h(r),S(),o.btnLoadMore.classList.remove("hidden"));const i=Math.ceil(e.totalHits/v);(c>=i||r.length===0)&&(o.btnLoadMore.classList.add("hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{o.loader.classList.add("hidden")}});function h(e){const r=w(e);o.container.insertAdjacentHTML("beforeend",r),P.refresh()}const P=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(){const{height:e}=o.container.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
