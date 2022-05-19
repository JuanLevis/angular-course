import { Component, Output, EventEmitter } from "@angular/core";

@Component ({
    selector:"app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
    @Output() sectionSelected = new EventEmitter<string>();

    onSelect(selected: string) {
        this.sectionSelected.emit(selected);
    }

}