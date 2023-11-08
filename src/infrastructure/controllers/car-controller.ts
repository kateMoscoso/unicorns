import {  controller, httpGet } from 'inversify-express-utils';

@controller('/car')
export class CarController {
    @httpGet('/')
    public get(): string {
      return 'Car';
    }
}