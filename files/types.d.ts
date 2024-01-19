import config from "./conf.json";

declare global {

    declare type App = {
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
        GetDebug(): boolean;
        ShowProgressBar(t: string): void;
        UpdateProgressBar(i: number, t: string): void;
        HideProgressBar(): void;
        ShowPopup(s: string): void;
        WalkFolder(path: string, filter?: string, depth?: number): Obj<WalkDir[]>;
        Alert(s: string): void;
    }

    type WalkDir = {
        name: string;
        isFile: boolean;
        modified: number;
        size: number;
        hidden: boolean;
    }

    declare class DSMethod {
        name?: string;
        desc: string;
        shortDesc: string;
        pNames: string[];
        pTypes: (string | DSFunction)[];
        retval?: string;
        hasNav?: boolean;
        isval?: boolean;
        noCon?: boolean;
        abbrev?: string;
        params?: string;
        subf?: Obj<DSFunction | string>
    }

    type Sample = {
        name: string;
        code: string;
        opt: string;
        index: number;
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
        [x: string]: T;
    }

    type DSScopeRaw = Obj<DSFunction | string>;
    type DSScope = Obj<DSFunction>;
    type DSBase = Obj<DSFunction>;
    type DSNavs = (string[] | Obj<string | DSNavs>) & { _nofilter?: boolean }
    type DSInput = { base: DSBase | null, baseKeys: string[], scope: DSScope, navs: DSNavs };
    type GenState = {
        lang: LangKeys, curVer: string, curDoc: string;
        curScope: ScopeKeys, curFunc: string, curSubf: string;
        progress: number; popDefs: Obj<string>, spop: Obj<number>;
    };
    type GenPattern = {
        ver: string, lang: LangKeys | "", scope: ScopeKeys | "", func: string
    };
    var OnStart: () => void;
}
