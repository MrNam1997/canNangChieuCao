function bmi(weight,height) {
    let BMI = weight/height;
    if (BMI < 18){
        alert("UnderWeight");
    }else if (BMI < 25){
        alert("Normal");
    }else  if (BMI < 30){
        alert("OverWeith");
    }
    else{
        alert("Obese")
    }
}
let weigth = Number(prompt("number weigth:"));
let height = Number(prompt("number height"));
bmi(weigth,height);