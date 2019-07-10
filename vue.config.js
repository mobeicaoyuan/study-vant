const autoprefixer = require('autoprefixer');

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                ]
            },
            less: {
                modifyVars: {
                //在此修改less变量
                }
            }
        }
    }
};
