import { TranslateModule } from '@ngx-translate/core';
import { DetailsRoutingModule } from './details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [DetailsComponent],
  exports: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, MatGridListModule, TranslateModule]
})
export class DetailsModule {}
