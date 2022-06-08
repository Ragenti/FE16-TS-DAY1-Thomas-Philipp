//BASIC
//ex 1

for(let i = 1; i<=10; i++) {
  for(let j = 1; j<=10; j++) {
    console.log(`${j} X ${i} = ${j*i}`)
  }
}

// ex 2

function printName(person: { fName: string; lName: string }, nameType?: string, times?: number): void {
  let name: string = "";
  if(nameType) {
    switch(nameType.toLowerCase()){
      case "first": name = person.fName; break;
      case "second": name = person.lName; break;
    }
  } else {
    name = person.fName + " " + person.lName
  }
  if(times) {
    let tmpArray: typeof person[] = [];
    for(let i = 0; i < times; i++) {
      tmpArray.push(person);
    }
    tmpArray.forEach(() => {
      console.log(name)
    });
  } else {
    console.log(name)
  }
}

printName({fName: "Schwammrobert", lName: "Quadrathosen"}, "first", 10)

setTimeout(function(){ printName({fName: "Anna", lName: "Nyma"}, "second", 10)}, 5000);

// ex 3

const arrayOfStrings: string[] = ["Tick", "Trick", "Track", "Huey", "Dewey", "Louie"];

console.log("Printing only values")
arrayOfStrings.forEach( function(value, index) {
  console.log(`Array element: ${value}`);
});

console.log("Printing only indices")
arrayOfStrings.forEach( function(value, index) {
  console.log(`Array element with index ${index}`);
});

console.log("Printing values and indices")
arrayOfStrings.forEach( function(value, index) {
  console.log(`Array element ${value} with index ${index}`);
});

// ADVANCED

type ingredient = {
  name: string,
  quantity: number,
  unit: string
}

const food: Array<ingredient> = [{name: "Water",quantity: 1, unit: "Liters"},{name: "Flour",quantity: 0.5, unit: "Kg"},{name: "Salt",quantity: 2, unit: "Teaspoons"}]

food.forEach(dish => {
  (document.querySelector(".custom-content") as HTMLElement).innerHTML += 
  `
  <hr>
  <div class="col-6">Name: ${dish.name}</div>  
  <div class="col-6">Quantity: ${dish.quantity} ${dish.unit}</div>  
  <hr class="mt-2">
  `
});