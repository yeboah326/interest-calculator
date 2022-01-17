import React from "react";
import style from "../styles/components/interestname.module.css"

export default function InterestName({text}){
    return <React.Fragment><h2 className={style.interestName}>{text}</h2></React.Fragment>
}