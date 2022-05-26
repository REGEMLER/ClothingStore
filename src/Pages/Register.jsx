import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {setUser} from "../redux/user/reducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import cls from "../Styles/Styles.modules.scss";


const Register = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const [err, setErr] = useState(false);
    const auth = getAuth();

    const handleClose = () => navigate('/'); 


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
            );
            navigate('/login');
            setErr(false);
        })
        .catch(()=>{
            setErr(true)
        })
    }

    return(
        <>
            <div className="reg-container">
                <form action="" method="get" name="form1" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Регистрация</legend>
                        <label for="form1_email">Введите электронный адрес:<input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" name="form1_email" id="form1_email" placeholder="www@example.com"/></label>
                        <label for="form1_pass">Придумайте пароль:<input type="password" name="form1_pass" id="form1_pass" value={pass} onChange={(e)=> setPass(e.target.value)}/></label>
                        {err ? <p className="error">Некорректные данные</p> : null}
                        <button className="register-btn" onClick={()=>handleRegister(mail,pass)}>Зарегистрироваться</button>
                        <button className="register-btn" onClick={handleClose}>Отмена</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Register;