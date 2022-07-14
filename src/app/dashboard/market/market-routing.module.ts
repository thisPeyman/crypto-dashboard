import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InteractiveChartComponent } from './components/interactive-chart/interactive-chart.component';
import { MarketComponent } from './market.component';

const routes: Routes = [
  {
    path: '',
    component: MarketComponent,
    children: [{ path: '', component: InteractiveChartComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxChartsModule],
  exports: [RouterModule],
})
export class MarketRoutingModule {}
