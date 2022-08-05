import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsSearchComponent } from './shared/atoms/buttons-search/buttons-search.component';
import { InputSearchComponent } from './shared/atoms/input-search/input-search.component';
import { NavSearchComponent } from './shared/organisms/nav-search/nav-search.component';
import { ListPlacesSearchComponent } from './shared/atoms/list-places-search/list-places-search.component';
import { CardNextWeatherComponent } from './shared/molecules/card-next-weather/card-next-weather.component';
import { MainWeatherComponent } from './shared/organisms/main-weather/main-weather.component';
import { WeatherComponent } from './page/weather/weather.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { ContainerSearchComponent } from './shared/molecules/container-search/container-search.component';
import { FormsModule } from '@angular/forms';
import { FooterWeatherComponent } from './shared/molecules/footer-weather/footer-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsSearchComponent,
    InputSearchComponent,
    NavSearchComponent,
    ListPlacesSearchComponent,
    CardNextWeatherComponent,
    MainWeatherComponent,
    WeatherComponent,
    ContainerSearchComponent,
    FooterWeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
