import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'fb-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() message: any[] = [];

  constructor() {
    console.log('CardComponent constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CardComponent ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('CardComponent ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('CardComponent ngDoCheck called');
  }
  ngAfterViewInit(): void {
    console.log('CardComponent ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('CardComponent ngAfterViewChecked called');
  }
  ngAfterContentInit(): void {
    console.log('CardComponent ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('CardComponent ngAfterContentChecked called');
  }
  ngOnDestroy(): void {
    console.log('CardComponent ngOnDestroy called');
  }

}
