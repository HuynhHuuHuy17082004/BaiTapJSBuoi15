//lập  trình hàm 
// Gọi bên trong function là nó ko có chạy liền
function calcSum(a,b){
    var a = 5 ;
    var b =6 ;
    var sum = a+b;
    console.log(sum)
}
//những tham số truyền vào hàm thì chỉ có thể dùng đc bên trong hàm đó
//khi gọi hàm chạy thì bắt buộc phải truyền ddur tham số vào cho nó
//muốn chạy đoạn code bên trong function thì phải gọi nó ra 
//truyền tham số vào function
//Hàm thì ko giới hạn số lượng tham số truyền vào 
calcSum();//gọi hàm chạy
calcSum();//gọi hàm chạy
calcSum();//gọi hàm chạy
calcSum();//gọi hàm chạy

//vd1 : Viết chương trình cho bik lương nhân viên , nhận vào số tiền lương, tiền lương theo ngày
function calcSalary(workingday,salaryPerDay){
var total;
if(workingday<=20){
    total = workingday * salaryPerDay;
} else{
    total = 20 * salaryPerDay + (workingday - 20)*salaryPerDay*1.5;
}
console.log(total);
}
calcSalary(20,100);
calcSalary(30,100);
calcSalary(40,100);
calcSalary(50,100);
//Bài tập Tuyển sinh
function calcAreaGrade(area){
    if(area === 'A') return 2;
    if(area === 'B')return 1;
    if(area === 'C') return 0.5;
    return 0;
}
function calcTypeGrade(type){
    if(type === '1') return 2.5;
    if(type === '2')return 1.5;
    if(type === '3') return 1;
    return 0;
}
// function exercise1(){
// //code
// //abc xyz
// var benchmark = +document.getElementById('benchmarkInput').value;
// var subject1 = +document.getElementById('subject1Input').value;
// var subject2 = +document.getElementById('subject2Input').value;
// var subject3 = +document.getElementById('subject3Input').value;
// var areaval = document.getElementById('areaSelect').value;
// var typeval = document.getElementById('typeSelect').value;

// var areaGrade = calcAreaGrade(areaval);
// var typeGrade = calcTypeGrade(typeval);
// var tongdiem = subject1 + subject2 + subject3 + areaGrade + typeGrade;

// if(tongdiem >= benchmark && subject1 !==0 && subject2 !== 0 && subject3 !== 0){
//     console.log("Đậu")
// }else{
//     console.log('Rớt')
// }
// console.log(tongdiem);
// }
//event : click
// event handle :exercise1
//đăng kí hàm exercise1 sẽ chạy khi nút 'btnSubmit' đcclick


document.getElementById('btnSubmit').onclick = function exercise1(){
    var benchmark = +document.getElementById('benchmarkInput').value;
var subject1 = +document.getElementById('subject1Input').value;
var subject2 = +document.getElementById('subject2Input').value;
var subject3 = +document.getElementById('subject3Input').value;
var areaval = document.getElementById('areaSelect').value;
var typeval = document.getElementById('typeSelect').value;

var areaGrade = calcAreaGrade(areaval);
var typeGrade = calcTypeGrade(typeval);
var tongdiem = subject1 + subject2 + subject3 + areaGrade + typeGrade;

if(tongdiem >= benchmark && subject1 !==0 && subject2 !== 0 && subject3 !== 0){
    document.getElementById('p1').innerHTML="Đậu";
}else{
    document.getElementById('p1').innerHTML="Rớt";
}
document.getElementById('p2').innerHTML=tongdiem; 
};

