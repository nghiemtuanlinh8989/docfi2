<div>
Trường hợp:  1m target 300
execution: local  -----------------------------  Thông tin về mode thực thi k6 
script: version-v2.js ----------------------------- Chạy test bản 'version-v2.js' 
output: -


scenarios: (100.00%) 1 scenario, 300 max VUs, 1m30s max duration (incl. graceful stop):
      * default: 300 looping VUs for 1m0s (gracefulStop: 30s)
{/* scenarios: Tóm tắt kịch bản thử nghiệm và 1 số thông tin tổng quan trên 100 người dùng thừ và 1 phút 30 giây   */}

// data_received..................: 78 MB  1.3 MB/s
{/* Lượng Data nhận về  
78 MB: Đây là tổng dung lượng dữ liệu đã được nhận trong quá trình thử nghiệm.
1.3 MB/s: Đây là tốc độ trung bình của việc nhận dữ liệu, được tính bằng megabyte trên giây.
Thông tin này cho biết rằng trong quá trình thử nghiệm, tổng cộng đã nhận được 78 megabyte dữ liệu,
 với tốc độ trung bình khoảng 1.3 megabyte mỗi giây. */}
// data_sent......................: 2.7 MB 44 kB/s
{/* Lượng data gửi đi
2.7 MB: Đây là tổng dung lượng dữ liệu đã được gửi trong quá trình thử nghiệm.
44 kB/s: Đây là tốc độ trung bình của việc gửi dữ liệu, được tính bằng kilobyte trên giây.
Thông tin này cho biết rằng trong quá trình thử nghiệm, tổng cộng đã gửi đi 2.7 megabyte dữ liệu, 
với tốc độ trung bình khoảng 44 kilobyte mỗi giây. */}
// http_req_blocked...............: avg=15.23ms  min=0s      med=0s      max=3.08s    p(90)=0s      p(95)=0s
{/* Thời gian chờ kết nối TCP ( TCP :Transmission Control Protocol - "Giao thức điều khiển truyền vận)
thời gian chặn trung bình là 15.23ms. Thời gian chặn ngắn nhất là 0s, trong khi thời gian chặn lâu nhất là 3.08s.
 Đa số các yêu cầu (90% và 95%) không bị chặn trước khi gửi, hoặc thời gian chặn rất ngắn. */}
// http_req_connecting............: avg=15.21ms  min=0s      med=0s      max=3.08s    p(90)=0s      p(95)=0s
{/* Thời gian thiết lập kết nối TCP đến máy chủ
thời gian kết nối khá ngắn, với thời gian trung bình là 15.21ms. 
Thời gian kết nối ngắn nhất là 0s, trong khi thời gian kết nối lâu nhất là 3.08s.
 Đa số các yêu cầu (90% và 95%) có thời gian kết nối dưới 0s, hoặc thời gian kết nối rất ngắn. */}
// http_req_duration..............: avg=65.85ms  min=33.27ms med=58.66ms max=588.12ms p(90)=89.03ms p(95)=106.73ms
{/* Tổng thời gian gửi request, chờ phản hồi và nhận dữ liệu phản hồi từ máy chủ 
thời gian hoàn thành khá ổn định, với thời gian hoàn thành trung bình là 65.85ms. 
Thời gian hoàn thành ngắn nhất là 33.27ms và dài nhất là 588.12ms.
 Đa số các yêu cầu (90% và 95%) có thời gian hoàn thành dưới 89.03ms và 106.73ms tương ứng. */}
// { expected_response:true }...: avg=65.85ms  min=33.27ms med=58.66ms max=588.12ms p(90)=89.03ms p(95)=106.73ms
{/* Dữ liệu này cung cấp thông tin chi tiết về thời gian chặn yêu cầu HTTP (http_req_blocked) trong một 
thử nghiệm với K6. Các số liệu thống kê này giúp bạn hiểu rõ hơn về hiệu suất và độ trễ của các yêu
 cầu HTTP trong quá trình thử nghiệm.
 có thể thấy rằng các yêu cầu có phản hồi dự kiến là "true" có thời gian hoàn thành tương tự như trung bình chung
  với thời gian trung bình là 65.85ms. 
 Đa số các yêu cầu có phản hồi dự kiến là "true" (90% và 95%) có thời gian hoàn thành dưới 89.03ms và 106.73ms tương ứng. */}
