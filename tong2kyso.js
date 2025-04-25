/**
 * * Đầu vào
 * 1 số có 2 chữ số: so (VD: 12, 44, 83)
 * 
 * * Xử lý
 * Nhập vào 1 số có 2 chữ số bằng prompt
 * Lấy số hàng đơn vị: so_hang_dv = so % 10
 * Lấy số hàng chục: so_hang_chuc = so / 10
 * Tính tổng 2 ký số: tong = so_hang_chuc + so_hang_dv
 * 
 * * Đầu ra
 * Kết quả tổng 2 ký số của số vừa nhập là: tong
 */

let so = Number(prompt("Nhập 1 số có 2 chữ số: "));
let so_hang_dv = so % 10; // Lấy số hàng đơn vị
let so_hang_chuc = Math.floor(so / 10); // Lấy số hàng chục
let tong = so_hang_chuc + so_hang_dv; // Tính tổng 2 ký số

console.log("Kết quả tổng 2 ký số của số vừa nhập là: " + tong);ss