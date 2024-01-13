const { app } = require("./app");
const { getDstDir, D_LANG, keys, nothidden, unwrapDesc, fillMissingFuncProps, tos, unwrapBaseFunc } = require("./util");

module.exports = { generateTips };

/**
 * @param {DSInput} scope
 * @param {GenState} state
 */
function generateTips({ base, scope }, state) {
    state.curDoc = getDstDir(D_LANG, state, state.curScope + '-tips.json');
    console.log(`generating ${state.lang}.${state.curScope}-tips.json`);

    /** @type {DSScopeRaw} */
    let tsubf;
    /** @type {Obj<Obj<string>>} */
    const tips = { [state.curScope]: {} };

    for (const name of keys(scope).filter(nothidden)) {
        const s = scope[name];
        s.name ||= name;
        if (!s.shortDesc && s.desc?.startsWith("#")) s.desc = unwrapDesc(s.desc, state);
        fillMissingFuncProps(s);

        if (!s.shortDesc || !s.subf || !s.abbrev) continue;
        tips[state.curScope][name] = s.shortDesc;

        tsubf = s.subf;
        /** @type {Obj<string>} */
        const tctrl = {};
        tips[s.abbrev] = tctrl;

        for (const j of keys(tsubf).filter(nothidden)) {
            const t = unwrapBaseFunc(tsubf[j], base);
            t.name ||= j;
            fillMissingFuncProps(t);
            if (t.shortDesc) tctrl[j] = t.shortDesc;
        }
    }

    const stips = tos(tips);
    if (stips.lastIndexOf("}") !== 25)
        app.WriteFile(state.curDoc, stips);
}
