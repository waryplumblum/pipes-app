import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase:boolean = false;
  public heroes: Hero[] = [
    { name:'Superman',       canFly:true , color:Color.blue  },
    { name:'Batman',         canFly:false, color:Color.black },
    { name:'Daredevil',      canFly:false, color:Color.red   },
    { name:'Robin',          canFly:false, color:Color.red   },
    { name:'Linterna Verde', canFly:true , color:Color.green   },
  ];

  toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }
}
