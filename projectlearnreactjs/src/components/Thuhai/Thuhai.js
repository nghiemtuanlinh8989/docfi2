import "./Thu2.css";
import { Vnexdata2 } from "../Vnexdata4";
export default function Thuhai() {
  const listbai2 = Vnexdata2.map((item) => (
    <li key={item.id} id="menu-li">
      {item.title}
    </li>
  ));

  return (
    <ul id="menu">
      <i class="fas fa-home" style={{ width: 40, fontsize: 15 }}></i>
      {listbai2}
      <i class="fas fa-bars" style={{ fontsize: 19 }}></i>
    </ul>
  );
}
