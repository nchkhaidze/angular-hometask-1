import {HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import Pokemon from "../../../model/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      if (req.url.endsWith("/pokemons/") && req.method === "GET") {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event.clone({body: event.body.map((pokemon: Pokemon) => ({...pokemon, damage: Math.floor(Math.random() * 100)}))})
                    
                }
                return event;
            })
        )
      }
      return next.handle(req);
  }
}
