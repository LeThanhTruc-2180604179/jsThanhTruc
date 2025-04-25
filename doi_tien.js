/**
 * * Đầu vào 
 *  Tạo biến SoTien nhập vào giá đô 
 *  Tạo biến TyGia nhập vào tỷ giá
 * 
 * 
 * *Xử lý
 * - Tạo biến tiền Việt Nam và gán giá trị là 0
 *  Sotienquydoi được cập nhật là SoTien * TyGia
 * 
 * * Đầu ra
 * in ra số tiền quy đổi
 * 
 */

let SoTien = Number(prompt("Nhập số tiền USD: ")); // Nhập số tiền USD từ người dùng
let TyGia = Number(prompt("Nhập tỷ giá USD/VND: ")); // Nhập tỷ giá USD/VND từ người dùng
let Sotienquydoi = 0; // Khai báo biến tiền Việt Nam và gán giá trị là 0

Sotienquydoi = SoTien * TyGia; // Cập nhật giá trị cho biến tiền Việt Nam

console.log("Số tiền quy đổi là: " + Sotienquydoi + "$"); // In ra số tiền quy đổi