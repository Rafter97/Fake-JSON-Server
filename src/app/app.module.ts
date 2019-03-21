import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire';

import { HttpClientModule } from '@angular/common/http';
import { environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarlistComponent,
    CarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
