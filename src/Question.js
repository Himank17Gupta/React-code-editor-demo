import React from 'react';
function Question(props){

return (
    <div>
<br/>
<h3>Q> Factorial of a Number</h3>
<h5>
In mathematics, the factorial of a positive integer n, denoted by n!,<br/> is the product of all positive integers less than or equal to n.
</h5>

<h3>Test Cases</h3>
Input type : an integer<br/>
Output type : an integer<br/>
<br/>
Sample Test Case :<br/>
input ->5<br/>
output ->120<br/>
explanation -> 5!=(5)*(5-1)*((5-1)-1)*(((5-1)-1)-1)*((((5-1)-1)-1)-1)<br/>
               5!=5*4*3*2*1<br/>
               5!=120<br/>

</div>
)


}

export default Question;