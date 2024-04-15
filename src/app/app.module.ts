import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfUploadsComponent } from './pdf-uploads/pdf-uploads.component';
import { PdfDisplaysComponent } from './pdf-displays/pdf-displays.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PdfUploadsComponent,
    PdfDisplaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    HttpClientModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
