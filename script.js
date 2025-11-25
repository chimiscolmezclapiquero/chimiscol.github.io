const cartas=[
"1 el gallo-min.jpg","10 arbol-min.jpg","11 melon-min.jpg","12 el valiente-min.jpg",
"13 el gorrito-min.jpg","14 la muerte-min.jpg","15 la pera-min.jpg","16 la bandera-min.jpg",
"17 el bandolon-min.jpg","18 el violoncello-min.jpg","19 la garza-min.jpg","2 el diablito-min.jpg",
"20 el pajaro-min.jpg","21 la mano-min.jpg","22 la bota-min.jpg","23 la luna-min.jpg",
"24 el cotorro-min.jpg","25 el borracho-min.jpg","26 el negrito-min.jpg","27 el corazon-min.jpg",
"28 la sandia-min.jpg","29 el tambor-min.jpg","3 la dama-min.jpg","30 el camaron-min.jpg",
"31 las jaras-min.jpg","32 el musico-min.jpg","33 la aranna-min.jpg","34 el soldado-min.jpg",
"35 la estrella-min.jpg","36 el cazo-min.jpg","37 el mundo-min.jpg","38 el apache-min.jpg",
"39 el nopal-min.jpg","4 el catrin-min.jpg","40 el alacran-min.jpg","41 la rosa-min.jpg",
"42 la calavera-min.jpg","43 la campana-min.jpg","44 el cantarito-min.jpg","45 el venado-min.jpg",
"46 el sol-min.jpg","47 la corona-min.jpg","48 la chalupa-min.jpg","49 el pino-min.jpg",
"5 el paraguas-min.jpg","50 el pescado-min.jpg","51 la palma-min.jpg","52 la maceta-min.jpg",
"53 el arpa-min.jpg","54 la rana-min.jpg","6-la-sirena-min.jpg","7 la escalera-min.jpg",
"8 la botella-min.jpg","9 barril-min.jpg"
];

const nombres={
"1 el gallo-min.jpg":"El Gallo","10 arbol-min.jpg":"El Árbol","11 melon-min.jpg":"El Melón",
"12 el valiente-min.jpg":"El Valiente","13 el gorrito-min.jpg":"El Gorrito","14 la muerte-min.jpg":"La Muerte",
"15 la pera-min.jpg":"La Pera","16 la bandera-min.jpg":"La Bandera","17 el bandolon-min.jpg":"El Bandolón",
"18 el violoncello-min.jpg":"El Violoncelo","19 la garza-min.jpg":"La Garza","2 el diablito-min.jpg":"El Diablito",
"20 el pajaro-min.jpg":"El Pájaro","21 la mano-min.jpg":"La Mano","22 la bota-min.jpg":"La Bota",
"23 la luna-min.jpg":"La Luna","24 el cotorro-min.jpg":"El Cotorro","25 el borracho-min.jpg":"El Borracho",
"26 el negrito-min.jpg":"El Negrito","27 el corazon-min.jpg":"El Corazón","28 la sandia-min.jpg":"La Sandía",
"29 el tambor-min.jpg":"El Tambor","3 la dama-min.jpg":"La Dama","30 el camaron-min.jpg":"El Camarón",
"31 las jaras-min.jpg":"Las Jarás","32 el musico-min.jpg":"El Músico","33 la aranna-min.jpg":"La Araña",
"34 el soldado-min.jpg":"El Soldado","35 la estrella-min.jpg":"La Estrella","36 el cazo-min.jpg":"El Cazo",
"37 el mundo-min.jpg":"El Mundo","38 el apache-min.jpg":"El Apache","39 el nopal-min.jpg":"El Nopal",
"4 el catrin-min.jpg":"El Catrín","40 el alacran-min.jpg":"El Alacrán","41 la rosa-min.jpg":"La Rosa",
"42 la calavera-min.jpg":"La Calavera","43 la campana-min.jpg":"La Campana","44 el cantarito-min.jpg":"El Cantarito",
"45 el venado-min.jpg":"El Venado","46 el sol-min.jpg":"El Sol","47 la corona-min.jpg":"La Corona",
"48 la chalupa-min.jpg":"La Chalupa","49 el pino-min.jpg":"El Pino","5 el paraguas-min.jpg":"El Paraguas",
"50 el pescado-min.jpg":"El Pescado","51 la palma-min.jpg":"La Palma","52 la maceta-min.jpg":"La Maceta",
"53 el arpa-min.jpg":"El Arpa","54 la rana-min.jpg":"La Rana","6-la-sirena-min.jpg":"La Sirena",
"7 la escalera-min.jpg":"La Escalera","8 la botella-min.jpg":"La Botella","9 barril-min.jpg":"El Barril"
};

let orden=[],indice=0,intervalo=null;
const cartaActual=document.getElementById("cartaActual");
const velocidad=document.getElementById("velocidad");
const btnJugar=document.getElementById("btnJugar");

btnJugar.onclick=()=>{
speechSynthesis.cancel();
let frase=new SpeechSynthesisUtterance("corre y va corriendo con:");
speechSynthesis.speak(frase);
setTimeout(()=>{ iniciarJuego(); },2000);
};

function iniciarJuego(){
orden=[...cartas].sort(()=>Math.random()-0.5);
indice=0;
avanzar();
intervalo=setInterval(avanzar,velocidad.value);
}

function avanzar(){
if(indice>=orden.length){ fin(); return; }
let carta=orden[indice];
cartaActual.src="cartas/"+carta;
let voz=new SpeechSynthesisUtterance(nombres[carta]);
speechSynthesis.speak(voz);
indice++;
}

function fin(){
clearInterval(intervalo);
speechSynthesis.speak(new SpeechSynthesisUtterance("Hemos terminado."));
btnJugar.innerText="VOLVER A JUGAR";
}