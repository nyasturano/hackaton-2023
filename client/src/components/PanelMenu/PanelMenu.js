import './panelMenu.css';

const PanelMenu = ({children}) => {

    return(
        <div className="panel-menu">
            {children}
        </div>
    );
}

export default PanelMenu;