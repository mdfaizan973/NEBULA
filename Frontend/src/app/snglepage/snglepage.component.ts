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

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.fetchDataItem(id);
    });
  }

  fetchDataItem(id: string) {
    const url = `${this.api}/${id}`;

    this.http.get(url).subscribe((response) => {
      this.dataItem = response;
      console.log(response);
    });
  }
}
