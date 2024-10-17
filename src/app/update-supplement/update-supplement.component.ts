import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SupplementService } from '../services/supplement.service';
import { Supplement } from '../model/supplement.model';
import { Nutritional } from '../model/nutritional.model';


@Component({
  selector: 'app-update-supplement',
  templateUrl: './update-supplement.component.html',
  styleUrl: './update-supplement.component.css',
  styles: []
})
export class UpdateSupplementComponent implements OnInit {
  nutritionals! : Nutritional[];
updatedNutId! : number;


currentSupplement = new Supplement();
constructor(private activatedRoute: ActivatedRoute,
  private router :Router,
  private supplementService: SupplementService) { }
ngOnInit() {

  this.currentSupplement =
  this.supplementService.consulterSupplement(this.activatedRoute.snapshot.params['id']);
  this.nutritionals = this.supplementService.listeNutritionals();
  this.updatedNutId=this.currentSupplement.nutritional.idNut;
} 
updateSupplement() {
  this.supplementService.updateSupplement(this.currentSupplement);
  this.currentSupplement.nutritional=this.supplementService.consulterNutritional(this.updatedNutId);
  this.router.navigate(['supplements']);
  }
}

