import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let role = '普通成员';
    if (value === '0') {
      role = '超级管理员';
    } else if (value === '1') {
      role = '管理员';
    }
    return role;
  }
}
