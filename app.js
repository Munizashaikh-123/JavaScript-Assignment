// Chapter 1 (Alerts)
// 1. Alert these following (individually):
// alert("Muniza");
// alert("Muhammad Rafi");
// alert("mahashaikh742@gmail.com");
// alert("0300-1234567");
// alert("12345")

// 2. Correct this statement: alert "You're learning JavaScript!" ;

// alert("You're learning JavaScript!");

// 3. Code an alert statement displaying any message you like.

// alert("Welcome To JavaScript World..!");

// Chapter 2 (Variables for string)
// 1. Declare any variable in the camel Case format.

// var yourName;


// 2. Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.

// var country;
// country = "Pakistan";

// 3. Declare the variable teamName and Alert your Team name.
// var teamName = "Pakistan";
// alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie";
//  Assign the variable a new string.

// var bestMan = "Charlie";
// bestMan = "Faateh";

// Chapter 3 (Variables for numbers)

// 1. Declare a variable “caseQty”

// var caseQty;

// 2. Assign to the variable caseQty, which has already been declared,
//    the value 144.

//  caseQty = 144;

//   3. Rewrite this statement so the variable can be used in a math
//      operation. var num = "9";

// var num = 9;

// 4. In one statement declare a variable. In a second statement assign
//  it the sum of 2 numbers.

// var a;
// a = 2 + 10;

// 5. What is the value of orderTotal ?
//     var merchTotal = 100; 
//     var shippingCharge = 10;
//     var orderTotal = merchTotal + shippingCharge; Try it yourself.

// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// alert(orderTotal);

// 6. In the first statement declare a variable and assign it a number. In
//       the second statement, change the value of the variable by adding
//       it together with a number.

// var b = 8;
// b = b + 10;

// alert(b);


//    VARIABLE NAMES: LEGAL & ILLEGAL

// 1. Declare 3 variables in one statement.

// var x = 10, y = 2, z = 15;

// 2. Declare 5 legal & 5 illegal variable names.

// 5 legal variable

// var yourAge;       camel case,
// var $money;        dollor sign can be used
// var class_name;     underscored can be used
// var password123;    alphanumeric ,numbers can be used in middle 
// var useremail;    characters can be used,

// 5 illegal variable

// var 1stprice;    numbers are not allowed in start
// var @useremail;  special character not allowed accept dollor or underscored
// var last name;   space can not be allowed
// var var;        those words are not allowed which used by javascript(let,var,const,if ,function)
// var my-variable;  hyfhen can not be allowed

// 3. Display this in your browser

// document.write("<h1>“Rules for naming JS variables”</h1>");
// document.write("Variable names can only contain number, letters, $ and _.  For example $my_1stVariable <br> <br>");
// document.write("Variables must begin with a letter, $ or _ . For example $name, _name or name <br> <br>");
// document.write("Variable names are case sensitive <br> <br>");
// document.write("Variable names should not be JS keywords <br> <br>");

// MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
//      new variable. Show the result in your browser.
// var a = 4;
// var b = 9;
// var totalnum = a + b;
// alert(totalnum);
// document.write("sum of " + a + " and " + b + " is " + totalnum + "<br> <br>");

//    2. Repeat task1 for subtraction, multiplication, division &
//       modulus.
//  subtraction

// var x = 12;
// var y = 8;
// var totalnum = x - y;
// alert(totalnum);
// document.write(" subtraction of " + x + " and " + y + " is " + totalnum + "<br> <br>");

// multiplication


// var x = 12;
// var y = 8;
// var totalnum = x * y;
// alert(totalnum);
// document.write("multiplication of " + x + " and " + y + " is " + totalnum + "<br> <br>");

// division

// var x = 12;
// var y = 8;
// var totalnum = x / y;
// alert(totalnum);
// document.write("division of " + x + " and " + y + " is " + totalnum + "<br> <br>");

//  modulus

// var a = 10;
// var b = 9;
// var totalnum = a % b;
// alert(totalnum);
// document.write("modulus of " + a + " and " + b + " is " + totalnum + "<br> <br>");

//  3. Do the following using JS Mathematic Expressions
//  a. Declare a variable.

// var ab;

// b. Show the value of variable in your browser like “Value
//    after variable declaration is: ??”.

// document.write("Value after variable declaration is:" + ab + "<br> <br>");

// c. Initialize the variable with some number.
// ab = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.

// document.write("Initial value: " + ab + "<br> <br>");

//  e. Increment the variable.
// ab++;

//  f. Show the value of variable in your browser like “Value after increment is: 6”.

// document.write("Value after increment is: " + ab + "<br> <br>");

