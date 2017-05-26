export class HtmlSelector {
    private readonly brandName: string;
    private readonly container: HTMLElement;
    private readonly brandElement: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;

        this.brandName = "Brand Name";
        this.brandElement = container.querySelector(".ptm-content-native-brandname") as HTMLImageElement;
    }

    public select() {
        this.brandElement.textContent = this.brandName;
    }
}

// put in main.ts

// import { HtmlSelector } from "./concepts/htmlSelector";

// function getElement(selector: string): HTMLElement {
//     let rootElement = document.getElementsByTagName("body")[0];
    
//     let element = rootElement.querySelector(selector);
//     if (!element) {
//         throw new Error(`Element ${selector} cannot be found`);
//     }

//     return element as HTMLElement;
// }

// let container = getElement(".ptm-content-native");

// let htmlSelector = new HtmlSelector(container);
// htmlSelector.select();

//==================================
// put in html

// <div class="ptm-content-native">
//     <div class="ptm-content-native-brandname">1234</div>
//     <div class="ptm-content-native-brandname">1234</div>
// </div>