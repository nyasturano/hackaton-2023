import './residentPanel.css'

import MeterReadings from '../../components/ResidentContent/Meter/MeterReadings';
import ChequeInfo from '../../components/ResidentContent/ChequeInfo/ChequeInfo';
import Appeal from '../../components/ResidentContent/Appeal/Appeal';
import ApartmentInfo from '../../components/ResidentContent/ApartmentInfo/ApartmentInfo';
import Panel from '../../components/Panel/Panel'
import PanelMenu from "../../components/PanelMenu/PanelMenu";
import PanelMenuItem from "../../components/PanelMenuItem/PanelMenuItem";
import PanelContent from '../../components/PanelContent/PanelContent'
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Routes, Route } from "react-router";

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
            <PrimaryButton text={<div style={{margin: '0px 30px'}}>Выйти</div>}/>
        </PanelMenu>

        <PanelContent>
            <Routes>
                <Route path="/appeal" element={<Appeal/>}/>
                <Route path="/meterReadings" element={<MeterReadings/>}/>
                <Route path="/myApartment" element={<ChequeInfo/>}/>
                <Route path="/myApartment" element={<ApartmentInfo/>}/>
            </Routes>
        </PanelContent>
    </Panel>
    );
    
}

export default ResidentPanel;