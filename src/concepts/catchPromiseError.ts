export class CatchPromiseError {
    public execute() {
        try {
            this.internalExecute();
        } catch (error) {
            
        }
    }

    private internalExecute(): never {
        throw new Error("internalExecute error");
    }
}