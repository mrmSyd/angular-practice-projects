import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './Components/Directives/attribute-directive/attribute-directive.component';
import { StructuralDirectivesComponent } from './Components/Directives/structural-directives/structural-directives.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { ControlFlowComponent } from './Components/control-flow/control-flow.component';

export const routes: Routes = [
    {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
    },
    {
        path: 'structural-directive',
        component: StructuralDirectivesComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    }
];
