import './organizations.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHttp } from '../../../hooks/http.hook';

import PrimaryLightButton from '../../PrimaryLightButton/PrimaryLightButton'
import Table from '../../Table/Table'

const Organizations= () => {
    const [json, setJson] = useState();

    const {request} = useHttp();
    useEffect(() => {
        //request
        //setjson
    }, []);

    return (<div className="org-wrapper">
        <Link to="reg">
             <PrimaryLightButton text={<div style={{width: '200px'}}>ЗАРЕГИСТРИРОВАТЬ ОРГАНИЗАЦИЮ</div>}/>
        </Link>
        <Table json={json}/>
    </div>);
}

export default Organizations