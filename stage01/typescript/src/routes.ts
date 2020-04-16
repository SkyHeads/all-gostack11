import { Request, Response } from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'email@live.com',
    password: '123456',
    techs: [
      'node.js',
      'reactjs',
      'reactnative',
      { title: 'Javascript', experience: 100},
    ],
  });

  return response.json(user);
};