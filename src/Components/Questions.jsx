import React from "react";
import cls from "../Styles/Questions.modules.scss";

 export const Questions = () => {
    return(
        <section>
            <div className="questionsContainer">
            <h2>Остались вопросы?</h2>
            <p>Заполните форму и менеджер свяжется с вами в ближайшее время.</p>
            <div className="questionsBtns">
                <button>Задать вопрос</button>
                <button>Позвонить</button>
            </div>
            </div>
        </section>
    )
}