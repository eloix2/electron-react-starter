import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title: string) => ipcRenderer.send("set-title", title),
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  onUpdateCounter: (callback: (value: number) => void) =>
    ipcRenderer.on("update-counter", (_event, value: number) =>
      callback(value),
    ),
  toggleDarkMode: () => {
    ipcRenderer.send('toggle-dark-mode');
  },
  onToggleLightMode: (callback: (arg: any) => void) => {
    ipcRenderer.on('toggle-light-mode', (event, arg) => callback(arg));
  },
  onToggleDarkMode: (callback: (arg: any) => void) => {
    ipcRenderer.on('toggle-dark-mode', (event, arg) => callback(arg));
  },
});
