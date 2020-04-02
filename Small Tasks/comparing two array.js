arr1=[1,2,'a'];
arr2=[1,2,'a'];
console.log(arr1==arr2);  //always false
console.log(arr1+""==arr2+""); //true when array or any other objects are added to "", they are also converted to string
console.log(arr1+"", typeof arr1+"");

//other way
console.log(String(arr1)==String(arr2));
