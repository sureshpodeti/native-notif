import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { LocalNotifications } from "nativescript-local-notifications";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) {
        LocalNotifications.addOnMessageReceivedCallback(notificationData => {
            console.log("Notification received: " + JSON.stringify(notificationData));
          });

     }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    schedule(): void {
        LocalNotifications.schedule(
            [{
              id: 5,
              // image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/waiter-1785002-1518708.png",
              icon: 'res://rp',
              thumbnail: 'res://waiter',
              title: 'Table attend request',
              body: 'Table: 6',
              forceShowWhenInForeground: true,
              actions: [
                {
                  id: "input-richard",
                  type: "button",
                  title: "Ok",
                  // placeholder: "Type to reply..",
                  // submitLabel: "Reply",
                  launch: true,
                  editable: true,
                  // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                },
                {
                  id: "input-richards",
                  type: "button",
                  title: "Done",
                  // placeholder: "Type to reply..",
                  // submitLabel: "Reply",
                  launch: true,
                  editable: true,
                  // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                }
              ]
            },
            {
              id: 6,
              // image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/waiter-1785002-1518708.png",
              icon: 'res://rp',
              thumbnail: 'res://order',
              title: 'Order request',
              body: 'Table: 6,  Added 10 items',
              forceShowWhenInForeground: true,
              actions: [
                {
                  id: "input-richard",
                  type: "button",
                  title: "Ok",
                  // placeholder: "Type to reply..",
                  // submitLabel: "Reply",
                  launch: true,
                  editable: true,
                  // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                },
                {
                  id: "input-richards",
                  type: "button",
                  title: "Done",
                  // placeholder: "Type to reply..",
                  // submitLabel: "Reply",
                  launch: true,
                  editable: true,
                  // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                }
              ]
            },

            {
              id: 7,
              // image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/waiter-1785002-1518708.png",
              icon: 'res://rp',
              thumbnail: 'res://service',
              title: 'Service request',
              body: 'Table: 6,  Added 3 services',
              forceShowWhenInForeground: true,
              actions: [
                {
                  id: "input-richard",
                  type: "button",
                  title: "Ok",
                  // placeholder: "Type to reply..",
                  // submitLabel: "Reply",
                  launch: true,
                  editable: true,
                  // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                },
                {
                  id: "input-richards",
                  type: "button",
                  title: "Done",
                  // placeholder: "Type to reply..",
                  // submitLabel: "Reply",
                  launch: true,
                  editable: true,
                  // choices: ["Red", "Yellow", "Green"] // TODO Android only, but yet to see it in action
                }
              ]
            }
          
          ])
            .then(() => {
              alert({
                title: "Notification scheduled",
                message: "ID: 5",
                okButtonText: "OK, thanks"
              });
            })
            .catch(error => console.log("doScheduleId5WithInput error: " + error));



            LocalNotifications.addOnMessageReceivedCallback(
              function (notification) {
                console.log("ID: " + notification.id);
                console.log("Title: " + notification.title);
                console.log("Body: " + notification.body);
              }
          ).then(
              function() {
                console.log("Listener added");
              }
          )





      }

      
}
