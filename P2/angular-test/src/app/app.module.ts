import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import {
  MatButtonModule,
  MatCommonModule,
  MatInputModule, MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatSidenavModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatCommonModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot([
        { path: 'list', component: ListComponent },
        { path: 'character/:id', component: CharacterComponent },
        { path: '',
          redirectTo: '/list',
          pathMatch: 'full'
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
