import config from "./conf.json";

declare class App {
    ReadFile(p: string): string;
    WriteFile(p: string, s: string): void;
    DeleteFile(p: string): void;
    ListFolder(p: string): string[];
    MakeFolder(p: string): void;
    CopyFolder(a: string, b: string): void;
    DeleteFolder(p: string): void;
    IsFile(p: string): boolean;
    IsFolder(p: string): boolean;
    FileExists(p: string): boolean;
    FolderExists(p: string): boolean;
    GetFileDate(p: string): Date;
    SetDebug(d: boolean): void;
    ShowProgressBar(t: string): void;
    UpdateProgressBar(i: number, t: string): void;
    HideProgressBar(): void;
    ShowPopup(s: string): void;
    Alert(s: string): void;
}

declare global {
    
    declare class DSMethod {
        name?: string;
        desc: string;
        shortDesc: string;
        pNames: string[];
        pTypes: (string|DSFunction)[];
        retval?: string;
        hasNav?: boolean;
        isval?: boolean;
        noCon?: boolean;
        abbrev?: string;
        params?: string;
        subf?: Obj<DSFunction|string>
    }

    type UndefinedPartial<T> = {
        [K in keyof T]?: T[K] | undefined;
      };

    type DSFunction = UndefinedPartial<DSMethod>;
    type PopMap = { fnc: number, dsc: number, mul: number, std: number, ukn: number }

    type DSConfig = typeof config & { tmpl: Obj<string> };
    type ScopeKeys = keyof DSConfig["scopes"];
    type LangKeys = keyof DSConfig["langs"];

    interface Obj<T> {
        [x:string]: T;
    }

    type DSScopeRaw = Obj<DSFunction | string>;
    type DSScope = Obj<DSFunction>;
    type DSBase = Obj<DSFunction>;
    type DSNavs = (string[] | Obj<string | DSNavs>) & {_nofilter?: boolean}
    var app: App;
    var OnStart: () => void;
}