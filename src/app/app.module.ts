import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlowComponent } from './flow/flow.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
