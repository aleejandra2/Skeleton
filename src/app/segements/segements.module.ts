import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegementsPageRoutingModule } from './segements-routing.module';

import { SegementsPage } from './segements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegementsPageRoutingModule
  ],
  declarations: [SegementsPage]
})
export class SegementsPageModule {}
