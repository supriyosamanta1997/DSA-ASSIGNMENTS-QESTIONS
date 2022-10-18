// Description

// You are given an array, whose size is stored in a variable with the nameN

// The array is stored in a variable with the namearr

// You have to find the sum of all the elements of the array which are unique.

// For example, consider the value stored inN = 7, and the value stored inarr = [3,5,3,3,8,5,6]. Since there are two numbers that are unique i.e 8 and 6.

// Then the required output will be8+6 = 14, which is the required output


// Input
// The first line of the input contains the value stored inN

// The next line containsNspace-separated integers denoting the value stored inarr


// Output
// Print thesum of all the elements of the array which are unique.

// Sample Input 1 

// 7
// 3 5 3 3 8 5 6
// Sample Output 1

// 14
// Hint

// In the sample test case, the value stored inN = 7, and the value stored inarr = [3 5 3 3 8 5 6].

// 8 occurs 1 time
// 6 occurs 1 time
// 5 occurs 2 times
// 3 occurs 3 times


// sol:


function appearOnce(N, arr) {
    //write code here
    var object={};
    for(var i=0;i<arr.length;i++)
    {
        var char=arr[i];
        if(object[char]==undefined)
        {
            object[char]=1;
        }
        else
        {
            object[char]=object[char]+1;
        }
    }
    var sum=0;
    for(var k in object)
    {
        if(object[k]==1)
        {
            sum=sum+Number(k);
        }
    }
    console.log(sum);
  }