import { WorkflowRunner, PrebuiltRunner, ProjectRunner } from '@itential-tools/iap-cypress-testing-library/testRunner/testRunners';
const CreateNetworkMerakiRESTJob3Data = require('../fixtures/stubs/Create Network - Meraki - REST Job3.json');
const ClaimNetworkDevicesMerakiRESTJob4Data = require('../fixtures/stubs/Claim Network Devices - Meraki - REST Job4.json');
const CreateNetworkMerakiRESTJob5Data = require('../fixtures/stubs/Create Network - Meraki - REST Job5.json');
const ClaimNetworkDevicesMerakiRESTJob6Data = require('../fixtures/stubs/Claim Network Devices - Meraki - REST Job6.json');

function initializeWorkflowRunner(workflow, importWorkflow, isStub, stubTasks) {
  let workflowRunner = new WorkflowRunner(workflow.name);

  if (importWorkflow) {
    // cancel all running jobs for workflow
    workflowRunner.job.cancelAllJobs();

    workflowRunner.deleteWorkflow.allCopies({
      failOnStatusCode: false
    });
    // Check if Stub flag is enabled
    if(isStub){
      stubTasks.forEach(stubTask=>{
        workflow = workflowRunner.stub.task({
          stub: stubTask,
          workflow: workflow,
        });
      })
    }
    workflowRunner.importWorkflow.single({
      workflow,
      failOnStatusCode: false
    });
  }

  /* Verify workflow */
  workflowRunner.verifyWorkflow.exists();
  workflowRunner.verifyWorkflow.hasNoDuplicates({});
  // workflowRunner.verifyWorkflow.dependenciesOnline();

  return workflowRunner;
}

// Helper function to find workflow to test from Project
function findWorkflowInProject(workflowName, project) {
  for (const projectComponent of project.components) {
    if (projectComponent.type === 'workflow' && projectComponent.document.name === workflowName) {
      return projectComponent.document;
    }
  }
}

// Function to delete the stubbed workflow and reimport it without the stub tasks
function replaceStubTasks(workflowRunner, workflowName) {
    workflowRunner.deleteWorkflow.allCopies({
        failOnStatusCode: false,
    });
    workflowRunner.importWorkflow.single({ workflow: workflowName });
    workflowRunner.verifyWorkflow.exists();
    workflowRunner.verifyWorkflow.hasNoDuplicates({});
}

