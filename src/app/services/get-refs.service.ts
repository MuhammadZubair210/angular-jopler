import { Injectable } from '@angular/core';

@Injectable()
export class GetRefsService {
  refs: any[] = [];
  constructor() {
    for (let i = 0; i < 5; i++) {
      this.refs.push(
        {
          name: "wiliam",
          references: [
            {
              name: "Aleksi",
              core: 4.5,
              social: 4.0,
              ethics: 5.0,
              dependency: 4.0,
              creativity: 4.6,
              adaptability: 4.0,
              leadership: 4.5
            },
            {
              name: "Thomas",
              core: 4.0,
              social: 5.0,
              ethics: 4.0,
              dependency: 3.0,
              creativity: 5.0,
              adaptability: 4.5,
              leadership: 4.5
            },
            {
              name: "Alan",
              core: 5.0,
              social: 4.5,
              ethics: 4.0,
              dependency: 4.0,
              creativity: 2.0,
              adaptability: 4.5,
              leadership: 4.5
            }
          ]
        },
        {
          name: "John",
          references: [
            {
              name: "Micheal",
              core: 4.5,
              social: 3.0,
              ethics: 5.0,
              dependency: 5.0,
              creativity: 4.0,
              adaptability: 5.0,
              leadership: 4.5
            },
            {
              name: "Gorkem",
              core: 4.5,
              social: 5.0,
              ethics: 4.0,
              dependency: 5.0,
              creativity: 5.0,
              adaptability: 5.0,
              leadership: 4.0
            }
          ]
        }
      );
    }

  }
  getParticularRef(name) {
    var newArray = this.refs.filter(function (el) {
      return el.name==name;
    });
    return newArray;
  }
getParticularRef_avgScore(name) {
  let references=this.getParticularRef(name)[0].references;
  let core=0,social=0,ethics=0,dependency=0,creativity=0,adaptability=0,leadership=0;
   for(let i=0;i<references.length;i++)
   {
      core+=references[i].core;
      social+=references[i].social;
      ethics+=references[i].ethics;
      dependency+=references[i].dependency;
      creativity+=references[i].creativity;
      adaptability+=references[i].adaptability;
      leadership+=references[i].leadership;
   }
    return {
      core:(core/references.length).toFixed(2),
      social:(social/references.length).toFixed(2),
      ethics:(ethics/references.length).toFixed(2),
      dependency:(dependency/references.length).toFixed(2),
      creativity:(creativity/references.length).toFixed(2),
      adaptability:(adaptability/references.length).toFixed(2),
      leadership:(leadership/references.length).toFixed(2)
    };
  }
}
