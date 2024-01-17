import mitt from 'mitt'

const Mitter = mitt
export const emitter: mitt.Emitter = new Mitter()
export default emitter
