import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor() {}

  getChartsData() {
    return of([
      {
        name: 'Sierra Leone',
        series: [
          {
            value: 6048,
            name: '2016-09-20T18:25:50.551Z',
          },
          {
            value: 2397,
            name: '2016-09-21T14:25:23.336Z',
          },
          {
            value: 5501,
            name: '2016-09-24T01:34:54.617Z',
          },
          {
            value: 6201,
            name: '2016-09-22T18:42:29.755Z',
          },
          {
            value: 3224,
            name: '2016-09-23T03:51:13.082Z',
          },
        ],
      },
      {
        name: 'Gibraltar',
        series: [
          {
            value: 6226,
            name: '2016-09-20T18:25:50.551Z',
          },
          {
            value: 3864,
            name: '2016-09-21T14:25:23.336Z',
          },
          {
            value: 3670,
            name: '2016-09-24T01:34:54.617Z',
          },
          {
            value: 2347,
            name: '2016-09-22T18:42:29.755Z',
          },
          {
            value: 5910,
            name: '2016-09-23T03:51:13.082Z',
          },
        ],
      },
    ]);
  }
}
