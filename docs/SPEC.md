# Chi tiết dự án ProQuiz

## Mục lục

- [1. Trang chủ](#1-trang-chủ)
- [2. Tìm kiếm](#2-tìm-kiếm)
- [3. Làm quiz](#3-làm-quiz)
- [4. Tạo quiz](#4-tạo-quiz)
- [5. Người dùng](#5-người-dùng)

## 1. Trang chủ

Header: Logo Proquiz, thanh tìm kiếm, nút tạo quiz và icon người dùng.

Main: Mục quiz mới (được tính bằng cách lấy thời gian trừ thời gian mà quiz được tạo, nếu bé hơn 24 sẽ đưa vào), Quiz đã làm.

Mỗi mục tối đa 4 quiz.

## 2. Tìm kiếm

Khi user muốn tìm một quiz cụ thể nào đó, họ sẽ bấm vào thanh tìm kiếm. Khi họ nhập vào xong vào bấm enter, màn hình sẽ hiện ra: Kết quả (số lượng) và những bài quiz có tiêu đề hay mô tả trong tìm kiếm.

## 3. Làm quiz

Khi user tìm thấy một bài ưng ý, họ sẽ bấm vào bài đó. Màn hình sẽ hiện ra tên quiz, mô tả, người tạo và nút bắt đầu. Khi người dùng bấm nút bắt đầu, màn hình sẽ đếm ngược 3,2,1 và bắt đầu. Màn hình câu hỏi gồm: thanh thời gian, câu hỏi và các câu trả lời. Nếu người dùng chọn đúng, màn hình sẽ hiện “Correct” cùng với đáp án đúng được tô màu xanh. Nếu người dùng chọn sai thì màn hình sẽ hiện “Incorrect” với đáp án sai được tô màu đỏ và đáp án đúng được tô màu xanh. Còn nếu người dùng không trả lời trong thời gian cho phép thì màn hình sẽ hiện “Time’s up!” với câu trả lời đúng được tô màu xanh lá. Điểm cho mỗi câu sẽ được tính bằng công thức:

500 \* thời gian còn lại

Nếu trả lời sai hoặc hết thời gian thì không có điểm.

Khi đã làm xong, màn hình hiện chữ “Finished” và chuyển sang màn hình kết quả. Màn hình kết quả gồm: Số câu đúng, số câu sai và tổng điểm. Ngoài ra còn hai nút là “Làm lại” và “Về trang chủ”.

## 4. Tạo quiz

Người dùng bấm vào nút “Tạo quiz” Màn hình hiện ra trang gồm: Nhập tên quiz (bắt buộc, tối đa 100 ký tự); Mô tả (tùy chọn, tối đa 200 ký tự), thể loại (bắt buộc, chọn giữa Vật lý, Hoá học, Sinh học, Lịch sử, Địa lý, Pháp luật, Toán học, Văn học, Ngoại ngữ, Khác), hiển thị (public - ai cũng có thể truy cập, private - chỉ có người tạo được truy cập). Khi xong thì bấm vào nút “Tiếp theo”.

Màn hình tạo quiz (tối đa 20 câu hỏi):
Header: Gồm có nút quay lại (sẽ tự động lưu) và “Hoàn thành”.

Content: Có nút “Thêm câu hỏi” nếu người dùng chưa tạo câu hỏi nào. Khi bấm vào một màn hình sẽ hiện ra yêu cầu người dùng nhập câu hỏi, đáp án cho 4 câu, chọn câu nào đúng, câu nào sai (người dùng chỉ được chọn 1 đáp án đúng) và thời gian từ 30 giây đến 5 phủt. Khi xong người dùng có thể bấm nút save và câu hỏi sẽ được thêm vào.

Lúc này màn hình sẽ gồm có:
Câu hỏi gồm câu hỏi số mấy, nút chỉnh sửa và nút xoá. Ngoài có nút thêm bên dưới.

## 5. Người dùng

Lưu ý: Vì đây là sản phẩm học tập nên sẽ không có các tính năng Quên mật khẩu, Xác thực 2 bước và các tính năng bảo mật khác.

Gồm có username (tối đa 50 ký tự) và email. Người dùng có thể điều chỉnh username và email Quy trình chỉnh sửa như sau:

Người dùng bấm vào chữ “Edit”. Một dialog gồm username và email xuất hiện:

Username: Người dùng có thể chỉnh sửa ngay trên đó và lưu.

Email: Người dùng có thể chỉnh sửa trên đó và lưu.

Người dùng có thể bấm nút “Save” khi đã chỉnh sửa một trong ba hoặc nút “x” nếu không có chỉnh sửa
Dưới profile có 2 tab:

Quiz đã tạo: Người dùng có thể bấm vào để chỉnh sửa, hoặc xoá quiz bất kỳ. Nếu có ai đang làm thì họ vẫn tiếp tục nhưng khi xong sẽ hiện thông báo là quiz đã bị xoá nên không hiển thị kết quả và chuyển về trang chủ.

Quiz đã làm: Hiển thị các quiz đã làm. Người dùng có thể bấm vào để làm lại quiz đó.
