//Angular modules imports

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';








import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { BoardsComponent } from './boards/boards.component';
import { JobsComponent } from './jobs/jobs.component';
import { BomsComponent } from './boms/boms.component';
import { HomeComponent } from './home/home.component';
import { LowInventoryComponent } from './home/low-inventory/low-inventory.component';
import { UnreturnedComponent } from './home/unreturned/unreturned.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';
import { AssemblersComponent } from './assemblers/assemblers.component';
import { HeaderComponent } from './general/header/header.component';

const appRoutes:Routes = [
  {path: '', component: HomeComponent },
  {path: 'components', component: ComponentsComponent },
  {path: 'boards', component:BoardsComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'boms', component: BomsComponent},
  {path: 'manufacturers', component: ManufacturersComponent},
  {path: 'assemblers', component: AssemblersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    BoardsComponent,
    JobsComponent,
    BomsComponent,
    HomeComponent,
    LowInventoryComponent,
    UnreturnedComponent,
    ManufacturersComponent,
    AssemblersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
