import ResidentMenu from '../../components/ResidentMenu/ResidentMenu';
import ResidentContent from '../../components/ResidentContent/ResidentContent';
import './resident.css';

const Resident = () => {
    return(
        <div className='site-pages'>
            
            <ResidentMenu/>
            <div className='site-pages-block'>
                <div className='site-pages-name'>
                    ЖИЛЕЦ
                    <button>Выход</button>
                </div>
                
                <ResidentContent/>
            </div>
        </div>
    );
}

export default Resident;