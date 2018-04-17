import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {"id":1,"name":"첫번째 Item"},
    {"id":2,"name":"두번째 Item"},
    {"id":3,"name":"세번째 Item"},
  ];

  disabledSwitch=false;

  userName:any;

  constructor(public navCtrl: NavController) {
    //this.userName = "아이오닉";
  }

  //event handler 메서드
  itemSelected(item) {
    alert(item.id + " " + item.name);
  }

  myButton(event) {
    if(typeof this.userName !== "undefined"){
      console.log(event.target.textContent + " " + event.clientX + "," +
      event.clientY);
      this.navCtrl.push("bindPage",{name:this.userName});
    }else {
      //입력값이 없는 경우
      alert("userName 입력하세요!");
    }
  }
}
