import React, { useState, useEffect } from "react";
import axios from "axios";
import { Poem1 } from "./Vnexdata4";
import { Poem2 } from "./Vnexdata4";
import { Poem3 } from "./Vnexdata4";
import { Poem4 } from "./Vnexdata4";
import { Poem5 } from "./Vnexdata4";
import { Poem6 } from "./Vnexdata4";
import { Poem7 } from "./Vnexdata4";
import { Poem8 } from "./Vnexdata4";
import { Poem10 } from "./Vnexdata4";
import { Vnexdata4 } from "./Vnexdata4";
// import { Vuatom } from "./Vnexdata4";
// export default function Thu4() {
 
  
  

  
function Thu4() {
  const [Name, setName] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://6646d2d451e227f23aaff22c.mockapi.io/123456/New"
      );
      return res;
    }
    getData().then((res) => setName(res.data));
    getData().catch((err) => console.log(err));
  }, []);
  useEffect(()=>{
    console.log(Name)
},[Name])


  const listbai1 = Vnexdata4.map((item) => (
    <div class="bai3">
      <h1 class="tieude1">{item.title}</h1>
      <div class="baianh5">
        <div class="baianh3">
          <img src={item.images} style={{ width: 145, height: 87 }} />
        </div>
        <div class="baianh4">
          <p class="baitap3">{item.content}</p>
        </div>
      </div>
    </div>
  ));
  const listbai3 = Poem3.map((item) => (
    <div class="bai71">
      <div class="anhboeing">
        <img src={item.images} style={{ width: 220, height: 120 }} />
      </div>
      <div class="bai72">
        <h1 class="boeing">{item.title}</h1>
        <p class="ndboeing">{item.content}</p>
      </div>
    </div>
  ));
  const listbai4 = Poem4.map((item) => (
    <div class="xoso1">
      <h1 class="xoso">{item.title}</h1>
      <p class="ndxoso">{item.content}</p>
    </div>
  ));
  const listbai10 = Poem10.map((item) => (
    <div class="vuoncay">
      <div class="caycanh">
        <img src={item.image} style={{ width: 220, height: 120 }} />
      </div>
      <div class="chongnong">
        <h1 class="lopxoe">{item.title}</h1>
        <p>{item.content}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <div class="chien1">
        <div class="khung2">
          {listbai1}
          <div></div>
        </div>

        <div class="khung3">
          <div class="khungmenu">
            <div class="tieude">
              <p class="xoayngang">
                <strong>Kinh Doanh</strong>
              </p>

              <div class="khungthang">
                {Poem1.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div class="hop1">
            <div class="bai17">
              <div class="bai71">
                {listbai3}

                {/* <div class="anhboeing">
                  <img
                    src="./images/boeing.jpg"
                    style={{ width: 220, height: 120 }}
                  />
                </div>
                <div class="bai72">
                  <h1 class="boeing">Boeing lún sâu vào khủng hoảng</h1>
                  <p class="ndboeing">
                    CEO David Calhoun được đưa về để giải quyết vấn đề của
                    Boeing, nhưng ông đã rời đi, để lại công việc còn khó khăn
                    hơn cho người kế nhiệm.{" "}
                  </p>
                </div> */}
              </div>
            </div>
            <div class="bai18">
              {listbai4}
              {/* <div class="xoso1">
                <h1 class="xoso">Xổ số TP HCM lãi 4,5 tỷ đồng mỗi ngày</h1>
                <p class="ndxoso">
                  Bình quân năm 2023, Xổ số TP HCM thu gần 37 tỷ đồng tiền bán
                  vé số và mỗi ngày lãi trên 4,5
                </p>
              </div> */}
            </div>
          </div>
          <div class="bai19">
            <div class="kengang1">
              <div class="muc2">
                <div class="mucnho1">
                  <p class="loi"> •</p>
                  <p class="loi1">
                    <strong>
                      'Vua tôm' Minh Phú tính mở rộng thị phần nội địa
                    </strong>
                  </p>
                </div>

                <div class="mucnho2">
                  <p class="loi"> •</p>
                  <p class="loi2">
                    <strong>
                      Số người làm nhiều việc để đủ sống ở Bồ Đào Nha cao kỷ lục
                    </strong>
                  </p>
                </div>
              </div>
              <div class="mucnho3">
                <p class="loi"> •</p>
                <p class="loi3">
                  <strong>
                    Thái Lan, Philippines muốn đầu tư điện hạt nhân
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div class="cuc2">
            <div class="cuc1">
              <table class="khung1">
                <tr>
                  <th class="giavang">Giá vàng</th>
                  {/* <div class="chunho"> */}
                  <td class="mua">Mua</td>
                  <td class="ban">Bán</td>
                </tr>
                <tr>
                  <td class="thegioi">Thế Giới(USD/ounce)</td>
                  <td class="tien">2.192</td>
                  <td class="tien2">2.193</td>
                </tr>
                <tr>
                  <td class="vang">Vàng SJC (triệu đồng/lượng)</td>
                  <td class="tien3">78,9</td>
                  <td class="tien4">80,9</td>
                </tr>
              </table>
            </div>
            <div class=" cuc3">
              <table class="khungke2">
                <tr class="tien7">
                  <td class="laisuat">
                    <strong>Lãi suất tiết kiệm</strong>(%/năm)
                  </td>
                  <td>1</td>
                  <td>3</td>
                  <td>6</td>
                  <td>9</td>
                  <td>12</td>
                </tr>

                <tr class="tien6">
                  <td class="online">Online</td>
                  <td>3,6</td>
                  <td>3,8</td>
                  <td>4,7</td>
                  <td>4,8</td>
                  <td>5,3</td>
                </tr>
                <tr class="tien5">
                  <td class="taiquay">Tại quầy</td>
                  <td>3,5</td>
                  <td>3,7</td>
                  <td>4,5</td>
                  <td>4,7</td>
                  <td>5,2</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="tieudemenu">
            <div class="batdongsan">
              <p class="chinhsach">
                <strong>Bất Động Sản</strong>
              </p>
              <div class="khonggiansong">
                {Poem2.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div class="khungnhavuon">
            <div class="nhavuon">
              {/* <div class="vuoncay"> */}
              {listbai10}
              {/* <div class="caycanh">
                  <img
                    src="./images/cẫynh.jpg"
                    style={{ width: 220, height: 120 }}
                  />
                </div>
                <div class="chongnong">
                  <h1 class="lopxoe">
                    Nhà vườn 260 m2 với hệ mái 3 lớp xòe rộng chống nóng
                  </h1>
                  <p>
                    ĐỒNG NAI-Hệ mái lớn được làm phồng, phủ thêm lớp ngói chống
                    nóng và xòe rộng che phủ phần lớn các không gian ...
                  </p>
                </div> */}
              {/* </div> */}
            </div>
            <div class="chauau">
              <div class="nguoichauau">
                <h1 class="muanha">Người châu Âu vẫn khó mua nhà</h1>
                <p>
                  Được tăng lương năm nay nhưng khả năng mua nhà của người châu
                  Âu vẫn khó cải thiện khi giá bất động sản tăng và lãi vay còn
                  cao.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="thethao">
            <div class="bongda">
              <div class="daucham1">
                <p>•</p>
              </div>
              <div class="vuong1">
                <p>
                  <strong>
                    Thùy Linh thắng dễ trận ra quân giải Tây Ban Nha
                  </strong>
                </p>
              </div>
              <div class="chamvuong">
                <div class="daucham2">
                  <p>•</p>
                </div>
                <div class="vuong2">
                  <p>
                    <strong>Những dấu hiệu quá tải khi tập chạy</strong>
                  </p>
                </div>
              </div>
              <div class="chamhong">
                <div class="daucham3">
                  <p>•</p>
                </div>
                <div class="vuong3">
                  <p>
                    <strong>
                      HLV Park Hang-seo tránh câu hỏi trở lại tuyển Việt Nam
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="hopto">
            <div class="hopvua">
              <div class="menungang">
                <div class="thethao1">
                  <p>
                    <strong>Thể thao</strong>
                  </p>
                </div>
                <div class="tennis">
                  {Poem5.lines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="khunghlv">
              <div class="khungbaophap">
                <div class="hlv">
                  <div class="aoxanh">
                    {" "}
                    <img
                      src="./images/baophap.jpg"
                      style={{ width: 220, height: 120 }}
                    />
                  </div>
                </div>
                <div class="doituyen">
                  <h1 class="tragia">
                    Báo Pháp: 'Troussier trả giá vì kết quả thất vọng với Việt
                    Nam'
                  </h1>
                  <p>
                    Truyền thông Pháp cho rằng VFF sa thải HLV Philippe
                    Troussier là bất ngờ, nhưng có thể hiểu được dựa trên kết
                    ...
                  </p>
                </div>
              </div>
              <div class="phuongvinh">
                <div class="quocchien">
                  <h1 class="chinhphuc">
                    Phương Vinh, Quyết Chiến chuẩn bị chinh phục billiard châu Á
                  </h1>
                  <p>
                    Đương kim vô địch thế giới Bao Phương Vinh và Trần Quyết
                    Chiến lên đường sang Hàn Quốc chuẩn bị đán
                  </p>
                </div>
              </div>
            </div>
            <div class="giatgiay">
              <div class="khoi1">
                <div class="daucham4">
                  <p>•</p>
                </div>
                <div class="chu1">
                  <h1>Giặt giày chạy bộ thế nào cho đúng cách</h1>
                </div>
              </div>

              <div class="khoi2">
                <div class="daucham5">
                  <p>•</p>
                </div>
                <div class="chu2">
                  <h1>
                    Cầu thủ nghiện cờ bạc của Newcastle nhận thêm cáo buộc cá độ
                  </h1>
                </div>
              </div>
              <div class="khoi3">
                <div class="daucham6">
                  <p>•</p>
                </div>
                <div class="chu3">
                  <h1>
                    Cầu thủ nghiện cờ bạc của Newcastle nhận thêm cáo buộc cá độ
                  </h1>
                </div>
              </div>
            </div>
            <div class="khungthidau">
              <div class="thidau1">
                <div class="ngaymai">
                  <p class="ngaykia">Ngày mai, 02:00</p>
                </div>
                <div class="bang2">
                  <div class="banga">
                    <div class="al">
                      {" "}
                      <img
                        src="./images/bang1a.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="tihad">
                      <p style={{ margin: 0 }}>Al-Ittihad FC</p>
                    </div>
                  </div>
                  <div class="vong1">
                    <div class="fayha">
                      {" "}
                      <img
                        src="./images/bang1b.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="alfay">
                      <p style={{ margin: 0 }}>Al-Fayha</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="thidau2">
                <div class="ngaymai2">
                  <p class="ngaykia2">Ngày mai, 02:00</p>
                </div>
                <div class="bang22">
                  <div class="banga2">
                    <div class="al2">
                      {" "}
                      <img src="2a.png" style={{ width: 17, height: 12 }} />
                    </div>
                    <div class="tihad2">
                      <p style={{ margin: 0 }}>Al-Ettifaq</p>
                    </div>
                  </div>
                  <div class="vong12">
                    <div class="fayha2">
                      {" "}
                      <img src="2b.png" style={{ width: 17, height: 12 }} />
                    </div>
                    <div class="alfay2">
                      <p style={{ margin: 0 }}>Al-Ahli Jeddah</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thidau3">
                <div class="ngaymai23">
                  <p class="ngaykia23">Ngày mai, 17:00</p>
                </div>
                <div class="bang223">
                  <div class="banga23">
                    <div class="al23">
                      {" "}
                      <img
                        src="./images/3a.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="tihad23">
                      <p style={{ margin: 0 }}>HAGL</p>
                    </div>
                  </div>
                  <div class="vong123">
                    <div class="fayha23">
                      {" "}
                      <img
                        src="./images/3b.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="alfay23">
                      <p style={{ margin: 0 }}>Khánh Hòa</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thidau4">
                <div class="ngaymai234">
                  <p class="ngaykia234">Ngày mai, 18:00</p>
                </div>
                <div class="bang2234">
                  <div class="banga234">
                    <div class="al234">
                      {" "}
                      <img
                        src="./images/4a.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="tihad234">
                      <p style={{ margin: 0 }}>SLNA</p>
                    </div>
                  </div>
                  <div class="vong1234">
                    <div class="fayha234">
                      {" "}
                      <img
                        src="./images/4b.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="alfay234">
                      <p style={{ margin: 0 }}>Hải Phòng</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thidau5">
                <div class="ngaymai2345">
                  <p class="ngaykia2345">Ngày mai, 19:1</p>
                </div>
                <div class="bang22345">
                  <div class="banga2345">
                    <div class="al2345">
                      {" "}
                      <img
                        src="./images/5a.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="tihad2345">
                      <p style={{ margin: 0 }}>Thể Công</p>
                    </div>
                  </div>
                  <div class="vong12345">
                    <div class="fayha2345">
                      {" "}
                      <img
                        src="./images/5b.png"
                        style={{ width: 17, height: 12 }}
                      />
                    </div>
                    <div class="alfay2345">
                      <p style={{ margin: 0 }}>Quảng Nam</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="muiten">
                <p>^</p>
              </div>
            </div>
            <div class="hopgiaitri">
              <div class="khungthoitrang1">
                <div class="thanhmenu">
                  <div class="giaitri">
                    <h1>Giải Trí</h1>
                  </div>
                  <div class="thoitrang">
                    {Poem6.lines.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
                <div class="khungthoitrang2">
                  <div class="anhthoitrang">
                    <img
                      src="./images/guthoitrang.jpg"
                      style={{ width: 220, height: 120 }}
                    />
                  </div>
                  <div class="choidohieu">
                    <h1 class="dohieu">Gu chơi đồ hiệu của Jennifer Phạm</h1>
                    <p>
                      Hoa hậu Jennifer Phạm yêu thích các thiết kế nữ tính của
                      Dior, Louis Vuitton, sưu tầm nhiều túi Hermes.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div class="docsach">
                <div class="xemsach">
                  <p class="sach">
                    <strong>Sách</strong>
                  </p>
                  <div>
                    <div class="thuchoem">
                      <h2 class="choem">
                        'Thư cho em' - mối tình vượt hai thế kỷ của thiếu tướng
                        Hoàng Đan
                      </h2>
                      <p>
                        Tình yêu, nỗi nhớ và khát vọng đoàn tụ của vợ chồng
                        thiếu tướng Hoàng Đan trong chiến tranh được gửi ...{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="khungbacsi">
              <div class="khungdotquy">
                <div class="menusuckhoe">
                  <div class="suckhoe">
                    <h1 class="bacsi">Sức Khỏe</h1>
                  </div>
                  <div class="tintuc">
                    {Poem7.lines.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div class="khunghlv1">
                <div class="khungbaophap1">
                  <div class="hlv1">
                    <div class="aoxanh1">
                      {" "}
                      <img
                        src="./images/bacsi1.jpg"
                        style={{ width: 220, height: 120 }}
                      />
                    </div>
                  </div>
                  <div class="doituyen1">
                    <h1 class="tragia1">
                      Giành giật mạng sống cho bệnh nhân bỏng nặng
                    </h1>
                    <p>
                      THÀ NỘITrước mặt bác sĩ Hùng là hai anh em ruột được cha
                      mẹ quấn chăn kín người, thở hắt, toàn thân đen thui, bỏng
                      hơn 70% cơ thể do lửa ga.{" "}
                    </p>
                  </div>
                </div>
                <div class="phuongvinh1">
                  <div class="quocchien1">
                    <h1 class="chinhphuc1">
                      Kỹ năng cấp cứu người ngưng tim ngưng thở
                    </h1>
                    <p>
                      Để cứu người ngưng tim ngưng thở, cần ép tim bằng cách đan
                      hai tay đặt lên hõm ngực người bị nạn rồi nhấn dứt khoát,
                      liên tục đến ...{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="giatgiay1">
              <div class="khoi11">
                <div class="daucham41">
                  <p>•</p>
                </div>
                <div class="chu11">
                  <h1>
                    Lơ là chữa tiểu đường, người phụ nữ gặp biến chứng nặng
                  </h1>
                </div>
              </div>

              <div class="khoi21">
                <div class="daucham51">
                  <p>•</p>
                </div>
                <div class="chu21">
                  <h1>Có nên kiêng quan hệ để dự trữ tinh trùng?</h1>
                </div>
              </div>
              <div class="khoi31">
                <div class="daucham61">
                  <p>•</p>
                </div>
                <div class="chu31">
                  <h1>Kristen Stewart và người yêu đồng tính trữ đông trứng</h1>
                </div>
              </div>
            </div>
            <div class="khungcamnang">
              <div class="khungcamnangnho">
                <div class="camnang">
                  <p>Cẩm nang các bệnh:</p>
                </div>
                <div class="hohap">
                  <p class="hohap1">Hô Hấp</p>
                </div>
                <div class="taimuihong">
                  <p class="taimuihong1">Tai Mũi Họng</p>
                </div>
                <div class="dalieu">
                  <p class="dalieu1">Da Liễu</p>
                </div>
                <div class="tieuhoa">
                  <p class="tieuhoa1">Tiêu Hóa</p>
                </div>
                <div class="hopmuiten1">
                  <div class="coxuong">
                    <p class="coxuong1">Cơ Xươ</p>
                  </div>
                  <div class="hopmuiten">
                    <div class="muiten1">
                      <p class="muitentrai">^ </p>
                    </div>
                    <div class="muiten2">
                      <p class="muitenphai">^</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="khungbacsi3">
              <div class="khungdotquy3">
                <div class="menusuckhoe3">
                  <div class="suckhoe3">
                    <h1 class="bacsi3">Đời Sống</h1>
                  </div>
                  <div class="tintuc3">
                    <p class="baihocsong">Bài học sống</p>
                    <p class="toam">Tổ ấm</p>
                    <p class="tieudung">Tiêu Dùng</p>
                    <p class="cooking">Cooking</p>
                    <div class="muasam">
                      <p class="thongminh">Mua sắm thông minh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="khunghlv14">
                <div class="khungbaophap14">
                  <div class="hlv14">
                    <div class="aoxanh14">
                      {" "}
                      <img
                        src="./images/danhdan.jpg"
                        style={{ width: 220, height: 120 }}
                      />
                    </div>
                  </div>
                  <div class="doituyen14">
                    <h1 class="tragia14">
                      15 năm chuẩn bị cho ngày mình qua đời
                    </h1>
                    <p>
                      HÀ NỘI-Những ngày cuối tháng 3, Bích Hường bận rộn quay
                      một MV ca khúc do nhạc sĩ Nguyễn Cường phổ từ bài thơ do
                      chính bà sáng tác{" "}
                    </p>
                  </div>
                </div>
                <div class="phuongvinh14">
                  <div class="quocchien14">
                    <h1 class="chinhphuc14">
                      Người thầy và cậu học trò mắc bệnh ngủ rũ
                    </h1>
                    <p>
                      TRUNG QUỐC - Câu chuyện về một thầy giáo cõng học sinh mắc
                      bệnh ngủ rũ xuống 4 tầng lầu để về nhà đã gây xúc động với
                      người dùng ...{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="giatgiay12">
              <div class="khoi112">
                <div class="daucham412">
                  <p>•</p>
                </div>
                <div class="chu112">
                  <h1>Nem nắm Giao Thủy - đặc sản Nam Định</h1>
                </div>
              </div>
              <div class="khoi212">
                <div class="daucham512">
                  <p>•</p>
                </div>
                <div class="chu212">
                  <h1>Có nên mở cửa sổ khi bật máy hút mùi?</h1>
                </div>
              </div>
              <div class="khoi312">
                <div class="daucham612">
                  <p>•</p>
                </div>
                <div class="chu312">
                  <h1>Nuôi đá làm thú cưng</h1>
                </div>
              </div>
            </div>
            <div class="khungbacsi4">
              <div class="khungdotquy4">
                <div class="menusuckhoe4">
                  <div class="suckhoe4">
                    <h1>Giáo Dục</h1>
                  </div>
                  <div class="tintuc4">
                    {Poem8.lines.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div class="khunghlv141">
                <div class="khungbaophap141">
                  <div class="hlv141">
                    <div class="aoxanh141">
                      {" "}
                      <img
                        src="./images/longai.jpg"
                        style={{ width: 220, height: 120 }}
                      />
                    </div>
                  </div>
                  <div class="doituyen141">
                    <h1 class="tragia141">
                      Lo ngại sinh viên bỏ ngang đại học vì ham lương 5-10 triệu
                      đồng
                    </h1>
                    <p>
                      Hiệu trưởng Đại học Công nghệ lo nhiều sinh viên dính "bẫy
                      thu nhập trung bình", vì lương 5-10 triệu trước mắt ...{" "}
                    </p>
                  </div>
                </div>
                <div class="phuongvinh141">
                  <div class="quocchien141">
                    <h1 class="chinhphuc141">
                      Canada tăng tốc siết giấy phép việc làm với du học sinh
                    </h1>
                    <p>
                      Canada không cấp giấy phép làm việc sau tốt nghiệp cho
                      sinh viên chương trình liên kết công - tư từ ...{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="giatgiay121">
              <div class="khoi1121">
                <div class="daucham4121">
                  <p>•</p>
                </div>
                <div class="chu1121">
                  <h1>Giờ làm thêm của du học sinh các nước thế nào</h1>
                </div>
              </div>
              <div class="khoi2121">
                <div class="daucham5121">
                  <p>•</p>
                </div>
                <div class="chu2121">
                  <h1>Học IT nhưng muốn rẽ sang Marketing</h1>
                </div>
              </div>
              <div class="khoi3121">
                <div class="daucham6121">
                  <p>•</p>
                </div>
                <div class="chu3121">
                  <h1>Nữ sinh bị bạn tát, bắt quỳ trong ký túc xá</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thu4;
