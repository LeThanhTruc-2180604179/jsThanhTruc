/**
 ** đầu vào 
 - tạo biến Lương 1 ngày : 100000
 - tạo biến Số ngày làm việc
 ** Xử lý
 - Tạo biến tongTien và gán giá trị là 0  
 - tongTien được cập nhật giá trị là luongNgay * Songaylam 
 ** Đầu ra
 - in Kết quả đã tính lương nhân viên 
 */


// Khai báo biến lương 1 ngày
let luongMotNgay = 300000; // Lương 1 ngày làm việc
let Songaylam = prompt("Nhập số ngày làm việc: "); // Nhập số ngày làm việc từ  (  Hoặc có thể gán trực tiếp  'let Songaylam = 20; '
let tongTien = 0; // Khai báo biến tổng tiền và gán giá trị là 0
// Tính tổng tiền lương
tongTien = luongMotNgay * Songaylam; // Cập nhật giá trị cho biến tổng tiền lương

console.log ("Kết quả đã tính lương nhân viên là: " + tongTien); // In ra kết quả tổng tiền lương
