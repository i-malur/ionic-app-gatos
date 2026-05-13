import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpfPage } from './cpf.page';

const routes: Routes = [
  {
    path: '',
    component: CpfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpfPageRoutingModule {}
