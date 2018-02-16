declare module 'ledrun' {
    export class LedRun {
        constructor(pin: number);
        public start(blinkInterval: number): void;
        public stop(): void;
    }
}