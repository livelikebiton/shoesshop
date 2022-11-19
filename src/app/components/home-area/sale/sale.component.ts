import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {

    @Input()
    public percent: number;

    public isSunday(): boolean {
        const now = new Date();
        const sunday = now.getDay() + 1;
        return sunday <= 1;
    }

}
