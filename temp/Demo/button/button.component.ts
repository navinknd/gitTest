import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ContentChild } from '@angular/core';
import { PracticeService } from '../practice/practice.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { mimeType } from './mimeType';

type commonType = string;
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ButtonComponent {
  myForm!: FormGroup;
  @Input() modifyFn?: (data: any) => any; // function as input
  @Output() sendPrice = new EventEmitter<any>();
  @ViewChild('testViewChild', { static: false }) paragraph: ElementRef | null = null;

  subscription: Subscription | undefined
  count: number = 0
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  imagePreview: string | null = null;
  changeText: commonType = 'Some Text'


  constructor(private service: PracticeService, private cd: ChangeDetectorRef, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      image: [null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }],
    })
  }


  ngOnInit(): void {
    console.log('ButtonComponent called');
    this.subscription = this.service.getPrice$.subscribe({
      next: (res: any) => {
        this.count = res;
        // this.cd.markForCheck()
        // this.cd.detectChanges()
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    this.modifyFn?.('go to parent')
  }

  sendSomething() {
    // this.sendPrice.emit(300)
    // console.log('sendSomething');

    this.service.setPrice(400)

  }
  onImagePicked(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.myForm.patchValue({ image: file });
      this.myForm.get('image')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  downloadImage(): void {

    const blob = new Blob([this.imagePreview ?? 'apiResponse'], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anyNameitwillBeFileName.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

  }

  onSubmit(): void {
    if (this.myForm.valid) {
      // handle form submission
    } else {
      console.log('submitted', this.myForm.value);

    }
  }
  ngAfterViewInit(): void {
    if (this.paragraph) {
      this.paragraph.nativeElement.textContent = 'navin kumar'
    }

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  encodeText() {
    this.changeText = btoa('Welcome Navin')
  }
  decodeText() {
    this.changeText = atob(this.changeText)
  }


}
