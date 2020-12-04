import { $_, _ } from './util.js';
import { Item } from './item.js';

const carrot = new Item(10);
const bug = new Item(6);
console.log(carrot);

class ItemView {
  constructor(carrot, bug) {
    this.carrot = carrot;
    this.bug = bug;
  }

  renderCarrot() {
    carrot.setCoordinates(); // 랜덤 좌표 생성
    carrot.coordinatesArr.forEach((elem) => {
      $_.items.innerHTML = `
        <img src="../img/carrot.png" class="item carrot" style="transform: translate(${elem.x}px, ${elem.y}px);"/>
      `
    })
  }

  renderBug() {

  }
}

class PopupView {
  constructor() {

  }

  renderPopUp() {

  }
}

const itemView = new ItemView(carrot, bug);
itemView.renderCarrot();