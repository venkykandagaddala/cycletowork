import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MessageService {
  errorMessage = new Subject();
  sucessMessage = new Subject();
}