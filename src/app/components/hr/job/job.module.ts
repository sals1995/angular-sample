
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule, Route } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'src/app/shared/modules/shared.module';

const routes:Route[]=[
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:CreateComponent},
  {path:'index',component:IndexComponent},
  {path:'',component:IndexComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),SharedModule,
    NgxPaginationModule,
    UiSwitchModule,
    NgxSpinnerModule
  ],
  declarations: [CreateComponent, IndexComponent]
})
export class JobModule { }
