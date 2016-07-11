/**
 * UrlController
 *
 * @description :: Server-side logic for managing urls
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    incrementViews(req, res){
        console.log(req.param('url_id'))
        Url.findOne(req.param('url_id'), function foundUsr(err, url) {
            console.log(url)
            if(url.views == undefined)
                url.views = 1;
            else
                url.views = parseInt(url.views)+1;
            url.save(function(err, url) { /* updated url */
                res.ok();
            });
        });

    }
	
};

