var num,i,res;
var tab="";
function result()
{
num=document.getElementById("number").value;
if(num=="")
	{
		alert("number should be greater then zero");
	}
else
{
	for(i=1;i<=10;i++)
	{	res=num*i;
		tab=tab+num+"	"+i+"	"+res+"<br>";
	}
	document.getElementById("table").innerHTML=tab;
}
}