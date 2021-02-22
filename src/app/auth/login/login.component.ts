import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MatSnackBar]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  })

  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const credentials = this.loginForm.value;
    this.loading = true;
    this.authService.login(credentials)
      .subscribe(
        user => {
          console.log(user);
          this.snackBar.open(
            'Logado com sucesso. Bem vindo ' + user.firstname + '!', 'Ok', {duration: 2000}
          );
          this.router.navigateByUrl('/main/dash');
          this.loading = false;
        },
        err => {
          console.log(err);
          this.snackBar.open(
            'Erro ao logar', 'Ok', {duration: 2000});
            this.loading = false;
        }
      )
  }

}
