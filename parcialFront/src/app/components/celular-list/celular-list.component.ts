import { Component, OnInit } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { DatePipe, CurrencyPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-celular-list',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe, CurrencyPipe],
  templateUrl: './celular-list.component.html',
  styleUrls: ['./celular-list.component.css']
})
export class CelularListComponent implements OnInit {

  celulares: Celular[] = [];

  constructor(private celularService: CelularService) { }

  ngOnInit(): void {
    this.loadCelulares();
  }

  loadCelulares(): void {
    this.celularService.getCelulares().subscribe((data: Celular[]) => {
      this.celulares = data;
    });
  }

  deleteCelular(id: number): void {
    this.celularService.deleteCelular(id).subscribe(() => {
      this.loadCelulares();
    });
  }
}
