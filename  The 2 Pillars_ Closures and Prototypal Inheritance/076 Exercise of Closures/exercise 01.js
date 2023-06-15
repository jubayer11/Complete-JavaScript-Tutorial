let view;

function initialize() {

        view = 'view';
        console.log('view has been set!');


}

initialize();
initialize();
initialize();
console.log(view);

//solution 1

let view;

function initialize() {
    let called=0;
    return function ()
    {
        if (called>0)
        {
            return;
        }
        else
        {

            view = 'view';
            console.log('view has been set!',called);
            called++;

        }


    }
}
const startOnce=initialize();
startOnce();
startOnce();
startOnce();
console.log(view);
