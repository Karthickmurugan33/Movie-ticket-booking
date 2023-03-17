import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../components/style/faf.module.css"
import Pay from "./Pay";

const Output = (props) => {
    const [valid, setValid] = useState(false);
    const Ref = useRef(null); const [timer, setTimer] = useState("00:00:00");
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return { total, hours, minutes, seconds, };
    };
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) { setTimer((hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds)); }
    };
    const clearTimer = (e) => {
        setTimer("00:00:10");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000); Ref.current = id;
    }; const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10); setTimeout(() => { setValid(true) }, 10000)
        return deadline;
    }; useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const data = useSelector((state) => {
        return state.ui.seatData.join(",")
    })
    return (
        <div className="App">
            {!valid && <div className={`${style.time}`}><h2>{timer}</h2>
                <h2 className={`${style.infos}`}>{`SELECTED SEATS--${data}- TOTAL PRICE IS --${200 * props.show.length} `}</h2></div>}
            {!valid && <Link to={"/booked"}> <h1 className={`${style.alert}`}>PAY NOW..!</h1></Link>}
            {valid && <Link to={"/book"}>Select seat Again</Link>}
        </div >
    );
};

export default Output;