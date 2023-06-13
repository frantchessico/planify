import { Component } from '@angular/core';
import { ContentCardsComponent } from "../../components/sections/content-cards/content-cards.component";

@Component({
    selector: 'app-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.scss'],
    standalone: true,
    imports: [ContentCardsComponent]
})
export class DashComponent {

}
