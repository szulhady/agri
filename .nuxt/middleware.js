const middleware = {}

middleware['isAdmin'] = require('..\\middleware\\isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isIpah'] = require('..\\middleware\\isIpah.js')
middleware['isIpah'] = middleware['isIpah'].default || middleware['isIpah']

middleware['isKongPo'] = require('..\\middleware\\isKongPo.js')
middleware['isKongPo'] = middleware['isKongPo'].default || middleware['isKongPo']

middleware['isTkpmIpah'] = require('..\\middleware\\isTkpmIpah.js')
middleware['isTkpmIpah'] = middleware['isTkpmIpah'].default || middleware['isTkpmIpah']

middleware['isTkpmPagoh'] = require('..\\middleware\\isTkpmPagoh.js')
middleware['isTkpmPagoh'] = middleware['isTkpmPagoh'].default || middleware['isTkpmPagoh']

middleware['isTopic'] = require('..\\middleware\\isTopic.js')
middleware['isTopic'] = middleware['isTopic'].default || middleware['isTopic']

middleware['isUser'] = require('..\\middleware\\isUser.js')
middleware['isUser'] = middleware['isUser'].default || middleware['isUser']

export default middleware
