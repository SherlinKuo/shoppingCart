import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  title:string = "每日新聞";

  // 一般 object 使用
  newinfo = {
    category:  "今日頭條",
    title: "台灣9/27本土0確診, 陳時中: 10月5日起有條件開放部分休閒娛樂場所",
    content: "指揮官陳時中今(27)日表示，考量國內疫情目前已趨緩且穩定控制，經與相關單位溝通討論及評估後，指揮中心規劃於本週起放寬部分場域防疫管制措施，並於10月5日起有條件開放部分休閒娛樂場所"
  }

  // 多筆資料 (陣列)

  newsinfo=[
    {
      category:  "疫情",
      title: "台灣9/27本土0確診, 陳時中: 10月5日起有條件開放部分休閒娛樂場所",
      content: "指揮官陳時中今(27)日表示，考量國內疫情目前已趨緩且穩定控制，經與相關單位溝通討論及評估後，指揮中心規劃於本週起放寬部分場域防疫管制措施，並於10月5日起有條件開放部分休閒娛樂場所。"
    },   
    {
      category:  "運動",
      title: "世錦賽第二輪開打",
      content: "2021世界羽聯BWF世界羽球錦標賽經過兩天第一輪賽事後，今天進入第二輪過招，球迷引頸期待的世界球后戴資穎，終於要在女單賽事登場，首輪輪空的她32戰迎戰俄羅斯女將柯塞茲卡雅。"
    },
    {
      category:  "天氣",
      title: "今晨最低溫11.6度！",
      content: "受東北季風影響，今晨氣象局針對基隆市、新北市和宜蘭縣發布大雨特報，另外，輕颱「雷伊」最快明增強為中颱，水氣則在下周一影響台灣，有機會帶來降雨。"
    },
  ]

  flag: boolean = true;

  constructor() { }

  ngOnInit() {}

}
