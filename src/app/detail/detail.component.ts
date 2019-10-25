import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  firstname;
  description;
  price;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);

  }


  ngOnInit() {
    this.firstname = this.data.fname;
    this.price = this.data.prc;
  }



}
