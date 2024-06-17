import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCard } from '../../../common/interfaces/general.interface';
import { MatCardModule } from '@angular/material/card';
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
import { CommonModule } from '@angular/common';
import { DynamicComponentDirective } from '../../directives/dynamic-directice.directive';
import { IfDirective } from '../../directives/if.directive';
import { PercentagePipe } from '../../pipes/percentage.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-add',
  standalone: true,
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatTableModule, DynamicComponentDirective, IfDirective, PercentagePipe, FilterPipe,
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
    MatNativeDateModule, CommonModule,
  ],
  providers: []
})
export class AddComponent {

  private subscription: Subscription | undefined;
  resolveData: any;
  constructor(
    private router: Router, private activteRoute: ActivatedRoute) {
  }

  newCreditCard: CreditCard = {
    id: undefined,
    name: "",
    description: "",
    bankName: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and conditions for the credit card",
    createdDate: Date(),
    updatedDate: Date()
  }

  ngOnInit(): void {

    // const resolveData = this.activteRoute.snapshot.data['customData']
    // this.activteRoute.data.subscribe(data => this.resolveData = data['customData'])
    // console.log(this.resolveData, 'resolveData');

  }
  saveCreditCard() {
    // this.subscription = this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data => {
    //   alert("Credit Card Added");
    //   this.router.navigate(['creditcards']);
    // })
  }
  navigateToEdit() {
    console.log('navigate');
    this.router.navigate(['/edit'], { queryParams: { search: 'navin' }, fragment: "section2", state: { productID: 123 } })
    const navigation = this.router.getCurrentNavigation();
    // if (navigation) {
    //   const productId = navigation.extras.state && navigation.extras?.state['productId'];
    //   // Access the productId value here
    // }

  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
