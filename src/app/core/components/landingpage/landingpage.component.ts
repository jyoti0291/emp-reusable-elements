import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'underscore';

import { CommonLayoutService } from 'app/shared/services';
import { LandingpageService, FacadeService } from 'services';

@Component({
  selector: 'rx-andingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  private commonLinks;
  private menuLinks;
  private validLinks;
  private allowedURL;
  private links;
  private dropdownLinks;
  private isAdmin = false;
  private environmentVar = '%EMPENVVAR%';
  private apiVersion;
  private chromeVersion;
  private firefoxVersion;
  private landingPageInfo = {
    inquiry_link: ''
  };

  constructor(private fs: FacadeService, private translate: TranslateService, private cL: CommonLayoutService, private lS: LandingpageService) {
    this.fs.setTitle('Home');
  }

  ngOnInit() {
    this.getAccessLinks();
    this.getAppInfo();
    this.getLandingPageInfo();
    this.cL.updateLayout();
  }

  getAccessLinks() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData != null) {
      const subLinks = userData.operations;
      this.lS.setRoleAccess();
      this.setObject(subLinks);
    }
  }

  setObject(param) {
    const subLinks = param;
    this.menuLinks = this.lS.getMenuLinks();
    this.commonLinks = this.lS.getCommonLinks();

    this.validLinks = [];
    const commonNavig = {
      Campaign: [],
      Event: [],
      Ad: [],
      ReleaseCheck: [],
      EMagazine: [],
      Publishing: [],
      Update: [],
      KpiDashboard: [],
      User: [],
      Administration: []
    };

    this.allowedURL = '';
    const userData = JSON.parse(localStorage.getItem('userData'));
    subLinks.forEach((item, key) => {
      if (this.menuLinks[item] && this.menuLinks[item].value.parentName) {
        commonNavig[this.menuLinks[item].value.parentName].push(this.menuLinks[item]);
        this.allowedURL += this.menuLinks[item].value.state + ',';
      }
    });

    const dropdownNavig = {
      Campaign: [],
      Event: [],
      Ad: [],
      ReleaseCheck: [],
      EMagazine: [],
      Publishing: [],
      Update: [],
      KpiDashboard: [],
      User: [],
      Administration: []
    };


    Object.entries(commonNavig).forEach(([parentMenu, values]) => {
      const subMenus = {};
      values.forEach(target => {
        if (target.value.hasSubMenu) {
          const subMenuName = target.value.subMenuName;
          if (subMenus[subMenuName]) {
            subMenus[subMenuName].menus.push(target);
          } else {
            subMenus[subMenuName] = { key: target.key, menus: [target], value: { uiParentName: target.value.uiParentName } };
          }
        } else {
          dropdownNavig[parentMenu].push(target);
        }
      });
      Object.entries(subMenus).forEach(([subMenu, data]) => {
        dropdownNavig[parentMenu].push(data);
      });
    });

    let idxAdmin = false;
    if (userData != null) {
      idxAdmin = _.indexOf(userData.userRole, 'Admin') !== -1;
      if (idxAdmin) {
        this.commonLinks += 'editUser';
      }
    }

    // if (this.commonLinks.indexOf($state.current.name) === -1) {
    //   if (this.allowedURL.indexOf($state.current.name) === -1) {
    //     // $state.go('userNotAuthenticated');
    //   }
    // }

    /***********************************************************************/
    const commonNavigKeys = _.keys(commonNavig);
    this.links = {};
    commonNavigKeys.forEach((keys) => {
      if (commonNavig[keys].length > 0) {
        this.links[keys] = commonNavig[keys];
      }
    });

    const dropdownNavigKeys = _.keys(dropdownNavig);
    this.dropdownLinks = {};
    dropdownNavigKeys.forEach((keys) => {
      if (dropdownNavig[keys].length > 0) {
        this.dropdownLinks[keys] = dropdownNavig[keys];
      }
    });
  }

  getMenuPermisson(key) {
    const arr = this.allowedURL.split(',');
    return arr.findIndex(k => k === key) !== -1;
  }

  showTabWithConditions(key, hideForLinks) {
    const allowedURLs = this.allowedURL.split(',');
    return allowedURLs.findIndex(k => k === key) !== -1 && (_.intersection(allowedURLs, hideForLinks).length < 1);
  }

  getAppInfo() {
    this.lS.getAppInfo().subscribe(resp => {
      this.apiVersion = resp.apiVersion;
      this.chromeVersion = resp.chromeVersion;
      this.firefoxVersion = resp.firefoxVersion;
    });
  }

  getLandingPageInfo() {
    this.lS.getLandingPageInfo().subscribe(resp => {
      if (resp.responseObject) {
        const infos = {
          inquiry_link: ''
        };
        resp.responseObject.landing_page.forEach((record, i) => {
          infos[record.key] = record.value;
        });
        this.landingPageInfo = infos;
      }
    });
  }
}
