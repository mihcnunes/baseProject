import { Component } from "@angular/core";


@Component({
    selector: 'app-lista-sono',
    templateUrl: './app-lista-sono.component.html',
    styleUrls: ['/app-lista-sono.component.css']
})

export class AppListaSonoComponent{
    people: any[] = [
        {
             name: 'Michele',
             age: 24,
             level: 'G'
        },

        {
            nome: 'Lucas',
            age: 25,
            level: 'P'
        },
        {
            nome: 'Cristiane',
            age: 42,
            level: 'P'
        },
        {
            nome: 'Manoela',
            age: 3,
            level:'M'
        },
        {
            nome: 'João',
            age: 40,
            level: 'D'
        }



    ];
}