import { Pipe, PipeTransform } from "@angular/core";

//angel | toggleCase = ´ANGEL´
//ANGEL | toggleCase = ´angel´

@Pipe({
    name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false ): string {

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
