# Twilio Node.js Server

This is a Node.js server application that integrates with the Twilio API to manage call and messages. The server is built using Express.js and demonstrates how to structure a project for scalability and maintainability.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kahnu044/twilio-nodejs-server.git
   cd twilio-nodejs-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Set up environment variables:

   Copy `.env.example` to a `.env` file in the root directory and add your Twilio account credentials

   ```
   PORT=3003
   TWILIO_SID=
   TWILIO_AUTH_TOKEN=
   TWILIO_FROM_PHONE=
   TWILIO_TWIML_VOICE_URL=http://demo.twilio.com/docs/voice.xml
   ```

## Usage

```bash
npm run start
```

The server will start on the port specified in your environment variables or default to port `3003`.

## API Endpoints

### Make a Call

- Endpoint: `/api/make-call`
- Method: `POST`
- Description: Initiates a call using Twilio.
- Request body:
  ```json
  {
    "to": "+91XXXXXXXXXX"
  }
  ```
- Response:
  ```json
  {
    "success": true,
    "message": "Call initiated to : +91XXXXXXXXXX",
    "callSid": "CAf474e0245XXXXXd4ba90a69d3b6XXXXX"
  }
  ```

### Get Call Logs

- Endpoint: `/api/get-call-logs`
- Method: `GET`
- Description: Retrieve Twilio Call Logs.
- Response:
  ```json
  {
    "success": true,
    "message": "Call logs fetched successfully",
    "data": [
      {
        "sid": "CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "dateCreated": "2024-08-05T06:02:01.000Z",
        "dateUpdated": "2024-08-05T06:02:35.000Z",
        "parentCallSid": null,
        "accountSid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "to": "+91XXXXXXXXXXX",
        "toFormatted": "+91XXXXXXXXXXX",
        "from": "+19XXXXXXXX",
        "fromFormatted": "(XXX) XXX-XXXX",
        "phoneNumberSid": "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "status": "completed",
        "startTime": "2024-08-05T06:02:12.000Z",
        "endTime": "2024-08-05T06:02:35.000Z",
        "duration": "23",
        "price": "-0.04730",
        "priceUnit": "USD",
        "direction": "outbound-api",
        "answeredBy": null,
        "apiVersion": "2010-04-01",
        "forwardedFrom": "+91XXXXXXXXXXX",
        "groupSid": null,
        "callerName": "",
        "queueTime": "0",
        "trunkSid": "",
        "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json",
        "subresourceUris": {
          "notifications": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Notifications.json",
          "user_defined_messages": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/UserDefinedMessages.json",
          "transcriptions": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Transcriptions.json",
          "recordings": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Recordings.json",
          "streams": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Streams.json",
          "payments": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Payments.json",
          "user_defined_message_subscriptions": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/UserDefinedMessageSubscriptions.json",
          "siprec": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Siprec.json",
          "events": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Calls/CAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Events.json"
        }
      }
    ]
  }
  ```

### Send a Message

- Endpoint: `/api/send-message`
- Method: `POST`
- Description: Sent SMS to the given phone number using Twilio.
- Request body:
  ```json
  {
    "to": "+91XXXXXXXXXXX",
    "body": "hi testing"
  }
  ```
- Response:
  ```json
  {
    "success": true,
    "message": "Successfully message sent to : +91XXXXXXXXXXX",
    "messageSid": "SMce12a400e08XXXXXa40f3642fc3XXXXX",
    "createdAt": "2024-08-05T05:39:24.000Z",
    "updatedAt": "2024-08-05T05:39:24.000Z"
  }
  ```
## Author

[Kahnu Charan Swain](https://github.com/kahnu044)