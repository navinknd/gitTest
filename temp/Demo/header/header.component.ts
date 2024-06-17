import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() data: any
  @Output() outputEvent = new EventEmitter<any>();
  counter: number = 0;
  ngOnInit(): void {
    console.log('HeaderComponent ngOnInit called');
  }
  ngOnDestroy(): void {
    console.log('HeaderComponent ngOnDestroy called');
  }
  increment() {
    this.counter++;
    this.outputEvent.emit({ counterValue: this.counter });
  }
}
