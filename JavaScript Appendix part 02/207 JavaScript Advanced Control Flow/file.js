//
function isUserValid(bool)
{
    return bool;
}

var answer=isUserValid(bool)?console.log('true'):false;

var automatedAnswer= "you account pin is" + (isUserValid(false)?"1234":'hello');


//switch case
function moveCommand(direction)
{
    var whatHappens;

    switch (direction)
    {
        case "forward":
            whatHappens="You encountred a monster";
            break;
        case "back":
            whatHappens="you arrived home";
            break;
        case "right":
            whatHappens="you found a river";
            break;
        case "left":
            whatHappens="You ran into a troll";
            break;
        default:
            whatHappens="please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand('lef'));