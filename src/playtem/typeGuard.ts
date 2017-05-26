import { Promise } from "es6-promise";

interface TemplateData {
    imageWidth: number;
    descriptionMaxLength: number;
}

export class TemplateLoader {
    public load(): Promise<boolean> {
        return Promise.resolve()
            .then(() => {
                return this.getTemplateData();
            })
            .then(data => {
                return this.typeGuard(data);
            });
    }

    private getTemplateData(): Promise<TemplateData> {
        return new Promise<TemplateData>((resolve, reject) => {

            window.setTimeout(() => {
                resolve(this.internalCb());
            }, 200);
        });
    }

    private internalCb(): any {
        return {
            imageWidth: 100,
            descriptionMaxLength: "break"
        };
    }

    private typeGuard(data: TemplateData): boolean {
        return typeof data.descriptionMaxLength === "number";
    }
}