import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from "../data/user";

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: IUser[], search: string): IUser[] {
    if (search.length === 0) return users;
    return users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));
  }

}
