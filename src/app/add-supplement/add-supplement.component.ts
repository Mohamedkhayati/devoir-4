import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';
import { Nutritional } from '../model/nutritional.model';


@Component({
  selector: 'app-add-supplement',
  templateUrl: './add-supplement.component.html',
  
})
export class AddSupplementComponent implements OnInit {
  [x: string]: any;
  newSupplement = new Supplement();
  nutritionals! : Nutritional[];
newIdNut! : number;
newNutritional! : Nutritional;


  constructor(private supplementService: SupplementService,
    private router :Router) { }  
    
    ngOnInit(): void {
    this.nutritionals = this.supplementService.listeNutritionals();

    
  }
  addSupplement(){
    this.newNutritional =
    this.supplementService.consulterNutritional(this.newIdNut);
    this.newSupplement.nutritional = this.newNutritional;
    this.supplementService.ajouterSupplement(this.newSupplement);
    this.router.navigate(['supplements']);
    
    
    }
}
