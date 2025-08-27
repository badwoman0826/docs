import Container from 'markdown-it-container'
import fs from 'fs'
import path from 'path'
export default function definePlugin(md) {
    md.use(Container, 'div', {
        validate: (params) => {
            return params.trim().match(/^demo\s*(.*)$/)
        },
        render(tokens, idx) {
            const token = tokens[idx]
            // console.log(tokens, idx)
            const sourceFile = tokens[idx + 2]
           // 🔥 关键：隐藏容器内部的所有 tokens
           let i = idx + 1
           while (i < tokens.length) {
               if (tokens[i].nesting === -1 && tokens[i].type === token.type) {
                   // 找到对应的结束标记，停止
                   break
               }
               // 隐藏中间的所有 tokens
               tokens[i].hidden = true
               i++
           }
            if (sourceFile && sourceFile.type === 'inline') {
                const source = sourceFile.content
                const sourcePath = path.resolve(__dirname, `../src/${source}.vue`)
                const sourceContent = fs.readFileSync(sourcePath)
                return sourceContent
            }
            return ''
        },
    })
}
