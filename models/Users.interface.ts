export interface IUser {
  app_metadata: { provider?: string, providers?: string[] },
  aud: string
  created_at: string,
  id: string,
  user_metadata:  {
    name?: string;
    avatar_url?: string;
    [key: string]: any;
  },
  action_link?: string,
  confirmation_sent_at?: string,
  confirmed_at?: string,
  deleted_at?: string,
  email?: string,
  email_confirmed_at?: string,
  email_change_sent_at?: string,
  factors?: IFactors[],
  identities?: IIdentities[],
  invited_at?: string,
  is_anonymous?: boolean,
  is_sso_user?: boolean,
  last_sign_in_at?:string,
  new_email?: string,
  new_phone?: string,
  phone?: string,
  phone_confirmed_at?: string,
  recovery_sent_at?: string,
  role?: string,
  updated_at?: string,
}

export interface IFactors {
  created_at: string,
  factor_type?: 'totp' | 'phone' | (string & {});
}

export interface IIdentities {
  id: string,
  identity_id: string,
  provider: string,
  user_id: string,
  created_at?: string,
  updated_at?: string,
  identity_data?: {
    [key: string]: string | boolean | number | object | null 
  },
  last_sign_in_at?: string,
}

export interface ISession {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: string,
  expires_at?: number,
  provider_refresh_token?: string | null,
  provider_token?: string | null,
  user: IUser
} 

export interface IUserResponse {
  session: ISession | null,
  user: IUser | null,
}