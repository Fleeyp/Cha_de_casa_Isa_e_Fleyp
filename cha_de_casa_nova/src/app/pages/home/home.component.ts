import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { FilterSidebarComponent } from '../../shared/filter-sidebar/filter-sidebar.component';
import { GiftCardComponent } from '../../shared/gift-card/gift-card.component';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FilterSidebarComponent, GiftCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public giftService: GiftService) {}
}
