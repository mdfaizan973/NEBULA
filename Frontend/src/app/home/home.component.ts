import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //-----
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  page = 1;
  loading: boolean = false;

  next() {
    this.loading = true;
    this.page++;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }
  prev() {
    this.loading = true;
    if (this.page > 0) {
      this.page--;
      this.http
        .get<any[]>(
          `https://hotelsapis.onrender.com/placesStore?_limit=16&_page=${this.page}`
        )
        .subscribe((response) => {
          this.products = response;
          // console.log(response);
          this.loading = false;
        });
    }
  }

  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true; // Set loading to true before making the HTTP request
    this.http
      .get<any[]>(
        'https://hotelsapis.onrender.com/placesStore?_limit=16&_page=1'
      )
      .subscribe(
        (response) => {
          this.products = response;
          this.loading = false; // Set loading to false when the request is complete
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.loading = false; // Set loading to false on error as well
        }
      );
  }
}
