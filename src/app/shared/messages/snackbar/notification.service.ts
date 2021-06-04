import { EventEmitter } from "@angular/core";

export class NotificationService {
    notifier = new EventEmitter<string>()

    notify(messege: string) {
        this.notifier.emit(messege)
    }

}