import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import Panel from '../../components/Panel/Panel'
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryLightButton from "../../components/PrimaryLightButton/PrimaryLightButton";
import NoPermission from "../NoPermission/MoPermission";
import { Navigate, useNavigate } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { setRole } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import { useAuth } from "../../hooks/useAuth";

const CompanyPanel = () => {

    return(
        <Panel>
            <PanelMenu>
                <PanelMenuItem>ПРОФИЛЬ</PanelMenuItem>
                <PanelMenuItem>ОБЪЕКТЫ</PanelMenuItem>
                <PanelMenuItem>ОРГАНИЗАЦИИ</PanelMenuItem>
                <PanelMenuItem>ПОДРЯДЧИКИ</PanelMenuItem>
                <PanelMenuItem>УПРАВЛЕНИЕ</PanelMenuItem>
                <PanelMenuItem>АВТОМАТИЗАЦИЯ</PanelMenuItem>
                <PanelMenuItem>ОБРАЩЕНИЯ</PanelMenuItem>
                <PanelMenuItem>СДЕЛАТЬ ОБЪЯВЛЕНИЯ</PanelMenuItem>
                <PrimaryLightButton/>
            </PanelMenu>

            <PanelContent>
            </PanelContent>
        </Panel>
    );

   
}

export default CompanyPanel;