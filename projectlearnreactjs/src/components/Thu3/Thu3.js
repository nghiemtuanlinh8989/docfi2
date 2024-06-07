import React, { useState, useEffect } from "react";
import axios from "axios";
import { Person1 } from "../Vnexdata4";
import { Person2 } from "../Vnexdata4";
import { Person3 } from "../Vnexdata4";
import { Person4 } from "../Vnexdata4";
import { NavLink } from "react-router-dom";
import './Thu3.css'

// import { Navigate, useNavigate } from "react-router-dom";
// export default function Thu3() {
  function Thu3() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://6646d2d451e227f23aaff22c.mockapi.io/123456/New');
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


 
   


  return (
    <div>
      
      <div class="chientren">
        <div class="chien">
          <div class="container1">
            <div class="muc1">
              <div class="bai1">
               
                <img
                  src={Person1. images}
                  style={{ width: 500, height: 359 }}
                />
                <div class="tapmuc">
                <NavLink to={"New1"} activeclassName="active"><h1 class="tap1">{Person1.name}</h1></NavLink> <br />
                  <p class="muc1">{Person1.content}</p>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="container2">
            <div class="muc22">
              <h1 class="tap22">{Person2.name}</h1>
              <div class="anh22">
               
                <img
                  src={Person2.images}
                  style={{ width: 260, height: 198 }}
                />
              </div>
            </div>
            <div class="muc33">
              <h1 class="tap33">{Person3.name}</h1>
              <img src={Person3.images} style={{ width: 260, height: 198 }} />
            </div>
            <div class="muc4">
              <h1 class="tap4">{Person4.name}</h1>
              <h2 class="tap5">{Person4.title}</h2>
              <p>{Person4.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Thu3;