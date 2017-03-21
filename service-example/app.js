var mqtt = require('mqtt')
var api = require('../api')

var mqttHost = "mqtt://<mqtt hostname/IP address>";
var mqttTopic = "myTopic";

var username = "<email address>";
var password = "<password>";

var accountId = "4d6ab4c1-57ae-469a-913b-b43c67981dc2";
var alertledComponentId = "e208baa6-7b7c-4ea6-90df-6c8ab5dc1fe7";

var ready = false;
var apiToken = null;
api.auth.getToken(username, password, function(err, response){
	if(err) throw err
	
	ready = true;
	apiToken = response.token
})

var client  = mqtt.connect(mqttHost);
 
client.on('connect', function () {
	console.log("Connected")
	client.subscribe(mqttTopic)
})
 
client.on('message', function (topic, message) {
	if(!ready) return;
	if(topic != mqttTopic) return;

	var data = JSON.parse(message.toString())

	var value = parseInt(data.conditions[0].components[0].valuePoints[0].value, 10);

	console.log()
	console.log("incoming value: " + value)
	var alertledValue = (value % 2)+""
	
	var data = {
   		"commands": [{
               "componentId": alertledComponentId,
               "parameters": [{
	               "name": "on",
	               "value": alertledValue
               }],
               "transport": "ws"
            }
       ],
       "complexCommands": []
	};
	api.control.sendActuation(accountId, data, apiToken, function(err, res){
		if(!err)
		{
			console.log("Actuation sent")
			console.log("component: " + "alertled")
			console.log("parameter: " + "on")
			console.log("value: " + alertledValue)
		}
		else
		{
			console.log(err)
		}
	})
})

client.on('error', function () {
	console.log(arguments)
})