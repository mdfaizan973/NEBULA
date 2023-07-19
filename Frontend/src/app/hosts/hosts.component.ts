import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css'],
})
export class HostsComponent {
  name: string = '';
  about: string = '';
  hostingTime: string = '';
  propertyType: string = '';
  location: string = '';
  status!: boolean;

  constructor(private http: HttpClient) {}

  submitForm() {
    const data = {
      name: this.name,
      about: this.about,
      hostingTime: this.hostingTime,
      propertyType: this.propertyType,
      location: this.location,
      status: this.status ? 'Active' : 'Inactive',
    };

    this.http.post('http://localhost:5000/host', data).subscribe(
      (response) => {
        console.log('Host request successful!', response);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
