require("dotenv").config();

module.exports.app_id = process.env.app_id;
module.exports.app_key = process.env.app_key;
module.exports.base_url = "https://api.edamam.com";
module.exports.port = process.env.PORT || 3000;
