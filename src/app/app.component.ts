import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgbdModalBasic } from './modal-basic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  isValidWhenClick=false;
  contract_table(){
    this.isValidWhenClick=true;
  }
  out_table(){
    this.isValidWhenClick=false;
  }


}
