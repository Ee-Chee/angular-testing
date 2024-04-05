// https://medium.com/@borjamrd1/type-your-formgroups-in-angular-in-three-different-ways-707c289640b1

import { FormControl } from "@angular/forms";

export interface User {
    lastName: string;
    firstName: string;
    email: string;
}

export type UserForm = {
    [field in keyof User]: FormControl<User[field]>;
  };
