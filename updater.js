// 生成 updater.json 文件
import fs from 'fs';

const getLinuxName = (name) => {
    const arr = name.split('');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item === item.toLocaleUpperCase()) {
            result += `-${item.toLocaleLowerCase()}`;
        }
        result += item;
    }
    return result;
}

const content = fs.readFileSync('./package.json', { encoding: 'utf-8' });
const packageInfo = JSON.parse(content);
const versionContent = `{
    "version": "v${packageInfo.version}",
    "notes": "1.更新版本测试\n2.测试多行更新",
    "pub_date": "${(new Date()).toISOString()}",
    "platforms": {
        "darwin-x86_64": {
            "signature": "dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5cHRlZCBzZWNyZXQga2V5ClJXUlRZMEl5a1JIbXBSWko2aE5jOG4yTjg4U0wrNE9lWVVNR3Y1ZGpSUFVuOHFWNmdOWUFBQkFBQUFBQUFBQUFBQUlBQUFBQW1TblhQZ3lqa1dsRUlJWGdEVTJwU01qZHRXKzh5dE9xK3AyMmpSbjVrK1RqYmtPemlGZHNDQkl6K09yOXRKUVBSSWN2emlnMjdwQkNPbFcvbEQ2bmprdFZOM0RxQy9zWXkzb3B0UVlRbG9NUEhzSFNPQ0xHcllpcHBuT29jb0hacUVjaTY1QVBwNkk9Cg==",
            "url": "https://oss.uiseed.cn/app/${packageInfo.name}/x86/${packageInfo.name}.app.tar.gz"
        },
        "darwin-aarch64": {
            "signature": "dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5cHRlZCBzZWNyZXQga2V5ClJXUlRZMEl5a1JIbXBSWko2aE5jOG4yTjg4U0wrNE9lWVVNR3Y1ZGpSUFVuOHFWNmdOWUFBQkFBQUFBQUFBQUFBQUlBQUFBQW1TblhQZ3lqa1dsRUlJWGdEVTJwU01qZHRXKzh5dE9xK3AyMmpSbjVrK1RqYmtPemlGZHNDQkl6K09yOXRKUVBSSWN2emlnMjdwQkNPbFcvbEQ2bmprdFZOM0RxQy9zWXkzb3B0UVlRbG9NUEhzSFNPQ0xHcllpcHBuT29jb0hacUVjaTY1QVBwNkk9Cg==",
            "url": "https://oss.uiseed.cn/app/${packageInfo.name}/arm/${packageInfo.name}.app.tar.gz"
        },
        "linux-x86_64": {
            "signature": "dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5cHRlZCBzZWNyZXQga2V5ClJXUlRZMEl5a1JIbXBSWko2aE5jOG4yTjg4U0wrNE9lWVVNR3Y1ZGpSUFVuOHFWNmdOWUFBQkFBQUFBQUFBQUFBQUlBQUFBQW1TblhQZ3lqa1dsRUlJWGdEVTJwU01qZHRXKzh5dE9xK3AyMmpSbjVrK1RqYmtPemlGZHNDQkl6K09yOXRKUVBSSWN2emlnMjdwQkNPbFcvbEQ2bmprdFZOM0RxQy9zWXkzb3B0UVlRbG9NUEhzSFNPQ0xHcllpcHBuT29jb0hacUVjaTY1QVBwNkk9Cg==",
            "url": "https://oss.uiseed.cn/app/${packageInfo.name}/linux/${getLinuxName(packageInfo.name)}_${packageInfo.version}_amd64.AppImage.tar.gz"
        },
        "windows-x86_64": {
            "signature": "dW50cnVzdGVkIGNvbW1lbnQ6IHJzaWduIGVuY3J5cHRlZCBzZWNyZXQga2V5ClJXUlRZMEl5a1JIbXBSWko2aE5jOG4yTjg4U0wrNE9lWVVNR3Y1ZGpSUFVuOHFWNmdOWUFBQkFBQUFBQUFBQUFBQUlBQUFBQW1TblhQZ3lqa1dsRUlJWGdEVTJwU01qZHRXKzh5dE9xK3AyMmpSbjVrK1RqYmtPemlGZHNDQkl6K09yOXRKUVBSSWN2emlnMjdwQkNPbFcvbEQ2bmprdFZOM0RxQy9zWXkzb3B0UVlRbG9NUEhzSFNPQ0xHcllpcHBuT29jb0hacUVjaTY1QVBwNkk9Cg==",
            "url": "https://oss.uiseed.cn/app/${packageInfo.name}/windows/${packageInfo.name}_${packageInfo.version}_x64_en-US.msi.zip"
        }
    }
}`;

console.log(content);