import './organizationPanel.css';

import Report from '../../components/OrganizationContent/Report/Report'

const OrganizationPanel = () => {
    <Panel>
        <PanelMenu>
            <PanelMenuItem path="profile">ПРОФИЛЬ</PanelMenuItem>
            <PanelMenuItem path="report">ОТЧЁТ</PanelMenuItem>
            <PrimaryButton text={<div style={{margin: '0px 30px'}}>Выйти</div>}/>
        </PanelMenu>

        <PanelContent>
            <Routes>
                <Route path="/report" element={<Report/>}/>
            </Routes>
        </PanelContent>
    </Panel>
}

export default OrganizationPanel;