describe('Default: Pre-Built Cypress Tests', function () {
  let prebuiltRunner;
  let CreateNetworkandClaimDevicesMerakiExampleJob0Workflow;
  let CreateNetworkandClaimDevicesMerakiExampleJob1Workflow;
  let CreateNetworkandClaimDevicesResetMerakiExampleJob2Workflow;
  let CreateNetworkMerakiRESTJob3Workflow;
  let ClaimNetworkDevicesMerakiRESTJob4Workflow;
  let CreateNetworkMerakiRESTJob5Workflow;
  let ClaimNetworkDevicesMerakiRESTJob6Workflow;
  
  before(function () {
    //creates a Pre-Built runner for importing the Pre-Built
    cy.fixture(`../../../artifact.json`).then((data) => {
      prebuiltRunner = new PrebuiltRunner(data);
    });
    cy.fixture(`../../../bundles/workflows/Create Network - Meraki - REST.json`).then((data) => {
      CreateNetworkMerakiRESTJob3Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Claim Network Devices - Meraki - REST.json`).then((data) => {
      ClaimNetworkDevicesMerakiRESTJob4Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Create Network - Meraki - REST.json`).then((data) => {
      CreateNetworkMerakiRESTJob5Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Claim Network Devices - Meraki - REST.json`).then((data) => {
      ClaimNetworkDevicesMerakiRESTJob6Workflow = data;
    });
    
  });

  after(function() {
    prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
  });

  describe('Default: Imports Pre-Built', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    it('Default: Should import the Pre-Built into IAP', function () {
        prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
        prebuiltRunner.importPrebuilt.single({});
    });
  })

  describe('Create Network - Meraki - REST', function() {
    it('Create Network - Meraki - REST: It should create a new network in Meraki and claim devices without tags', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateNetworkMerakiRESTJob3Workflow, importWorkflow, isStub, CreateNetworkMerakiRESTJob3Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateNetworkMerakiRESTJob3Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateNetworkMerakiRESTJob3Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateNetworkMerakiRESTJob3Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateNetworkMerakiRESTJob3Workflow);
      });
    })
  })

  describe('Claim Network Devices - Meraki - REST', function() {
    it('Claim Network Devices - Meraki - REST: It should create a new network in Meraki and claim devices without tags', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(ClaimNetworkDevicesMerakiRESTJob4Workflow, importWorkflow, isStub, ClaimNetworkDevicesMerakiRESTJob4Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ClaimNetworkDevicesMerakiRESTJob4Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ClaimNetworkDevicesMerakiRESTJob4Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ClaimNetworkDevicesMerakiRESTJob4Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, ClaimNetworkDevicesMerakiRESTJob4Workflow);
      });
    })
  })

  describe('Create Network - Meraki - REST', function() {
    it('Create Network - Meraki - REST: It should create a new network in Meraki and claim devices with tags', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateNetworkMerakiRESTJob5Workflow, importWorkflow, isStub, CreateNetworkMerakiRESTJob5Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateNetworkMerakiRESTJob5Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateNetworkMerakiRESTJob5Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateNetworkMerakiRESTJob5Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateNetworkMerakiRESTJob5Workflow);
      });
    })
  })

  describe('Claim Network Devices - Meraki - REST', function() {
    it('Claim Network Devices - Meraki - REST: It should create a new network in Meraki and claim devices with tags', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(ClaimNetworkDevicesMerakiRESTJob6Workflow, importWorkflow, isStub, ClaimNetworkDevicesMerakiRESTJob6Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ClaimNetworkDevicesMerakiRESTJob6Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ClaimNetworkDevicesMerakiRESTJob6Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ClaimNetworkDevicesMerakiRESTJob6Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, ClaimNetworkDevicesMerakiRESTJob6Workflow);
      });
    })
  })
});

describe('Default: Project Cypress Tests', function () {
  let projectRunner;
  let projectData;

  before(function () {
    // Creates a Project runner for importing the Project
    cy.fixture(`../../../Cisco - Meraki - REST.project.json`).then((data) => {
      projectData = data;
      projectRunner = new ProjectRunner(data);
    });
  });

  after(function() {
    projectRunner.deleteProject.single({ failOnStatusCode: false });
  });

  describe('Default: Imports Project', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    it('Default: Should import the project into IAP', function () {
        projectRunner.deleteProject.single({ failOnStatusCode: false });
        projectRunner.importProject.single({});
        projectRunner.verifyProject.exists();
    });
  })

  describe('Create Network - Meraki - REST', function() {
    it('Create Network - Meraki - REST: It should create a new network in Meraki and claim devices without tags', function () {
      const workflowData = findWorkflowInProject('Create Network - Meraki - REST', projectData);
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(workflowData, importWorkflow, isStub, CreateNetworkMerakiRESTJob3Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateNetworkMerakiRESTJob3Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateNetworkMerakiRESTJob3Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateNetworkMerakiRESTJob3Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, workflowData);
      });
    })
  })

  describe('Claim Network Devices - Meraki - REST', function() {
    it('Claim Network Devices - Meraki - REST: It should create a new network in Meraki and claim devices without tags', function () {
      const workflowData = findWorkflowInProject('Claim Network Devices - Meraki - REST', projectData);
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(workflowData, importWorkflow, isStub, ClaimNetworkDevicesMerakiRESTJob4Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ClaimNetworkDevicesMerakiRESTJob4Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ClaimNetworkDevicesMerakiRESTJob4Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ClaimNetworkDevicesMerakiRESTJob4Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, workflowData);
      });
    })
  })

  describe('Create Network - Meraki - REST', function() {
    it('Create Network - Meraki - REST: It should create a new network in Meraki and claim devices with tags', function () {
      const workflowData = findWorkflowInProject('Create Network - Meraki - REST', projectData);
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(workflowData, importWorkflow, isStub, CreateNetworkMerakiRESTJob5Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateNetworkMerakiRESTJob5Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateNetworkMerakiRESTJob5Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateNetworkMerakiRESTJob5Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, workflowData);
      });
    })
  })

  describe('Claim Network Devices - Meraki - REST', function() {
    it('Claim Network Devices - Meraki - REST: It should create a new network in Meraki and claim devices with tags', function () {
      const workflowData = findWorkflowInProject('Claim Network Devices - Meraki - REST', projectData);
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(workflowData, importWorkflow, isStub, ClaimNetworkDevicesMerakiRESTJob6Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ClaimNetworkDevicesMerakiRESTJob6Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ClaimNetworkDevicesMerakiRESTJob6Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ClaimNetworkDevicesMerakiRESTJob6Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, workflowData);
      });
    })
  })
});
