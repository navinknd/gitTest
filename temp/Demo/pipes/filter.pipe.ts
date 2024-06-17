import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    standalone: true
})

export class FilterPipe implements PipeTransform {
    transform(list: unknown, ...args: unknown[]): unknown {
        console.log({ list, args });

        return null
    }
}