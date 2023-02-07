import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = React.useState<any[]>([]);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();

  const api = 'https://63e2c6c265ae493177047cc6.mockapi.io/api/v1/tuwiaq/users';

  React.useEffect(() => {
    Get
  }, []);


  const Get = () => { 
    axios.get(api).then(res => {
        setData(res.data)
    })
}

  const Post = () => {
    axios
      .post(api, {
        firstName,
        lastName,
        email,
        phone,
      })
      .then((res) => {
        Get()
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(api).then((res) => {
      console.log(res);
    });
  };

  function Delete(id: string) {
    axios.delete(api + `/${id}`).then((res) => {
      setData(data.filter((d) => d.id !== id));
    });
  }

  return (
    <div>
      <div className="center">
        <h2>بيانات التواصل</h2>
        <input
          type="text"
          placeholder="الاسم"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="اسم العائلة"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="البريد الاكتروني"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="رقم التواصل"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={Post}>
          تسجيل البيانات
        </button>

        {/* <p>مرحبا:{((firstName as string) + ' ' + lastName) as string}</p>
        <p>البريد المسجل :{email}</p>
        <p>الرقم المسجل :{phone}</p> */}
      </div>
      <div>
        {data.map((d: any) => (
          <div key={d.id} className={"center2"}>
            <ul>
              <li>
                الاسم : {d.firstName} {d.lastName}
              </li>
              <li>الايميل :{d.email}</li>
              <li>رقم التواصل :{d.phone}</li>
            </ul>
            <button
              onClick={() => {
                Delete(d.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
