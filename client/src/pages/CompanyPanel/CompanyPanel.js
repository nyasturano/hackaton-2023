import Panel from '../../components/Panel/Panel'
import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryLightButton from "../../components/PrimaryLightButton/PrimaryLightButton";
import { Routes, Route } from "react-router";
import Organizations from '../../components/CompanyContent/Organizations/Organizations'
import Objects from '../../components/CompanyContent/Objects/Objects'
import Management from '../../components/CompanyContent/Management/Management'
import Contractors from '../../components/CompanyContent/Contractors/Contractors'
import Automatization from '../../components/CompanyContent/Automatization/Automatization'
import Appeals from '../../components/CompanyContent/Appeals/Appeals'
import Announcement from '../../components/CompanyContent/Announcement/Announcement'



const CompanyPanel = () => {

    return(
        <Panel>
            <PanelMenu>
                <PanelMenuItem path="profile">ПРОФИЛЬ</PanelMenuItem>
                <PanelMenuItem path="objects">ОБЪЕКТЫ</PanelMenuItem>
                <PanelMenuItem path="organizations">ОРГАНИЗАЦИИ</PanelMenuItem>
                <PanelMenuItem path="contractors">ПОДРЯДЧИКИ</PanelMenuItem>
                <PanelMenuItem path="management">УПРАВЛЕНИЕ</PanelMenuItem>
                <PanelMenuItem path="automatization">АВТОМАТИЗАЦИЯ</PanelMenuItem>
                <PanelMenuItem path="appeals">ОБРАЩЕНИЯ</PanelMenuItem>
                <PanelMenuItem path="announcement">СДЕЛАТЬ ОБЪЯВЛЕНИЕ</PanelMenuItem>
                <PrimaryLightButton/>
            </PanelMenu>

            <PanelContent>
                <Routes>
                    <Route path="/organizations" element={<Organizations/>}/>
                    <Route path="/objects" element={<Objects/>}/>
                    <Route path="/management" element={<Management/>}/>
                    <Route path="/contractors" element={<Contractors/>}/>
                    <Route path="/automatization" element={<Automatization/>}/>
                    <Route path="/appeals" element={<Appeals/>}/>
                    <Route path="/announcement" element={<Announcement/>}/>
                </Routes>
            </PanelContent>
        </Panel>
    );

   
}

export default CompanyPanel;