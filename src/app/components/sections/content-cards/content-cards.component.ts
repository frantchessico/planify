import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from "../search-form/search-form.component";
import { ContentModalComponent } from "../../content-modal/content-modal.component";

@Component({
    selector: 'app-content-cards',
    standalone: true,
    templateUrl: './content-cards.component.html',
    styleUrls: ['./content-cards.component.scss'],
    imports: [CommonModule, SearchFormComponent, ContentModalComponent]
})
export class ContentCardsComponent {

}
