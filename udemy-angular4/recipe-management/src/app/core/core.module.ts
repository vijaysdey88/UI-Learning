
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppRouteModule } from "../route/app-route.module";
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppRouteModule,
    AppCommonModule
  ],
  exports: [
    HeaderComponent,
    AppRouteModule
  ]

})
export class CoreModule {}
