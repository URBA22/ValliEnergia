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
/*
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.tmpForm.img = input.files[0];
    }
  }
*/
  onSubmit(form: NgForm){
    if(form.valid){
      const formData = new FormData();
      formData.append('zona', this.tmpForm.zona);
      formData.append('oaUrl', this.tmpForm.oaUrl);
      formData.append('messaggio', this.tmpForm.messaggio);
      this.formSrv.submitForm(formData);
    }
    else{
      alert("Form is invalid");
    }
  }
}
