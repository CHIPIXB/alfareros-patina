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
      color: ['', Validators.required],
      talla: ['', Validators.required],
      observaciones: ['']
    });
    
      this.pedidoForm.get('prenda')?.valueChanges.subscribe((value) => {
          const colorControl = this.pedidoForm.get('color');
          if (value === 'camiseta-algodon' || value === 'camiseta-tecnica') {
            colorControl?.enable(); // activa
          } else {
            colorControl?.disable(); // desactiva
            colorControl?.reset();   // limpia el valor
          }
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

