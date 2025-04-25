// Xem trong console 
// console.log("Hello, World!");
// console.log("Hello, World! 1");
// console.log("Hello, World! 12 ");

// Khách hàng sẽ thấy  
// alert("Hello, World! 1234");



// Varible (Khai báo biến)
let name = "Nguyễn Văn A"; // String
let age = 18; // Number
// console.log(name); // In ra biến name
// console.log(age); // In ra biến age

console.log(name , age ); // In ra biến name và age
console.log("Tên: " + name + " , Tuổi: " + age); // In ra tên và tuổi


// CẬP NHẬT GIÁ TRỊ MỚI CHO BIẾN ĐÃ KHAI BÁO 
let fullname = "Nguyễn Văn A"; // Khai báo biến fullname
fullname = "Le Thanh Truc"; // Cập nhật giá trị mới cho biến name
console.log( "Ho va ten : " + fullname); // In ra biến name sau khi cập nhật

// Ví dụ biến không có giá trị 
let NumberStudent; // Khai báo biến nhưng không gán giá trị
NumberStudent = 10; // Gán giá trị cho biến NumberStudent
console.log( "Số lượng sinh viên là : " + NumberStudent); // In ra biến NumberStudent chưa có giá trị

// biến cho giới tính 
let gender = true; // true là nam , false là nữ đây là kiểu dữ liệu boolean
console.log(gender);


// khai báo bằng const thay vì let 
// const là hằng số không thay đổi giá trị được sau khi đã khai báo và bắt buộc phải gán giá trị ngay lập tức
const pi = 3.14; // Khai báo biến pi là hằng số


// Các kiểu dữ liệu trong JavaScript
// 1. Kiểu dữ liệu nguyên thủy (Primitive Data Types)
// - String: Kiểu dữ liệu chuỗi
// - Number: Kiểu dữ liệu số nguyên và số thực
// - Boolean: Kiểu dữ liệu logic (true/false)
// - Undefined: Kiểu dữ liệu chưa được định nghĩa
// - Null: Kiểu dữ liệu rỗng (không có giá trị)
// - Symbol: Kiểu dữ liệu duy nhất (ES6)

// ví dụ kiểu dữ liệu undifined 
let x; // Khai báo biến x nhưng chưa gán giá trị
console.log(x); // In ra biến x chưa có giá trị

// ví dụ kiểu null
let y = null; // Khai báo biến y và gán giá trị null
console.log(y); // In ra biến y có giá trị null


// kiểu toán tử  

let Number_1 = 12;
let Number_2 = 5; // Khai báo biến Number_2 và gán giá trị 5
let result = Number_1 + Number_2; // Khai báo biến result và gán giá trị là tổng của Number_1 và Number_2
console.log(result); // In ra hiệu của hai biến Number_1 và Number_2

//  phép nhân 

let a = 12; 
let b = 3 ;

let ketqua = a*b;
console.log( "Ket qua bang 12 x 3 = " + ketqua); // In ra kết quả phép nhân của hai biến a và b

// ++ đặt sau tăng lên 1 
let q = 12;
console.log(++q); // In ra biến q có giá trị 12
// phép gán  + = 

let z = 2;  z +=3;

// kết quả sẽ bằng 5 

console.log( "kết quả sẽ =" +z); // In ra kết quả phép gán của biến z

