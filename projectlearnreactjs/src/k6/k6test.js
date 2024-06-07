<div>
Trường Hợp 1 : 1m target 100

execution: local       -----------------------------  Thông tin về mode thực thi k6 
script: version-v2.js  ----------------------------- Chạy test bản 'version-v2.js' 
output: -

scenarios: (100.00%) 1 scenario, 100 max VUs, 1m30s max duration (incl. graceful stop):
      * default: 100 looping VUs for 1m0s (gracefulStop: 30s)
{/* scenarios: Tóm tắt kịch bản thử nghiệm và 1 số thông tin tổng quan trên 100 người dùng thừ và 1 phút 30 giây   */}


data_received..................: 27 MB  436 kB/s
 {/* Lượng Data nhận về  
  ---- Hệ thống đã nhận được tổng cộng : 27 MB 
---- Tốc độ nhận dữ liệu trung bình là 436 kilobyte mỗi giây.   */}
data_sent......................: 928 kB 15 kB/s 
{/* Lượng data gửi đi */}
{/* dữ liệu đã gửi đi từ máy khách đến máy chủ là 928 kB.
 Tốc độ trung bình của việc gửi dữ liệu là khoảng 15 kB/s */}
http_req_blocked...............: avg=1.02ms   min=0s      med=0s      max=68.17ms  p(90)=0s      p(95)=0s
{/* Thời gian chờ kết nối TCP ( TCP :Transmission Control Protocol - "Giao thức điều khiển truyền vận" ) */}
{/* thời gian chặn trung bình là rất nhỏ (1.02ms) và đa số các yêu cầu (90% và 95%) không bị chặn 
chút nào. Tuy nhiên, vẫn có một số yêu cầu (dưới 10%) gặp thời gian chặn lớn hơn, tối đa lên 
đến 68.17ms. Điều này có thể do một số yêu cầu cần thực hiện giải quyết DNS, thiết lập kết nối 
TCP hoặc bắt tay SSL/TLS. */}
http_req_connecting............: avg=1.01ms   min=0s      med=0s      max=68.11ms  p(90)=0s      p(95)=0s
{/* Thời gian thiết lập kết nối TCP đến máy chủ */}
{/* có thể thấy rằng phần lớn các yêu cầu HTTP không gặp phải thời gian kết nối đáng kể, với thời 
gian kết nối trung bình rất nhỏ (1.01ms) và đa số các yêu cầu (90% và 95%) không mất thời gian 
để thiết lập kết nối. Tuy nhiên, vẫn có một số yêu cầu (dưới 10%) có thời gian kết nối lớn hơn,
 tối đa lên đến 68.11ms. Điều này có thể do một số yêu cầu cần thời gian để thiết lập kết nối TCP
  với máy chủ. */}
http_req_duration..............: avg=60.04ms  min=36.04ms med=56.59ms max=488.07ms p(90)=70.09ms p(95)=78.31ms
{/* Tổng thời gian gửi request, chờ phản hồi và nhận dữ liệu phản hồi từ máy chủ */}
{/* HTTP được xử lý khá nhanh chóng, với thời gian xử lý trung bình là 60.04ms. Thời gian xử lý ngắn 
nhất là 36.04ms, và dài nhất là 488.07ms. Đa số các yêu cầu (90% và 95%) có thời gian xử lý dưới 
70.09ms và 78.31ms tương ứng. Tuy nhiên, có một số yêu cầu (dưới 10%) có thời gian xử lý dài hơn, 
có thể do các yếu tố như tải máy chủ, độ phức tạp của yêu cầu, hoặc độ trễ mạng. */}
{ expected_response:true }...: avg=60.04ms  min=36.04ms med=56.59ms max=488.07ms p(90)=70.09ms p(95)=78.31ms
{/* Dữ liệu này cung cấp thông tin chi tiết về thời gian chặn yêu cầu HTTP (http_req_blocked) trong một 
thử nghiệm với K6. Các số liệu thống kê này giúp bạn hiểu rõ hơn về hiệu suất và độ trễ của các yêu
 cầu HTTP trong quá trình thử nghiệm.  */}
 {/* thời gian phản hồi khá ổn định, với thời gian phản hồi trung bình là 60.04ms.
  Thời gian phản hồi ngắn nhất là 36.04ms và dài nhất là 488.07ms.
   Đa số các yêu cầu (90% và 95%) có thời gian phản hồi dưới 70.09ms và 78.31ms tương ứng. */}
