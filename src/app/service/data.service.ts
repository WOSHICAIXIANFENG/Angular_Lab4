export class DataService {
  private post: any;

  setData(data: string){
     this.post = data;
  }

  getInfo() {
     return this.post;
  }
}
