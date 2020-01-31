import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MyTreasuryComponent } from './MyTreasury/MyTreasury.component';
import { InheretorsComponent } from '../inheretors/inheretors.component';
import { MyFilesComponent } from './my-files/my-files.component';
import { TheWillComponent } from './the-will/the-will.component';
import { OgertomStoreComponent } from './ogertom-store/ogertom-store.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { GuideLinesComponent } from './guide-lines/guide-lines.component';
import { HomeComponent } from './home/home.component';
import { GovServicesComponent } from './gov-services/gov-services.component';
import { PrintDeathCardComponent } from './print-death-card/print-death-card.component';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gov-services',
    component: GovServicesComponent
  },
  {
    path: 'print-death-card',
    component: PrintDeathCardComponent
  },

  {
    path: 'my-treasury',
    component: MyTreasuryComponent
  },
  {
    path: 'my-files',
    component: MyFilesComponent
  },
  {
    path: 'the-will',
    component: TheWillComponent
  },
  {
    path: 'inheretors',
    component: InheretorsComponent
  },
  {
    path: 'guide-lines',
    component: GuideLinesComponent
  },

  {
    path: 'service-list',
    component: ServiceListComponent
  },

  {
    path: 'ogertom-store',
    component: OgertomStoreComponent
  },

  {
    path: 'inheretors',
    component: InheretorsComponent
  },

  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  }
];
