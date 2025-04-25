/**
 * * Đầu vào 
 *   chiều dài 
 *   chiều rộng
 * 
 * 
 * *Xử lý
 * - tạo biến tên CD = Number(prompt("Nhập chiều dài: ")); // Nhập chiều dài từ người dùng
 * - Tạo biến CR = Number(prompt("Nhập chiều rộng: ")); // Nhập chiều rộng từ người dùng
 * - tạo biến tính chu vi hì
 * dientich = CD * CR; 
 * * Đầu ra
 * Kết quả tính chu vi và diện tích
 */

let CD = Number(prompt("Nhập chiều dài: ")); 
let CR = Number(prompt("Nhập chiều rộng: ")); 
let chuVi = (CD + CR) * 2; 
let dienTich = CD * CR; 

console.log("Chu vi hình chữ nhật là: " + chuVi); 
console.log("Diện tích hình chữ nhật là: " + dienTich); 