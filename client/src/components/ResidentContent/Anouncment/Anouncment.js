import './anouncment.css';
const Anouncment = ({name, date, text}) => {
    return(
        <div className='anouncment'>
            <div className='name'>
                {name}
            </div>
            <div className='date'>
                {date}
            </div>
            <div className='text'>
                {text}
            </div>
        </div> 
    );
} 

export default Anouncment;