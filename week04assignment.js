console.log("lol")

//Conrad Hope; C:\Users\Conjh\Downloads\FrontEndFolderTree\Promineo_Tech\Week-04-ECMAScript_6_and_Intermediate_JavaScript

// 1.) I created the instucted array.
    
    const ages = [3,9,23,64,2,8,28,93]; 
    
    // a. I know every array has a [0], and that the end of every array is variable.length-1.
    console.log("1:a) " + (ages[0] - ages[ages.length-1]));
    
    // b. To add a element to an array, I used the .push command. I repeated step a's instructions.
    ages.push(3);
    console.log("1:b) " + (ages[0] - ages[ages.length-1]));

    //c. I remebered a lab going over how to find sums, so I copied the function I made. Then simply divided the machine with ages.length.
    function sumMachine(x) {
       
        let sum = 0;
 
        for(let i = 0; i < x.length; i++) {
            sum += x[i];   
        }
        return sum;
 }
 console.log(("1:c) ") + sumMachine([3,9,23,64,2,8,28,93]) / (ages.length));

 // 2.) I created the instucted array.

    const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

    // a. This part had me very confused, but thankfully I realized I was overthinking the whole time
    // >> I knew I needed a for statement to start, but then I got confused when I realized i had to count the letters, rather than the elements.
    // >> I know this is going to sound silly, but I ran out of ideas. So I was like "screw it" lets see if I can squeeze .length afer [i], rather than names. Boom, we had lift off after that dilemma.
    let letters = 0;

    for (let i = 0; i < names.length; i++) {
        letters += names[i].length;
    }

    const avgLetters = letters / names.length; 

console.log("2:a) " + avgLetters);

    // b. Instead of using the .conact command, I created a new variable and used the .trim command instead.
    // >> I was looking through MDN Web Docs and ran accross .trim. This command helped me basically make a new array, and did not modify the original. 

    let concatNames = " ";

    for (let i = 0; i < names.length; i++) {
        concatNames += names[i] + " ";
    }

console.log("2.b)" + concatNames.trim());

// 3.) 
console.log("3.) I used [value.length-1], and the -1 displays the last element among the array length.")

// 4.)
console.log("4.) I used [0], and the [0] will always display the first element among the array length.")

// 5.) Question was very simular to question 2 part a, so I basically used the same for statement and added .push to add the lengths of the names.

    const nameLengths = [];

    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }

console.log("5.) " + nameLengths);

// 6.) Thankfully these past labs were working with adding equations. I used a simular adding machine to simply add all of the name lengths together.
       
        let sum = 0;
 
        for(let i = 0; i < nameLengths.length; i++) {
            sum += nameLengths[i];   
        }
 
 console.log("6.) " + sum);

// 7.) Before we get into functions, I would much rather use "=>" than "function". I showed function for a few functions to display that I can use both methods. 
// >> I used a simular technique from question 2 part b help out.
// >> I was lost on how to repeat the string, but google saved me with using "n" in the new for statement.

    const numberSeven = (word, n) => {
        let concatWord = " ";

        for (let i = 0; i < n; i++) {
            concatWord += word;
        }
    return concatWord
}

console.log("7.) " + (numberSeven("lol", 3)))

// 8.) There is not a lot to say about this one, but I kept messing up the ${} tool by using ' rather than `.

    const numberEight = (firstName, lastName) => `${firstName} ${lastName}`

console.log("8.) " + numberEight("Luke", "Skywalker"))
    
// 9.) Like I preformed earlier in this assignment, I made another additon tool. The only difference was the return section having more tools, rather than a single variable.

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

// 10.) Instead of making an array variable, I just made an array in the console.log to release a boolean output.

    const numberTen = (x) => {
        let sum = 0;
 
        for(let i = 0; i < x.length; i++) {
            sum += x[i];   
        }
        return sum / x.length;
 }
 console.log(("10.) ") + (numberTen([3,9,23,64,2,8,28,93])));
 console.log(("10.) ") + (numberTen([0,0,0,0,0,0])));

// 11.) This question threw me in a loop for sure. hehe
// >> I had to make two let and two for formulas because of the boolean output I would have to create.
// >> I made two new const variables to help me make the arrays easier to compare for the console.log entry.

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

// 12.) Another classic if statement using &&. 
// >> I had to use both a boolean and numarical variable to work together to result a true status.
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

// 13.)
    // "Going to the theaters to watch Puss in Boots: The Last Wish"
    // There are multiple considerations when watching a movie in the theators, so I made a function that can solve all of our theator problems!

    const pussInBoots = (movieDrink, movieSnack, movieTime) => `I will drink ${movieDrink}, I will eat ${movieSnack}, and I will attend the new Puss in Boots movie at ${movieTime}. `

console.log("13.) " + (pussInBoots("water flavored water","a 5 course Thanskgiving dinner","midnight")))