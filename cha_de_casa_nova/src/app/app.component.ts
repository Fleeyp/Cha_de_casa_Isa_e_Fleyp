import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FilterSidebarComponent } from './shared/filter-sidebar/filter-sidebar.component';
import { GiftCardComponent } from './shared/gift-card/gift-card.component';
import { GiftService } from './core/services/gift.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FilterSidebarComponent,
    GiftCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public giftService: GiftService) {}
}
