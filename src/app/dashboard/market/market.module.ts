import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketComponent } from './market.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InteractiveChartComponent } from './components/interactive-chart/interactive-chart.component';
import { CompanyInfoComponent } from './components/interactive-chart/company-info/company-info.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MarketComponent,
    NavbarComponent,
    InteractiveChartComponent,
    CompanyInfoComponent,
  ],
  imports: [CommonModule, MarketRoutingModule, NgxChartsModule, MatIconModule],
})
export class MarketModule {}
