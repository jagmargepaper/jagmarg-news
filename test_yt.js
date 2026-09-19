import fs from 'fs';
const html = fs.readFileSync('d:/yt.json', 'utf8');
const videos = [];
const regex = /"videoId":"([a-zA-Z0-9_-]+)"[\s\S]*?"title":\{"runs":\[\{"text":"([^"]+)"\}/g;
let m;
while((m = regex.exec(html)) !== null) {
    if(!videos.find(v=>v.id===m[1])) {
        videos.push({id: m[1], title: m[2]});
    }
}
console.log(videos.slice(0, 5));
