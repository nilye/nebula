const execa = require('execa')
const [targetPkg] = process.argv.slice(2)

async function run(){
	if (targetPkg){
		try {
			await execa(
				'rollup',
				[
					'-c',
					'./script/rollup.config.js',
					'--environment',
					`PACKAGE:${targetPkg}`
				],
				{ stdio: 'inherit' }
			)
		} catch (err){}
	}
}

run()
