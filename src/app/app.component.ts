import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { User } from './user';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  arr = new Array()
  ayush: any = {};
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User("Enter Product Name", 100000, "default");
  userfrm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    let mytime = localStorage.getItem('mytime');
    console.log(mytime);
    this.userfrm = this.fb.group({
      pnm: ['', Validators.required],
      desc: ['', Validators.required],
      prc: ''
    })
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




