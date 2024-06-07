import React from "react";
import "./NewsDetails.css";
import { Vnexdata1 } from "../../Page/Vnexdata3";
import { useState, useEffect } from "react";
import axios from "axios";
import { Talk1 } from "../../Page/Vnexdata3";
import { Talk2 } from "../../Page/Vnexdata3";
import { Talk3 } from "../../Page/Vnexdata3";
import { Talk4 } from "../../Page/Vnexdata3";
import { pepe1 } from "../../Page/Vnexdata3";
import { pepe2 } from "../../Page/Vnexdata3";
import { pepe3 } from "../../Page/Vnexdata3";
import { pepe4 } from "../../Page/Vnexdata3";
import { pepe5 } from "../../Page/Vnexdata3";
import { pepe6 } from "../../Page/Vnexdata3";

import { Link } from "react-router-dom";

 function News_Details() {
  const [data, setData] = useState([]);
  // const navigate =useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://6646d2d451e227f23aaff22c.mockapi.io/123456/linh');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(()=>{
    console.log(data)
},[data])
  const listbai2 = Vnexdata1.map((item) => (
    <li key={item.id} id="hinhnen-li">
      {item.title}
    </li>
  ));

  const bainoidung1 = pepe1.map((person) => <p>{person}</p>);
  const bainoidung2 = pepe2.map((person) => <p>{person}</p>);
  const bainoidung3 = pepe3.map((person) => <p>{person}</p>);
  const bainoidung4 = pepe4.map((person) => <p>{person}</p>);
  const bainoidung5 = pepe5.map((person) => <p>{person}</p>);
  const bainoidung6 = pepe6.map((person) => <p>{person}</p>);

  const anh1 = "./images/anhbao2.png";
  const anh2 = "./images/congnhan.jpg";
  const anh3 = "./images/phai1.jpg";
  const anh4 = "./images/anhphAI2.jpeg";
  const anh5 = "./images/anhphai3.png";
  const anh6 = "./images/Mobile_400x500.webp";
  const text1 = "seasand202Vinh";
  const text2 = "Mr Nhut - tcvn";
  const text3 = "GT";
  const text4 = "H";
  return (
    <div class="container3">
      <header class="thanhdoc">
        <ul class="hinhnen">
          {listbai2}
          {/* <li>
            <i class="fa-brands fa-facebook" />
          </li>
          <li>
            <i class="fa-brands fa-square-twitter" />
          </li>
          <li>
            <i class="fa-brands fa-linkedin" />
          </li>
          <li>
            <i class="fa-solid fa-bookmark" />
          </li>
          <li>
            <i class="fa-solid fa-message" />
            <p class="so">61</p>
          </li>
          <li>
            <i class="fa-solid fa-message" />
          </li>
          <li>
            <i class="fa-sharp fa-solid fa-arrow-left" />
          </li> */}
        </ul>
      </header>
      <div class="container4">
        <div class="thoisu">
          <p class="thoisu1">{bainoidung3}</p>
          <p class="thoisu4">{bainoidung4}</p>
        </div>
        <div class="dexuat">
          <Link to={"New2"}>
            <h1 class="lamdao">{Talk1.name}</h1>
          </Link>

          <img src={anh1} style={{ width: 900, height: 500 }}></img>
          <div class="baitap1">
            {bainoidung1}

            <img src={anh2} style={{ width: 900, height: 500 }}></img>
            {bainoidung2}
          </div>
        </div>
      </div>

      <div class="khungphai3">
        <div class="khungphai2">
          <div class="quantam">
            <p class="chumaudo">{bainoidung5}</p>
            <p class="chumaudo2">{bainoidung6}</p>
          </div>
          <div class="nguoive">
            <div class="nguoive1">
              <img src={anh3} style={{ width: 30, height: 30 }} />
            </div>

            <p class="chunguoive">
              <strong>{text1}</strong> Danh các nhà khoa học được Giải thưởng Tạ
              Quang Bửu 2024 với công trình nghiên cứu xuất sắc. uy tín bị ảnh
              TP HCM Đối tác"
            </p>
          </div>
          <div class="ngontay">
            <ul class="ngontay1">
              <li>{Talk2.name}Thích</li>

              <li>
                {Talk3.name}
                12
              </li>

              <li>Trả Lời {Talk4.name}</li>
            </ul>
          </div>
          <div class="nguoive2">
            <div class="nguoive3">
              <img src={anh4} style={{ width: 30, height: 30 }} />
            </div>

            <p class="chunguoive1">
              <strong>{text2}</strong>
              Hiện nay Miền Tây đang gặp vấn đề nan giải là xâm thực mặn nên rất
              mong các nhà khoa học nghiên cứu đưa các giống cây trồng phù hợp
              trong thời gian nhanh nhất. Chứ năm nào cũng nghe Bà con thất thu
              thì thật sự rất đau lòng
            </p>
          </div>
          <div class="ngontay2">
            <ul class="ngontay3">
              <li>{Talk2.name}Thích</li>

              <li>{Talk3.name}7</li>

              <li>Trả Lời {Talk4.name}</li>
            </ul>
          </div>
          <div class="nguoive4">
            <div class="nguoive5">
              <img src={anh5} style={{ width: 30, height: 30 }} />
            </div>

            <p class="chunguoive2">
              <strong>{text3}</strong> Khi nói đến đổi mới, sáng tạo thì mọi
              người hay liên tưởng đến những thứ xa xôi mà không nghĩ cần đổi
              mới, sáng tạo từ những công việc đơn giản hàng ngày. Nếu không thể
              đổi mới, sáng tạo từ những cái nhỏ nhất thì không thể hy vọng tạo
              nên những đột phá lớn.
            </p>
          </div>
          <div class="ngontay4">
            <ul class="ngontay5">
              <li>{Talk2.name}Thích</li>

              <li>Trả Lời {Talk4.name}</li>
            </ul>
          </div>
          <div class="nguoive6">
            <div class="nguoive7">
              <div class="chuH">H</div>
            </div>

            <p class="chunguoive3">
              <strong>{text4}</strong> Khi nói đến đổi mới, sáng tạo thì mọi
              người hay liên tưởng đến những thứ xa xôi mà không nghĩ cần đổi
              mới, sáng tạo từ những công việc đơn giản hàng ngày. Nếu không thể
              đổi mới, sáng tạo từ những cái nhỏ nhất thì không thể hy vọng tạo
              nên những đột phá lớn.
            </p>
          </div>
          <div class="ngontay6">
            <ul class="ngontay7">
              <li>{Talk2.name}Thích</li>

              <li>Trả Lời {Talk4.name}</li>
            </ul>
          </div>
          <div class="thanhinput1">
            <input
              class="linhinput2"
              type="text"
              id="i2"
              placeholder="Xem Thêm ý Kiến"
              style={{ fontSize: 18, paddingLeft: 90 }}
            ></input>
          </div>
          <div class="thanhinput">
            <input
              class="linhinput1"
              type="text"
              id="i1"
              placeholder="Chia Sẻ ý Kiến Của bạn"
              style={{ fontSize: 18, paddingLeft: 20 }}
            ></input>
          </div>
        </div>
        <div class="anhnen2">
          <img src={anh6} style={{ width: 350, height: 800 }} />
        </div>
      </div>
    </div>
  );
}
export default News_Details;