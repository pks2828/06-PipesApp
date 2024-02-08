import { Pipe, PipeTransform } from "@angular/core";

//angel | toggleCase = ´ANGEL´
//ANGEL | toggleCase = ´angel´

@Pipe({
    name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean ): 'vuela'|'no vuela'{

    return value
      ? 'vuela'
      : 'no vuela';


  }

}
