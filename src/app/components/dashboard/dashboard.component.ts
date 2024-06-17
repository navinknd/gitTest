import { Component, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'fb-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  counter = 0;
  message: any = ["default message"]

  increament() {
    this.message = [...this.message, 'New message'];
    this.counter++;
  }
  decreament() {
    this.counter--;
    if (this.message.length > 0) {
      this.message = this.message.slice(0, this.message.length - 1);
    }
  }
  constructor() {
    console.log('DashboardComponent constructor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('DashboardComponent ngOnChanges called');
  }

  ngOnInit(): void {
    console.log('DashboardComponent ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('DashboardComponent ngDoCheck called');
  }
  ngAfterViewInit(): void {
    console.log('DashboardComponent ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('DashboardComponent ngAfterViewChecked called');
  }
  ngAfterContentInit(): void {
    console.log('DashboardComponent ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('DashboardComponent ngAfterContentChecked called');
  }
  ngOnDestroy(): void {
    console.log('DashboardComponent ngOnDestroy called');
  }

}
