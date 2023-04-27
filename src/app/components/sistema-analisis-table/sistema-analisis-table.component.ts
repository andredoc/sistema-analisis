import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentsService } from '../../services/documents.service';
import { MatSort } from '@angular/material/sort';


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
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];

  constructor(private documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.sort = this.sort;
    this.displayedColumns = this.headers.map(header => header.columnKey)
    this.documentsService.getDocuments().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
      );
  }

}
