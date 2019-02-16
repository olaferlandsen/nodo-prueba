import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GotService} from '../services/got.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public ready = false;
  public dataSource = new MatTableDataSource<any>([]);




  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input()
  public columns: any[] = [
    { name: 'Nombre', property: 'name', visible: true },
    { name: 'Casa', property: 'house', visible: true },
    { name: 'Opciones', property: 'options', visible: true, isModelProperty: false },
  ];

  constructor (private got: GotService) {
  }

  get visibleColumns() {
    return this.columns
      .filter(c => c.visible)
      .map(c => c.property);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.got.listsAllCharacters().then((data: any) => {
      this.dataSource.data = data;
      this.ready = true;
    });

  }
}
