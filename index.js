
document.getElementById("bg1").addEventListener("click", function(){
    main.style.display = "block";
    document.getElementById('img1').src='imgs/gears/h1.png';
    document.getElementById('img2').src='imgs/gears/h2.png';
    document.getElementById('img3').src='imgs/gears/h3.png';
    document.getElementById('title').innerHTML = 'Head Gears';
})

document.getElementById("bg2").addEventListener("click", function(){
    main.style.display = "block";
    document.getElementById('img1').src='imgs/gears/b1.png';
    document.getElementById('img2').src='imgs/gears/b2.png';
    document.getElementById('img3').src='imgs/gears/b3.png';
    document.getElementById('title').innerHTML = 'Body Gears';
})

document.getElementById("bg3").addEventListener("click", function(){
    main.style.display = "block";
    document.getElementById('img1').src='imgs/gears/l1.png';
    document.getElementById('img2').src='imgs/gears/l2.png';
    document.getElementById('img3').src='imgs/gears/l3.png';
    document.getElementById('title').innerHTML = 'Leg Gears';
})

document.getElementById("bg4").addEventListener("click", function(){
    main.style.display = "block";
    document.getElementById('img1').src='imgs/gears/f1.png';
    document.getElementById('img2').src='imgs/gears/f2.png';
    document.getElementById('img3').src='imgs/gears/f3.png';
    document.getElementById('title').innerHTML = 'Feet Gears';
})



document.getElementById("bg2").addEventListener("click", function(){
    main.style.display = "block";
})

document.getElementById("bg3").addEventListener("click", function(){
    main.style.display = "block";
})

document.getElementById("bg4").addEventListener("click", function(){
    main.style.display = "block";
})

document.getElementById("main").addEventListener("click", function(){
    main.style.display = "none";
})