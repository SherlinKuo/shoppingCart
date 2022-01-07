import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  // name = "王大明";

  profile = {
    name : '',
    gender : '',
    job : '',
    programLang :[
      {
        lang: "TypeScript",
        checked: false
      },
      {
        lang: "JavaScript",
        checked: false
      },
      {
        lang: "Python",
        checked: false
      },      
      {
        lang: "Java",
        checked: true
      },    
      {
        lang: "Kotlin",
        checked: false
      },          
    ],
    message: ''
  }

  jobList = ["學生", "老師", "工程師", "自由業", "其他"]
  // programLangs = ["TypeScript", "JavaScript", "Python", "Java", "Kotlin"]
  constructor() { }

  ngOnInit(): void {
  }

  check(){

    // 一般使用 html 取值得方式，input 加入 屬性 id="name"
    /*
    let temp = <HTMLInputElement> document.getElementById("name");
    console.log(temp.value);
    */

    //雙向數據
    //console.log(this.name);

  }
}