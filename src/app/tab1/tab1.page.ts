import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}

  navigateToAnotherPage() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  navigateToQuizPage() {
    this.navCtrl.navigateForward('/tabs/tab4');
  }
}
