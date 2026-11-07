export interface UserProps {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  password?: string;
}

export class UserEntity {
  private readonly _id: string;
  private _name: string;
  private _email: string;
  private _password?: string;
  private _role: string;
  private readonly _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: UserProps) {
    this._id = props.id;
    this._name = props.name;
    this._email = props.email;
    this._role = props.role;
    this._createdAt = props.createdAt;
    this._updatedAt = props.updatedAt;
    this._password = props.password;
  }

  // --- Getters (Read-only access) ---

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string | undefined {
    return this._password;
  }

  get role(): string {
    return this._role;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  // --- Controlled Mutation Methods ---

  public updateName(name: string): void {
    if (!name || name.trim().length === 0) {
      throw new Error('Name cannot be empty');
    }
    this._name = name;
    this._updatedAt = new Date();
  }

  public updatePassword(hashedPassword: string): void {
    this._password = hashedPassword;
    this._updatedAt = new Date();
  }
}