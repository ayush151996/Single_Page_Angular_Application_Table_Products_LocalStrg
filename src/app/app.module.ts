import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddPComponent } from './add-p/add-p.component';
import { DetailComponent } from './detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    AddPComponent,
    DetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  entryComponents:[AddPComponent,
    DetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
