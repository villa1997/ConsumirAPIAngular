
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mode} from 'src/app/models/modelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //Api Paises  "https://restcountries.eu/rest/v2/alpha/col"

  private apiURL = 'https://randomuser.me/api/?results=25';

  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiURL);
  }

  // getBook(bookId: string): Observable<Book> {
  //   let params = new HttpParams().set('incluirDirecciones', "true");
  //   return this.http.get<Book>(this.apiURL + '/' + bookId, {params: params});
  // }

  /* createBook(body): Observable<Mode> {
    return this.http.post<Mode>(this.apiURL, body);
  }

  updateBook(ID, body): Observable<Mode> {
    return this.http.put<Mode>(this.apiURL + "/" + ID, body);
  }

  deleteBook(ID): Observable<Mode> {
    return this.http.delete<Mode>(this.apiURL + "/" + ID);
  } */
}
