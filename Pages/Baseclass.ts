import {test as Basetest} from '@playwright/test'
import { Expect } from '@playwright/test'
import LoginPage from './LoginPage'
import AliquotMediaPage from './AliquotMediaPage'
import ARIDManagementPage from './ARIDManagementPage'
import CreateEar_HandleAssociationPage from './CreateEar_HandleAssociationPage'
import CreateMasterPlatePage from './CreateMasterPlatePage'
import ExplantTrackerPage from './ExplantTrackerPage'
import HelpPage from './HelpPage'
import LabCoordinationPage from './LabCoordinationPage'
import LabWorkstreamManagerPage from './LabWorkstreamManagerPage'
import MediaManagementPage from './MediaManagementPage'
import Non_PlateMediaLabelsPage from './Non_PlateMediaLabelsPage'
import PHP_RV_SearchPage from './PHP_RV_SearchPage'
import PlateMediaBarcodePage from './PlateMediaBarcodePage'
import RequestManagementPage from './RequestManagementPage'
import RequestPage from './RequestPage'
import SuperVectorOrderingPage from './SuperVectorOrderingPage'
import SupportToolsPage from './SupportToolsPage'
import WorkstreamCenterPage from './WorkstreamCenterPage'
import WorkstreamTemplateManagerPage from './WorkstreamTemplateManagerPage'

const test =Basetest.extend<{
    Mediapage:AliquotMediaPage;
    ARIDManagement:ARIDManagementPage;
    earhandlepage:CreateEar_HandleAssociationPage;
    createmasterplatepage:CreateMasterPlatePage;
    Explant:ExplantTrackerPage;
    Help:HelpPage;
    LabCordinate:LabCoordinationPage;
    Labpage:LabWorkstreamManagerPage;
    Login:LoginPage;
    MediaManagement:MediaManagementPage;
    Non_PlateMediaLabels:Non_PlateMediaLabelsPage;
    PHP_RV_Search:PHP_RV_SearchPage;
    PlateMediaBarcode:PlateMediaBarcodePage;
    Request_mgmt:RequestManagementPage;
    Request:RequestPage;
    SuperVectorOrdering:SuperVectorOrderingPage;
    Support_page:SupportToolsPage;
    Workstream:WorkstreamCenterPage;
    WorkstreamTemplateManager:WorkstreamTemplateManagerPage

}>({
    Mediapage: async({page},use)=>{
        await use(new AliquotMediaPage(page))
    },
    ARIDManagement: async({page},use)=>{
        await use(new ARIDManagementPage())
    },
    earhandlepage: async({page},use)=>{
        await use(new CreateEar_HandleAssociationPage())
    },
    createmasterplatepage: async({page},use)=>{
        await use(new CreateMasterPlatePage())
    },
    Explant: async({page},use)=>{
        await use(new ExplantTrackerPage(page))
    },
    Help: async({page},use)=>{
        await use(new HelpPage(page))
    },
    LabCordinate: async({page},use)=>{
        await use(new LabCoordinationPage(page))
    },
    Labpage: async({page},use)=>{
        await use(new LabWorkstreamManagerPage(page))
    },
    Login: async({page},use)=>{
        await use(new LoginPage(page))
    },
    MediaManagement: async({page},use)=>{
        await use(new MediaManagementPage(page))
    },
    Non_PlateMediaLabels: async({page},use)=>{
        await use(new Non_PlateMediaLabelsPage(page))
    },
    PHP_RV_Search: async({page},use)=>{
        await use(new PHP_RV_SearchPage(page))
    },
    PlateMediaBarcode: async({page},use)=>{
        await use(new PlateMediaBarcodePage(page))
    },
    Request_mgmt: async({page},use)=>{
        await use(new RequestManagementPage(page))
    },
    Request: async({page},use)=>{
        await use(new RequestPage(page))
    },
    SuperVectorOrdering: async({page},use)=>{
        await use(new SuperVectorOrderingPage())
    },
    Support_page: async({page},use)=>{
        await use(new SupportToolsPage(page))
    },
    Workstream: async({page},use)=>{
        await use(new WorkstreamCenterPage(page))
    },
    WorkstreamTemplateManager: async({page},use)=>{
        await use(new WorkstreamTemplateManagerPage())
    },
});
export default test;

