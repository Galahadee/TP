import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { sumUser } from "../store/userSlice"

const User = ({ user }) => {

    // const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [number,setNumber]=useState(0);

    // useEffect(()=>{})
//    {show&&
//             <p>test</p>

//             }
const handleClick = () => {
     setShow(!show)
     setNumber(user.name.length+user.username.length)
    }

    // console.log(user)
    return (
        <div>
            <p >{user.name}</p>
            <p >{user.username}</p>
            <button onClick={handleClick}> SUM</button>         
            {show &&
            // console.log(show)
                <p>{number}</p>
            }
        </div>
    )
};

export default User;