// The contextBridge is allows you to define APIs which the renderer process can access
const { contextBridge, ipcRenderer } = require("electron");

// Only exposes pre-approved APIs for controlled and secure communication
contextBridge.exposeInMainWorld("api", {
  setMasterPass: (masterPass) =>
    ipcRenderer.send("set-master-password", masterPass),
  checkMasterPass: (masterPass) =>
    ipcRenderer.invoke("check-master-password", masterPass),
  createNewRecord: (formData) =>
    ipcRenderer.send("create-new-record", formData),
  getRecords: () => ipcRenderer.invoke("get-records"),
  getRecord: (_id) => ipcRenderer.invoke("get-record", _id),
  createNewFolder: (folder) => ipcRenderer.send("create-new-folder", folder),
  deleteFolder: (folder) => ipcRenderer.send("delete-folder", folder),
  getFolders: () => ipcRenderer.invoke("get-folders"),
  getRecordsInFolder: (folderName) =>
    ipcRenderer.invoke("get-records-in-folder", folderName),
  getStarredRecords: () => ipcRenderer.invoke("get-starred-records"),
  updateRecord: (record, createNewCipher) =>
    ipcRenderer.send("update-record", record, createNewCipher),
  deleteRecord: (record) => ipcRenderer.send("delete-record", record),
  closeWindow: () => ipcRenderer.send("close-window"),
});
