const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), //arquivo de entrada onde gera o bundle
    output: {
        path: path.resolve(__dirname, 'public'), // diretorio onde vai jogar
        filename: 'bundle.js' // qual o nome que o arquivo vai ter
    },
    devServer: { // configurações do servidor local
        contentBase: path.resolve(__dirname, 'public') //qual o diretório onde vai rodar o servidor
    },
    module: { //Biblioteca das ferramentas parceiras do webpack
        rules: [ // regra que vai aplicar a cada vez que compilar
            {
                test: /\.js$/, //todos os arquivos que vao ser incluidos na compilação
                exclude: /node_modules/, //Esse esclui o que não vai ser usado
                use: { // ferramentas que vou usar
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ]
    }
};