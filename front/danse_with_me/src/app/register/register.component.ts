import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register!: string;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(8), Validators.maxLength(15),
        ],
      ],
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(8), Validators.maxLength(15),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$'
          ),
        ],
      ],
    });
  }
}
