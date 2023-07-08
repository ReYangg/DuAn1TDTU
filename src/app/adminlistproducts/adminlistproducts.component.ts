import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminproductsService } from '../services/adminproducts.service';
import { ColDef, GridReadyEvent, CellClickedEvent, RowClickedEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-adminlistproducts',
  templateUrl: './adminlistproducts.component.html',
  styleUrls: ['./adminlistproducts.component.css']
})
export class AdminlistproductsComponent implements OnInit{
  constructor(private productsService:AdminproductsService){}



  columnDefs: ColDef[] = [
    { field: 'productName', headerName: 'Product Name' },
    { field: 'productScreenSize', headerName: 'Screen Size' },
    { field: 'productScreenResolution', headerName: 'Screen Resolution' },
    { field: 'productPrice', headerName: 'Price'},
    { field: 'productOrigin', headerName: 'Origin'},
];

  rowData: any[] = [];

  ngOnInit(): void {
      this.productsService.getAllProducts().subscribe((data) =>{
          this.rowData = data;
      });
  }

  addProductForm = new FormGroup({
    productName: new FormControl(''),
    productScreenSize: new FormControl(''),
    productScreenResolution: new FormControl(''),
    productPrice: new FormControl(''),
    productOrigin: new FormControl('')
  })

  addProduct():void {
    this.productsService.addProduct(this.addProductForm.value).subscribe((result) =>{
      alert("Thêm sản phẩm thành công");
      this.addProductForm.reset();
    })
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular

  deleteProduct():void{
    if(this.agGrid.api.getSelectedRows().length != 0){
      for(let index of this.agGrid.api.getSelectedRows())
        this.productsService.deleteProduct(index.id).subscribe((result) =>{
  
        });
      alert("Xóa thành công");
      window.location.reload();
    }
   
  }

  refreshPage():void{
    window.location.reload();
  }

 
}
