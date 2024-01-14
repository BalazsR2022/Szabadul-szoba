
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foglalas',
  templateUrl: './foglalas.component.html',
  styleUrls: ['./foglalas.component.css']
})
export class FoglalasComponent {
  foglalas: Foglalas = {
    id: '', 
    cim: '',
    datum: new Date().toISOString().split('T')[0], 
    fo: '',
    iranyitoszam: '',
    nev: ''
  };

  constructor(private router: Router, private http: HttpClient) {
    this.foglalas.datum = new Date().toString().split('T')[0];
  }

  ngOnInit() {
    this.foglalas.datum = new Date().toString().split('T')[0];
    console.log(this.foglalas)
  }

  submitForm() {
    
    this.http.post('http://localhost:3000/foglalasok', this.foglalas)
      .subscribe(response => {
        
        this.router.navigate(['/foglalasok']);
      }, error => {
        
        console.error('Hiba történt a kérés során:', error);
      });
  }
}

export interface Foglalas {
  id: string;
  cim: string;
  datum: string;
  fo: string;
  iranyitoszam: string;
  nev: string;
}

