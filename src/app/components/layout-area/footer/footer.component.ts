import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {

    public monthAndYear: string;

    public constructor() {
        const now = new Date();
        const months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
        const currentMonth = months[now.getMonth()];
        const currentYear = now.getFullYear();
        this.monthAndYear = currentMonth + " " + currentYear;
    }

    public color: string;

    public getColor() {
        const colors = ["red", "green", "blue", "yellow", "magenta", "cyan", "white", "gray"];
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

    public changeColor(args: MouseEvent) :void {
        this.color = this.getColor();
    }

}
