import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'test',
        loadChildren: () =>
          import('./test-wrapper.module').then((mod) => mod.TestWrapperModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/test',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