// http_req_failed................: 0.00%  ✓ 0          ✗ 16695
{/* Dữ liệu này cung cấp thông tin về số lượng yêu cầu HTTP thất bại trong quá trình thử nghiệm với K6, 
cụ thể là metric http_req_failed. Đây là một số liệu quan trọng để đánh giá độ tin cậy của hệ thống 
trong quá trình kiểm thử tải
0.00%: Đây là tỷ lệ yêu cầu HTTP không thành công trong quá trình thử nghiệm, tính bằng phần trăm.
✓ 0: Số lượng yêu cầu HTTP thành công là 0.
✗ 16695: Số lượng yêu cầu HTTP không thành công là 16,695.
Tỷ lệ yêu cầu không thành công là 0%, cho thấy không có yêu cầu nào thất bại trong quá trình thử nghiệm. */}
// http_req_receiving.............: avg=815.04µs min=0s      med=122.4µs max=441.24ms p(90)=1.32ms  p(95)=2.41ms
{/* Thời gian nhận dữ liệu phản hồi từ máy chủ
có thể thấy rằng phần lớn các yêu cầu HTTP có thời gian nhận khá ngắn, với thời gian nhận trung bình là 815.04µs.
 Thời gian nhận ngắn nhất là 0s, trong khi thời gian nhận lâu nhất là 441.24ms. 
 Đa số các yêu cầu (90% và 95%) có thời gian nhận dưới 1.32ms và 2.41ms tương ứng. */}
// http_req_sending...............: avg=142.48µs min=0s      med=0s      max=30.61ms  p(90)=0s      p(95)=478.86µs
{/* Thời gian gửi dữ liệu đến máy chủ
ó thể thấy rằng phần lớn các yêu cầu HTTP có thời gian gửi khá ngắn, với thời gian gửi trung bình là 142.48µs. 
Thời gian gửi ngắn nhất là 0s, trong khi thời gian gửi lâu nhất là 30.61ms. 
Đa số các yêu cầu (90% và 95%) có thời gian gửi dưới 0s và 478.86µs tương ứng. */}
// http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
{/* thời gian máy khách và máy chủ xác nhận lẫn nhau
Từ dữ liệu này, có thể kết luận rằng trong quá trình thử nghiệm, không có yêu cầu nào tốn thời gian để thiết lập handshake TLS.
 Điều này có thể xảy ra khi yêu cầu không yêu cầu kết nối an toàn qua TLS. */}
// http_req_waiting...............: avg=64.9ms   min=33.27ms med=58.03ms max=588.12ms p(90)=88.28ms p(95)=105.29ms
{/* Thời gian chờ phản hồi từ máy chủ 
thời gian chờ khá ổn định, với thời gian chờ trung bình là 64.9ms. Thời gian chờ ngắn nhất là 33.27ms và dài nhất là 588.12ms.
 Đa số các yêu cầu (90% và 95%) có thời gian chờ dưới 88.28ms và 105.29ms tương ứng. */}
// http_reqs......................: 16695  271.442183/s
{/* Tổng số HTTP requests mà k6 đã sinh ra 
16695: Đây là tổng số lượng yêu cầu HTTP đã được gửi trong quá trình thử nghiệm.
271.442183/s: Đây là tỷ lệ yêu cầu mỗi giây, tính bằng cách chia tổng số lượng yêu cầu cho thời gian thử nghiệm.
Từ dữ liệu này, có thể thấy rằng trong quá trình thử nghiệm, tổng số lượng yêu cầu HTTP là 16695 và tỷ lệ 
yêu cầu trung bình mỗi giây là khoảng 271.44 yêu cầu. */}
// iteration_duration.............: avg=1.08s    min=1.03s   med=1.06s   max=4.17s    p(90)=1.09s   p(95)=1.11s
{/* Thời gian cần thiết để thực hiện 1 lần thực thi default function 
có thể thấy rằng phần lớn các chu kỳ thử nghiệm có thời gian hoàn thành khá ổn định, 
với thời gian trung bình mỗi chu kỳ là 1.08s. Thời gian chu kỳ ngắn nhất là 1.03s và dài nhất là 4.17s.
 Đa số các chu kỳ (90% và 95%) có thời gian hoàn thành dưới 1.09s và 1.11s tương ứng. */}
