import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    
  cliente: Cliente = null;
  

  constructor(private storage: StorageService, private router: Router) {

  }

  ngOnInit(){
     
       
  }

}
