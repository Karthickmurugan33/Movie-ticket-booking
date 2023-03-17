import React from 'react'
import { useSelector } from 'react-redux'
import Output from './Output';
import style from "../components/style/faf.module.css"


const Pay = () => {
    let show = useSelector((state) => {
        return state.ui.seatData

        // return state.seatData.seatData;
    });
    console.log(show);

    return (
        <div> <p className={`${style.info}`}>Pleace pay before timing running out</p>
            <Output show={show} />

        </div>
    )
}

export default Pay