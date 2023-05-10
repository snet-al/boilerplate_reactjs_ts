import { SocketClient } from '../services/client/socket/socket-client'

import { Message } from '../types/Message'
import { useEffect, useRef } from 'react'

export const useSocket = (event: string, calback?: (...args: Array<any>) => void) => {
  useEffect(() => {
    if (calback) {
      SocketClient.on(event, calback)

      return () => {
        SocketClient.off(event, calback)
      }
    }
  }, [])

  const emitEvent = (...args: Array<any>) => SocketClient.emit(event, ...args)

  return [emitEvent]
}
