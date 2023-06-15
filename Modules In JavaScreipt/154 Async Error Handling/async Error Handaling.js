 Promise.resolve('asyncfail')
    .then(response=>
    {
        Promise.resolve().then(()=>
        {
            throw new Error('#1 failed');
        })
            .catch(err=>
            {
                console.log('catch the nested error');
            })
        return 5;
    })
 .then(response=>
 {
     console.log('response',response);
 })
 .catch(error=>
 {
     // console.log('catching error',error);
     // return error;
     throw new Error('again throwing an error');
 })
 .then(response=>
 {
     console.log('catching error',response);
 })
 .catch(err=>
 {
     console.log('catching previsou error', err.message);
 })