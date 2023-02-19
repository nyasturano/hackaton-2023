import './contractorPanel.css';
import Panel from '../../components/Panel/Panel'
import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Routes, Route } from "react-router";

const ContractorPanel = () => {

    return(
        <Panel>
            <PanelMenu>
                <PanelMenuItem path="profile">ПРОФИЛЬ</PanelMenuItem>
                <PanelMenuItem path="announcement">ОБЪЯВЛЕНИЯ</PanelMenuItem>
                <PanelMenuItem path="projects">ПРОЕКТЫ</PanelMenuItem>
                <PrimaryButton text={<div style={{margin: '0px 30px'}}>Выйти</div>}/>
            </PanelMenu>

            <PanelContent>
                <Routes>
                   
                </Routes>
            </PanelContent>
        </Panel>
    );

   
}

export default ContractorPanel;