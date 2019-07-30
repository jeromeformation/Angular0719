import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {

  /**
   * Le produit envoyé par le parent
   */
  @Input() product: Product;

  /**
   * Evénement de vote à diffuser au parent
   */
  @Output() voted: EventEmitter<number>;

  constructor() {
    this.voted = new EventEmitter<number>();
  }

  public handleVote(note: number) {
    console.log('[show] Nouveau vote : ' + note);
    // Emission de l'événement "voted"
    this.voted.emit(note);
  }

  ngOnInit() {
  }
}
