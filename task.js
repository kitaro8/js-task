const numbers = [5,8,0,1,9,11,15,16];



console.log("Original numbers list: ",numbers)


// replace i to j because i represent the iteration for the numbers 
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {

        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("numbers list After sorting: ",numbers)


// the same here replace i with j
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {

        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("numbers list After Desc sorting: ",numbers)
// ------------------------------


// read data.txt file
var fs = require('fs');
fs.readFile('data.txt', 'utf8', function(err, data) {
    if (err) throw err;

// store content of data.txt into variable
    let newn = data.split(",");

// and sort it
    for(let i = 0 ; i < newn.length ; i++)
    {
        for(let j = 0 ; j < newn.length - 1 ; j++)
        {

            if(newn[j] > newn[j + 1])
            {
                let temp = newn[j];
                newn[j] = newn[j + 1]
                newn[j + 1] = temp;
            }
        }
    }

    console.log("dataN list After sorting: ",(newn))

// create new txt file to store the sorted array in it


/*
here file.write(v+(',')) i should be file.write(v.join(',')) 
but it get error in windows so i make it like this "I KNOW IT'S WRONG" >_>
*/
    var file = fs.createWriteStream('output.txt');
    newn.map(function(v) { file.write(v+(',')); });
    file.end();
});
