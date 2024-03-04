

export interface Options{
        id: number, 
        option: string,
        nqid: number
}
export interface Contxt{
    txtid:number,
    txth1:string,
    txth2:string,
    txth3:string,
    txth4:string,
    txt1:string,
    txt2:string,
    txt3:string,
    txt4:string,
    txt5:string,
    txt6:string,
   
}

export interface choices{
    cid :number,
    choice:string,
    cnid:number
}
export interface myserve{
    title: string;
    subtitle:string,
    qustion_id: number,
    qustion_text:string,
    qustion_type:string,
    bottomtxt:string,
    options:  Options[],
   contxt: Contxt[],
   choices: choices[],
   anchortag:Anchortag[]
}
export interface Anchortag{
    aid:number,
    a:string,
    atext:string,
    anid:number
}


// template interface

export interface arrayOfInterface{
    acttype:number,
    activityname:string;
    heading:string,
    subheading:string,
    title:string,
    questions:Questions[]
}

export interface Questions{
    qustid:number,
    qusth:string,
    qustsubh:string,
    option:options[],
}
export interface options{
    optid:number,
    optname:string,
    value:number,
}


