

let num = [0,1,3,5,7,9,14,16,17]

const mapArray = num.map((x) => x * 2);
console.log(mapArray);

const mapFunc = (callback, arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let result = callback(arr[i])
        newArr.push(result);
    }
    return newArr;
}
console.log(mapFunc((x) => x * 2, num));

let foodPrices = [1.99, 4.50, 6.99, 9.45, 10.55]

const reduceArray = foodPrices.reduce((a,c) => a + c);
console.log(reduceArray);



const reducePrices = (callback, arr, initialValue) => {
  let currentValue = initialValue ? initialValue : 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    currentValue = callback(currentValue, arr[i]);
  }
  return currentValue.toFixed(2);
};

console.log(reducePrices((a, c) => a + c, foodPrices));


let itemNum = [1,3,6,10,12,13,17,19]

const filterArray = itemNum.filter(num => num % 2 === 0);
console.log(filterArray);


Array.prototype.myFilter = function (func) {
    let filtered = []
    for(let i = 0; i < this.length; i++) {
        if (func(this[i],i,this)) {
            filtered.push(this[i]);
        }
    }
    return filtered;
}










