import './organizationPanel.css';

import Report from '../../components/OrganizationContent/Report/Report'
import Panel from '../../components/Panel/Panel'
import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Routes, Route } from "react-router";

import Profile from '../../components/Profile/Profile';

const OrganizationPanel = () => {
    return (
        <Panel>
        <PanelMenu>
            <PanelMenuItem path="profile">ПРОФИЛЬ</PanelMenuItem>
            <PanelMenuItem path="report">ОТЧЁТ</PanelMenuItem>
            {/* <PrimaryButton text={<div style={{margin: '0px 30px'}}>Выйти</div>}/> */}
        </PanelMenu>

        <PanelContent>
            <Routes>
                <Route path="/profile" element={<Profile role="ОРГАНИЗАЦИЯ"/>}/>
                <Route path="/report" element={<Report/>}/>
            </Routes>
        </PanelContent>
    </Panel>
    );
}

export default OrganizationPanel;