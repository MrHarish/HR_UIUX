import { Directive, ElementRef, TemplateRef, ViewContainerRef, Input } from '@angular/core'

@Directive({
    selector: '[some]'
})

export class AppDirective {

    constructor(private el: TemplateRef<any>, private vr: ViewContainerRef ){}

    @Input() set some( condition:boolean){
        if(condition){
            this.vr.createEmbeddedView(this.el)
        }else{
            this.vr.clear()
        }
    }

}