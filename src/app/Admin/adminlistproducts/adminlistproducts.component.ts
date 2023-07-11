import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AdminproductsService } from '../../services/adminproducts.service';
import { ColDef, GridReadyEvent, CellClickedEvent, RowClickedEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from 'bootstrap';
import { ImageRenderComponent } from 'src/app/GeneralComponent/image-render/image-render.component';


@Component({
  selector: 'app-adminlistproducts',
  templateUrl: './adminlistproducts.component.html',
  styleUrls: ['./adminlistproducts.component.css']
})
export class AdminlistproductsComponent implements OnInit{

  constructor(private productsService:AdminproductsService, private updateModelService:NgbModal){}
  
  columnDefs: ColDef[] = [
    { field: 'productImage',headerName: 'Product Image', cellRenderer: ImageRenderComponent},
    { field: 'productName', headerName: 'Product Name'},
    { field: 'productScreenSize', headerName: 'Screen Size'},
    { field: 'productScreenResolution', headerName: 'Screen Resolution'},
    { field: 'productPrice', headerName: 'Price'},
    { field: 'productOrigin', headerName: 'Origin'}
];

  
  rowData: any[] = [];

  ngOnInit(): void {
      this.productsService.getAllProducts().subscribe((data) =>{
          for(let item of data){
            let imgPath = item.productImage.split("\\");
            item.productImage = imgPath[2];
          }
          this.rowData = data;
      });
  }

  

  ProductForm = new FormGroup({
    productImage: new FormControl(''),
    productName: new FormControl(''),
    productScreenSize: new FormControl(''),
    productScreenResolution: new FormControl(''),
    productPrice: new FormControl(''),
    productOrigin: new FormControl('')
  })

 

  addProduct():void {
    this.productsService.addProduct(this.ProductForm.value).subscribe((result) =>{
      alert("Thêm sản phẩm thành công");
      this.ProductForm.reset();
   
    })
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular
  


  deleteProduct():void{
    if(this.agGrid.api.getSelectedRows().length != 0){
      for(let index of this.agGrid.api.getSelectedRows())
        this.productsService.deleteProduct(index.id).subscribe((result) =>{
  
        });
      alert("Xóa thành công");
      this.refreshPage();
    }
   
  }

  refreshPage():void{
    window.location.reload();
  }

 
  updateProduct(): void{
    this.productsService.updateProduct(this.agGrid.api.getSelectedRows()[0].id,this.ProductForm.value).subscribe((result) =>{
      alert("Cập nhật sản phẩm thành công");
      this.refreshPage();
    })
   
  }



  toggleUpdateProduct(): void{
    if(this.agGrid.api.getSelectedRows().length != 1){
      alert("Vui lòng chọn 1 sản phẩm");
    }else{
      const element = document.getElementById('updateProductModal') as HTMLElement;
      const myModal = new Modal(element);    
      myModal.show();
    }
  }


  

 
}
