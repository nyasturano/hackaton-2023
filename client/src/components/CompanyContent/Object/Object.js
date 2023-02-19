import './object.css'

import {useEffect} from 'react'
import {useHttp} from '../../../hooks/http.hook'
const Object = ({id}) => {
    const {request} = useHttp();

    useEffect(() => {
        request()
    }, []);
}

export default Object;