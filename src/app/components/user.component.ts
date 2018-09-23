import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
             <p>E-mail: {{email}}<p>
             <p><strong>Adress: {{address.street}}, {{address.number}}, {{address.city}}, {{address.state}}<strong><p>`,
})
export class UserComponent {

  name: string;
  email: string;
  address:address;
  
constructor(){

    console.log();
    this.name = 'Rejes!';
    this.email = 'raphael.rejes@gmail.com'
    this.address = {

        street: 'avenida paulista!',
        number: 123,
        city: 'São paulo',
        state: 'SP',
}
}}
interface address{

 street: string;
 city: string;
 number: number;
 state: string;

}