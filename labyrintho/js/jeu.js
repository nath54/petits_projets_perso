
//

window.event_kup=38;
window.event_kdown=40;
window.event_kleft=37;
window.event_kright=39;

//


function create_table(){
    //on suggere que l'on mettra le labyrinthe avant dans un tableau 2d window.laby
    //avec window.tlabx et window.tlaby les tailles du labyrinthe
    var table = document.getElementById("laby");
    for(y=0; y<window.tlaby; y++){
        var r=document.createElement("tr");
        for(x=0; x<window.tlabx; x++){
            var d=document.createElement("td");
            var tp="sol";
            if(window.laby[y][x]==1){ tp="mur"; }
            console.log(x==window.fin[0] && y==window.fin[1]);
            if( x==window.fin[0] && y==window.fin[1] ){ tp+=" goal"; }
            d.setAttribute("class","case "+tp);
            d.setAttribute("id","case_"+x+"_"+y);
            r.appendChild(d);
        }
        table.appendChild(r);
    }
}

function aff_perso(first=false){
    //on nettoie
    if(!first){
        var cas=document.getElementById("case_"+window.apx+"_"+window.apy);
        var tp="sol";
        if(window.laby[window.apy][window.apx]==1){ tp="mur"; }
        if( window.apx==window.fin[0] && window.apy==window.fin[1] ){ tp+=" goal"; }
        cas.setAttribute("class", "case "+tp);
    }
    //on affiche
    var cas=document.getElementById("case_"+window.px+"_"+window.py);
    var tp="sol";
    if(window.laby[window.py][window.px]==1){ tp="mur"; }
    if( window.px==window.fin[0] && window.py==window.fin[1] ){ tp+=" goal"; }
    cas.setAttribute("class", "case "+tp+" perso");
}

function init(){
    window.laby=lab;
    window.tlabx=tx;
    window.tlaby=ty;
    window.deb=deb;
    window.fin=fin;
    window.px=window.deb[0];
    window.py=window.deb[1];
    window.apx=window.px;
    window.apy=window.py;
    //
    create_table();
    //
    aff_perso(true);
}

function bouger(di){
    if(di=="up"){
        if(window.py>0 && window.laby[window.py-1][window.px]==0){
            //on bouge
            window.apx=window.px;
            window.apy=window.py;
            window.py-=1;
            //on aff
            aff_perso();
        }
    }else if(di=="down"){
        if(window.py<window.tlaby-1 && window.laby[window.py+1][window.px]==0){
            //on bouge
            window.apx=window.px;
            window.apy=window.py;
            window.py+=1;
            //on aff
            aff_perso();
        }
    }else if(di=="left"){
        if(window.px>0 && window.laby[window.py][window.px-1]==0){
            //on bouge
            window.apy=window.py;
            window.apx=window.px;
            window.px-=1;
            //on aff
            aff_perso();
        }
    }else if(di=="right"){
        if(window.px<window.tlabx && window.laby[window.py][window.px+1]==0){
            //on bouge
            window.apy=window.py;
            window.apx=window.px;
            window.px+=1;
            //on aff
            aff_perso();
        }
    }
    //on verifie si le joueur a gagne
    if(window.px==window.fin[0] && window.py==window.fin[1]){
        //on a gagne
        window.location.href="gagne.html";
    }
}


document.addEventListener('keydown', function(event) {
    if(event.keyCode == window.event_kleft) { bouger("left"); }
    else if(event.keyCode == window.event_kright) { bouger("right"); }
    else if(event.keyCode == window.event_kup) { bouger("up"); }
    else if(event.keyCode == window.event_kdown) { bouger("down"); }
});


