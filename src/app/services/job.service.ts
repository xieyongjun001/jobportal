import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Job } from '../model/job.model';
import { environment } from '../../environments/environment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  formSubmitted$ = new BehaviorSubject(false);

  private itemsRef: AngularFireList<any>;
  private itemRef: AngularFireObject<any>;

  constructor(private http: HttpClient,private db: AngularFireDatabase) { 
    this.itemsRef = this.db.list('job');
    this.itemRef = this.db.object('job'); // 添加初始化
  }

  getCardData(): Observable<any> {
    return this.http.get(environment.firebaseConfig.databaseURL+ '/job.json').pipe(
      map(responseObj => {
        const resultArr = [];
        const objResponse = responseObj as Job[];
        for (let item in objResponse) {
          resultArr.push({ ...objResponse[item], id: item })
        }
        return resultArr;
      })
    )
  }

  addNewJob(form: Job): Observable<any> {
    const submittedJob: Job = {
      title: form.title,
      description: form.description,
      type: form.type
    }
    return this.http.post(environment.firebaseConfig.databaseURL+ '/job.json', submittedJob)
  }

  // deleteJob(form: Job): Observable<any> {
  //   // return this.http.delete(environment.firebaseConfig.databaseURL+ `/job/${form.id}`)
  //   return this.itemsRef.remove(form.id);
  // }

  deleteJob(form: Job): Promise<void> {
    return this.itemsRef.remove(form.id?.toString());
  }

  updateJob(form: Job): Promise<void> {
    let jobid: string;
    if (form.id === undefined) {
      alert('Wrong Id');
      return Promise.reject('Wrong Id');
    }else{
      jobid = form.id.toString();
      return this.itemsRef.update(jobid, form);
    }
  }


  // updateItem(key: string, updatedItem: any): Promise<void> {
  //   return this.itemsRef.update(key, updatedItem);
  // }

  getAllJobsByCategories(): Observable<any> {
    return this.http.get(environment.firebaseConfig.databaseURL+ '/job.json').pipe(
      map(responseObj => {
        const obj = {} as any;
        const categories: string[] = [];
        const objResponse = responseObj as Job[];

        for (let item in objResponse) {
          if (categories.indexOf(objResponse[item].type) === -1) {
            categories.push(objResponse[item].type)
          }
        }

        categories.forEach(cat => {
          obj[cat] = [];
          for (let item in objResponse) {
            if (objResponse[item].type === cat) {
              obj[cat].push({ ...objResponse[item], id: item })
            }
          }
        })

        return obj
      })
    )
  }

  getAJobById(id: string): Observable<any> {
    // return this.http.get(environment.firebaseConfig.databaseURL+ `job/${id}.json`)
    this.itemRef = this.db.object(`job/${id}`);
    return this.itemRef.snapshotChanges().pipe(
      map(changes => {
        const data = changes.payload.val();
        const $key = changes.key;
        return { $key, ...data };
      })
    );
  }



  // getItems(): Observable<any[]> {
  //   return this.itemsRef.valueChanges();
  // }

  // addItem(item: any): Promise<any> {
  //   return this.itemsRef.push(item);
  // }

  // updateItem(key: string, updatedItem: any): Promise<void> {
  //   return this.itemsRef.update(key, updatedItem);
  // }

  // deleteItem(key: string): Promise<void> {
  //   return this.itemsRef.remove(key);
  // }

  // getItemByKey(key: string): AngularFireObject<any> {
  //   this.itemRef = this.db.object(`items/${key}`);
  //   return this.itemRef;
  // }
}
