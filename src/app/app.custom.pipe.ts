import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'shortvalue'
})

export class AppCustomPipe implements PipeTransform{
    transform(value: string){
        return value.substr(0,10) ;
    }
}