import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bookshow',
  templateUrl: './bookshow.component.html',
  styleUrls: ['./bookshow.component.css']
})
export class BookshowComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrders;


  constructor(private http : HttpClient) {

    this.columnDefs=[
      {
        headerName :"Name",
        field : "title",
        width : 200,
        sortingOrders :["asc","desc"]
      },
      {
        headerName : "ISBN",
        field: "isbn",
        width : 100
      },
      {
        headerName : "Page",
        field: "pageCount",
        width : 100,
        sortingOrders : ["desc","asc"]
      },
      {
        headerName : "Publish Date",
        field: "publishedDate",
        width : 100
      },
      {
        headerName : "Thumbnail",
        field: "thumbnailUrl",
        width : 100
      },
      {
        headerName : "Short Desc.",
        field: "shortDescription",
        width : 150
      },
      {
        headerName : "Long Desc.",
        field: "longDescription",
        width : 150
      },
      {
        headerName : "Status",
        field: "status",
        width : 100
      },
      {
        headerName : "Author",
        field: "authors",
        width : 100
      },
      {
        headerName : "Catagory",
        field: "categories",
        width : 100
      }
    ];
    this.sortingOrders=["desc","asc",null];
   }



  ngOnInit() {
  }

  onGridReady(params):any{

    this.gridApi= params.api;
    this.gridColumnApi = params.columnApi;
   // let dataValue = [{"firstName":"xyz","AuthName":"lkj"}]
    this.http.get("https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json")
    .subscribe(data=>{
      params.api.setRowData(data);

    })
    //https://github.com/bvaughn/infinite-list-reflow-examples/blob/master/books.json
    //https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json
    
    
  }

}
