// 1
let mes = 9
switch (mes) {
    case 1:
        console.log("enero")
        break;
    case 2:
        console.log("febreo")
        break;
    case 3:
        console.log("marzo")
        break;
    case 4:
        console.log("abril")
        break;
    case 5:
        console.log("mayo")
        break;
    case 6:
        console.log("junio")
        break;
    case 7:
        console.log("julio")
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log("septimbre")
        break;
    case 10:
        console.log("octubre")
   
        break;
    case 11:
        console.log("noviembre")

        break;
    case 12:
        console.log("diciembre")
        break;
    default:
        break;
}

// 2





    function numero (num) {
        switch (num) {
            case "1":
                let resultado1=Number(num)
                return resultado1
                break;
            case "2":
                let resultado2=Number(num)
                return resultado2
                break;
            case "3":
                let resultado3=Number(num)
                return resultado3
                break;
            case "4":
                let resultado4=Number(num)
                return resultado4
                break;
            case "5":
                let resultado5=Number(num)
                return resultado5
                break;
        
                default:
                break;
            }
    }
    
    console.log(numero("1"));