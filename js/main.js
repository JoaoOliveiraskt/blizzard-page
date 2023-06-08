var a;
var b;

const jogo=document.getElementById("jogos")
const custom_styleJIn={
    top:"0rem",
    animation:"menuJ 0.4s "
    
}
const custom_styleJOut={
    animation:"menuJOut 0.4s ",
    top:"-64rem"
}

const esporte=document.getElementById("esportes")
const custom_styleEIn={
    top:"0rem",
    animation:"menuE 0.4s"
}
const custom_styleEOut={
    animation:"menuJOut 0.4s ",
    top:"-52rem"
}

const btn1=document.querySelector(".btn1")
const custom_styleSeta={
    animation:"seta 0.4s",
    rotate: "180deg",
    filter: "invert(52%) sepia(62%) saturate(3774%) hue-rotate(172deg) brightness(104%) contrast(106%)"
}
const custom_styleSetaOut={
    animation:"setaOut 0.4s",
    rotate:"360deg",
    filter: "none"
    
}
const btn2=document.querySelector(".btn2")


//jogos

function show_hideJ(){
  if(a==1){
      Object.assign(jogo.style,custom_styleJOut);
      Object.assign(btn1.style,custom_styleSetaOut);
      return a=0 ;
      
  }else if(b==1){
      Object.assign(esporte.style,custom_styleEOut);
      Object.assign(btn2.style,custom_styleSetaOut);
     
      
      return b=0
  
  }else{
      Object.assign(jogo.style,custom_styleJIn);
      Object.assign(btn1.style,custom_styleSeta);
      return a=1
  }
}
function mouseOutJ(){
  Object.assign(jogo.style,custom_styleJOut);
  Object.assign(btn1.style,custom_styleSetaOut);
  return a=0
}


//esportes
function show_hideE(){
  if(b==1){
      
      Object.assign(esporte.style,custom_styleEOut);
      Object.assign(btn2.style,custom_styleSetaOut);
      return b=0;
  }
  else if(a==1){
      Object.assign(jogo.style,custom_styleJOut);
      Object.assign(btn1.style,custom_styleSetaOut);
      return a=0
  }else{
      Object.assign(esporte.style,custom_styleEIn);
      Object.assign(btn2.style,custom_styleSeta);
      return b=1
  }
}
function mouseOutE(){
  Object.assign(esporte.style,custom_styleEOut);
  Object.assign(btn2.style,custom_styleSetaOut);
  return b=0
}

// caixa de login

var c;

const logar=document.querySelector(".login")

const custom_StyleLogin={
    visibility:"visible",
    animation:"loginAn 0.4s"
}
const custom_StyleLogout={
    animation:"logoutAn 0.4s",
    visibility:"hidden",

}
const logar_content=document.querySelector(".login_content")
const custom_StyleLoginC={
    animation:"loginContentAn 0.4s"
}

const custom_StyleLogoutC={
    animation:"logoutContentAn 0.4s"
}

//Função do login   

function show_hideLogin(){
  if(c==1){
      Object.assign(logar.style,custom_StyleLogout);
      Object.assign(logar_content.style,custom_StyleLogoutC);
      return c=0;
  }else{
      Object.assign(logar.style,custom_StyleLogin);
      Object.assign(logar_content.style,custom_StyleLoginC);
      return c=1;
  }
}

