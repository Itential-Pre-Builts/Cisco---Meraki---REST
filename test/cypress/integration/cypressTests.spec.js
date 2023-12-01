import { WorkflowRunner, PrebuiltRunner } from '@itential-tools/iap-cypress-testing-library/testRunner/testRunners';
const CreateNetworkMerakiRESTJob0Data = require('../fixtures/stubs/Create Network - Meraki - REST Job0.json');
const ClaimNetworkDevicesMerakiRESTJob1Data = require('../fixtures/stubs/Claim Network Devices - Meraki - REST Job1.json');

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

// Function to delete the stubbed workflow and reimport it without the stub tasks
function replaceStubTasks(workflowRunner, workflowName) {
    workflowRunner.deleteWorkflow.allCopies({
        failOnStatusCode: false,
    });
    workflowRunner.importWorkflow.single({ workflow: workflowName });
    workflowRunner.verifyWorkflow.exists();
    workflowRunner.verifyWorkflow.hasNoDuplicates({});
}

describe('Default: Cypress Tests', function () {
  let prebuiltRunner;
  let CreateNetworkMerakiRESTJob0Workflow;
  let ClaimNetworkDevicesMerakiRESTJob1Workflow;
  
  before(function () {
    //creates a prebuilt runner for importing the project
    cy.fixture(`../../../artifact.json`).then((data) => {
      prebuiltRunner = new PrebuiltRunner(data);
    });
    cy.fixture(`../../../bundles/workflows/Create Network - Meraki - REST.json`).then((data) => {
      CreateNetworkMerakiRESTJob0Workflow = data;
    });
    cy.fixture(`../../../bundles/workflows/Claim Network Devices - Meraki - REST.json`).then((data) => {
      ClaimNetworkDevicesMerakiRESTJob1Workflow = data;
    });
    
  });

  after(function() {
    prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
  });

  describe('Default: Imports Project', function () {
    // eslint-disable-next-line mocha/no-hooks-for-single-case
    it('Default: Should import the project into IAP', function () {
        prebuiltRunner.deletePrebuilt.single({ failOnStatusCode: false });
        prebuiltRunner.importPrebuilt.single({});
    });
  })

  describe('Create Network - Meraki - REST', function() {
    it('It should create a new network in Meraki', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(CreateNetworkMerakiRESTJob0Workflow, importWorkflow, isStub, CreateNetworkMerakiRESTJob0Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: CreateNetworkMerakiRESTJob0Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(CreateNetworkMerakiRESTJob0Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(CreateNetworkMerakiRESTJob0Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, CreateNetworkMerakiRESTJob0Workflow);
      });
    })
  })

  describe('Claim Network Devices - Meraki - REST', function() {
    it('It should claim a device in Meraki', function () {
      const importWorkflow = true;
      const isStub = true;
      // create the job runner so it can be used in future tests
      const workflowRunner = initializeWorkflowRunner(ClaimNetworkDevicesMerakiRESTJob1Workflow, importWorkflow, isStub, ClaimNetworkDevicesMerakiRESTJob1Data.stubTasks);
      // this has to be customized to each IAP version.

      workflowRunner.job.startAndReturnResultsWhenComplete({
        options: ClaimNetworkDevicesMerakiRESTJob1Data.input,
        retryTime: 2000,
      }).then((jobVariableResults) => {
        expect(jobVariableResults['status']).eql(ClaimNetworkDevicesMerakiRESTJob1Data.expectedTaskResults.status);
        workflowRunner.job.getJobVariables(jobVariableResults._id).then(jobVariables => {
          delete jobVariables._id;
          delete jobVariables.initiator;
          expect(jobVariables).eql(ClaimNetworkDevicesMerakiRESTJob1Data.expectedTaskResults.variables);
        });
        /* Restore the workflow without the stub tasks */
        replaceStubTasks(workflowRunner, ClaimNetworkDevicesMerakiRESTJob1Workflow);
      });
    })
  })
});
