export default function Dautien() {
  const avatar = "./images/images.png";
  const avatar1 = "./images/tally-1 (2).png";
  const avatar2 = "./images/tally-1 (2).png";
  const avatar3 = "./images/tally-1 (2).png";
  const avatar4 = "./images/tally-1 (2).png";
  const avatar5 = "./images/1200x630wa.png";
  const avatar6 = "./images/tally-1 (2).png";

  return (
    <div>
      <div class="container">
        <div id="top-bar">
          <div id="logo">
            <img src={avatar} style={{ width: 180, height: 60 }} />
          </div>
          <div id="hanoi">
            <ul class="vanphuc">
              <li>
                <img src={avatar1} style={{ width: 2, height: 30 }} />
              </li>
              <li>Thứ hai, 25/3/2024</li>
              <li>
                <img src={avatar2} style={{ width: 2, height: 30 }} />
              </li>
              <li>
                Hà Nội<i class="fa fa-angle-up"></i>
              </li>
              <li>
                <i class="fas fa-cloud-moon-rain"></i>25o
              </li>
            </ul>
          </div>
        </div>

        <div id="hcm">
          <ul class="vanbao">
            <li>Mới nhất</li>
            <img src={avatar3} style={{ width: 2, height: 30 }} />
            <li>Tin theo khu vực</li>
            <img src={avatar4} style={{ width: 2, height: 30 }} />
            <li>
              <img src={avatar5} style={{ width: 30, height: 18 }} />
              International
            </li>
            <img src={avatar6} style={{ width: 2, height: 30 }} />
            <li>
              <i class="fas fa-search"></i>
            </li>
            <li>
              <i class="far fa-user"></i>
            </li>
            <li>Đăng nhập</li>
            <li>
              <i class="far fa-bell"></i>
            </li>
          </ul>
        </div>
      </div>
    
    </div>

  );
}
