import React, { useState } from "react";
// import "../assets/styles/login.css";

function message(params) {
    return (
        <div className={params.type == 'error' ? "error" : 'success'}>
            <p >{params.message}</p>
        </div>
    );
}
export default message;
