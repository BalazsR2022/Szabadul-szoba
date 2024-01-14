

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
url="http://localhost:3000/foglalasok"
private foglalas = new Subject()
  constructor(private http:HttpClient) { 
    this.loadFoglalas()
  }

  loadFoglalas(){
    this.http.get(this.url).subscribe(
      (res)=>this.foglalas.next(res)
    )

  }

  getFoglalasok(){
    return this.foglalas
  }

  postFoglalas(book:any){
    this.http.post(this.url,book).subscribe(
      {
        next:()=>this.loadFoglalas(),
        error:(err)=>console.log("Hiba a foglalásnál: ",err)
      }
    )
  }
  }


