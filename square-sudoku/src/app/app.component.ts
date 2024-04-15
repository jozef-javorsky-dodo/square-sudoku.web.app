import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatCommonModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRippleModule } from "@angular/material/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet, MatProgressBarModule, MatDividerModule, MatCommonModule,
    MatButtonModule, MatCardModule, MatGridListModule, MatRippleModule
  ],
  templateUrl: "./app.component.html"
})

export class AppComponent {

  title: string | null = ("square-sudoku") as string;

  SPAwebTitle: string | null = (" • 🅂🅀🅄🄰🅁🄴 • 🅂🅄🄳🄾🄺🅄 • ") as string;

  y_coloring(): void {

    [
      ...[document.querySelectorAll(<string>(".y0"))],
      ...[document.querySelectorAll(<string>(".y3"))],
      ...[document.querySelectorAll(<string>(".y6"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(244, 244, 0)") as string;
          this.pseudo_css(c);
        });
      });

    [
      ...[document.querySelectorAll(<string>(".y1"))],
      ...[document.querySelectorAll(<string>(".y4"))],
      ...[document.querySelectorAll(<string>(".y7"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(122, 244, 122)") as string;
          this.pseudo_css(c);
        });
      });

    [
      ...[document.querySelectorAll(<string>(".y2"))],
      ...[document.querySelectorAll(<string>(".y5"))],
      ...[document.querySelectorAll(<string>(".y8"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(243, 198, 242)") as string;
          this.pseudo_css(c);
        });
      });
  }

  x_coloring(): void {

    [
      ...[document.querySelectorAll(<string>(".x0"))],
      ...[document.querySelectorAll(<string>(".x3"))],
      ...[document.querySelectorAll(<string>(".x6"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(244, 244, 0)") as string;
          this.pseudo_css(c);
        });
      });

    [
      ...[document.querySelectorAll(<string>(".x1"))],
      ...[document.querySelectorAll(<string>(".x4"))],
      ...[document.querySelectorAll(<string>(".x7"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(122, 244, 122)") as string;
          this.pseudo_css(c);
        });
      });

    [
      ...[document.querySelectorAll(<string>(".x2"))],
      ...[document.querySelectorAll(<string>(".x5"))],
      ...[document.querySelectorAll(<string>(".x8"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(243, 198, 242)") as string;
          this.pseudo_css(c);
        });
      });
  }

  subcs_coloring(): void {

    [
      ...[document.querySelectorAll(<string>(".sub00"))],
      ...[document.querySelectorAll(<string>(".sub11"))],
      ...[document.querySelectorAll(<string>(".sub22"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(244, 244, 0)") as string;
          this.pseudo_css(c);
        });
      });

    [
      ...[document.querySelectorAll(<string>(".sub01"))],
      ...[document.querySelectorAll(<string>(".sub12"))],
      ...[document.querySelectorAll(<string>(".sub20"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(122, 244, 122)") as string;
          this.pseudo_css(c);
        });
      });

    [
      ...[document.querySelectorAll(<string>(".sub02"))],
      ...[document.querySelectorAll(<string>(".sub10"))],
      ...[document.querySelectorAll(<string>(".sub21"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgb(243, 198, 242)") as string;
          this.pseudo_css(c);
        });
      });
  }

  null_coloring(): void {

    [
      ...[document.querySelectorAll(<string>(".y0"))],
      ...[document.querySelectorAll(<string>(".y1"))],
      ...[document.querySelectorAll(<string>(".y2"))],
      ...[document.querySelectorAll(<string>(".y3"))],
      ...[document.querySelectorAll(<string>(".y4"))],
      ...[document.querySelectorAll(<string>(".y5"))],
      ...[document.querySelectorAll(<string>(".y6"))],
      ...[document.querySelectorAll(<string>(".y7"))],
      ...[document.querySelectorAll(<string>(".y8"))]].forEach((_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.backgroundColor = ("rgba(179, 179, 179, 0.5)") as string;
          this.pseudo_css(c);
        });
      });
  }

  pseudo_css(c: HTMLElement): void {

    c.style.padding = ("0 7px 0 7px") as string;
    c.style.borderRadius = ("2px") as string;
    c.style.color = ("rgb(0, 0, 0)") as string;
  }

  window_relocation(): void { window.location.href = <string>("https://github.com/jozef-javorsky-dodo"); }

  i_tft_o(): void {

    const nArr: number[] = [];
    const elArr: HTMLElement[] = [];
    const g_bttn: HTMLButtonElement = document.getElementById(<string>("g-b")) as HTMLButtonElement;
    const s_bttn: HTMLButtonElement = document.getElementById(<string>("s-b")) as HTMLButtonElement;

    [...[document.querySelectorAll(<string>(".val"))]].forEach((_NodeList_) => {
      _NodeList_.forEach((cubicle) => {

        const c: HTMLElement = cubicle as HTMLDivElement;

        elArr.push(c);
      });
    });

    function o_i(): void {

      for (let i_itr: number = <number>(27); i_itr <= <number>(80); i_itr++) {

        const y___arr: number[] = [];
        const x___arr: number[] = [];
        const sub_arr: number[] = [];
        const dot: string = ('.') as string;
        const yc: string = String(elArr[i_itr].getAttribute(<string>("class"))).split(<string>(' '))[Number(0)];
        const xc: string = String(elArr[i_itr].getAttribute(<string>("class"))).split(<string>(' '))[Number(1)];
        const sc: string = String(elArr[i_itr].getAttribute(<string>("class"))).split(<string>(' '))[Number(2)];

        [...[document.querySelectorAll(dot + yc)]].forEach((_NodeList_) => {
          _NodeList_.forEach((cubicle) => {

            const c: HTMLElement = cubicle as HTMLDivElement;

            y___arr.push(Number(String(c.innerText)));
          });
        });

        [...[document.querySelectorAll(dot + xc)]].forEach((_NodeList_) => {
          _NodeList_.forEach((cubicle) => {

            const c: HTMLElement = cubicle as HTMLDivElement;

            x___arr.push(Number(String(c.innerText)));
          });
        });

        [...[document.querySelectorAll(dot + sc)]].forEach((_NodeList_) => {
          _NodeList_.forEach((cubicle) => {

            const c: HTMLElement = cubicle as HTMLDivElement;

            sub_arr.push(Number(String(c.innerText)));
          });
        });

        for (let p_n_v: number = <number>(1); p_n_v <= <number>(9); p_n_v++) {

          if (
            (Boolean(y___arr.includes(p_n_v)) === <boolean>(false)) &&
            (Boolean(x___arr.includes(p_n_v)) === <boolean>(false)) &&
            (Boolean(sub_arr.includes(p_n_v)) === <boolean>(false))
          ) {
            elArr[i_itr].innerHTML = String(Number(p_n_v)); break;
          }
          else continue;
        }
      }
    }

    for (let _i_oo: number = <number>(0); _i_oo <= <number>(80); _i_oo++)elArr[_i_oo].innerText = String('0');

    while (Number(nArr.length) < Number(9)) {

      const ps_n_v: number = Number(Math.floor(Math.random() * <number>(9)) + <number>(1));

      if (Boolean(nArr.includes(ps_n_v)) === <boolean>(false)) nArr.push(ps_n_v);
    }

    [elArr[Number(0)], elArr[Number(12)], elArr[Number(24)]].forEach(el => el.innerText = String(nArr[Number(0)]));
    [elArr[Number(1)], elArr[Number(13)], elArr[Number(25)]].forEach(el => el.innerText = String(nArr[Number(1)]));
    [elArr[Number(2)], elArr[Number(14)], elArr[Number(26)]].forEach(el => el.innerText = String(nArr[Number(2)]));
    [elArr[Number(3)], elArr[Number(15)], elArr[Number(18)]].forEach(el => el.innerText = String(nArr[Number(3)]));
    [elArr[Number(4)], elArr[Number(16)], elArr[Number(19)]].forEach(el => el.innerText = String(nArr[Number(4)]));
    [elArr[Number(5)], elArr[Number(17)], elArr[Number(20)]].forEach(el => el.innerText = String(nArr[Number(5)]));
    [elArr[Number(6)], elArr[Number(9)], elArr[Number(21)]].forEach(el => el.innerText = String(nArr[Number(6)]));
    [elArr[Number(7)], elArr[Number(10)], elArr[Number(22)]].forEach(el => el.innerText = String(nArr[Number(7)]));
    [elArr[Number(8)], elArr[Number(11)], elArr[Number(23)]].forEach(el => el.innerText = String(nArr[Number(8)]));

    for (let _t: number = <number>(0); _t <= <number>(9); _t++)o_i();

    for (let _l: number = <number>(0); _l <= <number>(80); _l++)if (elArr[_l].innerText === String('0')) this.i_tft_o();

    g_bttn.style.visibility = <string>("hidden");
    s_bttn.style.visibility = <string>("visible");

    for (let i__: number = <number>(0); i__ <= <number>(80); i__++)elArr[i__].style.visibility = <string>("visible");

    for (let i__: number = <number>(0); i__ <= <number>(9); i__++)
      elArr[Number(Math.floor(Math.random() * <number>(81)))].style.visibility = <string>("hidden");

  }

  rrndr_o_ui(): void {

    const g_bttn: HTMLButtonElement = document.getElementById(<string>("g-b")) as HTMLButtonElement;
    const s_bttn: HTMLButtonElement = document.getElementById(<string>("s-b")) as HTMLButtonElement;

    [...[document.querySelectorAll(<string>(".val"))]].forEach(
      (_NodeList_) => {
        _NodeList_.forEach((cubicle) => {

          const c: HTMLElement = cubicle as HTMLDivElement;

          c.style.visibility = <string>("visible");
        });
      });

    g_bttn.style.visibility = <string>("visible");
    s_bttn.style.visibility = <string>("hidden");
  }
}

