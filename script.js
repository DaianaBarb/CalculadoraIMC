const form = document.querySelector('#form');
form.addEventListener('submit',function(e){
e.preventDefault();
const inputpeso= e.target.querySelector('#peso');
const inputaltura = e.target.querySelector('#altura');
 const peso = Number(inputpeso.value);
 const altura = Number (inputaltura.value);
 	if(!peso){
 		setResultado('Peso Inválido', false);
 		return;
 	}
    if(!altura){
    	setResultado('Altura inválida', false);
    	return;
    }
   
    const imc= getImc(peso, altura);
    const nivelimc=getNivelImc(imc);
     const msg='Seu IMC e: '+imc+' '+ nivelimc; 
   //  const msg=`Seu IMC e ${imc} (${nivelimc}).`; 
    setResultado(msg,true);


});

function getNivelImc(imc){
	const nivel = ['abaixo do peso','peso normal','sobrepeso','obesidade grau 1','obesidade grau 2','obesidade grau 3'];
if(imc>=39.9) return nivel[5];
if(imc>=34.9) return nivel[4];
if(imc>=29.9) return nivel[3];
if(imc>=24.9) return nivel[2];
if(imc>=18.5) return nivel[1];
if(imc<=18.5) return nivel[0];


}

 function getImc(peso,altura){
 	const imc = peso/altura **2; //elevado a dois
 	return imc.toFixed(2); // com duas casas decimais

 }

function setResultado(msg, isvalid){

	const resultado = document.querySelector('#res');

	resultado.innerHTML ='';
  resultado.innerHTML = msg;

  if(isvalid){
  		resultado.style.backgroundColor = "#00bb2d";

	} else {
			resultado.style.backgroundColor = "#bb002c";
	}


}