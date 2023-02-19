import './residentPanel.css'

import MeterReadings from '../../components/ResidentContent/Meter/MeterReadings';
import MyApartment from '../../components/ResidentContent/MyApartment/MyApartment';
import Appeal from '../../components/ResidentContent/Appeal/Appeal';
import Panel from '../../components/Panel/Panel'
import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Announcement from '../../components/ResidentContent/Announcement/Announcement';
import { Routes, Route } from "react-router";
import Profile from '../../components/Profile/Profile';

const ResidentPanel = () => {
    return (
        <Panel>
        <PanelMenu>
            <PanelMenuItem path="profile">ПРОФИЛЬ</PanelMenuItem>
            <PanelMenuItem path="announcement">ОБЪЯВЛЕНИЯ</PanelMenuItem>
            <PanelMenuItem path="myApartment">МОЕ ЖИЛИЩЕ</PanelMenuItem>
            <PanelMenuItem path="meterReadings">ПОКАЗАНИЯ</PanelMenuItem>
            <PanelMenuItem path="access">ДОСТУП В ЖК</PanelMenuItem>
            <PanelMenuItem path="appeal">СОЗДАТЬ ОБРАЩЕНИЕ</PanelMenuItem>
            {/* <PrimaryButton text={<div style={{margin: '0px 30px'}}>Выйти</div>}/> */}
        </PanelMenu>

        <PanelContent>
            <Routes>
                <Route path="/profile" element={<Profile role="ЖИТЕЛЬ"/>}/>
                <Route path="/appeal" element={<Appeal/>}/>
                <Route path="/meterReadings" element={<MeterReadings/>}/>
                <Route path="/myApartment" element={<MyApartment/>}/>
                <Route path="/announcement" element={<Announcement/>}/>
            </Routes>
        </PanelContent>
    </Panel>
    );
    
}

export default ResidentPanel;