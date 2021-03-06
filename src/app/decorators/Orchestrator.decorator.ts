import {Component} from '@angular/core';
import {$snakeCase} from "../../helpers/SnakeCase.helper";
import {Resolve} from "../service/Resolver.annotation";

export function Orchestrator({name, template, resolve }: {name: string, templateUrl: string, resolve?: any}): ClassDecorator {
  let componentDecorator = Component({
    template,
    selector: `o-${$snakeCase(name)}`,
    styles: [':host { display: block; }']
  });

  return function(Class: any): void {
    if (resolve) {
      Resolve(resolve)(Class);
    }

    componentDecorator(Class);
  }
}
