'use strict';

module.exports.transacciones = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        TRANSACCIONES_PERMITIDAS: ["consultas","pagos","retiros"],
        input: event,
      },
      null,
      2
    ),
  };
};


// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-west-2'});

module.exports.email = (event, context, callback) => {
    
     var params = {
        Destination: {
            ToAddresses: ["carlos0camacho@gmail.com"]
        },
        Message: {
            Body: {
                Text: { Data: "Test"
                    
                }
                
            },
            
            Subject: { 
              Data: "Test Email"
            }
        },
        Source: "carlos0camacho@gmail.com"
    };

    
     ses.sendEmail(params, function (err, data) {
        callback(null, {err: err, data: data});
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            
            console.log(data);
            context.succeed(event);
        }
    });
};