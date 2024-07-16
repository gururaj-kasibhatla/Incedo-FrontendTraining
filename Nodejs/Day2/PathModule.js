const path=require('path')
let path1=path.format({
    'root':'C:\Users\HP\Desktop\Incedo-FrontendTraining\Nodejs',
    'dir':'Day2',
    'base':'Hello.html'
})
console.log('path1',path1)

let path2=path.format({
    'root':'D:\Users\HP\Desktop',
    'dir':'demo'
})

let newPath=path.join(path2,'folder1/folder2')
console.log('path2',path2)
console.log('Basename',path.basename(path1))
console.log('dir name',path.dirname(path1))
console.log('newpath',newPath)