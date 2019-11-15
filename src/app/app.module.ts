import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { NotesService } from 'src/app/notes.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
