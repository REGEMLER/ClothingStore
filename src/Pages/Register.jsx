import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {setUser} from "../redux/user/reducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import cls from "../Styles/Styles.modules.scss";


const Register = () => {
    const dispatch = useDispatch(); 
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const auth = getAuth();
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleRegister(mail,pass);
    }
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log(user);
            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                })
            )
        })
        .catch(console.error)
    }

    return(
        <>
            <div className="reg-container">
                <form action="" method="get" name="form1" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Регистрация</legend>
                        <label for="form1_name">Ваше имя: <input type="text" name="form1_name" required placeholder="Наберите ваше имя"/></label>
                        <label for="form1_pass">Придумайте пароль:<input type="password" name="form1_pass" id="form1_pass" value={pass} onChange={(e)=> setPass(e.target.value)}/></label>
                        <label for="form1_email">Введите электронный адрес:<input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" name="form1_email" id="form1_email" placeholder="WWW@example.com"/></label>
                        <button className="register-btn" onClick={()=>handleRegister(mail,pass)}>Зарегистрироваться</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Register;