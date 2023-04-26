import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface IHeaders {
  label: string,
  columnKey: string
}

@Component({
  selector: 'app-sistema-analisis-table',
  templateUrl: './sistema-analisis-table.component.html',
  styleUrls: ['./sistema-analisis-table.component.css']
})
export class SistemaAnalisisTableComponent implements OnInit {
  @Input() headers!: IHeaders[];
  @Input() data!: any[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.displayedColumns = this.headers.map(header => header.columnKey)
  }

}
