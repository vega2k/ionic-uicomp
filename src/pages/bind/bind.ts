import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'bindPage'})
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // 화면이 load되고 난후 에 바로 호출되는 life cycle method 메서드
  ionViewDidLoad() {
    alert('ionViewDidLoad BindPage ' + this.navParams.get("name"));
  }

  goBack() {
    this.navCtrl.pop();
  }
}
