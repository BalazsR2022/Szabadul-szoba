
import { Component, OnInit } from "@angular/core";
import { BaseService } from "../base.service";
import { Foglalas } from "../foglalas/foglalas.component";

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css'] 
})
export class FoglalasokComponent implements OnInit {
  foglalasok: Foglalas[] = [];

  constructor(private base: BaseService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.base.getFoglalasok().subscribe({
      next: (data: Foglalas[] | unknown) => {
        if (Array.isArray(data)) {
          this.foglalasok = data.sort((a, b) => {
            const dateA = new Date(a.datum).getTime();
            const dateB = new Date(b.datum).getTime();
            return dateA - dateB;
          });
        } else {
          console.error('Hiba: Érvénytelen adatok');
        }
      },
      error: (err) => {
        console.error('Hiba:', err);
      },
      complete: () => {
        console.log('Betöltés kész.');
      }
    });
  }
}


