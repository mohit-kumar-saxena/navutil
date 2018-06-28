import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavigationService } from './navigation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'nav', component: AppComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', component: WelcomeComponent }
    ])
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
