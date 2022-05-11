import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridModule } from '@ag-grid-community/angular';

import { RelatoriosListarComponent } from './relatorios-listar/relatorios-listar.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SociosEmpresasCampanhaComponent } from './socios-empresas-campanha/socios-empresas-campanha.component';
import { CongressoPandemiaComponent } from './congresso-pandemia/congresso-pandemia.component';

@NgModule({
  declarations: [
    RelatoriosListarComponent,
    SociosEmpresasCampanhaComponent,
    CongressoPandemiaComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
