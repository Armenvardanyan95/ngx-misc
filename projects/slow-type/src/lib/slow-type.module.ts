import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlowTypeComponent } from './slow-type.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SlowTypeComponent],
  exports: [SlowTypeComponent],
})
export class SlowTypeModule { }
