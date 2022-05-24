import { useSelector } from "react-redux";

export function useAuth() {
    const {id, token, email} =useSelector(state => state.user);
    return{
        isAuth: !!token,
        id,
        email,
        token,
    }
}