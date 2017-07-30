 import {Component,OnInit,NgModule} from  '@angular/core';
 import {EmployeeService} from './Employee.Service';
 
 @Component({
  selector:'employee-Detail',

  templateUrl:'./employee.component.html',
  providers:[EmployeeService]



 })

 export class  EmployeeDetail implements OnInit {
  Name:string='Rohit Kumar';
  Email:string='rohitsmcet@gmail.com';
  Mobile:number=9540893655;
  employeeList:any[];
  users:any[];
 selectedEmployeeCountRadioButton: string = 'All';
  constructor(private _employeeService:EmployeeService){
this.employeeList=[

        {Code:'emp101',name:'Rohit',gender:'male',annualSalary:66000,dateofbirth:'01/26/2017'},
        {Code:'emp102',name:'shivam',gender:'male',annualSalary:44000,dateofbirth:'02/23/2018'},
        {Code:'emp103',name:'manish',gender:'male',annualSalary:78000,dateofbirth:'03/28/2019'},
        {Code:'emp104',name:'Prashant',gender:'male',annualSalary:16000,dateofbirth:'04/24/2020'},
        {Code:'emp105',name:'rahul',gender:'male',annualSalary:12000,dateofbirth:'05/01/2021'},
        {Code:'emp106',name:'nayan',gender:'male',annualSalary:10000,dateofbirth:'06/02/2022'},
           {Code:'emp107',name:'menika',gender:'female',annualSalary:8000,dateofbirth:'07/03/2023'},

  ];

  }

ngOnInit()
{

  this._employeeService.getEmployee().subscribe(resEmployeeData=>this.users=resEmployeeData);
}










  getEmloyee():void     {

this.employeeList=[

        {Code:'emp101',name:'Rohit',gender:'male',annualSalary:66000,dateofbirth:'01/26/2017'},
        {Code:'emp102',name:'shivam',gender:'male',annualSalary:44000,dateofbirth:'02/23/2018'},
        {Code:'emp103',name:'manish',gender:'male',annualSalary:78000,dateofbirth:'03/28/2019'},
        {Code:'emp104',name:'Prashant',gender:'male',annualSalary:16000,dateofbirth:'04/24/2020'},
        {Code:'emp105',name:'rahul',gender:'male',annualSalary:12000,dateofbirth:'05/01/2021'},
        {Code:'emp106',name:'nayan',gender:'male',annualSalary:10000,dateofbirth:'06/02/2022'},
        {Code:'emp107',name:'menika',gender:'female',annualSalary:8000,dateofbirth:'07/03/2023'},
        {Code:'emp108',name:'toni',gender:'female',annualSalary:123456780,dateofbirth:'08/25/2035'},
        {Code:'emp109',name:'nandani',gender:'female',annualSalary:12345678000,dateofbirth:'09/30/2029'},
        {Code:'emp110',name:'kashyap',gender:'male',annualSalary:1234567800,dateofbirth:'10/27/2027'},
        {Code:'emp111',name:'swayam',gender:'female',annualSalary:1234567800,dateofbirth:'7/19/2028'},

  ];
  }
trackByEmpCode(index:number,emp:any):string{

return emp.Code;

}

getallEmployeeCount():number
{
return this.employeeList.length;
}

getMaleEmployeeCOunt():number
{
  return this.employeeList.filter(x=>x.gender==='male').length;

}

getallFemaleEmployee():number
{
  return this.employeeList.filter(x=>x.gender==='female').length;

}


onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
  
 }

 