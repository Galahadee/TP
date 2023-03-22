import React from "react";

const ListItem=(info)=>{
    const email=info.user.email;
    const phone=info.user.phone;
    const category=info.user.category;
    const country=info.user.country;
    const city=info.user.city;
    const photo=info.user.photo;
    const firstName=info.user.firstname;
    const lastName=info.user.lastname;
    const birthday=info.user.birthdate;

    return (
        <div>
            <p>{category}</p>
            <h1>{lastName} {firstName}</h1>
            <p>(39 ans)</p>
            <p>{city}, {country}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>Anniversaire : {birthday}</p>
        </div>
    )
}


export default ListItem;