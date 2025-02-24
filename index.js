import{a as p,i as l,S as f}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const y="https://pixabay.com/api/",L="48809440-7649b5744f5d98f4a92a91a9c",b=40;async function m(e,t=1){const i={key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,page:t};try{return(await p.get(y,{params:i})).data}catch{return iziToast.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),{hits:[],totalHits:0}}}function w(e){const{webformatURL:t,largeImageURL:i,tags:a,likes:r,views:s,comments:n,downloads:u}=e;return`<li class="gallery-item">
                <a href="${i}" class="gallery-link">
                    <img src="${t}" alt="${a}" class="gallery-image" />
                </a>
                <div class="desc">
                    <ul class="desc-wrapper">
                        <li class="desc-item">
                            <h3>Likes</h3>
                            <p>${r}</p>
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
                            <p>${u}</p>
                        </li>
                    </ul>
                </div>
            </li>`}function v(e){return e.map(w).join("")}const o={container:document.querySelector(".gallery"),form:document.querySelector(".form"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")};let c=1,d="";const h=40;o.form.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements.text.value.trim(),!d){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c=1,o.container.innerHTML="",o.loader.classList.remove("hidden"),o.btnLoadMore.classList.add("hidden");try{const t=await m(d,c),i=t.hits||[];i.length>0?(g(i),t.totalHits>h&&o.btnLoadMore.classList.remove("hidden")):l.info({title:"Info",message:"Sorry, there are no images matching your search query.",position:"topRight"})}catch{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{o.loader.classList.add("hidden"),e.target.reset()}});o.btnLoadMore.addEventListener("click",async()=>{c+=1,o.loader.classList.remove("hidden"),o.btnLoadMore.classList.add("hidden");try{const e=await m(d,c),t=e.hits||[];t.length>0&&(g(t),S(),o.btnLoadMore.classList.remove("hidden"));const i=Math.ceil(e.totalHits/h);(c>=i||t.length===0)&&(o.btnLoadMore.classList.add("hidden"),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}finally{o.loader.classList.add("hidden")}});function g(e){const t=v(e);o.container.insertAdjacentHTML("beforeend",t),P.refresh()}const P=new f(".gallery a",{captionsData:"alt",captionDelay:250});function S(){const{height:e}=o.container.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
