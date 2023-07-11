import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-render',
  template: `<img style="width: 50px;height: 100%" src="../../../assets/img/{{value}}">`,
  styleUrls: ['./image-render.component.css']
})
export class ImageRenderComponent implements OnInit, ICellRendererAngularComp {
  
  value: any;
  
  ngOnInit(): void {
    
  }
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

}
