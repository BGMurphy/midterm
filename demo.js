var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");

var hcounter = 1;
var bcounter = 1;
var lcounter = 1;
var fcounter = 1;

var textField = document.getElementById("textField");

document.getElementById("prevButton").addEventListener("click", function(){
    if(c1.checked == true){
        hcounter--;
        if(hcounter < 1){
            hcounter = 3;
        };
        document.getElementById('img1').src='imgs/gears/h'+hcounter+'.png';
    } else if(c2.checked == true){
        bcounter--;
        if(bcounter < 1){
            bcounter = 3;
        };
        document.getElementById('img2').src='imgs/gears/b'+bcounter+'.png';
    } else if(c3.checked == true){
        lcounter--;
        if(lcounter < 1){
            lcounter = 3;
        };
        document.getElementById('img3').src='imgs/gears/l'+lcounter+'.png';
    } else if(c4.checked == true){
        fcounter--;
        if(fcounter < 1){
            fcounter = 3;
        };
        document.getElementById('img4').src='imgs/gears/f'+fcounter+'.png';
    } else{
        alert("Please select an item to change");
    };
    
})

document.getElementById("nextButton").addEventListener("click", function(){
    if(c1.checked == true){
        hcounter++;
        if(hcounter > 3){
            hcounter = 1;
        };
        document.getElementById('img1').src='imgs/gears/h'+hcounter+'.png';
    } else if(c2.checked == true){
        bcounter++;
        if(bcounter > 3){
            bcounter = 1;
        };
        document.getElementById('img2').src='imgs/gears/b'+bcounter+'.png';
    } else if(c3.checked == true){
        lcounter++;
        if(lcounter > 3){
            lcounter = 1;
        };
        document.getElementById('img3').src='imgs/gears/l'+lcounter+'.png';
    } else if(c4.checked == true){
        fcounter++;
        if(fcounter > 3){
            fcounter = 1;
        };
        document.getElementById('img4').src='imgs/gears/f'+fcounter+'.png';
    } else{
        alert("Please select an item to change");
    };
    
})

textField.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        if(textField.value == "combo1"){
            hcounter = 1;
            bcounter = 1;
            lcounter = 1;
            fcounter = 1;
            document.getElementById('img1').src='imgs/gears/h'+hcounter+'.png';
            document.getElementById('img2').src='imgs/gears/b'+bcounter+'.png';
            document.getElementById('img3').src='imgs/gears/l'+lcounter+'.png';
            document.getElementById('img4').src='imgs/gears/f'+fcounter+'.png';
            textField.value = "";
        } else if (textField.value == "combo2"){
            hcounter = 2;
            bcounter = 2;
            lcounter = 2;
            fcounter = 2;
            document.getElementById('img1').src='imgs/gears/h'+hcounter+'.png';
            document.getElementById('img2').src='imgs/gears/b'+bcounter+'.png';
            document.getElementById('img3').src='imgs/gears/l'+lcounter+'.png';
            document.getElementById('img4').src='imgs/gears/f'+fcounter+'.png';
            textField.value = "";
        } else if (textField.value == "combo3"){
            hcounter = 3;
            bcounter = 3;
            lcounter = 3;
            fcounter = 3;
            document.getElementById('img1').src='imgs/gears/h'+hcounter+'.png';
            document.getElementById('img2').src='imgs/gears/b'+bcounter+'.png';
            document.getElementById('img3').src='imgs/gears/l'+lcounter+'.png';
            document.getElementById('img4').src='imgs/gears/f'+fcounter+'.png';
            textField.value = "";
        } else if (textField.value == "random"){
            hcounter = (Math.round(Math.random() * 2) + 1);;
            bcounter = (Math.round(Math.random() * 2) + 1);;
            lcounter = (Math.round(Math.random() * 2) + 1);;
            fcounter = (Math.round(Math.random() * 2) + 1);;
            document.getElementById('img1').src='imgs/gears/h'+hcounter+'.png';
            document.getElementById('img2').src='imgs/gears/b'+bcounter+'.png';
            document.getElementById('img3').src='imgs/gears/l'+lcounter+'.png';
            document.getElementById('img4').src='imgs/gears/f'+fcounter+'.png';
            textField.value = "";
        } else {
            alert("Please enter a valid combo");
            textField.value = "";
        };
    }
});


