http_req_failed................: 0.00%  ✓ 0         ✗ 5695
 {/* Dữ liệu này cung cấp thông tin về số lượng yêu cầu HTTP thất bại trong quá trình thử nghiệm với K6, 
cụ thể là metric http_req_failed. Đây là một số liệu quan trọng để đánh giá độ tin cậy của hệ thống 
trong quá trình kiểm thử tải */
//   Đây là metric đo lường tỷ lệ yêu cầu HTTP bị thất bại.
// 0.00%: Tỷ lệ phần trăm yêu cầu bị thất bại là 0.00%. Điều này có nghĩa là không có yêu cầu nào bị thất bại trong quá trình thử nghiệm.
// ✓ 0: Số lượng yêu cầu HTTP thất bại là 0.
// ✗ 5695: Tổng số lượng yêu cầu HTTP đã gửi là 5695. 
// Từ dữ liệu này, có thể rút ra kết luận rằng tất cả các yêu cầu HTTP đã được gửi đều thành công,
//  không có yêu cầu nào bị thất bại. Điều này chỉ ra rằng hệ thống có độ tin cậy cao và không gặp 
//  vấn đề trong việc xử lý các yêu cầu trong suốt quá trình thử nghiệm 

http_req_receiving.............: avg=860.07µs min=0s      med=314µs   max=24.01ms  p(90)=1.9ms   p(95)=3.83ms
{/* Thời gian nhận dữ liệu phản hồi từ máy chủ */}
// HTTP được nhận phản hồi rất nhanh chóng, với thời gian nhận phản hồi trung bình là 860.07µs. 
// Thời gian nhận phản hồi ngắn nhất là 0s, và dài nhất là 24.01ms. 
// Đa số các yêu cầu (90% và 95%) có thời gian nhận phản hồi dưới 1.9ms và 3.83ms tương ứng. 
// Tuy nhiên, có một số yêu cầu (dưới 10%) có thời gian nhận phản hồi dài hơn, có thể do các yếu tố 
// như kích thước dữ liệu lớn hoặc tải mạng và máy chủ.
http_req_sending...............: avg=75.94µs  min=0s      med=0s      max=10.55ms  p(90)=140.8µs p(95)=531.82µs
{/* Thời gian gửi dữ liệu đến máy chủ */}
// Từ dữ liệu này, có thể thấy rằng phần lớn các yêu cầu HTTP được gửi khá nhanh chóng, với thời 
// gian gửi trung bình là 75.94µs. Thời gian gửi ngắn nhất là 0s và dài nhất là 10.55ms. 
// Đa số các yêu cầu (90% và 95%) có thời gian gửi dưới 140.8µs và 531.82µs tương ứng. 
// Tuy nhiên, có một số yêu cầu (dưới 10%) có thời gian gửi lớn hơn,
//  có thể do các yếu tố như tải mạng hoặc máy chủ.
http_req_tls_handshaking.......: avg=0s       min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
{/* thời gian máy khách và máy chủ xác nhận lẫn nhau */}
// có thể kết luận rằng không có yêu cầu nào trong quá trình thử nghiệm
//  cần thiết lập kết nối bảo mật SSL/TLS, do đó không có thời gian nào được dành cho quá trình 
//  bắt tay TLS. Điều này có thể do sử dụng HTTP thay vì HTTPS, hoặc các yêu cầu được gửi tới 
//  các máy chủ không yêu cầu kết nối bảo mật.
http_req_waiting...............: avg=59.1ms   min=34.61ms med=55.79ms max=487.46ms p(90)=69.27ms p(95)=77.77ms
{/* Thời gian chờ phản hồi từ máy chủ */}
// Từ dữ liệu này, có thể thấy rằng phần lớn các yêu cầu HTTP có thời gian chờ đợi phản hồi khá ổn định,
//  với thời gian chờ đợi trung bình là 59.1ms. 
//  Thời gian chờ đợi ngắn nhất là 34.61ms và dài nhất là 487.46ms.
//   Đa số các yêu cầu (90% và 95%) có thời gian chờ đợi dưới 69.27ms và 77.77ms tương ứng. 
//   Tuy nhiên, có một số yêu cầu (dưới 10%) có thời gian chờ đợi lớn hơn, 
//   có thể do các yếu tố như tải mạng hoặc thời gian xử lý dài từ phía máy chủ.
http_reqs......................: 5695   93.429018/s
{/* Tổng số HTTP requests mà k6 đã sinh ra */}
// 5695: Đây là tổng số yêu cầu HTTP đã được gửi trong quá trình thử nghiệm.
// 93.429018/s: Đây là tỷ lệ trung bình của yêu cầu HTTP mỗi giây, 
// tính bằng cách chia tổng số yêu cầu cho thời gian thử nghiệm.
// Tốc độ trung bình của việc gửi yêu cầu là khoảng 93.43 yêu cầu mỗi giây, cho thấy 
// mức độ hoạt động của hệ thống trong thời gian thử nghiệm.
iteration_duration.............: avg=1.06s    min=1.04s   med=1.06s   max=1.48s    p(90)=1.07s   p(95)=1.08s
{/* Thời gian cần thiết để thực hiện 1 lần thực thi default function */}
// có thể thấy rằng trong quá trình thử nghiệm, mỗi vòng lặp có thời gian trung bình là 1.06 giây.
//  Thời gian lặp ngắn nhất là 1.04 giây và dài nhất là 1.48 giây.
//   Đa số các vòng lặp (90% và 95%) có thời gian dưới 1.07 giây và 1.08 giây tương ứng. 
//   Tuy nhiên, có một số vòng lặp (dưới 10%) có thời gian lặp lớn hơn,
//    có thể do các yếu tố như tải hệ thống hoặc xử lý phức tạp trong quá trình thực hiện.
iterations.....................: 5695   93.429018/s
{/* Tổng số lần VUs thực thi default function */}
// tổng số vòng lặp đã đạt tới 5695 vòng lặp. Tốc độ trung bình của vòng lặp là khoảng 
// 93.43 vòng lặp mỗi giây, cho thấy mức độ hoạt động của hệ thống trong thời gian thử nghiệm.
vus............................: 100    min=100     max=100
{/* Số lượng người dùng họt động */}
// đã sử dụng một số lượng cố định là 100 VUs. 
// Không có sự thay đổi giữa số lượng VUs tối thiểu và tối đa, vì cả hai đều là 100.
//  Điều này cho thấy rằng số lượng VUs được duy trì ổn định và không thay đổi trong suốt quá 
//  trình thử nghiệm.
vus_max........................: 100    min=100     max=100
{/* Số lượng VU tối đa */}
// số lượng VUs tối đa được duy trì là 100. Không có sự thay đổi giữa số lượng VUs tối thiểu và tối đa,
//  vì cả hai đều là 100. Điều này cho thấy rằng số lượng VUs được giữ ổn định và không thay đổi 
//  trong suốt quá trình thử nghiệm.


running (1m01.0s), 000/100 VUs, 5695 complete and 0 interrupted iterations
// (1m01.0s): Thời gian chạy tính đến thời điểm thông báo, tức là 1 phút và 1 giây.
// 000/100 VUs: Đây là số lượng VUs đang chạy trong thử nghiệm. Trong trường hợp này, 
// không có VUs nào đang chạy vì số lượng là 000 trong tổng số 100 VUs.
// 5695 complete: Đây là số lượng vòng lặp hoàn thành trong quá trình thử nghiệm.
// 0 interrupted iterations: Không có vòng lặp nào bị gián đoạn trong quá trình thử nghiệm.

default ✓ [======================================] 100 VUs  1m0s
// default: Đây là tên của scenario (kịch bản) hiện đang được thực thi hoặc giám sát.
// ✓ [======================================]: Đây là thanh tiến trình (progress bar) 
// hiển thị phần trăm tiến trình hoàn thành của scenario. 
// Trong trường hợp này, thanh tiến trình đã đạt đến 100%, vì nó đã điền toàn bộ với dấu "=", 
// thể hiện rằng quá trình thực hiện của scenario đã hoàn thành.
// 100 VUs: Đây là số lượng virtual users (VUs) được sử dụng trong scenario. Trong trường hợp này,
//  có tổng cộng 100 VUs.
// 1m0s: Đây là thời gian mà scenario được thực thi hoặc giám sát. Trong trường hợp này,
//  scenario đã chạy trong 1 phút.
//  thông điệp này cho biết rằng scenario có tên "default" đã hoàn thành việc thực thi hoặc
//   giám sát, sử dụng tổng cộng 100 VUs trong suốt 1 phút.











Trương hợp :1m target 200
<div>
execution: local
script: version-v2.js
output: -

scenarios: (100.00%) 1 scenario, 200 max VUs, 1m30s max duration (incl. graceful stop)
      * default: 200 looping VUs for 1m0s (gracefulStop: 30s)

{/* // Tóm tắt kịch bản thử nghiệm và 1 số thông tin tổng quan trên 200 người dùng thừ và 1 phút 30 giây */}




// data_received..................: 53 MB  860 kB/s
{/* Lượng Data nhận về  
 -Hệ thống đã nhận được tổng cộng : 53 MB 
-Tốc độ nhận dữ liệu trung bình là 860 kilobyte mỗi giây.  */}

// data_sent......................: 1.8 MB 30 kB/s
{/* Lượng data gửi đi */}
{/* dữ liệu đã gửi đi từ máy khách đến máy chủ là  1.8 Mb
 Tốc độ trung bình của việc gửi dữ liệu là khoảng 30 kB/s */}
// http_req_blocked...............: avg=5.25ms   min=0s      med=0s       max=1.07s    p(90)=0s       p(95)=0s
{/* Thời gian chờ kết nối TCP ( TCP :Transmission Control Protocol - "Giao thức điều khiển truyền vận
 có thể thấy rằng phần lớn các yêu cầu HTTP không phải chờ đợi chặn, 
với thời gian chặn trung bình là 5.25ms. Thời gian chặn ngắn nhất là 0s, 
trong khi thời gian chặn lâu nhất là 1.07s. Đa số các yêu cầu không phải chờ đợi chặn,
 với 90% và 95% các yêu cầu có thời gian chặn là 0s.  */}
// http_req_connecting............: avg=5.23ms   min=0s      med=0s       max=1.07s    p(90)=0s       p(95)=0s
{/* Thời gian thiết lập kết nối TCP đến máy chủ
không phải chờ đợi khi thiết lập kết nối, với thời gian kết nối trung bình là 5.23ms.
 Thời gian kết nối ngắn nhất là 0s, trong khi thời gian kết nối lâu nhất là 1.07s.
Đa số các yêu cầu không phải chờ đợi khi kết nối, với 90% và 95% các yêu cầu có thời gian kết
 nối là 0s. */}
// http_req_duration..............: avg=64.06ms  min=38.56ms med=57.62ms  max=273.11ms p(90)=83.3ms   p(95)=101.06ms
{/* Tổng thời gian gửi request, chờ phản hồi và nhận dữ liệu phản hồi từ máy chủ
thời gian hoàn thành khá ổn định, với thời gian hoàn thành trung bình là 64.06ms. 
Thời gian hoàn thành ngắn nhất là 38.56ms và dài nhất là 273.11ms.
 Đa số các yêu cầu (90% và 95%) có thời gian hoàn thành dưới 83.3ms và 101.06ms tương ứng.
  Tuy nhiên, có một số yêu cầu (dưới 10%) có thời gian hoàn thành lớn hơn, 
  có thể do các yếu tố như tải mạng hoặc thời gian xử lý dài từ phía máy chủ. */}
//   { expected_response:true }...: avg=64.06ms  min=38.56ms med=57.62ms  max=273.11ms p(90)=83.3ms   p(95)=101.06ms
{/* Dữ liệu này cung cấp thông tin chi tiết về thời gian chặn yêu cầu HTTP (http_req_blocked) trong một 
thử nghiệm với K6. Các số liệu thống kê này giúp bạn hiểu rõ hơn về hiệu suất và độ trễ của các yêu
 cầu HTTP trong quá trình thử nghiệm.
 thời gian phản hồi khá ổn định, với thời gian phản hồi trung bình là 64.06ms. 
 Thời gian phản hồi ngắn nhất là 38.56ms và dài nhất là 273.11ms.
  Đa số các yêu cầu (90% và 95%) có thời gian phản hồi dưới 83.3ms và 101.06ms tương ứng. */}
// http_req_failed................: 0.00%  ✓ 0          ✗ 11272
{/* Dữ liệu này cung cấp thông tin về số lượng yêu cầu HTTP thất bại trong quá trình thử nghiệm với K6, 
cụ thể là metric http_req_failed. Đây là một số liệu quan trọng để đánh giá độ tin cậy của hệ thống 
trong quá trình kiểm thử tải
Tổng số lượng yêu cầu thất bại trong quá trình thử nghiệm được hiển thị là 11,272, 
tương ứng với tỷ lệ thất bại là 0%. Điều này có nghĩa là trong quá trình thử nghiệm, 
không có yêu cầu nào thất bại, tất cả đều được xử lý thành công. */}
// http_req_receiving.............: avg=761.45µs min=0s      med=392.65µs max=50.44ms  p(90)=1.64ms   p(95)=3.01ms
{/* Thời gian nhận dữ liệu phản hồi từ máy chủ
thời gian nhận dữ liệu khá ngắn, với thời gian nhận dữ liệu trung bình là 761.45µs. 
Thời gian nhận dữ liệu ngắn nhất là 0s, trong khi thời gian nhận dữ liệu lâu nhất là 50.44ms. 
Đa số các yêu cầu (90% và 95%) có thời gian nhận dữ liệu dưới 1.64ms và 3.01ms tương ứng. */}
// http_req_sending...............: avg=103.87µs min=0s      med=0s       max=40.33ms  p(90)=166.38µs p(95)=541.84µs
{/* Thời gian gửi dữ liệu đến máy chủ
, với thời gian gửi dữ liệu trung bình là 103.87µs. Thời gian gửi dữ liệu ngắn nhất là 0s, 
trong khi thời gian gửi dữ liệu lâu nhất là 40.33ms. Đa số các yêu cầu (90% và 95%) có thời gian gửi dữ liệu dưới 166.38µs
 và 541.84µs tương ứng. */}
// http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s
{/* thời gian máy khách và máy chủ xác nhận lẫn nhau
ông có yêu cầu nào phải thực hiện bắt tay TLS hoặc thời gian bắt tay TLS rất ngắn, gần với không. 
Điều này có thể ám chỉ rằng quá trình bảo mật TLS đã được thiết lập trước đó, hoặc các yêu cầu không yêu cầu mức độ bảo mật này. */}
// http_req_waiting...............: avg=63.19ms  min=33.54ms med=56.89ms  max=272.77ms p(90)=82.26ms  p(95)=100.21ms
{/* Thời gian chờ phản hồi từ máy chủ
thời gian chờ đợi khá ổn định, với thời gian chờ đợi trung bình là 63.19ms. 
Thời gian chờ đợi ngắn nhất là 33.54ms và dài nhất là 272.77ms. Đa số các yêu cầu (90% và 95%) có 
thời gian chờ đợi dưới 82.26ms và 100.21ms tương ứng. */}
// http_reqs......................: 11272  184.580764/s
{/* Tổng số HTTP requests mà k6 đã sinh ra 
11272: Đây là tổng số yêu cầu HTTP đã được thực hiện trong quá trình thử nghiệm.
184.580764/s: Đây là tốc độ trung bình của các yêu cầu, được tính bằng số yêu cầu trên giây. */}
// iteration_duration.............: avg=1.07s    min=1.04s   med=1.06s    max=2.18s    p(90)=1.08s    p(95)=1.11s
{/* Thời gian cần thiết để thực hiện 1 lần thực thi default function
quá trình thử nghiệm có thời gian khá ổn định, với thời gian trung bình là 1.07s. 
Thời gian lặp ngắn nhất là 1.04s và dài nhất là 2.18s. Đa số các lần lặp (90% và 95%) có thời gian dưới 1.08s và 1.11s tương ứng. */}
// iterations.....................: 11272  184.580764/s
{/* ổng số lần VUs thực thi default function
11272: Đây là tổng số lần lặp đã được thực hiện trong quá trình thử nghiệm.
184.580764/s: Đây là tốc độ trung bình của các lần lặp, được tính bằng số lần lặp trên giây.
Từ dữ liệu này, có thể thấy rằng trong quá trình thử nghiệm,
 tổng cộng đã có 11,272 lần lặp, với một tốc độ trung bình khoảng 184.58 lần lặp mỗi giây. */}
// vus............................: 29     min=29       max=200
{/* Số lượng người dùng họt động
Từ thông tin này, có thể thấy rằng số lượng người dùng ảo trong quá trình thử nghiệm dao động từ 29 người dùng ảo 
đến tối đa 200 người dùng ảo, và tại một thời điểm cụ thể, có 29 người dùng ảo đang hoạt động. */}
// vus_max........................: 200    min=200      max=200
{/* Số lượng VU tối đa
200: Đây là số lượng tối đa của người dùng ảo được thiết lập cho quá trình thử nghiệm.
min=200: Giá trị này chỉ ra số lượng người dùng ảo tối thiểu được sử dụng trong suốt quá trình thử nghiệm.
max=200: Đây là số lượng người dùng ảo tối đa được sử dụng trong suốt quá trình thử nghiệm.
Thông tin này cho thấy rằng trong quá trình thử nghiệm, số lượng tối đa của người dùng ảo đã được thiết lập là 200, 
và không có sự thay đổi trong phạm vi này trong suốt quá trình thử nghiệm. */}
// running (1m01.1s), 000/200 VUs, 11272 complete and 0 interrupted iterations
{/* running (1m01.1s): Quá trình thử nghiệm đang chạy và đã chạy trong khoảng thời gian 1 phút và 1.1 giây.
000/200 VUs: Hiện tại có 0 trong tổng số 200 Người dùng ảo (VUs) được định cấu hình đang hoạt động.
 Số thứ hai (200) thường là số lượng người dùng ảo tối đa được thiết lập.
11272 complete and 0 interrupted iterations: Tổng cộng đã hoàn thành 11,272 lần lặp trong quá trình thử nghiệm và không có 
lần lặp nào bị gián đoạn.
Tóm lại, quá trình thử nghiệm đang chạy và đã hoàn thành một số lượng lớn lần lặp,
 không gặp phải bất kỳ lỗi hoặc gián đoạn nào, và không có Người dùng ảo nào đang hoạt động tại thời điểm đo. */}
// default ✓ [======================================] 200 VUs  1m0s
{/* quá trình thử nghiệm đã chạy với 200 Người dùng ảo (VUs) trong vòng 1 phút.
 Biểu đồ tiến trình được mô tả bằng một dấu tích đầy đủ trên thanh tiến trình, với 100% hoàn thành.
Điều này ngụ ý rằng tất cả các yêu cầu đã được thực hiện thành công trong quá trình thử nghiệm 
và đã hoàn thành theo kế hoạch được đề ra. */}
</div>

