import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as _ from 'underscore';

@Injectable({
    providedIn: 'root'
})
export class LandingpageService {
    constructor(private http: HttpClient) {}

    private apiEndPoint = '/emp/emp/services/';

    public httpOptions = {
        withCredentials: true,
        observe: 'response' as 'response'
    };

    private stateNames = {
        ad: 'Ad',
        admin: 'Administration',
        campaign: 'Campaign',
        campaignPlanning: 'CampainPlanning',
        emagazine: 'EMagazine',
        event: 'Event',
        kpiDashboard: 'KpiDashboard',
        publishing: 'Publishing',
        releaseCheck: 'ReleaseCheck',
        update: 'Update'
    };

    getCommonLinks() {
        return 'landingPage,' +
            'kpiDashboard.rAndI,' +
            'kpiDashboard.advertisement,' +
            'kpiDashboard.sitePerformance,' +
            'kpiDashboard.mailMagazine,' +
            'kpiDashboard.allEventsDownloadData,' +
            'kpiDashboard.singleCampaign,' +
            'kpiDashboard.singleEvent,' +
            'kpiDashboard.singleEvent.loadDashboard,' +
            'calendarViewPreference,' +
            'fieldsViewPreference,' +
            'searchViewPreference,' +
            'eventView,' +
            'eventRegistration,' +
            'eventEdit,' +
            'teireiEventEdit,' +
            'login,' +
            'viewMenuId,' +
            'editMenuId,eventWakuList,' +
            'viewWakuRequest,' +
            'editWakuId,' +
            'registerKoushinKanri,' +
            'viewkoushinKanri,' +
            'updateKoushinKanri,' +
            'editWebPublishRequest,' +
            'viewWebPublishRequest,' +
            'viewEMagazine,' +
            'updateEMagazine,' +
            'preSalesRequestRegistration,' +
            'preSalesRequestList, ' +
            'preSalesRequestView, ' +
            'preSalesRequestEdit, ' +
            'manHourReferenceDetail, ' +
            'manHourRegistration, ' +
            'manHourReference, ' +
            'campaignRegistration, ' +
            'campaignEdit,' +
            'campaignView,' +
            'couponRegistration, ' +
            'couponView, ' +
            'couponEdit, ' +
            'pointRegistration, ' +
            'pointView, ' +
            'pointEdit, ' +
            'couponDetailsRegistration, ' +
            'viewCouponDetails, ' +
            'campaignPlanning, ' +
            'campaignList, ' +
            'pointList, ' +
            'campaignListNonHensei, ' +
            'couponList, ' +
            'pointList, ' +
            'approveCampaigns, ' +
            'approveCoupons, ' +
            'approvePoints, ' +
            'rejectedCampaigns, ' +
            'rejectedCoupons, ' +
            'rejectedPoints, ' +
            'campaignMerge,' +
            'distributionNumbers,' +
            'delegateApprovalTask,' +
            'personalInformation,' +
            'downloads,' +
            'importUpdateStatus,' +
            'bulkEventRegistration,' +
            'confirmStoppedEvents,' +
            'registerReleaseCheck,' +
            'releaseCheckRequestList,' +
            'viewReleaseCheck,' +
            'updateReleaseCheck,' +
            'viewAdFrameCorrectionRequest,' +
            'updateAdFrameCorrectionRequest,' +
            'viewCouponCodeCtrl,' +
            'nonJsBannerInformation,' +
            'nonJSBannerManagement,' +
            'digitalAssetManagement,' +
            'digitalAssetSearch,' +
            'personalizedContentsRegistration,' +
            'personalizedContentsEdit,' +
            'personalizedContentsView,' +
            'mailLayoutView,' +
            'AdTagReleaseCheck,' +
            'otherBannerInformation';
    }

