import { useSelector, useDispatch } from 'react-redux';
import { setRole } from "../actions/index";
import { useHttp } from "../hooks/http.hook";

export const useAuth = (targetRole) => {
    const {userRole} = useSelector(state => state);
    const {request} = useHttp();
    const dispatch = useDispatch();

    const checkRole = () => {
        request('http://localhost:5000/api/user/auth', 'GET', null, {'Authorization': 'Bearer ' + localStorage.getItem('token') }
            ).then(({token, role}) => {
                console.log(role);
                localStorage.setItem('token', token);
                if (userRole != role) {
                    dispatch(setRole(role));
                }
                return targetRole === userRole;
        }).catch(e => {
            console.log(e);
            return false;
        })
    }

    return {checkRole};

}
