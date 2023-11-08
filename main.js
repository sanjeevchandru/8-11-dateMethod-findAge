document.write("Find age in date of birth"+"<br>");
document.write("---------------------------------"+"<br>");

const d1=new Date();
const d2=new Date(2003,1,26);

document.write("Today  : "+d1+"<br>");
document.write("Your Birthday date : "+d2+"<br>");

let x=d1.getFullYear();
let y=d2.getFullYear();
let k=0;
for(let i=y;i<=x;i++)
{
 k++;   
}
document.write("Your age is :"+k);