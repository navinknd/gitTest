import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
// import { CreditcardsService } from 'src/app/services/creditcards.service';
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
  selector: 'app-edit',
  standalone: true,
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
    MatNativeDateModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editCreditCardForm!: FormGroup;

  creditCardId: number | string | null = 0;

  creditCardData: CreditCard | null = null;

  searchTerm: string = '';

  private destroy$: Subject<void> = new Subject<void>();
  // activeRoute: ActivatedRoute = inject(ActivatedRoute)
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
    // private creditCardsService: CreditcardsService

  ) {
    this.checkUserName = this.checkUserName.bind(this); 
    this.editCreditCardForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)], this.checkUserName],
      description: ['', Validators.required],
      bankName: ['', Validators.required],
      maxCredit: ['', Validators.required],
      interestRate: ['', Validators.required],
      active: [false, Validators.required],
      recommendedScore: [null, Validators.required],
      annualFee: ['', Validators.required],
      termsAndConditions: ['', Validators.required],
      createdDate: ['', Validators.required],
      updatedDate: ['', Validators.required]
    });
  }

  ngOnInit() {
    // snapshot property will only return initial value not updated value
    // const paramMapId = this.route.snapshot.paramMap.get("id")
    // const parammId = this.route.snapshot.params["id"];
    // this.creditCardId = paramMapId
    // console.log({ paramMapId, parammId })

    // use obervable to get always updated value
    // this.route.params.subscribe(({ id = 0 }) => this.creditCardId = id)
    // this.route.paramMap.subscribe(data => this.creditCardId = data.get('id'))

    // this.searchTerm = this.route.snapshot.queryParams['search'];
    // this.searchTerm = this.route.snapshot.queryParamMap.get('search') || ''
    // this.route.queryParamMap.subscribe(data => this.searchTerm = data.get('search') || '')
    // console.log(this.searchTerm);

    this.route.data.subscribe(data => console.log(data, 'data'))
    const valueFromRouter = this.router.getCurrentNavigation()?.extras.state;
    const hsty = history.state;
    console.log(hsty, 'history');

    console.log(valueFromRouter, 'valueFromRouter')
    // if(id !== 0){
    //   this.creditCardsService.getCreditCardById(id)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(data => {
    //     this.creditCardData = data;

    //     this.editCreditCardForm.patchValue(this.creditCardData);
    //   });
    // }
  }

  onSubmit() {
    console.log('submitted', this.editCreditCardForm);

    // if(this.editCreditCardForm.valid){
    //   const updatedFormData: CreditCard = this.editCreditCardForm.value;

    //   this.creditCardsService.updateCreditCard(updatedFormData)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(()=> {
    //     this.showSuccessMessage("Credit Card Updated Successfully");
    //   })
    // }
  }
  userNameAllowed(userName: string) {
    // it will be like api call in realtime useful here im just making like a api call
    // async validator must return promise or observable
    console.log(userName);

    const takenUserName = ['navin', 'vikas'];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (takenUserName.includes(userName)) {
          resolve({ checkUserName: true })
        } else {
          resolve(null)
        }
      }, 5000);
    })

  }

   checkUserName(control: AbstractControl): Promise<any> {
    return this.userNameAllowed(control.value);
  }
  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    })
  }

  ngOnDestory() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
