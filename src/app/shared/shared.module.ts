import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AmountPipe } from './pipes/amount.pipe';
import { ConditionPipe } from './pipes/condition.pipe';



@NgModule({
  declarations: [BreadcrumbComponent, AmountPipe, ConditionPipe],
  imports: [
    CommonModule
  ],
  exports: [BreadcrumbComponent, AmountPipe, ConditionPipe]
})
export class SharedModule { }
