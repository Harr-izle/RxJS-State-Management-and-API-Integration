import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] 
})
export class ProductsComponent {

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getProducts().subscribe((data) => {
      console.log(data);
    })
  }
    
}
