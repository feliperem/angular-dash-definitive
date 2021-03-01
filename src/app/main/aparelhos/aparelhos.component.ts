import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Aparelhos } from '../aparelhos';
import { Comodo } from '../comodo';
import { MainService } from '../main.service';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css'],
  providers: [MatSnackBar]
})
export class AparelhosComponent implements OnInit {

  comName: string = '';
  id_user: string = '';
  com_Id ?: string = '';
  comodos: Comodo[] = [];
  comEdit: boolean = false;

  private unsubscribe$: Subject<any> = new Subject();
  private unsubscribe2$: Subject<any> = new Subject();

  aparelhoForm: FormGroup = this.fb.group({
    _id: [null],
    name: ['', [Validators.required]],
    movel: ['', [Validators.required]],
    comodo: [[], [Validators.required]],
    assinatura: [0],
    id_user: localStorage.getItem('id_user'),
  });


  aparelhos: Aparelhos[] = [];
  comodos_list: Comodo[] = [];

  constructor(private mainService: MainService, private snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.mainService.getComodos()
      .pipe( takeUntil(this.unsubscribe$))
      .subscribe((coms) => this.comodos = coms);

    this.mainService.getAparelhos()
      .pipe(takeUntil(this.unsubscribe2$))
      .subscribe((apars) => this.aparelhos = apars);
    this.mainService.getComodos()
      .pipe(takeUntil(this.unsubscribe2$))
      .subscribe((coms) => this.comodos_list = coms);
  }

  save(){
    if(this.comEdit){
      const id_user = localStorage.getItem('id_user');
      this.mainService.updateComodo({name: this.comName, _id: this.com_Id, id_user: id_user!})
      .subscribe(
        (com) => {
          this.notify('Atualizado!');
        },
        (err) => {
        this.notify('Erro ao atualizar');
        console.log(err);
        })

    } else {
      this.mainService.addComodos({name: this.comName, id_user: localStorage.getItem('id_user')!})
      .subscribe((com) => {
        console.log(com);
        this.clearFields();
        this.notify('Inserido!');
      },
      (err) => {
        console.log(localStorage.getItem('id_user'));
        this.notify('Não foi possivel inserir');
      })
    }
    this.clearFields();
  }

  clearFields() {
    this.comName = '';
    this.comEdit = false;
    this.com_Id = '';
  }

  cancel(){
    this.clearFields();
  }

  edit(com: Comodo) {
    this.comName = com.name;
    this.comEdit = true;
    this.com_Id = com._id;
  }

  delete(com: Comodo) {
    this.mainService.delComodos(com)
      .subscribe(
        () => this.notify('Removido'),
        (err) => this.notify(err.error.msg)
      )
  }

  notify(msg: string) {
    this.snackBar.open(msg, "OK", {duration: 3000});
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe2$.next();
  }

  save_apar(){
    let data = this.aparelhoForm.value;
    console.log(data);
    if(data._id != null) {
      this.mainService.updateAparelhos(data)
        .subscribe(() => this.notify("Atualizado!"),);
    } else {
      this.mainService.addAparelhos(data)
        .subscribe(
          () => this.notify("Inserido!"),
        );
    }
    this.resetForm();
  }

  delete_apar(a: Aparelhos){
    this.mainService.deleteAparelhos(a)
      .subscribe(
        () => this.notify("Apagado!"),
        (err) => console.log(err)
      )
  }

  edit_apar(a: Aparelhos){
    this.aparelhoForm.setValue(a);
  }

  resetForm() {
    this.aparelhoForm.reset();
  }

}