    getMenuLinks() {
        return {
            campaignRegistration: {
                key: 1,
                value: {
                    hasSubMenu: true,
                    subMenuName: this.stateNames.campaignPlanning,
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_REGISTRATION',
                    parentName: 'Campaign',
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_CAMPAIGN_REGISTRATION',
                    state: 'campaignRegistration',
                    param: '{id: 0}'
                }
            },
            couponRegistration: {
                key: 2,
                value: {
                    hasSubMenu: true,
                    subMenuName: this.stateNames.campaignPlanning,
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_REGISTRATION',
                    parentName: 'Campaign',
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_COUPON_REGISTRATION',
                    state: 'couponRegistration',
                    param: '{id: 0}'
                }
            },
            pointRegistration: {
                key: 3,
                value: {
                    hasSubMenu: true,
                    subMenuName: this.stateNames.campaignPlanning,
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_REGISTRATION',
                    parentName: 'Campaign',
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_POINT_REGISTRATION',
                    state: 'pointRegistration',
                    param: '{id: 0}'
                }
            },
            campaignPlanning: {
                key: 4,
                value: {
                    parentName: this.stateNames.campaign,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_CAMPAIGN_PLANNING',
                    state: 'campaignPlanning',
                    param: ''
                }
            },
            campaignList: {
                key: 5,
                value: {
                    parentName: this.stateNames.campaign,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_CAMPAIGN_LIST_HENSEI',
                    state: 'campaignList',
                    param: '{id: 0}'
                }
            },
            campaignListNonHensei: {
                key: 6,
                value: {
                    parentName: this.stateNames.campaign,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_CAMPAIGN_LIST',
                    state: 'campaignListNonHensei',
                    param: '{id: 0}'
                }
            },
            couponList: {
                key: 7,
                value: {
                    parentName: this.stateNames.campaign,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_COUPON_LIST',
                    state: 'couponList',
                    param: ''
                }
            },
            pointList: {
                key: 8,
                value: {
                    parentName: this.stateNames.campaign,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_POINT_LIST',
                    state: 'pointList',
                    param: ''
                }
            },
            approveCampaigns: {
                key: 9,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'CampainApproval',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_APPROVAL',
                    parentName: this.stateNames.campaign,
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_APPROVE_CAMPAIGN',
                    state: 'approveCampaigns',
                    param: ''
                }
            },
            approveCoupons: {
                key: 10,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'CampainApproval',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_APPROVAL',
                    parentName: this.stateNames.campaign,
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_APPROVE_COUPON',
                    state: 'approveCoupons',
                    param: ''
                }
            },
            approvePoints: {
                key: 11,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'CampainApproval',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_APPROVAL',
                    parentName: this.stateNames.campaign,
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_APPROVE_POINT',
                    state: 'approvePoints',
                    param: ''
                }
            },
            rejectedCampaigns: {
                key: 12,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'CampainRejected',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_REJECTED',
                    parentName: this.stateNames.campaign,
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_REJECTED_CAMPAIGN',
                    state: 'rejectedCampaigns',
                    param: ''
                }
            },
            rejectedCoupons: {
                key: 13,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'CampainRejected',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_REJECTED',
                    parentName: this.stateNames.campaign,
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_REJECTED_COUPON',
                    state: 'rejectedCoupons',
                    param: ''
                }
            },
            rejectedPoints: {
                key: 14,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'CampainRejected',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN_REJECTED',
                    parentName: this.stateNames.campaign,
                    isFirstOnLanding: false,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_REJECTED_POINT',
                    state: 'rejectedPoints',
                    param: ''
                }
            },
            campaignMerge: {
                key: 15,
                value: {
                    parentName: this.stateNames.campaign,
                    landingParentName: 'COMMON.MENUS.LANDING.CAMPAIGN_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_CAMPAIGN',
                    sublinkName: 'CAMPAIGN.COMMON.MERGE_TITLE',
                    state: 'campaignMerge',
                    param: '{id: 0}'
                }
            },
            eventRegister: {
                key: 1,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'EVENTS.PLANNING.EVENT_REGISTRATION',
                    state: '/event/registration',
                    param: '{id: 0}'
                }
            },
            bulkEventRegistration: {
                key: 3,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'EVENTS.PLANNING.BULK_COPY_REGISTRATION',
                    state: 'bulkEventRegistration',
                    param: '{id: 0}'
                }
            },
            eventList: {
                key: 4,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_List',
                    state: '/event',
                    param: ''
                }
            },
            registerPreSales: {
                key: 1,
                value: {
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_PreSales',
                    state: 'preSalesRequestRegistration',
                    param: ''
                }
            },
            preSalesRequestList: {
                key: 2,
                value: {
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_PreSalesList',
                    state: 'preSalesRequestList',
                    param: ''
                }
            },
            sendRequestToProducer: {
                key: 14,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_SendEventRegistrationRequest',
                    state: 'sendRequestToProducer',
                    param: ''
                }
            },
            sendRequestToDirector: {
                key: 15,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_SendAssignRegistrationRequest',
                    state: 'sendRequestToDirectorLeader',
                    param: ''
                }
            },
            distributionNumbers: {
                key: 16,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_DISTRIBUTION_NUMBER_AGGREGATION',
                    state: 'distributionNumbers',
                    param: ''
                }
            },
            delegateApprovalTask: {
                key: 17,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_DELEGATE_APPROVAL',
                    state: 'delegateApproval',
                    param: ''
                }
            },
            digitalAssetSearch: {
                key: 18,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_DIGITAL_ASSET_SEARCH',
                    state: 'digitalAssetSearch',
                    param: ''
                }
            },
            assignRegistration: {
                key: 5,
                value: {

                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_Assign',
                    state: 'assignRegistration',
                    param: ''
                }
            },
            approveEvents: {
                key: 7,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_Approve_Reject',
                    state: 'approveRejectEventPlan',
                    param: ''
                }
            },
            rejectedEvents: {
                key: 8,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_RejectedEvents',
                    state: 'rejectedEventPlan',
                    param: ''
                }
            },
            rejectedAssignEvents: {
                key: 10,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_RejectedAssignRegistrations',
                    state: 'rejectedAssignRegistration',
                    param: ''
                }
            },
            changedEventsApprovePlan: {
                key: 11,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_ChangesEventsApprove',
                    state: 'changedEventsApprovePlan',
                    param: ''
                }
            },
            changedEventsRejectPlan: {
                key: 12,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_ChangesEventsReject',
                    state: 'changedEventsRejectPlan',
                    param: ''
                }
            },
            eventRule: {
                key: 13,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TeireiEventRuleList',
                    state: 'eventRule',
                    param: ''
                }
            },
            teireiEventManagement: {
                key: 2,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TeireiEventManagementList',
                    state: 'teireiEventManagement',
                    param: ''
                }
            },
            approveAssignEvents: {
                key: 9,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_Approve_RejectAssignRegistrations',
                    state: 'approveRejectAssignRegistration',
                    param: ''
                }
            },
            assetCreationManagement: {
                key: 6,
                value: {
                    parentName: this.stateNames.event,
                    landingParentName: 'COMMON.MENUS.LANDING.EVENT_PLANNING',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EVENT',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_AssetCreationManagement',
                    state: 'assetCreationManagement',
                    param: ''
                }
            },
            menuIdRequestList: {
                key: 4,
                value: {
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MenuIDRequest',
                    state: 'menuIdRequestList',
                    param: ''
                }
            },
            menuIdRequest: {
                key: 3,
                value: {
                    parentName: this.stateNames.ad,
                    isFirstOnLanding: true,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MenuIDRegistration',
                    state: 'createMenuId',
                    param: ''
                }
            },
            userList: {
                key: 2,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_UserList',
                    state: 'userList',
                    param: ''
                }
            },
            userRegistration: {
                key: 1,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_UserRegistration',
                    state: 'userRegistration',
                    param: ''
                }
            },
            roleEntityPermission: {
                key: 3,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_RoleEntityPermission',
                    state: 'entityRolePermission',
                    param: ''
                }
            },
            roleFieldRestriction: {
                key: 4,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_RoleFieldRestriction',
                    state: 'fieldRoleRestriction',
                    param: ''
                }
            },
            webPublishingRequest: {
                key: 1,
                value: {
                    parentName: this.stateNames.publishing,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_WebPublishingRequest',
                    state: 'createWebPublishRequest',
                    param: ''
                }
            },
            webPublishingRequestList: {
                key: 2,
                value: {
                    parentName: this.stateNames.publishing,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_PublishingRequestList',
                    state: 'webPublishList',
                    param: ''
                }
            },
            registerEMagazine: {
                key: 3,
                value: {
                    parentName: this.stateNames.emagazine,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MailMagazineChkReq',
                    state: 'registerEMagazine',
                    param: ''
                }
            },
            mailLayoutRegistration: {
                key: 1,
                value: {
                    parentName: this.stateNames.emagazine,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MailLayoutRegistration',
                    state: 'mailLayoutRegistration',
                    param: ''
                }
            },
            mailLayouts: {
                key: 2,
                value: {
                    parentName: this.stateNames.emagazine,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MailLayouts',
                    state: 'mailLayouts',
                    param: ''
                }
            },
            mailLayoutLog: {
                key: 5,
                value: {
                    parentName: this.stateNames.emagazine,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MailLayoutLog',
                    state: 'mailLayoutLog',
                    param: ''
                }
            },
            wakuRequest: {
                key: 5,
                value: {
                    parentName: this.stateNames.ad,
                    isFirstOnLanding: true,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_WakuRequest',
                    state: 'wakuRequest',
                    param: ''
                }
            },
            wakuRequestList: {
                key: 6,
                value: {
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_WakuRequestList',
                    state: 'wakuRequestList',
                    param: ''
                }
            },
            updateRequest: {
                key: 1,
                value: {
                    parentName: this.stateNames.update,
                    landingParentName: 'COMMON.MENUS.LANDING.UPDATE_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_UPDATE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_UpdateRequest',
                    state: 'registerKoushinKanri',
                    param: ''
                }
            },
            updateRequestList: {
                key: 2,
                value: {
                    parentName: this.stateNames.update,
                    landingParentName: 'COMMON.MENUS.LANDING.UPDATE_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_UPDATE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_UpdateRequestList',
                    state: 'koushinKanriList',
                    param: ''
                }
            },
            importUpdateRequestList: {
                key: 3,
                value: {
                    parentName: this.stateNames.update,
                    landingParentName: 'COMMON.MENUS.LANDING.UPDATE_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_UPDATE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_ImportRequestList',
                    state: 'importkoushinKanri',
                    param: ''
                }
            },
            adFrameRequest: {
                key: 12,
                value: {
                    parentName: this.stateNames.ad,
                    isFirstOnLanding: true,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_REGULAR_ADFRAME',
                    state: 'registerTereiEvent',
                    param: ''
                }
            },
            confirmStoppedEvents: {
                key: 13,
                value: {
                    parentName: this.stateNames.ad,
                    isFirstOnLanding: true,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_CONFIRM_STOPPED_EVENTS',
                    state: 'confirmStoppedEvents',
                    param: ''
                }
            },
            eMagazineRequestList: {
                key: 4,
                value: {
                    parentName: this.stateNames.emagazine,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_EMAGAZINE',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MailMagazineChkList',
                    state: 'eMagazineRequestList',
                    param: ''
                }
            },
            viewEMagazine: {
                key: 6,
                value: {
                    parentName: this.stateNames.emagazine,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_E_MAGAZINE',
                    state: 'viewEMagazine',
                    param: ''
                }
            },
            topBannerRequest: {
                key: 3,
                value: {
                    parentName: this.stateNames.publishing,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TOP_PUBLISHING_BANNERS',
                    state: 'topBannerRequest',
                    param: ''
                }
            },
            topBannerRequestList: {
                key: 4,
                value: {
                    parentName: this.stateNames.publishing,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TOP_PUBLISHING_CHECK_SCHEDULE',
                    state: 'topBannerRequestList',
                    param: ''
                }
            },
            nonJsBannerManagement: {
                key: 5,
                value: {
                    parentName: this.stateNames.publishing,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_NONJS_BANNER_MANAGEMENT',
                    state: 'nonJSBannerManagement',
                    param: ''
                },
            },
            personalizedContentsList: {
                key: 7,
                value: {
                    parentName: this.stateNames.publishing,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_PUBLISH',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_PERSONALIZED_CONTENTS_LIST',
                    state: 'personalizedContentsList',
                    param: ''
                }
            },
            mediaGenreTeamMapping: {
                key: 5,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_MediaNameGenreTeamMapping',
                    state: 'mediaGenreTeamMapping',
                    param: ''
                }
            },
            teamGroupMapping: {
                key: 6,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TeamGroupMapping',
                    state: 'teamGroupMapping',
                    param: ''
                }
            },
            announceMaintenance: {
                key: 7,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_AnnounceMaintenance',
                    state: 'announceMaintenance',
                    param: ''
                }
            },
            ManageRuleExeDay: {
                key: 9,
                value: {
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TeireiEventRegPeriodSetting',
                    state: 'manageRuleExeDay',
                }
            },
            eventLog: {
                key: 8,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'changeLog',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.CHANGE_LOG',
                    parentName: this.stateNames.admin,
                    landingParentName: 'COMMON.MENUS.LANDING.USER_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_USER',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_EventLog',
                    state: 'eventLog',
                    param: ''
                }
            },
            Dashboard: {
                key: 1,
                value: {
                    parentName: this.stateNames.kpiDashboard,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.KPI_DASHBOARD',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.KPI_DASHBOARD',
                    subLinkName: 'COMMON.MENUS.TOP_LEVEL.KPI_DASHBOARD',
                    state: this.stateNames.kpiDashboard,
                    param: ''
                }
            },
            registerReleaseCheck: {
                key: 1,
                value: {
                    parentName: this.stateNames.releaseCheck,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.RELEASE_CHECK',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.RELEASE_CHECK',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_RELEASE_CHECK_REGISTRATION',
                    state: 'registerReleaseCheck',
                    param: ''
                }
            },
            releaseCheckRequestList: {
                key: 2,
                value: {
                    parentName: this.stateNames.releaseCheck,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.RELEASE_CHECK',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.RELEASE_CHECK',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_RELEASE_CHECK_REQUESTS',
                    state: 'releaseCheckRequestList',
                    param: ''
                }
            },
            AdTagReleaseCheck: {
                key: 3,
                value: {
                    parentName: this.stateNames.releaseCheck,
                    landingParentName: 'COMMON.MENUS.TOP_LEVEL.RELEASE_CHECK',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.RELEASE_CHECK',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_AD_TAG_RELEASE_CHECK',
                    state: 'AdTagReleaseCheck',
                    param: ''
                }
            },

            adFrameCorrectionRequestRegistration: {
                key: 7,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'AdFrameCorrectionRequest',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_CORRECTION_REQUEST',
                    parentName: this.stateNames.ad,
                    isFirstOnLanding: true,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_AD_FRAME_CORRECTION_REQUEST_REGISTRATION',
                    state: 'adFrameCorrectionReqRegistration',
                    param: ''
                }
            },
            adFrameCorrectionRequestList: {
                key: 8,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'AdFrameCorrectionRequest',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_CORRECTION_REQUEST',
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_AD_FRAME_CORRECTION_REQUEST_LIST',
                    state: 'adFrameCorrectionReqList',
                    param: ''
                }
            },
            approveAdFrameCorrectionForAdDept: {
                key: 9,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'AdFrameCorrectionRequest',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_CORRECTION_REQUEST',
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_APPROVAL_AD_FRAME_CORRECTION_REQUEST_ADDEPT',
                    state: 'approvalAdFrameCorrectionReqAdDept',
                    param: ''
                }
            },
            approveAdFrameCorrectionForAL: {
                key: 10,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'AdFrameCorrectionRequest',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_CORRECTION_REQUEST',
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_APPROVAL_AD_FRAME_CORRECTION_REQUEST_AL',
                    state: 'approvalAdFrameCorrectionReqAL',
                    param: ''
                }
            },
            rejectedAdFrameCorrectionRequests: {
                key: 11,
                value: {
                    hasSubMenu: true,
                    subMenuName: 'AdFrameCorrectionRequest',
                    uiSubMenuName: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_CORRECTION_REQUEST',
                    parentName: this.stateNames.ad,
                    landingParentName: 'COMMON.MENUS.LANDING.AD_MANAGEMENT',
                    uiParentName: 'COMMON.MENUS.TOP_LEVEL.TXT_AD',
                    sublinkName: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_REJECTED_AD_FRAME_CORRECTION_REQUEST_LIST',
                    state: 'rejectedAdFrameCorrectionReqList',
                    param: ''
                }
            }
        };
    }


    setRoleAccess() {

        // const userData = JSON.parse(localStorage.getItem('userData'));
        // let idxPL = _.indexOf(userData.userRole, 'Producer Leader') !== -1;
        // let idxAdmin = _.indexOf(userData.userRole, 'Admin') !== -1;
        // let idxPM = _.indexOf(userData.userRole, 'PM') !== -1;
        // let idxHK = _.indexOf(userData.userRole, 'Hensei Kanri') !== -1;
        // let idxDL = _.indexOf(userData.userRole, 'Director Leader') !== -1;
        // let idxV = _.indexOf(userData.userRole, 'Asset Creation Vendor') !== -1;
        // let idxD = _.indexOf(userData.userRole, 'Director') !== -1;
        // let idTeireiADVendor = _.indexOf(userData.userRole, 'Teirei AD Vendor') !== -1;
        // let isWakuIdVendor = _.indexOf(userData.userRole, 'Waku ID Vendor') !== -1;
        // let isAdSalesGroup = _.indexOf(userData.userRole, 'AD Sales Group') !== -1;
        // let isManager = _.indexOf(userData.userRole, 'Manager') !== -1;
        // let isAdDept = _.indexOf(userData.userRole, 'Ad Dept.') !== -1;
        // let crawlCheckAdmin = _.indexOf(userData.userRole, 'Crawl Check Admin') !== -1;
        // let idxMI = _.indexOf(userData.userRole, CONSTANTS.users.roles.marketing_incharge) !== -1;
        // let idxML = _.indexOf(userData.userRole, CONSTANTS.users.roles.marketing_leader) !== -1;
        // let idxGI = _.indexOf(userData.userRole, CONSTANTS.users.roles.genre_incharge) !== -1;
        // let idxGL = _.indexOf(userData.userRole, CONSTANTS.users.roles.genre_leader) !== -1;
        // let idxAIO = _.indexOf(userData.userRole, CONSTANTS.users.roles.aio_incharge) !== -1;

        // $rootScope.isD = idxPM || idxD || idxDL || idxV;
        // $rootScope.isDL = idxDL;
        // $rootScope.isPLHK = idxPL || idxHK;
        // $rootScope.isPL = idxPL;
        // $rootScope.isMR = idxMI;
        // $rootScope.isGR = idxGI;
        // $rootScope.isxHK = idxHK;
        // $rootScope.isMRHK = idxMI && idxHK;
        // $rootScope.isGRHK = idxGI && idxHK;
        // $rootScope.isMRGR = idxMI && idxGI;
        // $rootScope.isMRORGR = idxMI || idxGI || idxAIO;
        // $rootScope.isCampaignPlanningDepartment = idxMI || idxGI || idxML || idxGL;
        // $rootScope.isAIO = idxAIO;

        // $rootScope.isPM = idxPM;
        // $rootScope.isV = idxV;
        // $rootScope.isDirector = idxD;

        // $rootScope.isProducer = _.indexOf(userData.userRole, 'Producer') !== -1;
        // $rootScope.roleAccess = idxPL || idxPM || idxHK;
        // $rootScope.changedEventRoleAccess = idxDL || idxPM || idxHK;

        // $rootScope.isManager = isManager;
        // $rootScope.sendRequestToProducerFlag = idxHK || idxPM;
        // $rootScope.assignRegistrationFlag = idxDL;
        // $rootScope.isProjectManager = idxPM;
        // $rootScope.isAdmin = idxAdmin;
        // $rootScope.isTeireiADVendor = $rootScope.isProducer || idxPL || idTeireiADVendor;
        // $rootScope.isReminderRole = idxD || idxDL || idxPL || $rootScope.isProducer;
        // $rootScope.searchIconAdFrameCorrRoles = idxAdmin || $rootScope.isProducer || idxPL || isWakuIdVendor || isAdSalesGroup || isManager || isAdDept;
        // $rootScope.searchIconEventRoles = $rootScope.isProducer || idxD || idxAdmin || idxDL || idxPL;
        // $rootScope.isCrawlCheckAdmin = crawlCheckAdmin;
        // $rootScope.isHKR = ($rootScope.isProducer || idxPL || idxHK || idxPM);
        // $rootScope.isAllRoles = ($rootScope.isProducer || idxPL || idxHK || idxPM) && idxMI && idxGI;

        // const result = userData.operations.filter(function (v) {
        //     return v == 'manageAsset';
        // });
        // $rootScope.isManageAsset = result && result.length;
    }

    getAppInfo(): Observable < any > {
        const apiURL = this.apiEndPoint + 'manage/app';
        return this.http.get < any > (apiURL);
    }

    getLandingPageInfo(): Observable < any > {
        const apiURL = this.apiEndPoint + 'manage/information';
        return this.http.get < any > (apiURL);
    }
}
