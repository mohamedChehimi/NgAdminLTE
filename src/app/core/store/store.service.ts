import {Injectable} from '@angular/core';

export interface HandlerInterface<T> {
  handle(x:T)
}
export interface DispatcherInterface<T> {
  createIfNotExist<T>(name: string, value:T)
  addStateSubscriber<T>(name, handler:HandlerInterface<T>)
  dispatch<T>(name)
}
export type App = {
  states: {},
  subscribers: {}
}

@Injectable({
  providedIn: 'root'
})
export class StoreService<T> implements DispatcherInterface {
  private app: App = {
    states: {},
    subscribers: {}
  }

  public createIfNotExist<T>(name: string, value:T) {
    if(typeof value !== T){
      const e = "Must be {}".replace('{}', T)
      throw e
    }
    this.app.states[name] = Object.keys(this.app.states).indexOf(name) !== -1 ? this.app.states[name] : value
    return this;
  }

  public addStateSubscriber<T>(name, handler:HandlerInterface<T>){
    this.app.subscribers[name] =  Object.keys(this.app.subscribers).indexOf(name) !== -1 ? this.app.subscribers[name] : [handler]
    return this
  }

  public dispatch<T>(name){
    const state = this.app.states[name]
    if( null !== state){
      const subscribers = this.app.subscribers[name]
      if(null!== subscribers){
        if(subscribers.forEach){
          subscribers.forEach((handler:HandlerInterface<T>)=>{
            handler.handle(state)
          })
        }
      }
    }
  }



}
