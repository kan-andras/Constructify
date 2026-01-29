const B = document.getElementById('valtment');
const A = document.getElementById('fioktorles');
const C = document.getElementById('kijel');
const D = document.getElementById('nevgomb');
const E = document.getElementById('lakcimgomb');
const F = document.getElementById('emailgomb');
const G = document.getElementById('jelszogomb');
const A2 = document.getElementById('felnevgomb');
const H = document.getElementById('inputmezo');

function syncHeight(){
    const height2 = A2.offsetHeight;
    A.style.height = height2 + 'px';
    C.style.height = height2 + 'px';

    D.style.height = height2 + 'px';
    E.style.height = height2 + 'px';
    F.style.height = height2 + 'px';
    G.style.height = height2 + 'px';
    B.style.height = height2 + 'px';
    
    
}

syncHeight();
window.addEventListener('resize', syncHeight);
