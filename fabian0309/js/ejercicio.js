const arrobj= [{
    healthyFood:{
        dish_1:"fruit salad",
        dish_2:"wafles",
        dish_3:"natural juice",
        dish_4:"parfrait",
    },
},
{
    junkfood:{
        dish_1:"hamburguer",
        dish_2:"hotdog",
        dish_3:"salchipapita",
        dish_4:"pizza",
        dish_5:"bacon",

    },
},
{
    traditionalfood:{
        dish_1:"sancocho",
        dish_2:"mute",
        dish_3:"aguapanela",
        dish_4:"caldito",
        dish_5:[{
            dish_1:"bandeja paisa",
            ingredients:{
                ing_1:"arroz",
                ing_2:"huevo frito",
                ing_3:"carne molida",
                ing_4:"tocino",
                ing_5:"chorizo",
                ing_6:"arepa blanque que no sabe a nada",
                ing_7:"frijol",
              },
          },
      ],    
    },
  },
];
console.log(arrobj[2].traditionalfood.dish_5[0].ingredients)
console.log(arrobj[1].junkfood.dish_3)

///condicionales///
if (!Array.isArray(arrobj)){
    console.log("This is an array");
} else {
console.log("This is not an array");
}

let valor_1;
let valor_2 = 2;
let valor_3 = 500;
let valor_4 = -56.5;

/* if(valor_2 <valor_3 && valor_2 < valor_4){
    console.log("El menor valor es "+ valor_2);
} else if (valor_3 < valor_2 && valor_3 < valor_4){
    console.log ("el menor valor es "+ valor_3);
} else {
     console.log ("el menor valor es "+ valor_4);
}
 */
///operador ternario///

valor_2 
? console.log ("This is valor 2: "+ valor_2)
: console.log ("This is null");

valor_2 <valor_3 && valor_2 < valor_4
? console.log("EL menor valor es "+ valor_2)
: (valor_3 < valor_2 && valor_3 < valor_4)
  ?  console.log("El menor valor es "+ valor_3)
  :  console.log("El menor valor es "+ valor_4);
