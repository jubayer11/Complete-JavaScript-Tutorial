const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i);
    }, 3000)
}

//solution one (replaceing ver keyword with let)
const array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + i);
    }, 3000)
}

//solution 3
const array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
    (function (closureI) {
            setTimeout(function () {
                console.log('I am at index ' + closureI);
            }, 3000)
        }

    )(i)
}