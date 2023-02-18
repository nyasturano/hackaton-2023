
import CompanyContent from '../../components/CompanyContent/CompanyContent';
import CompanyMenu from '../../components/CompanyMenu/CompanyMenu';

const Company = () => {
    return (
        <div className='company'>
            
            <CompanyMenu/>
            <div className='site-pages-block'>
                <div className='site-pages-name'>
                    Управляющая компания
                    <button>Выход</button>
                </div>
                
                <CompanyContent/>
            </div>
        </div>
    );
}

export default Company;