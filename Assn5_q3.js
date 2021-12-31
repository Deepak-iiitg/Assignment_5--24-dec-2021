var n = parseInt(prompt("enter a number"));
var flag=0;
for(i=1;i<=n;i++){
	if(n%i==0 && n/i==i){
       flag=1;
	}
}
if(flag==1){
	console.log("n is perfect square");
}
else{
	console.log("n is not perfect square");
}