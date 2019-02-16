import {Component, OnInit} from '@angular/core';
import {GotService} from '../got.service';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss'],
    providers: [GotService]
})
export class ListPage implements OnInit {
    public originalCharacters = [];
    public characters = [];

    public constructor (private got: GotService, private loadingCtrl: LoadingController) {
        this.load();
    }

    private async load () {
        const  loading = await this.loadingCtrl.create();
        await loading.present();
        this.got.listsAllCharacters()
            .then((characters: any) => {
                this.originalCharacters = this.characters = characters;
                loading.dismiss();
            })
            .catch(() => loading.dismiss());
    }

    ngOnInit () {

    }


    public onChange(x: any) {
        this.characters = this.originalCharacters.filter( c => c.name.includes(event.detail.value));
    }
}
