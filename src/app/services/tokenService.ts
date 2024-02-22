import { Base64 } from 'js-base64';
import { TokenData } from '../interface/tokenData';


const storageKey = process.env.USER_STORAGE_KEY

export const tokenService = {

  getToken: async () => {
    return await localStorage.getItem(storageKey + 'token');
  },

  saveToken: async (token: string) => {
    await localStorage.setItem(storageKey + 'token', token);
  },

  retrieveTokenData: async (): Promise<TokenData | undefined> => {

    const tokenStorage = await localStorage.getItem(storageKey + 'token');
  
    if (tokenStorage) {
      const tokenObject = JSON.parse(tokenStorage);
      const parts = tokenObject.token.split('.');
      if (parts.length !== 3) {
        throw new Error('The token is invalid');
      }
  
      const decoded: TokenData = JSON.parse(Base64.decode(parts[1]));
      return decoded;
    }
  },

  isTokenExpired: async (): Promise<boolean> => {
    const tokenData = await tokenService.retrieveTokenData();
  
    if (tokenData) {
      const now = Math.floor(Date.now() / 1000);
      
      return tokenData.exp < now;
    }

    return true;
  },

};