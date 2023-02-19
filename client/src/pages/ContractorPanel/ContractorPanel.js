import './contractorPanel.css';
import Panel from '../../components/Panel/Panel'
import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Routes, Route } from "react-router";
import Profile from '../../components/Profile/Profile';

const ContractorPanel = () => {

    return(
        <Panel>
            <PanelMenu>
                <PanelMenuItem path="profile">ПРОФИЛЬ</PanelMenuItem>
                <PanelMenuItem path="announcement">ОБЪЯВЛЕНИЯ</PanelMenuItem>
                <PanelMenuItem path="projects">ПРОЕКТЫ</PanelMenuItem>
            </PanelMenu>

            <PanelContent>
                <Routes>
                    <Route path="/profile" element={<Profile role="ПОДРЯДЧИК"/>}/>
                   
                </Routes>
            </PanelContent>
        </Panel>
    );

   
}

export default ContractorPanel;