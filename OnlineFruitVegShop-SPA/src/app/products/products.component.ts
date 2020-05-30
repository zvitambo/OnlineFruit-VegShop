import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { CartService } from '../_services/cart.service';
import { ProductService } from '../_services/product.service';
import { Product } from '../_models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  createNewProduct: any = false;
   products: any;
   selectedFile: File = null;
  product: Product;
  editableTempProduct: Product;

  constructor(public auth: AuthService, private alertify: AlertifyService,
     public cartservice: CartService, public productservice:  ProductService) { }

  ngOnInit() {
     this.productservice.getProducts().subscribe((products: any) => {
       this.products = products;
     });
  }
  OnFileChange(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  CreateNewProduct() {
    this.product = this.productservice.product;
    this.createNewProduct = true;
  }

  SaveProduct() {

    if (this.product.productId === 0 ) {

      this.productservice.product = this.product;
      const fd = new FormData();
      fd.append('image', this.selectedFile, this.product.productId.toString());

     this.productservice.UploadfFile(fd).subscribe((photoUrl: string) => {
      this.product.photoUrl = photoUrl;
     });
     this.productservice.saveProduct().subscribe((product: any) => {
     this.product = product;
     this.productservice.products.push(this.product);
     this.products = this.productservice.products;
      });
      this.createNewProduct = false;
    }

    this.createNewProduct = false;
  }

  removeProduct(product) {
    const index = this.productservice.products.indexOf(product.productId , 0);
    this.productservice.products.splice(index, 1);
    this.products = this.productservice.products;
  }
  EditProduct(product) {
    this.createNewProduct = true;
    this.editableTempProduct = product;
    this.product = product;
  }

}
