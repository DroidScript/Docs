const { execSync } = require('child_process');
const { renameSync } = require('fs');
const readline = require('readline');

const owner = "DroidScript", repo = "Docs";

const directoryToZip = "../docs/docs/latest";
const zipFileName = "english-lang.ppk";

// Create zip file
try {
    const cwd = process.cwd();
    process.chdir(directoryToZip);
    if (process.platform === "win32") {
        const command = `Compress-Archive -Path "*" -DestinationPath "${cwd}/file.zip"`;
        execSync(`powershell -Command "${command}"`);
    } else {
        execSync(`zip -r ${cwd}/file.zip .`);
    }
    process.chdir(cwd);
    renameSync("file.zip", zipFileName);
    console.log('Created ' + cwd + "/" + zipFileName);
} catch (e) {
}

if (!process.argv.includes("-u")) process.exit();


// upload
let tagName = process.env.RELEASE_TAG;
let token = process.env.GITHUB_TOKEN;

// If token is not provided in environment, prompt for it
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the release tag: ", (inptTagName) => {
    tagName = inptTagName.trim();
    if (!tagName) return;
    if (token) { startProcess(); return; }

    rl.question("Enter your GitHub access token: ", (inptToken) => {
        token = inptToken.trim();
        rl.close();
        if (token) startProcess();
    });
});

function startProcess() {

    // Get SHA of the latest commit
    const commitSHA = execSync('git rev-parse HEAD').toString().trim();

    // Create release
    const releaseResponse = execSync(`curl -X POST \
        -H "Authorization: token ${token}" \
        -H "Content-Type: application/json" \
        -H "Accept: application/vnd.github.v3+json" \
        -d '{"tag_name": "${tagName}", "target_commitish": "${commitSHA}", "name": "${tagName}", "body": "Release description here", "draft": false, "prerelease": false}' \
        "https://api.github.com/repos/${owner}/${repo}/releases"`);

    const releaseData = JSON.parse(releaseResponse.toString());

    // Upload zip file as an asset to the release
    const uploadResponse = execSync(`curl -X POST \
        -H "Authorization: token ${token}" \
        -H "Content-Type: application/zip" \
        -H "Accept: application/vnd.github.v3+json" \
        --data-binary "@${zipFileName}" \
        "https://uploads.github.com/repos/${owner}/${repo}/releases/${releaseData.id}/assets?name=${zipFileName}"`);

    console.log('Release uploaded successfully!');
}