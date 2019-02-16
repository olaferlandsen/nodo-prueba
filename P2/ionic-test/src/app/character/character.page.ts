import { Component, OnInit } from '@angular/core';
import {GotService} from '../got.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-character',
    templateUrl: './character.page.html',
    styleUrls: ['./character.page.scss'],
    providers: [GotService]
})
export class CharacterPage implements OnInit {
    public character;
    constructor(private got: GotService, private activatedRoute: ActivatedRoute, private loadingCtrl: LoadingController) {
        this.load();
    }

    public async load () {
        const loading = await this.loadingCtrl.create();
        await loading.present();
        this.got.getACharacter(this.activatedRoute.snapshot.params.id)
            .then(async (character: any) => {
                this.character = character.data;
                await loading.dismiss();
            }).catch(async () => await loading.dismiss());
    }

    ngOnInit() {

    }

}
