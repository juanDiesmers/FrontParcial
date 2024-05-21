import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { NgModel, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celular-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './celular-form.component.html',
  styleUrls: ['./celular-form.component.css']
})
export class CelularFormComponent implements OnInit {

  celular: Celular = {
    marca: '',
    serial: '',
    fechaCompra: new Date(),
    anoLanzamiento: new Date().getFullYear(),
    precio: 0,
    sistemaOperativo: '',
    gama: ''
  };

  isEdit: boolean = false;

  constructor(
    private celularService: CelularService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.celularService.getCelular(+id).subscribe((data: Celular) => {
        this.celular = data;
      });
    }
  }

  saveCelular(): void {
    if (this.isEdit) {
      this.celularService.updateCelular(this.celular.id!, this.celular).subscribe(() => {
        this.router.navigate(['/celulares']);
      });
    } else {
      this.celularService.createCelular(this.celular).subscribe(() => {
        this.router.navigate(['/celulares']);
      });
    }
  }
}
