import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Eduardo';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient() {
    this.name = 'Citlalli';
    this.gender = 'female';
  }

}
