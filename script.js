// var name='Tom'
// document.write("My name is ", name)
// var num1=10
// var num2=20
// document.write("<br>The sum of two numbers is ",num1+num2,
//     "<br>The difference of two numbers is ",num1-num2,
//     "<br>The product of two numbers is ",num1*num2)



// var x=parseInt(prompt("Enter first number: "))
// var y=parseInt(prompt("Enter second number: "))
// document.write("<br><br>The sum of two numbers is ",x+y,
//     "<br>The difference of two numbers is ",x-y,
//     "<br>The product of two numbers is ",x*y)


// function nandi(){
//     document.write("<br><br>Hello & Haiiii")
// }    
// nandi()
// function cal(a,b){
//     document.write("<br><br>The sum is ",a+b,"<br>The diffence is ",a-b)
// }
// cal(3,2)
// cal(9,0)
// cal(12.9,76.000)

// var myarray=[2,3,2,1,1,1,1]
// document.write("<br><br>The values of array are ",myarray[0])
// document.write("<br><br>The values of array are ",myarray[1])
// document.write("<br><br>The values of array are ",myarray[2])
// document.write("<br><br>The values of array are ",myarray[3])
// document.write("<br><br>The values of array are ",myarray[4])


// for(i=0;i<myarray.length;i++){
//     document.write("<br><br>The values are ",myarray[i])
// }

a=10
b='10'
document.write(a===b)

for(i=0;i<=10;i++){
    document.write("<br><br>The values are ",i)
}


if(3>2){
    document.write("<br><br>Its true")
}
else{
    document.write("<br><br>Its false")
}

var username=prompt("enter username")
var password=prompt("enter password")
if(username=='admin' && password==1234){
    document.write("you logged in")

}
else{
    document.write("you can login")
}