/* switch...case */

/* grupo sanguineos: 0 - A - B- AB  Factor: Rh+ - Rh- */

let grupoSanguineo = "1";

switch(grupoSanguineo){
    case "0":  // Busca valores, no expresiones.
        console.log('Dador universal.');
        break;
        case "A":
            console.log('grupo A');
            break;
            case "B":
                console.log('grupo B');
                break;
                case "AB":
                    console.log('receptor universal');
                    break;
                    default:
                        console.log('Grupo desconocido')
}