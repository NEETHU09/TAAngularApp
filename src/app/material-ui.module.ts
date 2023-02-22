import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const modules = [
  MatCardModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule, // Add MatInputModule to the imports array
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatTabsModule,
  // MatButton,
  MatPaginatorModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
