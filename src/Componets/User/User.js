"use client"
import Link from "next/link";
// import Link from "next/link";
import { useEffect, useState } from "react";

const User = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
    },[])

    return (
        <div>
            <p> total User {users.length} </p>
                
                {users.map((user)=>(

<div key={user.id} className="card w-[70%] mt-2 mx-auto bg-base-100 shadow-xl">
<div className="card-body">
  <h2 className="card-title"> {user.name} </h2>
  <p> {user.username} </p>
  <p> {user.email} </p>
  <p> {user. address.city} </p>
  <div className="card-actions justify-end">



  </div>
</div>
</div>

                ))}

        </div>
    );
};

export default User;