import { Router } from '@angular/router';
import { ContentService, UserService } from '@sunbird/core';
import { Injectable } from '@angular/core';
import {
  ConfigService, IUserData, ResourceService, ServerResponse,
  ContentDetails, PlayerConfig, ContentData
} from '@sunbird/shared';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { UUID } from 'angular2-uuid';

@Injectable()
export class PublicPlayerService {
  /**
     * stores content details
     */
  contentData: ContentData;
  constructor(public userService: UserService, public contentService: ContentService,
    public configService: ConfigService, public router: Router) {
  }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<{contentId: string, contentData: ContentData }>}
   */
  getConfigByContent(id: string): Observable<PlayerConfig> {
    return this.getContent(id)
      .flatMap((contentDetails) => {
        return Observable.of(this.getConfig({
          contentId: contentDetails.result.content.identifier,
          contentData: contentDetails.result.content
        }));
      });
  }

  /**
   * Return content details
   * @param {string} contentId
   * @returns {Observable<ServerResponse>}
   */
  getContent(contentId: string): Observable<ServerResponse> {
    const req = {
      url: `${this.configService.urlConFig.URLS.CONTENT.GET}/${contentId}`,
      param: { fields: this.configService.urlConFig.params.contentGet }
    };
    return this.contentService.get(req).map((response: ServerResponse) => {
      this.contentData = response.result.content;
      return response;
    });
  }
  /**
   * returns player config details.
   * @param {ContentDetails} contentDetails
   * @memberof PlayerService
   */
  getConfig(contentDetails: ContentDetails): PlayerConfig {
    const configuration: any = this.configService.appConfig.PLAYER_CONFIG.playerConfig;
    configuration.context.contentId = contentDetails.contentId;
    configuration.context.sid = this.userService.anonymousSid;
    configuration.context.uid = 'anonymous';
    configuration.context.channel = 'in.ekstep';
    configuration.context.pdata.id = this.userService.appId;
    configuration.metadata = contentDetails.contentData;
    configuration.data = contentDetails.contentData.mimeType !== this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.ecmlContent ?
      {} : contentDetails.contentData.body;
    return configuration;
  }
  // playContent(content) {

  //   if (content.mimeType === this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.collection) {

  //     if (content.contentType !== this.configService.appConfig.PLAYER_CONFIG.contentType.Course) {
  //       this.router.navigate(['/resources/play/collection', content.identifier]);
  //     } else {
  //       console.log('course consumption');
  //     }

  //   } else if (content.mimeType === this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.ecmlContent) {

  //     this.router.navigate(['/resources/play/content', content.identifier, content.name]);

  //   } else if (this.configService.appConfig.PLAYER_CONFIG.MIME_TYPE.genericMimeType.include(content.mimeType)) {

  //     this.router.navigate(['/resources/play/content', content.identifier, content.name]);

  //   } else {
  //     // toaster not valid content type
  //   }
  // }

}
