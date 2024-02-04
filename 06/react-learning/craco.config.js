const CracoLessPlugin = require('craco-less');
const path = require('path')
// 设置项目别名
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#2c46f1' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    webpack:{
        alias: {
            '@':resolve('src'),
            'components':resolve('src/components')
        }
    }
};