// iterations.....................: 16695  271.442183/s
{/* Tổng số lần VUs thực thi default function
16695: Đây là tổng số lần lặp trong quá trình thử nghiệm.
271.442183/s: Đây là tỷ lệ lặp mỗi giây, tính bằng cách chia tổng số lần lặp cho thời gian thử nghiệm.
Từ dữ liệu này, có thể thấy rằng trong quá trình thử nghiệm, tổng số lần lặp là 16695 và 
tỷ lệ lặp trung bình mỗi giây là khoảng 271.44 lần. */}
// vus............................: 82     min=82       max=300
{/* Số lượng người dùng họt động
82: Đây là số lượng VUs được sử dụng trong quá trình thử nghiệm.
min=82: Số lượng VUs tối thiểu cũng là 82. Điều này ngụ ý rằng số lượng VUs không giảm dưới mức này trong quá trình thử nghiệm.
max=300: Số lượng VUs tối đa là 300. Điều này ngụ ý rằng số lượng VUs không tăng quá mức này trong quá trình thử nghiệm.
Từ dữ liệu này, có thể thấy rằng trong quá trình thử nghiệm, số lượng VUs dao động từ 82 đến 300, với số lượng VUs trung bình là 82. */}
// vus_max........................: 300    min=300      max=300
Số lượng VU tối đa 
{/* 300: Đây là số lượng VUs tối đa được thiết lập trong quá trình thử nghiệm.
min=300: Số lượng VUs tối thiểu cũng là 300. Điều này ngụ ý rằng số lượng VUs không giảm dưới mức này trong quá trình thử nghiệm.
max=300: Số lượng VUs tối đa cũng là 300. Điều này ngụ ý rằng số lượng VUs không tăng quá mức này trong quá trình thử nghiệm.
Từ dữ liệu này, có thể thấy rằng số lượng VUs được giữ ổn định ở mức tối đa 300 trong suốt quá trình thử nghiệm. */}
// running (1m01.5s), 000/300 VUs, 16695 complete and 0 interrupted iterations
{/* running (1m01.5s): Quá trình thử nghiệm đã đang chạy trong khoảng thời gian 1 phút và 1,5 giây.
000/300 VUs: Hiện tại, không có virtual users (VUs) nào đang chạy. Trong tổng số 300 VUs được thiết lập, 
không có VUs nào đang hoạt động tại thời điểm này.
16695 complete and 0 interrupted iterations: Tổng cộng đã hoàn thành 16,695 lần lặp và không có lần lặp nào bị gián đoạn 
(interrupted) trong quá trình thực hiện thử nghiệm.
Thông báo này cung cấp một cái nhìn tổng quan về trạng thái của quá trình thử nghiệm, bao gồm thời gian chạy, số lượng VUs đang hoạt động và số lần lặp đã hoàn thành. */}
// default ✓ [======================================] 300 VUs  1m0s
{/* ✓ [======================================]: Biểu đồ tiến trình thể hiện sự tiến triển của quá trình thử nghiệm. Dạng biểu đồ này thường được sử dụng để minh họa tỷ lệ hoàn thành của yêu cầu hoặc thời gian thực thi của các yêu cầu.
300 VUs: Số lượng virtual users (VUs) được sử dụng trong quá trình thử nghiệm là 300.
1m0s: Thời gian thử nghiệm là 1 phút (60 giây).
Dựa trên thông báo này, quá trình thử nghiệm đã được thực hiện trong thời gian 1 phút với 300 VUs và đã hoàn thành thành công. */}
