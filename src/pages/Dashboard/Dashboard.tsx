import { FunctionComponent, useEffect } from 'react'
import { useSocket } from '../hooks/useSocket'

interface DashboardPageProps {}

const DashboardPage: FunctionComponent<DashboardPageProps> = ({}) => {
  const [messagesSocketEmit] = useSocket('messages', (arg1, arg2) => {
    // Socket on logic
  })

  useEffect(() => {
    messagesSocketEmit('arg1', 'arg2')
  }, [])

  return <h1>Dashboard page</h1>
}

export default DashboardPage
