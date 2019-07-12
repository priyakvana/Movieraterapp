import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Movie} from '../app/model/Movie';
import { CookieService } from 'ngx-cookie-service';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  baseUrl ='https://angulardjangosample.herokuapp.com/';
  baseMovieUrl =`${this.baseUrl}api/movies/`;
  headers = new HttpHeaders({
    'Content-type':'application/json',
      
  })
 

  constructor( private httpClient:HttpClient,private cookieService:CookieService) { }
  getMovies(){
   return this.httpClient.get<Movie[]>(`${this.baseMovieUrl}`,{headers:this.getAuthHeaders()});
    
  }
  getMovie(id:number){
    return this.httpClient.get(`${this.baseMovieUrl}${id}/`,{headers:this.getAuthHeaders()});
     
   }
   createMovie(title:string,description:string){
     const body= JSON.stringify({title,description})
    return this.httpClient.post(`${this.baseMovieUrl}`, body ,{headers:this.getAuthHeaders()});
     
   }
   updateMovie(id,title:string,description:string){
    const body= JSON.stringify({title,description})
   return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body ,{headers:this.getAuthHeaders()});
    
  }
  deleteMovie(id){
  
   return this.httpClient.delete(`${this.baseMovieUrl}${id}/`,{headers:this.getAuthHeaders()});
    
  }
  rateMovies(rate:number, movieId:number){
    const body  = JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.baseMovieUrl}${movieId}/rate_movie/`,body,{headers:this.getAuthHeaders()});
     
   }
   loginUser(authData){
    const body= JSON.stringify(authData)
    return this.httpClient.post(`${this.baseUrl}auth/`, body ,{headers:this.getAuthHeaders()});

   }
   registerUser(authData){
    const body= JSON.stringify(authData)
    return this.httpClient.post(`${this.baseUrl}api/users/`, body ,{headers:this.getAuthHeaders()});

   }
   getAuthHeaders(){
   const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-type':'application/json',
       Authorization:`Token ${token}`
   })
}
}
