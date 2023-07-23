import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
export class PropertyComponent {
  // ----
  property: any[] = [];
  page = 1;
  loading: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    this.http.get<any[]>('http://127.0.0.1:5000/hosts').subscribe(
      (response) => {
        this.property = response;
        // console.log(response);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  next() {
    this.page++;
  }
  prev() {
    if (this.page > 1) {
      this.page--;
    }
  }
}
