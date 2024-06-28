import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormrequestService } from '../../services/formrequest.service';

@Component({
  selector: 'app-requestform',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './requestform.component.html',
  styleUrl: './requestform.component.css'
})
export class RequestformComponent {
  constructor(private formSrv : FormrequestService){}

  tmpForm = {
    zona: 'AGN',
    oaUrl: '',
    messaggio: ''
  }

  onSubmit(form: any){
    if(form.valid){
      this.formSrv.submitForm(this.tmpForm);
    }
    else{
      alert("Form is invalid");
    }
  }
}
