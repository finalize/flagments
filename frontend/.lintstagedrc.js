const buildEslintCommand = () => 'yarn lint'

const buildPrettierCommand = () => `yarn format`

const typeCheck = () => 'yarn tsc'

module.exports = {
  '*.{js,jsx,ts,tsx}': [typeCheck, buildEslintCommand, buildPrettierCommand],
}
