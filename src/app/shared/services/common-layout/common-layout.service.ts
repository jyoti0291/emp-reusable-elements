import {
    Injectable
} from '@angular/core';
import * as $ from 'jquery';

@Injectable({
    providedIn: 'root'
})
export class CommonLayoutService {
    layout: any;
    constructor() {
        this.equalHeight();
        this.documentReady();
        this.scrollTop({
            target: '.back-to-top'
        });
        this.leftMenuScroll({
            target: '.leftSidebar .leftMenu',
            box: '.scrollDiv'
        });
        this.setHeight();
    }

    updateLayoutTimer() {
        const self = this;
        setTimeout(() => {
            self.updateLayout();
        }, 3000);
    }

    updateLayout() {
        const self = this;
        setTimeout(() => {
            $('[data-toggle="tooltip"]').tooltip(); //  Shows Tooltip on hovering
            $('[data-toggle="popover"]').popover(); //  Shows Popover on hovering
            $('.tooltip').hide();
            if ($('.onFocusTooltip').length) {
                $('.onFocusTooltip').find('.tooltip').show();
            }
            $(document).on('click', '[data-toggle="tooltip"]', () => {
                $('[data-toggle="tooltip"]').tooltip('hide');
            });
            self.setHeight();
            $.support.transition = false;
            $('.collapseForm').on('hidden.bs.collapse', () => {
                this.setHeight();
                $('.arrow-toggle .glyphicon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
            });
            $('.collapseForm').on('shown.bs.collapse', () => {
                this.setHeight();
                $('.arrow-toggle .glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
            });
        }, 10);
    }

    /**
     * @name : documentReady
     * @description : This method is called if and when the window is resized, and sets height accordingly
     */
    documentReady() {
        const self = this;
        $(window).resize(() => {
            self.setHeight();
        });
        window.onhashchange = this.setHeight;
        // Adding active icon on Menu ID Request on first position.
        if ($('.requestInfomation').length > 0) {
            $('.requestInfomation').addClass('active');
        }
    }

    /**
     * @name : scrollTop
     * @description : This method is applied on scrolling the window
     */
    scrollTop(params) {
        const offset = 50;
        const duration = 300;
        $(window).scroll(() => {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });

        $('.scrollDiv').scroll(() => {
            const scrollPostion = $(this).scrollTop();
            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(() => {
                //  do something
                if (scrollPostion > 150) {
                    $('.back-to-top-inner').fadeIn(duration);
                } else {
                    $('.back-to-top-inner').fadeOut(duration);
                }
            }, 250));

            /* Start Set active icon on scroll*/
            if ($('.iconBasicInfomation').length > 0) {

                const iConHeight = {
                    setPos: 21,
                    cS: $('.campaignSetting').position().top,
                    bI: $('.iconBasicInfomation').position().top,
                    mM: $('.iconMailMagazine').position() !== undefined ? $('.iconMailMagazine').position().top : 0,
                    rC: $('.iconReleaseCheckDetails').position() !== undefined ? $('.iconReleaseCheckDetails').position().top : 0,
                    aD: $('.iconAssignmentDetails').position() !== undefined ? $('.iconAssignmentDetails').position().top : 0,
                    wMD: $('.iconVendorManagementDetails').position() !== undefined ? $('.iconVendorManagementDetails').position().top : 0,
                    aC: $('.iconAssetCreation').position() !== undefined ? $('.iconAssetCreation').position().top : 0,
                    wP: $('.iconWebPublishing').position() !== undefined ? $('.iconWebPublishing').position().top : 0,
                    oth: $('.iconOther').position() !== undefined ? $('.iconOther').position().top : 0,
                    sUE: $('.iconSubUrlsAndEvents').position() !== undefined ? $('.iconSubUrlsAndEvents').position().top : 0
                };

                if (iConHeight.cS < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.campaignSetting').addClass('active');
                    if (iConHeight.bI < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.basicInformation').addClass('active');
                        if ($('.iconMailMagazine').length !== 0 && iConHeight.mM < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.mailMagazine ').addClass('active');
                            if (iConHeight.rC < iConHeight.setPos) {
                                if ($('.iconReleaseCheckDetails').length !== 0) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.releaseCheckDetails').addClass('active');
                                }
                                if (iConHeight.aD < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.assignmentDetails').addClass('active');

                                    if (iConHeight.wMD < iConHeight.setPos) {
                                        $('.leftSidebar li a').removeClass('active');
                                        $('.vendorManagement').addClass('active');

                                        if (iConHeight.aC < iConHeight.setPos) {
                                            $('.leftSidebar li a').removeClass('active');
                                            $('.assetCreation').addClass('active');

                                            if (iConHeight.wP < iConHeight.setPos) {
                                                $('.leftSidebar li a').removeClass('active');
                                                $('.webPublishing').addClass('active');

                                                if (iConHeight.oth < (iConHeight.setPos + 15)) {
                                                    $('.leftSidebar li a').removeClass('active');
                                                    $('.others').addClass('active');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else if (iConHeight.rC < iConHeight.setPos) {
                            if ($('.iconReleaseCheckDetails').length !== 0) {
                                $('.leftSidebar li a').removeClass('active');
                                $('.releaseCheckDetails').addClass('active');
                            }
                            if (iConHeight.aD < iConHeight.setPos) {
                                $('.leftSidebar li a').removeClass('active');
                                $('.assignmentDetails').addClass('active');

                                if (iConHeight.wMD < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.vendorManagement').addClass('active');

                                    if (iConHeight.aC < iConHeight.setPos) {
                                        $('.leftSidebar li a').removeClass('active');
                                        $('.assetCreation').addClass('active');

                                        if (iConHeight.wP < iConHeight.setPos) {
                                            $('.leftSidebar li a').removeClass('active');
                                            $('.webPublishing').addClass('active');

                                            if (iConHeight.oth < iConHeight.setPos) {
                                                $('.leftSidebar li a').removeClass('active');
                                                $('.others').addClass('active');

                                                if (iConHeight.sUE && (iConHeight.sUE < (iConHeight.setPos + 15))) {
                                                    $('.leftSidebar li a').removeClass('active');
                                                    $('.subUrlsAndEvents').addClass('active');
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                /* End Set active icon on scroll*/
            }

            /* Start Set active icon on mail layout registration scroll*/
            if ($('.iconLayoutInfoMailLayoutReg').length > 0) {

                const iConHeight = {
                    setPos: 21,
                    bI: $('.iconBasicInfoMailLayoutReg').position().top,
                    lI: $('.iconLayoutInfoMailLayoutReg').position().top
                };

                if (iConHeight.bI < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.basicInformationMailLayoutRegistration').addClass('active');
                    if (iConHeight.lI < iConHeight.setPos + 15) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.layoutInformationMailLayoutRegistration').addClass('active');
                    }
                }
                /* End Set active icon on mail layout registration scroll*/
            }

            /* Start Set active icon on Menu ID Request*/
            if ($('.requestInfomation').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    bI: $('.iconRequestInfomation').position().top,
                    mM: $('.iconRequestStatus').position().top,
                    aD: $('.iconRequestOutput').position().top,
                    vL: $('.iconVendorLog').position().top,
                    wMD: $('.iconCommentsIcon').position().top
                };

                if (iConHeight.bI < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.requestInfomation').addClass('active');
                    if (iConHeight.mM < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.requestStatus').addClass('active');
                        if (iConHeight.aD < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.requestOutput').addClass('active');

                            if (iConHeight.vL !== 0) {
                                if (iConHeight.vL < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.vendorLogIcon').addClass('active');
                                    if (iConHeight.wMD < iConHeight.setPos) {
                                        $('.leftSidebar li a').removeClass('active');
                                        $('.commentsIcon').addClass('active');
                                    }
                                }
                            } else {
                                if (iConHeight.wMD < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.commentsIcon').addClass('active');
                                }
                            }
                        }
                    }
                }

            }
            /* End Set active icon on scroll*/

            /* Start Set active icon on Menu Waku Request*/
            if ($('.adFrameInformationGrey').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    bI: $('.adFrameInformationGrey').position().top,
                    mM: $('.adInspectionInformationGrey').position().top,
                    aD: $('.commentsGrey').position().top
                };
                if (iConHeight.bI < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.adFrameInformation').addClass('active');
                    if (iConHeight.mM < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.adInspectionInformation').addClass('active');
                        if (iConHeight.aD < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.commentsIcon').addClass('active');
                        }
                    }
                }
                /* End Set active icon on scroll*/
            }

            /* Start Set active icon on AdFrame Correction Request*/
            if ($('.adFrameCrbasicInfoGrey').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    bI: $('.adFrameCrbasicInfoGrey').position().top,
                    cA: $('.adFrameCrCancelGrey').position().top,
                    iT: $('.adFrameCrItemInfoGrey').position().top,
                    cV: $('.adFrameCrCsvGrey').position().top,
                    aD: $('.commentsGrey').position().top
                };

                if (iConHeight.bI < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.adFramebasicInformation').addClass('active');
                    if (iConHeight.cA < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.adFrameCancelInformation').addClass('active');
                        if (iConHeight.iT < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.adFrameItemInfomation').addClass('active');
                            if (iConHeight.cV < iConHeight.setPos) {
                                $('.leftSidebar li a').removeClass('active');
                                $('.adFrameCsvInfomation').addClass('active');
                                if (iConHeight.aD < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.commentsIcon').addClass('active');
                                }
                            }
                        }
                    }
                }
                /* End Set active icon on scroll*/
            }

            /* Start Set active icon on scroll*/
            if ($('.sixIconScroll').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    firstIcon: $('.firstIconHeader').position().top,
                    secondIcon: $('.secondIconHeader').position().top,
                    thirdIcon: $('.thirdIconHeader').position().top,
                    forthIcon: $('.forthIconHeader').position().top,
                    fifthIcon: $('.fifthIconHeader').position().top,
                    sixIcon: $('.sixIconHeader').position().top
                };


                if (iConHeight.firstIcon < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.firstIcon').addClass('active');

                    if (iConHeight.secondIcon < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.secondIcon ').addClass('active');

                        if (iConHeight.thirdIcon < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.thirdIcon').addClass('active');

                            if (iConHeight.forthIcon < iConHeight.setPos) {
                                $('.leftSidebar li a').removeClass('active');
                                $('.forthIcon').addClass('active');

                                if (iConHeight.fifthIcon < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.fifthIcon').addClass('active');

                                    if (iConHeight.sixIcon < (iConHeight.setPos + 15)) {
                                        $('.leftSidebar li a').removeClass('active');
                                        $('.sixIcon').addClass('active');
                                    }
                                }
                            }
                        }
                    }
                }
            }
            /* End Set active icon on scroll*/

            /* Start Set active icon on scroll*/
            if ($('.fifthIconScroll').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    firstIcon: $('.firstIconHeader').position().top,
                    secondIcon: $('.secondIconHeader').position().top,
                    thirdIcon: $('.thirdIconHeader').position().top,
                    forthIcon: $('.forthIconHeader').position().top,
                    fifthIcon: $('.fifthIconHeader').position().top
                };

                if (iConHeight.firstIcon < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.firstIcon').addClass('active');

                    if (iConHeight.secondIcon < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.secondIcon ').addClass('active');

                        if (iConHeight.thirdIcon < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.thirdIcon').addClass('active');

                            if (iConHeight.forthIcon < iConHeight.setPos) {
                                $('.leftSidebar li a').removeClass('active');
                                $('.forthIcon').addClass('active');

                                if (iConHeight.fifthIcon < iConHeight.setPos) {
                                    $('.leftSidebar li a').removeClass('active');
                                    $('.fifthIcon').addClass('active');
                                }
                            }
                        }
                    }
                }
            }
            /* End Set active icon on scroll*/

            /* Start Set active icon on scroll*/
            if ($('.fourIconScroll').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    firstIcon: $('.firstIconHeader').position().top,
                    secondIcon: $('.secondIconHeader').position().top,
                    thirdIcon: $('.thirdIconHeader').position().top,
                    forthIcon: $('.forthIconHeader').position().top
                };

                if (iConHeight.firstIcon < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.firstIcon').addClass('active');

                    if (iConHeight.secondIcon < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.secondIcon ').addClass('active');

                        if (iConHeight.thirdIcon < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.thirdIcon').addClass('active');

                            if (iConHeight.forthIcon < iConHeight.setPos) {
                                $('.leftSidebar li a').removeClass('active');
                                $('.forthIcon').addClass('active');
                            }
                        }
                    }
                }
            }
            /* End Set active icon on scroll*/


            /* Start Set active icon on scroll*/
            if ($('.towIconScroll').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    firstIcon: $('.firstIconHeader').position() ? $('.firstIconHeader').position().top : 0,
                    secondIcon: $('.secondIconHeader').position() ? $('.secondIconHeader').position().top : 0
                };

                if (iConHeight.firstIcon < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.firstIcon').addClass('active');

                    if (iConHeight.secondIcon < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.secondIcon ').addClass('active');
                    }
                }
            }
            /* End Set active icon on scroll*/


            /* Start Set active icon on scroll*/
            if ($('.threeIconScroll').length > 0) {
                const iConHeight = {
                    setPos: 21,
                    firstIcon: $('.firstIconHeader').position() ? $('.firstIconHeader').position().top : 0,
                    secondIcon: $('.secondIconHeader').position() ? $('.secondIconHeader').position().top : 0,
                    thirdIcon: $('.thirdIconHeader').position() ? $('.thirdIconHeader').position().top : 0
                };

                if (iConHeight.firstIcon < iConHeight.setPos) {
                    $('.leftSidebar li a').removeClass('active');
                    $('.firstIcon').addClass('active');

                    if (iConHeight.secondIcon < iConHeight.setPos) {
                        $('.leftSidebar li a').removeClass('active');
                        $('.secondIcon ').addClass('active');

                        if (iConHeight.thirdIcon < iConHeight.setPos) {
                            $('.leftSidebar li a').removeClass('active');
                            $('.thirdIcon ').addClass('active');
                        }
                    }
                }
            }
            /* End Set active icon on scroll*/
        });

        $(params.target).click((event) => {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });

        $('.back-to-top-inner').click((event) => {
            event.preventDefault();
            $('.scrollDiv').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }

    /**
     * @name : scrollTop
     * @description : This method is called when user scrolls the left menu buttons
     */
    leftMenuScroll(params) {
        $(document).off('click', params.target);
        $(document).on('click', params.target, () => {

            const menu = $(this).data('leftmenu');
            if (menu) {
              const scrollValue = $('.scrollDiv [data-formsection="" + menu + ""]').offset().top;
              let boxOffset = $('.firstPosition').offset().top;
              boxOffset = -boxOffset;
              $(params.box).animate({
                  scrollTop: scrollValue + boxOffset
              }, 600, 'swing');
            }
            $(params.target).removeClass('active');
            $(this).addClass('active');
        });
    }

    /**
     * @name : setHeight
     * @description : This methods sets the height of the window
     */
    setHeight() {
        const constantVariable = {
            windowH: $(window).outerHeight(),
            header: 50,
            footer: $('.footer').outerHeight(),
            submitButton: $('.submitButtonBox:visible').outerHeight(),
            innerHeading: $('body').find('.innerHeading'),
            pageHeader: 0
        };

        if ($('body').find('.outerScrollHeading').length) {
            const outerHeadingHeight = $('.outerScrollHeading').outerHeight();
            constantVariable.header = constantVariable.header + outerHeadingHeight;
        }

        if (constantVariable.innerHeading.length) {
            constantVariable.header = constantVariable.header + constantVariable.innerHeading.outerHeight();
        }

        if ($('body').find('.submitButtonBox').length) {
            constantVariable.footer = constantVariable.footer + constantVariable.submitButton;
        }
        if ($('.registerNewAd').length > 0) {
            constantVariable.pageHeader = $('.registerNewAd').outerHeight();
        }

        if ($('.pageHeaderTitle').length > 0) {
            constantVariable.pageHeader = $('.pageHeaderTitle').outerHeight();
        }

        $('.scrollDiv').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader));

        if ($('.nonJSContentDiv').length) {
            const searchBox = $('.shadow').outerHeight();
            setTimeout(() => {
                $('.nonJSContentDiv').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + searchBox + 10));
                $('.nonJSMain').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + searchBox + 10));
            }, 500);
        }
        if ($('.digitalAssetContent').length) {
            const searchBox = $('.shadow').outerHeight();
            setTimeout(() => {
                $('.digitalAssetContent').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + searchBox + 10));
                $('.assetSideNav').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + searchBox + 40));
                $('.digitalAssetMain').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + searchBox + 60));
                $('.iSubEventsTree').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + searchBox + 140));
            }, 500);
        }
        if ($('#manHourReferenceDetail').length) {
            setTimeout(() => {
                $('.scrollDiv').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader));
            }, 2000);
        }

        if ($('.exportContainer').length) {
            const exportContainer = $('.exportContainer').outerHeight();
            $('.scrollDiv').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + exportContainer));
        }

        if ($('.scrollDiv .scrollHeight').length) {
            const headingHeight = $('.scrollDiv h2.page-header').last().outerHeight() + 32;
            $('.scrollDiv .scrollHeight').height(constantVariable.windowH - (constantVariable.header + constantVariable.footer + constantVariable.pageHeader + headingHeight));
        }
    }

    setSpanHeight() {
        const elementCount = $('.adjust-height').length;
        for (let i = 0; i < elementCount; i++) {
          const heightToPick = $($('.adjust-height .adjust-div')[i]).css('height');
          const lineHeight = heightToPick.replace('px', '');
          const heightToSet = $($('.adjust-height .adjust-span')[i]).css({
            height: heightToPick,
            'line-height': parseInt(lineHeight, 10) - 10 + 'px'
          });
        }
        return true;
    }

    equalHeight() {
        //  Run after view loaded.
        setTimeout(() => {
            $('.equalHeight').each(() => {
                let setEqHeight = 0;
                $(this).find('.eqCol').each(() => {
                    const getHeight = $(this).height();
                    if (setEqHeight < getHeight) {
                        setEqHeight = getHeight;
                    }
                });
                $(this).find('.eqCol').height(setEqHeight);
                $(this).find('.eqCol2').height(setEqHeight += 2);
                $(this).find('.eqCol1').css({
                    'line-height': setEqHeight + 'px'
                });

                setTimeout(() => {
                    if (($('.eqCol4').height()) < ($('.eqCol5').height())) {
                        $('.eqCol4').height($('.eqCol5').height());
                    } else {
                        $('.eqCol5').height($('.eqCol4').height());
                    }
                }, 2000);
            });
        }, 1000);
    }
}
