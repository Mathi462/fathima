import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';




@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.scss']
})
export class ViewHotelComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location', 'salesContactNum', 'salesContact', 'edit','delete']
  displayHotelData: any
  dataSource: any

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public apiService: ApiService,public dialog: MatDialog,private router: Router) {
    this.getHotelDetails()
  }

  ngOnInit() {
  }

  getHotelDetails() {
    this.apiService.GetAllData('/get-update-hotel').then(displayHotelData => {
      console.log(displayHotelData)
      this.displayHotelData = displayHotelData
      this.dataSource = this.displayHotelData
      console.log(this.dataSource)
      this.dataSource = new MatTableDataSource(this.dataSource);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewDetails(value) {
    console.log(value)
  }
  editDetails(value) {
    console.log(value)
    localStorage.setItem('passing_id', value);
    this.router.navigateByUrl('/edit-hotel');
  }

  deleteDetails(value){
      console.log(value)
      this.apiService.deleteData('/delete-update-hotel/'+value).then(deleteDisplay => {
        console.log(deleteDisplay)
        this.getHotelDetails()
      })
  }
  

}





