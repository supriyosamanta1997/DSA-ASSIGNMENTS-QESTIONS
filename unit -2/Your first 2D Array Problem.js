// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4 
// 5 6

// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the output as shown in the problem statement

// Sample Input 1 

// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1

// 1 2
// 3 4
// 5 6
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4
// 5 6

// sol:

function array2D(N,M,arr){
    //write code here
    for(var i=0;i<N;i++)
    {
        var output="";
        for(var j=0;j<M;j++)
        {
            output=output+arr[i][j]+" ";
        }
        console.log(output);
    }
}