import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente.model';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public token: String;
  public cliente: Cliente;
  public errorMessage:string;

  constructor(private fb: FormBuilder, 
              private router: Router,
              private storage: StorageService,
              private clienteService: ClienteService) { 
              }



  ngOnInit() {

    this.loginForm = this.fb.group({
      'dni': ['', Validators.compose([
        Validators.required
      ])],
      'password': ['', Validators.compose([
        Validators.required
      ])]
    });

  }
  get f() { return this.loginForm.controls; }

  async login (){
    this.clienteService.login(this.f.dni.value, this.f.password.value)
          .subscribe(token => {
            this.token = token;          
            this.storage.set('token', this.token);
          /// En caso correcto se recupera el cliente registrado
            this.clienteService.getClientePorDNI (token).subscribe 
              (
                
                (cliente:Cliente) => {
                  this.cliente = cliente; 
                  this.storage.set('cliente', this.cliente);
                  console.log(this.cliente);
                }
              );
          },
          (error) => {
                this.errorMessage = "DNI o password incorrectos";
                throw error;
          }
          );
          
      
    }
}

