import { Person } from '../types';
import PersonLink from './PersonLink';

interface Props {
  people: Person[];
}

export default function PeopleTable({ people }: Props) {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <PersonLink key={person.slug} person={person} />
        ))}

        {/* <tr data-cy="person">
          <td>
            <a href="#/people/philibert-haverbeke-1907">Philibert Haverbeke</a>
          </td>

          <td>m</td>
          <td>1907</td>
          <td>1997</td>

          <td>
            <a
              className="has-text-danger"
              href="#/people/emma-de-milliano-1876"
            >
              Emma de Milliano
            </a>
          </td>

          <td>
            <a href="#/people/emile-haverbeke-1877">Emile Haverbeke</a>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
}
