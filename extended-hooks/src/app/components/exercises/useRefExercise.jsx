import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const measurementsRef = useRef();
    const [currentState, setCurrentState] = useState("false");
    const handleClick = () => {
        if (currentState === "false") {
            measurementsRef.current.style.width = "150px";
            measurementsRef.current.style.height = "80px";
            measurementsRef.current.innerHTML = "Text";
        } else {
            measurementsRef.current.style.width = "60px";
            measurementsRef.current.style.height = "40px";
            measurementsRef.current.innerHTML = "Блок";
        }
        setCurrentState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={measurementsRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-secondary" onClick={handleClick}>
                Изменить размеры
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
