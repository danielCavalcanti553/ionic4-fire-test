import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Observable<any[]>;
  listaCliente : Cliente[] = [];

  constructor(db: AngularFirestore, private router : Router) {
    db.collection('cliente').get().subscribe(response=>{
      response.forEach(doc=>{
        let c = new Cliente();
        c.setCliente(doc.data(),doc.id);
        this.listaCliente.push(c);
      })
    });
    
  }

  goPage(idValue : string){
    this.router.navigate(['home-detail',{id : idValue}]);
  }

}
