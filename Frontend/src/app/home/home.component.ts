import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //-----
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  page = 1;

  next() {
    this.page++;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?_limit=20&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
      });
  }
  prev() {
    if (this.page > 0) {
      this.page--;
      this.http
        .get<any[]>(
          `https://hotelsapis.onrender.com/placesStore?_limit=20&_page=${this.page}`
        )
        .subscribe((response) => {
          this.products = response;
          // console.log(response);
        });
    }
  }
  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get<any[]>(
        'https://hotelsapis.onrender.com/placesStore?_limit=20&_page=1'
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
      });
  }
}
