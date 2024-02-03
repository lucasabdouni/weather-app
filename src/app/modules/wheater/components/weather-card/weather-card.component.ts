import { Component, Input } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent {
  @Input() weatherDatas!: WeatherDatas;
}
