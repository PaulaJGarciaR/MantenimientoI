// ############################################VARIABLES Y TIPOS DE DATOS #################################################3
let primerNombre="Paula";
let segundoNombre="Johana";
let primerApellido="Garcia";
let segundoApellido="Rodriguez";
let edad="18";

alert("Bienvenido:"+primerNombre);
console.log("Nombre y Apellidos:"+"\n"+primerNombre+" "+segundoNombre+" "+primerApellido+" "+segundoApellido);

edad=parseInt(edad);

console.log("¿Cual sera mi edad en cinco años?"+" "+(edad+5));
console.log(typeof(segundoApellido));
// ########################################### EJERCICIO FACTURA ########################################################3

let comidaUno=2800;
let comidaDos=1300;
let bebidaUno=900;
let bebidaDos=650;
console.log("------------- CUENTA -----------------");
console.log("Bebida Uno:   900");
console.log("Bebida Dos:   650");
console.log("Comida Uno:   2800");
console.log("Comida Dos:   1300");
console.log("------------------------------");
console.log("Total Bebidas:"+(bebidaUno+bebidaDos));
console.log("Total Comida:"+(comidaUno+comidaDos));
console.log("-------------TOTAL A PAGAR-----------");
console.log("Total:"+(bebidaUno+bebidaDos+comidaUno+comidaDos));
// ######################################## ESTRUCTURAS REPETITIVAS ##########################################################
for (let i=0;i<10;i++){
    if(i%2==0){
        console.log(i);
    }
}
let i=0;
while(i<10){
if(i%3==0){
    console.log(i);
}
i++;
}
let j=0;
do{
    if(j%4==0){
        console.log(j);
    }
    j++;
    
}while(j<10);
let condicion=3;
switch(condicion){
    case 1:console.log("SELECCIONO UNO");
           break;
    case 2:console.log("SELECCIONO DOS");
    break;
    case 3:console.log("SELECCIONO TRES");
    break;
}
// #################################### EJERCICIO EDAD ######################################################################
let edadUsuario=17;
let trajoDocumento=true;

if(edadUsuario>=18 && trajoDocumento==true){
    console.log("PUEDE INGRESAR");
}else{
    console.log("ENTRADA DENEGADA");
}

// ################################# EJERCICIO ESTRUCTURA REPETITIVA #########################################################
let nomeroUno=prompt("Ingresa un numero");
let numeroDos=prompt("Ingresa otro numero");
let restaNumero=nomeroUno-numeroDos;
if(restaNumero>0){
    console.log("EL RESULTADO ES MAYOR A 0");
        if(restaNumero%2==0){
            console.log(restaNumero+" "+"ES UN NUMERO PAR");
        }else{
            console.log(restaNumero+" "+"ES UN NUMERO IMPAR");
        }
    }else{
        console.log("ES MENOR A 0");
    }
    // #######################################CONTAR NUMEROS #################################
      for(let i=1;i<=35;i++){
       console.log(i+"\n");
      }

    //   -----cuenta regresiva año nuevo-------------
    for(let j=10;j>=0;j--){
        console.log("CUENTA REGRESIVA:"+j)
       if(j==0){
        alert("FELIZ AÑO NUEVO");
       }
    }
    let p=10;
    while(p>=0){
        console.log(p);
        p--;
    }
    // ############################# ARREGLOS Y MATRICES##########################################

 let arregloUno=[[1,2,3,4,5,6,7,8,9,10],[41,42,43,44,45,46,47,48,49,50]];
 let arregloNombre=["Paula","Johana","Garcia","Rodriguez"];
  for(let i=0;i<4;i++){
    console.log(arregloNombre[i]);
  }
  var suma=0;
  for(let i=0;i<2;i++){
    for(let j=0;j<9;j++){
       suma=suma+arregloUno[i][j]; 
       if(arregloUno[i][j]%2==0){
        console.log("LOS NUMEROS PARES DEL ARREGLO SON:");
        console.log(arregloUno[i][j]);
       }
    }
  }
  console.log(suma);

