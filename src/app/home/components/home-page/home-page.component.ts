/// <reference types="@types/googlemaps" />
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  RoundTripForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    departDate: new FormControl(''),
    returnDate: new FormControl('')
  });

  @ViewChild('search', { static: false }) public searchElement: ElementRef;

  constructor(
    tabsetConfig: NgbTabsetConfig,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    // customize default values of tabsets used by this component tree
    tabsetConfig.justify = 'center';
    tabsetConfig.type = 'pills';
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElement.nativeElement,
        { types: [], componentRestrictions: { country: 'IN' } }
      );

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

  BookRoundTrip() {
    console.log('Submit clicked');
  }
}
