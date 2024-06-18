import { Component } from '@angular/core';

@Component({
  selector: 'fb-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  ngOnInit(): void {
    console.log('ngOnInit');

  }
}
