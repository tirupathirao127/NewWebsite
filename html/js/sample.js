console.log("Hey")
var num = 10;
console.log(num)



function display(num1) {
    console.log(num1)
    if (num1.length > 0) {
        alert('Entered text: ' + num1);
        document.getElementById('alertmessage').innerHTML = "You entered: " + num1;
        document.getElementById('alertmessage').style.color = "green";
    } else {
        alert('please enter text');
        document.getElementById('alertmessage').innerHTML = "No text was entered! ";
        document.getElementById('alertmessage').style.color = "red";
    }
    
}