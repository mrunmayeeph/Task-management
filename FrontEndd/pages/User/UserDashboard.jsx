import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

const UserDashboard = () => {
  useUserAuth();
  return (
    <div>
      Userdashboard
    </div>
  )
}

export default UserDashboard
