import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { ISession } from './entity/Session';
import { FilmService } from './film.sevice';
import { IFilm } from './entity/Film';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'angular-kpz-yaroslav';
  sessions: ISession[] = [];
  films: IFilm[] = [];
  sessionName: string = '';
  activeTable: string | null = null;

  constructor(private appService: AppService, private filmService: FilmService) {}


  onButtonClick(method: string) {
    if (method === 'GET_Session') {
      this.appService.getSession().subscribe(
        (data) => {
          this.sessions = data;
          this.activeTable = 'session';
        },
        (error) => {
          console.error('Error fetching sessions:', error);
        }
      );
    }
      if (method === 'GET_Film') {
        this.filmService.getFilm().subscribe(
          (data) => {
            this.films = data;
            this.activeTable = 'film';
          },
          (error) => {
            console.error('Error fetching films:', error);
          }
        );
      }
   }
   isTableActive(tableType: string): boolean {
    return this.activeTable === tableType;
  }
}
