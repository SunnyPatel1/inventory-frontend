import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components/components.component';
import { BoardsComponent } from './boards/boards/boards.component';
import { JobsComponent } from './jobs/jobs/jobs.component';
import { BomsComponent } from './boms/boms/boms.component';
import { HomeComponent } from './home/home.component';
import { AssemblyComponent } from './companies/assembly/assembly.component';
import { LowInventoryComponent } from './home/low-inventory/low-inventory.component';
import { UnreturnedComponent } from './home/unreturned/unreturned.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path: '', component: HomeComponent },
  {path: 'components', component: ComponentsComponent },
  {path: 'boards', component:BoardsComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'boms', component: BomsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    BoardsComponent,
    JobsComponent,
    BomsComponent,
    HomeComponent,
    AssemblyComponent,
    LowInventoryComponent,
    UnreturnedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
