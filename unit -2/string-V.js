Description

Multiple Strings form a sentence together


Input
The first and the only line of the input contains the string, given as input


Output
Print the input string as output

Sample Input 1 

my name is ankush
Sample Output 1

my name is ankush


sol:

function arrayofstring(arr)
{ 
    var bag="";
    for(var i=0;i<arr.length;i++)
    {
        bag=bag+arr[i]+" ";
    }
    console.log(bag);
}
function runProgram(input) {
    var arr=input.trim().split(" ");
    // console.log(arr);
    arrayofstring(arr);
	
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
