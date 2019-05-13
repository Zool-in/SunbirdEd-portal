import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ResourceService, ICard } from '@sunbird/shared';

@Component({
  selector: 'app-dial-code-card',
  templateUrl: './dial-code-card.component.html',
  styleUrls: ['./dial-code-card.component.scss']
})
export class DialCodeCardComponent implements OnInit {

/**
 * content is used to render IContents value on the view
 */
  @Input() data: ICard;
  @Input() dialCode: string;
  @Input() customClass: string;
  @Output() clickEvent = new EventEmitter<any>();
  telemetryCdata: Array<{}> = [];

  constructor(public resourceService: ResourceService) {
    this.resourceService = resourceService;
  }

  ngOnInit() {
    if (this.dialCode) {
      this.telemetryCdata = [{ 'type': 'dialCode', 'id': this.dialCode }];
    }
  }
  public onAction(data, action) {
    this.clickEvent.emit({ 'action': action, 'data': data });
  }
}
