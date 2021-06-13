import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  title = 'Register for stuff';
  formGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: '',
      email: '',
      terms: false
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(formData: { [x: string]: any; }) {
    var name = formData['name'];
  }
}
