// for(let i=0; i<=100; i=i+2) { // con paso de dos en dos
//     console.log(i)
// }

//  for(let i=0; i<=100; i++) { // usando variable para que divida entre dos
//   if(i%2 == 0)
//       console.log(i)
//  }

prompt( "Menu del dia" + "\n1.Pedir Sopa" + "\n2.Pedir Pan con milanesa" + "\n3.Pedir Unas Chelas")
let num = parseInt(prompt("Marque 1 al 12 para x"))
    switch (num) {
        case 1:
            alert("Pedir SOPA");
            break;
        case 2:
            alert("Pedir Pan con Milanesa");
            break;
        case 3:
            alert("Pedir Unas Chelitas")
            break;
        case 4:
            alert("Pedir Empanadas")
        default:
            alert("Marque 1-4 para pedir un menu")
            break;
    }