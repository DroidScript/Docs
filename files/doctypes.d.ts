
interface JQuery {
    popup(type: "open" | "close");
    load(cb: () => void): void;
}
interface DsApp {
    GetDSBuild(): number;
}
const _Cbm = (cb: (...args) => void) => string;
