import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/MyServices/product-service.service';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  productId:number=0;
  products:any=
  {
    
  };
  
  constructor(private productService:ProductServiceService){}
  ngOnInit(): void {
      this.productService.getProducts().subscribe(response=>
        {
         console.log(response);
         this.products=response;
        },
        error=>
        {

        });
  }
  
  firebaseConfig = {
    apiKey: "AIzaSyDKczjoS_qmuWtjDOQOCIN8bjYTw-GbEl0",
    authDomain: "kitchenstory-39828.firebaseapp.com",
    projectId: "kitchenstory-39828",
    storageBucket: "kitchenstory-39828.appspot.com",
    messagingSenderId: "818537684504",
    appId: "1:818537684504:web:0c08d2899f13f916236d6d",
    measurementId: "G-7QHEMG3VBT"
  };
  
    // Initialize Firebase
    app = initializeApp(this.firebaseConfig);
    analytics = getAnalytics(this.app);
  
    async onFileSelected(event: any,id:any) {
      console.log("Inside onFileSelcted");
      this.productId=id;
      const file: File = event.target.files[0];
      await this.saveImage(file);
    }
  
    async saveImage(file: File) {
      console.log("Inside saveImage");
      const storageRef = getStorage(this.app);
      const imagesRef = ref(storageRef, 'images/' + file.name);
      await uploadBytes(imagesRef, file);
      const url = await getDownloadURL(imagesRef);
      this.productService.addImageUrl(url,this.productId).subscribe(response=>
        {
           
        },
        error=>
        {
        }
        );
      console.log('Image URL:', url);
    }
}
