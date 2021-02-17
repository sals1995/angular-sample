import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shipping-tab',
    templateUrl: 'tab.component.html'
})
export class ShippingTabComponent implements OnInit {
    @Input() activeTab: string ;

    constructor() {
        console.log(this.activeTab)
    }
    ngOnInit(): void {
    }
    ngOnChange(){
        console.log(this.activeTab + "change")
    }

}
