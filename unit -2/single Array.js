
// Description

// Single Array


// Input
// The first line containsNthe size of the array

// The next line containsNspace separated integers, denoting the elements of the array


// Output
// Print the elements of the array on a single line, by adding 1 to each element


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 2 3 4 5 6

// sol:

function array(size,arr)
{
    var bag="";
    for(var i=0;i<size;i++)
    {
        var x=(arr[i])+1;
        bag=bag+x+" ";
    }
    console.log(bag);
}
function runProgram(input) {
	input=input.split("\n");
	var size=+input[0];
	var arr=input[1].split(" ").map(Number);
	array(size,arr);
}



if (process.env.USERNAME === "") {
	runProgram(``);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}