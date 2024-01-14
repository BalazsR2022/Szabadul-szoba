
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  
    this.route.url.subscribe(() => {
      console.log('URL megváltozott');
    });
  }

  refreshPage() {
  
    this.router.navigateByUrl('/foglalasok', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/foglalasok']);
    });
  }
}

