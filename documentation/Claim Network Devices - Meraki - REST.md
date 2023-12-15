# Claim Network Devices - Meraki - REST

## Table of Contents

- [Claim Network Devices - Meraki - REST](#claim-network-devices---meraki---rest)
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

This is a modular workflow that automates the process of claiming a new network device.

Capabilities include:
- The workflow is used to claim a device into a network


## Getting Started

### Supported IAP Versions

Itential Workflow Projects are built and tested on particular versions of IAP. In addition, Workflow Projects are often dependent on external systems and as such, these Workflow Projects will have dependencies on these other systems. This version of **Claim Network Devices - Meraki - REST** has been tested with:


- IAP **2023.1**



### External Dependencies

This version of **Claim Network Devices - Meraki - REST** has been tested with:

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

This version of **Claim Network Devices - Meraki - REST** has been tested with:

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
      <td>Claim Network Devices - Meraki - REST</td>
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
      <td>networkId</td>
      <td>string</td>
      <td>yes</td>
      <td>The network ID to use for claiming devices</td>
      <td><pre lang="json">L_427115228141788519</pre></td>
    </tr>    <tr>
      <td>adapterId</td>
      <td>string</td>
      <td>yes</td>
      <td>The Meraki adapter instance to use in the job</td>
      <td><pre lang="json">Meraki</pre></td>
    </tr>    <tr>
      <td>serials</td>
      <td>array</td>
      <td>yes</td>
      <td>The list of devices to claim as denoted by serial number</td>
      <td><pre lang="json">[
  "A1B2-C3D4-E4F5",
  "1111-2222-3333"
]</pre></td>
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
      <td>claimNetworkDevicesResult</td>
      <td>object</td>
      <td>Result of successfully claiming devices to network</td>
      <td><pre lang="json">{
  "icode": "AD.200",
  "response": ""
}</pre></td>
    </tr>    <tr>
      <td>claimNetworkDevicesError</td>
      <td>object</td>
      <td>Result if failure claiming devices to network</td>
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
          "Device with serial  not found"
        ]
      },
      "redirects": 0,
      "tripTime": "2649ms"
    }
  },
  "response": {
    "errors": [
      "Device with serial  not found"
    ]
  }
}</pre></td>
    </tr>
  </tbody>
</table>

  
#### Query Output
    

No object to query upon success

    
    
The following items show how to query failure results from the output:

      
##### Error Response Message

`claimNetworkDevicesError.response.errors[0]`

      
    
  


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
      <td><a href="https://developer.cisco.com/meraki/api-v1/claim-network-devices/">Claim Network Devices - Meraki</a></td>
      <td>Meraki API documentation for claiming network devices</td>
    </tr>
  </tbody>
</table>



### Example Inputs and Outputs

  
#### Example 1

    
Input:
<pre>{
  "networkId": "L_427115228141788519",
  "adapterId": "Meraki",
  "serials": ["A1B2-C3D4-E4F5",  "1111-2222-3333"]
} </pre>

    
    
Output:
<pre>{   
  "icode": "AD.200", 
  "response": "" 
} </pre>

    
  
#### Example 2

    
Input:
<pre>{
  "networkId": "L_427115228141788519",
  "adapterId": "Meraki",
  "serials": ["4444-5555-6666"]
} </pre>

    
    
Output:
<pre>{
  "claimNetworkDevicesError": {
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
            "Device with serial not found"
          ]
        },
        "redirects": 0,
        "tripTime": "2649ms"
      }
    },
    "response": {
      "errors": [
        "Device with serial not found"
      ]
    }
  },
  "claimNetworkDevicesResult": null
} </pre>

    
  


## Support

Please use your Itential Customer Success account if you need support when using this Workflow Project.