import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  id : string;

  cliente : Cliente = new Cliente();

  constructor(db: AngularFirestore, private actRout : ActivatedRoute) {
    this.id = this.actRout.snapshot.paramMap.get('id');
    db.collection('cliente').doc(this.id).get().subscribe(doc=>{
      this.cliente.setCliente(doc.data(),this.id);
    });

  }

  ngOnInit() {
  }

}
