const envArg = process.argv.slice(-1)[0] || '';
const env = envArg.startsWith('--env=') ? envArg.slice(6) : 'dev';

console.log('current env=' + env);
module.exports = {
    base: '/',
    sourcemap: true,
    proxy: {
        '/base': {
            target: `http://${env}.shanghai.cbsv.bacic5i5j.com`,
            changeOrigin: true,
        },
        '/sales': {
            target: `http://sit.shanghai.cbsv.bacic5i5j.com/sales-web/`,
            changeOrigin: true,
        },
    }
}
