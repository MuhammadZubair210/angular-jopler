import { Injectable } from '@angular/core';
import { GetRefsService } from './get-refs.service';

@Injectable()
export class GetPersonsService {
  persons: any[] = [];
  constructor(private GetRefsService: GetRefsService) {
    for (let i = 0; i < 5; i++) {
      this.persons.push(
        {
          firstname: "wiliam",
          lastname: "spear",
          address: "1234 bankstreet",
          country: "USA",
          city: "sunnyvale",
          state: "california",
          phone: 12345678,
          summary: "2 years of experience in developing the software ",
          employments: [
            {
              title: "Engineer",
              client: "Nokia",
              country: "USA",
              city: "sunnyvale",
              state: "california",
              startdate: '06 / 2010',
              enddate: '09 / 2012',
              responsibilites: "Developed backedn for the web site. "
            },
            {
              title: "Senior Engineer",
              client: "Toyota",
              country: "USA",
              city: "sunnyvale",
              state: "california",
              startdate: '07 / 2012',
              enddate: '10 / 2014',
              responsibilites: "Involved in developing and managing the web site."
            }
          ],
          Education: [
            {
              degree: "SSC",
              school: "oakwood school",
              country: "USA",
              year: 2001
            },
            {
              degree: "Bachelor of computer application",
              school: "Stanford university",
              country: "USA",
              year: 2004
            }
          ],
          certifications: [
            {
              name: "PG diploma"
            },
            {
              name: "Business adminstration"
            }
          ],
          Training: [
            {
              name: "Train for Android"
            }
          ],
          Skills: [
            {
              name: "C++"
            },
            {
              name: "Java"
            }
          ],
          date: i
        }
      );
    }
  }
  getParticularPerson(id) {
    if (this.persons.length > id)
      return this.persons[id];
    else
      return {};
  }
  getParticularPersonRefCount(name) {
    return this.GetRefsService.getParticularRef(name)[0].references.length;
  }
  getParticularPersonRef(name) {
    return this.GetRefsService.getParticularRef(name)[0].references;
  }
  getParticularPersonJobblerScore(id) {
    let avgScore = this.GetRefsService.getParticularRef_avgScore(this.persons[id].firstname);
    return [
      {
        title: 'Core Competency / Relevant Skills',
        score: avgScore.core
      },
      {
        title: 'Social Skills / Communication',
        score: avgScore.social
      },
      {
        title: 'Ethics & Character',
        score: avgScore.ethics
      },
      {
        title: 'Dependability',
        score: avgScore.dependency
      },
      {
        title: 'Creativity',
        score: avgScore.creativity
      },
      {
        title: 'Adaptability',
        score: avgScore.adaptability
      },
      {
        title: 'Leadership / Ownership Skills',
        score: avgScore.leadership
      }
    ];
  }
}
