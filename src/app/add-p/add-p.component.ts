import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-p',
  templateUrl: './add-p.component.html',
  styleUrls: ['./add-p.component.css']
})
export class AddPComponent implements OnInit {
  
  arr = new Array()
  ayush: any = {};
  
  userfrm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddPComponent>,
    @Inject(MAT_DIALOG_DATA) public data,private fb: FormBuilder) { }

  ngOnInit() {
    let mytime = localStorage.getItem('mytime');
    console.log(mytime);
    this.userfrm = this.fb.group({
      pnm: ['', Validators.required],
      desc: ['', Validators.required],
      prc: ''
    })
  }
  
  

  onNoClick(): void {
    this.dialogRef.close();
    
  }
  
  onsubmit(userfrm) {

    this.ayush.fname = userfrm.value.pnm;
    this.ayush.desc = userfrm.value.desc;
    this.ayush.prc = userfrm.value.prc;

    let products = JSON.parse(localStorage.getItem('prdcts')) || [];
    console.log('before');
    console.log(products);    
    products.push(this.ayush);
    console.log('after');
    console.log(products);

    // this.arr.push(this.ayush);
    // if (this.arr) {
    //   this.arr.push(this.ayush);
    // } else {
    //   this.arr = [this.ayush];
    //   console.log("else")
    // }
    // console.log(JSON.stringify(this.arr))
    localStorage.setItem("prdcts", JSON.stringify(products))
  }

}
