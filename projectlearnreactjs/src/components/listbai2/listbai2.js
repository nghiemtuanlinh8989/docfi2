import { Vnexdata1 } from "../../Page/Vnexdata3";
export default function listbai2(){

const listbai2 = Vnexdata1.map((item) => (
    <li key={item.id} id="hinhnen-li">
      {item.title}
    </li>
  ));

return(
  <>
  {listbai2}
  </>
)

 }
