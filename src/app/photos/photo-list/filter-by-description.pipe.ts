import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ 
    name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {
    
    // <app-photos [photos]="ElementoTranformado | pipeName: parametro1"></app-photos>
    // O primeiro parametro é sempre o que você quer aplicar a transformação
    // O segundo parametro é um array com todos os parametros que passados no pipe (pode ser uma variável simples quando for apenas 1 parametro)

    transform(photos: Photo[], descriptionQuery:string) {
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if (descriptionQuery) {
            return photos.filter( photo => 
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }

}