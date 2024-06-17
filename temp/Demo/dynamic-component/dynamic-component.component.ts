import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PracticeComponent } from '../practice/practice.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
interface DynamicComponentData {
  message: string;
}
@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [HeaderComponent, RouterModule], // Only import HeaderComponent since it's used in the template
  template: `
    <div>
      <button (click)="loadComponent('card')">Load Card</button>
      <button (click)="loadComponent('practice')">Load Practice</button>
      <button (click)="loadComponent('header')">Load Header</button>
      <button (click)="loadComponent('footer')">Load Footer</button>
    <a [routerLink]="['/']"  >Back</a>
      
    </div>
    <ng-container #dynamicComponentContainer></ng-container>
  `
})
export class DynamicLoaderComponent implements OnDestroy {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { } // Removed unused componentFactoryResolver injection

  /**
   * Loads a component dynamically based on the provided component name.
   * Clears the container before creating a new component.
   * Sets data, subscribes to outputs (if header), and applies styles (if card).
   * @param componentName Name of the component to load ('card', 'practice', 'header', or 'footer')
   */
  loadComponent(componentName: string): void {
    this.dynamicComponentContainer.clear();

    let component: any;
    switch (componentName) {
      case 'card':
        component = CardComponent;
        break;
      case 'practice':
        component = PracticeComponent;
        break;
      case 'header':
        component = HeaderComponent;
        break;
      default:
        return;
    }

    try {

      // (ComponentFactoryResolver is deprecated not recommended approach)
      // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      // this.componentRef = this.dynamicComponentContainer.createComponent(componentFactory);


      // Directly use the component class with createComponent (recommended approach)
      this.componentRef = this.dynamicComponentContainer.createComponent(component);
      this.componentRef.instance['data'] = {
        message: 'Data from parent component'
      } satisfies DynamicComponentData;

      console.log(this.componentRef.instance, 'componentRef instance ****************8 ');

      // Dynamic Inputs and Outputs
      if (componentName === 'header') {
        this.componentRef.instance?.['outputEvent']?.subscribe((data: any) => {
          console.log('Output Event Data:', data);
        });
      }

      // Dynamic Styles and Classes
      if (componentName === 'card') {
        this.componentRef.instance['dynamicStyles'] = {
          backgroundColor: 'red',
          fontSize: '20px'
        };
      }

      // Trigger change detection
      this.componentRef.changeDetectorRef.detectChanges();
    } catch (error) {
      console.error('Error creating dynamic component:', error);
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
