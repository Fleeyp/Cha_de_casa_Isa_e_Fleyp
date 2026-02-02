import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftService } from '../../core/services/gift.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public giftService: GiftService) {}
}
