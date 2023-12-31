const fs = require('graceful-fs');
const fetch = require('node-fetch').default;

const DOCS = process.argv[2] || __dirname + '/../out/';

/** @type {Obj<boolean>} */
const CACHE = {};

/** @type {(dir:string, file:string, href:string)} */
async function testUrl(dir, name, href) {
    // Cache URLs
    if (CACHE[href]) return;
    CACHE[href] = true;
    const file = dir + name;

    if (href.startsWith("http")) {
        // Check first body byte
        try {
            const res1 = await fetch(href, { method: 'HEAD', timeout: 15000 });
            if (!res1.ok && res1.status !== 416) {
                const res2 = await fetch(href, { method: 'GET', timeout: 15000 });
                if (!res2.ok && res2.status !== 416) {
                    console.log(`fail: ${file}\turl: ${href}`);
                }
            }
        } catch (error) {
            console.error(`file: ${file}\n`, error);
        }
    } else if (!fs.existsSync(dir + href))
        console.log(`fail: ${file}\tfile: ${href}`);
}

async function processFiles(path = DOCS) {
    const files = fs.readdirSync(path, { withFileTypes: true });
    if (!files.find(f => f.name.endsWith(".htm") || f.name.endsWith(".html"))) return;
    const tasks = []

    for (const file of files) {
        if (file.isDirectory()) await processFiles(path + file.name + "/");
        if (!file.isFile()) continue;
        const content = fs.readFileSync(path + file.name, "utf8");
        const urls = content.match(/href="[^#"].+?"/g) || []

        for (let href of urls) {
            href = href.slice(6, -1)
                .replace(/([^\/]+:[0-9]+):href="/, ' $1 ')
                .replace(/[#"].*$/, '');
            if (!href.startsWith("http")) href = href.replace(/\?.*$/, '');
            if (href) tasks.push(testUrl(path, file.name, href));
        }
    }

    await Promise.all(tasks);
}

processFiles();
