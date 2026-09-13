function atmCoverDataUrl(){return window.ATM_COVER_B64?('data:image/avif;base64,'+window.ATM_COVER_B64):'';}
function atmHydrateCover(){const u=atmCoverDataUrl();if(!u)return;document.querySelectorAll('[data-atm-cover]').forEach(el=>{el.src=u;});}
function atmPageDataUrl(n){const s=(window.ATM_PAGE_B64||[])[n-1];return s?('data:image/avif;base64,'+s):'';}
