export const global = {
  CONSTANTS: {

      appConfig: {
        isSuzakuAPIEnabled: false,
        suzakuLoginUrl: 'login/Users',
        loginUrl: 'Login',
        environmentVar: '%EMPENVVAR%' // '%EMPENVVAR%" =>(PRD=>Production, STG=>Staging, DEV=>Development)
      },
      adFrameCorr: {
        layoutDropDown: [
          {
            key: 1,
            value: 'ADFRAME.LIST.SIMPLE',
            param: true
          },
          {
            key: 2,
            value: 'ADFRAME.LIST.ALL',
            param: false
          }
        ]
      },
      henseiRoles: ['Producer Leader', 'Producer', 'Hensei Kanri', 'PM', 'Manager'],
      deviceTypes: {
        PC: 'PC',
        SP: 'SP',
        TB: 'TB',
        MB: 'MB'
      },
      domainConfig: {
        subDomainEnabled: true
      },
      bannerDeviceTypes: ['PC', 'SP'],
      localeValue: {
          en: 'en-US',
          jp: 'ja-JP',
      },
      campaign: {
        searchOptionDiscriminators: {
          CAMPAIGN_HENSEI: 'CAMPAIGN_HENSEI',
          CAMPAIGN_PARENT: 'CAMPAIGN_PARENT',
          CAMPAIGN_COUPON: 'CAMPAIGN_COUPON',
          CAMPAIGN_POINT: 'CAMPAIGN_POINT'
        },
        planningDepartment: {
          marketing: 1,
          genre: 2,
          hensei: 3,
          aio: 4
        },
        planningDepartmentName: {
          marketing: 'MARKETING',
          genre: 'GENRE',
          hensei: 'HENSEI',
          aio: 'AIO'
        },
        maxLinkLabelInput: 32,
        userEntry: {
          yes: 'Yes',
          no: 'No'
        },
        placeholder: {
          en: 'Please type Campaign Name for suggestions.',
          jp: '検索したいキャンペーン名を入力してください。'
        },
        campaignCategory: {
          parent: 1,
          point: 2,
          coupon: 3
        },
        campaignCategoryName: {
          parent: 'Parent',
          point: 'Point',
          coupon: 'Coupon'
        },
        campaignCategoryFilter: {
          id: 36088,
          name: 'campaign.category'
        },
        statusDropdown: [
            {
              key: 1,
              value: 'CAMPAIGN.CALENDAR.OPERATION_STATUS_EXCLUDE_STOPPED',
              param: 'ACTIVE_CAMPAIGN'
            },
            {
              key: 2,
              value: 'CAMPAIGN.CALENDAR.OPERATION_STATUS_ALL',
              param: 'ALL_CAMPAIGN'
            }
          ],
        notificationPossible: '2',
        calendarViews: {
          year: 'year',
          month: 'month',
          week: 'agendaWeek',
          day: 'agendaDay',
          weekDuration: 'WEEK',
          dayDuration: 'DAY'
        },
        campaignStatusCssClasses: {
          rejected: 'rejectedCampaign',
          approved: 'allApprovedCampaign',
          stopped: 'stopedCampaign',
          waiting: 'waitForApprovalCampaign'
        },
        campaignStartMonth: 0,
        campaignEndMonth: 11,
        campaignCoupnUsageConditions: {
          amountCondition: '1',
          discount: '2',
          maxUsageCount: '3',
          usableNumber: '4',
          combinationOtherCoupon: '5',
          targetProduct: '6'
        },
        seisakuRequestStatuses: {
          notYet: 1,
          done: 2
        }
      },
      events: {
        showLoader: 'show_loader',
        deSelectAll: 'deSelectAll',
        timer: 5000,
        shortTimer: 500,
        assetMakeCurrentTimer: 2000,
        draftFailedMsg: 'Failed to save draft.',
        eventFailedMsg: 'Failed to submit event.',
        uploadFailedMsg: 'Failed to upload file.',
        deleteFailedMsg: 'Failed to delete file.',
        broadcastValidation: 'show-errors-check-validity',
        validationFailed: 'Please select valid values',
        repeatFrequencyCriteriaSave: 'repeat.frequency.criteria.save',
        repeatFrequencyClassFieldName: 'repeatFrequency',
        statusDropdown: [
          {
            key: 1,
            value: 'EVENTS.COMMON.OPERATION_STATUS_EXCLUDE_STOPPED',
            param: 'ACTIVE_EVENTS'
          },
          {
            key: 2,
            value: 'EVENTS.COMMON.OPERATION_STATUS_ALL',
            param: 'ALL_EVENTS'
          }
        ],
        statusFilterDropdown: [
          {
            key: 1,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.DRAFT',
            param: 'AUTO_GEN_DRAFT_EVENTS'
          },
          {
            key: 2,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.DRAFT_AND_DISCARDED',
            param: 'AUTO_GEN_DISCARDED_EVENTS'
          },
          {
            key: 3,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.REGISTERED',
            param: 'AUTO_GEN_REGISTERED_EVENTS'
          },
          {
            key: 4,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.ALL_EVENTS',
            param: 'ALL_EVENTS'
          }
        ],
        statusProducerPICFilterDropdown: [
          {
            key: 1,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.MY_EVENTS',
            param: 'AUTO_GEN_EVENTS_PRODUCER'
          },
          {
            key: 2,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.ALL_EVENTS',
            param: 'ALL_EVENTS'
          }
        ],
        eventDraftStatus: [
          {
            key: 0,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.DRAFT_CAPITAL'
          },
          {
            key: 1,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.REGISTERED_CAPITAL'
          },
          {
            key: 2,
            value: 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.DISCARDED_CAPITAL'
          }
        ],
        mailLayoutListStatusDropdown: [
          {
            key: 1,
            value: 'MAIL_LAYOUTS.COMMON.OPERATION_STATUS_EXCLUDE_STOPPED',
            param: 'ACTIVE_EVENTS'
          },
          {
            key: 2,
            value: 'MAIL_LAYOUTS.COMMON.OPERATION_STATUS_ALL',
            param: 'ALL_EVENTS'
          }
        ],
        adTagReleaseCheck: {
          checkStatusDropdownParam: {
            1: 'CHECK_STATUS_NG',
            2: 'CHECK_STATUS_OK',
            3: 'CHECK_STATUS_OK_MANUAL',
            4: 'CHECK_STATUS_NG_URL_OUT_SCOPE',
            5: 'CHECK_STATUS_YET_TO_CHECK',
            6: 'CHECK_STATUS_CHECK_SKIPPED',
            7: 'CHECK_STATUS_ALL'
            },
          environmentDropdownParam: {
            1: 'ENVIRONMENT_STG',
            2: 'ENVIRONMENT_PRD',
            3: 'ENVIRONMENT_ALL'
          },
          checkDateTimeDropDown: [
            {
              key: 1,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.TODAY',
              param: 'CHECK_DATE_TIME_TODAY'
            },
            {
              key: 2,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.YESTERDAY',
              param: 'CHECK_DATE_TIME_YESTERDAY'
            },
            {
              key: 3,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.THIS_WEEK',
              param: 'CHECK_DATE_TIME_THIS_WEEK'
            },
            {
              key: 4,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.LAST_WEEK',
              param: 'CHECK_DATE_TIME_LAST_WEEK'
            },
            {
              key: 5,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.THIS_MONTH',
              param: 'CHECK_DATE_TIME_THIS_MONTH'
            },
            {
              key: 6,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.ONE_MONTH',
              param: 'CHECK_DATE_TIME_ONE_MONTH'
            },
            {
              key: 7,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.THREE_MONTHS',
              param: 'CHECK_DATE_TIME_THREE_MONTHS'
            },
            {
              key: 8,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.SIX_MONTHS',
              param: 'CHECK_DATE_TIME_SIX_MONTHS'
            },
            {
              key: 9,
              value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.NOT_APPLY',
              param: 'CHECK_DATE_TIME_NOT_APPLY'
            },
          ],
          checkStatusColor: {
            NG : 'adTagReleaseCheckNG',
            OK : 'adTagReleaseCheckOkManully',
            OK_MANUAL : 'adTagReleaseCheckOkManully',
            NG_URL_OUT_SCOPE : 'adTagReleaseCheckNGUrlOutScope',
            CHECK_SKIPPED : 'adTagReleaseCheckCheckSkipped'
          }
        },
        deviceType: ['PC', 'SP', 'TB', 'MB'],
        webLargeClassification: [1, 3, 5],
        searchOptionRepeatFrequencyId: 464,
        teireiRulePatternType: [
          {
            key : 1,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.PATTERN_TYPE.DAILY'
          },
          {
            key : 2,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.PATTERN_TYPE.WEEKLY'
          },
          {
            key : 3,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.PATTERN_TYPE.MONTHLY'
          },
          {
            key : 4,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.PATTERN_TYPE.YEARLY'
          }
        ],
        teireiRuleEventDurationType: [
          {
            key : 1,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_DURATION_TYPE.DAY'
          },
          {
            key : 2,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_DURATION_TYPE.WEEK'
          },
          {
            key : 3,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_DURATION_TYPE.MONTH'
          },
          {
            key : 4,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_DURATION_TYPE.YEAR'
          }
        ],
        teireiRuleWeekDays: [
          {
            key : 1,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.MONDAY'
          },
          {
            key : 2,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.TUESDAY'
          },
          {
            key : 3,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.WEDNESDAY'
          },
          {
            key : 4,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.THURSDAY'
          },
          {
            key : 5,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.FRIDAY'
          },
          {
            key : 6,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.SATURDAY'
          },
          {
            key : 7,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.SUNDAY'
          }
        ],
        teireiRuleEventRuleOnRepeatPattern: [
          {
            key : 1,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_RULE_ON_REPEAT_PATTERN.DAY'
          },
          {
            key : 2,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_RULE_ON_REPEAT_PATTERN.FIRST'
          },
          {
            key : 3,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_RULE_ON_REPEAT_PATTERN.SECOND'
          },
          {
            key : 4,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_RULE_ON_REPEAT_PATTERN.THIRD'
          },
          {
            key : 5,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_RULE_ON_REPEAT_PATTERN.FOURTH'
          },
          {
            key : 6,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.EVENT_RULE_ON_REPEAT_PATTERN.LAST'
          }
        ],
        teireiRuleWeekDaysShort: [
          {
            key : 1,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.MON'
          },
          {
            key : 2,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.TUE'
          },
          {
            key : 3,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.WED'
          },
          {
            key : 4,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.THU'
          },
          {
            key : 5,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.FRI'
          },
          {
            key : 6,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.SAT'
          },
          {
            key : 7,
            value : 'EVENTS.REGISTRATION.TEIREI_RULE_SETUP.WEEK_DAYS.SUN'
          }
        ],
        teireiForm: {
          maxValueOfInteger: 2147483647,
          maxValueOfFrequencyForDailyRepeat: 31,
          minValueOfFrequencyForDailyRepeat: 1,
          minValueOfEventDuration: 1,
          maxValueOfEventDurationForDays: 3649635,
          maxValueOfEventDurationForWeeks: 521376,
          maxValueOfEventDurationForMonths: 119988,
          maxValueOfEventDurationForYears: 9999
        },
        teireiEventManagementDefaultSort: 'releaseDay,asc',
        registerTeireiEventFilterDropdown: [
          {
            key: 1,
            value: 'REGULAR_EVENT_ADFRAME.FILTER.REGISTERED_EVENTS',
            param: 'AUTO_GEN_REGISTERED_EVENTS'
          },
          {
            key: 2,
            value: 'REGULAR_EVENT_ADFRAME.FILTER.DRAFT_EVENTS',
            param: 'AUTO_GEN_DRAFT_EVENTS'
          },
          {
            key: 3,
            value: 'REGULAR_EVENT_ADFRAME.FILTER.ALL_EVENTS',
            param: 'ALL_EVENTS'
          }
        ],
        regularEventAdFramePublishingDateDifference: 112
      },
      registerMailLayout: {
        'registered': 'REGISTERED',
        'draft': 'DRAFT',
        'not_registered': 'NOT_REGISTERED',
        'expired': 'EXPIRED',
        'stopped_event': 'STOPPED_EVENT',
      },
      registerMailLayoutDeviceType: {
        'pc':2,
        'sp':4
      },
      manuscriptTypeIdDependentValueOnDisplayPosition: [20000, 60000],
      sortDirectionCycle: ['asc', 'desc'],
      disabledPreferences: [61, 90, 171, 263, 126, 286, 380, 36010, 36093, 36094],
      showPersonalizedContents: [2, 3, 6, 7, 8, 9, 10],
      hideOtherBannerFields: [2, 3],
      calender: {
        fullMonth: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
      },
      calendarTooltip: {
        eventName: 'Event Name: ',
        releaseDate: 'Release Date: ',
        closeDate: 'Close Date: ',
        category: 'Category: '
      },
      calendarViews: {
        monthView: 'month',
        dayView: 'agendaDay',
        weekView: 'agendaWeek'
      },
      NOTIFICATIONS_DIALOG: {
        REMINDER_TYPE: {
          AUTO_EVENT_DRAFT: '1',
          TEIREI_EVENT_SETUP: '2',
          TEIREI_EVENT_SETUP_AND_CONFIRM: '3',
          RULE_EXECUTION_ALERT: '4',
          DRAFT_EVENT_ALERT: '5',
          TEIREI_EVENT_REGISTRATION_NEXT_MONTH: '6'
        },
        REMINDER_CATEGORY : {
          CREATE_EVENT: 'Create Event',
          ASSIGN_DIRECTOR: 'Assign Director'
        }
      },
      importType: {
        user: 1,
        event: 2,
        assign: 3,
        webPublish: 4,
        terai:5,
        releaseCheck: 6,
        mailLayout: 7,
        adReleaseCheck: 8,
        tereiFileRead: 101,
        parentCampaign: 11,
        pointCampaign: 12,
        couponCampaign: 13
      },
      searchType: {
        advance: 'advance',
        basic: 'basic'
      },
      dateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
      dateFormat: {
        dateTime: 'yyyy/MM/dd HH:mm',
        noCharDate: 'yyyyMMdd',
        date: 'yyyy/MM/dd'
      },
      timeFormat: {
        fullTime: 'HH:mm:ss',
        shortTime: 'HH:mm'
      },
      basicSearchEnabled: [
        {
          entityId: 1,
          basic: true
        },
        {
          entityId: 2,
          basic: true
        },
        {
          entityId: 3,
          basic: true
        },
        {
          entityId: 6,
          basic: true
        },
        {
          entityId: 8,
          basic: false
        },
        {
          entityId: 4,
          basic: true
        },
        {
          entityId: 5,
          basic: true
        },
        {
          entityId: 9,
          basic: true
        },
        {
          entityId: 10,
          basic: false
        },
        {
          entityId: 36,
          basic : true
        },
        {
          entityId: 30,
          basic: false
        },
        {
          entityId: 42,
          basic: false
        },
        {
          entityId: 43,
          basic: false
        },
        {
          entityId: 45,
          basic: true
        },
        {
          entityId: 46,
          basic: true
        },
        {
          entityId: 53,
          basic: true
        },
        {
          entityId: 55,
          basic: true
        },
        {
          entityId: 58,
          basic: true
        },
        {
          entityId: 62,
          basic: true
        },
        {
          entityId: 63,
          basic: true
        }
      ],
      daysOfWeek: [
        {
          day: 1,
          dayName: 'COMMON.DAYS.MONDAY'
        },
        {
          day: 2,
          dayName: 'COMMON.DAYS.TUESDAY'
        },
        {
          day: 3,
          dayName: 'COMMON.DAYS.WEDNESDAY'
        },
        {
            day: 4,
            dayName: 'COMMON.DAYS.THURSDAY'
        },
        {
            day: 5,
            dayName: 'COMMON.DAYS.FRIDAY'
        },
        {
            day: 6,
            dayName: 'COMMON.DAYS.SATURDAY'
        },
        {
            day: 0,
            dayName: 'COMMON.DAYS.SUNDAY'
        }
      ],
      isIncentiveAvailable : {
          yes : 1,
          no : 2
      },
      calendarViewDisabled: [36, 46, 58, 62, 63],
      webPublishingFilter: {
        startDate: 'PUBLISHING_EVENT_START_TIME',
        endDate: 'PUBLISHING_EVENT_END_TIME'
      },
      vendorRole: {
        assetCreationVendor: 'Asset Creation Vendor',
        releaseCheckVendor: 'Release Check Vendor',
        topPageCheckVendor: 'Top Page Check Vendor'
      },
      uxpRole: {
        topNavigationTeam: 'Top Navigation Team',
        uxpGroup: 'Ux Planning Group'
      },
      ignoreEntityRolePermissionSettingRole: {
        topNavigationTeam: 'Top Navigation Team'
      },
      ignoreFieldRoleRestrictionSettingRole: {
        topNavigationTeam: 'Top Navigation Team'
      },
      dynamicDropdownFields: {
        releaseCheck: ['release_check_status', 'release_check_second_time', 'release_check_work_volume']
      },
      bulkCopy: {
        dateFormat: 'yyyy/MM/dd',
        yearFormat: 'YYYY/MM'
      },
      wakuCalendarTooltip: {
        adFrameType: 'Ad. Frame Type: ',
        adInchargeStatus: '[AD Frame creation] AD In-charge Status: ',
        applicantRequestorStatus: '[AD Frame creation] Applicant/Requester Status: ',
        mediaName: 'Media Name: '
      },
      exceptions: {
        businessException: 'BusinessException',
        applicationException: 'ApplicationException',
        systemException: 'SystemException'
      },
      shortTextSize: 100,
      wakuMenuNameTextSize: 12,
      menuIDRequestTextSize: 14,
      defaultScrollSize: 4,
      errorUnauthenticatedJP: '認証されていないのでアクセスできません。',
      sessionExpired: 'Your session has expired.',
      errorUnauthenticated: 'Unauthenticated access denied.',
      userData: 'userData',
      eventProperties: 'eventProperties',
      koushinKanriProperties: 'koushinKanriProperties',
      success: 'success',
      error: 'error',
      CSVError: 'CSVError',
      CSVSuccess: 'CSVSuccess',
      clearUpload: 'clearUpload',
      network_fail_message: 'Network fail',
      operation_not_permitted: 'Operation not permitted',
      globalUrl: '/emp/services/',
      timer: 5000,
      fileUploadTimer: 2000,
      suzakuUserTimer: 100,
      shortTimeOut: 1000,
      anchorView: 1,
      publishNotifications: false,
      roles: {
        roles_fail_message: 'No Roles',
        role_create: 'create',
        role_delete: 'delete',
        role_update: 'update',
        role_read: 'read',
        role_approver: 'approver',
        role_change_confirm_message: 'Changes made on this page have not been saved yet. Do you want to leave this page? ',
        role_change_cancel_message: 'Changes made would be discarded. Are you sure you want to proceed? ',
        restriction_readOnly: 'View',
        restriction_Hidden: 'Hidden',
        restriction_noRestriction: 'No Restriction',
        role_fetch_error: 'Error in fetching roles',
        entity_fetch_error: 'Error in fetching entities',
        restriction_fetch_error: 'Error in fetching restrictions',
        permission_fetch_error: 'Error in fetching permissions',
        restriction_update_error: 'Error in updating restriction(s)',
        restriction_delete_error: 'Error in deleting restriction(s)',
        permission_update_error: 'Error in updating permission(s)',
        permission_delete_error: 'Error in deleting permission(s)'
      },
      roleIds: {
        marketingLeader: 29,
        genreLeader: 31,
        aioLeader: 33
      },
      recipient: {
        vendor: 'vendor',
        producer: 'producer'
      },
      preferences: {
        entity_preferences_fetch_error: 'No Data available for selected entity!',
        view_settings_fetch_error: 'No Data available!',
        view_type: 'View Type',
        view_name: 'Calendar',
        no_changes_error: 'No changes to save'
      },
      ieVersions: {
        version9: 9,
        version10: 10
      },
      users: {
        role_reassign: {
          update_error: 'Unable to update user',
          update_success: 'User updated successfully'
        },
        delete_user: {
          delete_success: 'User has been successfully deleted!',
          delete_manager_error: 'cannot be deleted as no replacements exist!'
        },
        roles: {
          director: 'Director',
          director_vendor: 'Director Vendor',
          vendor: 'Test Mail Check Request Vendor',
          producer: 'Producer',
          asset_creation_vendor: 'Asset Creation Vendor',
          marketing_incharge: 'Event Marketing Incharge',
          marketing_leader: 'Event Marketing Leader',
          genre_incharge: 'Genre Marketing Incharge',
          genre_leader: 'Genre Marketing Leader',
          aio_incharge: 'AIO Incharge',
          aio_leader: 'AIO Leader',
        },
        response_noManager: 'No Manager Exist for this Role Team combination.',
        response_noManagerAttribute: 'Manager Attribute Not applicable for this User Role.'
      },
      import: {
        subUrlEventImportFor: 'EventSubUrlImport',
        usersImportFileName: 'UserImportTemplate.csv',
        eventsImportFileName: 'EventImportTemplate.xls',
        sampleDirectorAssignFileName: 'DirectorAssignImportTemplate.xls',
        webPublishImportFileNameEN: 'WebPublishImportTemplateEN.xlsx',
        webPublishImportFileNameJP: 'WebPublishImportTemplateJP.xlsx',
        teireiImportFileName: 'TeireiWakuImportTemplate.xls',
        releaseCheckImportFileName: 'ReleaseCheckImportTemplateEN.xls',
        releaseCheckImportFileNameJP: 'ReleaseCheckImportTemplateJP.xls',
        mailLayoutsImportFileNameEN: 'MailLayoutListEN.xls',
        mailLayoutsImportFileNameJP: 'MailLayoutListJP.xls',
        adTagReleaseCheckFileNameEN: 'AdTagReleaseCheckListEN.xls',
        adTagReleaseCheckFileNameJP: 'AdTagReleaseCheckListJP.xls',
        parentCampaignFileName: 'CampaignImportTemplate.xls',
        pointCampaignFileName: 'PointImportTemplate.xls',
        couponCampaignFileName: 'CouponImportTemplate.xls',
        sampleCSVUsersListPath: true ? 'sampleCSV/UserImportTemplate.csv' : '../sampleCSV/UserImportTemplate.csv', //set it to true for global path
        sampleCSVEventsListPath: true ? 'sampleCSV/EventImportTemplate.xls' : '../sampleCSV/EventImportTemplate.xls',
        sampleCSVDirectorAssign: true ? 'sampleCSV/DirectorAssignTemplate.xls' : '../sampleCSV/DirectorAssignTemplate.xls',
        sampleCSVWebPublishPathEN: true ? 'sampleCSV/PublishingRequestTemplateEN.xlsx' : '../PublishingRequestTemplateEN.xlsx',
        sampleCSVWebPublishPathJP: true ? 'sampleCSV/PublishingRequestTemplateJP.xlsx' : '../PublishingRequestTemplateJP.xlsx',
        sampleCSVTeraiPath: true ? 'sampleCSV/ADFramesImportTemplate.xls' : '../ADFramesImportTemplate.xls',
        sampleCSVReleaseCheckPathEN: true ? 'sampleCSV/ReleaseCheckTemplateEN.xls' : '../sampleCSV/ReleaseCheckTemplateEN.xls',
        sampleCSVSReleaseCheckPathJP: true ? 'sampleCSV/ReleaseCheckTemplateJP.xls' : '../sampleCSV/ReleaseCheckTemplateJP.xls',
        sampleCSVRegularEventAdFramePath: true ? 'sampleCSV/TeireiWakuImportTemplate.xls' : '../TeireiWakuImportTemplate.xls',
        sampleCSVMailLayoutsListPathEN: true ? 'sampleCSV/MailLayoutListEN.xls' : '../sampleCSV/MailLayoutListEN.xls',
        sampleCSVMailLayoutsListPathJP: true ? 'sampleCSV/MailLayoutListJP.xls' : '../sampleCSV/MailLayoutListJP.xls',
        sampleCSVAdTagReleaseCheckListPathEN: true ? 'sampleCSV/AddFrameDataForCheckTemplateEN.xls' : '../sampleCSV/AddFrameDataForCheckTemplateEN.xls',
        sampleCSVAdTagReleaseCheckListPathJP: true ? 'sampleCSV/AddFrameDataForCheckTemplateJP.xls' : '../sampleCSV/AddFrameDataForCheckTemplateJP.xls',
        sampleCSVParentCampaignListPath: true ? 'sampleCSV/CampaignImportTemplate.xls' : '../sampleCSV/CampaignImportTemplate.xls',
        sampleCSVPointCampaignListPath: true ? 'sampleCSV/PointImportTemplate.xls' : '../sampleCSV/PointImportTemplate.xls',
        sampleCSVCouponCampaignListPath: true ? 'sampleCSV/CouponImportTemplate.xls' : '../sampleCSV/CouponImportTemplate.xls',
        maximumAllowedFileSize: 25000000
      },
      exportDisabledMessage: 'No record(s) selected to export',
      submuitDisabledMessage: 'No record(s) selected to submit',
      entity: {
        eventCwd: 1,
        menuIdRequest: 2,
        wakuRequest: 3,
        koushinKanri: 6,
        teirei: 8,
        webPublish: 4,
        eMagazine: 5,
        preSales: 9,
        topBanner: 10,
        campaign: 36,
        dashboard: 30,
        distributionNumbers: 42,
        delegateApprovalTask: 43,
        releaseCheck: 45,
        adFrameCorrectionRequest: 46,
        couponInformation: 50,
        manageRuleExeDay: 52,
        teireiEventManagement: 53,
        NonJSBannerInformations: 56,
        NonJSBannerSchedulings: 54,
        eventRule: 55,
        digitalAssetManagement: 57,
        mailLayout: 58,
        digitalAssetSearch: 59,
        personalizedContents: 60,
        adTagReleaseCheck: 62,
        mailReleaseCheck: 63,
        topPagePublishingArea: 414,
        ncBannerPublishingArea: 4106,
        campaignCouponDetail: 66,
        campaignApproval: 65
      },
      adFrameCorrectionApprive: {
        adDept: 'AdDept',
        adLeader: 'AdLeader',
        reject: 'Reject'
      },
      adFrameCorrectionAppriveStatus : {
        adDept : 1,
        adLeader : 2,
        allApproved : 3,
        reject : 4
      },
      adFrameCorrectionApplicantStatus : {
          request : 1,
          contentConfirmation : 2
      },
      adFrameCorrectionInchargeStatus : {
          notYet : 1,
          inprogress : 2,
          inadequacy : 3,
          correctionCompleted : 4,
          responseCompleted : 5,
          cancelRequest : 6
      },
      adFrameCorrectionHeaderMappings : {
        basicInformation : 1,
        deliveryRelatedInformation : 2,
        publishingRelatedInformation : 3,
        adTeamUse : 4
      },
      entityName: {
        eventCwd: 'Events',
        menuIdRequest: 'MenuIdRequests',
        wakuRequest: 'AdInstructions',
        koushinKanriRequest: 'KoushinKanriRequests',
        webPublishRequest: 'PublishingRequests',
        eMagzineRequests: 'Emagazines',
        preSalesRequests: 'PreSalesRequests',
        topPublishingSchedule: 'TopBannerSchedules',
        topBannerRequests: 'TopBannerRequests',
        adFrameRequests: 'AdFrameRequests',
        campaigns: 'Campaigns',
        distributionNumbers: 'DistributionNumberAggregation',
        releaseCheck: 'ReleaseCheckRequests',
        adFrameCorrectionRequest: 'AdFrameCorrectionRequests',
        adFrameCrctnRequests: 'AdFrameCrctnRequests',
        eventRule: 'EventRule',
        teireiEventRules: 'TeireiEventRules',
        teireiEventManagement: 'TeireiEventManagement',
        mailLayout: 'MailLayouts',
        registerMailLayout: 'MailLayout',
        digitalAssetSearch: 'DigitalAssetSearch',
        adTagReleaseCheck: 'AdTagReleaseCheck',
        mailReleaseCheck: 'MailCrawlCheck'
      },
      entityStates: {
        releaseCheckRequestList: 'releaseCheckRequestList',
        eMagazineRequestList: 'eMagazineRequestList',
        koushinKanriList: 'koushinKanriList',
        updateKoushinKanri: 'updateKoushinKanri',
        updateEMagazine: 'updateEMagazine',
        viewEMagazine: 'viewEMagazine',
        viewkoushinKanri: 'viewkoushinKanri',
        updateReleaseCheck: 'updateReleaseCheck',
        viewReleaseCheck: 'viewReleaseCheck',
        registerReleaseCheck: 'registerReleaseCheck',
        registerEMagazine: 'registerEMagazine',
        createWebPublishRequest: 'createWebPublishRequest',
        registerKoushinKanri: 'registerKoushinKanri',
        topBannerRequest: 'topBannerRequest',
        digitalAssetManagement: 'digitalAssetManagement',
        campaignList: 'campaignList',
        campaignListNonHensei: 'campaignListNonHensei',
        approveCampaignList: 'approveCampaignList',
        rejectedCampaignList: 'rejectedCampaignList',
        campaignRegistration: 'campaignRegistration',
        couponRegistration: 'couponRegistration',
        pointRegistration: 'pointRegistration',
        campaignPlanning: 'campaignPlanning',
        campaignView: 'campaignView',
        couponView: 'couponView',
        landingPage: 'landingPage',
        pointEdit: 'pointEdit',
        couponEdit: 'couponEdit',
        pointView: 'pointView',
        couponList: 'couponList',
        pointList: 'pointList',
        userNotAuthenticated: 'userNotAuthenticated',
        pointCalendar: 'pointCalendar'
      },
      entityUrlPrefix: {
        menuIdRequest: 'Adds',
        wakuRequest: 'Adds'
      },
      eventCwdFields: {
        recordNumber: 'id',
        createdOn: 'createdOn',
        createdBy: 'createdBy',
        teireiEvent: 'teireiEvent',
        lastUpdatedOn: 'lastUpdatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        largeClassification: 'largeClassification',
        eventName: 'eventName',
        releaseDay: 'releaseDay',
        closingDay: 'closingDay',
        eventUrl: 'eventUrl',
        mediaID: 'mediaInformationId',
        mediaName: 'genreName',
        directorTeam: 'director.team',
        directorPersonIncharge: 'director.id',
        directorEmailId: 'director.email',
        subInchargeDirectorTeam: 'eventCwdSubIncharges.subIncharge.director.team',
        subInchargeDirectorPersonIncharge: 'eventCwdSubIncharges.subIncharge.director.rakutenUserId',
        subInchargeDirectorEmailId: 'eventCwdSubIncharges.subIncharge.director.email',
        producerTeam: 'producer.team',
        producerPersonIncharge: 'producer.id',
        producerEmailId: 'producer.email',
        subInchargeProducerTeam: 'eventCwdSubIncharges.subIncharge.producer.team',
        subInchargeProducerPersonIncharge: 'eventCwdSubIncharges.subIncharge.producer.rakutenUserId',
        subInchargeProducerEmailId: 'eventCwdSubIncharges.subIncharge.producer.email',
        classifications: 'dstngshClssfctn',
        necessaryResources: 'necessaryResources',
        vendorCompany: 'vendorCompany.id',
        numberOfPages: 'numberOfPages',
        numberOfEmailMagazines: 'numberOfEmagazine',
        nmbrFDsgnsSbttlsBnnrs: 'nmbrFDsgnsSbttlsBnnrs',
        immediate: 'immediate',
        jsRequired: 'jsRequired',
        needDevelopment: 'needDevelopment',
        pointEvent: 'pointEvent',
        assetClassification: 'assetClassification',
        expectedAdAmount: 'expectedAdAmount',
        expectedGms: 'expectedGms',
        distributionTool: 'distributionTool',
        mailMagazineFormat: 'format',
        mailMagazineAdType: 'manuscriptType',
        extra: 'extra',
        listCreDept: 'listCreationDepartment',
        listDLContent: 'listDlContent',
        segmentForDisTool: 'distributionToolSegment',
        segmentDetails: 'segmentDetails',
        distributionPurpose: 'distributionPurpose',
        externalClient: 'externalClient',
        distributionNumber: 'distributionNumber',
        businessUnit: 'businessUnit',
        menuId: 'eventCwdMenuIds',
        requestRemarks: 'requestRemarks',
        approvalStatus: 'approvalStatus',
        nextActionByRole: 'nextActionByRole',
        nextActionByUser: 'nextActionByUser',
        ndSstCrtnNstrctns: 'ndSstCrtnNstrctns',
        needTopBanner: 'needTopBanner',
        assetCreationInstId: 'assetCreationInstruction',
        distriReleaseStatus: 'distributionStatus',
        emagazineCheckRequest: 'emagCheckRequest',
        publishingRequestID: 'webPublishingRequest',
        assetCreationStatus: 'assetCreationStatus',
        vendorCompanyMailAddress: 'vendorCompany.companyEmail',
        officialNewsName: 'officialNewsName',
        productionCostEstimate: 'productionCostEstimate',
        wakuID: 'waku',
        stopOperation: 'stopOperation',
        assetComments: 'assetCreationComments',
        approvalComments: 'approvalComments',
        campaignId: 'campaignId',
        hugeEvent: 'hugeEvent',
        expectedPointCost: 'expectedPointCost',
        expectedCouponCost: 'expectedCouponCost',
        pcId: 'pcId',
        couponId: 'couponId',
        linkId: 'linkId',
        issueId: 'issueId',
        campaignName: 'campaignName',
        eventType: 'eventCwdType',
        seriesEvent: 'seriesEvent',
        genre: 'genre',
        adTeamCheckStatus: 'adTeamCheckStatus',
        reasonForStop: 'reasonForStop',
        releaseCheckVendorId: 'releaseCheckVendorSuggestion.vendorCompany.id',
        releaseCheckVendorEmail: 'releaseCheckVendorSuggestion.vendorCompany.companyEmail',
        releaseCheckId: 'releaseCheckRequests.id',
        wakuInformation: 'wakuInformation',
        bigEventId: 'bigEventId'
      },
      teireiEventManagementCwdFields: {
        recordNumber: 'id',
        createdOn: 'createdOn',
        createdBy: 'createdBy',
        teireiEvent: 'teireiEvent',
        lastUpdatedOn: 'lastUpdatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        largeClassification: 'largeClassification',
        eventName: 'eventName',
        releaseDay: 'releaseDay',
        closingDay: 'closingDay',
        eventUrl: 'eventUrl',
        mediaID: 'mediaInformationId',
        mediaName: 'genreName',
        directorTeam: 'director.team',
        directorPersonIncharge: 'director.id',
        directorEmailId: 'director.email',
        subInchargeDirectorTeam: 'eventCwdSubIncharges.subIncharge.director.team',
        subInchargeDirectorPersonIncharge: 'eventCwdSubIncharges.subIncharge.director.rakutenUserId',
        subInchargeDirectorEmailId: 'eventCwdSubIncharges.subIncharge.director.email',
        producerTeam: 'producer.team',
        producerPersonIncharge: 'producer.id',
        producerEmailId: 'producer.email',
        subInchargeProducerTeam: 'eventCwdSubIncharges.subIncharge.producer.team',
        subInchargeProducerPersonIncharge: 'eventCwdSubIncharges.subIncharge.producer.rakutenUserId',
        subInchargeProducerEmailId: 'eventCwdSubIncharges.subIncharge.producer.email',
        classifications: 'dstngshClssfctn',
        necessaryResources: 'necessaryResources',
        vendorCompany: 'vendorCompany.id',
        numberOfPages: 'numberOfPages',
        numberOfEmailMagazines: 'numberOfEmagazine',
        nmbrFDsgnsSbttlsBnnrs: 'nmbrFDsgnsSbttlsBnnrs',
        immediate: 'immediate',
        jsRequired: 'jsRequired',
        needDevelopment: 'needDevelopment',
        pointEvent: 'pointEvent',
        assetClassification: 'assetClassification',
        expectedAdAmount: 'expectedAdAmount',
        expectedGms: 'expectedGms',
        distributionTool: 'distributionTool',
        mailMagazineFormat: 'format',
        mailMagazineAdType: 'manuscriptType',
        extra: 'extra',
        listCreDept: 'listCreationDepartment',
        listDLContent: 'listDlContent',
        segmentForDisTool: 'distributionToolSegment',
        segmentDetails: 'segmentDetails',
        distributionPurpose: 'distributionPurpose',
        externalClient: 'externalClient',
        distributionNumber: 'distributionNumber',
        businessUnit: 'businessUnit',
        menuId: 'eventCwdMenuIds',
        requestRemarks: 'requestRemarks',
        approvalStatus: 'approvalStatus',
        nextActionByRole: 'nextActionByRole',
        nextActionByUser: 'nextActionByUser',
        ndSstCrtnNstrctns: 'ndSstCrtnNstrctns',
        needTopBanner: 'needTopBanner',
        assetCreationInstId: 'assetCreationInstruction',
        distriReleaseStatus: 'distributionStatus',
        emagazineCheckRequest: 'emagCheckRequest',
        publishingRequestID: 'webPublishingRequest',
        assetCreationStatus: 'assetCreationStatus',
        vendorCompanyMailAddress: 'vendorCompany.companyEmail',
        officialNewsName: 'officialNewsName',
        productionCostEstimate: 'productionCostEstimate',
        wakuID: 'waku',
        stopOperation: 'stopOperation',
        assetComments: 'assetCreationComments',
        approvalComments: 'approvalComments',
        campaignId: 'campaignId',
        hugeEvent: 'hugeEvent',
        expectedPointCost: 'expectedPointCost',
        expectedCouponCost: 'expectedCouponCost',
        pcId: 'pcId',
        couponId: 'couponId',
        linkId: 'linkId',
        issueId: 'issueId',
        campaignName: 'campaignName',
        eventType: 'eventCwdType',
        seriesEvent: 'seriesEvent',
        genre: 'genre',
        adTeamCheckStatus: 'adTeamCheckStatus',
        reasonForStop: 'reasonForStop',
        releaseCheckVendorId: 'releaseCheckVendorSuggestion.vendorCompany.id',
        releaseCheckVendorEmail: 'releaseCheckVendorSuggestion.vendorCompany.companyEmail',
        releaseCheckId: 'releaseCheckRequests.id',
        wakuInformation: 'wakuInformation',
        ruleId: 'eventRule.id',
        ruleName: 'ruleName',
        autoGenStatus: 'autoGenStatus'
      },
      menuIdRequestFields: {
        recordNumber: 'menuidRequestId',
        timeOfRegistration: 'createdOn',
        personRegistering: 'createdBy',
        lastModifiedTime: 'lastUpdatedOn',
        lastModifier: 'lastUpdatedBy',
        ADInChargeName: 'menuidRequestVendor',
        ADInChargeStatus: 'vendorWorkStatus',
        requesterApplicantStatus: 'producerWorkStatus',
        departmentName: 'departmentName',
        mediaName: 'mediaName',
        requesterApplicantName: 'producer',
        phoneExtensionNumber: 'phoneExtnNo',
        expectedStartDateOfTheSale: 'expectedSaleStartDate',
        eventStartDate: 'eventStartDate',
        salesMethod: 'salesMethod',
        CSVFileForMenuCreation: 'csvFileName',
        otherDocuments: 'otherDocfileName',
        requesterComment: 'requesterComment',
        menuName: 'menuName',
        menuID: 'menuIds',
        numberOfRowsInTheCSV: 'csvNoOfRows',
        lotteryADMenuRequest: 'menuRequestLotteryAd',
        rakutenCapitalMenuRequest: 'menuRequestTargetShop',
        ADSalesPromotionCheck: 'adSalesPromotionCheck',
        menuIDRequestVendorMailID: 'vendorMailId',
        requesterApplicantMailID: 'requesterMailId',
        ADSalesGroupMailID: 'adSalesGroupMailId',
        comments: 'menuIdRequestsComment',
        vendorLogs: 'vendorLogs'
      },
      wakuIdRequestFields: {
        id: 'id',
        timeOfRegistration: 'createdOn',
        personRegistering: 'createdBy',
        lastModifiedTime: 'lastUpdatedOn',
        lastModifier: 'lastUpdatedBy',
        adFrameType: 'adFrameType',
        ADInChargeStatus: 'vendorWorkStatus',
        dayOfRequest: 'dayOfRequest',
        requesterApplicantStatus: 'producerWorkStatus',
        departmentName: 'departmentName',
        mediaName: 'mediaName',
        producerUserName: 'producerUserName',
        phoneExtnNo: 'phoneExtnNo',
        eventStartDate: 'eventStartDate',
        adMenuName: 'adMenuName',
        packRegistrationRqrd: 'packRegistrationRqrd',
        packCsvFileName: 'packCsvFileName',
        packRegistrationId: 'packRegistrationId',
        csvFileName: 'csvFileName',
        hasPreSales: 'hasPreSales',
        totalOfferAmount: 'totalOfferAmount',
        supportNews: 'supportNews',
        adFrameIds: 'adFrameIds',
        producerGenkouWorkStatus: 'producerGenkouWorkStatus',
        adNspctnInchargeWorkStatus: 'adNspctnInchargeWorkStatus',
        childAdFramesNo: 'childAdFramesNo',
        adFrameIdsNo: 'adFrameIdsNo',
        adInchargeComment: 'adInchargeComment',
        producerComment: 'producerComment',
        operationIncharge: 'operationIncharge',
        packAdFrameStatus: 'packAdFrameStatus',
        csvNoOfRows: 'csvNoOfRows',
        packCsvNoOfRows: 'packCsvNoOfRows',
        priorityOrder: 'priorityOrder',
        vendorLog: 'vendorLog',
        comments: 'comments',
        checkBeforeFileName: 'checkBeforeFileName',
        checkAfterFileName: 'checkAfterFileName'
      },
      koushinKanriFields: {
        createdOn: 'createdOn',
        recordNo: 'id',
        createdBy: 'createdBy',
        lastUpdatedOn: 'lastUpdatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        eventCwdId: 'eventCwd.id',
        status: 'status',
        stopOperation: 'stopOperation',
        eventName: 'eventName',
        eventStartTime: 'eventStartTime',
        eventEndTime: 'eventEndTime',
        director: 'director',
        producer: 'producer',
        eventUrl: 'eventUrl',
        needPublishingRequest: 'needPublishingRequest',
        genre: 'genre',
        publishingDevice: 'publishingDevice',
        bannerFolder: 'bannerFolder',
        catchText1: 'catchText1',
        catchText2: 'catchText2',
        catchText3: 'catchText3',
        eventUrlPc: 'eventUrlPc',
        eventUrlMb: 'eventUrlMb',
        eventUrlSp: 'eventUrlSp',
        confirmationUrl: 'confirmationUrl',
        mbTopCatcher: 'mbTopCatcher',
        needUmekusa: 'needUmekusa',
        rastaTag: 'rastaTag',
        needCoding: 'needCoding',
        codingCategory: 'codingCategory',
        directorRequestRemark: 'directorRequestRemark',
        wakuIdSearched: 'wakuIdSearched',
        menuId: 'menu.id',
        menuName: 'menuName',
        wakuId: 'waku.id',
        wakuName: 'wakuName',
        wakuCount: 'wakuCount',
        requiredWakuCount: 'requiredWakuCount',
        wakuUrl: 'wakuUrl',
        directorLog: 'directorLog',
        requestRemarks: 'requestRemarks',
        topBannerImageUrlPc: 'topBannerImageUrlPc',
        topBannerImageUrlSp: 'topBannerImageUrlSp',
        topBannerImageUrlTb: 'topBannerImageUrlTb',
        comment: 'comment'
      },
      webPublishFields: {
        recordNumber: 'id',
        timeOfRegistration: 'createdOn',
        personRegistering: 'createdBy',
        lastModifiedTime: 'lastUpdatedOn',
        lastModifier: 'lastUpdatedBy',
        requesterName: 'requesterName',
        requesterMailId: 'requesterEmail',
        isNationalClient: 'isNationalClient',
        requestRemarks: 'requestRemarks',
        serviceName: 'serviceName',
        publishingDevicePC: 'deviceTypePc',
        publishingDeviceSP: 'deviceTypeSp',
        publishingDeviceTB: 'deviceTypeTb',
        publishingDeviceMB: 'deviceTypeMb',
        eventId: 'eventCwd',
        nameOfPersonInChargeP: 'producer',
        pEmailId: 'producer.email',
        nameOfPersonInChargeD: 'director',
        dEmailId: 'director.email',
        eventUrl: 'eventUrl',
        urlToConfirm: 'urlToConfirm',
        eventName: 'eventName',
        eventHoldingPeriod: 'eventHoldingPeriod',
        eventStartTime: 'eventStartTime',
        eventEndTime: 'eventEndTime',
        bannerFolder: 'bannerFolder',
        text10: 'bannerText1',
        text25: 'bannerText2',
        text35: 'bannerText3',
        adOfferAmount: 'adOfferAmount',
        adSalesAmount: 'adSalesAmount',
        topBannerPublishingExpectation: 'topBannerPublishingExpectation',
        ncBannerPublishingArea: 'ncBannerPublishingArea',
        topPagePublishingArea: 'topPagePublishingArea',
        isIncentiveAvailable: 'isIncentiveAvailable',
        jiraTicketUrl: 'jiraTicketUrl',
        topBannerPublishinPlanned: 'tpBnnrPblshngPlnnd',
        specifyPublishingDate: 'spcfyTpBnnrPblshngDt',
        topBannerPersonalizedContents: 'topBannerPersonalizedContents',
        topBanner: 'topBannerFileName',
        specifyPublishingDateEventStartTime: 'startTime',
        specifyPublishingDateEventEndTime: 'endTime',
        personalizedContents: 'content',
        personalizedUrl: 'url',
        personalizedImg: 'imageFileName',
        otherBannerImageUrl: 'otherBannerImageUrl',
        otherBannerImageFileName: 'otherBannerImageFileName',
        otherBannerImageCatch: 'otherBannerImageCatch',
        displayRate: 'displayRate',
        deziePath: 'deziePath',
        bannerText: 'bannerText',
        remarks: 'banner_remarks',
        publishingIncharge: 'publishingIncharge',
        closingIncharge: 'closingIncharge',
        topBannerPublishingChoice: 'topBannerPublishingChoice',
        checkItem: 'checkItem',
        topBannerQualityCheck: 'topBannerQualityCheck',
        correctionRequestStatus: 'correctionRequestStatus',
        correctionRequestContents: 'correctionRequestContents',
        correctionStatus: 'correctionStatus',
        correctionMemo: 'correctionMemo',
        bigEventTopBannerExpectation: 'bigEventTopBannerExpectation',
        bigEventTopBanner: 'bigEventTopBannerImgFileName',
        topBannerResultMeasureParam: 'topBannerResultMeasureParam',
        genreTopGenre: 'genre',
        genreTopPublishingAdvisability: 'publishingAdvisability',
        genreTopPublishingLocation: 'location',
        genreTopPublishingOrder: 'spplmntFPblshngRdr',
        genreTopTciStatus: 'status',
        genreTopRemarks: 'remarks',
        workStatus: 'workStatus',
        deliveryFreeIchiba: 'deliveryFreeIchiba',
        bargainIchiba: 'bargainIchiba',
        pointUpIchiba: 'pointUpIchiba',
        pointClub: 'pointClubFlag',
        ichibaNews: 'ichibaNews',
        ichibaNewsPublishDay: 'ichibaNewsPublishDay',
        coupon: 'coupon',
        review: 'review',
        machiRaku: 'machiRaku',
        mediaAndLaunge: 'mediaAndLaunge',
        newProductsIchiba: 'newProductsIchiba',
        newsCommonFooter: 'newsCommonFooter',
        affiliate: 'affiliate',
        overseasSales: 'overseasSales',
        superAuction: 'superAuction',
        giftIchiba: 'giftIchiba',
        mbSuperActionTop: 'mbSuperActionTop',
        deliveryFreeIchibaLargeBanner: 'freeIchibaLargeBanner',
        deliveryFreeIchibaSmallBanner: 'freeIchibaSmallBanner',
        bargainIchibaLargeBanner: 'bargainIchibaLargeBanner',
        bargainIchibaSmallBanner: 'bargainIchibaSmallBanner',
        pointUpIchibaLargeBanner: 'pntpChbLrgBnnr',
        pointUpIchibaSmallBanner: 'pointUpIchibaSmallBanner',
        publishingAdvisabilityPointClub: 'pointClub',
        publishingAdvisabilityRakutenIchibaNews: 'rakutenIchibaNews',
        publishingAdvisabilityCoupon: 'approveCoupon',
        publishingAdvisabilityReview: 'approveReview',
        publishingAdvisabilityMachiRaku: 'approveMachiRaku',
        publishingAdvisabilityMedia: 'approveMedia',
        publishingAdvisabilityLounge: 'approveLaunge',
        publishingAdvisabilitySeasonNavi: 'approveSeasonNavi',
        apAdTotalListPrice: 'apAdTotalListPrice',
        apSufficiencyRate: 'apSufficiencyRate',
        defaultEventStartHour: '10',
        defaultEventStartMinute: '0',
        defaultEventEndHour: '9',
        defaultEventEndMinute: '59',
        pCheckPublishingAdvisability: 'pCheckPublishingAdvisability',
        pCheckStatusRequire: 'pCheckStatusRequire',
        taskStatus: 'taskStatus',
        otherBannerRemarks: 'nc_banner_remarks',
        publishingUrl: 'publishingUrl',
        publishingEventId: 'publishingEventId',
        publishingEventName: 'publishingEventName',
        publishingLocation: 'publishingLocation',
        supplimentOfPublishingOrder: 'supplimentOfPublishingOrder',
        otherPersonIncharge: 'personIncharge'
      },
      eMagazineFields: {
        checkDay: 'checkDay',
        checkUrl: 'checkUrl',
        comments: 'comments',
        createdBy: 'createdBy',
        createdOn: 'createdOn',
        device: 'device',
        distributionDay: 'distributionDay',
        editable: 'editable',
        emailRecipientRoles: 'emailRecipientRoles',
        eventName: 'eventName',
        id: 'id',
        eventCwdId: 'eventCwd.id',
        indicationInputFileCrc: 'indicationInputFileCrc',
        indicationInputFileName: 'indicationInputFileName',
        indicationInputFileUuid: 'indicationInputFileUuid',
        mediaName: 'mediaName',
        newsSubject: 'newsSubject',
        newsSubject2: 'newsSubject2',
        noOfLinks: 'noOfLinks',
        personIncharge: 'personIncharge',
        personInchargeName: 'director.rakutenUserId',
        personInchargeEmail: 'director.email',
        producerCheck: 'producerCheck',
        secondTime: 'secondTime',
        status: 'status',
        timeOfTestTransmission: 'timeOfTestTransmission',
        updatedBy: 'updatedBy',
        updatedOn: 'updatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        lastUpdatedOn: 'lastUpdatedOn'
      },
      mailLayoutFields: {
        mailLayoutId: 'id',
        layoutStatus: 'status',
        eventReleaseDate: 'releaseDate',
        createdOn: 'createdOn',
        createdBy: 'createdBy',
        lastUpdatedOn: 'lastUpdatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        eventIssueIds: 'eventIssueIds',
        producer: 'eventCwd.producer',
        director: 'eventCwd.director',
        productionResource: 'productionResource',
        supplementary: 'supplementary',
        distributionCount: 'distributionCount',
        distributionToolSegment: 'segmentDistributionTool',
        category: 'category',
        mediaId: 'mediaInformationId',
        numberOfEmagazine: 'noEmailMagazines',
        eventId: 'eventCwd',
        eventName: 'eventCwd.eventName',
        entryLastDate: 'entryLastDate',
        comment: 'comment',
        designatedTitle: 'subject.designatedTitle',
        menuId: 'subject.menuId',
        menuName: 'subject.menuName',
        wakuId: 'subject.wakuId',
        wakuName: 'subject.wakuName',
        subjectinfoComment: 'subject.comment',
        preheader: 'subject.preheader',
        lowPortionContents: 'lowPortionContents',
        commonFooter: 'commonFooter',
        largeWakuCount: 'largeWakuCount',
        topPortionWakuCount: 'topPortionWakuCount',
        basicWakuCount: 'basicWakuCount',
        upperPortion: 'basicWakuCountTotal',
        seasonalTieupWaku: 'seasonalTieupWaku',
        specialTieup: 'specialTieup',
        focusShopWaku: 'focusShopWaku',
        otherBannerWaku: 'otherBannerWaku',
        totalAmountPerDstrbn: 'totalAmountPerDstrbn',
        soldPrice: 'soldPrice',
        unsoldWaku: 'unsoldWaku',
        sufficientRate: 'sufficientRate',
        directorsComment: 'confirmations',
        issueId: 'issueId',
        operationStatus: 'stopOperation',
        mediaSpecialName: 'mediaSpecialName',
        adinfoMenuId: 'adinfo.menuId',
        adinfoMenuName: 'adinfo.menuName',
        adinfoWakuId: 'adinfo.wakuId',
        adinfoWakuName: 'adinfo.wakuName',
        adinfoComment: 'adinfo.Comment',
        ranking: 'ranking',
        baseHtml: 'additionalInfo.baseHtml',
        planName: 'planName',
        additionalBanner: 'additionalInfo.additionalBanner',
        targetLink: 'additionalInfo.targetLink',
        text: 'additionalInfo.text',
        additionalInfoComment: 'additionalInfo.comment',
        distributionTime: 'distributionTime'
      },
      mailLayoutLogFields: {
        createdOn: 'createdOn',
        createdBy: 'createdBy',
        lastUpdatedOn: 'lastUpdatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        distributionTime: 'distributionTime',
        productionResource: 'productionResource',
        entryLastDate: 'entryLastDate',
        mailLayoutComment: 'comment',
        subjectDesignatedTitle: 'designatedTitle',
        subjectWakuId: 'subject.wakuId',
        subjectPreheader: 'preheader',
        adinfoMenuId: 'adinfo.menuId',
        adinfoMenuName: 'adinfo.menuName',
        adinfoWakuId: 'adinfo.wakuId',
        adinfoWakuName: 'adinfo.wakuName',
        adinfoComment: 'adinfo.Comment',
        ranking: 'additionalInfo.ranking',
        baseHtml: 'additionalInfo.baseHtml',
        additionalBanner: 'additionalInfo.additionalBanner',
        targetLink: 'additionalInfo.targetLink',
        text: 'additionalInfo.text',
        additionalInfoComment: 'additionalInfo.comment',
        lowPortionContents: 'lowPortionContents',
        commonFooter: 'commonFooter',
        largeWakuCount: 'largeWakuCount',
        topPortionWakuCount: 'topPortionWakuCount',
        basicWakuCount: 'basicWakuCount',
        basicWakuCountTotal: 'upperPortion',
        seasonalTieupWaku: 'seasonalTieupWaku',
        specialTieup: 'specialTieup',
        focusShopWaku: 'focusShopWaku',
        otherBannerWaku: 'otherBannerWaku',
        directorsComment: 'directorsComment',
        eventName: 'eventCwd.eventName'
      },
      releaseCheckFields: {
        checkDate: 'checkDate',
        checkUrl: 'eventUrl',
        comments: 'comments.comment',
        createdBy: 'createdBy',
        createdOn: 'createdOn',
        device: 'largeClassification',
        releaseDate: 'releaseDay',
        editable: 'editable',
        commentTo: 'comments.commentTo',
        eventName: 'eventName',
        id: 'id',
        eventCwdId: 'eventCwd.id',
        indicationInputFileCrc: 'indicationInputFileCrc',
        indicationInputFiles: 'files',
        indicationInputFileUuid: 'indicationInputFileUuid',
        mediaName: 'genreName',
        workVolume: 'workVolume',
        vendorCompany: 'vendorCompany.id',
        vendorCompanyMailAddress: 'vendorCompany.companyEmail',
        personIncharge: 'personIncharge',
        personInchargeName: 'personInCharge.rakutenUserId',
        personInchargeEmail: 'personInCharge.email',
        producerCheck: 'producerCheck',
        secondTime: 'secondTime',
        status: 'status',
        updatedBy: 'updatedBy',
        updatedOn: 'updatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        lastUpdatedOn: 'lastUpdatedOn'
      },
      preSalesFields: {
        requestDetail: 'requestDetail',
        requesterStatus: 'requesterStatus',
        vendorStatus: 'vendorStatus',
        createdBy: 'createdBy',
        createdOn: 'createdOn',
        requesterDepartment: 'requesterDepartment',
        mediaName: 'mediaName',
        editable: 'editable',
        adFrameRequestNumber: 'adFrameRequestNumber',
        eventName: 'eventName',
        id: 'id',
        eventCwdId: 'eventCwd.id',
        presalesAdFrameIds: 'presalesAdFrameIds',
        publishStartDate: 'publishStartDate',
        presalesAdFrameStatus: 'presalesAdFrameStatus',
        preSalesFile: 'preSalesFile',
        adFrameFile: 'adFrameFile',
        agreementUnnecessary: 'agreementUnnecessary',
        wfNumber: 'wfNumber',
        distributionStop: 'distributionStop',
        sendMailToMerchants: 'sendMailToMerchants',
        reasonForCancel: 'reasonForCancel',
        cancelFile: 'cancelFile',
        adTeamNotes: 'adTeamNotes',
        csvFileRows: 'csvFileRows',
        comment: 'comment',
        updatedBy: 'updatedBy',
        updatedOn: 'updatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        lastUpdatedOn: 'lastUpdatedOn'
      },
      adFrameCorrectReqFields: {
        adFrameCorctReqId: ['adFrameCorctReqId', 'id'],
        timeOfRegistration: ['timeOfRegistration', 'createdOn'],
        personRegistered: ['personRegistered', 'createdBy'],
        lastModifiedTime: ['lastModifiedTime', 'lastUpdatedOn'],
        lastUpdatedByUserName: ['lastUpdatedByUserName', 'lastUpdatedBy'],
        request: ['request', 'request'],
        reportToLeader: ['reportToLeader', 'reportToLeader'],
        salesStatus: ['salesStatus', 'salesStatus'],
        preSalesStatus: ['preSalesStatus', 'preSalesStatus'],
        applicantStatus: ['applicantStatus', 'applicantStatus'],
        inChargeStatus: ['inChargeStatus', 'inchargeStatus'],
        menuName: ['menuName', 'menuName'],
        eventStartDate: ['eventStartDate', 'eventStartDate'],
        applicantName: ['applicantName', 'applicantName'],
        applicantDeptName: ['applicantDeptName', 'applicantDepartmentName'],
        mediaInChargeName: ['mediaInChargeName', 'mediaInchargeName'],
        mediaName: ['mediaName', 'mediaName'],
        salesPromotnInChargeName: ['salesPromotnInChargeName', 'salesPromotionInCharge'],
        adFrameCreationReqIds: ['adFrameCreationReqIds', 'adRegistrationInstructions'],
        adFrameIdsToBeCorctd: ['adFrameIdsToBeCorctd', 'adFrameIdsToBeCorrected'],
        totalAdFramePrice: ['totalAdFramePrice', 'totalAdFramesPrice'],
        preSalesExists: ['preSalesExists', 'preSalesExists'],
        irregAppRsnCntMeasure: ['irregAppRsnCntMeasure', 'irregularAppReason'],
        cancelChrgeApplicable: ['cancelChrgeApplicable', 'cancelChargeApplicable'],
        sendEmailMrchntWhnCancl: ['sendEmailMrchntWhnCancl', 'emailMrchntsOnCancl'],
        sendEmailMrchntWhnReAppr: ['sendEmailMrchntWhnReAppr', 'emailMrchntsOnReAppr'],
        eccMrchntApprovalOfCnclReAppr: ['eccMrchntApprovalOfCnclReAppr', 'eccMrchtAprvlOfCancl'],
        manuscriptSaved: ['manuscriptSaved', 'manuscriptSaved'],
        crtnReqDtls: ['crtnReqDtls', 'correctionContentDetails'],
        adframeCrctItemIds: ['adframeCrctItemIds', 'correctionItem'],
        adFrameCorrCsvFiles: ['adFrameCorrCsvFiles', 'adFrameCorrReqCsvFiles'],
        packDelCsvFiles: ['packDelCsvFiles', 'packDelCsvFiles'],
        rePackCsvFiles: ['rePackCsvFiles', 'rePackCsvFiles'],
        cancelCsvFiles: ['cancelCsvFiles', 'cancelCsvFiles'],
        reApprCsvFiles: ['reApprCsvFiles', 'reAppCsvFiles'],
        csvDtlNoOfLines: ['csvDtlNoOfLines', 'csvLineNum'],
        packDtlNoOfLines: ['packDtlNoOfLines', 'packLineNum'],
        creationTeamInternalComment: ['creationTeamInternalComment', 'adCreationTeamInternalCommnt'],
        comment: ['adFrameCorrComment', 'adframeCorrectionCommentIds'],
        adFrameCorrComment: ['adFrameCorrComment', 'adframeCorrectionCommentIds'],
        approvalStatus: ['approvalStatus', 'approvalStatus'],
        nextActionByRole: ['nextActionByRole', 'nextActionByRole'],
        nextActionByUser: ['nextActionByUser', 'nextActionByUser'],
        approvalComment: ['adFrameCorrApprovalComment', 'approvalComments'],
        adFrameCorrApprovalComment: ['adFrameCorrApprovalComment', 'approvalComments'],
        checkBeforeFiles: ['checkBeforeFiles', 'checkBeforeFiles'],
        checkAfterFiles: ['checkAfterFiles', 'checkAfterFiles']
      },
      adFrameCorrectReqSimpleFields: {
        adFrameCorctReqId: ['adFrameCorctReqId', 'id'],
        timeOfRegistration: ['timeOfRegistration', 'createdOn'],
        applicantStatus: ['applicantStatus', 'applicantStatus'],
        inChargeStatus: ['inChargeStatus', 'inchargeStatus'],
        applicantDeptName: ['applicantDeptName', 'applicantDepartmentName'],
        mediaInChargeName: ['mediaInChargeName', 'mediaInchargeName'],
        mediaName: ['mediaName', 'mediaName'],
        menuName: ['menuName', 'menuName'],
        eventStartDate: ['eventStartDate', 'eventStartDate'],
        preSalesExists: ['preSalesExists', 'preSalesExists'],
        totalAdFramePrice: ['totalAdFramePrice', 'totalAdFramesPrice'],
        approvalStatus: ['approvalStatus', ''],
        nextActionByRole: ['nextActionByRole', ''],
        nextActionByUser: ['nextActionByUser', ''],
        approvalComment: ['adFrameCorrApprovalComment', '']
      },
      campaignFields: {
        id: 'id',
        registeredEventId: 'events',
        createdOn: 'createdOn',
        createdBy: 'createdBy',
        lastUpdatedOn: 'lastUpdatedOn',
        lastUpdatedBy: 'lastUpdatedBy',
        approvalStatus: 'approvalStatus',
        nextActionByRole: 'nextActionByRole',
        nextActionByUser: 'nextActionByUser',
        approvalComment: 'approvalComment',
        status: 'active',
        seisakuRequestStatus: 'seisakuRequestStatus',
        planningDepartment: 'planningDepartment',
        campaignName: 'campaignName',
        campaignType: 'campaignType',
        campaignGenres: 'campaignGenres',
        linkLabel: 'linkLabel',
        startDate: 'startDate',
        endDate: 'endDate',
        pointStartDate: 'pointStartDate',
        pointEndDate: 'pointEndDate',
        campaignClassification: 'campaignClassification',
        couponCapital: 'couponCapital',
        userEntry: 'userEntry',
        actualGms: 'actualGms',
        estimatedGms: 'estimatedGms',
        managementDepartment: 'managementDepartment',
        campaignInchargeId: 'campaignIncharge.id',
        campaignInchargeEmail: 'campaignIncharge.email',
        campaignApprovalLeader: 'campaignApprovalLeader',
        campaignContent: 'campaignContent',
        pcHenseiIncharge: 'pcHenseiIncharge',
        spHenseiIncharge: 'spHenseiIncharge',
        campaignPageUrlPc: 'campaignPageUrlPc',
        campaignPageUrlSp: 'campaignPageUrlSp',
        comment: 'comment',
        parentCampaignExists: 'parentCampaignExists',
        parentCampaignName: 'parentCampaign.campaignName',
        couponProcessStatus: 'couponProcessStatus',
        serviceName: 'serviceName',
        notificationPossible: 'notificationPossible',
        differenceCouponLp: 'differenceCouponLp',
        targetShops: 'targetShops',
        numberOfCoupons: 'numberOfCoupons',
        targetUser: 'targetUser',
        targetShopsFileName: 'targetShopsFileName',
        targetShopsUpdateDate: 'targetShopsUpdateDate',
        adAvailable: 'adAvailable',
        notificationPossibleStartDate: 'notificationPossibleStartDate',
        notificationPossibleEndDate: 'notificationPossibleEndDate',
        couponCode: 'couponCode',
        couponName: 'couponName',
        couponAcquisitionStartDate: 'couponAcquisitionStartDate',
        couponAcquisitionEndDate: 'couponAcquisitionEndDate',
        couponUsageStartDate: 'couponUsageStartDate',
        couponUsageEndDate: 'couponUsageEndDate',
        usageCondition: 'usageCondition',
        notificationBannerUrl: 'notificationBannerUrl',
        notificationBannerUserName: 'notificationBannerUserName',
        notificationBannerPwd: 'notificationBannerPwd',
        notificationBannerPrecaution: 'notificationBannerPrecaution',
        notificationBannerTag: 'notificationBannerTag',
        notificationSentencePc: 'notificationSentencePc',
        notificationSentenceFp: 'notificationSentenceFp',
        pcid: 'pcid',
        pointProcessStatus: 'pointProcessStatus',
        pointStartSate: 'pointStartSate',
        pointEndSate: 'pointEndSate',
        maxPoint: 'maxPoint',
        campaignRuleFileName: 'campaignRuleFileName',
        targetCustomer: 'targetCustomer',
        normalPurchasePc: 'normalPurchasePc',
        rakutenBooksPc: 'rakutenBooksPc',
        rakutenKoboPc: 'rakutenKoboPc',
        superAuctionPc: 'superAuctionPc',
        rakutenDeliveryPc: 'rakutenDeliveryPc',
        buyingClubPc: 'buyingClubPc',
        notifPageUpDate: 'notifPageUpDate',
        notifPageUrl: 'notifPageUrl',
        campaignInfo: 'campaignInfo',
        bannerUpTargetUrl: 'bannerUpTargetUrl',
        bannerReferenceId: 'bannerReferenceId',
        bannerReferencePwd: 'bannerReferencePwd',
        entrySubscriptionStartDate: 'entrySubscriptionStartDate',
        entrySubscriptionEndDate: 'entrySubscriptionEndDate',
        entryName: 'entryName',
        entryPcmsUrl: 'entryPcmsUrl',
        entryIssuesUrl: 'entryIssuesUrl',
        entryId: 'entryId',
        entryPermissionAcquisition: 'entryPermissionAcquisition',
        otherEntryInfo: 'otherEntryInfo',
        campaignCategory: 'campaignCategory',
        couponInformation: 'campaignMkt.campaignCoupon',
        pointInformation: 'campaignMkt.campaignPoint',
        mediaName: 'media.name'
      },
      commonFields: {
        delete: 'delete',
        edit: 'edit',
        view: 'view',
        copy: 'copy'
      },
      fieldRestriction: {
        readOnly: 1,
        readOnlyText: 'READ_ONLY',
        hidden: 2,
        hiddenText: 'HIDDEN'
      },
      charCount: 500,
      wakuIdDefaultProdComment: '▼回収依頼のみでCSVを添付出来ない場合は、掲載開始日と枠数を全てご記入下さい\nMM/DD(●)：XX枠 \nMM/DD(●)：XX枠\nMM/DD(●)：XX枠\nMM/DD(●)：XX枠',
      issueMenuID: {
        moduleName: 'MenuID Creation Request',
        charCount: 500,
        menuCharCount: 255,
        csvSize: 5,
        otherFileSize: 25
      },
      textCharCount: {
        large: 1000,
        extraLarge: 10000
      },
      wakuID: {
        charCount: 10000
      },
      releaseCheck: {
        charCount: 1000,
        maxMsgSelection: 100,
        adTagReleaseCheckEntityId: 62001
      },
      approvalLeaderStatus: {
        WAITING_FOR_LEADER_APPROVAL: 1,
        APPROVED: 2,
        REJECTED: 3
      },
      deviceTypesDistribution: {
        pc: 'PC',
        mb: 'MB',
        sp: 'SP',
        monthsCount: 3,
        dateFormatPlace: 'YYYY/MM',
        dateFormat: 'yyyy/MM'
      },
      assignRegistration: {
        pendingAssign: 'pendingAssign',
        waitingAssignSubmission: 'waitingAssignSubmission'
      },
      advancedSearch: {
        equal: 'EQUAL',
        notEqual: 'NOT_EQUAL',
        greaterThan: 'GT',
        lessThan: 'LT',
        equalToGreaterThan: 'EQ_GT',
        equalToLessThan: 'EQ_LT',
        between: 'BETWEEN',
        in: 'IN',
        like: 'LIKE',
        contains: 'CONTAINS',
        true: 'true',
        false: 'false',
        integer: 'INTEGER',
        datetime: 'DATETIME',
        time: 'TIME',
        decimal: 'DECIMAL',
        enOperationStatus: 'Operation Status',
        jaOperationStatus: '実施ステータス',
        enMediaName: 'Media Name',
        jaMediaName: '媒体名orジャンル',
        enPmColumn: 'PM Column',
        jaPmColumn: 'PM特記事項',
        blank: 'IS_NULL',
        notBlank: 'IS_NOT_NULL',
        mediaNameId: 346,
        today: 'Today',
        yesterday: 'Yesterday',
        tomorrow: 'Tomorrow',
        thisWeek: 'ThisWeek',
        lastWeek: 'LastWeek',
        nextWeek: 'NextWeek',
        thisMonth: 'ThisMonth',
        lastMonth: 'LastMonth',
        nextMonth: 'NextMonth',
        thisYear: 'ThisYear',
        lastYear: 'LastYear',
        nextYear: 'NextYear',
        directInput: 'DirectInput',
        seriestrue: 'seriestrue',
        seriesfalse: 'seriesfalse',
        vendorCompanyIds: [22, 398, 406],
        preSalesFileIds: [300, 301, 307],
        multipleCriteriaIds : [365, 364, 363, 362, 361, 360, 359, 358, 357, 313, 49, 314, 336, 374, 338, 45, 335, 52, 57, 296, 310, 88, 87, 285, 208, 210, 209, 207, 206, 170, 241, 184, 185, 186, 187, 188, 189, 190, 125, 354, 355, 201, 202, 203, 204, 205, 211, 213, 218, 219, 220, 158, 159, 160, 161, 162, 163, 164, 395, 402, 439, 440, 458, 441, 442, 443, 444, 445, 446, 698, 699, 700, 4104, 4105, 4106, 46046, 46047, 58008, 58023, 58026, 58028, 58029, 58030, 58033, 58035, 58036, 58037, 58038, 58039, 58040, 58041, 58063, 63014, 63017, 63020], 
        multipleSelectionDisabledIds: [221, 222, 223, 224, 225, 226, 375, 124, 346, 205, 482, 483, 484, 485, 486, 487, 488, 4104, 4105, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 36010, 8062],
        multipleCriteriaFieldNames: ['top.page.publishing.area', 'is.incentive.available', 'jira.ticket.url', 'display.rate', 'nashokura.dezie.path', 'publishing.incharge', 'closing.incharge', 'other.banner.image.url', 'other.banner.image.file', 'other.banner.image.catch'],
        enRepeats: 'Repeats',
        jaRepeats: '繰り返し',
        teireiEventSearchVendorCompanyFieldNames: ['desired.vendor.company', 'release.check.vendor.company'],
        teireiEventSearchMultipleCriteriaIdFieldNames: ['approval.comments', 'approval.status', 'asset.creation.instructions', 'asset.creation.instructions.comments', 'coupon.id', 'genre.id', 'issue.ids', 'menu.id', 'next.action.by.role', 'next.action.by.user', 'pc.id', 'publishing.request.id', 'sub.incharge.director.email.id', 'sub.incharge.director.person.incharge', 'sub.incharge.director.team', 'sub.incharge.producer.email.id', 'sub.incharge.producer.person.incharge', 'sub.incharge.producer.team', 'waku.id'],
        yes: 'Yes',
        no: 'No',
        jPyes: 'はい',
        jPno: 'いいえ',
        DAMFieldIds: [1098, 1099, 1100, 1101],
        segmentDistributionTool: 'segment.for.distribution.tool',
        searchCondition: {
          AND: 'AND',
          OR: 'OR'
        },
        adframeCorrectionItemId: 'adframe.correction.item.id'
      },
      adTagRelCheckFilters: {
        stg: '1',
        prd: '2',
        envAll: '3',
        ng: '1',
        ok: '2',
        okManual: '3',
        ngUrlOutOfScope: '4',
        yetToCheck: '5',
        checkSkipped: '6',
        checkStatusAll: '7'
      },
      mailRelCheckFilters: {
        blank: '0',
        ng: '1',
        ok: '2',
        okManual: '3',
        checkResultAll: '4'
      },
      topBannerSearch: {
        targetDevice: { 'PC_TB': 'PC_TB', 'SP': 'SP' }
      },
      validExtensions: ['html', 'css', 'docx', 'js', 'txt', 'tmlp', 'gif', 'jpg', 'jpeg', 'png', 'psd', 'ai', 'xlsx', 'xls', 'ppt', 'zip'],
      searchParams: {
        objSearchEventSubEntity: {
          approveA: '&pendingAssignApproval=true',
          rejectA: '&pendingResubmit=true&assignment=true',
          approveE: '&pendingApproval=true',
          rejectE: '&pendingResubmit=true',
          importK: '&submitted=true&koushinkanri=true',
          cEventsApprove: '&pendingApproval=true&changedEvent=true',
          cEventsReject: '&pendingResubmit=true&changedEvent=true',
          assetCreation: '&submitted=true&assetinstruction=true',
          directorAssign: '&pendingAssign=true',
          waitingAssign: '&waitingAssignSubmission=true',
          adTeamCheck: '&adTeamCheck=true',
          Reject: '&approvalFlow=Reject',
          AdDept: '&approvalFlow=AdDept',
          AdLeader: '&approvalFlow=AdLeader'
        },
        searchSortClause: {
          '1': {
            events: '&sort=releaseDay,asc&sort=id,asc',
            approveA: '&sort=releaseDay,asc&sort=id,asc',
            rejectA: '&sort=releaseDay,asc&sort=id,asc',
            approveE: '&sort=releaseDay,asc&sort=id,asc',
            rejectE: '&sort=releaseDay,asc&sort=id,asc',
            importK: '&sort=createdOn,asc',
            cEventsApprove: '&sort=releaseDay,asc&sort=id,asc',
            cEventsReject: '&sort=releaseDay,asc&sort=id,asc',
            assetCreation: '&sort=createdOn,asc',
            directorAssign: '&sort=createdOn,asc',
            waitingAssign: '&sort=createdOn,asc',
            latestReleaseDay: '&sort=releaseDay,desc',
            byCampaignNm: '&sort=campaign.campaignName,asc',
            byEventNm: '&sort=eventName,asc',
            adTeamCheck: '&sort=releaseDay,desc'
          },
          2 : '&sort=createdOn,Desc',
          3 : '&sort=createdOn,Desc',
          4 : '&sort=eventStartTime&eventStartTime.dir=asc',
          5 : '&sort=distributionDay,asc&sort=id,asc',
          6 : '&sort=eventStartTime,Asc',
          9 : '&sort=createdOn,Desc',
          36 : '&sort=createdOn,Desc',
          46 : '&sort=id,Desc',
          53 : {
            events: '&sort=releaseDay,asc&sort=id,asc'
          },
          55: '&sort=id,Desc'
        },
        approveResubmitClauses: {
          events: '&view=list',
          approveA: '',
          rejectA: '',
          approveE: '',
          rejectE: '',
          cEventsApprove: '',
          cEventsReject: '',
          importK: '&view=list',
          assetCreation: '&view=list',
          directorAssign: '&view=list',
          waitingAssign: '&view=list',
          adTeamCheck: ''
        }
      },
      userPreference: {
        fieldViewPreference: '?listable=true',
        searchViewPreference: '?searchable=true'
      },
      approveReject: {
        approve: 'approve',
        reject: 'reject',
        resubmit: 'approval',
        commentMandatory: 'Please specify a reason',
        eventApprove: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTAPPROVE_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTAPPROVE_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTAPPROVE_APPROVE_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTAPPROVE_APPROVE_ERROR'
        },
        eventReject: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTREJECT_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTREJECT_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTREJECT_APPROVE_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTREJECT_APPROVE_ERROR'
        },
        eventResubmit: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTRESUBMIT_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTRESUBMIT_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTRESUBMIT_APPROVESUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_EVENTRESUBMIT_APPROVEERROR'
        },
        changedEventApprove: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTAPPROVE_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTAPPROVE_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTAPPROVE_APPROVE_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTAPPROVE_APPROVE_ERROR'
        },
        changedEventReject: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTREJECT_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTREJECT_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTREJECT_APPROVE_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTREJECT_APPROVE_ERROR'
        },
        changedEventResubmit: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTRESUBMIT_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTRESUBMIT_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTRESUBMIT_POPUPTITLE',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_CHANGED_EVENTRESUBMIT_APPROVEERROR'
        },
        assignApprove: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNAPPROVE_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNAPPROVE_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNAPPROVE_APPROVE_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNAPPROVE_APPROVE_ERROR'
        },
        assignReject: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNREJECT_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNREJECT_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNREJECT_APPROVE_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNREJECT_APPROVE_ERROR'
        },
        assignResubmit: {
          approved: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNRESUBMIT_APPROVED',
          popupTitle: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGNRESUBMIT_POPUPTITLE',
          approveSuccess: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGN_RESUBMIT_SUCCESS',
          approveError: 'EVENTS-APPROVE-REJECT-LIST.APPROVEREJECT_ASSIGN_RESUBMIT_ERROR'
        }
      },
      campaignCouponPointRejectApprove: {
        commentLabel: 'CAMPAIGN-COUPON-POINT-APPROVE-REJECT.COMMENT_LABEL'
      },
      sendEventRequest: {
        toDirectorLeaderTitle: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_SendAssignRegistrationRequest',
        toProducerTitle: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_SendEventRegistrationRequest',
        toDirectorSubject: 'SEND-EVENT-REQUEST.CONSTANTS.SENDEVENTREQUEST_TODIRECTSUBJECT',
        toDirectorReminderType: 'SEND-EVENT-REQUEST.CONSTANTS.SENDEVENTREQUEST_TODIRECTREMINDERTYPE',
      },
      kaushinkanriImport: {
        approved: 'KOUSHIN_KANRI.IMPORT.POPUP_MSG',
        popupTitle: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_ImportRequestList',
        param: 'importK'
      },
      webPublishPrefList: {
        'publishing.record.number': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.RECORD_NUMBER',
        'top.page.publishing.area': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.TOP_PAGE_PUBLISHING_AREA',
        'time.of.registration': 'EVENTS.REGISTRATION.TIME_OF_REGISTRATION',
        'person.registered': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.PERSON_REGISTERED',
        'last.modified.time': 'EVENTS.REGISTRATION.LAST_MODIFIED_TIME',
        'last.modifier': 'EVENTS.REGISTRATION.LAST_MODIFIER',
        'requester.name': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.REQUESTER_NAME',
        'requester.mail.id': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.REQUESTER_MAIL_ID',
        'is.national.client': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.NATIONAL_CLIENT_FLAG',
        'request.remarks': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.REQUEST_REMARKS',
        'service.name': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.SERVICE_NAME',
        'publishing.device.pc': 'COMMON.FIELD_KEY_CONSTANTS.PUBLISHING_DEVICE_PC',
        'publishing.device.sp': 'COMMON.FIELD_KEY_CONSTANTS.PUBLISHING_DEVICE_SP',
        'publishing.device.tb': 'COMMON.FIELD_KEY_CONSTANTS.PUBLISHING_DEVICE_TB',
        'publishing.device.mb': 'COMMON.FIELD_KEY_CONSTANTS.PUBLISHING_DEVICE_MB',
        'event.id': 'TEREI_REGISTRATION.EventID',
        'name.of.person.incharge.p': 'COMMON.FIELD_KEY_CONSTANTS.NAME_OF_PERSON_IN_CHARGE_P',
        'p.email.address': 'COMMON.FIELD_KEY_CONSTANTS.P_EMAIL_ADDRESS',
        'name.of.person.incharge.d': 'COMMON.FIELD_KEY_CONSTANTS.NAME_OF_PERSON_IN_CHARGE_D',
        'd.email.address': 'COMMON.FIELD_KEY_CONSTANTS.D_EMAIL_ADDRESS',
        'event.url': 'KOUSHIN_KANRI.REGISTER.EVENT_URL',
        'url.to.confirm': 'COMMON.FIELD_KEY_CONSTANTS.URL_TO_CONFIRM_PUBLISH',
        'event.name': 'EVENTS.REGISTRATION.EVENT_NAME',
        'event.holding.period': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.EVENT_HOLDING_PERIOD',
        'event.start.time': 'KOUSHIN_KANRI.REGISTER.EVENT_START_TIME',
        'event.end.time': 'KOUSHIN_KANRI.REGISTER.EVENT_END_TIME',
        'banner.folder': 'KOUSHIN_KANRI.REGISTER.BANNER_FOLDER',
        'text.within.10.double.byte.characters': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.TEXT_10',
        'text.within.25.double.byte.characters': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.TEXT_25',
        'text.within.35.double.byte.characters': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.TEXT_35',
        'pc.memo': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.AD_OFFER_AMOUNT',
        'sp.memo': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.AD_SALES_AMOUNT_FORECAST',
        'top.banner': 'COMMON.FIELD_KEY_CONSTANTS.TOP_BANNER',
        'ad.list.price': 'COMMON.FIELD_KEY_CONSTANTS.AD_LIST_PRICE',
        'ad.sufficiency.rate': 'COMMON.FIELD_KEY_CONSTANTS.AD_SUFFICIENCY_RATE',
        'nc.banner.publishing.area': 'WEB_PUBLISH_REGISTRATION.FORM_FIELDS.NC_BANNER_PUBLISHING_AREA'
      },
      entitiesDisplayNameList: {
        Events: 'COMMON.ENTITY_KEY_CONSTANTS.EVENT_PLANNING',
        PreSalesRequests: 'COMMON.ENTITY_KEY_CONSTANTS.PRE_SALES_MANAGEMENT',
        MenuIdRequests: 'COMMON.ENTITY_KEY_CONSTANTS.MENU_ID_MANAGEMENT',
        AdFrameRequests: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_MANAGEMENT',
        PublishingRequests: 'COMMON.ENTITY_KEY_CONSTANTS.PUBLISHING_MANAGEMENT',
        Emagazines: 'COMMON.ENTITY_KEY_CONSTANTS.EMAGAZINE_MANAGEMENT',
        KoushinKanriRequests: 'COMMON.ENTITY_KEY_CONSTANTS.SIMPLE_KOUSHIN_MANAGEMENT',
        AdInstructions: 'COMMON.ENTITY_KEY_CONSTANTS.AD_INSTRUCTIONS',
        MarketingEvents: 'COMMON.ENTITY_KEY_CONSTANTS.MARKETING_EVENTS',
        TopBannerRequests: 'COMMON.ENTITY_KEY_CONSTANTS.TOP_BANNER_REQUESTS',
        Users: 'COMMON.ENTITY_KEY_CONSTANTS.USERS',
        Roles: 'COMMON.ENTITY_KEY_CONSTANTS.ROLES',
        RequestCreateEvents: 'COMMON.ENTITY_KEY_CONSTANTS.REQUEST_CREATE_EVENTS',
        EventDirectors: 'COMMON.ENTITY_KEY_CONSTANTS.EVENT_DIRECTORS',
        EventAssets: 'COMMON.ENTITY_KEY_CONSTANTS.EVENT_ASSETS',
        ApprovedEvents: 'COMMON.ENTITY_KEY_CONSTANTS.APPROVED_EVENTS',
        Campaigns: 'COMMON.ENTITY_KEY_CONSTANTS.CAMPAIGN',
        ReleaseCheckRequest: 'COMMON.ENTITY_KEY_CONSTANTS.RELEASE_CHECK_REQUEST',
        AdFrameCorrectionRequest: 'COMMON.ENTITY_KEY_CONSTANTS.AD_FRAME_CORRECTION_REQUEST',
        EventRule: 'COMMON.ENTITY_KEY_CONSTANTS.EVENT_RULE',
        TeireiEventManagement: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_TeireiEventManagementList',
        NonJSBannerSchedulings: 'COMMON.MENUS.SUB_MENUS.SUB_MENU_NONJSBANNERSCHEDULINGS',
        MailLayouts: 'COMMON.ENTITY_KEY_CONSTANTS.MAIL_LAYOUTS',
        DigitalAssetSearch: 'COMMON.ENTITY_KEY_CONSTANTS.DIGITAL_ASSET_SEARCH',
        AdTagReleaseCheck: 'COMMON.ENTITY_KEY_CONSTANTS.AD_TAG_RELEASE_CHECK',
        MailCrawlCheck: 'COMMON.ENTITY_KEY_CONSTANTS.MAIL_RELEASE_CHECK'
      },
      errors: {
        code: {
          NO_MANAGER_APPLICABLE: 'emp.srvc.1514',
          SESSION_TIME_OUT: 'emp.gtwy.1007',
          LOCK_TIME_OUT: 'emp.srvc.3028',
          LOCK_TIME_OUT_V2: 'emp.frmwrk.805',
          LOCK_FEATURE_DISABLE: 'emp.frmwrk.806',
          LOCKED_BY_OTHER: 'emp.srvc.3027'
        }
      },
      manHourConfig: {
        startRecords: 30
      },
      campaignConfig: {
        startRecords: 50,
        startRecordsYearView: 20,
        startPage: 0,
        allRecords: 'all'
      },
      eventRoleListConfig: {
          startRecords: 50,
          startPage: 0
      },
      eventListConfig: {
        startPage: 0,
        startRecords: 50,
        tereiStartRecords: 500,
        nextRecords: 5,
        approvalStartPage: 1,
        subEventStartRecords: 10
      },
      digitalAssetConfig: {
          startPage: 0,
          startRecords: 20
      },
      digitalAssetDeleteRole: {
          producer: 1,
          director: 2,
          assetCreationVendor: 7,
          admin: 8
      },
      digitalAssetFolder: {
          publicFolder: 'Public',
          confidentialFolder: 'Confidential'
      },
      digitalAssetPublicFolderPopUpRole: {
          assetCreationVendor: 7
      },
      digitalAssetCommentConfig: {
          startPage: 0,
          startRecords: 10
      },
      digitalAssetFileUploadStatus: {
        IN_PROGRESS: 'IN-PROGRESS',
        FAILED: 'FAILED',
        SUCCESS: 'SUCCESS',
        COMPLETED: 'COMPLETED',
        CANCELLED: 'CANCELLED',
        PROCESSING: 'PROCESSING'
      },
      wakuListConfig: {
        startPage: 0,
        startRecords: 50
      },
      viewEventConfig: {
        pointEvent: 2,
        coupanEvent: 3
      },
      topBannersListConfig: {
        limitToDisplay: 50
      },
      adFrameManagement: {
        empWakuIdPrefix: 'EWID',
        cslLockStateField: 'cslLockState',
        unlock: 1,
        lock: 2
      },
      teireiAdVendorLockRole: {
        teireiAdVendor: 16,
      },
      alertMsgCssClass: {
        'error': 'alert alert-danger customError',
        'success': 'alert alert-success customSuccess',
        'default': ''
      },
      mailReleaseCheck: {
        ERROR_ID_FIELD_NAME: 'error.id',
        OK_MANUAL_TXT: 'OK (set manually)',
        DATE_CONSIDERED_AS_BLANK: '1900/01/01 00:00:00',
        checkMailReleaseCheckStatusColor: {
          NG : 'adTagReleaseCheckNG',
          OK : 'adTagReleaseCheckOkManully'
        },
        checkColumnFilterOptions: [
          {
            label : 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.NOT_CHECKED_YET',
            id : 0,
            isSelected : true,
            customParamValue : 'CHK_COL_NOT_CHECKED_YET'
          },
          {
            'label': 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.ISSUE_ID',
            'id': 1,
            'isSelected':true,
            'customParamValue': 'CHK_COL_ISSUE_ID'
          },
          {
            'label': 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.DISTRIBUTION_DATE_TIME',
            'id': 2,
            'isSelected':true,
            'customParamValue': 'CHK_COL_DISTRIBUTION_DATE_TIME'
          },
          {
            'label': 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.CATEGORY',
            'id': 3,
            'isSelected':true,
            'customParamValue': 'CHK_COL_CATEGORY'
          },
          {
            'label': 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.SEGMENT',
            'id': 4,
            'isSelected':true,
            'customParamValue': 'CHK_COL_SEGMENT'
          },
          {
            'label': 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.DESIGNATED_TITLE',
            'id': 5,
            'isSelected':true,
            'customParamValue': 'CHK_COL_DESIGNATED_TITLE'
          },
          {
            'label': 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.WAKU',
            'id': 6,
            'isSelected':true,
            'customParamValue': 'CHK_COL_WAKU'
          }
        ],
        checkResultDropdownParam: [
          {
            'key': 1,
            'value': 'AD_RELEASE_CHECK.OK',
            'param': 'CHECK_RESULT_OK'
          },
          {
            'key': 2,
            'value': 'AD_RELEASE_CHECK.NG',
            'param': 'CHECK_RESULT_NG'
          },
          {
            'key': 3,
            'value': 'AD_RELEASE_CHECK.OK_MANUAL',
            'param': 'CHECK_RESULT_OK_MANUAL'
          },
          {
            'key': 4,
            'value': 'MAIL_RELEASE_CHECK.BLANK',
            'param': 'CHECK_RESULT_BLANK'
          },
          {
            'key': 5,
            'value': 'MAIL_RELEASE_CHECK.DO_NOT_APPLY',
            'param': 'CHECK_RESULT_ALL'
          }
        ],
        checkDateTimeDropDown: [
          {
            key: 1,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.TODAY',
            param: 'CHECK_DATE_TIME_TODAY'
          },
          {
            key: 2,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.YESTERDAY',
            param: 'CHECK_DATE_TIME_YESTERDAY'
          },
          {
            key: 3,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.THIS_WEEK',
            param: 'CHECK_DATE_TIME_THIS_WEEK'
          },
          {
            key: 4,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.LAST_WEEK',
            param: 'CHECK_DATE_TIME_LAST_WEEK'
          },
          {
            key: 5,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.THIS_MONTH',
            param: 'CHECK_DATE_TIME_THIS_MONTH'
          },
          {
            key: 6,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.ONE_MONTH',
            param: 'CHECK_DATE_TIME_ONE_MONTH'
          },
          {
            key: 7,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.THREE_MONTHS',
            param: 'CHECK_DATE_TIME_THREE_MONTHS'
          },
          {
            key: 8,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.SIX_MONTHS',
            param: 'CHECK_DATE_TIME_SIX_MONTHS'
          },
          {
            key: 9,
            value: 'MAIL_RELEASE_CHECK.FILTER.CHECK_COLUMN.NOT_CHECKED_YET',
            param: 'CHECK_DATE_TIME_NOT_CHECKED_YET'
          },
          {
            key: 10,
            value: 'AD_RELEASE_CHECK.CHECK_DATE_DROPDOWN.NOT_APPLY',
            param: 'CHECK_DATE_TIME_NOT_APPLY'
          }
        ],
        ignoreDistributionTime: '23:59'
      },
      multiSelectSettings: {
        scrollableHeight: '250px',
        scrollable: true,
        enableSearch: true,
        showCheckAll: true,
        showUncheckAll: true,
        smartButtonMaxItems: 0,
        smartButtonTextConverter: function (itemText, originalItem) {
          return itemText;
        }
      },
      eventTypes: {
        1: 'EVENTS.REGISTRATION.EVENT_TYPES.NORMAL_EVENT',
        2: 'EVENTS.REGISTRATION.EVENT_TYPES.POINT_EVENT',
        3: 'EVENTS.REGISTRATION.EVENT_TYPES.COUPON_EVENT',
        4: 'EVENTS.REGISTRATION.EVENT_TYPES.SEISAKU_EVENT'
      },
      eventExportTypes: {
        EVENT_LIST: 0,
        WAKU_LIST: 1
      },
      campaignTypes: {
        'NORMAL': 'CAMPAIGN.REGISTRATION.CAMPAIGN_TYPES.NORMAL_CAMPAIGN',
        'HUGE': 'CAMPAIGN.REGISTRATION.CAMPAIGN_TYPES.HUGE_CAMPAIGN',
        'SEASONAL': 'CAMPAIGN.REGISTRATION.CAMPAIGN_TYPES.SEASONAL_CAMPAIGN',
      },
      exportRequestTypes: {
        EVENT_LIST_VIEW: { key: 1, label: 'DOWNLOADS.COMMON.EVENT_LIST_VIEW' },
        EVENT_TEIREI_EVENT_MANAGEMENT: { key: 62, label: 'DOWNLOADS.COMMON.EVENT_TEIREI_EVENT_MANAGEMENT' },
        EVENT_CALENDAR_VIEW: { key: 2, label: 'DOWNLOADS.COMMON.EVENT_CALENDAR_VIEW' },
        EVENT_ASSET_CREATION: { key: 3, label: 'DOWNLOADS.COMMON.EVENT_ASSET_CREATION' },
        EVENT_PENDING_ASSIGN: { key: 4, label: 'DOWNLOADS.COMMON.EVENT_PENDING_ASSIGN' },
        EVENT_WAITING_ASSIGN: { key: 5, label: 'DOWNLOADS.COMMON.EVENT_WAITING_ASSIGN' },
        EVENT_NEW_EVENT_APPROVAL: { key: 6, label: 'DOWNLOADS.COMMON.EVENT_NEW_EVENT_APPROVAL' },
        EVENT_NEW_ASSIGN_APPROVAL: { key: 7, label: 'DOWNLOADS.COMMON.EVENT_NEW_ASSIGN_APPROVAL' },
        EVENT_CHANGED_APPROVAL: { key: 8, label: 'DOWNLOADS.COMMON.EVENT_CHANGED_APPROVAL' },
        EVENT_RESUBMIT_EVENT_APPROVAL: { key: 9, label: 'DOWNLOADS.COMMON.EVENT_RESUBMIT_EVENT_APPROVAL' },
        EVENT_RESUBMIT_ASSIGN_APPROVAL: { key: 10, label: 'DOWNLOADS.COMMON.EVENT_RESUBMIT_ASSIGN_APPROVAL' },
        EVENT_RESUBMIT_CHANGED_APPROVAL: { key: 11, label: 'DOWNLOADS.COMMON.EVENT_RESUBMIT_CHANGED_APPROVAL' },
        EVENT_IMPORT_WEB_REQUEST: { key: 12, label: 'DOWNLOADS.COMMON.EVENT_IMPORT_WEB_REQUEST' },
        SIMPLE_WEB_REQUEST_LIST_VIEW: { key: 19, label: 'DOWNLOADS.COMMON.SIMPLE_WEB_REQUEST_LIST_VIEW' },
        SIMPLE_WEB_REQUEST_CALENDAR_VIEW: { key: 20, label: 'DOWNLOADS.COMMON.SIMPLE_WEB_REQUEST_CALENDAR_VIEW' },
        WEB_PUBLISH_REQUEST_LIST_VIEW: { key: 21, label: 'DOWNLOADS.COMMON.WEB_PUBLISH_REQUEST_LIST_VIEW' },
        WEB_PUBLISH_REQUEST_CALENDAR_VIEW: { key: 22, label: 'DOWNLOADS.COMMON.WEB_PUBLISH_REQUEST_CALENDAR_VIEW' },
        WEB_PUBLISH_REQUEST_BASIC_LIST_VIEW: { key: 46, label: 'DOWNLOADS.COMMON.WEB_PUBLISH_REQUEST_LIST_VIEW' },
        WEB_PUBLISH_REQUEST_BASIC_CALENDAR_VIEW: { key: 47, label: 'DOWNLOADS.COMMON.WEB_PUBLISH_REQUEST_CALENDAR_VIEW' },
        KPI_DASHBOARD_ALL: { key: 13, label: 'DOWNLOADS.COMMON.KPI_DASHBOARD_ALL' },
        KPI_DASHBOARD_GROUPS: { key: 14, label: 'DOWNLOADS.COMMON.KPI_DASHBOARD_GROUPS' },
        KPI_DASHBOARD_GENRES: { key: 15, label: 'DOWNLOADS.COMMON.KPI_DASHBOARD_GENRES' },
        KPI_DASHBOARD_TEAMS: { key: 16, label: 'DOWNLOADS.COMMON.KPI_DASHBOARD_TEAMS' },
        KPI_DASHBOARD_CAMPAIGN: { key: 17, label: 'DOWNLOADS.COMMON.KPI_DASHBOARD_CAMPAIGN' },
        KPI_DASHBOARD_EVENT: { key: 18, label: 'DOWNLOADS.COMMON.KPI_DASHBOARD_EVENT' },
        EVENT_BASIC_NEW_EVENT_APPROVAL: { key: 31, label: 'DOWNLOADS.COMMON.EVENT_NEW_EVENT_APPROVAL' },
        EVENT_BASIC_RESUBMIT_EVENT_APPROVAL: { key: 32, label: 'DOWNLOADS.COMMON.EVENT_RESUBMIT_EVENT_APPROVAL' },
        EVENT_BASIC_NEW_ASSIGN_APPROVAL: { key: 33, label: 'DOWNLOADS.COMMON.EVENT_NEW_ASSIGN_APPROVAL' },
        EVENT_BASIC_RESUBMIT_ASSIGN_APPROVAL: { key: 34, label: 'DOWNLOADS.COMMON.EVENT_RESUBMIT_ASSIGN_APPROVAL' },
        EVENT_BASIC_ASSET_CREATION: { key: 29, label: 'DOWNLOADS.COMMON.EVENT_ASSET_CREATION' },
        EVENT_BASIC_IMPORT_WEB_REQUEST: { key: 27, label: 'DOWNLOADS.COMMON.EVENT_IMPORT_WEB_REQUEST' },
        EVENT_BASIC_PENDING_ASSIGN: { key: 26, label: 'DOWNLOADS.COMMON.EVENT_PENDING_ASSIGN' },
        EVENT_BASIC_WAITING_ASSIGN: { key: 28, label: 'DOWNLOADS.COMMON.EVENT_WAITING_ASSIGN' },
        EVENT_BASIC_CHANGED_APPROVAL: { key: 35, label: 'DOWNLOADS.COMMON.EVENT_CHANGED_APPROVAL' },
        EVENT_BASIC_RESUBMIT_CHANGED_APPROVAL: { key: 30, label: 'DOWNLOADS.COMMON.EVENT_RESUBMIT_CHANGED_APPROVAL' },
        WAKU_INFOMATION_DOWNLOAD_LIST: {key:25,label: 'DOWNLOADS.COMMON.WAKU_INFOMATION_DOWNLOAD_LIST'},
        WAKU_INFOMATION_DOWNLOAD_CALENDER: {key:48,label: 'DOWNLOADS.COMMON.WAKU_INFOMATION_DOWNLOAD_CALENDER'},
        RELEASE_CHECK_EXPORT_LIST: { key: 37, label: 'DOWNLOADS.COMMON.RELEASE_CHECK_EXPORT_LIST' },
        RELEASE_CHECK_EXPORT_CALENDAR: { key: 38, label: 'DOWNLOADS.COMMON.RELEASE_CHECK_EXPORT_CALENDAR' },
        RELEASE_CHECK_BASIC_EXPORT_LIST: { key: 39, label: 'DOWNLOADS.COMMON.RELEASE_CHECK_EXPORT_LIST' },
        RELEASE_CHECK_BASIC_EXPORT_CALENDAR: { key: 40, label: 'DOWNLOADS.COMMON.RELEASE_CHECK_EXPORT_CALENDAR' },
        USER_LIST_EXPORT: { key: 41, label: 'DOWNLOADS.COMMON.USER_LIST_EXPORT' },
        REGULAR_EVENT_AD_FRAME: { key: 42, label: 'DOWNLOADS.COMMON.REGULAR_EVENT_AD_FRAME' },
        REGULAR_EVENT_AD_FRAME_IMPORT_EXPORT: { key: 43, label: 'DOWNLOADS.COMMON.REGULAR_EVENT_AD_FRAME_IMPORT_EXPORT' },
        TOP_BANNER_CHECK_SCHEDULE: { key: 44, label: 'DOWNLOADS.COMMON.TOP_BANNER_CHECK_SCHEDULE' },
        CAMPAIGN_LIST_EXPORT: { key: 45, label: 'DOWNLOADS.COMMON.CAMPAIGN_LIST_EXPORT' },
        COUPON_LIST_EXPORT: { key: 53, label: 'DOWNLOADS.COMMON.COUPON_LIST_EXPORT' },
        CAMPAIGN_CALENDAR_COUPON_EXPORT: { key: 76, label: 'DOWNLOADS.COMMON.CAMPAIGN_CALENDAR_COUPON_EXPORT' },
        COUPON_LIST_VIEW_EXPORT: { key: 87, label: 'DOWNLOADS.COMMON.COUPON_LIST_VIEW_EXPORT' },
        COUPON_APPROVAL_LIST_VIEW_EXPORT: { key: 88, label: 'DOWNLOADS.COMMON.COUPON_APPROVAL_LIST_VIEW_EXPORT' },
        COUPON_REJECTED_LIST_VIEW_EXPORT: { key: 89, label: 'DOWNLOADS.COMMON.COUPON_REJECTED_LIST_VIEW_EXPORT' },
        POINT_LIST_EXPORT: { key: 78, label: 'DOWNLOADS.COMMON.POINT_LIST_EXPORT' },
        POINT_LIST_VIEW_EXPORT: { key: 81, label: 'DOWNLOADS.COMMON.POINT_LIST_VIEW_EXPORT' },
        POINT_APPROVAL_LIST_VIEW_EXPORT: { key: 82, label: 'DOWNLOADS.COMMON.POINT_APPROVAL_LIST_VIEW_EXPORT' },
        POINT_REJECTED_LIST_VIEW_EXPORT: { key: 83, label: 'DOWNLOADS.COMMON.POINT_REJECTED_LIST_VIEW_EXPORT' },
        AD_FRAME_CRCTN_REQ_EXPORT: {key:54, label: 'DOWNLOADS.COMMON.AD_FRAME_CRCTN_REQ_EXPORT'},
        AD_FRAME_CORRECTION_REQUEST_REJECTED_EXPORT: { key: 50, label: 'DOWNLOADS.COMMON.AD_FRAME_CORRECTION_REQUEST_REJECTED_EXPORT' },
        AD_FRAME_CORRECTION_REQUEST_PENDING_AD_DEPT_APPROVAL_EXPORT: { key: 51, label: 'DOWNLOADS.COMMON.AD_FRAME_CORRECTION_REQUEST_PENDING_AD_DEPT_APPROVAL_EXPORT' },
        AD_FRAME_CORRECTION_REQUEST_PENDING_APPLICANT_LEADER_APPROVAL_EXPORT: {key:52, label: 'DOWNLOADS.COMMON.AD_FRAME_CORRECTION_REQUEST_PENDING_APPLICANT_LEADER_APPROVAL_EXPORT'},
        BASIC_SEARCH_CAMPAIGN_LIST_VIEW: {key:49,label: 'DOWNLOADS.COMMON.CAMPAIGN_LIST_EXPORT'},
        NONJS_SCREEN: {key:56,label: 'DOWNLOADS.COMMON.BANNER_INFORMATION_EXPORT'},
        NONJS_CALENDAR_VIEW: {key:57,label: 'DOWNLOADS.COMMON.BANNER_INFORMATION_EXPORT'},
        NONJS_LIST_VIEW: {key:58,label: 'DOWNLOADS.COMMON.BANNER_INFORMATION_EXPORT'},
        BASIC_SEARCH_NONJS_CALENDAR: {key:59,label: 'DOWNLOADS.COMMON.BANNER_INFORMATION_EXPORT'},
        BASIC_SEARCH_NONJS_LIST: {key:60,label: 'DOWNLOADS.COMMON.BANNER_INFORMATION_EXPORT'},
        NONJS_MANAGEMENT_SCREEN: {key:61,label: 'DOWNLOADS.COMMON.NON_JS_BANNER_MANAGEMENT'},
        REGULAR_EVENT_AD_FRAME_EXPORT: { key: 63, label: 'DOWNLOADS.COMMON.REGULAR_EVENT_AD_FRAME' },
        REGULAR_EVENT_AD_FRAME_ADPLAT_EXPORT: { key: 64, label: 'DOWNLOADS.COMMON.REGULAR_EVENT_AD_FRAME' },
        EVENT_LOG_VIEW: {key:55,label: 'DOWNLOADS.COMMON.EVENT_LOG_VIEW'},
        BIG_EVENT_EXPORT: { key: 65, label: 'EVENTS.REGISTRATION.EXPORT_SUB_URLS_EVENTS.DOWNLOAD_EXPORT_DETAILS' },
        PERSONALIZED_CONTENTS_EXPORT: {key:66,label: 'DOWNLOADS.COMMON.PERSONALIZED_CONTENTS_EXPORT'},
        MAIL_LAYOUT_EXPORT: { key: 67, label: 'DOWNLOADS.COMMON.MAIL_LAYOUT_EXPORT' },
        MAIL_LAYOUT_LOG_EXPORT: { key: 68, label: 'DOWNLOADS.COMMON.MAIL_LAYOUT_LOG_EXPORT' },
        AD_TAG_RELEASE_CHECK_EXPORT: { key: 69, label: 'DOWNLOADS.COMMON.AD_TAG_RELEASE_CHECK_LIST_VIEW' },
        MAIL_RELEASE_CHECK_EXPORT: { key: 70, label: 'DOWNLOADS.COMMON.MAIL_RELEASE_CHECK_LIST_VIEW' },
        OTHER_BANNER_CALENDAR_VIEW: { key: 71, label: 'DOWNLOADS.COMMON.OTHER_BANNER_INFORMATION_EXPORT' },
        OTHER_BANNER_LIST_VIEW: { key: 72, label: 'DOWNLOADS.COMMON.OTHER_BANNER_INFORMATION_EXPORT' },
        OTHER_BANNER_SCREEN: { key: 73, label: 'DOWNLOADS.COMMON.OTHER_BANNER_INFORMATION_EXPORT' },
        BASIC_SEARCH_OTHER_BANNER_CALENDAR: {key:74,label: 'DOWNLOADS.COMMON.OTHER_BANNER_INFORMATION_EXPORT'},
        BASIC_SEARCH_OTHER_BANNER_LIST: {key:75,label: 'DOWNLOADS.COMMON.OTHER_BANNER_INFORMATION_EXPORT'},
        CAMPAIGN_LIST_NON_HENSEI_EXPORT: { key: 85, label: 'DOWNLOADS.COMMON.CAMPAIGN_LIST_NON_HENSEI_EXPORT' },
        APPROVE_CAMPAIGN_LIST_EXPORT: { key: 84, label: 'DOWNLOADS.COMMON.APPROVE_CAMPAIGN_LIST_EXPORT' },
        REJECTED_CAMPAIGN_LIST_EXPORT: { key: 86, label: 'DOWNLOADS.COMMON.REJECTED_CAMPAIGN_LIST_EXPORT' }
      },
      exportStatus: {
        IN_PROGRESS: { key: 2, label: 'DOWNLOADS.COMMON.IN_PROGRESS' },
        COMPLETED: { key: 3, label: 'DOWNLOADS.COMMON.COMPLETED' },
        FAILED: { key: 4, label: 'DOWNLOADS.COMMON.FAILED' },
        READY: { key: 1, label: 'DOWNLOADS.COMMON.READY' },
        INTERRUPTED: { key: 5, label: 'DOWNLOADS.COMMON.INTERRUPTED' }
      },
      importUpdateStatus: {
        IN_PROGRESS: { key: 2, label: 'DOWNLOADS.COMMON.IMPORT_PROGRESS' },
        COMPLETED: { key: 3, label: 'DOWNLOADS.COMMON.COMPLETED' },
        FAILED: { key: 4, label: 'DOWNLOADS.COMMON.FAILED' },
        READY: { key: 1, label: 'DOWNLOADS.COMMON.READY' },
        INTERRUPTED: { key: 5, label: 'DOWNLOADS.COMMON.INTERRUPTED' }
      },
      importUpdateReqType: {
        EVENT_IMPORT: { key: 1, label: 'COMMON.IMPORT.REQUEST_TYPES.EVENT_IMPORT' },
        EVENT_UPDATE: { key: 2, label: 'COMMON.IMPORT.REQUEST_TYPES.EVENT_UPDATE' },
        ASSIGN_IMPORT: { key: 3, label: 'COMMON.IMPORT.REQUEST_TYPES.ASSIGN_IMPORT' },
        TEIREI_EVENT_IMPORT: { key: 4, label: 'COMMON.IMPORT.REQUEST_TYPES.TEIREI_EVENT_IMPORT' },
        WEB_PUBLISHING_IMPORT: { key: 5, label: 'COMMON.IMPORT.REQUEST_TYPES.WEB_PUBLISHING_IMPORT' },
        RELEASE_CHECK_IMPORT: { key:6, label: 'COMMON.IMPORT.REQUEST_TYPES.RELEASE_CHECK_IMPORT'},
        SUB_URL_REGISTRATION: { key:7, label: 'COMMON.IMPORT.REQUEST_TYPES.SUB_URL_REGISTRATION'},
        SUB_URL_UPDATE: { key: 8, label: 'COMMON.IMPORT.REQUEST_TYPES.SUB_URL_UPDATE' },
        MAIL_LAYOUT_UPDATE: { key: 9, label: 'COMMON.IMPORT.REQUEST_TYPES.MAIL_LAYOUT_UPDATE' },
        AD_TAG_RELEASE_CHECK_IMPORT: { key:10, label: 'COMMON.IMPORT.REQUEST_TYPES.AD_TAG_RELEASE_CHECK_IMPORT'},
        CAMPAIGN_PARENT_IMPORT: { key:11, label: 'COMMON.IMPORT.REQUEST_TYPES.CAMPAIGN_PARENT_IMPORT'},
        CAMPAIGN_POINT_IMPORT: { key:12, label: 'COMMON.IMPORT.REQUEST_TYPES.CAMPAIGN_POINT_IMPORT'},
        CAMPAIGN_COUPON_IMPORT: { key:12, label: 'COMMON.IMPORT.REQUEST_TYPES.CAMPAIGN_COUPON_IMPORT'}
      },
      bannerType: {
        UXP: { key: '1', value: true },
        OTHER: { key: '2', value: true }
      },
      bannerTypeSearchObj: { id: 0, fieldId: 4117, fieldName: 'banner.type', fieldValue: false, filterCondition: 'IN' },
      bannerTypeFieldFilters: {
        UXP_BANNER: 'Js & Non Js Banner',
        OTHER_BANNER: 'Other Banner'
      },
      otherBannerOtherArea: { key: 'userInput_', value: 'Other Area' },
      userInputKey: 'userInput_',
      genreDevice: {
        PC: { key: '3', keyEvent: '1,2', value: true },
        SP: { key: '2', keyEvent: '3,4', value: true },
        TB: { key: '4', keyEvent: '0', value: true },
        MB: { key: '1', keyEvent: '5,6', value: true }
      },
      genreFieldIDs: [374, 221, 222, 223, 224, 225, 226],
      otherBannerIds: [4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116],
      publishingGenre: {
        publishingAdvisability: { id: 0, fieldId: 376, fieldName: 'publishing.advisability', fieldValue: false, filterCondition: 'EQUAL' },
        category: { id: 0, fieldId: 7, fieldName: 'category', fieldValue: false, filterCondition: 'IN' },
        deviceType: { id: 0, fieldId: 375, fieldName: 'genre.device.type', fieldValue: false, filterCondition: 'IN' }
      },
      otherBannerDevice: {
        PC: { key: '3', keyEvent: '1,2', value: true },
        SP: { key: '2', keyEvent: '3,4', value: true },
      },
      otherBannerSearchObj: { id: 0, fieldId: 4118, fieldName: 'banner.dvc.type', fieldValue: false, filterCondition: 'IN' },
      preSalesFileType: { id: 0, fieldId: 379, fieldName: 'presales.file.type', fieldValue: 0, filterCondition: 'EQUAL' },
      defaultLockState: 1,
      CouponDisplay: {
        OFF: 0,
        ON: 1
      },
      couponManagement: {
              toolUrl : 'https://collabo.rakuten.co.jp/applymng/useApplicant'
      },
      kpiDashboard: {
        leftMenus: {
          ALL: 'All',
          GROUP: 'Groups',
          TEAM: 'Teams',
          GENRE: 'Genres',
          CAMPAIGN: 'Campaign',
          EVENT: 'Event'
        },
        leftMenuIds: {
          ALL: 'ALL',
          GROUP: '0_1',
          TEAM: '0_2',
          GENRE: '0_3',
          CAMPAIGN: '0_4',
          EVENT: '0_5',
          BLANK: '0_6'
        },
        tabs: {
          0: 'Return & Investment',
          1: 'Advertisement',
          2: 'Site Performance',
          3: 'Mail Magazine',
          4: 'Downlaod'
        },
        tabIds: {
          RETURN_INVESTMENT: 0,
          ADVERTISEMENT: 1,
          SITE_PERF: 2,
          MAIL_MAGAZINE: 3,
          DOWNLOAD: 4
        },
        charts: {
          NUMBER_OF_MONTHS: 25,
          KPI_25_MONTHS: 'KPI_DASHBOARD.CHARTS.KPI_25_MONTHS',
          ALL_GROUP_25_MONTHS: 'KPI_DASHBOARD.CHARTS.ALL_GROUP_25_MONTHS',
          ALL_TEAM_25_MONTHS: 'KPI_DASHBOARD.CHARTS.ALL_TEAM_25_MONTHS',
          ALL_GENRE_25_MONTHS: 'KPI_DASHBOARD.CHARTS.ALL_GENRE_25_MONTHS',
          DEVICE_25_MONTHS: 'KPI_DASHBOARD.CHARTS.DEVICE_25_MONTHS',
          BENCHMARK_COMPARE: 'KPI_DASHBOARD.CHARTS.BENCHMARK_COMPARE',
          DEVICE_COMPARE: 'KPI_DASHBOARD.CHARTS.DEVICE_COMPARE',
          NO_DATA_TEXT: 'KPI_DASHBOARD.CHARTS.NO_DATA_TEXT',
          MOUSE_DRAGGING_CLASSNM: 'highchart-dragging',
          DATA_LABEL_COLOR: '#FFFFFF'
        },
        highStockDateOptions: {
          DAY_FORMAT: '%Y/%m/%d',
          MONTH_FORMAT: '%Y/%m',
          WEEK_FORMAT: '%m/%e'
        },
        singleEvent: {
          DIALOG_TITLE: 'Event Search',
          TWO_YEAR_PERF_CHART: {
            RESPONSE: {
              NORMAL_EVENTS: 'normalEvents',
              LONG_TERM_EVENTS: 'longTermEvents'
            }
          },
          EVENT_TYPE: {
            LONGTERM: 'Long term event',
            NORMAL: 'Normal event'
          },
          INITIAL_ROW_NO: 50
        },
        eventSearchProducersMultiSelOptions: {
          scrollableHeight: '250px',
          scrollable: true,
          enableSearch: true,
          showCheckAll: false,
          showUncheckAll: false,
          smartButtonMaxItems: 1,
          selectionLimit: 1,
          smartButtonTextConverter: function (itemText, originalItem) {
            return itemText;
          }
        },
        eventSearchCategories: [
          {
            id: '1',
            label: 'PC Web'
          },
          {
            id: '3',
            label: 'SP Web'
          },
          {
            id: '2',
            label: 'PC Mail'
          },
          {
            id: '4',
            label: 'SP Mail'
          }
        ],
        LOADER_TIMEOUT: 50000,
        ERROR_MSG_HIDE_TIMEOUT: 5000,
        GRID_VIEW_PORT_ADJUST_HEIGHT: 6,
        dataLabelsAlign: {
          0: 'left',
          1: 'right',
          2: 'center'
        },
        kpiList: [
          {
            'Return & Investment': [
              { id: 1, kpiName: 'ROAS', symbol: '%', progression: true },
              { id: 32, kpiName: 'Profit', symbol: 'JPY', progression: false },
              { id: 34, kpiName: 'Revenue', symbol: 'JPY', progression: false },
              { id: 16, kpiName: 'GMS', symbol: 'JPY', progression: false },
              { id: 3, kpiName: 'Ad Sales', symbol: 'JPY', progression: false },
              { id: 17, kpiName: 'GMS Margin', symbol: 'JPY', progression: false },
              { id: 39, kpiName: 'Total Cost', symbol: 'JPY', progression: false },
              { id: 8, kpiName: 'Coupon Cost', symbol: 'JPY', progression: false },
              { id: 30, kpiName: 'Point Cost', symbol: 'JPY', progression: false },
              { id: 31, kpiName: 'Production Cost', symbol: 'JPY', progression: false },
              { id: 21, kpiName: 'Labor Cost', symbol: 'JPY', progression: false }
            ]
          },
          {
            'Advertisement': [
              { id: 1, kpiName: 'ROAS', symbol: '%', progression: true },
              { id: 45, kpiName: 'GMS', symbol: 'JPY', progression: false },
              { id: 3, kpiName: 'Ad Sales', symbol: 'JPY', progression: false },
              { id: 46, kpiName: 'GMS Margin', symbol: 'JPY', progression: false },
              { id: 29, kpiName: 'Page View', symbol: '', progression: false },
              { id: 22, kpiName: 'Mail Open', symbol: '', progression: false },
              { id: 47, kpiName: 'Click', symbol: '', progression: false },
              { id: 36, kpiName: 'Sufficiency Rate', symbol: '%', progression: true },
              { id: 9, kpiName: 'CPC', symbol: 'JPY', progression: true },
              { id: 11, kpiName: 'CTR', symbol: '%', progression: true },
              { id: 12, kpiName: 'CVR', symbol: '%', progression: true },
              { id: 53, kpiName: 'Order Number', symbol: '', progression: false },
              { id: 4, kpiName: 'Ad Total List Price', symbol: 'JPY', progression: false },
              { id: 35, kpiName: 'Sold # of Waku', symbol: '', progression: false },
              { id: 38, kpiName: 'Total # of Waku', symbol: '', progression: false },
              { id: 2, kpiName: 'Ad Discount Rate', symbol: '%', progression: true },
              { id: 42, kpiName: 'Ad Discount Price', symbol: 'JPY', progression: false }
            ]
          },
          {
            'Site Performance': [
              { id: 37, kpiName: 'Through New User', symbol: '', progression: false },
              { id: 23, kpiName: 'New User CVR', symbol: '%', progression: true },
              { id: 24, kpiName: 'New User Order', symbol: '', progression: false },
              { id: 25, kpiName: 'New User Visits', symbol: '', progression: false },
              { id: 18, kpiName: 'Impression (PV)', symbol: '', progression: false },
              { id: 41, kpiName: 'Visits', symbol: '', progression: false },
              { id: 15, kpiName: 'Frequency of Visits', symbol: '', progression: true },
              { id: 48, kpiName: 'CTR', symbol: '%', progression: true },
              { id: 49, kpiName: 'CVR', symbol: '%', progression: true },
              { id: 5, kpiName: 'AOV', symbol: 'JPY', progression: true },
              { id: 33, kpiName: 'Purchase Rate', symbol: '%', progression: true },
              { id: 13, kpiName: 'Existing User', symbol: '', progression: false },
              { id: 27, kpiName: 'Order', symbol: '', progression: false },
              { id: 19, kpiName: 'In-flow', symbol: '', progression: false },
              { id: 20, kpiName: 'In-flow Rate', symbol: '%', progression: true },
              { id: 6, kpiName: 'Bounce Rate', symbol: '%', progression: true },
              { id: 14, kpiName: 'Exit Rate', symbol: '%', progression: true },
              { id: 40, kpiName: 'Unique User', symbol: '', progression: false }
            ]
          },
          {
            'Mail Magazine': [
              { id: 43, kpiName: 'GMS', symbol: 'JPY', progression: false },
              { id: 44, kpiName: 'GMS Margin', symbol: 'JPY', progression: false },
              { id: 7, kpiName: 'Click', symbol: '', progression: false },
              { id: 50, kpiName: 'CTR', symbol: '%', progression: true },
              { id: 10, kpiName: 'CTOR', symbol: '%', progression: true },
              { id: 26, kpiName: 'Open Rate', symbol: '%', progression: true },
              { id: 51, kpiName: 'CVR', symbol: '%', progression: true },
              { id: 52, kpiName: 'AOV', symbol: 'JPY', progression: true },
              { id: 28, kpiName: 'Order', symbol: '', progression: false }
            ]
          },
          {
            'Download': []
          }
        ],
        salesPerformanceXAxis: {
          UNIQUE_USER: 'KPI_DASHBOARD.CHARTS.SALES_PERF_XAXIS.UNIQUE_USER',
          PAGE_VIEW: 'KPI_DASHBOARD.CHARTS.SALES_PERF_XAXIS.PAGE_VIEW',
          VISITS: 'KPI_DASHBOARD.CHARTS.SALES_PERF_XAXIS.VISITS',
          ORDER: 'KPI_DASHBOARD.CHARTS.SALES_PERF_XAXIS.ORDER'
        },
        targetVersusActualXAxis: {
          TARGET: 'KPI_DASHBOARD.CHARTS.TARGETVSACTUAL_XAXIS.TARGET',
          ACTUAL: 'KPI_DASHBOARD.CHARTS.TARGETVSACTUAL_XAXIS.ACTUAL'
        },
        deviceTypes: {
          PC: 1,
          SP: 2,
          getType: function (number) {
            if (number == 1) {
              return 'PC';
            } else if (number == 2) {
              return 'SP';
            }
            return '';
          }
        },
        dateFormats: {
          DASHBOARD_COMMON: 'YYYY/MM/DD',
          TWO_YEAR_PERF_FORMAT_TO_SORT: 'YYYY/MM',
          TWO_YEAR_PERF_SUBTITLE_DATE_FORMAT: 'MMM, yyyy'
        },
        allDataDownload: {
          INITIAL_ROW_NO: 50
        },
        performanceIndicators: {
          Good: 1,
          Poor: 2,
          Roas: 3,
          Profit: 4
        },
        selectRadio: {
          ALL: 'all',
          Groups: 'groups',
          Teams: 'teams',
          Genre: 'genre'
        },
        dataType: {
          SC: 'sc',
          RAT: 'rat'
        },
        Role: {
          Producers : 1,
          Directors : 2
        }
      },
        NO_COLUMN_IS_CONFIGURED_IN_REDIS_FOR_SIMPLE_LAYOUT: 'NO_COLUMN_IS_CONFIGURED_IN_REDIS_FOR_SIMPLE_LAYOUT',
        APPROVAL_STATUS_INT_VALUE: {
          WAITING_FOR_AD_DEPT: 1,
          WAITING_FOR_APPLICANT_LEADER_APPROVAL: 2,
          All_APPROVED: 3,
          REJECTED: 4
        },
        ADFRAME_CORR_REQ_COLUMN_LIST_MAP : {
          adFrameCorctReqId: 'ADFRAME.REGISTRATION.RECORD_NUMBER',
          timeOfRegistration: 'ADFRAME.REGISTRATION.TIME_OF_REGISTRATION',
          applicantStatus: 'ADFRAME.REGISTRATION.APPLICANT_STATUS',
          inChargeStatus: 'ADFRAME.REGISTRATION.IN_CHARGE_STATUS',
          approvalStatus: 'ADFRAME.REGISTRATION.APPROVAL_STATUS',
          applicantDeptName: 'ADFRAME.REGISTRATION.APPLICANT_DEPARTMENT_NAME',
          mediaInChargeName: 'ADFRAME.REGISTRATION.MEDIA_IN_CHARGE_NAME',
          mediaName: 'ADFRAME.REGISTRATION.MEDIA_NAME',
          menuName: 'ADFRAME.REGISTRATION.MENU_NAME',
          eventStartDate: 'ADFRAME.REGISTRATION.EVENT_START_DATE',
          totalAdFramePrice: 'ADFRAME.REGISTRATION.TOTAL_PRICE_OF_AD_FRAMES_TO_BE_CORRECTED',
          nextActionByRole: 'ADFRAME.REGISTRATION.NEXT_ACTION_BY_ROLE',
          nextActionByUser: 'ADFRAME.REGISTRATION.NEXT_ACTION_BY_USER',
          adFrameCorrApprovalComment: 'ADFRAME.REGISTRATION.APPROVAL_COMMENT',
          approvalComment: 'ADFRAME.REGISTRATION.APPROVAL_COMMENT',
          personRegistered: 'ADFRAME.REGISTRATION.PERSON_REGISTERED',
          lastModifiedTime: 'ADFRAME.REGISTRATION.LAST_MODIFIED_TIME',
          lastUpdatedByUserName: 'ADFRAME.REGISTRATION.LAST_MODIFIER',
          request: 'ADFRAME.REGISTRATION.REQUEST',
          reportToLeader: 'ADFRAME.REGISTRATION.REPORTED_TO_LEADER',
          salesStatus: 'ADFRAME.REGISTRATION.SALES_STATUS',
          preSalesStatus: 'ADFRAME.REGISTRATION.PRE_SALES_STATUS',
          applicantName: 'ADFRAME.REGISTRATION.APPLICANT',
          salesPromotnInChargeName: 'ADFRAME.REGISTRATION.SALE_PROMOTION_IN_CHARGE_NAME',
          adFrameCreationReqIds: 'ADFRAME.REGISTRATION.AD_FRAME_CREATION_REQUEST_ID',
          adFrameIdsToBeCorctd: 'ADFRAME.REGISTRATION.AD_FRAME_IDS_TO_BE_CORRECTED',
          irregAppRsnCntMeasure: 'ADFRAME.REGISTRATION.IRREGULAR_APPLICATION_REASON_COUNTERMEASURE',
          cancelChrgeApplicable: 'ADFRAME.REGISTRATION.CANCEL_CHARGE_APPLICABLE',
          sendEmailMrchntWhnCancl: 'ADFRAME.REGISTRATION.SEND_EMAIL_TO_MERCHANTS_WHEN_CANCELLED',
          sendEmailMrchntWhnReAppr: 'ADFRAME.REGISTRATION.SEND_EMAIL_TO_MERCHANTS_WHEN_RE_APPROPRIATED',
          eccMrchntApprovalOfCnclReAppr: 'ADFRAME.REGISTRATION.ECC_MERCHANTS_APPROVAL_OF_CANCEL_RE_APPROPRIATION',
          manuscriptSaved: 'ADFRAME.REGISTRATION.MANUSCRIPTS_SAVED_ALREADY_DELIVERED',
          crtnReqDtls: 'ADFRAME.REGISTRATION.DETAILS_OF_THE_CORRECTION_CONTENT',
          adframeCrctItemIds: 'ADFRAME.REGISTRATION.DETAILS_OF_THE_CORRECTION_ITEM',
          adFrameCorrCsvFiles: 'ADFRAME.REGISTRATION.AD_FRAME_CSV_FOR_CORRECTION',
          packDelCsvFiles: 'ADFRAME.REGISTRATION.PACK_DELETE_CSV',
          rePackCsvFiles: 'ADFRAME.REGISTRATION.RE_PACK_CSV',
          cancelCsvFiles: 'ADFRAME.REGISTRATION.CANCEL_CSV',
          reApprCsvFiles: 'ADFRAME.REGISTRATION.RE_APPROPRIATION_CSV',
          csvDtlNoOfLines: 'ADFRAME.REGISTRATION.CSV_DETAILS_NUMBER_OF_LINES',
          packDtlNoOfLines: 'ADFRAME.REGISTRATION.PACK_DETAILS_NUMBER_OF_LINES',
          creationTeamInternalComment: 'ADFRAME.REGISTRATION.AD_FRAME_CREATION_TEAM_INTERNAL_COMMENT',
          adFrameCorrComment: 'ADFRAME.REGISTRATION.COMMENT',
          checkBeforeFiles: 'ADFRAME.REGISTRATION.BEFORE_CHECK_FILE',
          checkAfterFiles: 'ADFRAME.REGISTRATION.AFTER_CHECK_FILE'
        },
        ADFRAME_CORR_REQ_ALL_LAYOUT_COL_LIST : [
          'approvalStatus',
          'nextActionByRole',
          'nextActionByUser',
          'adFrameCorrApprovalComment',
          'adFrameCorctReqId',
          'timeOfRegistration',
          'personRegistered',
          'lastModifiedTime',
          'lastUpdatedByUserName',
          'request',
          'reportToLeader',
          'salesStatus',
          'preSalesStatus',
          'applicantStatus',
          'inChargeStatus',
          'menuName',
          'eventStartDate',
          'applicantName',
          'applicantDeptName',
          'mediaInChargeName',
          'mediaName',
          'salesPromotnInChargeName',
          'adFrameCreationReqIds',
          'adFrameIdsToBeCorctd',
          'totalAdFramePrice',
          'irregAppRsnCntMeasure',
          'cancelChrgeApplicable',
          'sendEmailMrchntWhnCancl',
          'sendEmailMrchntWhnReAppr',
          'eccMrchntApprovalOfCnclReAppr',
          'manuscriptSaved',
          'crtnReqDtls',
          'adframeCrctItemIds',
          'checkBeforeFiles',
          'packDelCsvFiles',
          'rePackCsvFiles',
          'cancelCsvFiles',
          'reApprCsvFiles',
          'checkAfterFiles',
          'adFrameCorrCsvFiles',
          'csvDtlNoOfLines',
          'packDtlNoOfLines',
          'creationTeamInternalComment',
          'adFrameCorrComment'
        ],
        ADFRAME_CORR_REQ_SORTABLE_COLUMNS: {
          'adFrameCorctReqId': 'id',
          'timeOfRegistration': 'createdOn',
          'applicantStatus': 'applicantStatus',
          'inChargeStatus': 'inchargeStatus',
          'applicantDeptName': 'applicant.team',
          'mediaInChargeName': 'mediaIncharge.rakutenUserId',
          'mediaName': 'mediaName',
          'menuName': 'menuName',
          'eventStartDate': 'eventStartDate',
          'totalAdFramePrice': 'totalAdFramesPrice',
          'personRegistered': 'createdBy.rakutenUserId',
          'lastModifiedTime': 'lastUpdatedOn',
          'lastUpdatedByUserName': 'lastUpdatedBy.rakutenUserId',
          'request': 'request',
          'salesStatus': 'salesStatus',
          'preSalesStatus': 'preSalesStatus',
          'applicantName': 'applicant.rakutenUserId',
          'salesPromotnInChargeName': 'salesPromotionInCharge.rakutenUserId',
          'adFrameIdsToBeCorrected': 'adFrameIdsToBeCorrected',
          'irregAppRsnCntMeasure': 'irregularAppReason',
          'cancelChrgeApplicable': 'cancelChargeApplicable',
          'sendEmailMrchntWhnCancl': 'emailMrchntsOnCancl',
          'sendEmailMrchntWhnReAppr': 'emailMrchntsOnReAppr',
          'eccMrchntApprovalOfCnclReAppr': 'eccMrchtAprvlOfCancl',
          'manuscriptSaved': 'manuscriptSaved',
          'crtnReqDtls': 'correctionContentDetails',
          'csvDtlNoOfLines': 'csvLineNum',
          'packDtlNoOfLines': 'packLineNum',
          'creationTeamInternalComment': 'adCreationTeamInternalCommnt'
        },
        ADFRAME_CORR_REQ_FIELD_TO_MODIFY_IN_VIEW: [
          'applicantStatus',
          'inChargeStatus',
          'approvalStatus',
          'mediaName',
          'menuName',
          'adFrameIdsToBeCorctd',
          'crtnReqDtls',
          'adFrameCorrApprovalComment',
          'request',
          'salesStatus',
          'preSalesStatus',
          'cancelChrgeApplicable',
          'sendEmailMrchntWhnCancl',
          'sendEmailMrchntWhnReAppr',
          'adframeCrctItemIds',
          'adFrameCorrCsvFiles',
          'packDelCsvFiles',
          'rePackCsvFiles',
          'cancelCsvFiles',
          'reApprCsvFiles',
          'adFrameCorctReqId',
          'adFrameCorrComment',
          'creationTeamInternalComment',
          'reportToLeader',
          'eccMrchntApprovalOfCnclReAppr',
          'manuscriptSaved',
          'adFrameCreationReqIds',
          'totalAdFramePrice'
        ],
        EVENT_LOG_CHANGE_CONTENTS_MAP: {
            eventId: 'EVENTS.PLANNING.EVENT_ID',
            eventName: 'EVENTS.REGISTRATION.EVENT_NAME',
            seriesEvent: 'EVENTS.REGISTRATION.SERIES_EVENT',
            stopOperation: 'EVENTS.REGISTRATION.OPERATION_STATUS',
            reasonForStop: 'EVENTS.REGISTRATION.REASON_FOR_STOP',
            adTeamCheckStatus: 'EVENTS.REGISTRATION.AD_TEAM_CHECK',
            createdOn: 'EVENTS.REGISTRATION.TIME_OF_REGISTRATION',
            lastUpdatedOn: 'EVENTS.REGISTRATION.LAST_MODIFIED_TIME',
            largeClassification: 'EVENTS.REGISTRATION.CATEGORY',
            distributionType: '',
            releaseDay: 'EVENTS.REGISTRATION.RELEASE_DATE',
            closingDay: 'EVENTS.REGISTRATION.CLOSE_DATE',
            genreName: 'EVENTS.REGISTRATION.MEDIA_NAME',
            dstngshClssfctn: 'EVENTS.REGISTRATION.CLASSIFICATIONS',
            eventUrl: 'EVENTS.REGISTRATION.URL',
            necessaryResources: 'EVENTS.REGISTRATION.NECESSARY_RESOURCES',
            numberOfPages: 'EVENTS.REGISTRATION.NO_OF_PAGES',
            nmbrFDsgnsSbttlsBnnrs: 'EVENTS.REGISTRATION.NO_OF_BANNERS',
            immediate: 'EVENTS.REGISTRATION.IMMEDIATE',
            jsRequired: 'EVENTS.REGISTRATION.JS',
            needDevelopment: 'EVENTS.REGISTRATION.DEVELOPMENT_SUPPORT',
            pointEvent: 'EVENTS.REGISTRATION.POINT_PLANNING',
            assetClassification: 'EVENTS.REGISTRATION.ASSET_CLARIFICATION',
            expectedAdAmount: 'EVENTS.REGISTRATION.ESTIMATED_AD_AMOUNT',
            expectedGms: 'EVENTS.REGISTRATION.ESTIMATED_GMS',
            businessUnit: 'EVENTS.REGISTRATION.BUSSINESS_UNIT',
            requestRemarks: 'EVENTS.REGISTRATION.REQUEST_REMARKS',
            ndSstCrtnNstrctns: 'EVENTS.REGISTRATION.ASSET_CREATION_INSTRUCTIONS_REQUIRED',
            needTopBanner: 'EVENTS.REGISTRATION.TOP_BANNER_REQUIRED',
            assetCreationStatus: 'EVENTS.REGISTRATION.ASSET_CREATION_STAUS',
            productionCostEstimate: 'EVENTS.REGISTRATION.PRODUCTION_COST_ESTIMATION',
            approved: '',
            approvalLevel: '',
            pastEvent: '',
            directorAssigned: '',
            publishingRequestList: 'EVENTS.REGISTRATION.PUBLISHING_REQUEST_ID',
            order: '',
            editable: '',
            deviceType: '',
            linkId: 'EVENTS.REGISTRATION.LINK_ID',
            pcIds: 'EVENTS.REGISTRATION.PC_ID',
            couponIds: 'EVENTS.REGISTRATION.COUPON_ID',
            teireiEventId: '',
            approvalStatus: 'EVENTS.REGISTRATION.APPROVAL_STATUS',
            nextActionByRole: 'EVENTS.REGISTRATION.NEXT_ACTION_ROLE',
            nextActionByUser: 'EVENTS.REGISTRATION.NEXT_ACTION_USER',
            lastAdTotalListPrice: '',
            lastExpectedGms: '',
            releaseCheckRequestId: 'EVENTS.REGISTRATION.RELEASE_CHECK_REQUEST_ID',
            'createdBy.rakutenUserId': 'EVENTS.REGISTRATION.PERSON_REGISTERED',
            'lastUpdatedBy.rakutenUserId': 'EVENTS.REGISTRATION.LAST_MODIFIER',
            'producer.team': 'EVENTS.REGISTRATION.PRODUCER_TEAM',
            'producer.rakutenUserId': 'EVENTS.REGISTRATION.PRODUCER_INCHARGE',
            'producer.email': 'EVENTS.REGISTRATION.PRODUCER_EMAIL_ID',
            'director.team': 'EVENTS.REGISTRATION.DIRECTOR_TEAM',
            'director.rakutenUserId': 'EVENTS.REGISTRATION.DIRECTOR_INCHARGE',
            'director.email': 'EVENTS.REGISTRATION.DIRECTOR_EMAIL_ID',
            'mailMagazineDetail.numberOfEmagazine': 'EVENTS.REGISTRATION.NO_OF_EMAIL_MAGAZINES',
            'mailMagazineDetail.mediaInformation.id': 'EVENTS.REGISTRATION.MEDIA_ID,EVENTS.REGISTRATION.OFFICIAL_NEWS_NAME',
            'mailMagazineDetail.distributionTool': 'EVENTS.REGISTRATION.MAIL_MAGAZINE_DISTRIBUTION_TOOL',
            'mailMagazineDetail.format': 'EVENTS.REGISTRATION.MAIL_MAGAZINE_FORMAT',
            'mailMagazineDetail.manuscriptType': 'EVENTS.REGISTRATION.MAIL_MAGAZINE_AD_TYPE',
            'mailMagazineDetail.extra': 'EVENTS.REGISTRATION.SUPPLEMENTARY',
            'mailMagazineDetail.listCreationDepartment': 'EVENTS.REGISTRATION.LIST_CREATION_DEPT',
            'mailMagazineDetail.listDlContent': 'EVENTS.REGISTRATION.LIST_DL_CONTENT',
            'mailMagazineDetail.distributionToolSegment': 'EVENTS.REGISTRATION.SEGMENT_DISTRIBUTION_TOOL',
            'mailMagazineDetail.segmentDetails': 'EVENTS.REGISTRATION.SEGMENT_DETAILS',
            'mailMagazineDetail.distributionPurpose': 'EVENTS.REGISTRATION.DISTRIBUTION_PURPOSE',
            'mailMagazineDetail.externalClient': 'EVENTS.REGISTRATION.EXTERNAL_CLIENT',
            'mailMagazineDetail.distributionNumber': 'EVENTS.REGISTRATION.DISTRIBUTION_NUMBER',
            'mailMagazineDetail.distributionStatus': 'EVENTS.REGISTRATION.DISTRIBUTION_RELEASE_STATUS',
            'mailMagazineDetail.issueIds': 'EVENTS.REGISTRATION.ISSUE_IDS',
            'emagazineCheckRequest.id': 'EVENTS.REGISTRATION.TEST_EMAGAZINE_REQUEST_ID',
            'vendorCompany.companyName': 'EVENTS.REGISTRATION.DESIRED_VENDOR_COMPANY',
            'vendorCompany.companyEmai': 'EVENTS.REGISTRATION.VENDOR_COMAPNY_EMAIL_ADDRESS',
            'releaseVendorCompany.companyName': 'EVENTS.REGISTRATION.RELEASE_CHECK_VENDOR',
            'releaseVendorCompany.companyEmail': 'EVENTS.REGISTRATION.RELEASE_CHECK_VENDOR_MAIL_ADDRESS',
            'subInchargeProducers.team': 'EVENTS.REGISTRATION.SUB_INCHRG_PTEAM',
            'subInchargeProducers.rakutenUserId': 'EVENTS.REGISTRATION.SUB_INCHRG_PNAME',
            'subInchargeProducers.email': 'EVENTS.REGISTRATION.SUB_INCHRG_PMAIL',
            'subInchargeDirectors.team': 'EVENTS.REGISTRATION.SUB_INCHRG_DTEAM',
            'subInchargeDirectors.rakutenUserId': 'EVENTS.REGISTRATION.SUB_INCHRG_DNAME',
            'subInchargeDirectors.email': 'EVENTS.REGISTRATION.SUB_INCHRG_DMAIL',
            'assetInstructions.fileName': 'EVENTS.REGISTRATION.ASSET_CREATION_INSTRUCTIONS',
            'assetComments.comment': 'EVENTS.REGISTRATION.ASSET_CREATION_INSTRUCTIONS_COMMENT',
            'approvalComments.comment': 'EVENTS.REGISTRATION.COMMENTS',
            'campaignBean.campaignName': 'EVENTS.REGISTRATION.CAMPAIGN_NAME',
            'eventCwdType.value': 'EVENTS.REGISTRATION.EVENT_TYPE',
            'eventGenreSuggestions.genre': 'EVENTS.REGISTRATION.PUBLISHING_REQUEST_GENRE',
            'eventGenreSuggestions.publishingAdvisability': 'EVENTS.REGISTRATION.PUBLISHING_REQUEST_GENRE',
            'menuIdList.id': 'EVENTS.REGISTRATION.MENU_ID',
            'wakuList.id': 'EVENTS.REGISTRATION.WAKU_ID',
            'Deleted': 'USERS.CHANGE_LOG.EVENT_LOG.DELETED',
            'autoGenStatus': 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.DRAFT_EVENT_STATUS',
            'ruleId': 'EVENTS.TEIREI_EVENT_MANAGEMENT_LIST.RULE_ID'
        },
        MAIL_LAYOUT_LOG_MAP: {
          'logTime': 'MAIL_LAYOUT_LOG.FIELD.LOG_TIME',
          'logModifier.rakutenUserId' : 'MAIL_LAYOUT_LOG.FIELD.LOG_MODIFIER',
          'mailLayoutAuditId' : 'MAIL_LAYOUT_LOG.FIELD.RECORD_NO',
          'changeContents' : 'MAIL_LAYOUT_LOG.FIELD.CHANGED_CONTENTS',
          'createdOn' : 'MAIL_LAYOUT_LOG.FIELD.TIME_OF_REGISTRATION',
          'createdBy.rakutenUserId' : 'MAIL_LAYOUT_LOG.FIELD.PERSON_REGISTERED',
          'lastUpdatedOn' : 'MAIL_LAYOUT_LOG.FIELD.LAST_MODIFIED_TIME',
          'lastUpdatedBy' : 'MAIL_LAYOUT_LOG.FIELD.LAST_MODIFIER',
          'distributionTime' : 'MAIL_LAYOUT_LOG.FIELD.DISTRIBUTION_TIME_CHANGE_CONTENT',
          'productionResource' : 'MAIL_LAYOUT_LOG.FIELD.PRODUCTION_RESOURCE',
          'entryLastDate' : 'MAIL_LAYOUT_LOG.FIELD.ENTRY_LAST_DATE',
          'mailLayoutComment' : 'MAIL_LAYOUT_LOG.FIELD.COMMENT',
          'subjectDesignatedTitle' : 'MAIL_LAYOUT_LOG.FIELD.DESIGNATED_TITLE',
          'subjectWakuId' : 'MAIL_LAYOUT_LOG.FIELD.WAKU_ID',
          'subjectPreheader' : 'MAIL_LAYOUT_LOG.FIELD.PREHEADER',
          'adInfo.mediaSpecialName' : 'MAIL_LAYOUT_LOG.FIELD.MEDIA_SPECIAL_NAME',
          'adInfo.eventName' : 'MAIL_LAYOUT_LOG.FIELD.PLAN_NAME',
          'adInfo.menuId' : 'MAIL_LAYOUT_LOG.FIELD.MENU_ID',
          'adInfo.menuName' : 'MAIL_LAYOUT_LOG.FIELD.MENU_NAME',
          'adInfo.wakuId' : 'MAIL_LAYOUT_LOG.FIELD.WAKU_ID',
          'adInfo.wakuName' : 'MAIL_LAYOUT_LOG.FIELD.WAKU_NAME',
          'adInfo.comment': 'MAIL_LAYOUT_LOG.FIELD.AD_INFO_COMMENT',
          'additionalInfo.ranking' : 'MAIL_LAYOUT_LOG.FIELD.RANKING',
          'additionalInfo.baseHtml' : 'MAIL_LAYOUT_LOG.FIELD.BASE_HTML',
          'additionalInfo.additionalBanner' : 'MAIL_LAYOUT_LOG.FIELD.ADDITIONAL_BANNER',
          'additionalInfo.targetLink' : 'MAIL_LAYOUT_LOG.FIELD.TARGET_LINK',
          'additionalInfo.text' : 'MAIL_LAYOUT_LOG.FIELD.TEXT',
          'additionalInfo.comment': 'MAIL_LAYOUT_LOG.FIELD.ADDITIONAL_INFO_COMMENT',
          'lowPortionContents' : 'MAIL_LAYOUT_LOG.FIELD.LOWER_PORTION_CONTENTS',
          'commonFooter' : 'MAIL_LAYOUT_LOG.FIELD.COMMON_FOOTER',
          'largeWakuCount' : 'MAIL_LAYOUT_LOG.FIELD.LARGE_WAKU_COUNT',
          'topPortionWakuCount' : 'MAIL_LAYOUT_LOG.FIELD.TOP_PORTION_WAKU_COUNT',
          'basicWakuCount' : 'MAIL_LAYOUT_LOG.FIELD.BASIC_WAKU_COUNT',
          'basicWakuCountTotal' : 'MAIL_LAYOUT_LOG.FIELD.BASIC_WAKU_COUNT_TOTAL',
          'seasonalTieupWaku' : 'MAIL_LAYOUT_LOG.FIELD.SEASONAL_DEMANDS_MEASURES',
          'specialTieup' : 'MAIL_LAYOUT_LOG.FIELD.SPECIAL_TIE_UP',
          'focusShopWaku' : 'MAIL_LAYOUT_LOG.FIELD.FOCUS_SHOP_WAKU',
          'otherBannerWaku' : 'MAIL_LAYOUT_LOG.FIELD.OTHER_BANNER_WAKU',
          'directorComment' : 'MAIL_LAYOUT_LOG.FIELD.DIRECTOR_COMMENT',
          'deleted': 'MAIL_LAYOUT_LOG.FIELD.DELETED',
          'adInfoList': 'MAIL_LAYOUT_LOG.FIELD.AD_INFORMATION',
          'additionalInfoList': 'MAIL_LAYOUT_LOG.FIELD.ADDITIONAL_INFORMATION',
          'subjectInfoList': 'MAIL_LAYOUT_LOG.FIELD.SUBJECT_INFORMATION'
        },
        AD_TAG_RELEASE_CHECK_MAP: {
          'OK': 'AD_RELEASE_CHECK.OK',
          'OK_MANUAL': 'AD_RELEASE_CHECK.OK_MANUAL',
          'NG': 'AD_RELEASE_CHECK.NG',
          'NG_URL_OUT_SCOPE': 'AD_RELEASE_CHECK.NG_URL_OUT_SCOPE',
          'YET_TO_CHECK': 'AD_RELEASE_CHECK.YET_TO_CHECK',
          'CHECK_SKIPPED': 'AD_RELEASE_CHECK.CHECK_SKIPPED'
        },
        AD_TAG_RELEASE_CHECK_TYPE_MAP: {
          'WEB': 'WEB',
          'SP_APP': 'SP APP'
        },
        CALENDAR: {
          SHORTMONTH: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    }
};