try {

  <string>("use strict");

  const html_body_ele: HTMLElement | null = document.getElementById(<string>("html-body")) as HTMLElement;

  html_body_ele.style.backgroundImage = (<string>("url('") + <string>("data:image/gif;") + <string>("base64,") +
    <string>("R0lGODlhCwALAPcAAAAAAAAAAgAAAwAABQAACAABAQACAAAEAQAIAAAQAAAbAAEAAAEADwEBAAEDAQEGCAIAAgICAgICCAI") +
    <string>("IAQINCQIPAQMAAAMABQMdDAQACQQAGgQBAwUEAgUEDwULDwURDwUXDAYFCAcFFwcJAwcLCQcPFwgAEAgbAQgbFggoFQkFIg") +
    <string>("kKCQkQAgkoCwopAAsAKQwJCgwJDwwQDwwcJA0cGw0oHQ4AHA4RCg4pJw8NFw81JxAbDRA6ABBEKBEQEBIaFhMLLxMNIhQPG") +
    <string>("BYALRYaFRgoEhgwNxkPJBkcHhkcJxkcNxoAPhsdGBsoIx0NMR02FB4eJCALVSA1KSIfJyJFEyJHOiMpHCNEJyQoJCRVQCcA") +
    <string>("UychOCcqLCczNykNQyo2Ii01LzAwODBGIDBUIjBhQDIqVTQqRzRFLjRGOzU7OTVISDYAbDYMWDk7RjlVQDsMbz0wVz4rcT5") +
    <string>("IUz5jIT8rfD9HPUFYUkFfLkFpakIsj0KXfEQuZUVJSUVWQkgAiEhhQUwMjlJUWFRaWFR5QVVkUFV3VFYvgVl2aFplZV4qmG") +
    <string>("F/e2J9S2OWS2QMoWQ4qGV8WWWVgmdngGt8aWyWZnSpVnWCf3WhnXiWhXo8u3pqsnq7pYarZoimeI2ln5S9qKS/sbji28X87") +
    <string>("Gc3vX0x2ncMy1sApYsz53wA0gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") +
    <string>("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") +
    <string>("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA") +
    <string>("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C") +
    <string>("05FVFNDQVBFMi4wAwEAAAAh+QQFBwAEACH+JkdJRiBlZGl0ZWQgd2l0aCBodHRwczovL2V6Z2lmLmNvbS9jcm9wACwAAAAA") +
    <string>("CwALAAAHPIAAggAWAAULg4OFh4McEIkLiAuPg5SCkYkAlgCRAQECgheCAYIFmYmbghA+RKeDMhSmrpk7fTKYCwOCgQAh+QQ") +
    <string>("FBgAEACwAAAAACwALAAAHQIAAARYACwsABwCFA4UQAAaChAuOAYoAjJaZihCOioYFmpuZnJYLmKOdlgKZTCEFqQCgAEgrob") +
    <string>("IAF7I+fQiJmoEAIfkEBQcAAgAsAAAAAAsACwAABz6AAIKDhIWEEBCDBYmGgoiDCwUAC46Mk5KUlZCSAAMAFoMGgwGCAQEbE") +
    <string>("COFjwAxWBEAGwCJlooLO32yiReDgQAh+QQFBwACACwAAAAACwALAAAHQYAAAREAEAALCwUDAIWLjIiMAYWNjIcLlZiZkxCO") +
    <string>("lo+RlQWRkpWXgoIFoowrIaGkjFNIqZqbjkV1FhASAAMDBQGBACH5BAUGAAQALAAAAAALAAsAAAc6gAAAAgAQhQuCFoKLEA2") +
    <string>("CEBcBi5OPj46FF4sBkoqUjJeQkxCIiwukA5MFnpYTXDCdlBCvk0VnFpKfgQAh+QQFBwAEACwAAAAACwALAAAHQIAAgoOEgw") +
    <string>("GCEAuCAQMXhxAQg5GCjgCQkoICAZubggUAj5OWhgCanIcAn6acngCVkERMDYUAij4+hAJWXw+0AIEAIfkEBQcABgAsAAAAA") +
    <string>("AsACwAAB0OACwAAEIKDgw0AFoMFgguGgxeHEIqHlpGHAQCaAQIHgwKbnJueoJOVAI2bpJ8AoQSHhlAjA5aUg1Axl1ZfC5KP") +
    <string>("gxCBACH5BAUGAAQALAAAAAALAAsAAAdBgA4LAAsBAISGABAbh40AGY6RjgOSjgGJhxACABeNBQaHoJUGAZuNl46anAAFoQB") +
    <string>("EExeGhYobJGENrY1fTBySC4EAIfkEBQcAAwAsAAAAAAsACwAAB0WAABaCAAUEAAALGwAciBAFiISRk4yIBQGRCwAGkQEBiw") +
    <string>("WLkwsBCw2Uk5yQEqOlp6iTMY2wAFBYiwKaAF9MDSEQAAERiIEAIfkEBQcAAwAsAAAAAAsACwAAB0aAAIIBABAbggAWiIoAB") +
    <string>("AuFEIMAAgCEiAAHl4SGiAKEFhwAF4gRC5aCDZeIm4eCpacAqa6ml7KSXEQQBRmIXzcWMBCjmQCBACH5BAUGAAIALAAAAAAL") +
    <string>("AAsAAAc9gAAWAAABhIeFCwADEBALCwOIhA2KkocLFpWWg4WWm52HBQCOohcNlpGfoBeiLEwQBoKEA1YrMEQRhKIAgQAh+QQ") +
    <string>("FBwACACwAAAAACwALAAAHQIAAggsACAsQAwcWggAOjI8QAByLg4WEhoiKAwADAY+ClJWMBZEAC56fjKWpkZOskosWCxs3Mq") +
    <string>("kAVgc+TBGkg4EAIfkEBQcAAwAsAAAAAAsACwAAB0aAEAABCACCARACAQAADQ0GjJGGg4WHiYuTkowIF5qFg5oAn4sFEqGjp") +
    <string>("gAFABsBC4wLr5GYkSMkMDEGB6sRjFx8WFgyB5qBACH5BAUGAAQALAAAAAALAAsAAAhYAAEsCBBgAYABABIaHFjwYEKBGwo8") +
    <string>("ZGgQIYAAAFZA4bJioMKEPyp94nIBgMSEE0JWwkJCgAADASYcGMGE5YOHIRBQePjRQIQCET4mNGCRJ88RMjgg2Wk0IAAh+QQ") +
    <string>("FBwAGACwAAAAACwALAAAHPYAWAIOEAAEQhYOHABcFBYWLjY8LiY+EFhsAFgsDAAIACxeQiJIABImEHJqoihCnrKqtjI6DCC") +
    <string>("M7P0SWhYEAIfkEBQcABAAsAAAAAAsACwAABjTAAWBQWCwAgEIAyWQWAJAmkyM9No3OgPYSKAwEEEPzGbVYkWc0oCMUSofvs") +
    <string>("bx824E2UWkQACH5BAUGAAIALAAAAAALAAsAAAYxQAAAEhAKC8Zh0Yg0DgCGZ1L4jE4vycUUoDVGkhbmpmtcbZWA8HHs3BKF") +
    <string>("NxSi0GgagwAh+QQFBwACACwAAAAACwALAAAGPUCAcCiEBAbE4tECASyGkaQwEFhAFk+jECskEC/SYTNpHDABIUkWSxUWAgV") +
    <string>("AIZMMEANRQOAGAjQyRgsHQkEAIfkEBQcABgAsAAAAAAsACwAABkBAAGAREAoWC4BFWFgUhFAEFHCYCi0bYXbwFEIGC+63cE") +
    <string>("laoZBhQBAIFLJK5zltDkAIC8HZbp6mb0INHA15AFJBACH5BAUGAAkALAAAAAALAAsAAAZGQIAwAIBAhIOFUFhYCkMAohG5W") +
    <string>("PwAycXFslkIDoOmIxxYQIjOjBKgHLCr1cBlCa/LlwPCEdJEN5chGwMOQhEVBwYICE5RQQAh+QQFBwAEACwAAAAACwALAAAH") +
    <string>("UoALAA0QAAAHAAMChYSGiIoQD4OFh4mLXIKNlYo3GYaCABaGABcNAAKjAAWjF6GGpg6mpxAQAgGFEQCCihYSG4YQq8AAASE") +
    <string>("RC6LEFQYGACvCwoEAIfkEBQcABAAsAAAAAAsACwAAB1GAAQEWFg4LFxsLAA6Fh4mLBQsyjooOkRcDdYONiJU3AwAAioqhAA") +
    <string>("0IABAbAQCCogAXEKSlpRwAAoILAQehBhexs7TAACsroQWsCbQAGRCCFoEAIfkEBQYABAAsAAAAAAsACwAACGIAAwCAsGEBA") +
    <string>("IEQLgRIGMCCwAELCgDYcXCgQocAJiyCYBBCBIEAACDYUWDBgZAVCS5YkAGAAAADAgwIecEESoQFD5o4sOACgAUQBkAoAMGE") +
    <string>("wQsGbwIwASFkCCEoDz5QqvJgQAAh+QQFBwAEACwAAAAACwALAAAIVAAXBABAEAIEAQUGGABgEKHCAQAQ7Ch4MKEBBBMmAYB") +
    <string>("IEMCCjlYsXOi4kWHJDSQJFgBwgAFKjgQhQjDRIGVJCAw4oATgQyVBlyV7AljJkuDHmB0DAgAh+QQFBwAEACwAAAAACwALAA") +
    <string>("AIWgAXABgYYiCAABAWCCQ4UOGAHQcTNhhwEMAJTgItRDjYAECDEV8MDixgkCQAASQXbDQw8oXJgQgXTHQ5UEAEAQYhvOgYA") +
    <string>("ACREQcMvnC4wAKABReOFkAg0iDCgAAh+QQFBgACACwAAAAACwALAAAIXQABFAAAYMCGCwMsBCBoEKFCghVOAAgwoCBBgTw2") +
    <string>("MTyYcKELMRcNXKQIgAOEiQYWICC4cMAQCBsgmJzIocECJxc2jKxY0UkIDgKJEJlQgACAIRlO7izowOjFpwACAgAh+QQFBwA") +
    <string>("HACwAAAAACwALAAAIXQABABggEECDggIhCCgwcACBCBVYBAhQcAAEAwvGUCIwwAKAiQVdiCloAMAChAU9ohS45GTBABw9at") +
    <string>("mwAQKAEDEGUATQsmAIIhlM8swA4YJRAwEYArApEGbHjwECAgAh+QQFBwACACwAAAAACwALAAAIVQABGACAYCCABQAAFAhQI") +
    <string>("KFDABcqVHh4AYLDO4seQrQIgIoYAgw1bmy44aDDAQm1bFhZ4ALChA3WcABg4cIKIQ9VBhiw0wdHADodBoAAsmUAkUcBBAQA") +
    <string>("IfkEBQYAAgAsAAAAAAsACwAACGEAAQBYsGDDggsGAkBAsABAAYEABlyAkKACgAAELjYsMGLQHIwaHQqcQ0UkRAAcLgKAMHD") +
    <string>("lhQIBFjQAsCZDhgELAjhsCOBNCJs4kayAWBPoAh8sBWoxwWCmSoESUJ6ECTEgACH5BAUHAAcALAAAAAALAAsAAAhvAAEIFB") +
    <string>("hggUALCyAAQLiBAAAIC0YgWGhwg8AFNxaNuTAQgIAGBVbcoQJgwYIGAC6YBDBhwgaIFjwCGADAAIE1IUxYBLDCwEA/NjpwB") +
    <string>("EDER4QCAIAKFRjCQIGYazQwWBBgQMEGAxYUiBDzIUKBBQICACH5BAUHAAcALAAAAAALAAsAAAhjAAEIDACggEAABAdaGCgB") +
    <string>("wIaCEAouEAhhxyIeBQEIOAgAyUWDGxdsGDBgIYCJBhA+PHlyjQ0TFxACgCFgYqMgMQYQWOCDCYQFEG6a2ECgYAiDEN7YsNE") +
    <string>("QgAEHByUkXFDyYICAACH5BAUGAAcALAAAAAALAAsAAAhoAAEIBBAhwMCBAwZCIAgAQYWEAhdGAMBkkAuJAAYsALAACyMXAw") +
    <string>("gYBLAhosAMJQcahOjnhQ2BBgzkyFBgASknNhoMhLJCoCMvLwHEdCAAQAA/Q2xwsGBhgAUAFwpkgHFhIQEAEC4IDAgAIfkEB") +
    <string>("QcABAAsAAAAAAsACwAACF8AAQgcCOAAwYMALlwAYIAhwi93FAAIMGCAQIp1GJ24YGEBAAgQAAxYEGKEhAsWQ14U6GfIkAUK") +
    <string>("AQiBAWABqTJDOAAQIJPmAlFshmyAECDkAIMtXy68WDFDjJMpBwYICAAh+QQFBwAEACwAAAAACwALAAAIYgALQAAAQMAFggA") +
    <string>("CICQ4AMKAAAsWJEQ4YECBAGLGJBjI0GIAQosUWCAYUSKAFSwQhPAhYSGAigX8LBmy4eCAHDkMjoJD80KAADBCGIAwis2SBT") +
    <string>("YRLpA5JCnJCyFibGCYkGNAACH5BAUGAAYALAAAAAALAAsAAAhwAAEInCAwgMAFACAIhGBBQIEFFiwAIABggEQACEiIoZJAY") +
    <string>("cKGBVhIGsQiAAECEFJCiHDjxgYTJjgseCAQgEkApbRE4ZBBwoUYUC4AwJRHiwSBAhZ0GFAA0xujPS8IqOlHyxIGUafWXFFx") +
    <string>("4YINEAoEBAAh+QQFBwACACwAAAAACwALAAAIYgAXLABAEEAACAUGBDCIUCEEghsAJDwIsYIYFywCLASQ4cKFE5zuIOh4YYG") +
    <string>("Fgj5WIAihwQSEDQUkQFiA4ICfNVoGkFzAhSCmRGs27DwJwBEgNkMLvmGTM0OBCQMvLIyRtGBAACH5BAUHAAYALAAAAAALAA") +
    <string>("sAAAhwAAEEsAAAgIOCBSMgBBBhQQCBCA8WDAFAARUFFQo+BCCggAtOYzgUYBCAQIABAUYwITHBhEsIEAoAgBDCwQU/ftZkW") +
    <string>("CBgwAAsJA5gauQnQgGFADYUTJSIzc6ePgu+WaMlQAaZBSQ83ABjwwaYCwEEBAAh+QQFBgADACwAAAAACwALAAAIaQABABAQ") +
    <string>("QKDBBQcaGBSIEMACCBAAbGAY4MSTBAgAZFAo0AAVTk8smMig4cKCAhZuWLlxQIOJkictAAhBoYAfQGtGCgwAJQcATJj8ZFh") +
    <string>("Q0KHARone6ARQsOCaNVpEDC26QKOJCwUWZgUQEAAh+QQFBwACACwAAAAACwALAAAIYwADABgIQCDBgwMLALhgAaFChid4jE") +
    <string>("BQQAIECATFcDpRIYNHCAsuFCDyJYKDGB1MZICgEMAIJhz8NPJzAeMACzJ8FEiEqdSGDAAwEkw0c8THkAq1vGGjkiUBgx5CL") +
    <string>("FhQYAHCgAAh+QQFBwAIACwAAAAACwALAAAIagAFBAgAAECBAQsKAhBI0CBChRABXBigwIWFAgAGbFBo4M4mFgcYmMjQIQSA") +
    <string>("BUS+dAAQg4EIAgMUsuDyYE2jUiMXBHAA48iARKNIZWBAIOKbRIBy7sxwYYOXN2uUOlCYIcYFphswXrAAICAAIfkEBQYAAQA") +
    <string>("sAAAAAAsACwAACGoAAQgUaGHDAgAWCkAoIJDDwIEJFwgAUABBAgUIEDwcIHDRoowMbJg4KPDLlxUEbKgMAQHAAgcjuORYQ6") +
    <string>("qUSJIAQmRIRIpUDhEPEb5JBChGjAMAJHQosMDLGjYmGBg4EGIAQ4EwMgSNACAgACH5BAUHAAkALAAAAAALAAsAAAhnABcEu") +
    <string>("AABgMGDAAQSRHiwQIGDCwYoUGDgQEGGi+5UOGDDhEcHGwac+UKBY5COBSoCQMBlBptTpGzYsDDgYUJDpk4NsQEgAkI2jQAJ") +
    <string>("sbGhgQAJAAY4WbMGpYGHAw4cCNEgwACEBAYEBAAh+QQFBwACACwAAAAACwALAAAIawABLABAsOCFAQUJQrCwIEDCAgkBKKh") +
    <string>("wwAAEhAAgANjxSIyBAhlUqBDBYAOLPzxglIAx5IUJEwQATECQxAibU6eAvBjgsOAbU6e87OxJ0EujRDZEbBiAEYANNlqSLm") +
    <string>("26YUPJDRAIDCgQIEBAACH5BAUGAAkALAAAAAALAAsAAAhoACEEsABgQcECDSIUAACggEGBBA0ybPhQwQQEBwYWLLhj0ZMJB") +
    <string>("gjYeGHCxIYbg1zASBJiyBAbIQogwFiiC5tTp5wMOTCx4RtTp9js7AnACSBAQkQEaCiggAAbbNbYsDFA4sQVRCkCCAgAIfkE") +
    <string>("BQcAAgAsAAAAAAsACwAACHAAAVjYEAAAgAEBFgCAsOHCQoEEDQ4wCMDAQgQVEADQqBDAAgRFFrkwaGLIixAmAoQ80aGLjSF") +
    <string>("LbGRYMKHChRBcvJw6FWVJgQwTIVxgc8pUnJMSKEII4geQDRsGFFr4acOLlgwyFyCkaLHgBakBAgQEACH5BAUHAAcALAAAAA") +
    <string>("ALAAsAAAhzAAFAEDhgQAALAwAIADBAwIIFAyAMLDCgwYILADI2UFABI8aMGb8MOlGgAIMXQ0yY2ABmEQICYWw4cWLDRoERF") +
    <string>("CowUOLk1Kk4SzgYsADSi6lTdIYUuPARgI03gGqGCJAxoQ0tWqRSZcgwwYQIBRYyDCAgIAAh+QQFBgAEACwAAAAACwALAAAI") +
    <string>("cAABAFgA4MKAAAAKIEyIcACAARYICpw4EUICgQ4FWhDw5Q4EACFMDHkhQsSEM48qGAiTwYmXIDYAVEhQgIGQIadMvVmSQWC") +
    <string>("AAAu85AS0BMaCjwptrHkzJCZCCRIgZFjixYZTgQsyQP0I4QAAhAUABAQAIfkEBQcAAgAsAAAAAAsACwAACGoAAQhcAKBAAY") +
    <string>("EQIBAMUMBAgQsHCwqcOBEBgAMAAkw8cUaMxQMmhixR8SIBoUEIQkyx4YWNk5IKRiRgoGHIqVGJtJi4cMDBAAA2TwGK0mHAg") +
    <string>("IMZTLQMosJBgwJPAYRcYsOGwJ8SDUzUSjEgACH5BAUHAAcALAAAAAALAAsAAAhoACEMWACgoEEBAAgaLIgwQkGFBQcAQDBg") +
    <string>("A4AAEABYYPHliQUDDxgMGfLChoJHdwAQCBLCCxsvQxCcSIDAgUhSoxJpiSARQIENNkqd0pkBIYQCA0y4tGHDQEGHEDKMZOo") +
    <string>("UgMOFDRdaCAgAIfkEBQYAAgAsAAAAAAsACwAACGsAAWQosAGAwQUDDAokqBChwoMGGzRI8BBAAAAsvhQBUABAhyVaXrw4Me") +
    <string>("kMggwMTLCJ42VIAhcVDkBgYKORqURrJFzoCKCBjVKkAGmJYQGCQgZDnNiwkQHAgIQAaC61cQHAggAWDA4seBBqQAAh+QQFB") +
    <string>("wAJACwAAAAACwALAAAIbgAHFGjQoACECw0gAAAQgKGFhQsHLAwAoWFDAAgYFoC4kYWVExE2QlhCcogLTl8ILGSgZQ+bJSdc") +
    <string>("ZNwAwEQpUo7WiBBQ4KIJQI0arYkhYcGAAAsCDHESxAYEAgcIPARgo6pTqAsNHEy4sKJCAgEBACH5BAUHAAQALAAAAAALAAs") +
    <string>("AAAhrAAEsALBh4IYAAwEoXBggwMKHACAMcIjgoQCHO6ywuKAwwxItS4Y82bQDwQEADLQY2rPkhIsKCCIAMFEKUyM/IxYWmO") +
    <string>("mnEaA1GzZE3GABgo0hNmwMAGDgQAYABTSoSLq0qYUIDpY+XCARQEAAIfkEBQYAAgAsAAAAAAsACwAACGsAARQYAAGAwAsQL") +
    <string>("FwwaLAgwwUGAzCcSNHgjh0jDDQAkGGJliVLxEzaYeFAgQxaDBnS4oLHgQMALJjw0wiTnw0AIgBYAMHEm1J+1kgAMAAAAQAP") +
    <string>("bNgIImLogBUWDJpQamPnRAsFIAYoMHFBQAAh+QQFBwAHACwAAAAACwALAAAIbgA3ECgAYEAAAAsAQAiQEADChAwBNHDgsGJ") +
    <string>("DABssAmCxAgGACw6XaNGyZMyjHRkBTFhjyJCWJzwKGIhwwcSaRpjWbIAQAYKABhnW+HmjE4LCARwC2LChwgYDhwOQAjDBwA") +
    <string>("ZVDgAIIKwokKBBhAEBACH5BAUHAAIALAAAAAALAAsAAAhjAAEI3AAAAoQIDSJcgCCwoUOCDB06zCCQIQsWFRwu0bImyp9BB") +
    <string>("wYwDKDFUKI1V54AMACgQIY1iRz5aQgRwpo3b9YMIMBhwAKBJkTYsEGAwAAAPwVmsGEig4WfPw80lApAQsOAACH5BAUGAAgA") +
    <string>("LAAAAAALAAsAAAhwAAEIBNDAAIABSDhZARAAQAEAGQ4CGMFC4ACBBx4+JNAQAIEMAzhAFChgyZo1WgjdmWBgQAAJWgwlWjO") +
    <string>("mhQEDLzOsAZTIz4MLCxoGEKBFC0oGAS6SZGDChgkTBRZIBAAhQwcTEB14HNiA5AELBZIGBAAh+QQFBwAHACwAAAAACwALAA") +
    <string>("AIYwALABg4MEADBAIALCAI4ALDAAoNPGQ4cIUEAAQKaAxwQcubN2sKPbHAUIshR4DcFEEAoICBDB4TsenAAADEgUu0aFlC0") +
    <string>("yZBDjBMMGBAYMGCCwMgZjCRgSgBnwcTkgQAgeqEgAAh+QQFBwAEACwAAAAACwALAAAIVwABCBwosEDBggYHLgAAAUAEgg4A") +
    <string>("JCxQYEUICQIsDLSg5U0jP4RcLIAwYKEWQ5ga/RFJcIiXN2xgZChg4ILBIUOWaLFQoAHBnwINAF0QgGSAowMvAAUQEAAh+QQ") +
    <string>("FBgAJACwAAAAACwALAAAIaQABQAAAIACABQYBWFBowAHBhxEAGMhAkQEBghAaADggIocIEQQCDCToYMmbRo36KFiw4KFJTJ") +
    <string>("j+VDBQAMAFAUOcsPFi4kLBnzaGDFmyAQCCDRoLBsgwgGBTADUFLIjQskBCqBASjnwYEAAh+QQFBwAEACwAAAAACwALAAAIa") +
    <string>("QABCARgAMICABYaDCxwcOAEgRAEZNAg4oLAAgAgADAhBIgIDggXWBC4hA2mRmcqCDRwoUBJUpgIJXAwEIANEV6WwNgAYSSA") +
    <string>("AjeHDCkwwAKEAAM2DFjQMAAApxkHQh3YIICBnzUBbAAQEAAh+QQFBwAJACwAAAAACwALAAAIagANGABgYIGBAgAQAlhoYWF") +
    <string>("CgQQDADDxYkiACwsLbJgoxMuQDQMuRLBgQcAQL5gwWQkhMSGBF14aYeqDQCFCEyaGDGFRYSBGAgFM2LBRAMEBCAMXOASwAK") +
    <string>("GAjAYsNFiwIYBShxAcRnjqMCAAIfkEBQYABgAsAAAAAAsACwAACGkAAQDgIBBAg4IAFlgoGEDgAgAbCmQwMWTIAAEALgBom") +
    <string>("CEGGy8mCAxYQBLACy+OMDF5iPDFED+Y+hx4CKHhAABChMAgeHODQBMwQgiA4LMAgAMFLQhQmBGChQEQWEIgAAACQwg3Bd4M") +
    <string>("EBAAIfkEBQcAAgAsAAAAAAsACwAACGgAARSIAAACgAAAEgIYIJCgQYQJA2TIsGQJAxMXGCbMkOMNGxEmGgxosNCGk0SOdhy") +
    <string>("ImNCGjTWZwKyEAAEhBAYGhKyIGGDAgAwXLCQ04MBgAQALCg44uoBkAaFJFxwFQFKhVaEQFgQICAAh+QQFBwACACwAAAAACw") +
    <string>("ALAAAITAABCFwgsKBBgwQNMhChRUuGDAMhADBhwtCbEAwIXChow4YhQz4cWChYQIMNLZmwjCwoEQKJkCsFtkwIoMCBBQEGD") +
    <string>("sx5sKfAAj4NBgQAIfkEBQYACAAsAAAAAAsACwAACFQAAQgcSLCgQQAGGHhYo0UDAQEEGYhIBEgEA4EFBJqwwWYPjAEBIgwM") +
    <string>("wTETkwsFF1yoUITDgAEDVQYAcACAhAUZB2YkILBmzoEWZh4UGGEBAAsCAwIAIfkEBQcACAAsAAAAAAsACwAACF4AFxgoAAA") +
    <string>("AgYIFCxy4UDAAQgAMD3TosGaNBgYSBCBkIAJQIhsaCkawAECDiilbPCwAUEDASgY2zETyAYDkwxA+rJAosLLlQwgsg5IccP") +
    <string>("DhQ4IEbQKY4DDAgYIrHwYEACH5BAUHAAcALAAAAAALAAsAAAhhAAEIzHDhggUIABAKFKhiw4YFGwAEAJDBhB9ANkwsEFgAA") +
    <string>("AETgBodEdGAA4ACC0LY8MFkBEcADgCYMNEGUYiICwcILFLEgoWNBhAi2ChwgUIAOgUQzbmw6UaUCZE2NbAwIAAh+QQFBgAB") +
    <string>("ACwAAAAACwALAAAIXAAXAChgIgMAgQASKrRhA8IAAA4IKGTgJxFDAAYVdljjR4iJhAUsYLQBw4fChAciEDARiI8FCw43IIz") +
    <string>("wZMcCAygBHDi4YYLIgRAQCERYAGTChycHIrzAAQDSpAEBACH5BAUHAAEALAAAAAALAAsAAAhcABsUKGDDxoIBAAoAWAgggx") +
    <string>("MvMCAwZMjgTSIhIQAMKHBgoQkta0yYQKiwoQ0YKxYuWNBgQAQTNhBBYbiywcIGX05ILLAg4UIBBHwuLDlRAgKbExkaRSq0Z") +
    <string>("EmEAQEAIfkEBQcAAgAsAAAAAAsACwAACGEAAQAoYMNGhwgAHAAYAADhEC8+CgAIIFBgiDWGgjAQqLBhCC1sTBBYAAACAAkZ") +
    <string>("TJjIUKDlQoEmbCBi0tICgAUDGljI8OWEAwQGTA6siEAiAAtGKyq9yXSpU4UDAlC8IDEgACH5BAUGAAIALAAAAAALAAsAAAh") +
    <string>("lAC0ACDBkCIMQACQAWLhwyZ4jJgYsKABAYAAtDy8AuBAAwIAIAJYsyaCxwACGBE4uFMgQABREPixY2ADhpAEAMsSc2FCgJk") +
    <string>("OKARAcuKCS4YIARSEAIKCUwEKnACBQpDhwYEeGAQEAIfkEBQcABwAsAAAAAAsACwAACGEANwAosGSJCA0BADgAAGACgCWGp") +
    <string>("iBUCCBhhiFecmQgwLBhxSFDAGRowKFBQgAEOliwIGBBBAALGIYJtAKAgQEnAwSAcqaCBIEdGSZUsPBl0JMALAC4cLSjUqZB") +
    <string>("Yb6MyTAgACH5BAUHAAkALAAAAAALAAsAAAdfgAUAAEteQxoFEgAFggFLe16Iio0ANl4mDBuCC4yVNgQMBQscERcAHQcbGxA") +
    <string>("AEQIBABBtdYOCg7dhXyEFFhYDEL6DASODvsALrAAGyQEIFwsDgwu3t9EAAdMWAAsCEYEAIfkEBQYABgAsAAAAAAsACwAAB1") +
    <string>("OAAAEBS2xeLxsAAwAABRJDhkMFCwGMABImDBkEGwsQEIwRmZudgwiMF5aMBJUAaWAWABYCqIJpX6eVnqCCC4y+AAKtjIMBB") +
    <string>("QAQlQHAwMK/q6qMgQAh+QQFBwAEACwAAAAACwALAAAHXoAcAA5DbGYvBQAZAAALGUNeXjYZAxYGAAcAJiYcGQsFAQELCwAD") +
    <string>("m52fAYOMCIyMA4wLdT8FFwAFAwuXI3VWCw4CpBKuABAbqgCCDrCMEI2MoAOwiYwCjaSkAsy3o4EAIfkEBQcABAAsAAAAAAs") +
    <string>("ACwAAB0WAAAUDL157QwGCB4kZNkNDLxkFEACJAJeYiRaYAAuWmAMFlaOcoXUwARwAGxGXBQl/OwahnJietbW3uZefnBKXAq") +
    <string>("QXA4EAIfkEBQYABAAsAAAAAAsACwAACGUAASCQYMMLHBsZACg0ACCDDRtDbFhYEMACAIYQFgCAoLCjQIUXAAwA0CAASYUIQ") +
    <string>("IpUeAMMDAQrCgBYUKDAgh2EWCwYaVEkxwoHDAQw6fFCBAgCFEK40LMjUQgQIgDoqbGjTAABAQAh+QQFBwAJACwAAAAACwAL") +
    <string>("AAAHVoAAAAQmQV5DCwMACxaCJgw2No0bgpUDDguCARGCEAAGAAWViwIAAZ2foQBMWBYLJJwRFwIQX30ICAWiBwUGniMTuru") +
    <string>("9AJyjqgADp50BAwIBF5XGpZ2BACH5BAUHAAQALAAAAAALAAsAAAdNgAAAHB02TjYXgooAJgwmNguLEJGCCwKKHIuaAYsBA5") +
    <string>("oATEgOKxugdXUOAwORFhaRBggHCxuTABOaEQCRBQiUgrq8BQWKAcYAEAAFAYEAIfkEBQYABAAsAAAAAAsACwAAB0uAAAAIA") +
    <string>("BlHJhkCgosWDI4AF4IQghmLC4sAAZgWmJqRAAsRAAWaAEw7FjAhlwsLin9nAAaYAJMcEw+apaCegqGjmr+kggOYk4WWgoEA") +
    <string>("IfkEBQcACAAsAAAAAAsACwAACFwAIwAAcOBBBxMbLHAYeEFghwEAIDYgsHCggwADMS4YWGBgxgAbAGwE0NFjgIUhrIxo0AC") +
    <string>("iSAgAKhAqwgGjAAsWYAJYIdDjwAUNPDYceGBgBgABQPosYKCkz6cBAQAh+QQFBwAEACwAAAAACwALAAAIWQABCLQgUOCGBQ") +
    <string>("AgLDAgsEDBghAAICxYIMKAiBMbWmwAMUOBAwACLAiQgInDFREANBAg8MajEQAMKJyZkAVIAAggSjRQIIBAhAF8FswgkqfQk") +
    <string>("Qs2ALjwE2FAACH5BAUGAAkALAAAAAALAAsAAAhaAAE0aABgA4ADBQAASKhQ4cCCBx8aRKiwAIGGEg8mpLjw4gUAAQCsIPJg") +
    <string>("wggHEwoQBGCFEIICBiaEZNiAxYQFKwdYaAihQIALAwIIEABB4YKdC1c2PFpRKYCAACH5BAUHAAIALAAAAAALAAsAAAdQgAC") +
    <string>("CgwAFEBABhYeJAAaMgoaIBAQBBQAXggMFAwCcAxCDLBwRDQOVADcrBiMLDQAWggtpfa6ErgEsN5aWAZgGl5mbnZ0Qmp7Egw") +
    <string>("sWoMuEAIEAIfkEBQcABAAsAAAAAAsACwAABz+AAAALgoWCCwEChoUQhQWCDYOCB4IFG4aNhj4bBhaFAysOAJudn3xnCBGLg") +
    <string>("jsjnoYBAAMAlpirt4KZsYIcgoEAIfkEBQYABgAsAAAAAAsACwAACFAAAQBoAMACAAEDIAg0iFChwIcQIWYAsEAgQYYJI8aI") +
    <string>("AGCAQAIARiiUwUHgggIALgiyciAih4pMWFR8CcDBAI8RBU6smFMnxQACBwCFEIBnQAAh+QQFBwACACwAAAAACwALAAAIWAA") +
    <string>("BCBy4oEGBABwGCix4kAMEhQQNBoDIEOFDACN8ABgAcaBGjgNDCLoBAQEAAgAKAFiwwMoBAA0AbHAg8CJHCAUMBIhgYWOABS") +
    <string>("sNCNwA4MJGADh18tx4ICAAIfkEBQcABAAsAAAAAAsACwAAB0yAAIIAEIMNgwGDABwAEgOGgyEDGQUQAwILC48Wgg0LAAEsQ") +
    <string>("hKCBYqhMIuKPn0IiqdWB6YACIkFAgWJAZeZmwCaAJwADZQPgri6vJqBACH5BAUGAAIALAAAAAALAAsAAAdEgACCgxEWg4aD") +
    <string>("AAsBggaIg4shBASCi42CkoI7N4mDAwA3KxydPmcTBYYFnUQIBwAQiRcNAIwAAxADCxMBsLadl5CfiYEAIfkEBQcAAgAsAAA") +
    <string>("AAAsACwAAB0yAEACDAAWEAIKGhIILhI0Aj4eLkIORAEQxHAANm4MQCzIjHJErRFgLCwYLnwAEABssgwUGBhcLHAGIgwOEvB") +
    <string>("cDjQUHuoSGuIIAvLuBACH5BAUHAAIALAAAAAALAAsAAAdGgAABGwCFHIWFg4iHiIUFiI8ADRCOhZONiEwcAQgLiZmbnYUkP") +
    <string>("juFBg2SAxsWMCwIAAYAFoieiRABAZ4BlLe5u70Gvb2JgQAh+QQFBgAFACwAAAAACwALAAAHQoAAAQIQAA0DAImChIaIiokW") +
    <string>("iQaPC4+KAZYATI8BlYkjVhOJCwQAKz4jAAKZDRWiAKSPDRABnYKFg7i4jIeXu4W9gQAh+QQFBwAEACwAAAAACwALAAAHToA") +
    <string>("BAAMBAwACEAAXFwAAgo0GjQgABY2PDY2ZAImNlYaNI0QHnY6DACtWBwefASsrowANlZOWqqwLC5yChIaIiosAC5WlsY0Cmh") +
    <string>("wRAAgCgQAh+QQFBwAJACwAAAAACwALAAAHVYALAQAABQeEGYQBCxCLFgsFAAKEhYcAiZQAEASUBQEHA4U+PgYLAIOWAExQm") +
    <string>("YQjJJSMAAuMASsTABuZtaYBi6cCBwScCwgAAxCKGQOml8yDAAYGAIEAIfkEBQYACQAsAAAAAAsACwAAB06AAIILggUDAAEQ") +
    <string>("gosAAgAFi5CRjIgAh4SPhxA+PpKYhgBYUIsGkCMrBxsAFoOCIQcTBgsbBRAQkosDCIwBCxcElrWgHBeWAQHAxQAQvoEAIfk") +
    <string>("EBQcABwAsAAAAAAsACwAAB02AEAsAAAGDAwAQggCIigaIARCJEI+FEBcLCxYAg4QDApyERCGeAAWSnGk/g4KbEhAFAZOTnR") +
    <string>("MLDZ2huoSEsQAZBJCXmQAaF4iNlMIXgQAh+QQFBwAEACwAAAAACwALAAAHT4ABAAALFxcABoOKABADgooBBYoLgw2DkpSDE") +
    <string>("BAFhwMATAAFkpKfg3xCmpyeAAeZjKuig6+bnQCPgxkRABkXARAbjg4BAQMDApS/wQHDxYEAIfkEBQYAAgAsAAAAAAsACwAA") +
    <string>("B0aAABEAhAGEABkEARCChwAFABKHkIcDgpYXBQuHG4QkOw2OAJuCfCGOGRkXAwiiro+vFo8QBRCGHIyEtgWGAyYZAQEXr4e") +
    <string>("BACH5BAUHAAQALAAAAAALAAsAAAhTAAEAsAAggMCDCA8SNAigwIWEAhAGcAgRwIgbBgQuEEhwAJNABzcO7CABAYAGEDSKPF") +
    <string>("iAo0YIDwc0GAAAwoIAAgZMbAhgQcYLEAwGGLpAAEOhAQEAIfkEBQcABAAsAAAAAAsACwAAB0eAAAEFAIUDAAKFAAUBigAGg") +
    <string>("oKEhoiFhBeSiocCLCONiYoZAGB8DY6FogkskKcApo6ihwELExCRABOWALGCC4ICtoW1t7kAgQAh+QQFBgAGACwAAAAACwAL") +
    <string>("AAAHR4AACw4FAAUQAIaJA4mNiRcBAAQBCxCVh5GKAJkAjAAkD5WJC4WbfGijpQGUMjEFE4mZFomFiIuNqpS0AIiksbqKAo2") +
    <string>("+mwGBACH5BAUHAAQALAAAAAALAAsAAAhVAAMAWNAAgEGDBQQAKDDg4IKDAxg6hAgBgIWDAAQ2BCCDg0ELAgssBCAozUYAGx") +
    <string>("wS8QCh4QILBQ0KfAigIQQBCgsUmBnzYICLAgdmxPgw6IAFEBYEBAAh+QQFBwAHACwAAAAACwALAAAIUwABCFwA4ILAgwQDF") +
    <string>("IAwAYJDAgACCCgAYAHBgwMvYiRIwkDFjw0AeESEhcMCAxYBDCCIRYYAABQ/CixA0SNGmREDJFzYcCAACBEAEJAYE2cAnQEB") +
    <string>("ACH5BAUGAAQALAAAAAALAAsAAAhVACFECABggUEAAAhGQEBwQYOCARZYENjwYEKEGBEuyBhiwgALFgxsyCiJxgAAJwUgFMj") +
    <string>("lwcqFDRsUOKnRAkKVES0cCBARAEUBBSC8ZFhwZ0+KBRcEBAAh+QQFBwADACwAAAAACwALAAAIWAADFGgQAAAACAUPGoSAAI") +
    <string>("CFBQYXLJhQcIFAggsjLrAAAUJGCAIihgQAkQMiGQIIGDRYcEOaCQISFojQMGEAjwlZJkS4cCSAAitn1gwQ4ECBCyRvLrgQI") +
    <string>("CAAIfkEBQcABAAsAAAAAAsACwAACFEAAQQQAKCgwQMGFzRYwHAABIEQAgQQSNBgwQIAICywCGDBhAAcLG7siGgCAIwdCW7s") +
    <string>("wnHigAAWEGywAGADx5sGXT58GSDixIEPMS48GeAChIAAIfkEBQYAAgAsAAAAAAsACwAAB0iAAIIWAAEAB4KGAxuJAxCCC4I") +
    <string>("AkQWGiIKLjY+TFBGTkQADghB2o5GIAaJSB5cQp4WCBQCbCwEBBa6HhaKSkrmovKOTFpULBYEAIfkEBQcACAAsAAAAAAsACw") +
    <string>("AAB1KAEQsAARYQCwUQAAcAjQAGAYuOjZEDAAWRjQMCl5kAigWPkYyUAANpBQeRDZcQGwFSELIABLICnAALiAEDihGhuY2gh") +
    <string>("IOcg5+XxISGiIoHFgOBACH5BAUHAAQALAAAAAALAAsAAAc+gACCg4QAAYILAIkNhQKFhYmLg46CBwUWggWCUgIRhYcARAYG") +
    <string>("F4OYhgAGioIZjwCUjweongWlAJ4AA4SaC4EAIfkEBQYABAAsAAAAAAsACwAAB0aAAgYAFgsAAAKHhwMXhxCKh4WHiY6QigU") +
    <string>("AhgiZk4qPh0mDHAILAgGKKAAHAJiaAKcAEAsWEAGtsIcSkIaWrQCbA5Ssw4aBACH5BAUHAAQALAAAAAALAAsAAAY9QEBgAS") +
    <string>("gCChdjYHAJFAsFwAYAOQqJRqzAWLQYB0Iv9RgrVqPDIsXrFGCLh4OT+BY+o1PuGF0HXAQNQkxOQQAh+QQFBwAEACwAAAAAC") +
    <string>("wALAAAGOkBIYAiYABYLgBJggCgLF2chsHwqqciqtnhMakmDpcWrREAulsYiILhswtrIkbqtepvPKKCgxO/1BUEAIfkEBQYA") +
    <string>("BAAsAAAAAAsACwAABTggIIoDIAAWEKgqtIjuSJqoXJ6pKLw2jRgyWaGw2CwcpI1IyUO9ciLLk6ayQACLholXAJQuxBEkBAA") +
    <string>("h+QQFBwAGACwAAAAACwALAAAFO2AAbdsCFIsJREDrIi4QtGkMsTEAt0KLx4iCoLABFHuQEeAA6LkggQZg8AygAISWiGRCXa") +
    <string>("rU2LZ0qoUAACH5BAUHAAcALAAAAAALAAsAAAU44ABAgABsERmcKbBGCyDP7rzGtXzJwYvjq40Mt5sZCqSRbBBYrAAiAIFmQ") +
    <string>("qkAsFoWAIQ6ZknmIgQAIfkEBQYABAAsAAAAAAsACwAABTygASyA0AAAtFxAwKKDSLooEI9lAQGFMAy2Wm0TECyAgEhSIBRG") +
    <string>("dDwfEPjc9X62wmIzq9GQWm6rhAVvFyEAIfkEBQcABgAsAAAAAAsACwAABTogAA1ACURBtJiAYAoQEJTryNakiUblvgK/QiH") +
    <string>("WKgAssQihFCgcSsQZzDIzUVktrKtkKQ0BGyMrtggBACH5BAUHAAQALAAAAAALAAsAAAU3IABAoiGKRwCty0kCxykWgCPHMu") +
    <string>("1E8iUGp0iE9hvMZEBRZNACJEVNwFK1MZIEA6oVIPD9Ts9ICAAh+QQFBgAGACwAAAAACwALAAAFNiAgjsMIFOMGLKc5BgEAi") +
    <string>("YW1wABBx4c5i4NFwSFAAUovoEugNOFiv9HCArgEoqTcVQawXArXEAAh+QQFBwAJACwAAAAACwALAAAFOmBxWQAEnOeSlsQF") +
    <string>("BEBxDqgRQEKMvns8lr1FwQCgHUjF2AFFO9kKkNsJMoD1EIAlbOkjmXooFaQFCAEAIfkEBQcABwAsAAAAAAsACwAABTpgAyx") +
    <string>("LNhQDcAEsCQQimQFE8KYAVOQ7y0K+0im1AuwMjQvkYksBfQJf7dXzPUewkRCl0r5iwl9w8Q0BACH5BAUGAAQALAAAAAALAA") +
    <string>("sAAAUwIAAMo2gGUABABVssAKyqwLadaGumwCzaJsAlGAwEhsSTwASEEQvB5WqnYrF+t2QIACH5BAUHAAQALAAAAAALAAsAA") +
    <string>("AU4IABYFgCJiLgMIkQCQ3HGZwEsAlDY9lIEP5Fu6AMGdJcFDHAUFpLLplCU20x1tVuOV72KSr0tMQQAIfkEBQcABAAsAAAA") +
    <string>("AAsACwAABTggAAxFAY0iEAjLApwpObZF6h6DWM5LsYkXnK5WEJR8AkNqKRqsWqpADMbUQV2igLQJy2UBP8AlBAAh+QQFBgA") +
    <string>("GACwAAAAACwALAAAHRIBEBQABEgILCwCEUIOKF40BAoQFEAAWiAOViomEigAbngAEFp6cB4oBF46NAAWsj6iho6WtoYoDiA") +
    <string>("ALmZ6aipe7vpqBACH5BAUHAAQALAAAAAALAAsAAAcxgAALFgMQAAEAiYoAhoiLj4qNXHwXkIg+PgWKG4aakJuGApCcn48Gp") +
    <string>("YmGn6qMh62KgQAh+QQFBwAEACwAAAAACwALAAAIPQAJCBxIkEABAAgRGgBwYUHChQ0TJgzRIOFBAAEADBCQUeLFAkTCIIRg") +
    <string>("EQABLIFKYkR4seNKkwVjypwZMyAAIfkEBQYAAgAsAAAAAAsACwAACEcAAVwIEACAQQALDCY0OLDgQYQPCzxcKJDgQ4cKIwK") +
    <string>("wsNGgxIcPCVwAUGABBINIuMA4cFCkQSyBWLYcCWDFR5ABIFAMMGFhQAAh+QQFBwAEACwAAAAACwALAAAHRYAAAwACEACHAA") +
    <string>("WHg4WIiY4LiBeOAQCRjpaZiJeCmQiaiZUBlTEFppiPjgIAlSQNiAMDEbBQaRYGABEFAYMjXHwrupUAgQAh+QQFBwAEACwAA") +
    <string>("AAACwALAAAGM0CAcCgMEIkQ4sB4HC4AyyYgSbxYhFeBJCCABBZGAfEZKEgjQ3PSbD4OIItMe+qEGm/IIAAh+QQFBgAHACwA") +
    <string>("AAAACwALAAAGPMAAAGAoDAVDgJBoBCCHzWdySh0uBJHLMrkMcASCpSUJARTGSQQAvSAMl000YLEsAggP8yC7DYTKTQBlQQA") +
    <string>("h+QQFBwADACwAAAAACwALAAAFMCAQAAZgnkABmWOJmosIAxn5zqdlmRAC7DfUQkDgjU7H4AUgQAYBsWOsZtoEVCxACAAh+Q") +
    <string>("QFBwAEACwAAAAACwALAAAGPEAAIBC4CAPCY/GYHC6HTWY0KmAWAAOAQSggHguCBUAAAZSFnGnSYAGEABdIoOxIXtuWLCCd5") +
    <string>("GMBETEcQQAh+QQFBgAEACwAAAAACwALAAAHPoAAAwEWgwECBQCKhIqChIONAIiNF5GSiYqVAweWi40GiokCnpidAZ0AnIqT") +
    <string>("kayJmAuniiELAxELAIwAIVCBACH5BAUHAAIALAAAAAALAAsAAAhQAAFY2BBgAAQAABBQ+GBBIEGDACboUISwAEKEECq4CYU") +
    <string>("RAAEAARDWwHOxJEILCEwKJBBygcmGKku6tAjgIACaHQkMLGiTpgcCBwsuaDiQREAAIfkEBQcABAAsAAAAAAsACwAACGAAAT") +
    <string>("TIAABAAQAQKiAgURBAAIcQQlCgQcEhRAAIMBzSVMVCQ4sYLIUiM8ACh48ymqhpUlAAhAEbClKgwHBgwYMQLAgAcEHAw4YRG") +
    <string>("vb8WTBowZw7IRi46fDhgAUNLXgEEBAAIfkEBQYAAgAsAAAAAAsACwAACF8AAQAIEUDghYICByw4AEEgwgAWAFhQyPCDjhQU") +
    <string>("HixsKMFAl0+WUngYACBAQQNgQF1CMYEkSZMfpDQhIVAgAQgDOEA48ICDwAI1AVwIapAoAKARJVJsCGBAw6QTFz4ICAAh+QQ") +
    <string>("FBwAJACwAAAAACwALAAAIYQABWABAkOAAggsACCgAwAAFggUODhhggeEEgghGOCgYsYkUFAsORCgIwIclUGo4kASwYIUeT2") +
    <string>("goMFQYIMMDDDiIxCgoIADBDwgAEFhJ8gDEAQsEEAXAUMAFhQwNAIAQICAAIfkEBQcAAgAsAAAAAAsACwAACFYAAQgUuOGCw") +
    <string>("AABBgJYQGAhgAIBCgyUICGhwoQhQsg4cFBhjSw6MBgwsOCCBYFuQllK8YBABIEDMhjpdEiGxIEQUaRAQeEmgIYKL8K0cNIn") +
    <string>("gKIKGS4MCAAh+QQFBgAEACwAAAAACwALAAAIYAADQICwAECBDQASDkgI4MIFhgwDJHxg4MICiQAKrhAQIMCCBQ8ZbqSQwAD") +
    <string>("EhDLUCKpxQECBARwS0vgUqsuEAhYsfATwAVEllhQFxGz4gQYFkwwtQBBI0CDCkyscnAQQEAAh+QQFBwABACwAAAAACwALAA") +
    <string>("AIXQABLABAkOCCgQMLArhQcACEggUSNgQQ0QIAAQoJMiTocAEHiwdidLiosQBBKYp6POAggaBFAIpCQXpAIUSGAhAOAAijS") +
    <string>("M6DATZx6hwBgsLKlgBeLohAcYFFjAQDAgAh+QQFBwACACwAAAAACwALAAAIVQABXAAQgGCBBQUFEjSIEAAACA4hFACwwCEB") +
    <string>("ghUBXAyQ0eFACAkdNozoUCRIAAk4UGww8WHBQx8KNHDYEuQnHAYMQATQYGeWEhQMAGhZssOBgjtNBgQAIfkEBQYABAAsAAA") +
    <string>("AAAsACwAABUFgsADLBQEWoAIXcG7bqi4NILiQyFrLKAMZgGGR+gEkpBagsBqUTsXZqHGq1Zaog8pwdKkQFA6AOi5rY5vBal") +
    <string>("IIAQAh+QQFBwAEACwAAAAACwALAAAFPyAABQEwAFYpACJpomWwQBBQAFfNpqxJzoBIbyhbsC4by8bXQyqZll2JNfiRpiLTY") +
    <string>("TB4CKY1yMV2iEQBDVYpBAAh+QQFBwABACwAAAAACwALAAAFNCAAFGJpDsMiksAAXJComu0bA7N4jyXLRz2R4CLgNCwxF4po") +
    <string>("RNZQMhottxJdAJBJFSAAhAAAIfkEBQYAAgAsAAAAAAsACwAABTRgAAAWsFjDMKZjGTiAWpjSVVpia6Iqac6L2k0EFJJyJ5b") +
    <string>("vNVoUbcfRCpCT6qQLq5MGtYQAACH5BAUHAAQALAAAAAALAAsAAAUt4ACMAbCMZpoio3iOZyCMM2q/OMACInTDOpsQBbEALi") +
    <string>("KSSUZTjpCo0gu4agFCACH5BAUHAAIALAAAAAALAAsAAAU6IAABCwAEZiqSJmoWALEULnoANAoXl7WZJVUuFRioRLvepjQY0") +
    <string>("VqAm8FkuIwcuNjMBUAAqtdh0rcIAQAh+QQFBgAEACwAAAAACwALAAAFOCCwAAFgRkNhiuSKFpsZQMAF0IC6LMJSmgsdz7cK") +
    <string>("Ag+GlamQ+iGUQIAASs2RFhZqoVTY0my4wCgEACH5BAUHAAYALAAAAAALAAsAAAUuIFAAAWCeZmkWF7kAAiqScn0G72sFQiy") +
    <string>("2OIBOBRgQTi+TZYY62ADLkUwwQBFtIQAh+QQFBwAEACwAAAAACwALAAAFOyAgAktkFYKwBIEgGhkQjfMoltZ1BQAEiQVIgW") +
    <string>("RCqQCB362YWthGOBQv4HwCDtPqc7AoDJGjgI7nA0JCACH5BAUGAAQALAAAAAALAAsAAAUzYAEEwLiIYqmWiwVwa/sKgbACM") +
    <string>("kcXRQRktyDOpQMIBAtVMjDI0WxJCGCgJJFcwpuzhgsBACH5BAUHAAQALAAAAAALAAsAAAU5ICACCxCNKGmiBQABAXCkYvm2") +
    <string>("zbhZiwBcv4BQ5BukLrEToPXyAZEvEkTIiVlGsQXksthERa8rTRQCACH5BAUHAAQALAAAAAALAAsAAAU3oAAI0AVASwAsBQQ") +
    <string>("EBiDPtLrOImmi6gIUm1OuJAMKR0SaLKIMFGS25iLl88mml4ErYF0tsltrCAAh+QQFBgAEACwAAAAACwALAAAFLSAgjuIQkC") +
    <string>("hgjucYjceVCiIEFGKM0qclygiAbldrASCDFIAmWKAgRiQgYDwaQwAh+QQFBwAEACwAAAAACwALAAAFLyAQAGRpjqQALCSrs") +
    <string>("ivELm8rr0CBiGWNArUYC7IqiAKjxWLQMjlPJZig4fwFF5AQACH5BAUHAAQALAAAAAALAAsAAAUtICAWQABAYrqkJcsOrZvC") +
    <string>("ZiqIQUC6d6nLq5olNUwFUIBLCrEoioKiYhEKkIpCACH5BAUGAAQALAAAAAALAAsAAAUrIIAA5ECeKLAEAlAs6JHOgEyrrAu") +
    <string>("bZxHTq1ZQdwqkhi8YYGBJGQFGJZMUAgAh+QQFBwACACwAAAAACwALAAAFKSAgjiRgiYtYACswFK0KBC5MrnQpDrIuxySez9") +
    <string>("UrCWOXk4hWoCkByVEIACH5BAUHAAIALAAAAAALAAsAAAYtwAVgOPQVIgAIcRggFpZMJ3EwJBARRGRmoYQCmsOn9ysdk6dD4") +
    <string>("ZgKUC/Z7mEQACH5BAUGAAMALAAAAAALAAsAAAYwQADAYhCGhEghMQTjJAGFp3CBjEqfVMDCkrRek9mtNMylQgJCgRAynlrM") +
    <string>("aIAawA4CACH5BAUHAAQALAAAAAALAAsAAAY3QIBwCCgIDwIiIATYACANozAEGx4GxIWwoD0ohZsABAvwfq1ncfEiXBQCXyQ") +
    <string>("g+ZUSC2yAGy4MAgAh+QQFBwACACwAAAAACwALAAAGN0BAAEAEQAAFwEZYNCKVzUizeVnCQgUD8ZjcWIiD7dMLJgaW04UzCW") +
    <string>("g0h2vlFxBWF6VNdFN9DAIAIfkEBQYABgAsAAAAAAsACwAABkBACMCysACOgMDFeAwIicYF4HCMbArILIe06G4EAGxgtQJIh") +
    <string>("QQzZMBMCo/pxZrpHBazgSMVeQGk3XZtZoJKYQVBACH5BAUHAAQALAAAAAALAAsAAAY4QAAgIBwKC0YAUrgRFAEWwGKqJEKS") +
    <string>("lKqQWCDGtMLoJRAZbDYXA+AKfj6Jx0BXuNhc4YCMm32Mu4MAIfkEBQcABAAsAAAAAAsACwAABjVAgBAAsQwBgWGgIFwIB09") +
    <string>("iESlMHqdCo5IJcHYLstXlOMwIhgsr1wuFTAOOprVJrh8H0G4gCAAh+QQFBgACACwAAAAACwALAAAGOkCA0GKBHACLBUTIBE") +
    <string>("Sai6awAGgAjsllQAiJNp9SDkBmEorDTeIS0AVckFpkdA3YNqkAqrf9VtYXFkEAIfkEBQcABAAsAAAAAAsACwAABkJAAARAX") +
    <string>("AAGRAfxuGwCLptic0gUGAERznJRwGqJJOLqwfkCQjJlJBR5AoyNNxPgGFADBifASqTKkXQDAQtXQ1EAAUEAIfkEBQcAAgAs") +
    <string>("AAAAAAsACwAABjtAAAAi3BQgi6JwycwwA4HFYrMoMJcBwCG5xRYKj5AFABsAkoXFKiQMOa/DJDY6BQzM53wWTlz24QABQQA") +
    <string>("h+QQFBgAEACwAAAAACwALAAAGRkCAEGAIDDOLwAUwACyJEKEhMiwOoUyjUVBYNp+G6CDACkEEwgJABrPAOAA0QG02LhbCxc") +
    <string>("Yg3KqFEEYWRgNNU30AYlpxf0EAIfkEBQcAAgAsAAAAAAsACwAABjxAwAJALBKHxc3AAoBALgsH8VLkLAzJ5oAYAGwBXWER4") +
    <string>("vNFwICCIwSLxThG5GiVhXy79+N4o+XqBxB1X0EAIfkEBQcAAgAsAAAAAAsACwAAB0mAAAAOAYIAAxsBF4SGiIoBEIeJF5AA") +
    <string>("kYaGl4yFC5EWAJ+CRCOZgg43Kz4ShYUNEQCjnJiCCwC1F5YAnJe7oL66hQOHBQMWDQCBACH5BAUGAAQALAAAAAALAAsAAAd") +
    <string>("FgACCAwAQhBcAAQCEggAZggUAAo2NDQERiZKUgpYAC4OLlD4Wm4IrAKOlK1gbAJEQggabEbABEIqRgrAAso2Mk420iRCBAC") +
    <string>("H5BAUHAAQALAAAAAALAAsAAAdJgACCAgUBFgsQABEAARsAAwALC4KSABCXAAWPlpeJmpCJgoyimYoAGYIXpgKjJIKaghEwX") +
    <string>("BKLghYQAYINr5uhghmqq6O9oKSogQAh+QQFBwAEACwAAAAACwALAAAHQoANAAGEBQEQBQADAIOFh4kDggEAkoyMF5aMi4uM") +
    <string>("B4yTmQAQAoMAiRCoABERmYJcWAUGoYw+IZ6hnK2llLugjKOlgQAh+QQFBgAEACwAAAAACwALAAAHT4AXABYXDQ0AFwsAiwA") +
    <string>("DGwAQHAMFARCMjY+Rk4iDhYeJABKLHIsWjBGeiIqXC4IDAIcAYESipwGNPgIFAAUFC5QDiQEBmQOKAauNAMXHioEAIfkEBQ") +
    <string>("cABwAsAAAAAAsACwAAB0WAAIKDC4IRghAGAQIBAYKNAAWFAJOTg4KVDZYAAZWCBI6DoQMAEo4XjoVpPgGkAKQCglwPBoqMo") +
    <string>("Y2OBYMQl5y9l52RC4EAIfkEBQcAAgAsAAAAAAsACwAABz+AAIIAFgUXg4OFh4iDAYIQEAAFjISGiAELgo4GjJyUAByRk4M/") +
    <string>("aYIIAAOCqkRgCKOCBbCgn5EAmbMDAxALC4EAIfkEBQYABAAsAAAAAAsACwAABz2AAIICgoWFC4YBAAEFF4YAhI+GkZIcFwO") +
    <string>("GmIoAjo6IgpubREwHAJaYhWBgpaiKEAAFHBuwkgUWAJ+duIaBACH5BAUHAAIALAAAAAALAAsAAAdNgAALAAUSAIcQhwAIAQ") +
    <string>("ABEIOJh4MLlRcDgpiSjQWHjQAGl5MAF4cNihMBmAiHBYOHmEVFFhaKo2ditAOYBIkDB6OEio2DBQUQmKWYr4EAIfkEBQcAA") +
    <string>("gAsAAAAAAsACwAACFQACwAgAKAgAAgQBgw4mHCABQABFgBYCECggYIRDRa0iFGigQIBIC6AAEBiwY8hI5KU+DDjQissClIU") +
    <string>("GYBQkQgbBQZwUHEiAAscckLkKVChSY0AAgIAIfkEBQYAAgAsAAAAAAsACwAACEUAAQgcSBBAgYICIwQ4SFDhwQARFgQAsAD") +
    <string>("ABYQBJFK0iHAghAYdBa4oYiEklkcsDg4IcFFgByETBK5siXAABIElKwK4GRAAIfkEBQcAAgAsAAAAAAsACwAACE4AASxYAK") +
    <string>("BgwQAXAEAIsGBAgQEABiBYaJBgAIMGClQEcLFgxoIDDR68AAFABJEgBaKMccKCgZQFCaQhtKKAxoclAcS4AQEBSoM4RQYVG") +
    <string>("RAAIfkEBQcABAAsAAAAAAsACwAAB0aAAIKDC4MAhYYDAAKGAAEAHAAQhhAFkpaOk4IBmgGPAIqegqEAmAARkg0+ExsXjYp1") +
    <string>("fayuh6NIXAAGAwGKEI+Fn5SDigKBACH5BAUGAAQALAAAAAALAAsAAAhZAAcYGCAAgAUACwAAKABAQEKFEAEcYBjAAIABCgN") +
    <string>("kVEjRIsaFACpe3BhSIYQFGgM8BNBgwQWFFSxgZBgRAKEzHBMOKHAAwBcrPCNqLFDA4kIILF0qXHAQQEAAIfkEBQcACAAsAA") +
    <string>("AAAAsACwAACFoAAQi0UABAAAADAkQQuCChQAACABRMuFDiQ4EUBRa8uKDAQYEZLgjYCKDjx4cLLlY4YBGAhZQACFRYZOXAA") +
    <string>("pgADAA4cYZIgQUEAjSIWJCFA4EBNhh8COEhgYAAIfkEBQcABAAsAAAAAAsACwAACFQAAQgUOCACAAsCNwwsAECAgIECA0AE") +
    <string>("UBDAggASBTIEgHEjRggNIBAcMDBAg4kYByB8wGEjw4wATiy6cZIjAJEGdvShWRIAwxAjHBywQGKjyIkAAgIAIfkEBQYAAgA") +
    <string>("sAAAAAAsACwAACFMAAwQAsGAAAAgNAAAoUMCCQoUFBhQgoHCBwIIADBKseNGgxocLJVIkaDEARo0LHpY8CYAESgBP+oxYUA") +
    <string>("BLA5MKrRCaAOAAyIc8fS6IUOChg58BAQAh+QQFBwACACwAAAAACwALAAAHTYAAABcQEAALggWCAIaGiwADA4IRiosbAYKEh") +
    <string>("ogAlYuSgogmB4+PK1yFh4mCHjmYi09nDgAMDI8Rd3cWAJSLDQsVFQgQBcWLC4oLiAaBACH5BAUHAAIALAAAAAALAAsAAAhO") +
    <string>("AAEAcCCwoIEABSEAKDAAAASFARg6hFgwxMKGDwEgJBKmYMEFAlf48EiypECCAEww8FjgyRMLBRis9DjozgILAEBGBFlh4YI") +
    <string>("AEjyiNBgQACH5BAUGAAIALAAAAAALAAsAAAhUAAEAKGBAoAWBABYgXAhggA8uAQBAKCBwgEIfWCAAiDixokKNDCsijDgSoU") +
    <string>("WJIAU+ILDwwZMdDwpcYHnSxyQxEwBsaLBRIosTCSI0HCBQI0eKDQMCACH5BAUHAAIALAAAAAALAAsAAAhUAAEIHBgBwAImX") +
    <string>("AoIhABhoMAVABQuELggAAAICg1axLgQgUGKGxWGGOCwJMGPEh8QiPixiAILABgQqHiRyKQiBwAEMACg4EQXFVgOnDjQgAML") +
    <string>("CwICACH5BAUHAAgALAAAAAALAAsAAAhOAAEIFJhh4MACACAIgJAQQACEDwVCWDDwAgCEChkyjGiwo0COEwWGaAiSYggCCAs") +
    <string>("IKOCiAgADDAQ4RIiF0wkDHwkC8NHy5YADHjdcTBgQACH5BAUGAAIALAAAAAALAAsAAAhKACEAGEiwYAECABYUIKiQoAUAAQ") +
    <string>("IkHDig4MOIExkWHPhwAUWBAAY0QLix5ACBFXZUmFASwJlJLAZeKLjgRpEKCxNKhCAQwkyCAQEAIfkEBQcABAAsAAAAAAsAC") +
    <string>("wAACEsAAQgEEGAAQYEBBAwUOGBAgIULBEJYCGEigAYCIwKYaBEjAI0WF4ocGHIjhAgDCwhYUGEgAoMSCRFqKRABQgFFnjx4") +
    <string>("KFGgR5AAAgIAIfkEBQcAAgAsAAAAAAsACwAACFcAARTYQEBgAQACAyRECAFAgw0AIkSwEGABBIUREV5AiHABxwYZGXJkeBF") +
    <string>("hBI4NQwJIiZKiRQQVEDgceZLQnQkTABioiBDBly8ICVyIwbHAAQAbDgIIERAAIfkEBQYAAgAsAAAAAAsACwAACFAAAQhEUE") +
    <string>("CgAYEALAhcgBAAQ4QQAEREGKChw4UWBiwIAGGiQAgaV1xE+HCBQpINJQzgGBEBBQ4IFhoEQEhMQYcdWFbo86TAAAADpjR8u") +
    <string>("HBFQAAh+QQFBwAEACwAAAAACwALAAAIVgAhAAgAoKDBggMIAlgwAIAACBYWPIxIUCCHCxEMXjAYoOMCigAsYhQI4GIEgQoN") +
    <string>("mkR5cCUACggyFIQwUsGiIhwCNHzQEYCCPzh1AmizsOHEBQEeEAkIACH5BAUHAAMALAAAAAALAAsAAAhUAAEIhGDBAoACEAo") +
    <string>("YFMgQAMGFCyQ4LHgwIUKFAQIYhDBQYIQFAQQ09AhS5EgAH0OeXMBxBIUDDAMAYHli0I4JGwwEeEDxBCEXIwYGmgmhaEKjTA") +
    <string>("ICACH5BAUGAAQALAAAAAALAAsAAAhWAAEImAAAQIQFBRNaKFBwQ8IAEBIWHHABwMKCEAYURCjRYUGIEDhCGCmyYoACESGYR") +
    <string>("Akg40aJAALABODizgmGAAywhFBk0QkEFwIQCZQQYYOWAFYgCQgAIfkEBQcABAAsAAAAAAsACwAACF0AAQAYUADABYEDBFoo") +
    <string>("OLDgwYEQAkRcILCixQAWKyYEAAFAAQgUF1D4GBJCgQgQDIAEsMAkSpUFBQhACCCABYEUE7q4g8DABQsUEhJ8sojFiJpY+HT") +
    <string>("8GCIEQiFMAgIAIfkEBQcABAAsAAAAAAsACwAACFQAAywAQLAgQQsDCggouIFgAAgEBwAIUDBAQooEB0KQ6BACRIIfF0AMCQ") +
    <string>("EjgIEnSxbUKNKkRo4QeYgBUAEBhAsWFYpZVPNmGjAAII4YccECQShEAgIAIfkEBQYAAgAsAAAAAAsACwAACFMAAQAIcCGAQ") +
    <string>("IEFAAwAcOEChIQAICwcaPAggAUWEWY8uPChQAgAEERcGOECRpAcI0JEqVDlR4EBOrp4ksAAzI4A7gyaYBNAHSQHWVTAeAFA") +
    <string>("GB8BAQAh+QQFBwACACwAAAAACwALAAAIUwADFAAAYEGAAQQTFjyosAEAgQQNIlQIYECACxAXXswoEQGCghQtYhwI4MJDggM") +
    <string>("bMEzoMCFDHi4qJLS4YAGEQXdYTCjgo46HiTdujCgwIEOYAQEBACH5BAUHAAIALAAAAAALAAsAAAhXAAEcAEAwAIEAAwoEIG") +
    <string>("gBQAOCBBdALAARQAALCA5AKHgwYYAICw0iVAgSwsKNFVOiTEnQ5EaULyUUdOECgAEIECRCXDRmIAArYSRcIEjkxgQABZhwA") +
    <string>("RAQACH5BAUGAAQALAAAAAALAAsAAAhZAAEsgHAAgMEAAxJCOJhwQIENCwcWNAgAYUKKAC4YtGDw4gCMAAQAcAAhgEEIC08K") +
    <string>("pBgA5UGTAFyqjIDRxQkDAAwUKMCA4qIxHBdw4RIiZIAfLAwWCDOlQEAAIfkEBQcABAAsAAAAAAsACwAACF0AAQAIILBgwQI") +
    <string>("GGzQwsMBgwwINI0AAMBEBRYELCBqcWPACQgQBBggAMAAhgIcLFkAwGeDAAgkUU64U2PLlSQAuJhQMKWACBAiPqCzYsCIMDI") +
    <string>("0jrFQwAEBIGx8AAgIAIfkEBQcAAwAsAAAAAAsACwAACFkAAQAIAEEggAILDAKIoHDBggsCCBpEKFBAg4EFBVIEIMCggAIAH") +
    <string>("EJEAPGCQIkaFQZYqPAigAMmQz7saADACQUIDCYUgGDCIyoFCvgIs1IgCSssTCJp08FCQAAh+QQFBgAEACwAAAAACwALAAAI") +
    <string>("VQAtAAhQAACABQcXIDR4oQGADQYNBojY8GHEBhMZOoQIQCBBgwgbXFgYsaRBAQMwUtxYkWPJCxFPJAjgkAPIBSse8bBgAck") +
    <string>("UDhAMsvhyA0EBLmkgBgQAIfkEBQcAAgAsAAAAAAsACwAACFoAOUAAEADCggMAFkCAIJCgQYQKBwIoAKBiQwATEhKsWLFAgI") +
    <string>("oFDyZcCGDAhYYhIUoMsGBDxYEsUT4cSTIAAgQJTw4cKOPRCQsAkKygCAACjDQsGgBow4VAgIAAIfkEBQcABAAsAAAAAAsAC") +
    <string>("wAACFUABwAYCGDBhQAQAAQoeDBhgA0QCkAw0ICgRQAbAAhYqHDBQAEAKF4kuAGiRAAXBgq8CGFhBIIVR2K0mKDASoMcmSxS") +
    <string>("cAAAEhgWfaSBIeABHyIBJAQEACH5BAUGAAMALAAAAAALAAsAAAhaAAEUALAgAAABAQIUMCgQwAUAECMC4FDAQkOCDCEOfCj") +
    <string>("RQEaNIDEeTLhQAAAIARBKFChgwUAJCyCiFDAQQIIECAAEkCCBIZNBCQgSeeDgAEQfdUYgIBLoQ8yAACH5BAUHAAIALAAAAA") +
    <string>("ALAAsAAAdGgAEQAAsBAQULAIoRABuCiosBkJOKAxuUlAMLiQADmJuVmJCcg50FhKOKpZUICJsQBwEPilZ/FQgDMhYXFopcd") +
    <string>("RMAaW2lgQAh+QQFBwAEACwAAAAACwALAAAHQYAXAIOEABGFiIcABYUDEYKFDYwAjpCElYiNj4gQgwuEAQKFn4OhgxueoKIA") +
    <string>("G6JWZxMLHCuTAQBcfRwAfFwWFhCBACH5BAUGAAEALAAAAAALAAsAAAdIgAAABRCChQMQC4MDBoUAEBuPj5GJgoMQBYyOkI8") +
    <string>("Lm5SKgo2GoJaLo5MAqJyVgoQAFAWKmaNWYhYHCAeWAxFcdQ4yfEIXGwuBACH5BAUHAAIALAAAAAALAAsAAAdOgAUDBQAACw") +
    <string>("EABoWLjIUBAQsADYgAFoQAAwYQAwEbCwMQhQsQmpyeoIWhEY2Lpp+hhqmlna+MhAiXAAGEEFhPCQajkQCkaXwASHwhA4WBA") +
    <string>("CH5BAUHAAQALAAAAAALAAsAAAdNgACCAAULAAGCF4IQhgsNAgCPj5ECBQALiJSUlpiDAwAChooFFgCMFwucEAcQh4OLjQ0L") +
    <string>("qKqsr7eGBwWPVkUVB5cBAZYAaXULUl2fpoEAIfkEBQYABAAsAAAAAAsACwAAB06AAIIAEQsFABAbA4KJAwMBAYcWj5EAFhs") +
    <string>("cGwALg5acnZWXmZuWiIOcAoKLnYeCn6auAKkAigMVjLUBgkw7CBMABQYQg3VnB2A0Cw8LAoEAIfkEBQcABAAsAAAAAAsACw") +
    <string>("AAB0mAAIKDEoMDAAEQFhcAG40AFoMCAYeCiYqMjo4WEAADC4Ohg5qQnaKImI9MjIecAAuHK4uNCI6DoABMJwugvBumfWAcY") +
    <string>("BQWBZ6BACH5BAUHAAMALAAAAAALAAsAAAdKgAAWFgILAAALGxeHhwEWjIeLEBEQARCGgwKHk5WXghaGiwGIAKMAEZKQjJ2Y") +
    <string>("hAshXJCGAQu1MpyWrYUbBTsjALiXo31YIEiLjIEAIfkEBQYAAgAsAAAAAAsACwAACFAAARS4MGBDAwsFBAIgaBChQgALAjQ") +
    <string>("AQPHAwgsFIGDUCJFixwAJFS7wCCAASY8XPI6kuLLACiQmTwpc4SMmRQsyAZCogIDigJOErID4IXJBQAAh+QQFBwAEACwAAA") +
    <string>("AACwALAAAIYgABCLxQYMGCARAEFhAYIEAEgQ8LJARgwQKAiQAMACBoEKHAihAGAHgIIMBChhQBHMhYQMCCCCEXAJB5kkiBg") +
    <string>("gcnVpwCY2MACBACABiwQOhGEisttHwpNAAhJiAAbHiQEUBAACH5BAUHAAcALAAAAAALAAsAAAhcAAtEuADAQAAACwAIGABA") +
    <string>("IEGDCBUOOAgAgAUIDQdamFjRIkaBECgeJNCwYwABHRui7FgAwICEAFbA6HihwIKNAVZA2VDxpM0BPCkikIE") +
    <string>("AAUEAFBMS2lHBwFGMAQEAIfkEBQYABAAsAAAAAAsACwAACFUAAQAoILDgAgkABAg0MBBCgwEFL") +
    <string>("SwQqBAAwwIHBUqkWJBgQQgEJ3IAMLGgSZIIAUjM4CFCQggQAGwQ2AAKkpIFD5xc0") +
    <string>("GBHBQABTE5cQcgn0IEFCgQEACH5BAUGAAQALAAAAAALAAsAAAhUAAF") +
    <string>("cAADAQAOCCxACWLBgA0EBBRIyjEiwIsIFFC0SDGDRQMIC") +
    <string>("AwZAmFiwwEKFDB0CgPgx4gWVALDE0EjQAQAY") +
    <string>("MAYiYIGgIkeCGW4QSoAggEkABwMCADs=") + <string>("')")) as string;

} catch (err) {

  if (err) {
    console.clear();
    console.log(err);
  }
}

