import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MarketService } from '../../shared/market.service';

@Component({
  selector: 'app-interactive-chart',
  templateUrl: './interactive-chart.component.html',
  styleUrls: ['./interactive-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractiveChartComponent implements OnInit {
  data$ = this.marketService.getChartsData();

  constructor(private marketService: MarketService) {}

  ngOnInit(): void {}
}
