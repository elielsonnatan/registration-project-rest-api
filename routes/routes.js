module.exports = (app) => {
  app
    .route("/list-records")
    .get(app.api.registration.getListPatientsRecords);

  app
    .route("/patient-record/:uuid")
    .get(app.api.registration.getPatientRecordById);

  app
    .route("/new-record")
    .post(app.api.registration.setNewPatientRecord);

  app
    .route("/edit-record/:uuid")
    .post(app.api.registration.editRecord);

  app
    .route("/delete-record/:uuid")
    .delete(app.api.registration.deleteRecord);
};
