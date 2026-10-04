# Một lá thư dành cho chị — bản cập nhật 04/10/2026

HTML, CSS, JavaScript thuần. Giải nén, giữ `assets` cạnh `index.html`, rồi mở `index.html` bằng Safari hoặc Chrome.

## Trải nghiệm

- Chạm phong thư và nhập đúng `Trương Hạ Kiều Vi` để mở. Tên sai hiện `Bạn không phải là người ấy`.
- Ba trang thư viết tay được hiển thị theo thứ tự; chạm từng trang để mở ảnh đầy đủ và phóng to.
- Cuối thư, chibi nam bước từ trái sang phải đến chibi nữ, ngập ngừng, giấu hoa, cười rồi đưa hoa. Nút xem lại phát lại chuỗi này.
- Không tự phát nhạc, không có lựa chọn đồng ý/từ chối.

## Sửa trong bản này

- Bỏ toàn bộ khu vực ảnh kỷ niệm, nút chọn ảnh kỷ niệm, chú thích và các đoạn JavaScript/CSS đi kèm.
- Bỏ biểu tượng mặt trăng và con thỏ; thay bằng trang trí cầu lông ở màn hình phong thư, dấu niêm thư, đầu/cuối thư và khung chibi.
- Cả hai chibi cùng nằm trong một khung nền kem sáng `#fff5e5`, có viền và bóng nhẹ để nổi hơn nền giấy nâu. Có đường sân cầu trang trí ở phía dưới.
- Điều chỉnh tỉ lệ đầu–thân của chibi nữ để gần với chibi nam hơn; giữ các nét nhận diện, kính, tóc, trang phục và phụ kiện. Dùng ảnh nền trong suốt `assets/girl-matched.png`. Các phiên bản nữ trước vẫn được giữ trong `assets`.
- Cân chiều cao phần nhân vật nhìn thấy từ tóc tới đế giày và vị trí bàn chân, thay vì chỉ đặt cùng kích thước khung PNG. Nền chibi nam hòa với màu khung chung bằng `mix-blend-mode: multiply`; khung có màu nền rõ ràng để phép hòa màu hoạt động.

## Nội dung và ảnh

Ba ảnh thư giữ nguyên byte và nội dung chữ viết tay:

- `assets/letter-page-1.jpg`
- `assets/letter-page-2.jpg`
- `assets/letter-page-3.jpg`

Mục xem trước ảnh trang đầu vẫn hoạt động trong phiên hiện tại. Ảnh được chọn không gửi lên máy chủ hoặc ghi vào source; để giữ ảnh cho người nhận, thay file tương ứng trong `assets` và sửa đường dẫn nếu cần.

Các tư thế nam dùng `boy-walk-1.png`, `boy-walk-2.png`, `boy-shy.png`, `boy-hidden-flowers.png`, `boy-smile.png`, `boy-give-flowers.png`. `data-pose` giúp điều chỉnh cỡ một số tư thế bước đi mà không đổi hướng nhìn.

## Điều chỉnh màu và kích thước

Các quy tắc cuối `style.css` là bản cập nhật hiện hành.

| Biến CSS | Mặc định | Tác dụng |
| --- | --- | --- |
| `--paper-tone` | `#d3b399` | Màu nền giấy chung |
| `--stage-paper` | `#fff5e5` | Nền chung của khung chibi |
| `--character-height` | `77%` | Chiều cao nhân vật trong khung |
| `--character-width` | `43%` | Chiều rộng khung định vị nhân vật |
| `--film-grain-opacity` | `.075` | Hạt film |
| `--film-vignette-opacity` | `.18` | Tối viền |

Grain được tạo bằng SVG `feTurbulence`, vignette bằng radial-gradient. Hai lớp đứng yên và có `pointer-events: none`, không chặn cuộn/chạm. Ảnh thư không bị áp bộ lọc làm mờ. Các màu giấy riêng từng trang được lấy mẫu từ ảnh chụp; ánh sáng các ảnh có khác biệt nên không có một màu duy nhất khớp mọi pixel.

## Khả năng truy cập

Dialog nhập tên dùng được bằng bàn phím, có thông báo lỗi và focus. `prefers-reduced-motion: reduce` bỏ bước đi, hiện tư thế đưa hoa. `prefers-contrast: more` tắt grain/vignette. Gấp thư hủy animation; mở lại có thể phát từ đầu.

Khóa tên ở trình duyệt chỉ là trải nghiệm mở thư, không phải mã hóa/bảo mật nội dung.

## Kiểm tra

Đã kiểm tra cú pháp JavaScript; mô phỏng DOM để kiểm tra nhập tên, mở/gấp thư, sáu tư thế, hướng trái → phải, xem lại, giảm chuyển động, chọn ảnh thư và không còn tham chiếu đến phần ảnh kỷ niệm. Đã kiểm tra tài nguyên, PNG có alpha và chiều cao nhìn thấy của chibi nữ sau chuẩn hóa. Chưa kiểm tra bố cục bằng trình duyệt thực tế trong môi trường này.

`SPEC.md` giữ bản đặc tả cũ để tham khảo; yêu cầu mới nhất được áp dụng trong source hiện tại.
