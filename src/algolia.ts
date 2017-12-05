



import algoliasearch = require("algoliasearch");
export function search()
{

    var client = algoliasearch("FL3M3GOCWM" , "$");
    var index = client.initIndex("user_dev");
    let deleteObjectP = index.deleteObject("test");

}
