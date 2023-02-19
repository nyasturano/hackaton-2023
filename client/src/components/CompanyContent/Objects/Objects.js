import './objects.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHttp } from '../../../hooks/http.hook';

import PrimaryLightButton from '../../PrimaryLightButton/PrimaryLightButton'
import Table from '../../Table/Table'

const Objects = () => {
    const [json, setJson] = useState();

    const {request} = useHttp();

    useEffect(() => {
        request(
            "http://localhost:5000/api/object/", 'GET'
        ).then(obj => setJson(obj));
    }, []);


    return (<div className="objects-wrapper">
        <Link to="reg">
             <PrimaryLightButton text={<div style={{width: '200px'}}>ЗАРЕГИСТРИРОВАТЬ ОБЪЕКТ</div>}/>
        </Link>
        <Table json={json}/>
    </div>);
}

export default Objects;