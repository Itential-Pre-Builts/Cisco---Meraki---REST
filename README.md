# Cisco - Meraki - REST

## Overview

The integration of Itential and the Cisco Meraki solution enables network teams to utilize its REST API to build automations that can include common tasks for provisioning and device management. This is a library of related automations that can be used as modular components in your own larger, end-to-end workflows.


## Workflows


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Overview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/cisco-meraki-rest/-/blob/release/2023.2/documentation/Create Network - Meraki - REST.md' target='_blank'>Create Network - Meraki - REST</a></td>
      <td>This is a modular workflow that automates the creation of a new network.</td>
    </tr>    <tr>
      <td><a href='https://gitlab.com/itentialopensource/pre-built-automations/cisco-meraki-rest/-/blob/release/2023.2/documentation/Claim Network Devices - Meraki - REST.md' target='_blank'>Claim Network Devices - Meraki - REST</a></td>
      <td>This is a modular workflow that automates the process of claiming a new network device.</td>
    </tr>
  </tbody>
</table>


## External Dependencies

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

## Adapters

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