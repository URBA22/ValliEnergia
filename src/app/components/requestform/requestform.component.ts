import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormrequestService } from '../../services/formrequest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-requestform',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './requestform.component.html',
  styleUrl: './requestform.component.css'
})
export class RequestformComponent {
  constructor(private formSrv : FormrequestService){}

  tmpForm = {
    zona: 'Agno',
    dataOra: Date,
    oaUrl: '',
    messaggio: '',
  }

  async onSubmit(form: NgForm){
    if(form.valid){
      this.formSrv.submitForm(this.tmpForm).subscribe(
        res => {
          alert(res);
        },
        error => {
          alert("Errore nell'invio della richiesta: " + error);
        }
      );
      setTimeout(() => {
        form.resetForm();
      }, 2000);
    }
  }
}
