Description

You are given a string, stored in a variablestr, and the length of the string is stored in a variableN

The string contains characters only from the below symbols

'!','@','#','$','%','^','&','*'
Now every character is mapped to a certain value, such that the mapping starts from 1 and the difference between the values of two characters, is 1. Therefore, the mapping looks as follows
'!' : 1
'@' : 2
'#' : 3
'$' : 4
'%' : 5
'^' : 6
'&' : 7
'*' : 8
You have to find the sum of all characters in the string

For example, consider the value stored inN = 4, andstr = "!@#$", then the required output will be

1(value of !) + 2 (value of @) + 3 (value of #) + 4 (value of $) = 10, which is the required output
Note : The string contains only the symbols mentioned above, and no other characters are present in the string

Input
The first line of the input contains the value stored inN

The next line contains the value stored instr


Output
Print the sum of the characters, present instr, according to the values associated with the different symbols, as shown in the problem statement

Sample Input 1 

4
!@#$
Sample Output 1

10
Hint

In the sample test case, the value stored inN = 4, andstr = "!@#$", then the required output will be

1(value of !) + 2 (value of @) + 3 (value of #) + 4 (value of $) = 10, which is the required output






function mapSymbolsSum(N, str) {
    //write code here
    var str1="!@#$%^&*"
    var obj={};
    for(var i=0;i<str1.length;i++)
    {
        var char=str1[i];
        obj[char]=i+1;
    }
    var output=0;
    for(var j=0;j<N;j++)
    {
        for(var k in obj)
        {
          if(str[j]==k)
          {
              output=output+obj[k];
          }
           
        }
    }
    console.log(output);
   
  }