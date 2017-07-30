import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import 'rxjs/Rx';
@Injectable()

export class EmployeeService{

url:string='https://jsonplaceholder.typicode.com/users';

constructor(private  _http:Http){}

            getEmployee()
            {
            return this._http.get(this.url)
                            .map((response:Response)=>response.json());
            }


}
