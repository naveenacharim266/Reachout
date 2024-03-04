import { Component, OnInit } from '@angular/core';
import { myserve } from '../Interface/myservice';
import { PrepserviceService } from '../services/prepservice.service';

@Component({
  selector: 'app-prep',
  templateUrl: './prep.page.html',
  styleUrls: ['./prep.page.scss'],
})
export class PrepPage implements OnInit {

  star1: any;
  previous = new Array();
  data: myserve[] = [];
  datas: any;
  qaids = new Array();
  ansid:number = 0;
  
  constructor(private prepservice: PrepserviceService) {
   
   }


  ngOnInit() {
    this.data = this.prepservice.getQuestions(0)
    this.datas = this.data[0];
    this.previous.push(0);
  }

  backbtn() {
    this.previous.pop();

    this.redirect(this.previous[this.previous.length - 1], 'previous', 0, 0);

  }



  redirect(nqid: number, val: string, cqid: number, ansid: number) {

    this.datas = this.data[nqid];
   // console.log(this.datas);

    if (val == "next") {
      this.previous.push(nqid);
      console.log('pushing elements into qaids');
      this.qaids[cqid]=ansid;
      
    }else{
      this.ansid = this.qaids[nqid]; 
      
        
    }
    
    console.log(this.qaids);

  }

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;
  selectedValue2!: number;
  selectedValue3!: number;

  countStar(star: number) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  countStar2(star2: number) {
    this.selectedValue2 = star2;
    console.log('Value of star', star2);
  }

  countStar3(star3: number) {
    this.selectedValue3 = star3;
    console.log('Value of star', star3);
  }
}
