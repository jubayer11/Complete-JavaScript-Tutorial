//optional chaining operator ?.

let will_pokemon=
    {
      pikachu:
          {
              species:'Mouse pokemon',
              height:0.4,
              weight:6
          }
    }

let adrei_pokemon=
    {
        raichu:
            {
                species:'Mouse pokemon',
                height:0.4,
                weight:6
            }
    }

    //older way

if(adrei_pokemon.pikachu && adrei_pokemon.pikachu.weight)
{
    let weight2=adrei_pokemon.pikachu.weight;
    console.log(weight2);
}
else
{
    let weight2=undefined
    console.log(weight2);
}


//newer way

let weight3=will_pokemon?.pikachu?.weight||'no weight'
console.log(weight3);

//Nullish Coacescing Operator ??






