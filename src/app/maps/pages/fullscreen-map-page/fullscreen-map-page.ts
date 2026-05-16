import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { Card } from 'primeng/card';
import { SliderModule } from 'primeng/slider';
import mapboxgl from 'mapbox-gl';
import { environment } from '@environments/environment';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, JsonPipe } from '@angular/common';
mapboxgl.accessToken = environment.mapboxApiKey;
@Component({
  selector: 'app-fullscreen-map-page',
  imports: [Card, SliderModule, FormsModule, DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.html',
  styleUrl: './fullscreen-map-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FullscreenMapPage implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<mapboxgl.Map | null>(null);
  zoom = signal<number>(14);
  coordinates = signal({
    lng: -63.1820853,
    lat: -17.7834936,
  });

  zoomEffect = effect(() => {
    this.map()?.setZoom(this.zoom());
  });

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) {
      return;
    }
    const element = this.divElement()!.nativeElement;
    // console.log(element);
    const { lng, lat } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element, // container ID
      // center: [-63.1820853, -17.7834936], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      center: [lng, lat], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: this.zoom(), // starting zoom
    });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {
    map
      .on('zoomend', (event) => {
        // this.zoom.set(map.getZoom());
        const newZoom = event.target.getZoom();
        // console.log('new zoom', newZoom);
        this.zoom.set(newZoom);
      })
      .on('moveend', () => {
        // console.log('map moved');
        const center = map.getCenter();
        this.coordinates.set(center);
      })
      .on('load', () => {
        console.log('map loaded');
      });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());
    this.map.set(map);
  }
}
