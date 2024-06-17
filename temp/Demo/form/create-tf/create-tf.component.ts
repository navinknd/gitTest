import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-tf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-tf.component.html',
  styleUrl: './create-tf.component.scss'
})
export class CreateTFComponent {

  @ViewChild('registerForm') registerForm!: NgForm

  // must in html
  // name
  // #form=ngForm
  // ngModel


  submit() {
    // access values in Template driven form using value directly
    // const { radio_input, file_input, checkbox_input, date_input, number_input, password_input, email_input, text_input } = this.registerForm.value;
    // console.log(radio_input, file_input, checkbox_input, date_input, number_input, password_input, email_input, text_input);

    // // access values in Template driven form using controls 
    // const constrols = this.registerForm.controls;
    // console.log(constrols['text_input'].value
    // );
    console.log(this.registerForm);


  }
}
