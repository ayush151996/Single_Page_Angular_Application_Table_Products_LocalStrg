import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailComponent } from  '../detail/detail.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data=[];
  constructor(public dialog: MatDialog) { }

  

  detailing(row){
    
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '250px',
      data: row,
    });
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('prdcts'))
    console.log(this.data)
  }
  displayedColumns: string[] = ['fname', 'prc'];
  //dataSource = this.data;
}
