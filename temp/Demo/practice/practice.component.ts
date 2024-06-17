import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { PracticeModule } from './practice.modules';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule, PracticeModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})

export class PracticeComponent {
  title = 'dell'

  defaultWelcomeMessage: string = 'fallback value'
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en-US');// Set default language
  }
  ngOnInit(): void {
    console.log('practice component called');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang); // Dynamic language switching
  }
}
