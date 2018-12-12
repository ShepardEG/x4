import { Component, OnInit } from '@angular/core';
import { Module, ModuleDefinition } from '../services/module';
import { Resource } from '../services/resource';

interface ModuleConfig {
  moduleId?: number;
  count: number;
}

interface ModuleResourceOutput {
  module: ModuleDefinition;
  count: number;
}

interface ModuleResourceData {
  moduleName: string;
  count: number;
  value: number;
}

class ResourceOutput {
  private modules: ModuleResourceOutput[] = [];
  expanded = false;

  constructor(public resource: Resource) {
  }

  addModuleResource(module: ModuleDefinition, count: number) {
    this.modules.push({ module: module, count: count });
  }

  get moduleResources() {
    const result: ModuleResourceData[] = [];

    this.modules.forEach(x => {
      if (x.module.production != null && x.module.production.resource.id === this.resource.id) {
        result.push({ count: x.count, moduleName: x.module.name, value: x.module.production.value });
      }

      const requirement = x.module.requirements.find(r => r.resource.id === this.resource.id);
      if (requirement != null) {
        result.push({ count: x.count, moduleName: x.module.name, value: -requirement.value });
      }
    });

    return result;
  }

  get amount() {
    let amount = 0;

    this.modules.forEach(x => {
      if (x.module.production != null && x.module.production.resource.id === this.resource.id) {
        amount += x.count * x.module.production.value;
      }

      const requirement = x.module.requirements.find(r => r.resource.id === this.resource.id);
      if (requirement != null) {
        amount -= x.count * requirement.value;
      }
    });

    return amount;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  stationModules: ModuleConfig[] = [];
  modules = {
    basicResources: Module.basicResources,
    basicFood: Module.basicFood,
    finalFood: Module.finalFood,
    illegal: Module.illegal,
    basicIntermediate: Module.basicIntermediate,
    intermediateGoods: Module.intermediateGoods
  };

  expandState: { [resourceId: number]: boolean } = {};

  ngOnInit(): void {
    this.stationModules.push({ moduleId: 0, count: 0 });
  }

  get resources() {
    const resources: ResourceOutput[] = [];

    this.stationModules.forEach(x => {
      if (x.moduleId !== 0 && x.count > 0) {
        const module = Module.get(x.moduleId);
        if (module != null) {
          module.requirements.forEach(r => {
            let resource = resources.find(y => y.resource.id === r.resource.id);

            if (resource == null) {
              resource = new ResourceOutput(r.resource);
              resource.expanded = this.expandState[r.resource.id] || false;
              resources.push(resource);
            }

            resource.addModuleResource(module, x.count);
          });

          if (module.production != null) {
            let resource = resources.find(y => y.resource.id === module.production.resource.id);

            if (resource == null) {
              resource = new ResourceOutput(module.production.resource);
              resource.expanded = this.expandState[module.production.resource.id] || false;
              resources.push(resource);
            }

            resource.addModuleResource(module, x.count);
          }
        }
      }
    });

    return resources;
  }

  removeModule(item: ModuleConfig) {
    const index = this.stationModules.indexOf(item);
    if (index >= 0) {
      this.stationModules.splice(index, 1);
    }
  }

  toggleExpanded(item: ResourceOutput) {
    item.expanded = !item.expanded;
    this.expandState[item.resource.id] = item.expanded;
  }

  addModule() {
    this.stationModules.push({ moduleId: 0, count: 0 });
  }
}