import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [SearchBoxComponent, FormsModule, RouterModule]
})
export class CoreModule { }
