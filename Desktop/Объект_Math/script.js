function areaOfTriangle(obj) {
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var p = (a + b + c)/2;
    var s = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    obj.res.value = s.toFixed(2);
    //Определяем минимальное, случайное и максимальное число
    var minimum = Math.min(a,b,c);
    obj.min.value = Math.floor(minimum);
    
    var maximum = Math.max(a,b,c);
    obj.max.value = (maximum);
    
    
    var randomNumber = Math.floor(Math.random()* (maximum - minimum +1)+minimum);
    obj.rand.value = (randomNumber);
}
function QuadraticEquation(obj) {
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var D = b*b - 4*a*c;
    // obj.D.value = 
    document.write("Дискриминант = ",D,"<br>");
    if (D<0) {
        document.write("Действительных")
    }


}