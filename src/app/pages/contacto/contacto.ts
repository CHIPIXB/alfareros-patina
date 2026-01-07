import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  pedidoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.pedidoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      prenda: ['', Validators.required],
      color: [''],
      talla: ['', Validators.required],
      observaciones: ['']
    });
    
    this.pedidoForm.get('prenda')?.valueChanges.subscribe((value) => {
      const colorControl = this.pedidoForm.get('color');
      const tallaControl = this.pedidoForm.get('talla');

      // 🎨 Color solo si camiseta técnica
      if (value === 'camiseta-tecnica') {
        colorControl?.setValidators([Validators.required]);
      } else {
        colorControl?.clearValidators();
        colorControl?.reset();
      }
      colorControl?.updateValueAndValidity();

      // 👕 Talla en todas menos mochila
      if (value && value !== 'mochila') {
        tallaControl?.setValidators([Validators.required]);
      } else {
        tallaControl?.clearValidators();
        tallaControl?.reset();
      }
      tallaControl?.updateValueAndValidity();
    });
}

  onSubmit() {
    if (this.pedidoForm.valid) {
      console.log('Pedido enviado:', this.pedidoForm.value);
      alert('Pedido enviado con éxito 🎉');
      this.pedidoForm.reset();
    } else {
      alert('Por favor, revisa los campos del formulario.');
    }
  }
}

