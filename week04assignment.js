console.log("lol")

//Conrad Hope; C:\Users\Conjh\Downloads\FrontEndFolderTree\Promineo_Tech\Week-04-ECMAScript_6_and_Intermediate_JavaScript

// 1.) So I ...
    
    const ages = [3,9,23,64,2,8,28,93]; 
    
    // a.
    console.log("1:a) " + (ages[0] - ages[ages.length-1]));
    
    // b.
    ages.push(3);
    console.log("1:b) " + (ages[0] - ages[ages.length-1]));

    //c.
    function sumMachine(x) {
       
        let sum = 0;
 
        for(let i = 0; i < x.length; i++) {
            sum += x[i];   
        }
        return sum;
 }
 console.log(("1:c) ") + sumMachine([3,9,23,64,2,8,28,93]) / (ages.length));

 // 2.) 

    const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

    // a.
    let letters = 0;

    for (let i = 0; i < names.length; i++) {
        letters += names[i].length;
    }

    const avgLetters = letters / names.length; 

console.log("2:a) " + avgLetters);

    // b.

    let concatNames = " ";

    for (let i = 0; i < names.length; i++) {
        concatNames += names[i] + " ";
    }

console.log("2.b)" + concatNames.trim());

    // 3.) 
console.log("3.) I used [value.length-1], and the -1 displays the last element among the array length.")

    // 4.)
console.log("4.) I used [0], and the [0] will always display the first element among the array length.")

    // 5.)

    const nameLengths = [];

    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }

console.log("5.) " + nameLengths);

    // 6.)
       
        let sum = 0;
 
        for(let i = 0; i < nameLengths.length; i++) {
            sum += nameLengths[i];   
        }
 
 console.log("6.) " + sum);

    // 7.)

    const numberSeven = (word, n) => {
        let concatWord = " ";

        for (let i = 0; i < n; i++) {
            concatWord += word;
        }
    return concatWord
}

console.log("7.) " + (numberSeven("lol", 3)))

    //8.)

    const numberEight = (firstName, lastName) => `${firstName} ${lastName}`

console.log("8.) " + numberEight("Luke", "Skywalker"))
    
    //9.)

    const numberNine = (x) => {
       
        let sum = 0;
 
        for(let i = 0; i < x.length; i++) {
            sum += x[i];   
        }
    return sum > 100;
 }
    
console.log("9.) " + numberNine([25, 25, 25, 26]))
console.log("9.) " + numberNine([25, 25, 25, 24]))
console.log("9.) " + numberNine([25, 25, 25, 25]))

    //10.)

    const numberTen = (x) => {
        let sum = 0;
 
        for(let i = 0; i < x.length; i++) {
            sum += x[i];   
        }
        return sum / x.length;
 }
 console.log(("10.) ") + (numberTen([3,9,23,64,2,8,28,93])));
 console.log(("10.) ") + (numberTen([0,0,0,0,0,0])));

    //11.)

    const numberEleven = (a,b) => {
        let sumA = 0;
        let sumB = 0;
 
        for(let i = 0; i < a.length; i++) {
            sumA += a[i];   
        }
        
        for(let i = 0; i < b.length; i++) {
            sumB += b[i];
        }
        
        const avgA = sumA / a.length;
        const avgB = sumB / b.length;
        
        return avgA > avgB;
    }

    const array1 = [69,69,68,69,69];
    const array2 = [1,2,3,4,5];

console.log("11.) " + (numberEleven(array1, array2)));

    //12.)

    const willBuyDrink = (isHotOutside, moneyInPocket) => {
        
        if (isHotOutside === true && moneyInPocket > 10.50) {
            return true;
        } else {
            return false;
        }
    }

console.log("12.) " + (willBuyDrink(true, 11)))
console.log("12.) " + (willBuyDrink(false, 11)))
console.log("12.) " + (willBuyDrink(true, 10)))

    //13.)
    // "Going to the theaters to watch Puss in Boots: The Last Wish"
    // There are multiple considerations when watching a movie in the theators, so I made a function that can solve all of our theator problems!

    const pussInBoots = (movieDrink, movieSnack, movieTime) => `I will drink ${movieDrink}, I will eat ${movieSnack}, and I will attend the new Puss in Boots movie at ${movieTime}. `

console.log(pussInBoots("water flavored water","a 5 course Thanskgiving dinner","midnight"))