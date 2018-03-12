import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms'
import { Http, Response, RequestOptions, Headers} from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {ValuesService} from './api/services/values.service';
import { TransactionDTO } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpClient:HttpClient,private service: ValuesService){}
  
    uploadForm = new FormGroup ({
      fileToUpload: new FormControl()
    });
    gridData: TransactionDTO[] = [];
    filedata:any;
    fileEvent(e){
      this.filedata=e.target.files[0];
    }
    onSubmit() {
      let formdata = new FormData();
      formdata.append('uploadFile', this.filedata, this.filedata.name);  
      this.httpClient.post("http://localhost:53867/api/Values/UploadFile", formdata, { headers: new HttpHeaders()})
      .subscribe(data => this.gridData = data as TransactionDTO[]
      ,error => alert(error.message));      
    }

  ngOnInit(){}

  title = 'Moneytor!';

  gridUserSelectionChange(gridUser, selection) 
  {
    if(selection.selectedRows.length > 0){
      alert(selection.selectedRows[0].dataItem.Amount)
    }

  }
  onButtonClick() {    
    this.service.Values_Get().subscribe(data =>
      alert(data.length.toString()),
     error => alert(error.toString()));
    this.title = 'Coming Soon!';
  }
}
