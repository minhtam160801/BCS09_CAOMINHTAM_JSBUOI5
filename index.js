// bài 1

function tongDiem(diemKhuVuc, diemDoiTuong, diemThuNhat, diemThuHai, diemThuBa) {
    tong = diemKhuVuc + diemDoiTuong + diemThuNhat + diemThuHai + diemThuBa;
    return tong;
};

document.getElementById('btnketQua1').onclick = function() {
    var diemKhuVuc = document.getElementById('khuVuc').value * 1;
    var diemDoiTuong = document.getElementById('doiTuong').value * 1;
    var diemThuNhat = document.getElementById('txt-diemThuNhat').value * 1;
    var diemThuHai = document.getElementById('txt-diemThuHai').value * 1;
    var diemThuBa = document.getElementById('txt-diemThuBa').value * 1;
    var tong = tongDiem(diemKhuVuc, diemDoiTuong, diemThuNhat, diemThuHai, diemThuBa);
    var diemChuan = document.getElementById('txt-diemChuan').value * 1;
    if (tong >= diemChuan) {
        document.getElementById('ketQua1').innerHTML = `Bạn đã đậu. Tổng điểm của bạn là: ${tong}`;
    } else {
        document.getElementById('ketQua1').innerHTML = `Bạn đã rớt. Tổng điểm của bạn là: ${tong}`;
    }
};

//bài 2
function tinhTienDien(soKw) {
    if (soKw > 0 && soKw <= 50) {
        tongTien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tongTien = 50 * 500 + (soKw - 50) * 650;
    } else if(soKw > 100 && soKw <= 200) {
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if(soKw > 200 && soKw <= 350) {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
    } else {
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    return tongTien;
};
document.getElementById('btnketQua2').onclick = function() {
    var hoTen = document.getElementById('txt-hoTen').value;
    var soKw = document.getElementById('txt-soKw').value * 1;
    var tongTien = tinhTienDien(soKw);
    document.getElementById('ketQua2').innerHTML = `Họ tên: ${hoTen}, Tiền điện: ${tongTien.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    })}`;
};

//bài 3
function tinhTienThue(t) {
    if (t > 0 && t <= 60000000) {
        thue = t * 0.05;
    } else if (t > 60000000 && t <= 120000000) {
        thue = t * 0.1;
    } else if(t > 120000000 && t <= 210000000) {
        thue = t * 0.15;
    } else if(t > 210000000 && t <= 384000000) {
        thue = t * 0.2;
    } else if(t > 384000000 && t <= 624000000) {
        thue = t * 0.25;
    } else if(t > 624000000 && t <= 960000000) {
        thue = t * 0.3;
    } else {
        thue = t * 0.35;
    }
    return thue;
};
document.getElementById('btnketQua3').onclick = function() {
    var hoTen1 = document.getElementById('txt-hoTen1').value;
    var tongThuNhapNam = document.getElementById('txt-thuNhapNam').value * 1;
    var soNguoi = document.getElementById('txt-soNguoi').value * 1;
    var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoi * 1600000;
    var tienThue = tinhTienThue(thuNhapChiuThue);
    document.getElementById('ketQua3').innerHTML = `Họ tên: ${hoTen1}, Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    })}`;
};
//bài 4

function anHien() {
    var loaiKh = document.getElementById('txt-loaiKh').value;
    const inputs = document.getElementById('nhapSoKetNoi');

    console.log(loaiKh);
    if (loaiKh == 'Doanh Nghiệp') {
        inputs.style.display = "block";

    } else if (loaiKh == 'Nhà Dân') {
        inputs.style.display = "none";
    }
}
function tienCapNhaDan(k) {
    tong = 4.5 + 20.5 + k * 7.5;
    return tong;
}
function tienCapDoanhNghiep(n, k) {
    if (n > 0 && n <= 10) {
        tong = 15 + 75 + 50 * k;
    } else {
        tong = 15 + 75 + (n - 10) * 5 + k * 50;
    }
    return tong;
}

document.getElementById('btnketQua4').onclick = function() {
    var loaiKh = document.getElementById('txt-loaiKh').value;
    var maKh = document.getElementById('txt-maKh').value;
    var soKenh = document.getElementById('txt-soKenh').value * 1;
    var soKetNoi = document.getElementById('txt-soKetNoi').value * 1;
    var tienCap = 0;
    if (loaiKh == 'Nhà Dân') {
        tienCap = tienCapNhaDan(soKenh);
    } else {
        tienCap = tienCapDoanhNghiep(soKetNoi, soKenh);
    }
    document.getElementById('ketQua4').innerHTML = `Mã khách hàng: ${maKh}, Tiền cáp: ${tienCap.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })}`
}

