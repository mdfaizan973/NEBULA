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
    this.http.get<any[]>(`http://127.0.0.1:5000/hosts`).subscribe(
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

  // deleteitem(id: number) {
  //   const index = this.property.findIndex((item) => item.id === id);
  //   if (index !== -1) {
  //     // Remove the item from the dataItems array
  //     this.property.splice(index, 1);
  //     console.log('Data deleted successfully.');
  //   }
  // }

  deleteitem(id: number) {
    const index = this.property.findIndex((item) => item.id === id);
    if (index !== -1) {
      // Remove the item from the property array
      this.property.splice(index, 1);

      const apiUrl = `http://127.0.0.1:5000/delete-host/${id}`;
      this.http.delete(apiUrl).subscribe(
        () => {
          console.log('Data deleted successfully.');
        },
        (error) => {
          console.error('Error deleting data:', error);
          // Handle error scenarios if needed.
        }
      );
    }
  }
  // deleteing-----------------------------------/delete-host/<host_id>
}
