import { $, _, randomCoordinates } from './util.js';

// 랜덤 좌표, 아이템의 개수를 view에 넘겨주는 역할
class Item {
  constructor(number) {
    this.number = number;
    this.coordinatesArr = []; // 이 배열의 길이는 number 이겠지. 이 배열을 View에 넘겨준다.
  }

  setCoordinates() {
    let coordinates = {};
    for(let i = 1; i <= this.number; i++) {
      coordinates = {};
      coordinates.x = randomCoordinates(_.minX, _.maxX);
      coordinates.y = randomCoordinates(_.minY, _.maxY);
      this.coordinatesArr.push(coordinates);
    }
  } 
}

export { Item };