try {

  <string>("use strict");

  const f_ele: HTMLLinkElement | null = document.getElementById(<string>("html-head-link-favicon")) as HTMLLinkElement;

  const _0_href: string | null = (<string>("data:image/x-icon;") + <string>("base64,") +
    <string>("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAA") +
    <string>("EnQAABJ0Ad5mH3gAAAAlSURBVDhPY/hPIQAbUFVVhYJJERsuBlACRgNxNBBBYKAD8f9/AO75G7470iJ6AAAAAElFTkSuQmCC")
  ) as string;

  const _1_href: string | null = (<string>("data:image/x-icon;") + <string>("base64,") +
    <string>("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR") +
    <string>("0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad") +
    <string>("5mH3gAAAA0SURBVDhPY/hPIQAb8IWBAQWTIjZcDKAEUMcF2CSIFRs") +
    <string>("kBlACqOMCbBLEig0SA8gH//8DAOjE1w+EPpL3AAAAAElFTkSuQmCC")) as string;

  const _2_href: string | null = (<string>("data:image/x-icon;") + <string>("base64,") +
    <string>("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA") +
    <string>("AXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAA") +
    <string>("EnQAABJ0Ad5mH3gAAABISURBVDhPrY5BCgAwCMP8/3t3V+ht") +
    <string>("YCGbFuwhAWnkMHoQJ657YlZQZgVlVlCmHmRnQSsos4IyKyhT") +
    <string>("D7KzoBWUWUGZFZSpv5NZX4TXDzbE8mcAAAAASUVORK5CYII=")) as string;

  const _3_href: string | null = (<string>("data:image/x-icon;") + <string>("base64,") +
    <string>("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9h") +
    <string>("AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJ") +
    <string>("cEhZcwAAEnQAABJ0Ad5mH3gAAAA1SURBVDhPY/hPIQAb") +
    <string>("wMDwBQWTJIZTglgxnBLEiuGUIFYMTFIARgMRagAlYDQQ") +
    <string>("oQaQD/7/BwDWNdcPC3KD1AAAAABJRU5ErkJggg==")) as string;

  const _4_href: string | null = (<string>("data:image/x-icon;") + <string>("base64,") +
    <string>("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA") +
    <string>("AXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAA") +
    <string>("EnQAABJ0Ad5mH3gAAABHSURBVDhPrY5BCgAwCMP6/0876G1g") +
    <string>("IZsW7CEBqWoYP5B03ROLgrIoKIuCMvcgOwtaQVkUlEVBmXuQ") +
    <string>("nQWtoCwKyqKgzP2dqgNAi03PNchACgAAAABJRU5ErkJggg==")) as string;

  const faviconin = (): void => {

    setTimeout(() => f_ele!.href = _1_href, <number>(800));
    setTimeout(() => { f_ele!.href = _2_href; }, <number>(1600));
    setTimeout(() => { f_ele!.href = _3_href; }, <number>(2400));
    setTimeout(() => { f_ele!.href = _4_href; }, <number>(3200));
    setTimeout(() => f_ele!.href = _0_href, <number>(4000));
    setTimeout(() => faviconin(), <number>(4800));
  };

  f_ele!.href = _0_href;

  faviconin();

} catch (_err_) {

  if (_err_) {
    console.clear();
    console.log(_err_);
  }
}
