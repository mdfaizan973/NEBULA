import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hostdetails',
  templateUrl: './hostdetails.component.html',
  styleUrls: ['./hostdetails.component.css'],
})
export class HostdetailsComponent implements OnInit {
  dataItem: any;
  api = 'http://127.0.0.1:5000/hosts';
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.fetchDataItem(id);
    });
  }

  fetchDataItem(id: string) {
    this.loading = true;
    const url = `${this.api}/${id}`;
    this.http.get(url).subscribe((response) => {
      this.dataItem = response;
      this.loading = false;
      console.log(response);
    });
  }
}
// HostdetailsComponent
// api = 'http://127.0.0.1:5000/hosts';
