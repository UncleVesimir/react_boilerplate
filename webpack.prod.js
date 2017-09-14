const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const pathCurry = relPath => path.resolve(__dirname, relPath);
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const NameAllModulesPlugin = require('name-all-modules-plugin');

module.exports = merge(common, {
  output: {
    path: pathCurry('prod'),
    filename: './src/index.jsx',
  },
  devtool: 'cheap-module-source-map',
  plugins:[
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
} 
)

// {
// entry: {
//   main: './src/foo',
//   other: './src/foo-two',
//   vendor: ['preact'] //theses are modules that aren't expected to change much, so we pull them out of the main file
//                      // as a seperate chunk
// },
// output: {
//   path: path.join(__dirname, 'dist'),
//   filename: '[name].[chunkhash].js', //we use chunk hash to ensure hashes are based on the chunks, not build hash.
// },
// externals: {
//   jquery: 'jQuery'
// },
// plugins: [
//   new webpack.NamedModulesPlugin(), // Webpack adds all module ids that exist to the 'vendor' chunk.
//                                     // to get around this, this plugin uses a unique path to map module requests to a plugin
                                      // instead of the module id (so it won't change frequently!)
//   new webpack.NamedChunksPlugin((chunk) => { //names chunks, so hashes are based on unique names, not hash id, which changes dependent on order imports are resolved.
//                                              // i.e. if we later add a new dependency, the module id would change for all other chunks, changing hash.
//       if (chunk.name) {
//           return chunk.name;
//       }
//       return chunk.modules.map(m => path.relative(m.context, m.request)).join("_"); 
        //NamedChunkPlugin only handles chunks with a name, but async module aren't given one :(
         // function we pass in returns if there already is a name, or assigns chunk a new ID
          // by returning the relative path between the context and request paths, which will be unique. 
         // These can then be hashed to a unique value. Remember that this just gives us a mapping to the async module,
//   }),
//   new webpack.optimize.CommonsChunkPlugin({ // extracts commonly occuring 
//       name: 'vendor',
//       minChunks: Infinity // tells vendor to only take what we specified in the entry(vendor), and not to take stuff from other entry points. 
//   }),
//   new webpack.optimize.CommonsChunkPlugin({
//       name: 'runtime' //seperates out the runtime/manifest/async handlers from other chunks
//   }),
//   new NameAllModulesPlugin(),  // chunks for NamedModulesPlugin only works for normal modules, not external and webpack related modules.
                                  // this plugin sets the module#identifier as the module ID for all modules that do not have an ID (i.e. the external webpack ones)
// ]
// }


/* One last important note: May now actually have to take care of cache invalidation with additional plugins.
 As Webpack may allow plugins to change assets after the chunkhash is calculated, and those plugins may 
 not properly update the chunkhash, this could cause an asset to keep its hash even though 
 it was actually changed. It's always good to be careful :)! */