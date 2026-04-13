import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftService } from '../../core/services/gift.service';
import { StatusFilter, PriceRange } from '../../core/models/gift.model';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.css'
})
export class FilterSidebarComponent {
  constructor(public giftService: GiftService) {}

  onStatusChange(status: StatusFilter): void {
    this.giftService.setStatusFilter(status);
  }

  onPriceChange(range: PriceRange): void {
    this.giftService.setPriceRange(range);
  }

  isStatusActive(status: StatusFilter): boolean {
    return this.giftService.statusFilter() === status;
  }

  isPriceActive(range: PriceRange): boolean {
    const current = this.giftService.selectedPriceRange();
    return current.label === range.label;
  }
}
