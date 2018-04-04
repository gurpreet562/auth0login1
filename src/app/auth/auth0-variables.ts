interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'kNEvXpj9aXYMrqdIPwBI-4Aln288H3x7',
  domain: 'comicsapp506.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
