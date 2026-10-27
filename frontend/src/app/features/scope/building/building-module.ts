import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Building } from './components/building';
import { AuditDetails } from './components/audit-details/audit-details';
import { BuildingRoutingModule } from './building-routing-module';

@NgModule({
  declarations: [Building, AuditDetails],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BuildingRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [Building, AuditDetails],
})
export class BuildingModule {}
