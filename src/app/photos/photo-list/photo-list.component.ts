import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos:Photo[] = []

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute // representa a rota ativa no momento atual
  ) {}
  
  ngOnInit(): void {   
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName)
      .subscribe(
        photos => {
          console.log(photos[0].url);
          return this.photos = photos
        },        
        err => console.log(err.messag) 
      );  
  }
}
