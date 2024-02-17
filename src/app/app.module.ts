import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { StockPipe } from './pipes/stock.pipe';
import { WeekPipe } from './pipes/week.pipe';
import { NewlineToBrPipe } from './pipes/newline-to-br.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './components/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component'
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';
import { LoginModule } from './login/login.module';
import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat';
import { JobComponent } from './pages/job/job.component';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobEditComponent } from './pages/job-edit/job-edit.component';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    StockPipe,
    WeekPipe,
    NewlineToBrPipe,
    RatingComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductDetailComponent,
    HighlightDirective,
    UnlessDirective,
    AddProductComponent,
    FancyButtonComponent,
    JobComponent,
    AddJobComponent,
    JobDetailComponent,
    JobCardComponent,
    JobEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    GalleryModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