//  g. Add 7 to the variable.

// ab = ab + 7;

//  h. Show the value of variable in your browser like “Value after addition is: 13”.

// document.write("Value after  addition is: " + ab + "<br> <br>");

// i. Decrement the variable.

// ab--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

// document.write("Value after decrement  is: " + ab + "<br> <br>");

//    k. Show the remainder after dividing the variable’s value by 3.

// ab = ab % 3;

//   l. Output : “The remainder is : 0”.

// document.write("The remainder is: " + ab + "<br> <br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var ticketPrice = 600;
// totalCost = ticketPrice * 5;

// alert(totalCost);

// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR <br> <br>");

// 5. Write a script to display multiplication table of any number in your browser. E.g

// var table3 = 3;
// document.write("<h1>Table of 3</h1>")
// document.write(table3 + " x 1 = " + (table3*1) + "<br> <br>");
// document.write(table3 + " x 2 = " + (table3*2) + "<br> <br>");
// document.write(table3 + " x 3 = " + (table3*3) + "<br> <br>");
// document.write(table3 + " x 4 = " + (table3*4) + "<br> <br>");
// document.write(table3 + " x 5 = " + (table3*5) + "<br> <br>");
// document.write(table3 + " x 6 = " + (table3*6) + "<br> <br>");
// document.write(table3 + " x 7 = " + (table3*7) + "<br> <br>");
// document.write(table3 + " x 8 = " + (table3*8) + "<br> <br>");
// document.write(table3 + " x 9 = " + (table3*9) + "<br> <br>");
// document.write(table3 + " x 10 = " + (table3*10) + "<br> <br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var celsiusTemp = 25;
// var convertToFarenheit = (celsiusTemp * 9 / 5) + 32;

// document.write(celsiusTemp + " &deg;C is " + convertToFarenheit + " &deg;F <br><br> ");

// var Fahrenheit = 70;
// var convertToCelsius = (Fahrenheit - 32) * 5 / 9;
// document.write(Fahrenheit + " &deg;F is " + convertToCelsius + " &deg;C <br><br> ");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
//    the following in variables

//  a. Price of item 1

// var item1 = 650;

// //    b. Price of item 2

// var item2 = 100;


// // c. Ordered quantity of item 1

// var orderQuantity_1 = 3;

// //    d. Ordered Quantity of item 2

// var orderQuantity_2 = 7;

// //    e. Shipping charges

// var shipCharge = 100;

// //    total cost of item 1
// var totalItem1 = item1 * orderQuantity_1;

// //    total cost of item 2
// var totalItem2 = item2 * orderQuantity_2;

// var totalCost = totalItem1 + totalItem2 + shipCharge;


// document.write("<h1>Shopping Cart</h1>");
// document.write("price of item 1 is: " + item1 + "<br> <br>");
// document.write("Quantity of item 1 is: " + orderQuantity_1 + "<br> <br>");
// document.write("price of item 2 is: " + item2 + "<br> <br>");
// document.write("Quantity of item 2 is: " + orderQuantity_2 + "<br> <br>");
// document.write("Shipping charges: " + shipCharge + "<br> <br>");
// document.write("Total cost of your order is: " + totalCost + "<br> <br>");


//  8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// var totalMarks = 980;
// var obtainMarks = 804;
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks: " + totalMarks + "<br> <br>");
// document.write("Marks Obtained : " + obtainMarks + "<br> <br>");
// document.write("Percentage : " + ((obtainMarks / totalMarks) * 100) + "% <br> <br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals.Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usDollars = 10;
// var saudiRiyals = 25;
// var tolalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR  : " + tolalInPKR + "<br> <br>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a.Add 5
// b.Multiply by 10
// c.Divide the result by 2
// Perform all calculations in a single expression

// var ab = 15;

// result = (ab + 5) * 10 / 2;

// document.write("ab = " + result + "<br><br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.


// var currentYear = 2026;
// var birthYear = 1992;


// var maxAge = currentYear - birthYear;
// var minAge = maxAge - 1;

// document.write("<h1>Age Calculator</h1>");
// document.write("current year is " + currentYear + "<br> <br>");
// document.write("birth year is " + birthYear + "<br> <br>");
// document.write("she is either " + minAge + " or " + maxAge + " years old " + "<br> <br>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 5;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * (radius * radius);
// document.write("Radius of Circle is " + radius + "<br><br>");
// document.write("Circumference is " + circumference + "<br> <br>");
// document.write("The area is: " + area + "<br><br>");


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var favorite_snack = "Choco Chip"
// var currentAge = 20;
// var maxAge = 60;
// var estimatedAmount = 3;
// var total_amount = (maxAge - currentAge) * 365 * estimatedAmount;
// document.write("You will need " + total_amount + " " + favorite_snack + " to last you until the ripe old age of " + maxAge + "<br><br>");

