import { Link } from 'react-router-dom';
import './table.css';

const Table = ({json}) => {

    // const json = [
    //     {
    //         "id": 0,
    //         "login": "admin",
    //         "password": "$2a$05$rZgmuMpMcyZGXhdtCHcD8em0I1a0YM89e7.BS40o8D48jFWBdUbF2",
    //         "role": "ADMIN",
    //         "createdAt": "2023-02-18T01:55:54.515Z",
    //         "updatedAt": "2023-02-18T01:55:54.515Z"
    //     },
    //     {
    //         "id": 0,
    //         "login": "admin",
    //         "password": "$2a$05$rZgmuMpMcyZGXhdtCHcD8em0I1a0YM89e7.BS40o8D48jFWBdUbF2",
    //         "role": "ADMIN",
    //         "createdAt": "2023-02-18T01:55:54.515Z",
    //         "updatedAt": "2023-02-18T01:55:54.515Z"
    //     }
    // ];

    if (!json || json.count === 0) {
        return <div className="table-warning">В таблице еще нет записей</div>
    }
    
    let columns = Object.keys(json[0]).map(key => {
        return (
            <td key={key}>{key}</td>
        );
    });

    columns.pop();
    columns.pop();

    let rows = json.map((obj, index) => {
        const row = Object.values(obj).map((value, index) => {
            if (!index) {
                return <td key={index}>
                    <Link to="object">
                        {value}
                    </Link>
                </td>;
            } else {
                return <td key={index}>{value}</td>;
            }
        });
        row.pop();
        row.pop();
        return <tr key={index}>{row}</tr>;
    });


    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        {columns}
                    </tr>
                </thead>
                <tbody>
                    {rows}        
                </tbody>
            </table>
        </div>
    );
};

export default Table;