import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../service/projects.service';
import {httpUrl} from '../../http-url';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-burnout-figure',
  templateUrl: './burnout-figure.component.html',
  styleUrls: ['./burnout-figure.component.less']
})
export class BurnoutFigureComponent implements OnInit {
  options: any;
  data: Array;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCompletionStatusData(this.route.snapshot.paramMap.get('projectId'));
  }

  getCompletionStatusData(projectId: string): void {
    this.projectsService.getCompletionStatusData(projectId).subscribe(res => {
      this.data = res['data'];
      const legendData = [];
      this.data.forEach((data) => {
        legendData.push(data.name);
      });
      this.options = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: legendData
        },
        series: [
          {
            name: '数量统计',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: this.data
          }
        ]
      };
    });
  }
}
