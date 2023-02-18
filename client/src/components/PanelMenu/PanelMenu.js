import './panelMenu.css';

const PanelMenu = ({children}) => {

    return(
        <div className="panel-menu-wrapper">
            <div className="panel-menu">
                {children}
            </div>
        </div>
    );
}

export default PanelMenu;