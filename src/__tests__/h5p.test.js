const h5p = require('../h5p');
const path = require('path');

const h5p_json = require(path.resolve('') + '/test/content/accordion/h5p.json');
const content_json = require(path.resolve('') +
    '/test/content/accordion/content/content.json');

describe('h5p', () => {
    const library_directory = path.resolve('') + '/test/libraries';

    it('should return a string', done => {
        h5p('test', h5p_json, content_json, library_directory, '/h5p', {
            integration: {}
        }).then(h5p_page => {
            expect(h5p_page).toBeDefined();
            expect(typeof h5p_page).toBe('string');
            done();
        });
    });
});