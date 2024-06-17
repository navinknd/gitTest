import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { PracticeService } from '../practice/practice.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

interface IdynamicKey {
  [key: string]: {
    anything1?: string;
    anything2: string
  }
}
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent, CommonModule, HeaderComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title: string = ''
  @Input() data: any;
  @ContentChild('heading', { static: true }) firstHeading!: ElementRef
  @ContentChildren('paragraph') paragraphs!: QueryList<ElementRef<HTMLElement>>
  dynamicStyles: any;
  // @ViewChild(ButtonComponent, { static: false }) btnComponent!: ButtonComponent // directly refering the component
  // @ViewChild('btnComp', { static: false }) btnComponent!: ButtonComponent // refering using template reference variable
  // @ViewChildren('btnComp') btnComponent!: QueryList<ButtonComponent>;
  // @ViewChildren(ButtonComponent) btnComponent!: QueryList<ButtonComponent>;

  @ViewChild('searchValue') searchValue!: ElementRef

  count: number = 0
  subscription!: Subscription
  loadBtn: boolean = false
  constructor(private service: PracticeService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    console.log('CardComponent called', this.data);
    this.subscription = this.service.getPrice$.subscribe({
      next: (res: any) => {
        this.count = res;
        // this.cd.detectChanges()
        // this.cd.markForCheck()
      },
      error: (err: any) => {
        console.log(err);
      }
    });

    setTimeout(() => {
      this.loadBtn = true
    }, 5000);

  }
  getPriceFromChild(event: any) {
    // this.count = event;
    console.log(event, 'getPriceFromChild');
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngAfterViewInit(): void {
    console.log('CardComponent called', this.data);
    // if (this.btnComponent) {
    //   console.log(this.btnComponent);

    //   this.btnComponent.forEach(child => {
    //     console.log(child.count, 'child');
    //   });

    //   // this.btnComponent.sendSomething()
    // }
    if (this.paragraphs) {
      this.paragraphs.forEach(paragraph => {
        paragraph.nativeElement.style.color = 'blue';
      });
    }
    this.cd.detectChanges()
  }
  modifyFn(data: any) {
    console.log(data);
  }

  highlightFirstHeading() {
    console.log(this.firstHeading);

    if (this.firstHeading) {
      this.firstHeading.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  alertMessage() {
    alert(this.searchValue.nativeElement.value)
  }
}
