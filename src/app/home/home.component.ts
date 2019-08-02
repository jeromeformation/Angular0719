import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /**
   * Définition d'une propriété URL
   */
  public url: string;

  /**
   * Définition d'un booléen pour savoir si l'utilisateur est un admin
   */
  public isAdmin: boolean;

  /**
   * Définition des classes CSS à appliquer
   */
  public classesCss: object;

  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
    this.changeCssClasses();
  }

  private changeCssClasses() {
    this.classesCss = {
      'blue-bg': this.isAdmin,
      'teal-text': !this.isAdmin
    };
  }

  public changeAdmin() {
    this.isAdmin = !this.isAdmin;
    this.changeCssClasses();
  }
}
