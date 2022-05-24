import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../redux/user/reducer";
import {Link} from  "react-router-dom";
import cls from "../Styles/Styles.modules.scss";


const Login = ({handleClose}) => {
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const dispatch = useDispatch(); 

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClose(); 
        handleLogin(mail, pass);
    }
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            console.log(user);
            dispatch(
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken 
                })
            )
        })
        .catch(console.error)
    }

    return(
        <>
            <div className="reg-container">
                <form onSubmit={handleSubmit} action="" method="get" name="form1">
                    <fieldset>
                        <legend>Вход</legend>
                        <p>Нет аккаунта?</p><Link to="/register">Зарегистрируйтесь</Link>
                        <label for="form1_name">Имя пользователя или email <input type="text" name="form1_name" required placeholder="Имя пользователя" value={mail} onChange={(e)=> setMail(e.target.value)}/></label>
                        <label for="form1_pass">Пароль<input type="password" name="form1_pass" id="form1_pass" value={pass} onChange={(e)=> setPass(e.target.value)}/></label>
                        <button className="register-btn" onClick={()=>handleLogin(mail,pass)}>Войти</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Login;