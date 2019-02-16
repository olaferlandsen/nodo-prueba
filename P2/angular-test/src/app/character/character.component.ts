import { Component, OnInit } from '@angular/core';
import {GotService} from '../services/got.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public ready = false;
  public character;
  constructor (private got: GotService, private activeRouter: ActivatedRoute) {

    this.got.getACharacter(this.activeRouter.snapshot.params.id)
      .then((character: any) => {
        this.character = character.data;
        this.ready = true;
      });
  }

  ngOnInit() {


  }

}
