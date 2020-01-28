///<reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
//import {} from '@types/googlemaps';
@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
}]
})
export class ServiceListComponent implements OnInit {


  @ViewChild('gmap',{ static: true }) gmapElement: any;
  map: google.maps.Map;
  marker:google.maps.Marker;
  	isLinear = false;
	firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
    });
    
    
    var mapProp = {
      center: new google.maps.LatLng(24.774265, 46.738586),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: 59.327, lng: 18.067}
    });
   // this.marker.addListener('click', this.toggleBounce);

    google.maps.event.addListener(this.map, 'click', function(event) {
      //this.addMarker(event.latLng, this.map);
      let marker = new google.maps.Marker({
        position: event.latLng,
       // label: labels[labelIndex++ % labels.length],
        map: this.map
      });
    });
  this.addMarker(new google.maps.LatLng(24.774265, 46.738586),this.map);
  }


  // Adds a marker to the map.
 addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
   // label: labels[labelIndex++ % labels.length],
    map: map
  });
}

}
