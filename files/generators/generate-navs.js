const { app } = require("./app");
const { newNaviItem, htmlNavi } = require("./generate-htm");
const { getDstDir, D_VER, nothidden, Throw, keys, getAddClass } = require("./util");

module.exports = { generateNavigators };

/**
 * @param {DSScope} scope
 * @param {DSNavs} navs
 * @param {string} name
 * @param {GenState} state
 * @param {string} [pfx]
 */
function generateNavigators(scope, navs, name, state, pfx) {
    state.curDoc = getDstDir(D_VER, state, `${pfx || ''}${name.replace(/\s+/g, '')}.htm`);
    pfx = `${pfx || state.curScope}_`;
    let nav = '', addcontent = '';

    // function list
    if (navs instanceof Array) {
        if (state.curScope !== "global") navs = navs.filter(nothidden);
        for (const func of navs) {
            if (!func) { nav += "<li></li>"; }
            else if (name !== 'All' && scope['_' + func]) { scope['_' + func].hasNav = true; }
            else if (!scope[func]) { Throw(`nav to deleted method ${state.curScope}.${func}`); }
            else {
                scope[func].hasNav ||= (name !== 'All');
                nav += newNaviItem(
                    state.curScope + `/${func.replace(/^\d+|\s+/g, '')}.htm`,
                    func.replace(/^\d+\s*/, ''), getAddClass(scope[func], state));
            }
        }
    }
    // name:target.htm or scope:categories association
    else if (navs instanceof Object) {
        let list = keys(navs);
        if (state.curScope !== "global") list = list.filter(nothidden);
        for (const cat of list) {
            let val = navs[cat];
            if (cat === '_nofilter') continue;
            if (cat.startsWith("+html")) {
                addcontent += val;
                continue;
            }
            if (!val) val = state.curScope + "/" + cat + ".htm";

            // targtet file
            if (typeof val === "string") {
                const m = val.match(state.curScope + "\\/(\\w+).htm(#(.*))?");
                /** @type {DSFunction|string|undefined} */
                let f, add = "";
                if (val.startsWith("http")) add += ' onclick="return OpenUrl(this.href);"';
                if (m && scope[m[1]]) f = m[3] ? (scope[m[1]].subf || {})[m[3]] : scope[m[1]];
                if (f && typeof f !== "string") { add += getAddClass(f, state); f.hasNav = true; }
                nav += newNaviItem(val, cat, add);
            }
            else // new category
            {
                nav += newNaviItem(`${pfx + cat.replace(/\s+/g, '')}.htm`, cat, cat === "Premium" ? getAddClass({ desc: "<premium>" }, state) : undefined);
                const tdoc = state.curDoc;
                generateNavigators(scope, val, cat, state, pfx);
                state.curDoc = tdoc;
            }
        }
    }
    else { Throw(Error("Wrong catlist datatype: " + typeof navs)); }

    const nofilter = keys(navs).length < 15 || (navs instanceof Object && navs._nofilter);
    app.WriteFile(state.curDoc, htmlNavi(name, addcontent, nav, !nofilter));
}
