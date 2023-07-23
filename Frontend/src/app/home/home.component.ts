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

  // ----
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

  // -----------filter
  londonfilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=london&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  russiafilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=russia&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  australiafilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=australia&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  newyorkfilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=newyork&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  usausfilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=usa us&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  indiafilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=india&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  francefilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=france&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -----------filter
  spainfilter() {
    this.page = 1;
    this.http
      .get<any[]>(
        `https://hotelsapis.onrender.com/placesStore?location=spain&_limit=16&_page=${this.page}`
      )
      .subscribe((response) => {
        this.products = response;
        // console.log(response);
        this.loading = false;
      });
  }

  // -sorting--------------------

  low_to_high() {
    this.products.sort((a, b) => {
      return a.price - b.price;
    });
  }
  high_to_low() {
    this.products.sort((a, b) => {
      return b.price - a.price;
    });
  }
}
