Description

Single String, where the size of the string is given


Input
The first line of the input containsN, the size of the string

The next line contains the string itself


Output

sol:


function string(size,str)
{
    var bag="";
    for(var i=0;i<size;i++)
    {
        bag=bag+str[i];
    }
    console.log(bag);
}

	function runProgram(input) {
	input=input.trim().split("\n")
	var size=+input[0];
	var str=input[1]
	string(size,str)
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