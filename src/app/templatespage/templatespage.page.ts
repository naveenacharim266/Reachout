import { HttpClient } from '@angular/common/http';
import { arrayOfInterface } from './../Interface/myservice';
import { TemplateserviceService } from './../services/templateservice.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-templatespage',
  templateUrl: './templatespage.page.html',
  styleUrls: ['./templatespage.page.scss'],
})
export class TemplatespagePage implements OnInit {

  constructor(private myService:TemplateserviceService,private http:HttpClient) { }
  display :boolean = true;
  data : any;
  datas : arrayOfInterface [] = [];
  det : any;
  qst : any;
  nq : number = 0;
  total:number = 0;
  questionsarray:[];
  ngOnInit() {
    // this.datas = this.myService.getquestions(0);
    // this.det = this.datas[0];
    //  this.nextq(0);

    //this.datas = this.myService.getquestions(0);
   this.fetchData();
    // this.nextq(0);
    // this.det = this.datas[0];
     
   console.log('Fetching data'+this.datas);
    
  
  }

 private fetchData(){
      this.http.get('http://localhost:3000/activities')
      .pipe(map((res)=>{
        const activities = [];
        for(const key in res){
          if (res.hasOwnProperty(key)) {
            activities.push({...res[key],id:key})
          }
          
        }
        console.log('activities in fetch method' + activities);
        
        return activities;
      }))
      .subscribe((res)=>{
        console.log(res);
        this.datas = res;
        
      })
  }

  nextq(value:number){
    this.qst = this.det.questions[this.nq];
    if (this.nq < this.det.questions.length) {
      console.log(this.det.questions.length);
     
      this.total = this.total+value;
      console.log('value = '+value);
      this.nq++;
      console.log(this.nq);
     console.log('total ='+this.total);
     
    }else
    this.display = false;
  }

}


