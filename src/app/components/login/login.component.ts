import { CommonModule } from '@angular/common';
import { Component, computed, signal, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Subject, interval, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'fb-login',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  counter = signal(0);
  message = signal<string[]>([]);
  doubleCounter = computed(() => this.counter() * 2);
  polledData: any[] = [];
  private pollingInterval$ = interval(500); // Poll every 5 seconds
  private destroy$ = new Subject<void>();

  constructor() {
    effect(() => {
      console.log('New counter values is:');
    });
    this.startPolling();
  }
  increament() {
    this.counter.update((previous) => previous + 1)
    this.message.update((previous) => [...previous, 'counter value:' + this.counter()])
  }
  decreament() {
    this.counter.update((previous) => previous - 1)
  }
  startPolling() {
    this.pollingInterval$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          this.fetchData();
          console.log('next called');
        }
      });
  }

  fetchData() {
    const newData = ['Data 1', 'Data 2', 'Data 3'];
    this.polledData = newData;
    console.log(this.polledData);

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
