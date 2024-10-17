import { Component, OnInit } from '@angular/core';
import { Nutritional } from '../model/nutritional.model';
import { Supplement } from '../model/supplement.model';
import { SupplementService } from '../services/supplement.service';

@Component({
  selector: 'app-recherche-par-nutritional',
  templateUrl: './recherche-par-nutritional.component.html',
})
export class RechercheParNutritionalComponent implements OnInit {
  supplements: Supplement[] = [];
  nutritionals: Nutritional[] = [];
  
  // Declare the variable to store selected nutritional ID
  IdNutritional: number | undefined;

  constructor(private supplementService: SupplementService) {}

  ngOnInit(): void {
    this.nutritionals = this.supplementService.listeNutritionals();
    this.supplements = this.supplementService.listeSupplements();
  }

  // This function is called when the nutritional selection changes
  onChange() {
    if (this.IdNutritional !== undefined) {
      this.supplements = this.supplementService.rechercherParNutritional(this.IdNutritional);
    }
  }

  // Function to delete a supplement
  supprimerSupplement(s: Supplement) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.supplementService.supprimerSupplement(s);
    }
  }
}
