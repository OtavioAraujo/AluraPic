import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  // ngOnChanges recebe as possíveis mudanças das inbound-properties do componente
  // Se a inbound-propertie photos foi alterada, então changes.photos existirá, caso contrário changes.photos não existirá
  ngOnChanges(changes: SimpleChanges) { 
    if(changes.photos )
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];
    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index+3))
    }
    return newRows;
  }
}
