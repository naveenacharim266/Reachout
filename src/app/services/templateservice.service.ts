

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TemplateserviceService {
  getquestions(acttype ?:number,questions ?:[index?:number]){
    return[
      {  
        acttype:1,
      activityname:"act1",
      activity:[
              {
               heading:"Read, understand & answer",
                subheading:"",
                title:""
              }
              ],
              questions:[
                {
                  qustid:1,
                  qusth:"Five blocks have each been labelled with one of these letters - H, I, J , K, L. The H block is immediately to the right of the I block. The J block is to the right of the K block. The I is between L and K. The L is immediately to the left of the I. Where is the K?",
                  qustsubh:"",
                  options:[
                    {
                      optid:1,
                      optname:"Between L and H",
                      value:0
                    },
                    {
                      optid:2,
                      optname:"Left of I",
                      value:0
                    },
                    {
                      optid:3,
                      optname:"Immediately right of H",
                      value:1
                    },
                    {
                      optid:4,
                      optname:"Right of I",
                      value:0
                    }
                   ]
                },
                {
                  qustid:2,
                  qusth:"Place 14 blocks in three piles. The first pile should have one less than the third. The third pile should have twice as many as the second. How many blocks are there in each pile?",
                  qustsubh:"",
                  options:[
                    {
                      optid:1,
                      optname:"First has 5, second 3 and third 6",
                      value:1
                    },
                    {
                      optid:2,
                      optname:"First has 6, second 1 and third 7",
                      value:0
                    },
                    {
                      optid:3,
                      optname:"First has 3, second 7 and third 4",
                      value:0
                    },
                    {
                      optid:4,
                      optname:"First has 4, second 7 and third 4",
                      value:0
                    }
                   ]
                },
                {
                  qustid:3,
                  qusth:"Four students measured their heights. Neha was taller than Kiran, but not as tall as Tania. Sneha was taller than Tania. Write down their names in order of their heights from shorter to tallest.",
                  qustsubh:"",
                  options:[
                    {
                      optid:1,
                      optname:"Neha, Tania, Sneha, Kiran",
                      value:0
                    },
                    {
                      optid:2,
                      optname:"Sneha, Tania, Neha, Kirank",
                      value:1
                    },
                    {
                      optid:3,
                      optname:"Neha, Kiran, Sneha, Tania",
                      value:0
                    },
                    {
                      optid:4,
                      optname:"Neha, Kiran, Sneha, Tania",
                      value:0
                    }
                   ]
                },
                {
                  qustid:4,
                  qusth:"hello Four students measured their heights. Neha was taller than Kiran, but not as tall as Tania. Sneha was taller than Tania. Write down their names in order of their heights from shorter to tallest.",
                  qustsubh:"",
                  options:[
                    {
                      optid:1,
                      optname:"Neha, Tania, Sneha, Kiran",
                      value:0
                    },
                    {
                      optid:2,
                      optname:"Sneha, Tania, Neha, Kirank",
                      value:1
                    },
                    {
                      optid:3,
                      optname:"Neha, Kiran, Sneha, Tania",
                      value:0
                    },
                    {
                      optid:4,
                      optname:"Neha, Kiran, Sneha, Tania",
                      value:0
                    }
                   ]
                }
             ]
             
             
  
   }
  ]
  }
  
}
