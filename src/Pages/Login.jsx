import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, setLogin } from "../redux/user/reducer";
import { Link } from "react-router-dom";
import cls from "../Styles/Forms.module.scss";


const Login = () => {
    const [pass, setPass] = useState("");
    const [mail, setMail] = useState("");
    const [err, setErr] = useState(false);
    const [name, setName] = useState("Guest");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUser(mail, pass);
        handleLogin(e);
    }

    const handleUser = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken
                    })
                );
                navigate('/catalog');
                setErr(false);
            })
            .catch(() => {
                setErr(true)
            })
    }
    const handleLogin = (e) => {
        setName(e.target.value);
        dispatch(setLogin(name));
    }

    return (
        <>
            <div className={cls.regContainer}>
                <form onSubmit={handleSubmit} action="" method="get" name="form1">
                    <fieldset>
                        <legend>Вход</legend>
                        <p>Нет аккаунта?</p><Link to="/register">Зарегистрируйтесь</Link>
                        <label htmlFor="form1_mail">Введите Ваш email <input type="email" name="form1_mail" required placeholder="www@example.gmail.com" value={mail} onChange={(e) => setMail(e.target.value)} /></label>
                        <label htmlFor="form1_pass">Пароль<input type="password" name="form1_pass" id="form1_pass" value={pass} onChange={(e) => setPass(e.target.value)} /></label>
                        <label htmlFor="form1_name">Имя пользователя<input type="text" name="form1_name" placeholder="Имя пользователя" value={name} onChange={handleLogin} /></label>
                        {err ? <p className={cls.error}>Некорректные данные</p> : null}
                        <button className={cls.registerBtn} onClick={() => handleUser(mail, pass)}>Войти</button>
                        <button className={cls.registerBtn} onClick={() => navigate('/')}>Отмена</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Login;