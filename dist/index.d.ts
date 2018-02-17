declare module 'ledrun' {
    export default class LedRun {
        constructor(pin: number);
        public start(blinkInterval: number): void;
        public stop(): void;
    }
}