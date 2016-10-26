import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'mylowercase'
})
export class MylowercasePipe implements PipeTransform {
    transform(value: any): any {
        return value.toLowerCase();
    }
}