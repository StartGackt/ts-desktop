import { contextBridge } from 'electron'


// Custom APIs for renderer
if (process.contextIsolated) {
  throw new Error('Preload cannot be used in a renderer context')
}
try{
  contextBridge.exposeInMainWorld(
    'context',{

    })
  }catch(e){
    console.log(e)
  }
