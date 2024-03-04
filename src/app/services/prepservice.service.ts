import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrepserviceService {

  constructor() { }
  getQuestions(_qustion_id: Number) {
    return [
      {
        'title': 'Thank you for reaching out.',
        'subtitle': '',
        'qustion_id': 0,
        'qustion_text': ' How may I help you today?',
        'qustion_type': 'Opt',
        'bottomtxt': '',

        'options': [
          {
            'id': 1,
            'option': 'Counselling',
            'nqid': 1,
          },
          {
            'id': 2,
            'option': 'Training',
            'nqid': 1,
          },
          {
            'id': 3,
            'option': 'Academics',
            'nqid': 1,
          },
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',
          },
        ],
        'choices': [
          // {
          //   'cid': 1,
          //   'choice': '',
          //   'cnid': 2
          // }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]

      },

      {
        'title': "That's great.",
        'subtitle': 'What kind of counselling are you looking for?',
        'qustion_id': 1,
        'qustion_text': ' ',
        'qustion_type': 'Opt',
        'bottomtxt': '',

        'options': [
          {
            'id': 1,
            'option': 'Carrer',
            'nqid': 2,
          },
          {
            'id': 2,
            'option': 'Mental Health',
            'nqid': 2,
          },
          {
            'id': 3,
            'option': 'Substance Abuse',
            'nqid': 2,
          },
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          },
        ],

        'choices': [
        //   {
        //     'cid': 2,
        //     'choice': '',
        //     'cnid': 2
        //   }
         ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "Ok. Thank you for your response.",
        'subtitle': '',
        'qustion_id': 2,
        'qustion_text': ' Do you need to talk to some one right now or can I schedule a converseation at a later date/time?',
        'qustion_type': 'Opt',
        'bottomtxt': '',
        'contxt': [
          {
            'txtid': 1,


            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          },
        ],
        'options': [
          {
            'id': 1,
            'option': 'Schedule',
            'nqid': 10,
          },
          {
            'id': 2,
            'option': 'Immediate',
            'nqid': 3,
          },
        ],

        'choices': [
          // {
          //   'cid': 1,
          //   'choice': '',
          //   'cnid': 2
          // }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]


      },
      {
        'title': "I understand. ​",
        'subtitle': '',
        'qustion_id': 3,
        'qustion_text': 'Let me see who is available to connect with you. Can you hold on till I find this information?',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [
         
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',
          }

        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Yes',
            'cnid': 5
          },
          {
            'cid': 2,
            'choice': 'No',
            'cnid': 3
          }
        ],
        'anchortag': [
          
        ]
      },
      {
        'title': "Thank you for your patience. ​",
        'subtitle': 'I can see that the following persons are available to connect with you right away. ',
        'qustion_id': 4,
        'qustion_text': 'Please select whom would you like to talk to',
        'qustion_type': 'Opt',
        'bottomtxt': '',

        'options': [
          {
            'id': 1,
            'option': 'Bangalore',
            'nqid': 1,
          },
          {
            'id': 2,
            'option': 'Hyderabad',
            'nqid': 1,
          },
          {
            'id': 3,
            'option': 'Chennai',
            'nqid': 1,
          },
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          // {
          //   'cid': 2,
          //   'choice': '',
          //   'cnid': 2
          // }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "That’s great. Name 1 will be calling you shortly.​​",
        'subtitle': '',
        'qustion_id': 5,
        'qustion_text': 'Please be available in XXXXXXXXXX or XXXXXXXXXX to talk to them regarding your query.',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [
          
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          },

        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Ok',
            'cnid': 6,
          }  
        ],
        'anchortag': [
          {
            'aid': 1,
            'a': 'Click here',
            'atext': 'if you would like to resume your learning',
            'anid': 1
          },
          {
            'aid': 2,
            'a': 'Click here',
            'atext': 'if you would like to back to the Home page',
            'anid': 1
          }
        ]
      },
      {
        'title': "Greetings. ​",
        'subtitle': '',
        'qustion_id': 6,
        'qustion_text': 'The following person is looking to connect with a counsellor immediately. The following are the details:',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [

        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': 'Location - Chennai',
            'txt2': 'Class - 5',
            'txt3': 'Reason - Mental Heath',
            'txt4': 'Please let us know if you are available to talk now​',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Yes',
            'cnid': 8
          },
          {
            'cid': 2,
            'choice': 'No',
            'cnid': 2
          }
        ]
        ,
        'anchortag': [
          
        ]
      },
      {
        'title': "That’s great.   ​",
        'subtitle': '',
        'qustion_id': 7,
        'qustion_text': 'We will share the details of the person once they accept the request.',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [
         
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Ok',
            'cnid': 9
          }
        ],
        'anchortag': [
          
        ]

      },
      {
        'title': "Hello. ​",
        'subtitle': '',
        'qustion_id': 8,
        'qustion_text': ' We are happy to let you know that your appointment has been confirmed and the following are the details:',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [

          // {
          //   'id': 1,
          //   'option': 'OK',
          //   'nqid': 1,
          // }
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': 'Name - Jagan',
            'txt2': 'Location - Chennai',
            'txt3': 'Class - 5',
            'txt4': 'Reason - Mental Health',
            'txt5': 'Primary Contact Number - XXXXXXXXX',
            'txt6': 'AlterNate - Number - XXXXXXXXX',

          }
        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Ok',
            'cnid': 12
          }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "Please reach out to Jagan in the next 15 minutes and complete your conversation.​​",
        'subtitle': '',
        'qustion_id': 9,
        'qustion_text': '',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [

          
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': 'Note: Don’t forget to enter your notes once you are done with your conversation with Jagan.',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Ok',
            'cnid': 16
          }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "​That’s great. ​",
        'subtitle': '',
        'qustion_id': 10,
        'qustion_text': 'We have the following persons who are empaneled with us from Bangalore who will be able to help you with your requirement. Please select whom you would like to connect with.​',
        'qustion_type': 'Opt',
        'bottomtxt': '',

        'options': [
          {
            'id': 1,
            'option': 'Bangalore',
            'nqid': 11,
          },
          {
            'id': 2,
            'option': 'Hyderabad',
            'nqid': 11,
          },
          {
            'id': 3,
            'option': 'Chennai',
            'nqid': 11,
          },
          {
            'id': 4,
            'option': 'I am OK to talk to any one. ',
            'nqid': 11,
          },
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],

        'choices': [
          // {
          //   'cid': 2,
          //   'choice': '',
          //   'cnid': 2
          // }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "​That’s great. ​",
        'subtitle': 'We will schedule your appointment and will send a confirmation to you in your contact number and email address.',
        'qustion_id': 11,
        'qustion_text': '​',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [

        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': '',
            'txth2': '',
            'txth3': '',
            'txth4': '',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],

        'choices': [
          {
            'cid': 1,
            'choice': 'Ok',
            'cnid': 9
          }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'Click here',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "Hello. ​",
        'subtitle': '  ​',
        'qustion_id': 12,
        'qustion_text': 'We hope you are done with your conversation with Name 1? Request you to please share your feedback to help us improve our service :​',
        'qustion_type': 'fb',
        'bottomtxt': 'Thank you for your feedback',

        'options': [
          // {
          //   'id': 1,
          //   'option': 'save',
          //   'nqid': 1,
          // }
        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': 'How satisfied were you with the session today',
            'txth2': 'How would you rate your councilor?​',
            'txth3': 'What can we do to improve?',
            'txth4': '​',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          {
            'cid': 2,
            'choice': 'save',
            'cnid': 14
          }
        ],
        'anchortag': [
          
        ]
      },
      {
        'title': "Thank you.​",
        'subtitle': 'An entry has been created in your calendar for your next appointment with Jagan.​',
        'qustion_id': 13,
        'qustion_text': 'We will give you a reminder 2 days before your next appointment with Jagan.​',
        'qustion_type': 'Opt',
        'bottomtxt': '',

        'options': [

        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': 'Good Day',
            'txth2': '​',
            'txth3': '',
            'txth4': '​',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          // {
          //   'cid': 2,
          //   'choice': '',
          //   'cnid': 2
          // }
        ],
        'anchortag': [
          {
            'aid': 1,
            'a': 'to view your calendar',
            'atext': '',
            'anid': 4
          }
        ]
      },
      {
        'title': "Thank you.​",
        'subtitle': ' We hope you are done with your conversation with Jagan? Please share your notes for us to keep track of the progress.​',
        'qustion_id': 14,
        'qustion_text': 'Meeting Notes​',
        'qustion_type': 'fb',
        'bottomtxt': '',

        'options': [

        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': 'Follow up required? ',
            'txth2': 'Follow up Date​',
            'txth3': 'Please rate your interaction',
            'txth4': '​',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Date Picker',
            'cnid': 15
          },
          {
            'cid': 2,
            'choice': 'Yes',
            'cnid': 2
          },
          {
            'cid': 3,
            'choice': 'No',
            'cnid': 2
          },
          {
            'cid': 4,
            'choice': 'Save',
            'cnid': 2
          }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'to view your calendar',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "Calender​",
        'subtitle': ' ​',
        'qustion_id': 15,
        'qustion_text': '​',
        'qustion_type': 'fb',
        'bottomtxt': '',

        'options': [

        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': ' ',
            'txth2': '​',
            'txth3': '',
            'txth4': '​',
            'txt1': '',
            'txt2': '',
            'txt3': '',
            'txt4': '',
            'txt5': '',
            'txt6': '',

          }
        ],
        'choices': [
          
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'to view your calendar',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      },
      {
        'title': "Hello.  ​",
        'subtitle': 'This is a reminder regarding your upcoming appointment​',
        'qustion_id': 16,
        'qustion_text': '​',
        'qustion_type': 'Cont',
        'bottomtxt': '',

        'options': [

        ],

        'contxt': [
          {
            'txtid': 1,
            'txth1': ' ',
            'txth2': '​',
            'txth3': 'Note: Don’t forget to enter your notes once you are done with your conversation.​',
            'txth4': '​',
            'txt1': 'Name - Jagan',
            'txt2': 'Location - Chennai',
            'txt3': 'Class - 5',
            'txt4': 'Reason - Mental Health',
            'txt5': 'Primary Contact Number - XXXXXX',
            'txt6': 'Alternate Contact Number - XXXXXXX',

          }
        ],
        'choices': [
          {
            'cid': 1,
            'choice': 'Ok',
            'cnid': 14
          }
        ],
        'anchortag': [
          // {
          //   'aid': 1,
          //   'a': 'to view your calendar',
          //   'atext': '',
          //   'anid': 4
          // }
        ]
      }

    ]

  }
}
