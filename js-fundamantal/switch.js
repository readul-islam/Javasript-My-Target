// when many of condition write code block then use switch 
// Use the switch statement to select one of many code blocks to be executed.
// firster condition chack with switch ()

// structure
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
var firstName = 'Akash'
switch(firstName){
    case 'redoy':
        console.log('this is redoy');
        break;
        case 'sagor':
            console.log('this is sagor');
            break;
            case 'torik':
                console.log('this is torik');
                break;
                case 'alim':
                    console.log('this is alim');
                    break;
                    case 'Akash':
                        console.log('thid is Akash');
                        break;
                        default:
                            console.log('thid name is invalid');
}