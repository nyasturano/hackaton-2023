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
                <PanelMenuItem>ОБЪЯВЛЕНИЯ</PanelMenuItem>
                <PanelMenuItem>МОЕ ЖИЛИЩЕ</PanelMenuItem>
                <PanelMenuItem>ПОКАЗАНИЯ</PanelMenuItem>
                <PanelMenuItem>ДОСТУП В ЖК</PanelMenuItem>
                <PanelMenuItem>СОЗДАТЬ ОБРАЩЕНИЕ</PanelMenuItem>
            </PanelMenu>

            <PanelContent>
                <PrimaryLightButton/>
            </PanelContent>
        </Panel>
    );

   
}

export default CompanyPanel;