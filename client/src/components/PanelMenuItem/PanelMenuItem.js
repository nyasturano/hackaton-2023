import { NavLink } from 'react-router-dom';
import './panelMenuItem.css';

const PanelMenuItem = ({path, children}) => {
    return(
        <NavLink activeClassName="active" className="panel-menu-item" to={path}>
            <button>{children}</button>
        </NavLink>
    );
}

export default PanelMenuItem;