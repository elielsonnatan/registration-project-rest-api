module.exports = (app) => {
  const getListPatientsRecords = (req, res) => {
    const listPatients = [
      {
        id: 1,
        name: "oi",
      },
    ];

    return res.json(listPatients);
  };

  const getPatientRecordById = (req, res) => {
    const record = [
      {
        patient: "id",
      },
    ];

    return res.json(record);
  };

  const setNewPatientRecord = (req, res) => {
    return res.json({ oi: "oiiiiiiiiiii" });
  };

  const editRecord = (req, res) => {
    return res.json({ oi: "edit" });
  };

  const deleteRecord = (req, res) => {
    return res.json({ oi: "edit" });
  };

  return {
    getListPatientsRecords,
    getPatientRecordById,
    setNewPatientRecord,
    editRecord,
    deleteRecord,
  };
};
