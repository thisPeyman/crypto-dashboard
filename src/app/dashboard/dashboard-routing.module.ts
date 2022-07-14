import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'market' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'market',
        loadChildren: () =>
          import('./market/market.module').then((m) => m.MarketModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
