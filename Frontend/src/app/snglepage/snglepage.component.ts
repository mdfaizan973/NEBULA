import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-snglepage',
  templateUrl: './snglepage.component.html',
  styleUrls: ['./snglepage.component.css'],
})
export class SnglepageComponent implements OnInit {
  dataItem: any;
  api = 'https://hotelsapis.onrender.com/placesStore';
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
