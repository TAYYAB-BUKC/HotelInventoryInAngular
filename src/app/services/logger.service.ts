import { Injectable } from '@angular/core';

export class LoggerService {

  constructor() { }

  log(msg: string){
    console.log(msg);
  }
}
