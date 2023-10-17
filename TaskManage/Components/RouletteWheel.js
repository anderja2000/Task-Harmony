import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
    { option: '1' },
    { option: '2' },
    { option: '3' },
];
export default function RouletteWheel() {
    const [angle, setAngle] = useState(0);

    const onSpin = () => {
        const newAngle = Math.floor(Math.random() * 360);
        setAngle(newAngle);
    }
    return (
        <Wheel
            data={data}
            angle={angle}
            onSpin={onSpin}
        />
    )
}