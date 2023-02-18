import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import Panel from '../../components/Panel/Panel'
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryLightButton from "../../components/PrimaryLightButton/PrimaryLightButton";


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