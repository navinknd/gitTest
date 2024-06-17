import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CreditCard } from '../../../common/interfaces/general.interface';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-view',
  standalone: true,
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule]
})
export class ViewComponent {

  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    // private creditCardsService: CreditcardsService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute) {

    this.creditCardId = parseInt(this.router.snapshot.paramMap.get("id") || '');

    // this.creditCardsService.getCreditCardById(this.creditCardId)
    // .pipe(takeUntil(this.destroy$))
    // .subscribe((data: CreditCard) => {
    //   this.showSuccessMessage("Credit Card Loaded Successfully");
    //   this.creditCardDetails = data;

    // })
  }

  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
