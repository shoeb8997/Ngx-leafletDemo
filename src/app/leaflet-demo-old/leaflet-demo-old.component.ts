import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as L from "leaflet";

@Component({
  selector: 'app-leaflet-demo-old',
  templateUrl: './leaflet-demo-old.component.html',
  styleUrls: ['./leaflet-demo-old.component.scss']
})
export class LeafletDemoOldComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private http: HttpClient) {

  }
  json: any;
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: L.latLng(47.482019, -1)
  };

  geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  onMapReady(map: L.Map) {
    var smallIcon = new L.Icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      shadowSize:  [41, 41]
    });


    this.http.get('assets/markersData.json').subscribe((json: any) => {
      L.geoJSON(json, {
            pointToLayer: function (feature, latlng) {
              //return L.circleMarker(latlng);
              return L.marker(latlng, {
                icon: smallIcon
              });
            }
          }).addTo(map);
    });

    // this.http.get('assets/markersData.json').subscribe((json: any) => {
    //   L.geoJSON(json, {
    //     pointToLayer: function (feature, latlng) {
    //       return L.circleMarker(latlng, geojsonMarkerOptions);
    //     }
    //   }).addTo(map);
    // });

   

}
}
