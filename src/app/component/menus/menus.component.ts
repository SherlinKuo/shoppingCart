import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})

export class MenusComponent implements OnInit {

  menuData: menuList[] = [];
  menuUrl = "https://raw.githubusercontent.com/SherlinKuo/shoppingCart/main/menuList.json"
  constructor(private http: HttpClient) {
    this.http.get<dataForm>(this.menuUrl)
      .subscribe(
      (data: dataForm) => {
        // console.log(data.menu);
        this.menuData = data.menu;
      });
   }

  ngOnInit(): void {
  }

}

export interface dataForm{
  menu: menuList[];
}

export interface menuList{
  category: string,
  items: itemList[]
}

export interface itemList{
  name: string,
  price: number,
  images: string
}