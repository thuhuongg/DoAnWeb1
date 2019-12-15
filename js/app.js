var app = angular.module("myModule", [])
    .controller("myController", function($scope) {
        $scope.carts = [];
        $scope.products = [{
                "TenSP": "Trà Cỏ Ngọt",
                "MaSP": "110440",
                "Gia": 52000,
                "ThanhPhan": "Hoa Cúc 92%, Cam Thảo 8%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": " Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/tracongot.jpg"

            },
            {
                "TenSP": "Trà Hoa Cúc",
                "MaSP": "110441",
                "Gia": 52000,
                "ThanhPhan": "Hoa Cúc 92%, Cam Thảo 8%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": " Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/trahoacuc.jpg"

            },
            {
                "TenSP": "Trà Atiso",
                "MaSP": "110442",
                "Gia": 52000,
                "ThanhPhan": "Hoa Cúc 92%, Cam Thảo 8%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/traatiso.jpg"

            },
            {
                "TenSP": "Trà linh chi",
                "MaSP": "110443",
                "Gia": 54000,
                "ThanhPhan": "Linh chi 80%, Atisô 20% (Thân 15%, lá 5%)",
                "KhoiLuong": "87 g",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/tralinhchi.jpg"

            },
            {
                "TenSP": "Trà xanh",
                "MaSP": "110444",
                "Gia": 37000,
                "ThanhPhan": "Cám Trà Xanh 100%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/traxanh.jpg"

            },
            {
                "TenSP": "Trà hà thủ ô",
                "MaSP": "110445",
                "Gia": 46000,
                "ThanhPhan": "Hà Thủ Ô 90%, Thục Địa 5%, Đậu Đen 5%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": " Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/trahathuo.jpg"

            },
            {
                "TenSP": "Trà gừng",
                "MaSP": "110446",
                "Gia": 35000,
                "ThanhPhan": "Gừng Củ 100%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/tragung.jpg"

            },
            {
                "TenSP": "Trà khổ",
                "MaSP": "110447",
                "Gia": 43000,
                "ThanhPhan": "Trái Khổ Qua 100%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "12 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/trakhoqua.jpg"

            },
            {
                "TenSP": "Trà sâm",
                "MaSP": "110448",
                "Gia": 57000,
                "ThanhPhan": "Đảng Sâm 80%, Tam Thất 20%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/trasam.jpg"

            },
            {
                "TenSP": "Trà râu bắp",
                "MaSP": "110449",
                "Gia": 109000,
                "ThanhPhan": "Râu Bắp 92%, Cỏ Ngọt 8%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/traraubap.jpg"

            },
            {
                "TenSP": "Trà Trà oolong",
                "MaSP": "110449",
                "Gia": 39000,
                "ThanhPhan": "Cám Trà Oolong 100%",
                "KhoiLuong": "40 g (20 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ từ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày, mỗi ngày dùng từ 3 - 5 túi trà",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/traolong.jpg"

            },
            {
                "TenSP": "Trà Trà xanh",
                "MaSP": "110450",
                "Gia": 65000,
                "ThanhPhan": "Cám Trà Xanh 100%",
                "KhoiLuong": "80 g (40 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày",
                "HDBQ": "Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp. Luôn giữ sản phẩm kín khí khi không sử dụng",
                "ImgLink": "images/traxanh.jpg"

            },
            {
                "TenSP": "Trà Trà oolong",
                "MaSP": "110451",
                "Gia": 72000,
                "ThanhPhan": "Cám Trà Oolong 100%",
                "KhoiLuong": "80 g (40 túi lọc x 2 g)",
                "HanSD": "24 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày",
                "HDBQ": "Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp. Luôn giữ sản phẩm kín khí khi không sử dụng",
                "ImgLink": "images/traolong.jpg"

            },
            {
                "TenSP": "Trà sencha hoa lài",
                "MaSP": "110452",
                "Gia": 105000,
                "ThanhPhan": "Trà Xanh Nhật Bản (Sencha) 90%, Hoa Lài 9.5%, Hương Hoa Lài 0.5%",
                "KhoiLuong": "80 g",
                "HanSD": "12 tháng",
                "HDSD": "Lắc cho đều trà và hoa. Hãm trà theo cách thức sau: Lượng trà: 3 g; Lượng nước: 300 ml; Nhiệt độ nước: 85°C; Thời gian hãm: 3 - 5 phút",
                "HDBQ": "Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp. Luôn giữ sản phẩm kín khí khi không sử dụng",
                "ImgLink": "images/trasenchalai.jpg"

            },
            {
                "TenSP": "Trà sencha hoa cúc",
                "MaSP": "110453",
                "Gia": 107000,
                "ThanhPhan": "Trà Xanh Nhật Bản (Sencha) 87.2%, Hoa Cúc 11.6%, Hương Hoa Cúc 1.2%",
                "KhoiLuong": "86 g",
                "HanSD": "12 tháng",
                "HDSD": "Lắc cho đều trà và hoa. Hãm trà theo cách thức sau: Lượng trà: 3 g; Lượng nước: 300 ml; Nhiệt độ nước: 85°C; Thời gian hãm: 3 - 5 phút",
                "HDBQ": "Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp. Luôn giữ sản phẩm kín khí khi không sử dụng",
                "ImgLink": "images/trasenchahoacuc.jpg"

            },
            {
                "TenSP": "Trà sencha hoa hồng",
                "MaSP": "110454",
                "Gia": 109000,
                "ThanhPhan": "Trà Xanh Nhật Bản 85.2% (Sencha), Hoa Hồng 13.6%, Hương Hoa Hồng 1.2%",
                "KhoiLuong": "88 g",
                "HanSD": "12 tháng",
                "HDSD": "Lắc cho đều trà và hoa. Hãm trà theo cách thức sau: Lượng trà: 3 g; Lượng nước: 300 ml; Nhiệt độ nước: 85°C; Thời gian hãm: 3 - 5 phút",
                "HDBQ": "Bảo quản nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp. Luôn giữ sản phẩm kín khí khi không sử dụng",
                "ImgLink": "images/trasenchahoahong.jpg"

            },
            {
                "TenSP": "Trà Trà gừng hoà tan",
                "MaSP": "110455",
                "Gia": 79000,
                "ThanhPhan": "Gừng Lát 60%, Đường Glucose 40%",
                "KhoiLuong": "22 túi x 12 g",
                "HanSD": "24 tháng",
                "HDSD": "Cho 1 gói trà vào cốc, hòa tan bằng nước sôi khoảng 150 - 200 ml. Khuấy đều cho tan trước khi sử dụng",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/tragung.jpg"

            },
            {
                "TenSP": "Nước cốt dâu tằm",
                "MaSP": "110456",
                "Gia": 43000,
                "ThanhPhan": "Trái Dâu Tằm 60%, Đường Tinh Luyện, Acid Ascorbic, Acid Citric, Natri Benzoate",
                "KhoiLuong": "250 ml",
                "HanSD": "12 tháng",
                "HDSD": "Dùng làm thức uống giải khát. Pha với nước theo tỉ lệ 1:2 - 1:3. Ngon hơn khi uống với đá",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời trực tiếp. Đậy kín nắp chai khi không sử dụng",
                "ImgLink": "images/cotdautam.jpg"

            },
            {
                "TenSP": " Nước cốt phúc bồn tử",
                "MaSP": "110457",
                "Gia": 99000,
                "ThanhPhan": "Trái Phúc Bồn Tử (60%), Nước, Đường Tinh Luyện, Natri Benzoate, Acid Citric, Acid Ascorbic",
                "KhoiLuong": "250 ml",
                "HanSD": "6 tháng",
                "HDSD": "Dùng làm thức uống giải khát. Pha với nước theo tỉ lệ 1:2 - 1:3. Ngon hơn khi uống với đá",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời trực tiếp. Đậy kín nắp chai khi không sử dụng",
                "ImgLink": "images/phucbontu.jpg"

            },
            {
                "TenSP": " Cao atisô lá tươi",
                "MaSP": "110458",
                "Gia": 417000,
                "ThanhPhan": "Lá Atisô Tươi 100%",
                "KhoiLuong": "450 g",
                "HanSD": "12 tháng",
                "HDSD": "Pha 2 g cao atisô với nước ấm cho 1 lần uống. Tốt nhất uống giữa 2 bữa ăn hoặc cách bữa ăn 30 phút. Sử dụng 2 - 3 lần mỗi ngày. Có thể thêm đường hoặc mật ong để làm tăng thêm hương vị",
                "HDBQ": "Nơi khô ráo thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp vào sản phẩm",
                "ImgLink": "images/caoatiso.jpg"

            },
            {
                "TenSP": "Set quà 01",
                "MaSP": "110459",
                "Gia": 274000,
                "HanSD": "6 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/setqua1.jpg"

            },
            {
                "TenSP": "Set quà 02",
                "MaSP": "110460",
                "Gia": 274000,
                "HanSD": "6 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/setqua2.jpg"

            },
            {
                "TenSP": "Set quà 03",
                "MaSP": "110461",
                "Gia": 274000,
                "HanSD": "6 tháng",
                "HDSD": "Nhúng trà vào tách nước sôi, 1 túi trà / 150 - 200 ml, chờ 3 - 5 phút. Dùng làm thức uống giải khát hàng ngày",
                "HDBQ": "Nơi khô ráo, thoáng mát. Tránh ánh nắng mặt trời chiếu trực tiếp",
                "ImgLink": "images/setqua2.jpg"

            }
        ]

        $scope.add_cart = function(product) {
            if (product) {
                $scope.carts.push({ MaSP: product.MaSP, TenSP: product.TenSP, Gia: product.Gia });
            }
        }


        $scope.total = 0;

        $scope.setTotals = function(cart) {
            if (cart) {
                $scope.total += cart.Gia;
            }
        }

        $scope.remove_cart = function(cart) {
            if (cart) {
                $scope.carts.splice($scope.carts.indexOf(cart), 1);
                $scope.total -= cart.Gia;
            }
        }
    });