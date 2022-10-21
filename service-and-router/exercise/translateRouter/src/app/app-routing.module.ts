import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MeanComponent} from './mean/mean.component';
import {TranslationComponent} from './translation/translation.component';


const routes: Routes = [
  {
    path: '',
    component: TranslationComponent
  },
  {
    path: 'translate/:word',
    component: MeanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
