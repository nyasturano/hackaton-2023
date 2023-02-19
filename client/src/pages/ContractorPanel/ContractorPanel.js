import './contractorPanel.css';

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