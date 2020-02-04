import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverLight]'
})
export class HoverLightDirective {

  @HostBinding('class') color= "w3-tag w3-grey w3-small w3-margin-bottom";

  @HostListener('mouseenter') blacken(){
    this.color = "w3-tag w3-black w3-margin-bottom"
  }

  @HostListener('mouseleave') darken(){
    this.color = "w3-tag w3-grey w3-small w3-margin-bottom"
  }

}
