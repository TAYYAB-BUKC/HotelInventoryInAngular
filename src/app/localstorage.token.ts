import { InjectionToken } from "@angular/core";

export const LocalStorageToken = new InjectionToken<any>('Local storage', {
    providedIn: 'root',
    factory() {
        if (typeof window !== 'undefined' && window.localStorage) {
            return window.localStorage;
        } else {
            console.error('localStorage is not available in this environment.');
            return null;
        }
    },
});

// import { Injectable, InjectionToken } from '@angular/core';

// export const LocalStorageToken = new InjectionToken<Storage>('localStorage');

// @Injectable({
//   providedIn: 'root',
//   useFactory: () => localStorage
// })
// export class LocalStorageService {
//   constructor(private storage: Storage) {}

//   getItem(key: string): string | null {
//     return this.storage.getItem(key);
//   }

//   setItem(key: string, value: string): void {
//     this.storage.setItem(key, value);
//   }

//   removeItem(key: string): void {
//     this.storage.removeItem(key);
//   }
// }
