import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpfPageRoutingModule } from './cpf-routing.module';

import { CpfPage } from './cpf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpfPageRoutingModule
  ],
  declarations: [CpfPage]
})
export class CpfPageModule {}
