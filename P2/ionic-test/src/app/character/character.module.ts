import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CharacterPage } from './character.page';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: CharacterPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CharacterPage]
})
export class CharacterPageModule {}
