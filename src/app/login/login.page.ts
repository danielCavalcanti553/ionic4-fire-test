import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuardService } from 'src/services/authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string;
  senha : string;
  
  constructor(public afAuth: AngularFireAuth,private actGuar : AuthGuardService) { }

  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(
      this.email,this.senha).then(()=>{
        this.actGuar.canActivate(true);
      }).catch(err=>{
        console.log("Erro: "+err.code);
      })
  }

  cadastrar(){
    
  }

}
