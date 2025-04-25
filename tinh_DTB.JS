/**
 * * Đầu vào 
 * 5 số thực: a, b, c, d, e
 * * Xử lý 
 * nhập vào 5 số thực a,b,c,d,e prompt
 * tính trung bình của 5 số thực này 
 * trung bình = (a+b+c+d+e)/5
 * * Đầu ra
 * Kết quả trung bình của 5 số thực là : TrungBinh
 */

let a = Number(prompt("Nhập số thực a: ")); 
let b = Number(prompt("Nhập số thực b: ")); 
let c = Number(prompt("Nhập số thực c: ")); 
let d = Number(prompt("Nhập số thực d: ")); 
let e = Number(prompt("Nhập số thực e: ")); 



let tong = a + b + c + d + e; // Tính tổng của 5 số thực
let trungBinh = tong / 5; // Tính trung bình của 5 số thực

console.log("Kết quả trung bình của 5 số thực là: " + trungBinh);
