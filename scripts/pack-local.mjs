import { spawn } from 'node:child_process'
import { resolve } from 'node:path'

const run = (cmd, args) =>
  new Promise((resolvePromise, reject) => {
    const child = spawn(cmd, args, { stdio: 'inherit', shell: true })
    child.on('exit', (code) => {
      if (code === 0) resolvePromise()
      else reject(new Error(`${cmd} ${args.join(' ')} failed with code ${code}`))
    })
  })

const runCapture = (cmd, args) =>
  new Promise((resolvePromise, reject) => {
    let output = ''
    const child = spawn(cmd, args, { shell: true })
    child.stdout.on('data', (d) => {
      output += d.toString()
      process.stdout.write(d)
    })
    child.stderr.on('data', (d) => process.stderr.write(d))
    child.on('exit', (code) => {
      if (code === 0) resolvePromise(output.trim())
      else reject(new Error(`${cmd} ${args.join(' ')} failed with code ${code}`))
    })
  })

const main = async () => {
  await run('npm', ['run', 'build'])
  const packed = await runCapture('npm', ['pack'])
  const file = packed.split(/\r?\n/).pop()
  const fullPath = resolve(process.cwd(), file)
  console.log(`\nPacked file: ${fullPath}\n`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