// Assignment # 6
// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write("<h1>Result</h1>");
// document.write("The value of a is : " + a + "<br><br>");
// document.write("The value of ++a is : " + ++a + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");
// document.write("The value of a++ is : " + a++ + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");
// document.write("The value of --a is : " + --a + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");
// document.write("The value of a-- is : " + a-- + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// var a = 2, b = 1;
// document.write("--a ; " + --a + "<br><br>");
// a = 2;
// b = 1;
// document.write("--a - --b ; " + ((--a) - (--b)) + "<br><br>");
// a = 2;
// b = 1;
// document.write("--a - --b + ++b ; " + ((--a) - (--b) + (++b)) + "<br><br>");
// a = 2;
// b = 1;
// var result = --a - --b + ++b + b--;
// document.write("--a - --b + ++b + b-- ; " + result + "<br><br>");
// document.write("a is: " + a + "<br><br>");
// document.write("b is: " + b + "<br><br>");
// document.write("Result is: " + result + "<br><br>");

// 3. Write a program that takes input a name from user &
// greet the user.

// var x = prompt("Enter your Name")
// greet = "HELLO..! "+ x;
// alert(greet);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// var num = +prompt("Enter your Number" ,"5");
// document.write(num + " x 1 = " + (num*1) +"<br><br>");
// document.write(num + " x 2 = " + (num*2) +"<br><br>");
// document.write(num + " x 3 = " + (num*3) +"<br><br>");
// document.write(num + " x 4 = " + (num*4) +"<br><br>");
// document.write(num + " x 5 = " + (num*5) +"<br><br>");
// document.write(num + " x 6 = " + (num*6) +"<br><br>");
// document.write(num + " x 7 = " + (num*7) +"<br><br>");
// document.write(num + " x 8 = " + (num*8) +"<br><br>");
// document.write(num + " x 9 = " + (num*9) +"<br><br>");
// document.write(num + " x 10 = " + (num*10) +"<br><br>");

// 6. Take
// a) Take three subjects name from user and store them in 3
// // different variables.
// var subject1 = prompt("Enter 1st subject");
// var subject2 = prompt("Enter 2st subject");
// var subject3 = prompt("Enter 3st subject");


//  b) Total marks for each subject is 100, store it in another
// variable.
// var total_marks = 100;

// c) Take obtained marks for first subject from user and
// stored it in different variable.
// var sub1_obtainmark = +prompt("Enter 1st subject obtained marks");


// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// var sub2_obtainmark = +prompt("Enter 2st subject obtained marks");
// var sub3_obtainmark = +prompt("Enter 3st subject obtained marks");


// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// percentage
// var per1 = (( sub1_obtainmark / total_marks)* 100 .toFixed(0));
// var per2 = (( sub2_obtainmark / total_marks)* 100 .toFixed(0));
// var per3 = ((sub3_obtainmark / total_marks)* 100 .toFixed(0));

// var obtainedTotal = sub1_obtainmark + sub2_obtainmark + sub3_obtainmark;
// var total = total_marks*3;
// var overallper = ((obtainedTotal / total)*100 .toFixed(0));

// document.write("<h1>Marks Sheet</h1>")
    
// document.write("<table border="2">");
// row 1
// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th> Percentage </th>");
// document.write("</tr>");

// subject 1
// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>"+ total_marks + "</td>");
// document.write("<td>"+  sub1_obtainmark +"</td>");
// document.write("<td>"+ per1 +" % "+ "</td>");
// document.write("</tr>");

// subject 2
// document.write("<tr>");
// document.write("<td>" + subject2 + "</td>");
// document.write("<td>"+ total_marks + "</td>");
// document.write("<td>"+  sub2_obtainmark +"</td>");
// document.write("<td>"+ per2 +" % "+ "</td>");
// document.write("</tr>");

// subject 3
// document.write("<tr>");
// document.write("<td>" + subject3 + "</td>");
// document.write("<td>"+ total_marks + "</td>");
// document.write("<td>"+  sub3_obtainmark +"</td>");
// document.write("<td>"+ per3 +" % "+ "</td>");
// document.write("</tr>");

// total
// document.write("<tr>");
// document.write("<td>" + " Total " + "</td>");
// document.write("<td>"+ total + "</td>");
// document.write("<td>"+ obtainedTotal  +"</td>");
// document.write("<td>"+ overallper +" % "+ "</td>");
// document.write("</tr>");


// document.write("</table>");









