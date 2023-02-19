import './announcement.css';
const Announcement = ({name, date, text}) => {
    return(
        <div className='announcement'>
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

export default Announcement;