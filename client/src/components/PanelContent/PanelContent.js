import './panelContent.css';

const PanelContent = ({children}) => {
    return(
        <div className="panel-content">
            {children}
        </div>
    );
}

export default PanelContent;