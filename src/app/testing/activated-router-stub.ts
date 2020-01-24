import { BehaviorSubject } from "rxjs";

export class ActivatedRouteStub {
  private subject = new BehaviorSubject({});

  push(value: any) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
  get paramMap() {
    return this.subject.asObservable();
  }
}
