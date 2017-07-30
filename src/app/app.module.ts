import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import {EmployeeDetail } from './EmployeeDetail/employee.component';
import {EmployeeCountComponent } from './EmployeeDetail/Employee.component.count';
import {EmployeeTitlePipe } from './EmployeeDetail/employeetitle.pipe';

@NgModule({
  declarations: [
    AppComponent,EmployeeDetail,EmployeeTitlePipe,EmployeeCountComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
    