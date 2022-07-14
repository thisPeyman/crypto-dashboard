import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardService } from './shared/dashboard.service';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [DashboardComponent, SideBarComponent, MenuItemComponent],
  imports: [CommonModule, DashboardRoutingModule, MatIconModule],
  providers: [DashboardService],
})
export class DashboardModule {}