/*
//bài tập tuyển sinh
//Input
Điểm chuẩn , điểm 3 môn , khu vực , loại đối tượng
//Process
1. lấy input từ UI dùng DOM
2.Tính tổng điểm
   -Tính điểm ưu tiên theo khu vực 
   -Tính điểm ưu tiên theo đối tượng 
3.kết quả : tổng điểm và ko có môn nào 0 điểm
//Output
kết quả đậu hay rớt , tổng điểm

*/
/*






//Bài tập tính tiền điện
//Input

*/
function exercise2(){
var sokw = +document.getElementById('sokwdien').value;
var ten = document.getElementById('ten').value;
var tiendien;
if(sokw<=50){
  tiendien = sokw * 500;  
}else if(sokw > 50 && sokw<=100){
    tiendien = (50 * 500) + (sokw-50)*650;
}else if(sokw>100&&sokw<=200){
    tiendien = (50 * 500) + (50 * 650) + (sokw - 100)*850;
}else if(sokw>200&&sokw<=350){
    tiendien = (50*500)+(50*650)+(100*850)+(sokw-200)*1100;
}else{
    tiendien= sokw * 1300;
}
document.getElementById('tentratiendien').innerHTML=ten;
document.getElementById('tratiendien').innerHTML=tiendien + ' VNĐ';
}
document.getElementById('btntinhtiendien').onclick=exercise2;


/*
Bài 3 : Tính tiền thuế
*/ 
function exercise3(){
    var tentratienthue = document.getElementById('hoten').value;
    var tongthunhap = +document.getElementById('tongthunhapnam').value;
    var nguoiphuthuoc = +document.getElementById('nguoiphuthuoc').value;
    var thunhapchiuthue ;
    if(nguoiphuthuoc>0){
    thunhapchiuthue = tongthunhap - 4000000 - nguoiphuthuoc*1.6;
}else{
    thunhapchiuthue = tongthunhap - 4000000 ;
}
    var tienthue;
    if(thunhapchiuthue<=60000000){
        tienthue = thunhapchiuthue*0.05;
    }else if(thunhapchiuthue>60000000&&thunhapchiuthue<=120000000){
        tienthue = thunhapchiuthue * 0.1;

    }else if(thunhapchiuthue>120000000&&thunhapchiuthue<=210000000){
        tienthue = thunhapchiuthue * 0.15; 
    }else if(thunhapchiuthue>210000000&&thunhapchiuthue<=384000000){
        tienthue = thunhapchiuthue * 0.2;
    }else if (thunhapchiuthue>384000000&&thunhapchiuthue<=624000000){
        tienthue = thunhapchiuthue * 0.25;
    }else if(thunhapchiuthue>624000000&&thunhapchiuthue<=960000000){
        tienthue =thunhapchiuthue * 0.3;
    }else{
        tienthue = thunhapchiuthue * 0.35;
    }
    document.getElementById('tentratienthue').innerHTML=tentratienthue;
    document.getElementById('tratienthue').innerHTML=tienthue;
}
document.getElementById('btntinhtienthue').onclick=exercise3;


//bài tập 4

function exercise4(){
    var soketnoi = +document.getElementById('soketnoi').value;
    var tongsoketnoi;
    if(soketnoi<=10){
        tongsoketnoi = 75;
    }else {
        tongsoketnoi = 75 + (soketnoi-10)*(7.5+5)
    }
    var makh = document.getElementById('maKH').value;
    var phixulyhoadon;
    var phidichvucoban;
    var thuekenhcaocap;
    var kenhcaocap = +document.getElementById('kenhcaocap').value;
    var loaiKH = document.getElementById('loaiKH').value;
    var tinhsotiencap;
    if(loaiKH==='Nhà dân'){
        phidichvucoban = 20.5;
        phixulyhoadon = 4.5 ;
        thuekenhcaocap = 7.5 * kenhcaocap ;
        tinhsotiencap = phidichvucoban+phixulyhoadon+thuekenhcaocap +'$';
    }else if(loaiKH==='Doanh nghiệp'){
        phidichvucoban = tongsoketnoi;
        phixulyhoadon = 15 ;
        thuekenhcaocap = 50 * kenhcaocap ;
        tinhsotiencap = phidichvucoban+phixulyhoadon+thuekenhcaocap +'$';
    }else {
        alert ('Mời chọn loại khách hàng!');
    }
    document.getElementById('tratiencap').innerHTML=tinhsotiencap ;
    document.getElementById('maKHdadien').innerHTML=makh;
}
 document.getElementById('btntinhtiencap').onclick=exercise4;
