console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function ckeckAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}! You can drive!`;
    let belowSixteen = `Sorry ${userName}, you need to wait ${
        16 - age
    } year(s) until you can drive.`;
}

if (age < 16) {
    console.log(belowSixteen);
} else {
    console.log(aboveSixteen);
}

console.log("Jaycee", 22);
console.log("Loba", 2);

//Exercise 3

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x = 0 && y != 0) {
        return "X Axis";
    } else if (x != 0 && y == 0) {
        return "Y Axis";
    } else {
        return "Origin";
    }
}

console.log (checkQuadrant(1, 1));
console.log (checkQuadrant(-1, 1));
console.log (checkQuadrant(-1, -1));
console.log (checkQuadrant(1, -1));
console.log (checkQuadrant(0, -1));
console.log (checkQuadrant(1, 0));
console.log (checkQuadrant(0,0));

//Exercise 4

function isValidTriangle(a, b, c) {
    return a + b > c && a + c > b && B + c > a
}

function ckeckTriangle(a, b, c) {
    let isValid = isValidTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equalateral`;
        } else if (a == b || b == c || a == c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;    
    }
}

console.log(checktriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTrianlge(1, 2, 2));
console.log(checkTriangle(1, 1, 2));

//Exercise 5

function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    let currentAvg = uasgae / day;
    let projectAvg = planLimit / periodLength;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentAvg;
    let remainingData = planLimit - usage;
    let statusMsg;

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining`);
    console.log(`Average daily use: ${projectAvg} GB/day`);

    if (currentAvg > projectAvg) {
        statusMsg = "EXCEEDING"
    } else if (currentAvg < projectAvg) {
        statusMsg = "UNDER"
    } else {
        statusMsg = "AT";
    }

    console.log(`You are EXCEEEDING your average daily use (${currentAvg} GB/day), 
    continuing this high usage, you'll exceed you data plan by ${dataLimit - (usage + projectedUsage)}
    GB from your date limit. To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}

dataUsageFeedback(50, 12, 25);