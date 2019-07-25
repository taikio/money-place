import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasListComponent } from './despesas/despesas-list/despesas-list.component';
import { ContasListComponent } from './contas/contas-list/contas-list.component';

const routes: Routes = [
  {
    path: 'despesas',
    component: DespesasListComponent
  },
  {
    path: 'contas',
    component: ContasListComponent
  },
  { path: '',
    redirectTo: 'despesas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'despesas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
