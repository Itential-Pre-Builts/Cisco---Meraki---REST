# Create Network - Meraki - REST

## Table of Contents

- [Create Network - Meraki - REST](#create-network---meraki---rest)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [Supported IAP Versions](#supported-iap-versions)
    - [External Dependencies](#external-dependencies)
    - [Adapters](#adapters)
    - [How to Install](#how-to-install)
    - [Testing](#testing)
  - [Using this Workflow Project](#using-this-workflow-project)
    - [Entry Point IAP Component](#entry-point-iap-component)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
    - [Related Documentation](#related-documentation)
    - [Example Inputs and Outputs](#example-inputs-and-outputs)
  - [Support](#support)

## Overview

This is a modular workflow that automates the creation of a new network.

Capabilities include:
- The workflow is used to create an organization network


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Create Network - Meraki - REST** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Create Network - Meraki - REST** has been tested with:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>OS Version</th>
      <th>API Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Meraki</td>
      <td></td>
      <td>v1</td>
    </tr>
  </tbody>
</table>




### Adapters

This version of **Create Network - Meraki - REST** has been tested with:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Version</th>
      <th>Configuration Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://gitlab.com/itentialopensource/adapters/sd-wan/adapter-meraki">adapter-meraki</a></td>
      <td>^1.3.0</td>
      <td>In order to run the workflows in this Pre-Built Automation, the adapter property <code>choosepath</code> must be added to the Meraki adapter configuration with value `"v1"`.</td>
    </tr>
  </tbody>
</table>



### How to Install

To install the Workflow Project:

- Verify you are running a supported version of the Itential Automation Platform (IAP) as listed above in the [Supported IAP Versions](#supported-iap-versions) section in order to install the Workflow Project.
- Import the Workflow Project in [Admin Essentials](https://docs.itential.com/docs/importing-a-prebuilt-4).

### Testing

While Itential tests this Workflow Project and its capabilities, it is often the case the customer environments offer their own unique circumstances. Therefore, it is our recommendation that you deploy this Workflow Project into a development/testing environment in which you can test the Workflow Project.

## Using this Workflow Project


### Entry Point IAP Component

The primary IAP component to run this Workflow Project is listed below:

<table>
  <thead>
    <tr>
      <th>IAP Component Name</th>
      <th>IAP Component Type</th>
    </tr>
  </thead>
  <tbody>
      <td>Create Network - Meraki - REST</td>
      <td>Workflow</td>
    </tr>
  </tbody>
</table>

### Inputs

The following table lists the inputs to the Workflow Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>The Meraki adapter instance to use in job</td>
      <td><pre lang="json">Meraki</pre></td>
    </tr>    <tr>
      <td>networkName</td>
      <td>string</td>
      <td>yes</td>
      <td>The name of the new organization network</td>
      <td><pre lang="json">Network</pre></td>
    </tr>    <tr>
      <td>timeZone</td>
      <td>string</td>
      <td>yes</td>
      <td>The timezone of the network</td>
      <td><pre lang="json">America/New_York</pre></td>
    </tr>    <tr>
      <td>tags</td>
      <td>string</td>
      <td>yes</td>
      <td>Space separated list of tags to be applied to the network</td>
      <td><pre lang="json">tag1 tag2</pre></td>
    </tr>    <tr>
      <td>type</td>
      <td>string</td>
      <td>yes</td>
      <td>Space separated list of the product type(s) of the new network. If more than one type is included, the network will be a combined network.</td>
      <td><pre lang="json">appliance switch wireless</pre></td>
    </tr>    <tr>
      <td>disableMyMerakiCom</td>
      <td>boolean</td>
      <td>yes</td>
      <td>If set to true will disable mymeraki.com</td>
      <td><pre lang="json">true</pre></td>
    </tr>    <tr>
      <td>disableRemoteStatusPage</td>
      <td>boolean</td>
      <td>yes</td>
      <td>If set to true will disable the remote status page</td>
      <td><pre lang="json">false</pre></td>
    </tr>    <tr>
      <td>organizationName</td>
      <td>string</td>
      <td>yes</td>
      <td>Name of the organization within which to create network in Meraki</td>
      <td><pre lang="json">Organization</pre></td>
    </tr>
  </tbody>
</table>



### Outputs

The following table lists the outputs of the Workflow Project:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>createNetworkSuccess</td>
      <td>object</td>
      <td>Result of creating network in Meraki</td>
      <td><pre lang="json">{
  "icode": "AD.201",
  "response": {
    "id": "L_627126248111380519",
    "organizationId": "127026248110254140",
    "productTypes": [
      "systems manager"
    ],
    "url": "https://meraki.com/Network/n/PinukaYb/manage/usage/list",
    "name": "Network",
    "timeZone": "America/New_York",
    "enrollmentString": null,
    "type": "combined",
    "tags": "tag1 tag2",
    "disableMyMerakiCom": true,
    "disableRemoteStatusPage": true
  }
}</pre></td>
    </tr>    <tr>
      <td>createNetworkError</td>
      <td>object</td>
      <td>Result if failure creating network in Meraki</td>
      <td><pre lang="json">{
  "icode": "AD.500",
  "IAPerror": {
    "origin": "meraki-connectorRest-handleEndResponse",
    "displayString": "Error 400 received on request",
    "recommendation": "Verify the request is accurate via debug logs and postman",
    "code": 400,
    "raw_response": {
      "status": "success",
      "code": 400,
      "response": {
        "errors": [
          "Name has already been taken"
        ]
      },
      "redirects": 0,
      "tripTime": "325ms"
    }
  },
  "response": {
    "errors": [
      "Name has already been taken"
    ]
  }
}</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

The following items show how to query successful results from the output:

      
##### Network ID

`createNetworkSuccess.response.id`

      
    
    
The following items show how to query failure results from the output:

      
##### Error Response Message

`createNetworkError.response.errors[0]`

      
    
  


### Related Documentation

<table>
  <thead>
    <tr>
      <th>Documentation Link</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://developer.cisco.com/meraki/api-v1/create-organization-network/">Create Organization Network - Meraki</a></td>
      <td>Meraki API documentation for creating an organization network</td>
    </tr>
  </tbody>
</table>



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "adapterId": "Meraki",
  "networkName": "Network",
  "timeZone": "America/New_York",
  "tags": "tag1 tag2",
  "type": "appliance switch wireless",
  "disableMyMerakiCom": true,
  "disableRemoteStatusPage": false,
  "organizationName": "Organization"
} </pre>

    
    
Output:
<pre>{
  "createNetworkSuccess": {
    "icode": "AD.201",
    "response": {
      "id": "L_627126248111380519",
      "organizationId": "127026248110254140",
      "productTypes": [
        "systems manager"
      ],
      "url": "https://meraki.com/Network/n/PinukaYb/manage/usage/list",
      "name": "Pre-Built Test 1",
      "timeZone": "America/New_York",
      "enrollmentString": null,
      "type": "combined",
      "tags": "tag1 tag2",
      "disableMyMerakiCom": true,
      "disableRemoteStatusPage": true
    }
  }
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "adapterId": "Meraki",
  "networkName": "Network Already Exists",
  "timeZone": "America/New_York",
  "tags": "tag1 tag2",
  "type": "appliance switch wireless",
  "disableMyMerakiCom": true,
  "disableRemoteStatusPage": false,
  "organizationName": "Organization"
} </pre>

    
    
Output:
<pre>{
  "createNetworkError": {
    "icode": "AD.500",
    "IAPerror": {
      "origin": "meraki-connectorRest-handleEndResponse",
      "displayString": "Error 400 received on request",
      "recommendation": "Verify the request is accurate via debug logs and postman",
      "code": 400,
      "raw_response": {
        "status": "success",
        "code": 400,
        "response": {
          "errors": [
            "Name has already been taken"
          ]
        },
        "redirects": 0,
        "tripTime": "325ms"
      }
    },
    "response": {
      "errors": [
        "Name has already been taken"
      ]
    }
  },
  "createNetworkSuccess": null
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.