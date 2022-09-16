// 给出json数据，查找文件filename，filename如'text1.txt',查找所有的符合的路径
function getFullFilename(obj, filename) {
  const rst = []
  const dfs = (obj, parentDir, filename) => {
    const file = obj.files.find(o => o === filename)
    console.log({ file })
    if (file) {
      const curDir = parentDir ? `${parentDir}/${obj.name}` : obj.name
      rst.push(`${curDir}/${file}`)
    }
    if (obj.subdirs && obj.subdirs.length) {
      parentDir = parentDir ? `${parentDir}/${obj.name}` : obj.name
      obj.subdirs.forEach(e => dfs(e, parentDir, filename))
    }
  }
  dfs(obj, null, filename)
  return rst
}
const data = {
  name: 'dir1',
  files: ['file1.txt', 'file2.txt'],
  subdirs: [
    {
      name: 'dir2',
      files: ['file1.txt', 'file2.txt'],
      subdirs: [
        {
          name: 'dir3',
          files: ['file1.txt', 'file2.txt']
        }
      ]
    }
  ]
}

console.log(getFullFilename(data, 'file1.txt'))
// [ 'dir1/file1.txt', 'dir1/dir2/file1.txt', 'dir1/dir2/dir3/file1.txt' ]
