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
    oaUrl: '',
    messaggio: ''
  }

  async onSubmit(form: NgForm){
    if(form.valid){
      await this.formSrv.submitForm(this.tmpForm);
      setTimeout(() => {
        form.resetForm();
      }, 2000);
    }
  }
}
