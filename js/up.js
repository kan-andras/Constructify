const B = document.getElementById('valtment');
const A = document.getElementById('fioktorles');
const C = document.getElementById('kijel');
const D = document.getElementById('nevgomb');
const E = document.getElementById('lakcimgomb');
const F = document.getElementById('emailgomb');
const G = document.getElementById('jelszogomb');
const J = document.getElementById('telszamgomb');



const A2 = document.getElementById('felnevgomb');
const I = document.getElementById('nevinput');
const I2 = document.getElementById('nevinput2');
const I3 = document.getElementById('nevinput3');
const I4 = document.getElementById('nevinput4');
const I5 = document.getElementById('nevinput5');
const I6 = document.getElementById('nevinput6');

const H = document.getElementsByClassName('inputmezo');

function syncHeight(){
    const height2 = A2.offsetHeight;
    const height4 = I.offsetHeight;
    //const widthA2 = A2.offsetWidth;
    A.style.height = height2 + 'px';
    C.style.height = height2 + 'px';

    D.style.height = height2 + 'px';
    E.style.height = height2 + 'px';
    F.style.height = height2 + 'px';
    G.style.height = height2 + 'px';
    B.style.height = height2 + 'px';
    J.style.height = height2 + 'px';
    I.style.height = height2 -2 + 'px';
    I2.style.height = height2 -2 + 'px';
    I3.style.height = height2 -2 + 'px';
    I4.style.height = height2 -2 + 'px';
    I5.style.height = height2 -2 + 'px';
    I6.style.height = height2 -2 + 'px';
    
    /*
    H.style.height = height2 + 'px';
    .style.width = widthA2*2 + 'px';*/
    
}

syncHeight();
window.addEventListener('resize', syncHeight);
